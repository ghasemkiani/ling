import ava from "ava";
import {fa} from "../index.js";

ava("ling:fa#toPersianNumbers(), #toLatinNumbers() should convert numbers correctly", async test => {
	let text0 = "123,456,123,456.6789067890";
	let text1 = fa.toPersianNumbers(text0);
	let text2 = fa.toLatinNumbers(text1);
	test.is(text0, text2);
});
