
/* variables */



lis = [];
artist = [];
playcounts = [];
duration = [];
image = [];
OrderList = [];
OrderDuration = [];
OrderPlayCount = [];
image = [];
urls = [];





/* ingressos */
$(document).ready(function() {
$("[data-toggle=popover]")
.popover({html:true})
});
jQuery(document).ready(function($) {
$.ajax({
url : "http://ws.audioscrobbler.com/2.0/?method=chart.gettoptracks&api_key=05d4b311160508e4320ec650346e45c8&format=json",
dataType : "jsonp",
success : function(parsed_json) {
for (var i = 0; i <= 50; i++) {
OrderList.push(parsed_json["tracks"]["track"][i]["name"])
OrderDuration.push(parsed_json["tracks"]["track"][i]["duration"])
OrderPlayCount.push(parsed_json["tracks"]["track"][i]["playcount"])
lis.push(parsed_json['tracks']['track'][i]['name'])
artist.push(parsed_json['tracks']['track'][i]['artist']['name'])
duration.push(parsed_json["tracks"]["track"][i]["duration"])
playcounts.push(parsed_json["tracks"]["track"][i]["playcount"])
urls.push(parsed_json["tracks"]["track"][i]["artist"]["url"])
try {image.push(parsed_json["tracks"]["track"][i]["image"][2]["#text"])}
catch(err){image.push("images/cabio.jpg")}
$(".span6").append("<tr>" + "<td>" + (i+1) + "</td>" + "<td >" +lis[i] + "</td>"  + "<td>" + artist[i] + "</td>" + "<td>" + playcounts[i] + "</td>" + "<td>" + (duration[i]/60).toFixed(2) + "</td>" + "<td>" + "<img src=\""+image[i]+"\"  width= 100px>" + "</td>" +"</tr>"+"<br>"
 );
};
}
});
});
$(document).ready(function() {
function az(a, b){
var A = a.toLowerCase();
var B = b.toLowerCase();
if (A < B){
return -1;
}else if (A > B){
return 1;
}else{
return 0;
}
};
function za(a, b){
var A = a.toLowerCase();
var B = b.toLowerCase();
if (A > B){
return -1;
}else if (A < B){
return 1;
}else{
return 0;
}
};
function order(a, b){
a = a/60
b = b/60
if (a<b) {return 1}else{return 0};
};
$(".top").click(function(){
$(".span6").empty();
OrderList.sort(az);
for (var i = 0; i <50; i++) {
$(".milton").append(
"<div class = 'row'>"+
	"<div class ='span12'>"+
	"<div class ='span3'>"+
		"<div class ='span6'>"+
"<tr>" + "<td>" + (i+1) + "</td>" + "<td >" +lis[i] + "</td>"  + "<td>" + artist[i] + "</td>" + "<td>" + playcounts[i] + "</td>" + "<td>" + (duration[i]/60).toFixed(2) + "</td>" + "<td>" + "<img src=\""+image[i]+"\"  width= 100px>" + "</td>" +"</tr>"+
			"<div class ='span3'>"	+
		"</div>"+
		"</div>"+
		"</div>"+
		"</div>"+
		"</div>"
	);
};
});
$(".az").click(function(){
$(".span6").empty();
OrderList.sort(az);
for (var x = 0; x <50; x++) {
for (var i = 0; i <50; i++) {
if (OrderList[x] === lis[i]) {
$(".span6").append("<tr>" + "<td>" + (i+1) + "</td>" + "<td >" +lis[i] + "</td>"  + "<td>" + artist[i] + "</td>" + "<td>" + playcounts[i] + "</td>" + "<td>" + (duration[i]/60).toFixed(2) + "</td>" + "<td>" + "<img src=\""+image[i]+"\" width= 100px>" + "</td>" +"</tr>");
};
};
};
});
$(".za").click(function(){
$(".span6").empty();
OrderList.sort(za);
for (var x = 0; x <50; x++) {
for (var i = 0; i <50; i++) {
if (OrderList[x] === lis[i]) {
var play = "http://img268.imageshack.us/img268/4378/buttonplayc.png"
$(".span6").append("<tr>" + "<td>" + (i+1) + "</td>" + "<td >" +lis[i] + "</td>"  + "<td>" + artist[i] + "</td>" + "<td>" + playcounts[i] + "</td>" + "<td>" + (duration[i]/60).toFixed(2) + "</td>" + "<td>" + "<img src=\""+image[i]+"\"  width= 100px>" + "</td>" +"</tr>");
};
};
};
});
$(".duration").click(function(){
$(".span6").empty();
OrderDuration.sort(order);
for (var x = 0; x <50; x++) {
for (var i = 0; i <50; i++) {
if (OrderDuration[x] === duration[i]) {
$(".span6").append("<tr>" + "<td>" + (i+1 ) + "</td>" + "<td >" +lis[i] + "</td>"  + "<td>" + artist[i] + "</td>" + "<td>" + playcounts[i] + "</td>" + "<td>" + (duration[i]/60).toFixed(2) + "</td>" + "<td>" + "<img src=\""+image[i]+"\" width= 100px>" + "</td>" +"</tr>");
};
};
};
});
$(".playcounts").click(function(){
$(".span6").empty();
OrderPlayCount.sort(order);
for (var x = 0; x <50; x++) {
for (var i = 0; i <50; i++) {
if (OrderPlayCount[x] === playcounts[i]) {
$(".span6").append("<tr>" + "<td>" + (i+1) + "</td>" + "<td >" +lis[i] + "</td>"  + "<td>" + artist[i] + "</td>" + "<td>" + playcounts[i] + "</td>" + "<td>" + (duration[i]/60).toFixed(2) + "</td>" + "<td>" + "<img src=\""+image[i]+"\"  width= 100px>" + "</td>" +"</tr>");
};
};
};
});
});


