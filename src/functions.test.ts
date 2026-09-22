import { describe, expect, it } from "vitest";
import getFunction, { transformations } from "./functions";

describe("text transformations", () => {
	it.each(transformations)("matches the $label example", ({ id, example }) => {
		expect(getFunction(id, example.original)).toBe(example.result);
	});

	it("returns an empty string for an unknown transformation", () => {
		expect(getFunction("missing", "text")).toBe("");
	});

	it("handles locale-specific casing", () => {
		expect(getFunction("upperCase", "istanbul ı")).toBe("İSTANBUL I");
		expect(getFunction("lowerCase", "İSTANBUL")).toBe("istanbul");
	});

	it("preserves the first duplicate and its original spacing", () => {
		expect(getFunction("removeDuplicateLines", "a\nb\na")).toBe("a\nb");
		expect(getFunction("removeDuplicateWordsDividedByComma", "a, a,a")).toBe("a, a");
	});
});
