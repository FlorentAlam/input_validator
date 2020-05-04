/**
 * Check if given input's type is the correct data.
 * @param {String} value - A string parameter, should be the input given by the user.
 * @param {Number} length - A number parameter, should be the expected input length.
 * @return {Boolean} Returns the truthiness of the validation.
 */

const validator = {
    isEmail: function(value){
        const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return regex.test(value.trim());
    },
    isGiven: function(value){
        return value.trim().length > 0
    },
    isCorrectLength: function(value, length){
        return value.trim().length >= length;
    },
    isWord: function(value){
        const regex = /^[A-z]*$/;
        return regex.test(value.trim());
    },
    isNumber: function(value){
        const regex = /^[0-9]*$/;
        return regex.test(value.trim());
    },
    isTelFr: function(value){
        const regex = /(\+\d+(\s|-|.))?0\d(\s|-|.)?(\d{2}(\s|-|.)?){4}/;
        return regex.test(value.trim());
    },
    doContainSpecialChars: function(value){
        const regex = /[^A-Za-z0-9\s]/;
        return regex.test(value.trim());
    }
};

module.exports = validator;