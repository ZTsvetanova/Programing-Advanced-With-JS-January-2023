function typeOfArg(...arg) {
	let result = {};
	for (const line of arg) {
		let type = typeof line;
		console.log(`${type}: ${line}`);

		if (!result.hasOwnProperty(type)) {
			result[type] = 0;
		}

		result[type] = result[type] + 1;
	}

	let buff = '';
	for (let [key, value] of Object.entries(result)) {
		buff += `${key} = ${value}\n`;
	}
	console.log(buff);
}
typeOfArg('cat', 42, 53, function () { console.log('Hello world!'); })