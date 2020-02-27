function quickSort(array) {
    let pivotValue = array[0];
    // move pivot to the end
    swap(array, 0, array.length-1);

    let j = 0;
    let i = 0;
    while(i <= array.length-2) {
        if(array[i] <= pivotValue) {
            swap(array, i, j);
            i+=1;
            j+=1;
        }
        else {
            i+=1;
        }
    }
    swap(array, j, array.length-1);
    console.log(array);
}

function swap(array, i, j) {
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
}

quickSort([3,3,2,1,5,6,4])