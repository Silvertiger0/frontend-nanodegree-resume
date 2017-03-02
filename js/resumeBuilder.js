//var awesomeThoughts = "I am The Silver Tiger and I am AWESOME!";
//var firstName = "Christopher";
//var lastName = "Grimes";
//var name = "Christopher O Grimes";
//var role = "Musician"
/*
This is empty on purpose! Your code to build the resume will go here.
 */
 //$("#main").append("Bob");
//[string].replace([old],[new])
//var think = awesomeThoughts;
//var funThoughts = think.replace("AWESOME","FUN");
//$("#main").append(think);
//
//var skills = ["drawing", "writing", "fixing", "learning"];
//$("#main").append(skills);
//$("#main").append(skills[0]);

var bio = {
  "name" : "Christopher Grimes",
  "role" : "Jack-of-all-trades",
  "contacts" : {
    "email" : "Tiger_shark189@hotmail.com",
    "github" : "blahface",
    "mobile" : "111-111-1111",
    "twitter": "",
    "location" : "The Citadel Presidium, Serpent Nebula"
  },
  "biopic" : HTMLbioPic.replace("%data%","images/my emotes/pretty-onion-head-emoticon.gif"),
  "welcome" : "Greetings, I shall sing to you the song of my people!",
  "skills" : [
    "python", "html", "css", "java", "singing", "trumpet", "piano", "cello", "violin", "drawing", "creative-writing", "problem-solving", "mechanical-repair", "trouble-shooting"
  ]
};

var work = {
  "jobs": [
    {
      "employer": "USAF",
      "title": "Aircraft Weapons System Technician",
      "dates": "Nov 2004 - Oct 2011",
      "location": "Misawa, Japan",
      "description": "Maintain, load, trouble-shoot, repair aircraft mechanical and electrical weapon systems.",
  },
  {
    "employer": "BFFNation",
    "title": "Junior Programmer",
    "dates": "Jun 2014 - present",
    "location": "Columbus, Ohio",
    "description": "Manage computer systems and information.",
},
  ]
};

var education = {
  "schools": [
    {
      "name": "Columbus State Community College",
      "city": "Columbus, Oh",
      "dates": ["2003-2004", "2012-2015"],
      "degree": "AS",
      "major": "science",
    },
    {
      "name": "Community College of The Air Force",
      "city": "Gunter Annex, AL",
      "dates": "Nov 2004 - Oct 2011",
      "degree": "",
      "major": "applied science",
    },
  ],
  "onlineCourses": [
    {
       "title": "Intro to CompSci",
       "school": "Udacity",
       "dates": "2016",
       "url": "https://www.udacity.com/course/intro-to-computer-science--cs101"
     },
     {
       "title": "JavaScript Basics",
       "school": "Udacity",
       "dates": "2016",
       "url": "https://www.udacity.com/course/javascript-basics--ud804"
     },
     {
       "title": "How to Use Git and GitHub",
       "school": "Udacity",
       "dates": "2016",
       "url": "https://www.udacity.com/course/how-to-use-git-and-github--ud775"
     },
     {
       "title": "Programming Foundations w/ Python",
       "school": "Udacity",
       "dates": "2016",
       "url": "https://www.udacity.com/course/programming-foundations-with-python--ud036"
     },
     {
       "title": "Intro to HTML and CSS",
       "school": "Udacity",
       "dates": "2016",
       "url": "https://www.udacity.com/course/intro-to-html-and-css--ud304"
     }
   ]
};

var projects = {
  "projects": [
    {
      "title": "Title 1",
      "dates": "Sep 1234 - Oct 1235",
      "description": "Here is a description of this project.",
      "images": [
        "images/my emotes/serenade-onion-head-emoticon.gif", "images/my emotes/robot-onion-head-emoticon.gif",
        "images/my emotes/relax2-onion-head-emoticon.gif",
        "images/my emotes/sleeping-onion-head-emoticon.gif"
      ]
  }
  ]
};

var displayBio = function() {
  var formattedName = HTMLheaderName.replace("%data%", bio.name);
  $("#header").append(formattedName);
  var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
  $("#header").append(formattedRole);
  var formattedContacts = HTMLemail.replace("%data%", bio.contacts.email);
  var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
  var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
  var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
  var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
  if (bio.contacts.mobile.length > 0) {
    formattedContacts = formattedContacts+" "+formattedMobile
  };
  if (bio.contacts.github.length > 0) {
    formattedContacts = formattedContacts+" "+formattedGithub
  };
  if (bio.contacts.twitter.length > 0) {
    formattedContacts = formattedContacts+" "+formattedTwitter
  };
  if (bio.contacts.location.length > 0) {
    formattedContacts = formattedContacts+" "+formattedLocation
  };
  $("#header").append(formattedContacts);
  $("#header").append(bio.biopic);
  var formattedWelcome = HTMLwelcomeMsg.replace("%data%", bio.welcome);
  $("#header").append(formattedWelcome);
  if (bio.skills.length > 0) {
    $("#header").append(HTMLskillsStart);
    var skills4bills = []
    for (skill in bio.skills){
      var formattedSkills = HTMLskills.replace("%data%", bio.skills[skill]);
      skills4bills.push(formattedSkills)
    };
    $("#skills").append(skills4bills);
  };
};

displayBio()

//for (element in work.jobs){
  //if (work.jobs.length > 0){
  //$("#workExperience").append(HTMLworkStart);
  //var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[element].employer);
  //var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[element].title);
  //var formattedDate = HTMLworkDates.replace("%data%", work.jobs[element].dates);
  //var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[element].description);
  //var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[element].location);
  //$(".work-entry:last").append(formattedEmployer+formattedTitle);
  //$(".work-entry:last").append(formattedDate+formattedLocation);
  //$(".work-entry:last").append(formattedDescription);
//};
//};

function inName(name){
  name = name.trim().split(" ");
  console.log(name);
  first = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();
  last = name[1].toUpperCase();
  return first+" "+last;
};

$("#main").append(internationalizeButton)

var displayWork = function(){
  for (element in work.jobs){
    if (work.jobs.length > 0){
    $("#workExperience").append(HTMLworkStart);
    var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[element].employer);
    var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[element].title);
    var formattedDate = HTMLworkDates.replace("%data%", work.jobs[element].dates);
    var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[element].description);
    var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[element].location);
    $(".work-entry:last").append(formattedEmployer+formattedTitle);
    $(".work-entry:last").append(formattedDate+formattedLocation);
    $(".work-entry:last").append(formattedDescription);
  };
  };
};

displayWork();

$(document).click(function(loc) {
  var x = loc.pageX;
  var y = loc.pageY;
  logClicks(x,y)// your code goes here
});



projects.display = function() {
  for (part in projects.projects){
    $("#projects").append(HTMLprojectStart);

    var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[part].title);
    $(".project-entry:last").append(formattedTitle);

    var formattedDate = HTMLprojectDates.replace("%data%", projects.projects[part].dates);
    $(".project-entry:last").append(formattedDate);

    var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[part].description);
    $(".project-entry:last").append(formattedDescription);

    if (projects.projects[part].images.length > 0) {
      for (img in projects.projects[part].images) {
        var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[part].images[img]);
        $(".project-entry:last").append(formattedImage);
      };
    };
  };
};
projects.display()

$("#mapDiv").append(googleMap);
