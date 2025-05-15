export function getProjectList(key = 'all'){

    let projectList = {
        "MovieMapper": {
            "title": "MovieMapper",
            "description": "Developed an IOS app using Swift and REST APIs to provide nearby theater listings, movie details, and direct ticket reservation links, achieving a 4/5 user satisfaction rating by designing a user-friendly interface.",
            "technologies": ["IOS", "Swift", "Rest APIs"],
            "url": "/projects/project?name=MovieMapper"
        },
        "Scraper": {
            "title": "Broken Links Web Scraper",
            "description": "Directed the refactoring and documentation of a Selenium-based scraper for a client, improving functionality by implementing OOP principles and multithreading, resulting in a 500% performance boost as measured by runtime efficiency.",
            "technologies": ["Selenium", "Multihtreading", "Python"],
            "url": "/projects/project?name=Scraper"

        },
        "BetterReader": {
            "title": "Better Reader",
            "description": "Directed the refactoring and documentation of a Selenium-based scraper for a client, improving functionality by implementing OOP principles and multithreading, resulting in a 500% performance boost as measured by runtime efficiency.",
            "technologies": ["..."],
            "url": "/projects/project?name=BetterReader"
        }
        
    }
    if (key =='all'){
        return projectList;
    }
    else{
        return projectList[key];
    }
}