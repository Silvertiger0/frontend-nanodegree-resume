var bio = {
    "name": "Christopher Grimes",
    "role": "Jack-of-all-trades",
    "contacts": {
        "email": "Tiger_shark189@hotmail.com",
        "github": "blahface",
        "mobile": "111-111-1111",
        "twitter": "",
        "location": "Columbus, Ohio"
    },
    "biopic": "images/my_emotes/pretty-onion-head-emoticon.gif",
    "welcome": "Greetings, I shall sing to you the song of my people!",
    "skills": [
        "python", "html", "css", "JavaScript", "singing", "trumpet", "piano", "cello", "violin", "drawing", "creative-writing", "problem-solving", "mechanical-repair", "trouble-shooting"
    ]
};

var work = {
    "jobs": [{
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
    "schools": [{
            "name": "Columbus State Community College",
            "location": "Columbus, Ohio",
            "dates": ["2003-2004", "2012-2015"],
            "degree": "AS",
            "major": "science",
        },
        {
            "name": "Community College of The Air Force",
            "location": "Gunter Annex, AL",
            "dates": "Nov 2004 - Oct 2011",
            "degree": "Aircraft Armament Systems Technician",
            "major": "applied science",
        },
    ],
    "onlineCourses": [{
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
    "projects": [{
            "title": "Title 1",
            "dates": "Sep 1234 - Oct 1235",
            "description": "At one point, I was studied by alien robots. They wanted to see how I reacted when given certain stimuli.",
            "images": [
                "images/my_emotes/serenade-onion-head-emoticon.gif", "images/my_emotes/robot-onion-head-emoticon.gif",
                "images/my_emotes/relax2-onion-head-emoticon.gif",
                "images/my_emotes/sleeping-onion-head-emoticon.gif"
            ]
        },
        {
            "title": "The Interest",
            "dates": "June 2016 - June 2017",
            "description": "I met this awesome woman, and she's pretty great!",
            "images": [
                "images/my_emotes/admire2-onion-head-emoticon.gif",
                "images/my_emotes/embarrassed4-onion-head-emoticon.gif",
                "images/my_emotes/happy-onion-head-emoticon.gif",
                "images/my_emotes/love-onion-head-emoticon.gif"
            ]
        }
    ]
};

// The following function is used to build and display my bio info
bio.display = function() {
    var formattedBioPic = HTMLbioPic.replace("%data%", "images/my_emotes/pretty-onion-head-emoticon.gif");
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
        formattedContacts = formattedContacts + " " + formattedMobile;
    }
    if (bio.contacts.github.length > 0) {
        formattedContacts = formattedContacts + " " + formattedGithub;
    }
    if (bio.contacts.twitter.length > 0) {
        formattedContacts = formattedContacts + " " + formattedTwitter;
    }
    if (bio.contacts.location.length > 0) {
        formattedContacts = formattedContacts + " " + formattedLocation;
    }
    $("#header").append(formattedContacts);
    $("#header").append(formattedBioPic);
    var formattedWelcome = HTMLwelcomeMsg.replace("%data%", bio.welcome);
    $("#header").append(formattedWelcome);
    if (bio.skills.length > 0) {
        $("#header").append(HTMLskillsStart);
        var skills4bills = [];
        for (var i = 0; i < bio.skills.length; i++) {
            var skill = bio.skills[i];
            var formattedSkills = HTMLskills.replace("%data%", skill);
            skills4bills.push(formattedSkills);
        }
        $("#skills").append(skills4bills);
    }
};

bio.display();

// This function internationalizes my resume by taking my family name and capitalizing it as well as standardizing my given name.
function inName(name) {
    name = name.trim().split(" ");
    console.log(name);
    var first = name[0].slice(0, 1).toUpperCase() + name[0].slice(1).toLowerCase();
    var last = name[1].toUpperCase();
    return first + " " + last;
}

$("#main").append(internationalizeButton);

// This function is used to generate my work experience section.
work.display = function() {
    //for (element in work.jobs){
    for (var i = 0; i < work.jobs.length; i++) {
        var element = work.jobs[i];
        $("#workExperience").append(HTMLworkStart);
        var formattedEmployer = HTMLworkEmployer.replace("%data%", element.employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", element.title);
        var formattedDate = HTMLworkDates.replace("%data%", element.dates);
        var formattedDescription = HTMLworkDescription.replace("%data%", element.description);
        var formattedLocation = HTMLworkLocation.replace("%data%", element.location);
        $(".work-entry:last").append(formattedEmployer + formattedTitle);
        $(".work-entry:last").append(formattedDate + formattedLocation);
        $(".work-entry:last").append(formattedDescription);
    }
};

work.display();

// This function allows for the tracking of cliks on the resume webpage. This may be useful for statistics and/or metrics.
$(document).click(function(loc) {
    var x = loc.pageX;
    var y = loc.pageY;
    logClicks(x, y);
});

// This function is used to generate and display my education section.
education.display = function() {
    //for (element in education.schools){
    for (var i = 0; i < education.schools.length; i++) {
        var element = education.schools[i];
        $("#education").append(HTMLschoolStart);
        var formattedschoolName = HTMLschoolName.replace("%data%", element.name);
        $(".education-entry:last").append(formattedschoolName);

        var formattedschoolDegree = HTMLschoolDegree.replace("%data%", element.degree);
        $(".education-entry:last").append(formattedschoolDegree);

        var formattedschoolLocation = HTMLschoolLocation.replace("%data%", element.location);
        $(".education-entry:last").append(formattedschoolLocation);

        var formattedschoolDates = HTMLschoolDates.replace("%data%", element.dates);
        $(".education-entry:last").append(formattedschoolDates);

        var formattedschoolMajor = HTMLschoolMajor.replace("%data%", element.major);
        $(".education-entry:last").append(formattedschoolMajor);
    }

    $("#education").append(HTMLonlineClasses);
    for (var j = 0; j < education.onlineCourses.length; j++) {
        var course = education.onlineCourses[j];
        //$("#education").append(HTMLonlineClasses);
        $("#education").append(HTMLonlineStart);

        var formattedonlineTitle = HTMLonlineTitle.replace("%data%", course.title);
        $(".online-entry:last").append(formattedonlineTitle);

        var formattedonlineSchool = HTMLonlineSchool.replace("%data%", course.school);
        $(".online-entry:last").append(formattedonlineSchool);

        var formattedonlineDates = HTMLonlineDates.replace("%data%", course.dates);
        $(".online-entry:last").append(formattedonlineDates);

        var formattedonlineURL = HTMLonlineURL.replace("%data%", course.url);
        $(".online-entry:last").append(formattedonlineURL);

    }
};

education.display();

// This function will be used to generate and display any projects I may have worked on. For now, it shows a random goofball example.
projects.display = function() {
    for (var i = 0; i < projects.projects.length; i++) {
        var part = projects.projects[i];
        $("#projects").append(HTMLprojectStart);

        var formattedTitle = HTMLprojectTitle.replace("%data%", part.title);
        $(".project-entry:last").append(formattedTitle);

        var formattedDate = HTMLprojectDates.replace("%data%", part.dates);
        $(".project-entry:last").append(formattedDate);

        var formattedDescription = HTMLprojectDescription.replace("%data%", part.description);
        $(".project-entry:last").append(formattedDescription);

        if (part.images.length > 0) {
            for (var j = 0; j < part.images.length; j++) {
                var formattedImage = HTMLprojectImage.replace("%data%", part.images[j]);
                $(".project-entry:last").append(formattedImage);
            }
        }
    }
};

projects.display();

$("#mapDiv").append(googleMap);
