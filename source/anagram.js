'use strict';

/**
 * Function that finds anagrams in a given array and returns an array of arrays of anagrams
 * @parram {Array} input - Array of strings
 * @returns {Array} Array of anagrams in alphanumerical order
 * @type {Object.<string, number>}
 */
function anagram(input) {
    const buckets = {};
    input.forEach((e, i) => {
        const key = e.toLowerCase().split('').sort().join('');
        if (!buckets[key]){
            buckets[key] = [i];
        } else {
            buckets[key].push(i);
        }
    });

    const result = [];

    for (const [key, value] of Object.entries(buckets)) {
        if (value['length'] > 1) {
            const temp = [];
            value.forEach((index) => {
                temp.push(input[index]);
            })
            result.push(temp.sort((elem1, elem2) =>  elem1 < elem2 ? -1 : 1));
        }
    }

    return result.sort((elem1, elem2) => elem1[0] < elem2[0] ? -1 : 1);
}
