'use strict';

/**
 * Function that finds anagrams in a given array and returns an array of arrays of anagrams
 * @parram  {Array} input - Array of strings
 * @returns {Array} Array of anagrams in alphanumerical order
 * @type    {Object.<string, number>}
 */
function anagram(input) {
    const map = input.sort().reduce((map, str) => {
        const key = str.toLowerCase().split('').sort().join('');
        if (!map[key]) {
            map[key] = [str];
        } else {
            map[key].push(str);
        }
        return map;
    }, {});
    
    return Object.values(map).reduce((acc, value) => {
        if (value.length > 1) {
            acc.push(value)    
        }
        return acc;
    }, []);
}
