var bio = {

    "name": "Julie Hull",
    "role": "Front End Web Developer",
    "contacts": {
        "mobile": "619-742-8540",
        "email": "juliehullwebdev@gmail.com",
        "github": "jhull1",
        "location": "San Diego, CA, USA",
    },
    "welcomeMsg": "Hi, I'm Julie. Let me create for you!", //listed as welcomeMessage in rubric
    "skills": ["CSS", " HTML", " JavaScript", " jQuery", " Bootstrap"],
    "bioPic": "images/me.jpeg",
};

var education = {

    "schools": [{
            "name": "University of California, San Diego",
            "degree": "Post-Bacc",
            "dates": "January 2012-May 2015",
            "location": "La Jolla, CA, USA",
            "majors": "Biological Sciences"
        },
        {
            "name": "University of Notre Dame",
            "degree": "Bachelor of Science",
            "dates": "August 2007-May 2011",
            "location": "South Bend, IN, USA",
            "majors": "Biological Sciences and Spanish",
        },
        {
            "name": "Patrick Henry High School",
            "degree": "HS Diploma",
            "dates": "August 2003-June 2007",
            "location": "San Diego, CA, USA",
            "majors": "n/a",
        },
    ],
    "onlineCourses": [{
            "title": "Intro to HTML and CSS",
            "school": "Udacity",
            "link": "Udacity.com",
            "url": "https://www.udacity.com/nanodegree",
            "dates": "January 2017"
        },
        {
            "title": "Intro to Javascript",
            "school": "Udacity",
            "link": "Udacity.com",
            "url": "https://www.udacity.com/nanodegree",
            "dates": "February 2017"
        },
        {
            "title": "Intro to jQuery",
            "school": "Udacity",
            "link": "Udacity.com",
            "url": "https://www.udacity.com/nanodegree",
            "dates": "March 2017"
        },
        {
            "title": "Version Control with Github",
            "school": "Udacity",
            "link": "Udacity.com",
            "url": "https://www.udacity.com/nanodegree",
            "dates": "April 2017"
        }
    ],
};

var work = {

    "jobs": [{
            "employer": "Starbucks Coffee Company",
            "title": "Shift Supervisor",
            "location": "La Jolla, CA, USA",
            "dates": "May 2015-August 2016",
            "description": "Direct barista workflow, cash handling/deposits, manage schedules and breaks, maintain product inventory/ordering, train employees, spearhead customer service, open and close store."
        },

        {
            "employer": "Advanced Brain Monitoring",
            "title": "Research Technician",
            "dates": "August 2014-May 2015",
            "location": "Carlsbad, CA, USA",
            "description": "Communicate protocol and obtain consent from research subjects, apply EEG, monitor experiemnt, collect data, assist with experiment design and data analysis.",
        },
    ],
};

var projects = {

    "projects": [{
            "title": "J and J Baking Co.",
            "dates": "May 2017",
            "description": "Responsive And Interactive Website for Cake Buisness",
            "image": [
                "images/fry.jpg",
            ],
        },
        {
            "title": "Health Tracker",
            "dates": "June 2017",
            "description": "An app that measures and records health stats",
            "image": [
                "images/fry.jpg",
            ],
        },

    ],
};

//header code
bio.display = function() {
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role); //fine
    var formattedName = HTMLheaderName.replace("%data%", bio.name); //fine
    var formattedbioPic = HTMLbioPic.replace("%data%", bio.bioPic);
    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
    var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
    var formattedwelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMsg);
    $("#header").append(formattedName);
    $("#header").append(formattedRole);
    $("#header").prepend(formattedbioPic);
    $("#topContacts, #footerContacts").append(formattedMobile);
    $("#topContacts, #footerContacts").append(formattedEmail);
    $("#topContacts, #footerContacts").append(formattedGithub);
    $("#topContacts").append(formattedLocation);
    $("#header").append(formattedwelcomeMsg);

  $("#header").append(HTMLskillsStart); //skills bar section, loop
    for (var i = 0; i < bio.skills.length; i++) {
        var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
        $("#skills").append(formattedSkill);
    }
};
bio.display();

//education code
education.display = function() {
    education.schools.forEach(function(school) {
        $("#education").append(HTMLschoolStart);
        var formattedschoolName = HTMLschoolName.replace("%data%", school.name);
        var formattedschoolDegree = HTMLschoolDegree.replace("%data%", school.degree);
        var formattedschoolDates = HTMLschoolDates.replace("%data%", school.dates);
        var formattedschoolLocation = HTMLschoolLocation.replace("%data%", school.location);
        var formattedschoolMajor = HTMLschoolMajor.replace("%data%", school.majors);
        $(".education-entry:last").append(formattedschoolName);
        $(".education-entry:last").append(formattedschoolDegree);
        $(".education-entry:last").append(formattedschoolDates);
        $(".education-entry:last").append(formattedschoolLocation);
        $(".education-entry:last").append(formattedschoolMajor);
    });
    //online classes section
    $("#education").append(HTMLonlineClasses);
    $("#education").append(HTMLschoolStart);
    education.onlineCourses.forEach(function(oclass) {
        var formattedonlineTitle = HTMLonlineTitle.replace("%data%", oclass.title);
        var formattedonlineSchool = HTMLonlineSchool.replace("%data%", oclass.school);
        var formattedonlineDates = HTMLonlineDates.replace("%data%", oclass.dates);
        //var formattedonlineURL = HTMLonlineURL.replace("%data%", oclass.url);
        var formattedonlineURL = HTMLonlineURL.replace("%url%", oclass.url).replace("%data%", oclass.link);
        $(".education-entry:last").append(formattedonlineTitle);
        $(".education-entry:last").append(formattedonlineSchool);
        $(".education-entry:last").append(formattedonlineDates);
        $(".education-entry:last").append(formattedonlineURL);
    });
};
education.display();

//work code
work.display = function() {
    work.jobs.forEach(function(jobs) {
        $("#workExperience").append(HTMLworkStart);
        var formattedEmployer = HTMLworkEmployer.replace("%data%", jobs.employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", jobs.title);
        var formattedDates = HTMLworkDates.replace("%data%", jobs.dates);
        var formattedLocation = HTMLworkLocation.replace("%data%", jobs.location);
        var formattedDescription = HTMLworkDescription.replace("%data%", jobs.description);
        var formattedEmployerTitle = formattedEmployer + formattedTitle;
        $(".work-entry:last").append(formattedEmployerTitle);
        $(".work-entry:last").append(formattedDates);
        $(".work-entry:last").append(formattedLocation);
        $(".work-entry:last").append(formattedDescription);
    });
};
work.display();

//projects code
projects.display = function() {
    projects.projects.forEach(function(project) {
        $("#projects").append(HTMLprojectStart);
        var formattedTitle = HTMLprojectTitle.replace("%data%", project.title);
        var formattedDates = HTMLprojectDates.replace("%data%", project.dates);
        var formattedDescription = HTMLprojectDescription.replace("%data%", project.description);
        $(".project-entry:last").append(formattedTitle);
        $(".project-entry:last").append(formattedDates);
        $(".project-entry:last").append(formattedDescription);

        if (project.image.length > 0) { //loop to include images in array
            project.image.forEach(function(image) {
                var formattedImage = HTMLprojectImage.replace("%data%", project.image);
                $(".project-entry:last").append(formattedImage);
            });
        }
    });
};
projects.display();
$("#mapDiv").append(googleMap);
