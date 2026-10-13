function hashingBasic () {
    const hash = Array(10).fill(0);

    const arr = [1,2,1,4,5,5,4];

    for ( let i = 0; i< arr.length; i++) {
       
            hash[arr[i]] ++;
        
    }

    for ( let i = 0; i<hash.length; i++) {
        console.log(hash[i]);
    }

}

function hashingCharacters() {
    let hash = Array(26).fill(0);

    const str = "abcabff";

    for ( let i = 0; i< str.length; i++) {
        hash[str.charCodeAt(i) - 'a'.charCodeAt(0)]++;
    }

    for ( let i = 0; i<hash.length; i++) {
        console.log(hash[i] );
    }

}

function mapp() {
    const map = new Map();

    let arr = [1,2,3,4,5,6,7,8,9];


    for ( let i = 0; i<arr.length; i++ ) {
        map.set(arr[i], (map.get(arr[i]) || 0) + 1);

    }

    for ( let i = 1; i< arr.length; i++ ) {
            console.log(map.get(i));
    }
}

mapp();
