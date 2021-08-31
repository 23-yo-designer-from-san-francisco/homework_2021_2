'use strict';

/**
 * Function that finds anagrams in a given array and returns an array of arrays of anagrams
 * @parram  {Array} input - Array of strings
 * @returns {Array} Array of anagrams in alphanumerical order
 * @type    {Object.<string, number>}
 */
function anagram(input) {
    const map = input.sort().reduce((map, str, index) => {
        const key = str.toLowerCase().split('').sort().join('');
        if (!map[key]) {
            map[key] = [str];
        } else {
            map[key].push(str);
        }
        return map;
    }, {});
    
    return Object.keys(map).reduce((acc, key) => {
        if (map[key].length > 1) {
            acc.push(map[key])    
        }
        return acc;
    }, []);
}
