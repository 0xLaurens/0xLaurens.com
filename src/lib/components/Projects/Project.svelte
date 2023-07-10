<script lang="ts">
  import type { Project } from "$lib/models/project.interface";
  import { modeCurrent } from "@skeletonlabs/skeleton";
  export let project: Project = {
    title: "default title",
    description: "default description",
    tags: ["default 0", "default 1", "default 2"],
    github: "https://github.com/0xLaurens",
  };
</script>

<div
  class:!bg-slate-100={$modeCurrent}
  class="card shadow-xl mb-5 p-4 text-center md:text-start"
>
  <h2 class="text-2xl font-bold">{project.title}</h2>
  <p class="mb-5">{project.description}</p>
  <div class="card-actions mb-5">
    {#each project.tags as tag}
      <div class="badge variant-filled-secondary mr-2">{tag}</div>
    {/each}
  </div>
  <div class="flex justify-center md:justify-end">
    <a
      target="_blank"
      rel="noreferrer"
      class="btn btn-sm variant-filled-primary"
      href={project.github}
      >Repository <i class="pl-2 bi bi-github" />
    </a>
    {#if project.website}
      <a
        target="_blank"
        rel="noreferrer"
        class="btn btn-sm variant-ghost-primary ml-2"
        href={project.website}
        >Website<i class="bi bi-box-arrow-up-right pl-2" />
      </a>
    {/if}
  </div>
</div>
