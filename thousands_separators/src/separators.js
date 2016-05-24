'use strict';

function thousands_separators(num) {
	var temp;
  	if(num >= 1000 && num < 1000000){
		temp = num / 1000;
		temp = Math.floor(temp);
		var temp2 = num;
		while(temp2 >= 1000) temp2-=1000;
		return temp + ',' + temp2;
	}
	if(num >= 1000000 && num < 1000000000){
		temp = num / 1000000;
		temp = Math.floor(temp);
		var temp2 = num / 1000;
		temp2 = Math.floor(temp2);
		var temp3 = num-1000000;
		while(temp3 >= 1000) temp3-=1000;
		return temp + ',' + temp2 + ',' + temp3;
	}
}

module.exports = thousands_separators;
