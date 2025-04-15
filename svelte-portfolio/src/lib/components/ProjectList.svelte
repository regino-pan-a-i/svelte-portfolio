<script>
	import Project from "./Project.svelte";

    let projects = [
        {
            "title": "MovieMapper",
            "description": "Developed an IOS app using Swift and REST APIs to provide nearby theater listings, movie details, and direct ticket reservation links, achieving a 4/5 user satisfaction rating by designing a user-friendly interface.",
            "technologies": ["IOS", "Swift", "Rest APIs"]
        },
        {
            "title": "Broken Links Web Scraper",
            "description": "Directed the refactoring and documentation of a Selenium-based scraper for a client, improving functionality by implementing OOP principles and multithreading, resulting in a 500% performance boost as measured by runtime efficiency.",
            "technologies": ["Selenium", "Multihtreading", "Python"]
        },
        {
            "title": "Better Reader",
            "description": "Directed the refactoring and documentation of a Selenium-based scraper for a client, improving functionality by implementing OOP principles and multithreading, resulting in a 500% performance boost as measured by runtime efficiency.",
            "technologies": ["..."]
        },
        
    ]

</script>


<ul>
    {#each projects as project }

    <Project project={project} />
        
    {/each}
</ul>