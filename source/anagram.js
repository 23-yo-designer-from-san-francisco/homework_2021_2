'use strict';

/**
 * Function that finds anagrams in a given array and returns an array of arrays of anagrams
 * @parram  {Array} input - Array of strings
 * @returns {Array} Array of anagrams in alphanumerical order
 * @type    {Object.<string, number>}
 */
const anagram = (input) => {
    if (!Array.isArray(input)) {
        throw new Error('Input is not an array');
    }

    const map = [...input].sort().reduce((map, word) => {
        const sortedLetters = word.toLowerCase().split('').sort().join('');
        if (!map[sortedLetters]) {
            map[sortedLetters] = [word];
        } else {
            map[sortedLetters].push(word);
        }
        return map;
    }, {});
    
    return Object.values(map).reduce((resultArray, anagramGroup) => {
        if (anagramGroup.length > 1) {
            resultArray.push(anagramGroup);
        }
        return resultArray;
    }, []);
}
