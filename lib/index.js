"use strict";

/**
 * removeEmptyLines
 * Remove empty lines from a string.
 *
 * @name removeEmptyLines
 * @function
 * @param {Number} a Param descrpition.
 * @param {Number} b Param descrpition.
 * @return {Number} Return description.
 */
module.exports = function removeEmptyLines (input) {
    return input.replace(/(^[ \t]*\n)/gm, "");
};
