const firstName = document.querySelector("#firstName");
const lastName = document.querySelector("#lastName");
const actionBtn = document.querySelector("#submitBtn");

actionBtn.addEventListener("click", getFormvalue);

function getFormvalue() {
    //Write your code here	
	alert(firstName.value+" "+lastName.value);
}
