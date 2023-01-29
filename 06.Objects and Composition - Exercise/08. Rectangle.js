function rectangle(width, height, color) {
	let resultObj = {
		width,
		height,
		color: color[0].toUpperCase() + color.substring(1),
		calcArea() {
            let res = this.width * this.height;
			return res;
		},
	};
	return resultObj;
}
let rect = rectangle(4, 5, 'red');

console.log(rect.width);

console.log(rect.height);

console.log(rect.color);

console.log(rect.calcArea())

