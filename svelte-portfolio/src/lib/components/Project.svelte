<script>
    let {project} = $props()

</script>


<div>
    <h3 class="text-3xl font-bold text-blue-600">{project.title}</h3>
    <p class="mb-3">{project.description}</p>

    {#if project.technologies.length != 0}
        <ul class="max-w-md space-y-1 text-gray-500 list-inside dark:text-gray-400">
            {#each project.technologies as tech}

            <li class="flex items-center">
                <svg class="w-3.5 h-3.5 me-2 text-green-500 dark:text-green-400 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                 </svg>
                {tech}
            </li>
                
            {/each}
        </ul>
    {/if}

</div>


<style>

</style>