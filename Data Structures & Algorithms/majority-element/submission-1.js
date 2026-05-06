class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums) {
        let ans = {};
        let largest = 0;
        for(let i = 0; i < nums.length; i++){
            if(nums[i] in ans){
                ans[nums[i]] += 1;
            } else if (!(nums[i] in ans)){
                ans[nums[i]] = 1;
            }       
        }
        let most_key = 0;
        let most = 0;
        for(let key in ans){
            let value = ans[key];
            if(value > most){
                most = value;
                most_key = key;
            }
        }
        return most_key;
    }
}
