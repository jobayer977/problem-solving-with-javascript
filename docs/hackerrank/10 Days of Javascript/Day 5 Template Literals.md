---
title: 10 Days of Javascript - Day 5 Template Literals
Problem: https://www.hackerrank.com/challenges/js10-template-literals/problem?isFullScreen=true
---

**Solution:**

```js
function sides(literals, ...expressions) {
	const [a, p] = expressions
	const value = Math.sqrt(p ** 2 - 16 * a)

	return [(p - value) / 4, (p + value) / 4]
}
```
