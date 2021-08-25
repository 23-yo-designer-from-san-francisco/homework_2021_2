'use strict';

function anagram(input) {
    let buckets = input.map((e, i) => e = [i, e.split('').sort().join('')])
        .sort((e1, e2) => e1[1] > e2[1] ? -1 : 1)
        .reduce((rv, x) => {
            (rv[x[1]] = rv[x[1]] || []).push(x);
            return rv;
        }, {});

    var result = []

    for (var key in buckets) {
        if (buckets[key]['length'] > 1) {
            let intArray = [];
            buckets[key].forEach(e => intArray.push(input[e[0]]));
            result.push(intArray.sort((e1, e2) => e1 < e2 ? -1 : 1));
        }
    }

    return result.sort((e1, e2) => e1[0] < e2[0] ? -1 : 1)
}
	