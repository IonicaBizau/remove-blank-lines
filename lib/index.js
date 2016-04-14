"use strict";

/**
 * removeBlankLines
 * Remove blank lines from a string.
 *
 * @name removeBlankLines
 * @function
 * @param {String} input The input string.
 * @returns {String} The result string (without blank lines).
 */
module.exports = function removeBlankLines (input) {
    return input.replace(/(^[ \t]*\n)/gm, "");
};
