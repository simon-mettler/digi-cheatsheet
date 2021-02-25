function calc_ppi() {
	var originalCmWidth = document.getElementById("original-cm-width").value;
	var originalCmHeight = document.getElementById("original-cm-height").value;

	var originalZollWidth = toInch(originalCmWidth);
	var originalZollHeight= toInch(originalCmHeight);

	var originalOutputCm2 = flaeche(originalCmWidth, originalCmHeight);
	var originalOutputZoll2 = flaeche(originalZollWidth,originalZollHeight);

	var digiCmWidth = document.getElementById("digi-cm-width").value;

	var digiDpi = document.getElementById("digi-dpi").value;
	var digiFarb = document.getElementById("digi-farb").value;

	var ergScale = digiCmWidth / originalCmWidth;  
	var ergAbsolutWidth = toInch(digiCmWidth * digiDpi); 

	var digiCmHeight = originalCmHeight * ergScale;
	var digiOutputCm2 = digiCmWidth * digiCmHeight;
	var ergAbsolutHeight = toInch(digiCmHeight * digiDpi); 

	var ergMegapixel = ergAbsolutWidth * ergAbsolutHeight / 1024 / 1024;
	var ergDatenmenge = ergMegapixel * digiFarb / 8;
	var ergAbtastrate = ergAbsolutWidth / originalZollWidth;
	var ergAufl = digiDpi * 2.54;

	document.getElementById("original-output-cm2").innerHTML = roundTo(originalOutputCm2, 2) + " cm<sup>2</sup>";
	document.getElementById("original-output-zoll2").innerHTML = roundTo(originalOutputZoll2, 2) + " zoll<sup>2</sup>";
	document.getElementById("digi-output-cm2").innerHTML = roundTo(digiOutputCm2, 2) + " cm<sup>2</sup>";
	document.getElementById("original-zoll-width").innerHTML = roundTo(originalZollWidth, 2);
	document.getElementById("original-zoll-height").innerHTML = roundTo(originalZollHeight, 2);

	document.getElementById("erg-scale").innerHTML = roundTo(ergScale, 2);
	document.getElementById("erg-absolut-width").innerHTML = roundTo(ergAbsolutWidth, 0);
	document.getElementById("erg-absolut-height").innerHTML = roundTo(ergAbsolutHeight, 0);
	document.getElementById("erg-abtastrate").innerHTML = roundTo(ergAbtastrate, 0) + " ppi";
	document.getElementById("erg-aufl").innerHTML = roundTo(ergAufl, 2) + " lpi";
	document.getElementById("erg-megapixel").innerHTML = roundTo(ergMegapixel, 2) + " MP";
	document.getElementById("erg-datenmenge").innerHTML = roundTo(ergDatenmenge, 2) + " MB";

	document.getElementById("digi-cm-height").innerHTML = roundTo(digiCmHeight, 2);
}

function roundTo(n, digits) {
	if (digits === undefined) {	digits = 0;	}
	var multiplicator = Math.pow(10, digits);
	n = parseFloat((n * multiplicator).toFixed(11));
	return Math.round(n) / multiplicator;
}

function toInch(cm) {
	return cm / 2.54;
}

function flaeche(x, y) {
	return x * y;
}

