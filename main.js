function redirect()
    {
    var url = "https://www.ticketmaster.com/";
    window.location.href= url;
    }

var tours = [
    {
        image: "img/BarclaysCenter.jpg",
        date: "June 12, 2018",
        time: "5:00 pm",
        location: "Brooklyn, NY",
        venue: "Barclays Center",

    },
    {
        image: "img/OracleArena.jpg",
        date: "August 8, 2018",
        time: "6:00 pm",
        location: "Oakland, CA",
        venue: "Oracle Arena",

    },
    {
        image: "img/ToyotaCenter.jpg",
        date: "October 31, 2018",
        time: "7:00 pm",
        location: "Houston, TX",
        venue: "Toyota Center",

    },
    {
        image: "img/CotaiArena.jpg",
        date: "January 5, 2018",
        time: "7:00 pm",
        location: "Macau, China",
        venue: "Cotai Arena",

    },
    {
        image: "img/MercedesArena.jpeg",
        date: "March 3, 2018",
        time: "5:00 pm",
        location: "Berlin, Germany",
        venue: "Mercedes-Benz Arena",

    },
    {
        image: "img/SaitamaSuperArena.jpg",
        date: "May 23, 2018",
        time: "5:00 pm",
        location: "Saitama, Japan",
        venue: "Saitama Super Arena",

    }
];

    function printToDom(domString,id){
        if(document.getElementById(id) !== null){
            document.getElementById(id).innerHTML = domString; 
        }    
    }

  function tourStringBuilder(tourArray){
    var strang = "";
    for(var i = 0; i < tourArray.length; i++)
    {
      strang += "<img class='tourImage' src='"+ tourArray[i].image +"'>";
      strang += "<div class='tour'>";
      strang += "<div> <span class='tourDate'>" 
      + tourArray[i].date + " </span><span class='tourTime'> " 
      + " @ " + tourArray[i].time +"</span></div>";
      strang += "<div>" + tourArray[i].location + "</div>";
      strang += "<div>" + tourArray[i].venue + "</div>";
      strang += "</div>";
    }
    printToDom(strang, 'tour-holder');
  }
   
  tourStringBuilder(tours);

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
   printToDom(twittercard, "tcard");
   
};
function printToDom(string, divID){
   var myDiv = document.getElementById(divID);
   if ( myDiv != null){
    myDiv.innerHTML = string;
   }
  
};
twittercardbuilder(twitter);


var members = [
    { 
        name: "Brian Wright",
        nickname: "Bushwick Brian",
        picture: "img/babe-slayer.jpg",
        bio: "Bushwick Brian is the all in one package front man for this Irish hip hop Folk Jazz Death Country Band. Born in the hill tops of the Andes Mountains, Bushwick Brian, having no access to musical instruments, has trained his vocal chords so well that even the hearing impaired could hear his sweet, sweet melodies and sense of pitch. He knew that there was some sort of divine calling for him to move to America to share his ability to vibrate his voice box so well that it could calm even the most vicious stampede of wildebeests. Upon arriving in America, he heard a sound of holy riffs echoing in the heavens. Bushwick Brian couldn't resist the urge to follow this holy song. As he came closer, a silhouette of man playing the guitar appeared on the horizon. This man later became the guitarist for the band later to be name Team Twerk."
    },
    {
        name: "Jeff Chen",
        nickname: "Jeffro the Hulkstein",
        picture: "img/jeffro.jpg",
        bio: "Jeffro was created in a high security, top-secret laboratory, as a part of an experiment thats goal was to put the beast of all knowledge of all things into the body of a Frankenstein/Hulk. Knowing everything there is to know about the world caused Jeffro many emotions and the only thing to bring these emotions into a calm state was playing the guitar. By doing this so often he became the most fantastical 6 string plucker. Tales were told of him so far west of the Mississippi people on the east bank heard them. Shortly after the uniting of Babe-Slayer and Jeffro they started looking for a third member of the band the needed to fill the most important spot...Cowbell! There were rumors of a cowbell player that could cure common colds and indigestion with her bell of healing."
    },
    {
        name: "Amanda Mitchell",
        nickname: "Bell No",
        picture: "img/bell-no.jpg",
        bio: "Bell No was born in an abandoned church south north of the west eastern region of somewhere. As a little girl she would like to scare the pigeons in the bell towers of the church to past the time. One mid afternoon, she was stalking this real girthy pigeon, like a cat about to pounce on its prey, when she got close enough to attack she didn't hesitate. She scared this pigeon so bad it shot up into the air to take flight an ran into one of the bells breaking its neck and killing it. The combination shattered bird spine and bell ringing resonated within her heart creating this passion of playing bells. She would play bell shows for anyone who would listen. One day on her way to buy the brand new cow-beller 2500 she ran into Babe-Slayer and Jeffro the Hulkstein. That day the band grew one more member and was missing only one piece to their puzzle....a drummer."
    },
    {
        name: "Maken Hubbard",
        nickname: "Pepto Biz Markie",
        picture: "img/pepto.jpg",
        bio:"Babe-Slayer and Jeffro mentioned to Bell No that all that they lacked in having the worlds most supreme rag tag group of musicians was a drummer. Bell No told them that there was this drunk homeless man that would air drum all day long for tips in front of the abandon music store where she would get her bells. She told them that since he would air drum she didn't know if he had the chops to make the cut into the band but she told them that it looked that if there were drums in front of him he probably would be decent. So they continued through the abandoned town to the abandon music store to find this man. Sure enough, the homeless man was air drumming, what looked to be this wicked funk-tastic beat, and Babe-Slayer approached him and asked his name. His name was Pepto Biz Markie and he was abandoned there and was left with nothing but booze and air to beat on. The members of Team Twerk found some old paint buckets and slid them in front of him. The technicality of his beats were so technical he technically had the skills of a technician, a beat technician. Thus, form the mightiest, most bestest Irish Hip Hop Folk Jazz Death Country band ever to have been in the history of being."
    }    
];



function dismember(members){
    var who = '';
    var aka = '';
    var about = '';
    var image = '';
    var result = '';
    for (var i = 0; i < members.length; i++) {
        who = members[i].name;
        aka = members[i].nickname;
        image = members[i].picture;
        about = members[i].bio;
        result += "<div><h2 class='heads'>" + who + ": " + "'" + aka + "'" + "</h2>" + "<p class='para'><img class='members-pic' src='" + image + "'>" + about + "</p></div>";
        
    }
    console.log(result);
    printToDom(result,"bio");
}
dismember(members);
