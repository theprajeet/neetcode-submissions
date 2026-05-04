class Solution {
    /**
     * @param {number[]} arr
     * @return {number[]}
     */
    replaceElements(arr) {
        let ans = [];
        for(let i = 0; i < arr.length; i++){
            let greatest = 0;
            if(i === arr.length - 1){
                ans.push(-1);
                break;
            }
            greatest = 0
            for(let j = i + 1; j < arr.length; j ++){
                if(arr[j] > greatest){
                    greatest = arr[j]
                }
                else{
                    continue
                }
            }
            ans.push(greatest)
        }
        return ans
    }
}
