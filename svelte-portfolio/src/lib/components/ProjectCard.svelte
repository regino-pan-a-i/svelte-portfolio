<script>

let {project} = $props()


</script>


<div class="overflow-hidden bg-white rounded shadow-md text-slate-500 shadow-slate-200">
  <a href={project.url}>
    <!-- Image -->
    <figure class="relative">
      <img src="https://picsum.photos/id/100/800/600" alt="card image" class="aspect-video w-full" />
      <figcaption class="absolute bottom-0 left-0 w-full p-6 text-white bg-gradient-to-t from-slate-900">
        <h3 class="text-lg font-medium ">{project.title}</h3>
      </figcaption>
    </figure>
  </a>

</div>