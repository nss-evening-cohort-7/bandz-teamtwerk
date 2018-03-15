function redirect()
    {
    var url = "https://www.ticketmaster.com/";
    window.location.href= url;
    }

var tours = [
    {
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
      strang += "<div class='tours'>";
      strang += "<h4>" + tours.date + "</h4>";
      strang += "<h5>" + tours.time + "</h5>";
      strang += "<h3>" + tours.location + "</h3>";
      strang += "<h3>" + tours.venue + "</h3>";
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