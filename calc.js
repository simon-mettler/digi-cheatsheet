function calc_ppi() {

	let width = get("ppi_width");
	let height = get("ppi_height");

	let widthZoll = toInch(width);
	let heightZoll= toInch(height);

	let cm2 = flaeche(width, height);
	let zoll2 = flaeche(widthZoll,heightZoll);

	let zielWidth = get("ppi_ziel-width");

	let zielDpi = get("ppi_ziel-dpi");
	let zielFarb = get("ppi_ziel-farb");

	let scale = zielWidth / width;  
	let ergWidth = toInch(zielWidth * zielDpi); 

	let zielHeight = height * scale;
	let zielCm2 = zielWidth * zielHeight;
	let ergHeight = toInch(zielHeight * zielDpi); 

	let ergMegapixel = ergWidth * ergHeight / 1024 / 1024;
	let ergDatenmenge = ergMegapixel * zielFarb / 8;
	let ergAbtastrate = ergWidth / widthZoll;
	let ergAufl = zielDpi * 2.54;

	set("ppi_cm2", roundTo(cm2, 2) + " cm<sup>2</sup>");
	set("ppi_zoll2", roundTo(zoll2, 2) + " zoll<sup>2</sup>");
	set("ppi_ziel-cm2", roundTo(zielCm2, 2) + " cm<sup>2</sup>");
	set("ppi_width-zoll", roundTo(widthZoll, 2));
	set("ppi_height-zoll", roundTo(heightZoll, 2));

	set("ppi_scale", roundTo(scale, 2));
	set("ppi_erg-width", roundTo(ergWidth, 0));
	set("ppi_erg-height", roundTo(ergHeight, 0));
	set("ppi_abtastrate", roundTo(ergAbtastrate, 0) + " ppi");
	set("ppi_aufl", roundTo(ergAufl, 2) + " lpi");
	set("ppi_megapixel", roundTo(ergMegapixel, 2) + " MP");
	set("ppi_datenmenge", roundTo(ergDatenmenge, 2) + " MB");
	set("ppi_ziel-height", roundTo(zielHeight, 2));

}

function calc_dg1() {

	let width = get("dg1_width");
	let height = get("dg1_height");
	let farbtiefe = get("dg1_farbtiefe");

	let megapixel = flaeche(width, height) / 1000000;
	let datenmenge = flaeche(width, height) * farbtiefe / 8 / 1024 / 1024;

	set("dg1_mp", roundTo(megapixel, 2) + " MP");
	set("dg1_mb", roundTo(datenmenge, 2) + " MB");

}

function calc_dg2() {

	let ppi = get("dg2_ppi");
	let farbtiefe = get("dg2_farbtiefe");

	let width = toInch(get("dg2_width")) * ppi;
	let height = toInch(get("dg2_height")) * ppi;

	let megapixel = flaeche(width, height) / 1000000;
	let datenmenge = flaeche(width, height) * farbtiefe / 8 / 1024 / 1024;

	set("dg2_mp", roundTo(megapixel, 2) + " MP");
	set("dg2_mb", roundTo(datenmenge, 2) + " MB");

}

function roundTo(n, digits) {
	if (digits === undefined) {	digits = 0;	}
	let multiplicator = Math.pow(10, digits);
	n = parseFloat((n * multiplicator).toFixed(11));
	return Math.round(n) / multiplicator;
}

function toInch(cm) {
	return cm / 2.54;
}

function flaeche(x, y) {
	return x * y;
}

function get(id) {
	return document.getElementById(id).value;
}

function set(id, data) {
	document.getElementById(id).innerHTML = data;
}
