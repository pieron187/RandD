'use strict';

document.getElementById('new').style.display = 'none';
function foo() {
	const pi = 3.14;
	let things = ['a','b','c'];


	for (let i = 0; i < things.length; i++) {
		console.log(things[i]);
	};

	var f = (i) => arguments[0] + i; // foo's implicit arguments binding
	return f(2);
}

foo(1); // 3


var test = 'world';

console.log(`Hello ${test} !!!!!`);













