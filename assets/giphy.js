var topics =["Wrestling", "Football", "Soccer", "Hockey", "Track", "Baseball",
 "Basketball", "Racing", "Jiu Jitsu", "MMA", "Boxing", "Tennis", "Golf", "Judo", 
 "Cricket", "Cycling", "Skiing", "Snowboarding", "Bobsledding", "Weightlifing", 
 "Crossfit"];

var text = "";
var place ="";
var custom="";

 function buttons(){
 	for (var i = 0; i < topics.length; i++){
 	var text = document.createElement("button");
 	text.innerHTML = topics[i];
 	var place = document.getElementsByClassName("sports")[0];
 	place.appendChild(text);
 	
 	 };
 };

function addTopic(){
	$(".submit").click(function(){
		var add = $("#sport").val();
		var text = document.createElement("button");
 		text.innerHTML = add;
 		var place = document.getElementsByClassName("sports")[0];
 		place.appendChild(text);
			

 	});
}
 

 buttons();
 addTopic();