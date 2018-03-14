var twitter = ["Rick James", "@rick_james", "pimping aint easy it's just real","03:17 - 14 sep 2017"];
var twitter2 = ["Beyonce Knowles", "@beyonce", "pimping aint easy it's just real","03:17 - 14 sep 2017"];
var twitter3 = ["Macaulay Culkin", "@IncredibleCulk", "pimping aint easy it's just real","03:17 - 14 sep 2017"];

console.log(twitter);
console.log(twitter2);
console.log(twitter3);

function twittercardbuilder(twitter){
    twitter.forEach(function(twitter){
      var string = "";
      string += "<div class=''>";
      string += "<h1>" + twitter + "</h1>";
      string += "</div>";
      printToDom(string, 'cards')
    })
  }

function printToDom(string, divID){
   var myDiv = document.getElementById(divID);
   console.log("myDiv:", myDiv);
   myDiv.innerHTML += string;
}

twittercardbuilder(twitter);