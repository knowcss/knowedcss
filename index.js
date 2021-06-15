/*!
 * write <https://github.com/knowcss/knowedcss>
 *
 * Copyright (c) 2021 Jeremy Anderson.
 * Released under the MIT License.
 */

'use strict';



/**
 * ```js
 * var knowedCSS = require('knowedcss');
 * var cssHTML = knowedCSS('html');
 * // returns an array of [updated html, new css]
 * ```
 *
 * @name writeFile
 * @param  {String} `html` html with KnowCSS markup
 * @api public
 */

/*jshint esversion: 6 */

var cssVars = {};

var hexColors = {
	"pink": "ffc0cb",
	"lightpink": "ffb6c1",
	"palevioletred": "db7093",
	"hotpink": "ff69b4",
	"deeppink": "ff1493",
	"mediumvioletred": "c71585",
	"lavender": "e6e6fa",
	"thistle": "d8bfd8",
	"plum": "dda0dd",
	"orchid": "da70d6",
	"violet": "ee82ee",
	"fuchsia": "ff00ff",
	"magenta": "ff00ff",
	"mediumorchid": "ba55d3",
	"darkorchid": "9932cc",
	"darkviolet": "9400d3",
	"blueviolet": "8a2be2",
	"darkmagenta": "8b008b",
	"purple": "800080",
	"mediumpurple": "9370db",
	"mediumslateblue": "7b68ee",
	"slateblue": "6a5acd",
	"darkslateblue": "483d8b",
	"rebeccapurple": "663399",
	"indigo ": "4b0082",
	"lightsalmon": "ffa07a",
	"salmon": "fa8072",
	"darksalmon": "e9967a",
	"lightcoral": "f08080",
	"indianred ": "cd5c5c",
	"crimson": "dc143c",
	"red": "ff0000",
	"firebrick": "b22222",
	"darkred": "8b0000",
	"orange": "ffa500",
	"darkorange": "ff8c00",
	"coral": "ff7f50",
	"tomato": "ff6347",
	"orangered": "ff4500",
	"gold": "ffd700",
	"yellow": "ffff00",
	"lightyellow": "ffffe0",
	"lemonchiffon": "fffacd",
	"lightgoldenrodyellow": "fafad2",
	"papayawhip": "ffefd5",
	"moccasin": "ffe4b5",
	"peachpuff": "ffdab9",
	"palegoldenrod": "eee8aa",
	"khaki": "f0e68c",
	"darkkhaki": "bdb76b",
	"greenyellow": "adff2f",
	"chartreuse": "7fff00",
	"lawngreen": "7cfc00",
	"lime": "00ff00",
	"limegreen": "32cd32",
	"palegreen": "98fb98",
	"lightgreen": "90ee90",
	"mediumspringgreen": "00fa9a",
	"springgreen": "00ff7f",
	"mediumseagreen": "3cb371",
	"seagreen": "2e8b57",
	"forestgreen": "228b22",
	"green": "008000",
	"darkgreen": "006400",
	"yellowgreen": "9acd32",
	"olivedrab": "6b8e23",
	"darkolivegreen": "556b2f",
	"mediumaquamarine": "66cdaa",
	"darkseagreen": "8fbc8f",
	"lightseagreen": "20b2aa",
	"darkcyan": "008b8b",
	"teal": "008080",
	"aqua": "00ffff",
	"cyan": "00ffff",
	"lightcyan": "e0ffff",
	"paleturquoise": "afeeee",
	"aquamarine": "7fffd4",
	"turquoise": "40e0d0",
	"mediumturquoise": "48d1cc",
	"darkturquoise": "00ced1",
	"cadetblue": "5f9ea0",
	"steelblue": "4682b4",
	"lightsteelblue": "b0c4de",
	"lightblue": "add8e6",
	"powderblue": "b0e0e6",
	"lightskyblue": "87cefa",
	"skyblue": "87ceeb",
	"cornflowerblue": "6495ed",
	"deepskyblue": "00bfff",
	"dodgerblue": "1e90ff",
	"royalblue": "4169e1",
	"blue": "0000ff",
	"mediumblue": "0000cd",
	"darkblue": "00008b",
	"navy": "000080",
	"midnightblue": "191970",
	"cornsilk": "fff8dc",
	"blanchedalmond": "ffebcd",
	"bisque": "ffe4c4",
	"navajowhite": "ffdead",
	"wheat": "f5deb3",
	"burlywood": "deb887",
	"tan": "d2b48c",
	"rosybrown": "bc8f8f",
	"sandybrown": "f4a460",
	"goldenrod": "daa520",
	"darkgoldenrod": "b8860b",
	"peru": "cd853f",
	"chocolate": "d2691e",
	"olive": "808000",
	"saddlebrown": "8b4513",
	"sienna": "a0522d",
	"brown": "a52a2a",
	"maroon": "800000",
	"white": "ffffff",
	"snow": "fffafa",
	"honeydew": "f0fff0",
	"mintcream": "f5fffa",
	"azure": "f0ffff",
	"aliceblue": "f0f8ff",
	"ghostwhite": "f8f8ff",
	"whitesmoke": "f5f5f5",
	"seashell": "fff5ee",
	"beige": "f5f5dc",
	"oldlace": "fdf5e6",
	"floralwhite": "fffaf0",
	"ivory": "fffff0",
	"antiquewhite": "faebd7",
	"linen": "faf0e6",
	"lavenderblush": "fff0f5",
	"mistyrose": "ffe4e1",
	"gainsboro": "dcdcdc",
	"lightgray": "d3d3d3",
	"silver": "c0c0c0",
	"darkgray": "a9a9a9",
	"dimgray": "696969",
	"gray": "808080",
	"lightslategray": "778899",
	"slategray": "708090",
	"darkslategray": "2f4f4f",
	"black": "000000"
};

