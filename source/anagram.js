'use strict';

/**
 * Function that finds anagrams in a given array and returns an array of arrays of anagrams
 * @parram  {Array} input - Array of strings
 * @returns {Array} Array of anagrams in alphanumerical order
 * @type    {Object.<string, number>}
 */
function anagram(input) {
    const map = input.reduce((map, str, index) => {
        const key = str.toLowerCase().split('').sort().join('');
        if (!map[key]) {
            map[key] = [index];
        } else {
            map[key].push(index);
        }
        return map;
    }, {});

    const result = Object.entries(map).reduce((result, elem, index) => {
        if (elem[1]['length'] > 1) {
            const temp = elem[1].reduce((acc, elem) => {
                acc.push(input[elem]);
                return acc.sort((elem1, elem2) => elem1 < elem2 ? -1 : 1);
            }, []);
            result.push(temp);
        }
        return result;
    }, [])

    return result.sort((elem1, elem2) => elem1[0] < elem2[0] ? -1 : 1);
}
