function binarySearchableNumber(nums) {
    if(!nums) {
        return 0;
    }
    const searchable = new Array(nums.length).fill(false);
    let res = []; 
    let largestElementToTheLeft = nums[0];
    // search left to right first, check if all the numbers to the right are smaller
    searchable[0] = true;
    for(let i = 1; i<nums.length; i++) {
        if(nums[i] >= largestElementToTheLeft) {
            searchable[i] = nums[i] >= largestElementToTheLeft;
            largestElementToTheLeft = nums[i];
        }
    }
    let smallestElementToTheRight = nums[nums.length-1];

    for(let i = nums.length-1; i>=0; i--) {
        if(nums[i] <= smallestElementToTheRight) {
            smallestElementToTheRight = nums[i]
            if(searchable[i]) {
                res.push(nums[i]);
            }
        }
    }
    return res;

}

console.log(binarySearchableNumber([1, 3, 2]))
console.log(binarySearchableNumber([2, 1, 3, 5, 4, 6]))
console.log(binarySearchableNumber([1, 5, 7, 11, 12, 18]))
console.log(binarySearchableNumber([3, 2, 1]))
console.log(binarySearchableNumber([5, 4, 6, 2, 8]))
console.log(binarySearchableNumber([1, 3, 2, 4, 5, 7, 6, 8]))