var knownResponsive = {
	"xxsm": ["1", "479"],
	"xsm": ["480", "639"],
	"sm": ["640", "767"],
	"md": ["768", "1023"],
	"lg": ["1024", "1535"],
	"xl": ["1536", "1919"],
	"xxl": ["1920", "9999"],
	"1": ["1", "479"],
	"480": ["480", "639"],
	"640": ["640", "767"],
	"768": ["768", "1023"],
	"1024": ["1024", "1535"],
	"1536": ["1536", "1919"],
	"1920": ["1920", "9999"],
	"print": ["0", "99999"]
};

var knownCSS = {
	"nowrap": "white-space-nowrap",
	"italic": "font-style-italic",
	
	"bg": "background-color",
	"bg-color": "background-color",
	"back": "background-color",

	"light": "font-weight-300",
	"normal": "font-weight-400",
	"medium": "font-weight-500",
	"semibold": "font-weight-600",
	"bold": "font-weight-700",

	"hidden": "visibility-hidden",
	"visible": "visibility-visible",
	"none": "display-none",
	"block": "display-block",
	"inline": "display-inline",
	"inline-block": "display-inline-block",

	"center": "margin-0/auto",
	"aligncenter": "text-align-center",
	"aligntop": "vertical-align-top",
	"alignmiddle": "vertical-align-middle",
	"alignbottom": "vertical-align-bottom",

	"underline": "text-decoration-underline",
	"nounderline": "text-decoration-none",

	"table": "display-table",
	"collapse": "border-collapse-collapse",
	"separate": "border-collapse-separate",

	"row": "display-table-row",
	"cell": "display-table-cell",

	"full": "width-pct100",
	"half": "width-pct50"
};

