'use strict';

document.getElementById('new').style.display = 'none';
function foo() {
	var _arguments = arguments;

	var pi = 3.14;
	var things = ['a', 'b', 'c'];

	for (var i = 0; i < things.length; i++) {
		console.log(things[i]);
	};

	var f = function f(i) {
		return _arguments[0] + i;
	}; // foo's implicit arguments binding
	return f(2);
}

foo(1); // 3

var test = 'world';

console.log('Hello ' + test + ' !!!!!');
