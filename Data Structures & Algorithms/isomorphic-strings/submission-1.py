class Solution:
    def isIsomorphic(self, s: str, t: str) -> bool:
        ans = {}
        for i in range(len(s)):
            if s[i] in ans:
                if ans[s[i]] != t[i]:
                    return False
            else:
                for key in ans:
                    if ans[key] == t[i]:
                        return False
                ans[s[i]] = t[i]
        return True