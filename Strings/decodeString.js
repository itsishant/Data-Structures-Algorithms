
let s = "3[a]2[bc]";

let numStack = [];
let strStack = [];

let num = 0;
let str = "";

function Decode(s) {

    for (let i = 0; i<s.length; i++) {
        if ( s[i] >= '0' && s[i] <= '9' ) {
            num = num * 10 + Number(s[i]);
        } 
        else if ( s[i] === "[" ) {
            numStack.push(num);
            strStack.push(str);

            num = 0;
            str = "";
        }
        else if ( s[i] == "]" ) {

            let repeatNum = numStack.pop();
            let prevStr = strStack.pop();

            str = prevStr + str.repeat(repeatNum);

        } 
        else {
            str += s[i];
        }
    }
    return str;
} 

console.log(Decode(s));
