function RepeatedStringMatch(a, b) {
    if ( b === "" ) {
        return -1;
    }

    let cnt = 0;
    let arr = [];
    let flag = false;
    let original = a;

    while ( a.length < b.length ) { 
        a += original;
        cnt++ ;
    }

    if (a.includes(b)) {
        return cnt;
    }

    a +=  original;
    cnt++;

    if (a.includes(b)) {
        return cnt;
    }

    return -1;
 };

 console.log(RepeatedStringMatch("abcd", "cdabcsdfojddab"));
