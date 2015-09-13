var numArgs = process.argv.splice(2);
var sum = 0;

for (var i = 0; i < numArgs.length; i++) {
	sum += Number(numArgs[i]);
}

console.log(sum);