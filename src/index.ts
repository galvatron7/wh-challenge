
/**
 * Get all combinations and permutations of the string
 *
 * @params {string} word - String to get combinations of
 * @return {Array<string>} - Combination of words
 */
export function getCombinations(word:string): string[]{
    let result: string[] = [];
    if (word.length === 0) {
        return [''];
    }
    if (word.length === 1) {
        return [word];
    }
    for (let i = 0; i < word.length; i++) {
        const firstChar = word[i];
        const otherChars = word.slice(0, i) + word.slice(i + 1);
        const otherCombinations = getCombinations(otherChars);
        result = [...result, ...otherCombinations];
        for (let j in otherCombinations){
            result.push(firstChar + otherCombinations[j])
        }
    }
    return result;
}


/**
 * Find words from dictionary that can be formed by rearranging some or all
 * letters in the input string. Each letter in the input string should be
 * used up once per word.
 *
 * @params {string} input - String of lowercase english letters, may contain repeated letters.
 * @params {Array<string>} dictionary - Array that specifies the valid output words, words will consist of lowercase english letters
 * @returns {Array<string>} - Words formed by rearranging letters
 */
export function findWords(inputString: string, dictionary: string[]): string[]{
    // get all combinations/permutations of input string
    const combos = getCombinations(inputString);
    // find combo words in dictionary
    return dictionary.reduce((accum: string[], word: string) => {
        if (combos.indexOf(word) != -1) {
            accum.push(word);
        }
        return accum;
    }, []);
}