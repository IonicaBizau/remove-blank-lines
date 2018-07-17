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
 * @returns {String} The result string (without blank lines).
 */
String.prototype.removeBlankLines = function() { return this.replace(blankLines, ""); }
