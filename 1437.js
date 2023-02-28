//给你一个由若干 0 和 1 组成的数组 nums 以及整数 k。如果所有 1 都至少相隔 k 个元素，则返回 True ；否则，返回 False 。
//
// 示例 1：
// 输入：nums = [1,0,0,0,1,0,0,1], k = 2
//输出：true
//解释：每个 1 都至少相隔 2 个元素。
//
// 示例 2：
// 输入：nums = [1,0,0,1,0,1], k = 2
//输出：false
//解释：第二个 1 和第三个 1 之间只隔了 1 个元素。
//
// 示例 3：
// 输入：nums = [1,1,1,1,1], k = 0
//输出：true

// 示例 4：
// 输入：nums = [0,1,0,1], k = 1
//输出：true

let nums = [1, 0, 0, 0, 1, 0, 0, 1]
let kLengthApart = function (nums, k) {
  let start
  let end
  let length = nums.length
  let isBigThanK = false
  let map = new Map()
  while (nums.length > 0) {
    let value = nums.shift()
    if (map.has('1')&&value === 1) {
      // map.set('1', map.get('1') + 1)
      if (map.get('0') >= k) {
        isBigThanK = true
        map.set('0', 0)
      } else {
        return false
      }
    } else {
      map.set('1', 1)
    }
    
    if (map.has('0')) {
      map.set('0', map.get('0') + 1)
    } else {
      map.set('0', 1)
    }
  }
}
kLengthApart(nums, 2)



//2023.02.28
// 双指针思路没问题，但没运行起来,原因是没用continue。。。
