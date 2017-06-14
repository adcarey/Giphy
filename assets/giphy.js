var gifs = {
	search: "",
	topics: ["Wrestling", "Football", "Soccer", "Hockey", "Track", "Baseball",
 "Basketball", "Racing", "Jiu Jitsu", "MMA", "Boxing", "Tennis", "Golf", "Judo", 
 "Cricket", "Cycling", "Skiing", "Snowboarding", "Bobsledding", "Weightlifing", 
 "Crossfit"]
}

var text = "";
var place ="";
var custom="";

 function buttons(){
 	for (var i = 0; i < gifs.topics.length; i++){
 	$(".sports").append("<button class='btn-primary sportType'>" + gifs.topics[i] + "</button>");
 	
 	 };
 };

function addTopic(){
	$('.submit').on("click", function() {
	gifs.search = $("#sport").val().trim();
	gifs.topics= [];
	gifs.topics.push(gifs.search)
	$("#sport").val("")
	buttons();
});
};

function buttonTouch(){
	$(".gifs").html("");
	var gif = $(this).text();
	var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + gif + "&api_key=dc6zaTOxFJmzC&limit=10";
	$.ajax({
		url: queryURL,
		method: "GET"
	}).done((response) => {
		console.log(response);
		 for (var i = 0; i < response.data.length; i++){
		 	$(".gifs").append("<div class= 'gify'>Rating: "+ response.data[i].rating.toUpperCase()+ "<br>" + "<img data-name= " + response.data[i].images.original.url + " src= " + response.data[i].images.original_still.url + " class='image'></div>");
		 	$(".clicks").html("<h2>Click Gif to Play!</h2>");
	};
});
};

function clicking() {
	var active = $(this).attr("data-name");
	$(this).attr("data-name", $(this).attr("src"));
	$(this).attr("src", active);
};



 
 $(document).ready(function(){
 buttons();
 addTopic();
 $(document).on("click", ".sportType", buttonTouch);
 $(document).on("click", ".image", clicking);
 });