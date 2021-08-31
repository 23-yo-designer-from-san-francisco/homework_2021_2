'use strict';

/**
 * Function that finds anagrams in a given array and returns an array of arrays of anagrams
 * @parram  {Array} input - Array of strings
 * @returns {Array} Array of anagrams in alphanumerical order
 * @type    {Object.<string, number>}
 */
function anagram(input) {
    const map = input.sort((elem1, elem2) => elem1 < elem2 ? -1 : 1).reduce((map, str, index) => {
        const key = str.toLowerCase().split('').sort().join('');
        if (!map[key]) {
            map[key] = [index];
        } else {
            map[key].push(index);
        }
        return map;
    }, {});

    return Object.entries(map).reduce((acc, elem, index) => {
        if (elem[1]['length'] > 1) {
            const temp = elem[1].reduce((acc, elem) => {
                acc.push(input[elem]);
                return acc;
            }, []);

            acc.push(temp);
            return acc;
        }
        acc.push()
        return acc;
    }, []);
}
