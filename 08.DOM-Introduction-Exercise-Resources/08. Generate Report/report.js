function generateReport() {
  let tableRow = document.querySelectorAll("tbody tr");
  let tableTitle = document.querySelectorAll("thead tr th");
  let res = [];

  for (let i = 0; i < tableRow.length; i++) {
    let tableInfo = tableRow[i].children;
    let tempData = {};
    for(let a=0; a<tableInfo.length; a++){
        let infoLine = tableTitle[a].childNodes;

        if (infoLine[1].checked === true) {

            let propertyName = infoLine[0].textContent
					.trim()
					.toLowerCase();
            let value = tableInfo[a].textContent;
            tempData[propertyName] = value;
        }
    }
    res.push(tempData);
  }
  let jsonResult = JSON.stringify(res);
	document.getElementById("output").textContent = jsonResult;
}
