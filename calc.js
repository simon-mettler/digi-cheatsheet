function calc_disp() {

	let width = get("disp_width");
	let height = get("disp_height");

	let widthZoll = toInch(width);
	let heightZoll= toInch(height);

	let cm2 = flaeche(width, height);
	let zoll2 = flaeche(widthZoll,heightZoll);

	let zielWidth = get("disp_ziel-width");

	let zielFarb = get("disp_ziel-farb");

	let scale = zielWidth / width;  

	let zielHeight = height * scale;

	let ergMegapixel = zielWidth * zielHeight / 1024 / 1024;
	let ergDatenmenge = ergMegapixel * zielFarb / 8;
	let ergAbtastrate = zielWidth / widthZoll;

	set("disp_cm2", roundTo(cm2, 2) + " cm<sup>2</sup>");
	set("disp_zoll2", roundTo(zoll2, 2) + " zoll<sup>2</sup>");
	set("disp_width-zoll", roundTo(widthZoll, 2));
	set("disp_height-zoll", roundTo(heightZoll, 2));

	set("disp_abtastrate", roundTo(ergAbtastrate, 0) + " ppi");
	set("disp_megapixel", roundTo(ergMegapixel, 2) + " MP");
	set("disp_datenmenge", roundTo(ergDatenmenge, 2) + " MB");
	set("disp_ziel-height", roundTo(zielHeight, 0));

}

function calc_off() {

	let width = get("off_width");
	let height = get("off_height");

	let widthZoll = toInch(width);
	let heightZoll= toInch(height);

	let cm2 = flaeche(width, height);
	let zoll2 = flaeche(widthZoll,heightZoll);

	let zielWidth = get("off_ziel-width");

	let zielLcm = get("off_ziel-lcm");
	let zielFarb = get("off_ziel-farb");
	let zielQf= get("off_ziel-qf");

	let scale = zielWidth / width;  

	let zielHeight = height * scale;
	let zielCm2 = zielWidth * zielHeight;

	let ergAufl = zielLcm * 2.54;
	let ergAbtastrate = scale * zielQf * ergAufl;
	let ergWidth = widthZoll * ergAbtastrate; 
	let ergHeight = heightZoll * ergAbtastrate;
	let ergMegapixel = ergWidth * ergHeight / 1024 / 1024;
	let ergDatenmenge = ergMegapixel * zielFarb / 8;

	set("off_cm2", roundTo(cm2, 2) + " cm<sup>2</sup>");
	set("off_zoll2", roundTo(zoll2, 2) + " zoll<sup>2</sup>");
	set("off_ziel-cm2", roundTo(zielCm2, 2) + " cm<sup>2</sup>");
	set("off_width-zoll", roundTo(widthZoll, 2));
	set("off_height-zoll", roundTo(heightZoll, 2));

	set("off_scale", roundTo(scale, 2));
	set("off_erg-width", roundTo(ergWidth, 0));
	set("off_erg-height", roundTo(ergHeight, 0));
	set("off_abtastrate", roundTo(ergAbtastrate, 0) + " ppi");
	set("off_aufl", roundTo(ergAufl, 0) + " lpi");
	set("off_megapixel", roundTo(ergMegapixel, 2) + " MP");
	set("off_datenmenge", roundTo(ergDatenmenge, 2) + " MB");
	set("off_ziel-height", roundTo(zielHeight, 2));

}

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

function calc_dia() {

	let width = get("dia_width");
	let height = get("dia_height");

	let widthZoll = toInch(width);
	let heightZoll= toInch(height);

	let aufl = get("dia_aufl");

	let cm2 = flaeche(width, height);
	let zoll2 = flaeche(widthZoll,heightZoll);

	let zielFarb = get("dia_ziel-farb");

	let ergWidth = width * aufl * 10; 
	let ergHeight = height * aufl * 10;

	let ergMegapixel = ergWidth * ergHeight / 1024 / 1024;
	let ergDatenmenge = ergMegapixel * zielFarb / 8;
	let ergAbtastrate = ergWidth / widthZoll;

	set("dia_cm2", roundTo(cm2, 2) + " cm<sup>2</sup>");
	set("dia_zoll2", roundTo(zoll2, 2) + " zoll<sup>2</sup>");
	set("dia_width-zoll", roundTo(widthZoll, 2));
	set("dia_height-zoll", roundTo(heightZoll, 2));

	set("dia_erg-width", roundTo(ergWidth, 0));
	set("dia_erg-height", roundTo(ergHeight, 0));
	set("dia_abtastrate", roundTo(ergAbtastrate, 0) + " ppi");
	set("dia_megapixel", roundTo(ergMegapixel, 2) + " MP");
	set("dia_datenmenge", roundTo(ergDatenmenge, 2) + " MB");

}

function calc_dfg() {

	let width = get("dfg_width");
	let height = get("dfg_height");

	let widthZoll = toInch(width);
	let heightZoll= toInch(height);

	let aufl = get("dfg_aufl");

	let cm2 = flaeche(width, height);
	let zoll2 = flaeche(widthZoll,heightZoll);

	let zielFarb = get("dfg_ziel-farb");

	let ergWidth = width * aufl * 10 * 2; 
	let ergHeight = height * aufl * 10 * 2;

	let ergMegapixel = ergWidth * ergHeight / 1024 / 1024;
	let ergDatenmenge = ergMegapixel * zielFarb / 8;
	let ergAbtastrate = ergWidth / widthZoll;

	set("dfg_cm2", roundTo(cm2, 2) + " cm<sup>2</sup>");
	set("dfg_zoll2", roundTo(zoll2, 2) + " zoll<sup>2</sup>");
	set("dfg_width-zoll", roundTo(widthZoll, 2));
	set("dfg_height-zoll", roundTo(heightZoll, 2));

	set("dfg_erg-width", roundTo(ergWidth, 0));
	set("dfg_erg-height", roundTo(ergHeight, 0));
	set("dfg_abtastrate", roundTo(ergAbtastrate, 0) + " ppi");
	set("dfg_megapixel", roundTo(ergMegapixel, 2) + " MP");
	set("dfg_datenmenge", roundTo(ergDatenmenge, 2) + " MB");

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
