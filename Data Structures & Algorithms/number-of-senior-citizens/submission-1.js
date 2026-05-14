class Solution {
    /**
     * @param {string[]} details
     * @return {number}
     */
    countSeniors(details) {
        let ans = 0;
        for(let i = 0; i < details.length; i++){
            let passenger = details[i]
            let age = parseInt(passenger.substring(11, 13))
            if(age > 60){
                ans += 1
            } else {
                continue
            }
        }
        return ans;
    }
}
