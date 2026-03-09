package neet150

import "fmt"

// Problem: Contains Duplicate
// Difficulty: Easy
// Link: https://leetcode.com/problems/contains-duplicate/
// #array

func N1() error {
	res := containsDuplicate([]int{1, 2, 3, 4})
	fmt.Println(res)

	fmt.Println("done")
	return nil
}

// Time: O(n)
// Space: O(n)
func containsDuplicate(nums []int) bool {
	m := make(map[int]int)

	for i := range nums {
		m[nums[i]] = m[nums[i]] + 1

		if m[nums[i]] > 1 {
			return true
		}
	}

	return false
}
