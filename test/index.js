"use strict";
const assert = require("assert");
const removeBlankLines = require("./../lib");

const blankLines = new RegExp(/(^[ \t]*\n)/, "gm");
const inputWithBlankLines = `
Hello

I'm a tester that want help yours texts.

see ya.




-> Amazing lib!!!
`;
const inputWithoutBlankLines = `Hello
I'm a tester that want help yours texts.
see ya.
-> Amazing lib!!!
`;

describe("this project must clean the blank lines" , () => {
    it("must blank lines this input" , () => {
        assert.equal(blankLines.test(inputWithBlankLines), true);
    });
    it("String must equal" , () => {
        assert.equal(inputWithBlankLines.removeBlankLines(), inputWithoutBlankLines);
    });
});