var knownIDS = {};
var sameCSS = {};
var customCSS = {};
var groupCSS = {};
var responsiveCSS = {};
var fixedCSS = {};
var prevClasses = {};
var originalCSS = {};
function hiwindTabs(tB) {
	var tA = null;
	if (tB.length > 0) { tA = tB; }
	else { tA = document.getElementsByTagName('textarea'); }
	for (var i=0; i<tA.length; i++) {
		tA[i].onkeydown = function(e) {
			if ((e.keyCode==9) || (e.which==9)) {
				e.preventDefault();
				var s = this.selectionStart;
				this.value = this.value.substring(0,this.selectionStart) + "\t" + this.value.substring(this.selectionEnd);
				this.selectionEnd = s+1;
			}
		};
	}
}
function hiwindEditor (hL) {
	var hA = hiwindLayer(hL);
	if (hA) {
		var hW = window.open("", "KnowCSS Editor", "toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=yes,width=600,height=" + screen.height + ",top=0,left="+(screen.width-600));
		var hE = (hL in originalCSS) ? originalCSS[hL] : hL.innerText;
		hE = htmlEntities(hE.toString().replace(/\n\t/gi, '\n'));		
		hW.document.body.innerHTML = '<style>body{padding:0px;margin:0px;height:100%;width:100%;}textarea{box-sizing:border-box;font-family:verdana;font-size:12px;border:0px;padding:3px}</style><textarea style="width:100%; height:100%;" onKeyUp="window.opener.hiwindApply(this, \'' + hL + '\'); return true;" onkeydown="e=event; if ((e.keyCode==9) || (e.which==9)) { e.preventDefault(); var s = this.selectionStart; this.value = this.value.substring(0,this.selectionStart) + \'\\t\' + this.value.substring(this.selectionEnd); this.selectionEnd = s+1; }">' + hE + '</textarea>';
		//var hP = window.open("", "KnowCSS Preview", "toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=yes,width=" + (screen.width-600) + ",height=" + screen.height + ",top=0,left=0");
		//var hM = document.documentElement.innerHTML;
		//hP.document.documentElement.innerHTML = hM;
	}
}
function hiwindID (hL) {
	var letters = "abcdefghijklmnopqrstuvwxyz";
	var prefixID = letters[Math.floor(Math.random() * letters.length)];
	var newID = prefixID + Math.random().toString(36).substr(2, hL);
	if (newID in knownIDS) { newID = hiwindID(hL); }
	else { knownIDS[newID] = true; }
	return newID;
}
function hiwindToHex (sC) {
	var sH = sC.toString(16);
	return (sH.length == 1) ? "0" + sH : sH;
}
function hiwindShade (sC, sP) {
	var sA = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(sC);
	var sB = [parseInt(sA[1], 16), parseInt(sA[2], 16), parseInt(sA[3], 16)];
	var sD = sP/100;
	sB[0] = Math.ceil(sB[0] * sD);
	sB[1] = Math.ceil(sB[1] * sD);
	sB[2] = Math.ceil(sB[2] * sD);
	return hiwindToHex(sB[0]) + hiwindToHex(sB[1]) + hiwindToHex(sB[2]);
}
function hiwindHex (hA) {
	var zY = '', hB = [], hC = hA;
	var zC = new RegExp('^([a-fA-F0-9]{6})$','i');
	while ((zY = zC.exec(hC)) !== null) {
		hB = zY[1].split('');
		if ((hB[0] == hB[1]) && (hB[2] == hB[3]) && (hB[4] == hB[5])) { hA = hB[0] + hB[2] + hB[4]; }
		break;
	}
	return hA;
}
function hiwindLayer (eA) {
	return document.getElementById(eA);
}
function hiwindEdit (eA, eB) {
	hiwindLayer(eB).value = hiwindLayer(eA).innerHTML;
}
function hiwindExample (eA, eB) {
	hiwindLayer(eB).innerText = hiwindLayer(eA).innerHTML.trim();
}
function htmlEntities (eA) {
	return eA.toString().toString().replace(/&/g, '&amp;').toString().replace(/</g, '&lt;').toString().replace(/>/g, '&gt;').toString().replace(/"/g, '&quot;').toString();
}
function hiwindClass (hA) {
	var hU = '', jF = '';
	if (hA.indexOf('-webkit-') > -1) { hA = hA.toString().replace('-webkit-', 'webkit-'); hU = '-'; }
	else if (hA.indexOf('-moz-') > -1) { hA = hA.toString().replace('-moz-', 'moz-'); hU = '-'; }
	else if (hA.indexOf('-ms-') > -1) { hA = hA.toString().replace('-ms-', 'ms-'); hU = '-'; }
	else if (hA.indexOf('-o-') > -1) { hA = hA.toString().replace('-o-', 'o-'); hU = '-'; }
	if (hA.indexOf('-pct-') > -1) { hA = hA.toString().replace('-pct-', '-') + '%'; }
	else if (hA.indexOf('-pct') > -1) { hA = hA.toString().replace('-pct', '-') + '%'; }
	if (hA.indexOf('-percent-') > -1) { hA = hA.toString().replace('-percent-', '-') + '%'; }
	else if (hA.indexOf('-percent') > -1) { hA = hA.toString().replace('-percent', '-') + '%'; }
	
	[hA, jF] = hiwindImportant(hA, '', '!');
	
	hA = hA.toString().replace(/\-{1,100}$/g, '');
	if (hA.indexOf('--') > -1) { hA = hA.toString().replace(/\-\-/g, '-'); }
	return [hA, hU, jF];
}
function hiwindSafeClass (jR) {
	jR = jR.toString().replace(/\%/g, '-pct').toString().replace(/[^a-zA-Z0-9\-]/g,'-').toString().replace(/\-{1,100}$/g, '');
	if (jR.indexOf('--') > -1) { jR = jR.toString().replace(/\-\-/g, '-'); }
	return jR;
}
function hiwindModifier (hR) {
	var hS = '', jE = '', jZ = '';
	if (hR.indexOf('+') == 0) { jE = '.' + hR.substr(1) + ' '; }
	else if (hR == 'all') { hS = ' *'; }
	else if (['important','!','!important'].includes(hR)) { }
	else if (hR.indexOf('all-') == 0) { hS = ' ' + hR.toString().replace('all-', ''); }
	else if (hR.indexOf('nth-child') > -1) { hS = ':nth-child(' + hR.toString().replace('nth-child-', '') + ')'; }
	else if (hiwindCheckModifier(hR)) { hS = ' *:' + hR; }
	else if (hR !== 'main') { hS = ':' + hR; }
	return [hS, jE, jZ];
}
function hiwindCheckModifier (hR) {
	if (hR.indexOf('nth-child') > -1) { return true; }
	else if (['last-child','first-child','only-child','first-of-type','last-of-type','only-of-type'].includes(hR)) { return true; }
	else if (['placeholder','after','before','first-letter','first-line','selection','marker'].includes(hR)) { return true; }
	else { return false; }
}
function getHead() {
	return document.getElementsByTagName('html')[0];
}
function KnowCSS (hA) {
	var ret = hiwindCSS(hA, null, null);
	var cssID = 'css_' + hA;
	var heAD = getHead();
	if (!hiwindLayer(cssID)) {
		var cssTag = document.createElement('style');
		cssTag.innerHTML = ret[1];
		cssTag.id = cssID;
		heAD.appendChild(cssTag);
	}
	else if (ret[3]) { hiwindLayer(cssID).innerHTML = ret[1]; }
	hiwindLayer(hA).innerHTML = ret[2];
}

function insertAndExecute(dO, dT) {
	dO.innerHTML = dT;
	var dS = [];
	var dR = dO.childNodes;
	for (var i=0; dR[i]; i++) {
		if (dS && hiwindNode(dR[i], "script") && (!dR[i].type || dR[i].type.toLowerCase() === "text/javascript")) { dS.push(dR[i].parentNode ? dR[i].parentNode.removeChild(dR[i]) : dR[i]); }
	}
	for (var dA in dS) {
		if (typeof dA === 'string') { evalScript(dS[dA]); }
	}
} 
function hiwindNode(nE, nN) {
	return nE.nodeName && nE.nodeName.toUpperCase() === nN.toUpperCase();
}
function evalScript(eL) {
	var eD = (eL.text || eL.textContent || eL.innerHTML || "");
	var eH = document.getElementsByTagName("head")[0] || document.documentElement;
	var eS = document.createElement("script");
	eS.type = "text/javascript";
	eS.appendChild(document.createTextNode(eD));
	eH.insertBefore(eS, eH.firstChild);
	eH.removeChild(eS);
	if (eL.parentNode) { eL.parentNode.removeChild(eL); }
}
function hiwindApply(hA, hB) {
	var hC = hiwindLayer(hB);
	if (hC) {
		if (originalCSS[hB] !== hA.value) {
			originalCSS[hB] = hA.value;
			insertAndExecute(hC, hA.value);
			KnowCSS(hB);
		}
	}
}
function hiwindImportant(jR, hR, kA) {
	var jY = '';
	var kB = kA + 'important';
	if (jR.indexOf('-important-') > -1) { jR = jR.toString().replace('-important-', '-'); jY = kB; }
	else if (jR.indexOf('-important') > -1) { jR = jR.toString().replace('-important', ''); jY = kB; }
	else if (jR.indexOf('!') > -1) { jR = jR.toString().replace('!', ''); jY = kB; }
	else if (['important','!','!important'].includes(hR)) { jY = kB; }
	else if (hR.indexOf('-!-') > -1) { hR = hR.toString().replace('-!-', '-'); jY = kB; }
	else if (hR.indexOf('-!') > -1) { hR = hR.toString().replace('-!', ''); jY = kB; }
	else if (hR.indexOf('!') > -1) { hR = hR.toString().replace('!', ''); jY = kB; }
	else { jY = ''; }
	return [jR, jY];
}
var wK = ['align-content', 'align-items', 'align-self', 'alt', 'animation', 'animation-delay', 'animation-direction', 'animation-duration', 'animation-fill-mode', 'animation-iteration-count', 'animation-name', 'animation-play-state', 'animation-timing-function', 'animation-trigger', 'app-region', 'appearance', 'aspect-ratio', 'backdrop-filter', 'backface-visibility', 'background-clip', 'background-composite', 'background-origin', 'background-size', 'border-after-color', 'border-after-style', 'border-after-width', 'border-after', 'border-before-color', 'border-before-style', 'border-before-width', 'border-before', 'border-bottom-left-radius', 'border-bottom-right-radius', 'border-end-color', 'border-end-style', 'border-end-width', 'border-end', 'border-fit', 'border-horizontal-spacing', 'border-image', 'border-radius', 'border-start-color', 'border-start-style', 'border-start-width', 'border-start', 'border-top-left-radius', 'border-top-right-radius', 'border-vertical-spacing', 'box-align', 'box-decoration-break', 'box-direction', 'box-flex-group', 'box-flex', 'box-lines', 'box-ordinal-group', 'box-orient', 'box-pack', 'box-reflect', 'box-shadow', 'box-sizing', 'clip-path', 'color-correction', 'column-axis', 'column-break-after', 'column-break-before', 'column-break-inside', 'column-count', 'column-fill', 'column-gap', 'column-progression', 'column-rule', 'column-rule-color', 'column-rule-style', 'column-rule-width', 'column-span', 'column-width', 'columns', 'cursor-visibility', 'dashboard-region', 'device-pixel-ratio', 'filter', 'flex', 'flex-basis', 'flex-direction', 'flex-flow', 'flex-grow', 'flex-shrink', 'flex-wrap', 'flow-from', 'flow-into', 'font-feature-settings', 'font-kerning', 'font-size-delta', 'font-smoothing', 'font-variant-ligatures', 'grid', 'grid-area', 'grid-auto-columns', 'grid-auto-flow', 'grid-auto-rows', 'grid-column', 'grid-column-end', 'grid-column-gap', 'grid-column-start', 'grid-gap', 'grid-row', 'grid-row-end', 'grid-row-gap', 'grid-row-start', 'grid-template', 'grid-template-areas', 'grid-template-columns', 'grid-template-rows', 'highlight', 'hyphenate-character', 'hyphenate-charset', 'hyphenate-limit-after', 'hyphenate-limit-before', 'hyphenate-limit-lines', 'hyphens', 'initial-letter', 'justify-content', 'justify-items', 'justify-self', 'line-align', 'line-box-contain', 'line-break', 'line-clamp', 'line-grid', 'line-snap', 'locale', 'logical-height', 'logical-width', 'margin-after', 'margin-after-collapse', 'margin-before', 'margin-before-collapse', 'margin-bottom-collapse', 'margin-collapse', 'margin-end', 'margin-start', 'margin-top-collapse', 'marquee', 'marquee-direction', 'marquee-increment', 'marquee-repetition', 'marquee-speed', 'marquee-style', 'mask', 'mask-attachment', 'mask-box-image', 'mask-box-image-outset', 'mask-box-image-repeat', 'mask-box-image-slice', 'mask-box-image-source', 'mask-box-image-width', 'mask-clip', 'mask-composite', 'mask-image', 'mask-origin', 'mask-position', 'mask-position-x', 'mask-position-y', 'mask-repeat', 'mask-repeat-x', 'mask-repeat-y', 'mask-size', 'mask-source-type', 'match-nearest-mail-blockquote-color', 'max-logical-height', 'max-logical-width', 'media-text-track-container', 'min-logical-height', 'min-logical-width', 'nbsp-mode', 'opacity', 'order', 'overflow-scrolling', 'padding-after', 'padding-before', 'padding-end', 'padding-start', 'perspective', 'perspective-origin', 'perspective-origin-x', 'perspective-origin-y', 'print-color-adjust', 'region-break-after', 'region-break-before', 'region-break-inside', 'region-fragment', 'rtl-ordering', 'ruby-position', 'scroll-snap-type', 'shape-image-threshold', 'shape-inside', 'shape-margin', 'shape-outside', 'svg-shadow', 'tap-highlight-color', 'text-color-decoration', 'text-combine', 'text-decoration-line', 'text-decoration-skip', 'text-decoration-style', 'text-decorations-in-effect', 'text-emphasis', 'text-emphasis-color', 'text-emphasis-position', 'text-emphasis-style', 'text-fill-color', 'text-justify', 'text-orientation', 'text-security', 'text-size-adjust', 'text-stroke', 'text-stroke-color', 'text-stroke-width', 'text-underline-position', 'text-zoom', 'transform', 'transform-2d', 'transform-3d', 'transform-origin', 'transform-origin-x', 'transform-origin-y', 'transform-origin-z', 'transform-style', 'transition', 'transition-delay', 'transition-duration', 'transition-property', 'transition-timing-function', 'user-drag', 'user-modify', 'user-select', 'animating-full-screen-transition', 'any-link', 'autofill', 'autofill-strong-password', 'drag', 'full-page-media', 'full-screen-ancestor', 'full-screen-controls-hidden', 'full-screen-document', 'full-screen', 'file-upload-button', 'inner-spin-button', 'input-placeholder', 'media-controls', 'media-controls-current-time-display', 'media-controls-enclosure', 'media-controls-fullscreen-button', 'media-controls-mute-button', 'media-controls-overlay-enclosure', 'media-controls-panel', 'media-controls-play-button', 'media-controls-time-remaining-display', 'media-controls-timeline', 'media-controls-toggle-closed-captions-button', 'media-controls-volume-control-container', 'media-controls-volume-control-hover-background', 'media-controls-volume-slider', 'meter-bar', 'meter-even-less-good-value', 'meter-inner-element', 'meter-optimum-value', 'meter-suboptimum-value', 'outer-spin-button', 'progress-bar', 'progress-inner-element', 'progress-value', 'search-cancel-button', 'search-results-button', 'slider-runnable-track', 'slider-thumb'];
var wY = "^" + wK.join("|").toString().replace('/-/gi', '\\-');
function hiwindWebKit(wS) {
	return new RegExp(wY).test(wS);
}
function hiwindCSS(hA, eV, eS) {
	var settingsCSS = {
		"minifyhtml": true,
		"minifycss": true,
		"minifyclasses": true
	};
	var newClasses = "";
	var tabs = (settingsCSS.minifycss === false) ? ["\n", "\n\t", "\n\t\t"] : ["", "", ""];
	var zC = new RegExp('class=["|\'](.*?)["|\']','gis');
	var zH = new RegExp('^([0-9a-f]{3,6})$', 'i');
	var zM = new RegExp('\\[(.*?)\\]','i');
	var zA = new RegExp('([a-zA-Z0-9\-\+\>\~\*]{1,32})\{(.*?)\}','gis');
	var zW = new RegExp('^([0-9]{1,6})$', 'i');
	var zD = new RegExp('^([0-9]{1,6})$', 'i');
	var zX = new RegExp('([a-zA-Z0-9\-]{1,32})\\(\\((.*?)\\)\\)','gis');
	var zZ = new RegExp('\\{\\{\\$(.*?)\\}\\}','gi');
	var chg=false, ret=true, css="define{display:none!important;visibility:hidden!important;height:0px!important;width:0px!important;padding:0px!important;margin:0px!important}", html="", i=0, zY='', zB='', aM='', sM='', cL={}, hB=[], hC='', hD='', hE='', hF='', hG='', hI='', hJ='', hK='', hL=[], hM='', hN={}, hO='', hP={}, hQ='', hR='', hS='', hT=[], hU='', hV='', hW='', hX=[], hY={}, hZ='', jA='', jB=[], jC='', jD=false, jE='', jF='', jG='', jH='', jI='', jJ='', jK='', jL='', jM='', jN=0, jO='', jP='', jQ=[], jR='', jS='', jT=[], jU='', jV='', jW=[], jX='', jY='', jZ='', kA='', kB=[];
	if (typeof hA === 'string') {
		jU = hiwindLayer(hA);
		if (jU) {
			if (jU.tagName.toLowerCase() == 'textarea') { hA = jU.value; }
			else { hA = jU.innerHTML; }
		}
	}
	else if (typeof hA === 'object') {
		jU = hA;
		hA = hA.innerHTML;
	}
	else { jU = hA; }
	if (typeof eS === 'object') {
		for (var eE in eS) {
			if (eE in settingsCSS) { settingsCSS[eE] = eS[eE]; }
		}
	}
	sameCSS = {};
	customCSS = {};
	knownIDS = {};
	groupCSS = {};
	responsiveCSS = {};
	fixedCSS = {};
	var iD = jU.id;
	if (iD in originalCSS === false) { originalCSS[iD] = hA; }
	jH = hA;
	while ((zB = zZ.exec(hA)) !== null) {
		jG = '';
		if (typeof cssVars === 'object') {
			if (zB[1] in cssVars) { jG = cssVars[zB[1]]; }
		}
		jH = jH.toString().replace(zB[0], jG);
	}
	html = jH;
	hA = jH;
	jH = '';
	newClasses = hA.toString().replace(/[\s\n\r]/gi, '');
	while ((zY = zC.exec(hA)) !== null) {
		hM = '';
		hN = {};
		hP = {};
		hS = '';
		hT = [];
		hQ = zY[1];
		hI = hQ;
		hJ = '';
		jQ = [];
		while ((aM = zA.exec(hQ)) !== null) {
			if (hiwindCheckModifier[aM[1]] === false) {
				if (aM[1].indexOf('-') > -1) {
					jW = aM[1].split('-', 2);
					if (jW[1] in knownResponsive) {
						aM[1] = jW[1];
						aM[2] = jW[0] + '(' + aM[2] + ')';
					}
					else {
						aM[1] = jW[0];
						aM[2] = jW[1] + '(' + aM[2] + ')';
					}
				}
			}
			if (aM[1] in knownResponsive) { aM[1] = knownResponsive[aM[1]][0]; }
			jA = aM[2];
			while ((sM = zX.exec(aM[2])) !== null) {
				jV = aM[1] + '_' + sM[1];
				if (jV in hP) { hP[jV] += ' ' + sM[2]; }
				else { hP[jV] = sM[2]; }
				jA = jA.toString().replace(sM[0], '');
			}
			if (jA.length > 0) {
				if (aM[1] in hP) { hP[aM[1]] += ' ' + jA; }
				else { hP[aM[1]] = jA; }
			}
			hI = hI.toString().replace(aM[0], '');
		}
		hP.main = hI;
		for (hR in hP) {
			if (typeof hP[hR] === 'string') {
				hG = '';
				hX = [];
				jC = true;
				hW = '';
				jE = false;
				jP = false;
				hB = hP[hR].split(/(\s+)/).filter(e => e.trim().length > 0);
				if (hR.indexOf('_') > -1) {
					hW = hR;
					jB = hR.split('_', 2);
					hZ = jB[0];
					hR = jB[1];
				}
				else if (zW.test(hR)) { hZ = hR; jC = false; }
				else if (hR == '0') { hZ = hR; jC = false; }
				else { hZ = ''; }
				if (hB.length > 0) {
					for (i=0; i<hB.length; i++) {
						hD = hB[i];
						jS = hD;
						jR = hD.toLowerCase();
						[jR, jY] = hiwindImportant(jR, hR, '-');
						if ((jR.indexOf('-') < 0) && (jR.indexOf('[') < 0)) {
							if (typeof knownCSS === 'object') {
								if (jR in knownCSS) { hD = knownCSS[jR] + jY; }
								else {
									jR = jR.toString().replace(/[^a-z0-9]/g,'');
									if (jR in knownCSS) { hD = knownCSS[jR] + jY; }
								}
							}
						}
						if (zM.test(hD)) {
							customCSS[hD.substr(1, hD.length-2)] = true;
							if (hD in sameCSS) { hN[hD] = sameCSS[hD]; }
							else { hN[hD] = ""; jP = true; }
						}
						else if ((['retain','keep','my'].includes(hR)) || (hD.indexOf('-') < 0) || (hD.indexOf('bi-') == 0) || (hD.indexOf('fa-') == 0)) {
							if (hT.includes(hD) === false) { hT[hT.length] = hD; }
						}
						else {
							hU = '';
							jF = '';
							jM = hD;
							[hD, hU, jF] = hiwindClass(hD);
							 if (hD.indexOf('=') > -1) {
								kB = hD.split('=', 2);
								hC = kB[0].split('-');
								hC[hC.length] = kB[1];
							}
							else { hC = hD.split('-'); }
							if (hC[0].indexOf(':') > -1) {
								jT = hC[0].split(':', 2);
								hC[0] = jT[1];
								hZ = jT[0];
								if (hZ in knownResponsive) { hZ = knownResponsive[hZ][0]; }
								else if (zD.test(hC[0])) {
									hZ = hC[0];
									hC.shift();
								}
							}
							else {
								if (hC[0] in knownResponsive) {
									hZ = knownResponsive[hC[0]][0];
									hC.shift();
								}
								else if (zD.test(hC[0])) {
									hZ = hC[0];
									hC.shift();
								}
							}
							if (hD.indexOf('display') == 0) {
								hF = hC.shift();
								hE = hC.join('-').trim();
							}
							else {
								hE = hC.pop();
								hF = hC.join('-').trim();
							}
							if (typeof knownCSS === 'object') {
								jR = hF.toLowerCase();
								[jR, jY] = hiwindImportant(jR, hR, '-');
								if (['important','!','!important'].includes(hR)) {
									jY = '';
									if (jF.indexOf('!important') < 0) { jF += '!important'; }
								}
								if (jR in knownCSS) { hF = knownCSS[jR]; }
								else {
									jR = jR.toString().replace(/[^a-z0-9]/g,'');
									if (jR in knownCSS) { hF = knownCSS[jR]; }
								}
								hF += jY;
							}
							if (hE.indexOf('/') > -1) {
								if (hD.indexOf('family') == -1) { hE = hE.toString().replace(/\//g, ' '); }
								else { hE = '"' + hE.toString().replace(/\//g, ' ') + '"'; }
							}
							if ((hF.indexOf('color') > -1) || (hF.indexOf('background') > -1)) {
								jN = 100;
								jX = '';
								if (hE.indexOf("*") > -1) { jX = "*"; }
								else if (hE.indexOf("@") > -1) { jX = "@"; }
								else if (hE.indexOf("~") > -1) { jX = "~"; }
								if (jX.length > 0) {
									jO = hE.split(jX, 2);
									hE = jO[0];
									if (jO.length > 1) { jN = parseInt(jO[1]); }
								}
								hE = hE.toString().replace('#', '');
								if (hE in hexColors) { hE = hexColors[hE].trim(); }
								if (zH.test(hE)) {
									if (jN != 100) { hE = hiwindShade(hE, jN); }
									hE = "#" + hiwindHex(hE);
								}
							}
							if (hR.indexOf('+') == 0) { hZ = ''; }
							hV = hU + hF + ':' + hE + jF + ';';
							hG += hV;
							if (hiwindWebKit(hF) === true) {
								hV += hU + '-webkit-' + hF + ':' + hE + jF + ';';
								hV += hU + '-moz-' + hF + ':' + hE + jF + ';';
								hV += hU + '-ms-' + hF + ':' + hE + jF + ';';
								hV += hU + '-o-' + hF + ':' + hE + jF + ';';
							}
							if (settingsCSS.minifyclasses === false) {
								jR = '';
								if (hR !== 'main') {
									if (!jC) { jR += 'width-'; }
									jR += hR + '-';
								}
								jR += jM;
								jR = hiwindSafeClass(jR);
								jQ[jQ.length] = [hD, jS, hV, hR, hZ];
							}
							else {
								hX[hX.length] = [hZ, hV, hW, hR];
							}
						}
					}
				}
				hM = '';
				jD = false;
				kA = hZ + '-' + hG;
				if ((!jP) && (hG.length > 0) && (hS.length > 0)) { hG = hS + '{' + hG + '}'; hJ = ''; }
				if ((kA.length > 0) && (kA in cL)) { hJ = cL[kA]; }
				else if (hJ.length > 0) { jD = true; }
				else {
					hK = Object.keys(cL).length.toString().length;
					hJ = hiwindID(hK);
					cL[kA] = hJ;
				}
				for (hO in hN) {
					if (hN[hO].length == 0) { sameCSS[hO] = hJ; }
					else if (hM.indexOf(sameCSS[hO] + ' ') == -1) { hM += sameCSS[hO] + ' '; }
				}
				if ((hG.length > 0) || (hM.length > 0)) {
					jE = '';
					hS = '';
					jZ = '';
					if (jC) { [hS, jE, jZ] = hiwindModifier(hR); }
					if (hR.length > 0) {
						if (hZ == "all") { hS = " *" + hS; }
					}
					if (hX.length > 0) {
						jJ = jE + '.' + hJ + hS;
						for (i=0; i<hX.length; i++) {
							jK = hX[i][0];
							jL = hX[i][1];
							if (jK == 'all') { jK = ''; }	
							
							if (jK.length > 0) {
								if (jK in responsiveCSS === false) { responsiveCSS[jK] = {}; }
								if (jL in responsiveCSS[jK] === false) { responsiveCSS[jK][jL] = jJ; }
								else if (responsiveCSS[jK][jL].indexOf(jJ) == -1) { responsiveCSS[jK][jL] += ',' + jJ; }
							}
							else if (jP) {
								if (jJ in fixedCSS === false) { fixedCSS[jJ] = jL; }
								else { fixedCSS[jJ] += jL; }
							}
							else {
								if (jL in groupCSS === false) { groupCSS[jL] = jJ; }
								else if (groupCSS[jL].indexOf(jJ) == -1) { groupCSS[jL] += ',' + jJ; }
							}
						}
					}
					if (settingsCSS.minifyclasses === true) {
						if ((!jD) || (hM.length > 0)) {
							if (hX.length > 0) {
								if (hJ.length > 0) {
									if (hT.includes(hJ) === false) { hT[hT.length] = hJ; }
								}
							}
							if (hM.length > 0) {
								if (hT.includes(hM.trim()) === false) { hT[hT.length] = hM.trim(); }
							}
						}
					}
				}
			}
		}
		if (jQ.length > 0) {
			hT = [];
			for (i=0; i<jQ.length; i++) {
				hR = jQ[i][3];
				[hS, jE, jZ] = hiwindModifier(hR);
				jK = jQ[i][4];
				jQ[i][0] = hiwindSafeClass(jQ[i][0]);
				jQ[i][1] = hiwindSafeClass(jQ[i][1]);
				if (jK.length > 0) {
					jJ = jE + '.' + jQ[i][1];
					jL = jQ[i][2];
					if (hS.length > 0) { jJ += hS; }
					if (jK in responsiveCSS === false) { responsiveCSS[jK] = {}; }
					if (jL in responsiveCSS[jK] === false) { responsiveCSS[jK][jL] = jJ; }
				}
				else { fixedCSS[jE + '.' + jQ[i][1] + hS] = jQ[i][2]; }
				jI = jQ[i][1];
				if (hT.includes(jI) === false) { hT[hT.length] = jI; }
			}
			for (hO in hN) {
				if (hN[hO].length == 0) { sameCSS[hO] = hT.join(' ').trim(); }
			}
		}
		if (hM.length > 0) {
			if (hT.includes(hM.trim()) === true) { hM = ''; }
		}
		if ((hT.length > 0) || (hM.length > 0)) { html = html.toString().replace(zY[0], 'class="' + hM + hT.join(' ').trim() + '"'); }
	}
	if (iD in prevClasses === false) { prevClasses[iD] = ["", "", ""]; }
	if (newClasses != prevClasses[iD][0]) {
		chg = true;
		for (var xX in groupCSS) {
			if (groupCSS[xX] in hY) { hY[groupCSS[xX]] += ' ' + xX; }
			else { hY[groupCSS[xX]] = xX; }
		}		
		for (var xT in fixedCSS) {
			if (typeof fixedCSS[xT] === 'string') { css += tabs[0] + xT + '{' + tabs[1] + fixedCSS[xT] + tabs[0] + '}'; }
		}
		for (var xQ in hY) {
			if (typeof hY[xQ] === 'string') { css += tabs[0] + xQ + '{' + tabs[1] + hY[xQ] + tabs[0] + '}'; }
		}		
		var xB = [];
		for (var xK in responsiveCSS) {
			if (typeof xK === 'string') { xB.unshift(xK); }
		}
		xB.sort(function(a, b) { return b-a; });
		var xZ = '';
		for (i=0; i<xB.length; i++) {
			xZ = xB[i];
			if (xZ in responsiveCSS) {
				hL = [];
				if (xZ == '0') { css += tabs[0] + '@media print {'; }
				else if (xZ in knownResponsive) { css += tabs[0] + '@media screen and (min-width:' + knownResponsive[xZ][0] + 'px) and (max-width:' + knownResponsive[xZ][1] + 'px) {'; }
				else { css += tabs[0] + '@media screen and (max-width:' + responsiveCSS[xZ][0] + 'px) {'; }
				for (var xA in responsiveCSS[xZ]) {
					if (responsiveCSS[xZ][xA] in hL) { hL[responsiveCSS[xZ][xA]] += ' ' + xA; }
					else { hL[responsiveCSS[xZ][xA]] = xA; }
				}
				for (var xP in hL) {
					if (typeof hL[xP] === 'string') { css += tabs[1] + xP + '{' + tabs[2] + hL[xP] + tabs[1] + '}'; }
				}
				css += tabs[0] + '}';
			}
		}
		if (settingsCSS.minifycss === true) {
			css = css.toString().replace(/;\}/g, '\}').toString().replace(/\{ /g, '\{').toString().replace(/; /g, ';');
		}
		if (settingsCSS.minifyhtml === true) { html = html.toString().replace(/[\n|\r|\t]/gm, ''); }
		prevClasses[iD] = [newClasses, css.toString().trim(), html.toString().trim()];
	}
	return [ret, prevClasses[iD][1], prevClasses[iD][2], chg];
}

module.exports = function(knowhtml) {
	return hiwindCSS({
		"innerHTML": knowhtml,
		"id": "root"
	}, null, null);
};
