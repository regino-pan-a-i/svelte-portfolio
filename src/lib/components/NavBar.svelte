<!-- <script>
    import { Navbar, NavBrand, NavLi, NavUl, NavHamburger } from "flowbite-svelte";
    
    const optionClass = "flex justify-center w-full block items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-300 dark:hover:bg-gray-700 group"
    
    let isNavOpen = false

</script>


<aside id="default-sidebar" class="fixed top-0 md:left-0 z-40 w-screen md:w-40 h-40 md:h-screen" aria-label="Sidebar">
    
    <div class="md:h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">

        <a href="/" class={optionClass}>HOME </a>

        <ul class="flex flex-col w-full mt-5 md:mt-0 h-full font-medium align-middle justify-center gap-5.5 md:gap-10">
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

</style> -->


<script>
    import { page } from "$app/state";
    import { Navbar, NavBrand, NavLi, NavUl, NavHamburger } from "flowbite-svelte";
    let activeUrl = $derived(page.url.pathname);
    const optionClass = "flex justify-center w-full block items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-300 dark:hover:bg-gray-700 group"
</script>

<Navbar class="fixed top-0 md:left-0 z-40 w-screen md:w-40 h-40 md:h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
    <NavBrand href="/" class={optionClass}>
        HOME
    </NavBrand>
    
    <NavHamburger />
    
    <NavUl {activeUrl} class="flex flex-col w-full h-full mt-5 md:mt-0 font-medium align-middle justify-center gap-5.5 md:gap-10">
        <NavLi href="/about" class={optionClass}>ABOUT</NavLi>
        <NavLi href="/projects" class={optionClass}>PROJECTS</NavLi>
        <NavLi href="/experience" class={optionClass}>EXPERIENCE</NavLi>
        <NavLi href="#contact" class={optionClass}>CONTACT</NavLi>
    </NavUl>
</Navbar>