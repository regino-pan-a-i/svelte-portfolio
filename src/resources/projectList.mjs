export function getProjectList(key = 'all'){

    let projectList = {
    "MovieMapper": {
        "title": "MovieMapper",
        "description": "Developed an iOS app using Swift and REST APIs to provide nearby theater listings, movie details, and direct ticket reservation links. Achieved a 4/5 user satisfaction rating by designing an intuitive and user-friendly interface.",
        "technologies": ["iOS", "Swift", "REST APIs"],
        "url": "/projects/project?name=MovieMapper"
    },
    "Scraper": {
        "title": "Broken Links Web Scraper",
        "description": "Directed the refactoring and documentation of a Selenium-based scraper for a client, improving functionality through OOP principles and multithreading. Achieved a 500% performance boost in runtime efficiency and improved reliability for scheduled data collection.",
        "technologies": ["Python", "Selenium", "Multithreading", "OOP"],
        "url": "/projects/project?name=Scraper"
    },
    "BetterReader": {
        "title": "Better Reader – Chrome Extension",
        "description": "Built during HackUSU 2025, this Chrome extension improves reading accessibility and focus. Features include distraction filtering, custom reading modes, AI-powered Q&A, and one-minute audio summaries. Completed in 24 hours with a cross-functional team.",
        "technologies": ["JavaScript", "Chrome Extension API", "OpenAI API", "HTML/CSS"],
        "url": "/projects/project?name=BetterReader"
    },
    "ClassReviewer": {
        "title": "Class Reviewer Platform",
        "description": "Created a full-stack MERN web app for students to rate university classes by satisfaction, time commitment, and difficulty. Integrated a Chrome extension that displays aggregated scores on the school’s class planning page. Deployed the full stack to AWS.",
        "technologies": ["MongoDB", "Express.js", "React", "Node.js", "Chrome Extension", "AWS"],
        "url": "/projects/project?name=ClassReviewer"
    },
    "TradingCardStore": {
        "title": "Trading Card E-Commerce Site",
        "description": "Built a full-stack e-commerce platform using Spring Boot for both frontend and backend integration. Users can browse and purchase trading cards, receive email confirmations, and benefit from scheduled cart cleanup via multithreading. Data stored and managed in MongoDB.",
        "technologies": ["Java", "Spring Boot", "MongoDB", "REST API", "Multithreading", "Email Services"],
        "url": "/projects/project?name=TradingCardStore"
    },
    "MobileRideshareSDD": {
        "title": "Student Rideshare App – Software Design Document",
        "description": "Led as Chief QA in the creation of a software design document for a mobile app connecting students needing rides with those driving long distances. Ensured quality, consistency, and clarity across sections, coordinated document structure and peer reviews using collaborative writing models.",
        "technologies": ["MS Word", "Draw.io", "MS Teams", "Collaborative Writing Models"],
        "url": "/projects/project?name=MobileRideshareSDD"
    },
    "PythonGISMapper": {
        "title": "Web Scraper with GIS Integration",
        "description": "Created Python scripts to scrape data from websites and processed it to generate GIS maps for visual data analysis. Used geospatial tools to uncover insights in university admissions and regional trends.",
        "technologies": ["Python", "Web Scraping", "GIS", "ArcGIS", "Data Processing"],
        "url": "/projects/project?name=PythonGISMapper"
    },
    "WebInsightsML": {
        "title": "Machine Learning for Web Traffic Analysis",
        "description": "Engineered ML models to analyze user interaction data and predict traffic anomalies and ad performance from web analytics. Combined historical web traffic, cookie/pixel behavior, and ad tracking data to generate predictive insights.",
        "technologies": ["Python", "Machine Learning", "BigQuery", "SQL", "Google Analytics", "GTM"],
        "url": "/projects/project?name=WebInsightsML"
    }
    }
    if (key =='all'){
        return projectList;
    }
    else{
        return projectList[key];
    }
}