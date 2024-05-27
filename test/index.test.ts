import { getCombinations, findWords } from '../src';

describe('Testing getCombinations function',() => {

    it('returns a map of strings and numbers',() => {
        const input = 'ate';
        const combos = getCombinations(input);
        expect(combos).toBeInstanceOf(Array);
    })

    it('tests if combinations are accurate',() => {
        const input = 'ate';
        const combos = getCombinations(input);
        expect(combos.length).toEqual(24);
    })
})

describe('Testing findWord function',() => {

    const words = ['ate','eat','tea','dog','do','god','goo','go','good'];

    it('result is length 3', () => {
        const input = 'ate';
        const result = findWords(input, words);
        const expected = ['ate','eat','tea'];
        // test length
        expect(result.length).toEqual(3);
        // test values are the same
        result.map(w => expect(expected).toContain(w));
    })

    it('result is length 6', () => {
        const input = 'oogd';
        const result = findWords(input, words);
        const expected = ['dog','do','god','goo','go','good'];
        // test length
        expect(result.length).toEqual(6);
        // test values are the same
        result.map(m => expect(expected).toContain(m));
    })

    it('is string in array of strings', () => {
        const input = 'oogd';
        const testString = 'god';
        const result = findWords(input, words);
        expect(result).toContain(testString);
    })
})