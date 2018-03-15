var twitter =[
  {name:"Rick James", handle:"@rick_james",tweet: "pimping aint easy it's just real",timestamp:"03:17 - 14 sep 2017"},
  {name:"Beyonce Knowles", handle:"@beyonce", tweet:"pimping aint easy it's just real",timestamp:"03:17 - 14 sep 2017"},
  {name:"Macaulay Culkin", handle:"@IncredibleCulk", tweet:"pimping aint easy it's just real",timestamp:"03:17 - 14 sep 2017"}
];
function twittercardbuilder(twitter){
  var twittercard="";
for (var i = 0; i < twitter.length; i++) {
   twittercard += "<div class='card'>";
   twittercard +="<h1>" + twitter[i].name + "</h1>";
   twittercard +="<h2>" + twitter[i].handle + "</h2>";
   twittercard +="<p>" + twitter[i].tweet + "</p>";
   twittercard +="<p>" + twitter[i].timestamp + "</p>";
   twittercard += "</div>";
}
printToDom(twittercard, "main");
};
function printToDom(string, divID){
   var myDiv = document.getElementById(divID);
   myDiv.innerHTML = string;
};
twittercardbuilder(twitter);