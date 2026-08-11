function selectionSort(arr, n) {

    let mini = 0;

    for (let i = 0; i<=n-2; i++) {
        mini = i;
        for (let j = i+1; j<n; j++) {
            if (arr[j] < arr[mini]) {
                mini = j;
            }
        }
        let temp = arr[i];
        arr[i] = arr[mini];
        arr[mini] = temp;    
    }
}

let arr = [5,4,3,2,1];
let n = arr.length;

selectionSort(arr, n);

for (let i = 0; i<n; i++) {
    console.log(arr[i]);
}
