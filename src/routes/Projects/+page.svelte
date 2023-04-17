<script lang="ts">
    import Project from "$lib/components/Projects/Project.svelte";
    import type { Project as ProjectInterface } from "$lib/models/project.interface";

    const projects: ProjectInterface[] = [
        {
            title: "chatr",
            description:
                "A web socket chat room built using rust and sveltekit.",
            tags: ["Rust", "Svelte", "Websockets", "Axum"],
            github: "https://github.com/0xLaurens/chatr",
            website: "https://chatr.0xlaurens.com",
        },
        {
            title: "Triplo",
            description:
                "A platform to explore new open-source projects. \
                Users can join and explore open-source projects which they can apply to join. \
                Projects contain tasks to show users what they are currently working on. ",
            tags: ["Angular", "Typescript", "Nestjs", "Mongodb"],
            github: "https://github.com/0xLaurens/Triplo",
            website: "https://triplo.0xlaurens.com",
        },
        {
            title: "NoWaste",
            description:
                "No foodwaste is a .NET fullstack application for reducing foodwaste. \
                A site for preventing food waste by giving students the opportunity to reserve meals from the cantine.",
            tags: ["C#", ".NET", "graphQL"],
            github: "https://github.com/0xLaurens/No-Foodwaste",
        },
    ];
</script>

<div class="title">
    <h3 class="text-3xl  font-bold">Projects</h3>
</div>

<div class="projects pt-4 lg:pt-3">
    {#each projects as project}
        <Project {project} />
    {/each}
</div>
