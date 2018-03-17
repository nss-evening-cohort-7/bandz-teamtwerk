function redirect()
    {
    var url = "https://www.ticketmaster.com/";
    window.location.href= url;
    }

var tours = [
    {
        image: "image1.jpg",
        date: "June 12, 2018",
        time: "5:00 pm",
        location: "Brooklyn, NY",
        venue: "Barclays Center",

    },
    {
        date: "August 8, 2018",
        time: "6:00 pm",
        location: "Oakland, CA",
        venue: "Oracle Arena",

    },
    {
        date: "October 31, 2018",
        time: "7:00 pm",
        location: "Houston, TX",
        venue: "Toyota Center",

    },
    {
        date: "January 5, 2018",
        time: "7:00 pm",
        location: "Macau, China",
        venue: "Cotai Arena",

    },
    {
        date: "March 3, 2018",
        time: "5:00 pm",
        location: "Berlin, Germany",
        venue: "Mercedes-Benz Arena",

    },
    {
        date: "May 23, 2018",
        time: "5:00 pm",
        location: "Saitama, Japan",
        venue: "Saitama Super Arena",

    },
];

function tourStringBuilder(tourArray){
    tourArray.forEach(function(tours){
      var strang = "";
      strang += "<img class='tourImage' src='"+tours.image+"'>";
      strang += "<div class='tour'>";
      strang += "<div> <span class='tourDate'>" 
      + tours.date + " </span><span class='tourTime'> " 
      + " @ " + tours.time +"</span></div>";
      strang += "<div>" + tours.location + "</div>";
      strang += "<div>" + tours.venue + "</div>";
      strang += "</div>";
      printToDom(strang, 'tour-holder')
    })
  }
  
  function printToDom(domString, divId){
    var element = document.getElementById(divId);
    element.innerHTML += domString;
  }
  
  tourStringBuilder(tours);


//https://en.wikipedia.org/wiki/24K_Magic_World_Tour