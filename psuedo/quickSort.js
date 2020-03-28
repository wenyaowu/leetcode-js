function quickSort(arr, l, r) {
    let pivot = arr[l];
    swap(arr, l, r);
    let i = 0; // index for the last element that is bigger than pivot, anything < i is smaller than pivot
    let j = 0;
    while(j <= r-1) {
        if(arr[j] <= pivot) {
            swap(arr, i, j);
            i+=1;
            j+=1;
        }
        else {
            j+=1;
        }
    }
    swap(i, r);
    return arr;
}


function swap(arr, idx1, idx2) {
    let temp = arr[idx2];
    arr[idx2] = arr[idx1];
    arr[idx1] = temp;
}

console.log(quickSort([5,1,2,3,8,4,6], 0, 6))