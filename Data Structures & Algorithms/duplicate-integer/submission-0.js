class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let ans = false;
        for(let i = 0; i < nums.length; i++){
            for(let j = i + 1; j < nums.length - 1; j++){
                if(nums[i] === nums[j]){
                    ans = true;
                    break;
                }
                else{
                    continue;
                }
            }
        }
        return ans
    }
}
