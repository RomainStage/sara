PDFDocument = require('pdfkit');
var fs = require ("fs");
doc = new PDFDocument();
doc.x = 20;
doc.y = 5;


pdf = function(paquets){
var a = fs.createWriteStream('./file.pdf');
doc.pipe(a);
// doc.pipe res;
// doc.addPage({margin: 5, top: 5, bottom: 5, left: 5, right: 5});
doc.image('./test.JPEG', 0, 0);
text = "     		Bonjour M "+paquets.nom+" avec un capital de "+ paquets.capital +" et un fort potentiel de developpement "+ 
"Votre Société réunit toutes les conditions pour beneficier d'une augmentation du capital. Si cela s'inscrit dans une demarche strategique,"+
"n'esirez pas a nous contacter pour plus d'informations.";
text2 = "CIIB  financement des entreprises à fort potentiel de croissance";
doc.fontSize(15).text(text, 70, 280);
doc.moveDown(15);
// doc.text(text, 70, 280);
// doc.text(text2); 
// width= -100,
// align= 'left';
doc.image('./signature.JPEG', 100, 450).text(text2);
doc.end();
}
var paquets = {};
paquets.nom = "Le Marchand";
paquets.capital = "30.000.00";
pdf(paquets);