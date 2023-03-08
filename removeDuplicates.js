let nums = [1,1,2,2,2,2,2,2,3,4,5,5,5,5,6,6,7];

function removeDuplicates(nums){
    let pivotIndex = 0, i = 1, k=0;
    while(i < nums.length){
        if(nums[i] === '_') break;

        if(nums[i] === nums[pivotIndex]){
            nums.splice(i, 1);
            nums.push("_");
        }
        else {
            pivotIndex = i; i++;k++;
        }
    }
    console.log("K : ", k +1);
    return nums;
}

console.log(removeDuplicates(nums));