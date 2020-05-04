/**
 * Check if given input's type is the correct data.
 * @param {String} value - A string parameter, should be the input given by the user.
 * @param {Number} length - A number parameter, should be the expected input length.
 * @return {Boolean} Returns the truthiness of the validation.
 */

const validator = {
    isEmail: function(value){
        return testRegex(value.trim(), /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
    },
    isGiven: function(value){
        return value.trim().length > 0
    },
    isCorrectLength: function(value, length){
        return value.trim().length >= length;
    },
    isWord: function(value){
        return testRegex(value.trim(), /^[A-z]*$/);
    },
    isNumber: function(value){
        return testRegex(value.trim(), /^[0-9]*$/);
    },
    isTelFr: function(value){
        return testRegex(value.trim(), /(\+\d+(\s|-|.))?0\d(\s|-|.)?(\d{2}(\s|-|.)?){4}/);
    },
    doContainSpecialChars: function(value){
        return testRegex(value.trim(), /[^A-Za-z0-9\s]/);
    }
};

function testRegex(value, exp){
    return exp.test(value);
}

module.exports = validator;