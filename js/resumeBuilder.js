/*
This is empty on purpose! Your code to build the resume will go here.
 */
//all the JavaScript objects
var bio = {
    "name": "Sweta Kumari",
    "role": "Front-End Web Developer",
    "contacts": {
        "mobile": "9234750068",
        "email": "sweta191995@gmail.com",
        "github": "swetakumari95",
        "location": "Bangalore, India"
    },
    "welcomeMessage": "Hey! I am currently a student and am interested in Web Development.",
    "skills": ["HTML", "CSS", "JavaScript", "C", "Python"],
    "biopic": "https://avatars0.githubusercontent.com/u/25175698?v=3&s=400",
    "display": function() {

        //adding elements from bio object
        var formattedName = HTMLheaderName.replace("%data%", bio.name);
        var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
        $("#header").prepend(formattedRole);
        $("#header").prepend(formattedName);

        //adding contact information from bio
        $("#topContacts, #footerContacts").append(HTMLmobile.replace("%data%", bio.contacts.mobile));
        $("#topContacts, #footerContacts").append(HTMLemail.replace("%data%", bio.contacts.email));
        $("#topContacts, #footerContacts").append(HTMLgithub.replace("%data%", bio.contacts.github));
        $("#topContacts, #footerContacts").append(HTMLlocation.replace("%data%", bio.contacts.location));

        $("#header").append(HTMLbioPic.replace("%data%", bio.biopic));
        $("#header").append(HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage));

        if (bio.skills.length !== 0) {
            $("#header").append(HTMLskillsStart);
            bio.skills.forEach(function(item) {
                $("#skills").append(HTMLskills.replace("%data%", item));
            });
        }
    }
};

var education = {
    "schools": [{
            "name": "Hill Top School",
            "location": "Jamshedpur, India",
            "degree": "High School",
            "majors": ["Computer Science"],
            "dates": "1st April,1998 - 31st March,2014",
            "url": "http://www.hilltopschooljamshedpur.org/"
        },
        {
            "name": "RNS Institute Of Technology",
            "location": "Bangalore, India",
            "degree": "BE",
            "majors": ["Computer Science and Engineering"],
            "dates": "1st August,2014 - 31st July,2018",
            "url": "http://www.rnsit.ac.in/"
        }
    ],
    "onlineCourses": [{
        "title": "Front-End Nanodegree",
        "school": "Udacity",
        "dates": "February,2017 and ongoing",
        "url": "https://in.udacity.com/"
    }, {
        "title": "HTML&CSS, Jquery, Sass, Ruby, Git",
        "school": "Codecademy",
        "dates": "2016 onwards",
        "url": "https://www.codecademy.com/learn"
    }],
    "display": function() {
        education.schools.forEach(function(school) {
            $("#education").append(HTMLschoolStart);
            $(".education-entry:last").append(HTMLschoolName.replace("%data%", school.name) + HTMLschoolDegree.replace("%data%", school.degree));
            $(".education-entry:last").append(HTMLschoolDates.replace("%data%", school.dates));
            $(".education-entry:last").append(HTMLschoolLocation.replace("%data%", school.location));
            school.majors.forEach(function(major) {
                $(".education-entry:last").append(HTMLschoolMajor.replace("%data%", major));
            });
            $(".education-entry:last").append("<hr>");
        });

        $("#education").append(HTMLonlineClasses);
        education.onlineCourses.forEach(function(course) {
            $("#education").append(HTMLschoolStart);
            $(".education-entry:last").append(HTMLonlineTitle.replace("%data%", course.title) + HTMLonlineSchool.replace("%data%", course.school));
            $(".education-entry:last").append(HTMLonlineDates.replace("%data%", course.dates));
            $(".education-entry:last").append(HTMLonlineURL.replace("%data%", course.url));
            $(".education-entry:last").append("<hr>");
        });
    }
};

var work = {
    "jobs": [{
        "employer": "Let's Be The Change",
        "title": "Front-End Web Developer",
        "location": "Bangalore, India",
        "dates": "in progress",
        "description": "Making a website for the NGO from scratch"
    }],
    "display": function() {
        work.jobs.forEach(function(job) {
            $("#workExperience").append(HTMLworkStart);
            $(".work-entry:last").append(HTMLworkEmployer.replace("%data%", job.employer) + HTMLworkTitle.replace("%data%", job.title));
            $(".work-entry:last").append(HTMLworkLocation.replace("%data%", job.location));
            $(".work-entry:last").append(HTMLworkDates.replace("%data%", job.dates));
            $(".work-entry:last").append(HTMLworkDescription.replace("%data%", job.description));
        });
    }
};

var projects = {
    "projects": [{
        "title": "Catch em!",
        "dates": "November,2016",
        "description": "A game to catch as many pigs in one minute, using HTML, CSS, JavaScript and jQuery",
        "images": ["images/catchem.png"]
    }, {
        "title": "Simple Calculator",
        "dates": "December, 2016",
        "description": "A simple calculator using HTML, CSS and JavaScript",
        "images": ["images/calculator.png"]
    }, {
        "title": "Portfolio",
        "dates": "March,2017",
        "description": "Portfolio website",
        "images": ["images/portfolio.png"]
    }],
    "display": function() {
        projects.projects.forEach(function(proj) {
            $("#projects").append(HTMLprojectStart);
            $(".project-entry:last").append(HTMLprojectTitle.replace("%data%", proj.title));
            $(".project-entry:last").append(HTMLprojectDates.replace("%data%", proj.dates));
            $(".project-entry:last").append(HTMLprojectDescription.replace("%data%", proj.description));
            proj.images.forEach(function(image) {
                $(".project-entry:last").append(HTMLprojectImage.replace("%data%", image));
            });
            $(".project-entry:last").append("<hr>");
        });
    }
};

bio.display();
work.display();
projects.display();
education.display();

$("#mapDiv").append(googleMap);
