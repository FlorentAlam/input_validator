/**
 * Check if given input's type is the correct data.
 * @param {String} value - A string parameter, should be the input given by the user.
 * @param {Number} length - A number parameter, should be the expected input length.
 * @return {Boolean} Returns the truthiness of the validation.
 */

const REGEXP = {
    EMAIL: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    WORD: /^[A-z]*$/,
    NUMBER: /^[0-9]*$/,
    TEL_FR: /(\+\d+(\s|-|.))?0\d(\s|-|.)?(\d{2}(\s|-|.)?){4}/,
    SPECIAL_CHARS: /[^A-Za-z0-9\s]/
}

const validator = {
    isEmail: function(value){
        return testRegex(value.trim(), REGEXP.EMAIL);
    },
    isGiven: function(value){
        return value.trim().length > 0
    },
    isCorrectLength: function(value, length){
        return value.trim().length >= length;
    },
    isWord: function(value){
        return testRegex(value.trim(), REGEXP.WORD);
    },
    isNumber: function(value){
        return testRegex(value.trim(), REGEXP.NUMBER);
    },
    isTelFr: function(value){
        return testRegex(value.trim(), REGEXP.TEL_FR);
    },
    doContainSpecialChars: function(value){
        return testRegex(value.trim(), REGEXP.SPECIAL_CHARS);
    }
};

function testRegex(value, exp){
    return exp.test(value);
}

module.exports = validator;