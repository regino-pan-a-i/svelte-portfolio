

<script lang="ts">
  import { Sidebar, SidebarGroup, SidebarItem, SidebarButton, uiHelpers } from "flowbite-svelte";
  import { CodeOutline, FileLinesOutline, ProfileCardOutline, UserSolid, HomeOutline } from "flowbite-svelte-icons";
  import { page } from "$app/state";
  let activeUrl = $state(page.url.pathname);
  const sidebarUi = uiHelpers();
  // Initialize sidebar as open on desktop, closed on mobile
  let isDemoOpen = $state(typeof window !== 'undefined' ? window.innerWidth >= 768 : true);
  const closeDemoSidebar = sidebarUi.close;
  
  $effect(() => {
    // Only sync with sidebarUi if it's been explicitly toggled
    if (sidebarUi.isOpen !== undefined) {
      isDemoOpen = sidebarUi.isOpen;
    }
    activeUrl = page.url.pathname;
    
    // Handle responsive behavior
    if (typeof window !== 'undefined') {
      const handleResize = () => {
        if (window.innerWidth >= 768) {
          // Desktop: ensure sidebar is open
          isDemoOpen = true;
          sidebarUi.open();
        } else {
          // Mobile: close sidebar by default
          isDemoOpen = false;
          sidebarUi.close();
        }
      };
      
      window.addEventListener('resize', handleResize);
      // Set initial state
    //   handleResize();
      
    //   return () => {
    //     window.removeEventListener('resize', handleResize);
    //   };
    }
  });
  const spanClass = "flex-1 ms-3 whitespace-nowrap";
  const activeClass = "flex items-center p-2 text-base font-normal text-white bg-primary-600 dark:bg-primary-700 rounded-lg dark:text-white hover:bg-primary-800 dark:hover:bg-primary-800";
  const nonActiveClass = "flex items-center p-2 text-base font-normal text-green-900 rounded-lg dark:text-white hover:bg-green-100 dark:hover:bg-green-700";
  const iconClass = "h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
</script>

<SidebarButton onclick={sidebarUi.toggle} class="mb-2 md:hidden" />
<div class="relative">

    <Sidebar {activeUrl} backdrop={false} isOpen={isDemoOpen} closeSidebar={closeDemoSidebar} params={{ x: -50, duration: 50 }} classes={{ nonactive: nonActiveClass, active: activeClass }} position="absolute" class="z-50 h-screen">

        <SidebarGroup>
            <SidebarItem label="Home" {spanClass} href="/">
                {#snippet icon()}
                    <HomeOutline class={iconClass} />
                {/snippet}
            </SidebarItem>
            <SidebarItem label="About" {spanClass} href="/about">
                {#snippet icon()}
                    <UserSolid  class={iconClass} />
                {/snippet}
            </SidebarItem>
            <SidebarItem label="Projects" {spanClass} href="/projects">
                {#snippet icon()}
                <CodeOutline class={iconClass} />
                {/snippet}
            </SidebarItem>
            <SidebarItem label="Experience" {spanClass} href="/experience">
                {#snippet icon()}
                <FileLinesOutline class={iconClass} />
                {/snippet}
            </SidebarItem>
            <SidebarItem label="Contact" href="#contact">
                {#snippet icon()}
                <ProfileCardOutline class={iconClass} />
                {/snippet}
            </SidebarItem>
        </SidebarGroup>
    </Sidebar>

</div>


