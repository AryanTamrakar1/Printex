
var images=['../img/slider1.png','../img/slider2.png','../img/slider3.png','../img/slider4.png']; //an array created to store image names used for slider
var x=1;
var imgs=document.getElementById('img');//the class image is stored in the variable imgs
setInterval(slider, 3000); //calls the function slider after 3 seconds
function slider(){ //function created
    if (x < images.length) //if the value of x is less than the array length
        {
            x=x+1;//index is incremented by 1
        
        }
    else
        {
            x=1;//index is set to 1
        }
    imgs.innerHTML="<img src=" + images[x-1]+">";//changing the image directory with the ones from the array
}


function cart(){
    alert("Item has been added to the cart successfully!");//displays whenever function cart() is called
}
function accessForm(){
    var firstName = document.forms["messageForm"]["fname"].value; //the value of fname is stored in variable firstname
	var lastName = document.forms["messageForm"]["lname"].value; //the value of lname is stored in variable lastname
	var email = document.forms["messageForm"]["email"].value;//the value of email is stored in variable email
    var message=document.forms["messageForm"]["message"].value;
				

	//alert(messageDetails);
	if (firstName == "" || lastName == "" || message == "" || email=="") //checking if any of fields are empty
		{
			alert("Empty fields are present!!! Please enter the values...");//if so an alert is displayed
		}

	else
		{
			alert("Thank you for your feedback!!!");//else this alert is displayed
		}
}
function checkForm(){
    var x= document.forms["emailForm"]["email"].value;//the value of email is stored in x

    if (x == "")//checking if the field is empty
        {
            alert("empty fields present, please enter your email");//if so an alert is displayed
        }
    else
        {
            alert("thank you for entering your email!");//else this alert is displayed
        }   
}