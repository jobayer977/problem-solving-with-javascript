---
title: 10 Days of Javascript - Day 4 Create a Rectangle Object
Problem: https://www.hackerrank.com/challenges/js10-objects/problem?isFullScreen=true
---

**Solution:**

```js
function Rectangle(a, b) {
	return {
		length: a,
		width: b,
		perimeter: 2 * (a + b),
		area: a * b,
	}
}
```
