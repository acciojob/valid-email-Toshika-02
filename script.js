function validEmail(str) {
  //your JS code here.
	
	if(validEmail === str){
		return true;
	}else{
		return false;
	}
}

// Do not change the code below.
const str = prompt("Enter an email address.");
alert(validEmail(str));
