var tours = [
    {
        Date: "June 12, 2018",
        Time: "5:00 pm",
        Location: "Brooklyn, NY",
        Venue: "Barclays Center",

    },
    {
        Date: "August 8, 2018",
        Time: "6:00 pm",
        Location: "Oakland, CA",
        Venue: "Oracle Arena",

    },
    {
        Date: "October 31, 2018",
        Time: "7:00 pm",
        Location: "Houston, TX",
        Venue: "Toyota Center",

    },
    {
        Date: "January 5, 2018",
        Time: "7:00 pm",
        Location: "Macau, China",
        Venue: "Cotai Arena",

    },
    {
        Date: "March 3, 2018",
        Time: "5:00 pm",
        Location: "Berlin, Germany",
        Venue: "Mercedes-Benz Arena",

    },
    {
        Date: "May 23, 2018",
        Time: "5:00 pm",
        Location: "Saitama, Japan",
        Venue: "Saitama Super Arena",

    },
];

function tourStringBuilder(tourArray){
    tourArray.forEach(function(tours){
      var strang = "";
      strang += "<div class='tours'>";
      strang += "<h2>" + tours.date + "</h2>";
      strang += "<h2>" + tours.time + "</h2>";
      strang += "<h2>" + tours.location + "</h2>";
      strang += "<h2>" + tours.venue + "</h2>";
      strang += "</div>";
      printToDom(strang, 'tour-holder')
    })
  }
  
  function printToDom(domString, divId){
    var element = document.getElementById(divId);
    element.innerHTML += domString;
  }
  
  dinoStringBuilder(tours);


//https://en.wikipedia.org/wiki/24K_Magic_World_Tour