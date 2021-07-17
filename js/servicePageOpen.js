function openPage(pageName,elmnt,color) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].style.backgroundColor = "";
  }
  document.getElementById(pageName).style.display = "block";
  elmnt.style.backgroundColor = color;
}

function selectProfession(profession, elmnt, color){
	var i, professions;
	professions = document.getElementsByClassName("profession");
  for (i = 0; i < professions.length; i++) {
  professions[i].style.backgroundColor = "";}
	
	document.getElementById(profession).style.display = "block";
  elmnt.style.backgroundColor = color;
}

function selectPlace(place, elmnt, color){
	var i, places;
	places = document.getElementsByClassName("place");
  for (i = 0; i < places.length; i++) {
  places[i].style.backgroundColor = "";}
	
	document.getElementById(place).style.display = "block";
  elmnt.style.backgroundColor = color;
  
 /*  for (i = 0; i < places.length; i++) {
    places[i].className = places[i].className.replace(" active", "");
  }
  document.getElementById(place).style.display = "block";
  evt.currentTarget.className += " active"; */
  
}

function openSubPage(evt, subPageName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tab_content");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(subPageName).style.display = "block";
  evt.currentTarget.className += " active";
}
// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();
document.getElementById("defaultSubOpen").click();

/* function openServiceAddedPage(pageName,color) {
  document.getElementById(pageName).style.display = "block";
  elmnt.style.backgroundColor = color;
} */

function serviceAddedAlertMessage()
{
	alert ("Success! Service has been added successfully; We will be in contact with you soon..");
}

function displayLogin(){
document.getElementById("login").style.display = (document.getElementById("login").style.display == 'none') ? 'block' : 'none';
}
 
function displayVerification(){
	var x = document.getElementById("phoneNumber").value;
	//document.write(x);
	if (x.length == 10 && x>1)
	document.getElementById("verification").style.display = 'block';
	else{
	alert("Please enter valid phone number..!");	
	document.getElementById("verification").style.display = 'none';}
	}

	/* function displayServicesPage(){
	var x=document.getElementByType("submit").value;
	if(x == 'Login')
		
} */
function returnLoginPhoneNumber()
{	var x= document.getElementById("phoneNumber").value;
document.write(x);
	return x;}

function searchLocation(){
	var x = document.getElementById("enteredLocation").value.toLowerCase();
	/* document.write(x); */
	if((x == 'Hyderabad'.toLowerCase()) || (x == 'Vijayawada'.toLowerCase()) || (x == 'Kurnool'.toLowerCase()) || (x == 'Ananthapuram'.toLowerCase()) || (x == 'hyd'.toLowerCase()) || (x == 'vjw'.toLowerCase()))
		alert("Our services are available at your location, please continue..!");
	else if (x=='null' || x=='')
		alert("Please enter location..!");
	else
	alert("We regret..! Our services are not available at your location..!");
}

function regAsProf(){
	var x = document.getElementById("phoneNumber").value;
	var y = document.getElementById("name").value;
	//document.write(x);
	if (x.length == 10 && x>1 && y.length > 3)
	alert("Thank you..! We will soon get in touch with you..!");
	else{
	alert("Please enter valid name and phone number..! Name should be more than 3 characters..!");	
	}	
}