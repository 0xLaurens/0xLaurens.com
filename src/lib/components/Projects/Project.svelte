<script lang="ts">
    import type { Project } from "$lib/models/project.interface";
    export let project: Project = {
        title: "default title",
        description: "default description",
        tags: ["default 0", "default 1", "default 2"],
        github: "https://github.com/0xLaurens",
    };
</script>

<div class="card bg-base-200 shadow-xl">
    <div class="card-body">
        <h2 class="card-title">{project.title}</h2>
        <p>{project.description}</p>
        <div class="card-actions">
            {#each project.tags as tag}
                <div class="badge badge-secondary">{tag}</div>
            {/each}
        </div>
        <div class="card-actions pt-6 justify-between">
            <a target="_blank" rel="noreferrer" class="btn btn-primary" href={project.github}
                >Repository <i class="pl-2 bi bi-github" />
            </a>
            {#if project.website}
                <a target="_blank" rel="noreferrer" class="btn btn-primary" href={project.website}
                    >Website<i class="bi bi-box-arrow-up-right pl-2" />
                </a>
            {/if}
        </div>
    </div>
</div>
