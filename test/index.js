/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function (nums) {
	const arr = []
	for (let i = 0; i < nums.length; i++) {
		arr.push(nums.slice(0, i + 1).reduce((acc, curr) => acc + curr, 0))
	}
	return arr
}
runningSum([1, 2, 3, 4])
