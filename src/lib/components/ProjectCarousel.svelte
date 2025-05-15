<script>
    import { onMount } from 'svelte';
	import ProjectCard from './ProjectCard.svelte';
    import {getProjectList} from '../../resources/projectList.mjs'
    let glide;
  
    onMount(async () => {
      const Glide = (await import('@glidejs/glide')).default;
  
      glide = new Glide('.glide-01', {
        type: 'carousel',
        focusAt: 'center',
        perView: 3,
        autoplay: 3000,
        animationDuration: 700,
        gap: 24,
        classes: {
          activeNav: '[&>*]:bg-slate-700',
        },
        breakpoints: {
          1024: {
            perView: 2
          },
          640: {
            perView: 1
          }
        },
      });
  
      glide.mount();
    });
    let projectsObj = getProjectList(); // returns an object of objects
    let projects = Object.values(projectsObj);
  
</script>


<h2 class="mb-4 text-1xl font-extrabold leading-none tracking-tight text-gray-900 md:text-2xl lg:text-3xl dark:text-white" >Quick look at projects</h2>

<div class="relative w-full glide-01">
    <!-- <script src="https://cdnjs.cloudflare.com/ajax/libs/Glide.js/3.0.2/glide.js"></script> -->
    <!-- Slides -->
    <div class="overflow-hidden" data-glide-el="track">
        <ul class="relative w-full overflow-hidden p-0 whitespace-no-wrap flex flex-no-wrap [backface-visibility: hidden] [transform-style: preserve-3d] [touch-action: pan-Y] [will-change: transform]">
            
            {#each projects as project }
            <li class="w-full max-w-full max-h-full m-auto">

                <ProjectCard project={project}/>
            </li>
            {/each}
        </ul>
    </div>
    <!-- Controls -->
    <div class="absolute left-0 flex items-center justify-between w-full h-0 px-4 top-1/2 " data-glide-el="controls">
        <button class="inline-flex items-center justify-center w-8 h-8 transition duration-300 border rounded-full lg:w-12 lg:h-12 text-slate-700 border-slate-700 hover:text-slate-900 hover:border-slate-900 focus-visible:outline-none bg-white/20" data-glide-dir="<" aria-label="prev slide">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                <title>prev slide</title>
                <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
            </svg>
        </button>
        <button class="inline-flex items-center justify-center w-8 h-8 transition duration-300 border rounded-full lg:w-12 lg:h-12 text-slate-700 border-slate-700 hover:text-slate-900 hover:border-slate-900 focus-visible:outline-none bg-white/20" data-glide-dir=">" aria-label="next slide">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                <title>next slide</title>
                <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
            </svg>
        </button>
    </div>
</div>



