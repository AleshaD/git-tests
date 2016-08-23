/**
 * Created by a on 17.08.16.
 */

 
function giveKeyAndVal (object) {
	var message = "", counter = 0;
	for (var key in object) {
		message+="У свойства  " + key + "  значение  " + object[key]+ "\n";
		counter++;
	}
	return (message+="Всего свойств " + counter);
}
 
 
function isEmptyObject(object) {		
	
	for (var key in object) {
		return false;
	}
	return true;
}

function calcPow(num, pow) {

	if (!isInteger(num) || !isInteger(pow)) {
		return alert('Введены не целые числа');
	}

	var temp=num;
	for (var i=1;i<pow;i++) {
		num *= temp;
		console.log('Hello, Logs!', temp);
	}
	
	return num;
}

function calcFiboValue(n) {
	var prev=0
	var cur=1;
	if (n==1) return(cur);

	var res=0;
	for(var i=1;i<n;i++){
		res=prev+cur;
		prev=cur;
		cur=res;
	}
	
	return res;
}

function isInteger(number){
	var temp=number;
	number=(number^0);
	if (number==temp){
		return (true);
	}
	return (false);
}
