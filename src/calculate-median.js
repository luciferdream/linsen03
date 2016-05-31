function calculate_median(arr) {
	var tempArr = new Array();
	var k = 0;
	arr=arr.sort();
	for(var i = 0; i < arr.length; i++){
		if(i%2 == 0)
			tempArr = arr[i];
	}
	if(tempArr.length%2 == 0) return tempArr

[tempArr.length/2];
	else return (tempArr[tempArr.length/2] + tempArr

[tempArr.length/2 + 1]) / 2;
}

module.exports = calculate_median;
