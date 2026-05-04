class Solution:
    def replaceElements(self, arr: List[int]) -> List[int]:
        n = len(arr);
        ans = [];
        for i in range (0, n):
            if( i == n - 1):
                print(i)
                print(n)
                ans.append(-1)
                break
            greatest = 0
            for j in range(i + 1, n):
                    if(arr[j] > greatest):
                        greatest = arr[j]
                    else: 
                        continue
            else:
                ans.append(greatest)
        return ans;