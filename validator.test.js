const validator = require('./validator.js');

describe('should correctly check if input is number', () => {
    test('return true if number', () => {
        expect(validator.isNumber('345')).toBe(true);
    });
    test('return false if not number', () => {
        expect(validator.isNumber('123t')).toBe(false);
        expect(validator.isNumber('test')).toBe(false);
    });
})

describe('should correctly check if input is given', () => {
    test('return true if given', () => {
        expect(validator.isGiven('345')).toBe(true);
    });
    test('return false if not given', () => {
        expect(validator.isGiven('')).toBe(false);
    });
})

describe('should correctly check if input is email', () => {
    test('return true if email', () => {
        expect(validator.isEmail('jean@jean.com')).toBe(true);
    });
    test('return false if not email', () => {
        expect(validator.isEmail('test')).toBe(false);
        expect(validator.isEmail('jean@jean')).toBe(false);
        expect(validator.isEmail('@jean')).toBe(false);
        expect(validator.isEmail('jeanjean.com')).toBe(false);
        expect(validator.isEmail('jean@jean.f')).toBe(false);
    });
})

describe('should correctly check if length is correct', () => {
    test('return true if correct length', () => {
        expect(validator.isCorrectLength('ceci est un test', 16)).toBe(true);
    });
    test('return false if not correct length', () => {
        expect(validator.isCorrectLength('12', 4)).toBe(false);
    });
})

describe('should correctly check if input is phone number', () => {
    test('return true if phone number', () => {
        expect(validator.isTelFr('0606060606')).toBe(true);
        expect(validator.isTelFr('06.06.06.06.06')).toBe(true);
        expect(validator.isTelFr('06 06 06 06 06')).toBe(true);
        expect(validator.isTelFr('06-06-06-06-06')).toBe(true);
        expect(validator.isTelFr('+33 01 02 03 04 05')).toBe(true);
    });
    test('return false if not phone number', () => {
        expect(validator.isTelFr('12')).toBe(false);
    });
})

describe('should correctly check if input does not contain special characters', () => {
    test('return false if no special chars', () => {
        expect(validator.doContainSpecialChars('ceci est un test')).toBe(false);
    });
    test('return true if special chars', () => {
        expect(validator.doContainSpecialChars('jeudi, test - 12')).toBe(true);
    });
})