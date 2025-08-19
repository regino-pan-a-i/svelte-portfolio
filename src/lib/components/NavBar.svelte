<script>
    const optionClass = "items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-300 dark:hover:bg-gray-700 group"
</script>


<aside id="default-sidebar" class="fixed top-0 left-0 z-40 w-40 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
    
    <div class="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">

        <a href="/" class="w-full block items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-300 dark:hover:bg-gray-700 group">HOME </a>

        <ul class="flex flex-col h-full space-y-5 font-medium align-middle justify-center gap-5.5">
            <li class={optionClass}>
                <a href="/about" >ABOUT </a>
            </li>
            <li class={optionClass}>
                <a href="/projects" >PROJECTS</a>
            </li>
            <li class={optionClass}>
                <a href="/experience" >EXPERIENCE</a>
            </li>
            <li class={optionClass}>
                <a href="#contact" >CONTACT</a>
            </li>
        </ul>
    </div>
</aside>

<style>

</style>