//Chat Bob Reply
let reply = [
	"Sure",
	"Whoa, chill out!",
	"Calm down, I know what I'm doing!",
	"Fine. Be that way!",
	"Whatever"
]

let usertext
let product
let Bob = document.getElementById("chatbot")

document.querySelector("#input").addEventListener("keypress", function(e){
	var key = e.which || e.keyCode
	
	if(key === 13){ //Enter button
		let input = document.getElementById("input").value
		usertext =input
		document.getElementById("user").innerHTML = input
		output()
	}
});

function output(){
	
	
	if(usertext.includes("?")){
		product = reply[0]
	}
	else if(usertext.includes("bob")== false ||usertext.includes("BOB")== false){
		product = reply[3]
	}
	else{
		product = reply[4]
	}
	
	document.getElementById("chatbot").textContent = product;
	document.getElementById("input").value = ""; //clear input value
	
}

