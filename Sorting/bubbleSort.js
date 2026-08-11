function bubbleSort(arr, n) {

    for (let i = 0; i<=n-2; i++) {
        for (let j = 0; j<=n-2-i; j++) {
            if (arr[j] > arr[j+1]) {
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp; 
            }
        }
    }
}


let arr = [5,4,3,2,1];
let n = arr.length;

bubbleSort(arr, n);

for (let i = 0; i<n; i++) {
    console.log(arr[i]);
}
console.log("");