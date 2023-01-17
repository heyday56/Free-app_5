"use strict"
/*Login Script*/
function loginValidate(){
	const username=document.querySelector("#username").value;
	const password=document.querySelector("#password").value;
	if (password.indexOf(" ")>-1 || password.indexOf("  ")>-1 || password.length<8 || password.indexOf("=")>-1) {
		document.getElementById("msgLogin").textContent="invalide password or email";
		return false;
	}
	if (username.indexOf(" ")>-1 || username.indexOf("  ")>-1 || username.indexOf("!")>-1|| username.indexOf("=")>-1 || username.lastIndexOf("@")<2||username.indexOf("%")>-1 ||username.indexOf("&")>-1) {
		document.getElementById("msgLogin").textContent="invalide password or email";
		return false;
	}
		return true;	
}
/* Forget Page Script */
function forgetEmailValidate(){
	const email=document.querySelector("#forgetEmail").value;
	if (email.indexOf(" ")>-1||email.lastIndexOf("@")<1 || email.indexOf("  ")>-1 || email.indexOf("=")>-1 ||email.indexOf("!")>-1||email.indexOf("-")>-1||email.indexOf("&")>-1||email.indexOf("%")>-1) {
		document.getElementById("msgForget").textContent="Invalide email, please do not use !,=,-,%,&,' '";
		return false;
	}
return true;
}
/* Register Page Script */
function registerValidate(){
	const name=document.querySelector("#registerName").value;
	const password=document.querySelector("#registerPassword").value;

	if (name.length<2||name.indexOf("  ")>-1 || name.indexOf("=")>-1||name.indexOf("-")>-1||name.indexOf("!")>-1||name.indexOf("@")>-1||name.indexOf("#")>-1||name.indexOf("$")
		||name.indexOf("%")>-1||name.indexOf("^")>-1||name.indexOf("&")>-1||name.indexOf("*")>-1) {
		document.getElementById("msgRegister").textContent="Please type a real name!";
		return false
	}
	if (password.length<8||password.indexOf("=")>-1) {
		document.getElementById("msgRegister").textContent=document.getElementById("msgRegister").textContent+" Invalide password please do not use '=' and give more than 7";
		return false;
	}
	return true;
}

function registerNameValidate(){
	const name=document.querySelector("#registerName").value;
	const ch=name[name.length-1];
	if (0<=Number(ch)||Number(ch)<=9) {
		document.querySelector("#registerName").focus();
		document.getElementById("msgRegister").textContent="Please do not use number!";
	}
}
function registerPhoneValidate(){
	const phone=document.querySelector("#registerPhone").value;
	const ch=phone[phone.length-1];
	if (!(0<=Number(ch)&&Number(ch)<=9)){
		document.querySelector("#registerPhone").focus();
		document.getElementById("msgRegister").textContent="Please use only number!";
	}
}


/* user Info Page Script */
/*
let menu=document.querySelector("#menuBar");
let menuUl=document.querySelector(".active");
menu.onclick=()=>{
menu.classList.toggle('fa-solid');
menuUl.classList.toggle('active');
}
window.onscroll=()=>{
	menu.classList.remove("fa-solid");
	menuUl.classList.remove("active");
}
*/

/* contact us script */
function contactEmailValidate(){
	const email=document.querySelector("#contactEmail").value;
	if (email.lastIndexOf(".")<=email.lastIndexOf("@") || email.lastIndexOf("@")<2||email.indexOf("@")<-1||email.indexOf("=")>-1) {
		document.querySelector("#contactEmailMsg").textContent="Invalide email";
		document.querySelector("#contactEmailMsg").style.color="red";
		document.querySelector("#contactEmail").focus();
	}
}

/* change Password script */
function confirm(){
	const newPass=document.querySelector("#newPassword").value;
	const confirmPass=document.querySelector("#confirmPassword").value;
	if (newPass!=confirmPass) {
		document.querySelector("#passwordChangeMsg").textContent="New password and confirm is not equal!";
		document.querySelector("#confirmPassword").focus();
		return false;
	}
	if (newPass.indexOf(" ")>-1 || newPass.indexOf("  ")>-1 || newPass.length<8 || newPass.indexOf("=")>-1) {
		document.getElementById("passwordChangeMsg").textContent="invalide password, password length should be more then seven, do not use '=',' ' ";
		return false;
	}
	return true;
}

//Change information script 
function changeInfNameValidate(){
	const name=document.querySelector("#myName").value;
	const ch=name[name.length-1];
	if (0<=Number(ch)||Number(ch)<=9) {
		document.querySelector("#myName").focus();
		document.getElementById("msgChangeInfo").textContent="Please do not use number!";
	}
}
function changeInfPhoneValidate(){
	const phone=document.querySelector("#myPhone").value;
	const ch=phone[phone.length-1];
	if (!(0<=Number(ch)&&Number(ch)<=9)){
		document.querySelector("#myPhone").focus();
		document.getElementById("msgChangeInfo").textContent="Please use only number!";
	}
}

function chnageInfEmailValidate(){
	const email=document.querySelector("#myEmail").value;
	if (email.lastIndexOf(".")<=email.lastIndexOf("@") || email.lastIndexOf("@")<2||email.indexOf("@")<-1||email.indexOf("=")>-1) {
		document.querySelector("#msgChangeInfo").textContent="Invalide email";
		document.querySelector("#myEmail").focus();
	}
}
