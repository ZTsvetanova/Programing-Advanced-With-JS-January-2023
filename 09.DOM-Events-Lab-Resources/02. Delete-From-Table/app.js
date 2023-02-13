function deleteByEmail() {
    let email = document.getElementsByName("email")[0].value;
	let emailCol = document.querySelectorAll("#customers tr td:nth-child(2)");
    let result = document.getElementById("result");

	for (let line of emailCol) {
		if (line.textContent === email) {
			let row = line.parentNode;
			row.remove();
			result.textContent = "Deleted.";
			return;
		}
		result.textContent = "Not found.";
	}
}