//	@ghasemkiani/ling/fa

import {Obj as Base} from "@ghasemkiani/base";
import {cutil} from "@ghasemkiani/base";

class Fa extends Base {
	get chars() {
		if(!this._chars) {
			this._chars = {
				"hamza" : "\u0621",
				"alefMadda" : "\u0622",
				"alefHamzaAbove" : "\u0623",
				"wawHamza" : "\u0624",
				"alefHamzaBelow" : "\u0625",
				"yehHamza" : "\u0626",
				"alef" : "\u0627",
				"beh" : "\u0628",
				"tehMarbuta" : "\u0629",
				"teh" : "\u062A",
				"theh" : "\u062B",
				"jeem" : "\u062C",
				"hah" : "\u062D",
				"khah" : "\u062E",
				"dal" : "\u062F",
				"thal" : "\u0630",
				"reh" : "\u0631",
				"zain" : "\u0632",
				"seen" : "\u0633",
				"sheen" : "\u0634",
				"sad" : "\u0635",
				"dad" : "\u0636",
				"tah" : "\u0637",
				"zah" : "\u0638",
				"ain" : "\u0639",
				"ghain" : "\u063A",
				"tatweel" : "\u0640",
				"feh" : "\u0641",
				"qaf" : "\u0642",
				"kaf" : "\u0643",
				"lam" : "\u0644",
				"meem" : "\u0645",
				"noon" : "\u0646",
				"heh" : "\u0647",
				"waw" : "\u0648",
				"alefMaksura" : "\u0649",
				"yeh" : "\u064A",
				"aLefWasla" : "\u0671",
				"peh" : "\u067E",
				"tcheh" : "\u0686",
				"jeh" : "\u0698",
				"keheh" : "\u06A9",
				"gaf" : "\u06AF",
				"hehYeh" : "\u06C0",
				"farsiYeh" : "\u06CC",
				"zero" : "0",
				"one" : "1",
				"two" : "2",
				"three" : "3",
				"four" : "4",
				"five" : "5",
				"six" : "6",
				"seven" : "7",
				"eight" : "8",
				"nine" : "9",
				"percent" : "%",
				"decimal" : ".",
				"thousands" : ",",
				"arabicZero" : "\u0660",
				"arabicOne" : "\u0661",
				"arabicTwo" : "\u0662",
				"arabicThree" : "\u0663",
				"arabicFour" : "\u0664",
				"arabicFive" : "\u0665",
				"arabicSix" : "\u0666",
				"arabicSeven" : "\u0667",
				"arabicEight" : "\u0668",
				"arabicNine" : "\u0669",
				"arabicPercent" : "\u066A",
				"arabicDecimal" : "\u066B",
				"arabicThousands" : "\u066C",
				"persianZero" : "\u06F0",
				"persianOne" : "\u06F1",
				"persianTwo" : "\u06F2",
				"persianThree" : "\u06F3",
				"persianFour" : "\u06F4",
				"persianFive" : "\u06F5",
				"persianSix" : "\u06F6",
				"persianSeven" : "\u06F7",
				"persianEight" : "\u06F8",
				"persianNine" : "\u06F9",
				"fathisan" : "\u064B",
				"dammatan" : "\u064C",
				"kasratan" : "\u064D",
				"fatha" : "\u064E",
				"damma" : "\u064F",
				"kasra" : "\u0650",
				"shadda" : "\u0651",
				"sukun" : "\u0652",
				"jazm" : "\u06E1",
				"maddaAbove" : "\u0653",
				"hamzaAbove" : "\u0654",
				"hamzaBelow" : "\u0655",
				"subscriptAlef" : "\u0656",
				"superscriptAlef" : "\u0670",
				"zwnj" : "\u0200C",
				"zwj" : "\u0200D",
				"space" : " ",
			};
		}
	}
	set chars(chars) {
		this._chars = chars;
	}
	toPersianNumbers(s) {
		s = cutil.asString(s);
		s = s.replace(/([\d])\.([\d])/g, (match, left, right) => left + this.persianDecimalPoint + right);
		s = s.replace(/([\d])\,([\d])/g, (match, left, right) => left + this.persianThousandsSeparator + right);
		this.digits.forEach(([la, fa]) => s = s.replace(new RegExp(la, "g"), fa));
		return s;
	}
	toLatinNumbers(s) {
		s = cutil.asString(s);
		s = s.replace(new RegExp(this.persianDecimalPoint, "g"), ".");
		s = s.replace(new RegExp(this.persianThousandsSeparator, "g"), ",");
		this.digits.forEach(([la, fa]) => s = s.replace(new RegExp(fa, "g"), la));
		return s;
	}
	toArabicLetters(s) {
		s = cutil.asString(s);
		s = s.replace(new RegExp(this.persianKaf, "g"), this.arabicKaf);
		s = s.replace(new RegExp(this.persianYeh, "g"), this.arabicYeh);
		return s;
	}
	toPersianLetters(s) {
		s = cutil.asString(s);
		s = s.replace(new RegExp(this.arabicKaf, "g"), this.persianKaf);
		s = s.replace(new RegExp(this.arabicYeh, "g"), this.persianYeh);
		return s;
	}
}
cutil.extend(Fa.prototype, {
	_chars : null,
	digits : [
		["0", "\u06F0"],
		["1", "\u06F1"],
		["2", "\u06F2"],
		["3", "\u06F3"],
		["4", "\u06F4"],
		["5", "\u06F5"],
		["6", "\u06F6"],
		["7", "\u06F7"],
		["8", "\u06F8"],
		["9", "\u06F9"]
	],
	persianDecimalPoint : "\u066B",
	persianThousandsSeparator : "\u066C",
	arabicKaf : "\u0643",
	arabicYeh : "\u064A",
	persianKaf : "\u06A9",
	persianYeh : "\u06CC",
});

const fa = new Fa();

export {Fa, fa};
