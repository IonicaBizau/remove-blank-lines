"use strict";

/**
 * removeBlankLines
 * Remove blank lines from a string.
 *
 * @name removeBlankLines
 * @function
 * @param {Number} a Param descrpition.
 * @param {Number} b Param descrpition.
 * @return {Number} Return description.
 */
module.exports = function removeBlankLines (input) {
    return input.replace(/(^[ \t]*\n)/gm, "");
};
