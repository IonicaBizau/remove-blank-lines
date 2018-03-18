"use strict";

/**
 * Variable with regex to validate blank lines
 * @name removeBlankLines
 * @var
 * @returns {Regex}
 */
const blankLines = new RegExp(/(^[ \t]*\n)/, "gm");

/**
 * removeBlankLines
 * Remove blank lines from a string.
 *
 * @name removeBlankLines
 * @function
 * @param {String} input The input string.
 * @returns {String} The result string (without blank lines).
 */
const removeBlankLines = (input) => input.replace(blankLines, "");

module.exports = removeBlankLines;
