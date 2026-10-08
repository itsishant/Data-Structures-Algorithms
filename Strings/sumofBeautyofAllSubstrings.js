let s = "aabc";

function minBeauty(freq) {
    let minCount = Infinity;
    for ( let i = 0; i<26; i++ ) {
        if ( freq[i] !=  0 ) {
            minCount = Math.min(minCount, freq[i]);
        }
    }
    return minCount;
}

function maxBeauty (freq) {
    let maxCount = 0;

    for (let i = 0; i<26; i++) {
        maxCount = Math.max(maxCount, freq[i]);
    }
    return maxCount;
}

function sumOfBeautyOfAllSubstrings(s) {
    let sum = 0;
    for ( let i = 0; i<s.length; i++ ) {
        let freq = new Array(26).fill(0);
        for ( let j = i; j<s.length; j++) {
            freq[s.charCodeAt(j) - 'a'.charCodeAt(0)] ++;
            let beauty = maxBeauty(freq) - minBeauty(freq);
            sum += beauty;
        }
    }
    return sum;
}

console.log(sumOfBeautyOfAllSubstrings(s));
