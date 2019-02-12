const assert = require("assert");
const {fa} = require("@ghasemkiani/ling/fa");

describe("ling:fa", function () {
	describe("#toPersianNumbers(), #toLatinNumbers()", () => {
		it("should convert numbers correctly", () => {
			let text0 = "123,456,123,456.6789067890";
			let text1 = fa.toPersianNumbers(text0);
			let text2 = fa.toLatinNumbers(text1);
			assert.equal(text0, text2);
		});
	});
});
