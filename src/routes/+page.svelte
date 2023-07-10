<script lang="ts">
  import { Avatar, modeCurrent } from "@skeletonlabs/skeleton";
  import ContentArea from "$lib/components/Layout/ContentArea.svelte";
</script>

<ContentArea class="profile ">
  <div class="profile flex flex-col sm:flex-row sm:inline-flex">
    <Avatar
      initials="LW"
      src="profile.jpg"
      class="self-center h-40 w-40 lg:w-56 lg:h-56 mx-auto"
      rounded="rounded-3xl"
    />
    <div class="pt-3 sm:pt-0 self-center sm:pl-6 lg:pl-9">
      <h3 class="text-2xl md:text-3xl font-bold">Laurens Weterings.</h3>
      <h5 class="text-md md:text-lg">Software Developer & Student</h5>
      <div class="flex flex-col items-center sm:items-start">
        <div class="icons space-x-2 pt-2">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/0xLaurens"
            class="btn btn-icon variant-filled"
            ><i
              class:!text-white={$modeCurrent}
              class="text-xl bi bi-github"
            /></a
          >
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/laurens-w-173494268/"
            class="btn btn-icon variant-filled"
            ><i
              class:!text-white={$modeCurrent}
              class="text-xl bi bi-linkedin"
            /></a
          >
          <a
            target="_blank"
            rel="noreferrer"
            href="mailto:laurens.weterings@gmail.com"
            class="btn btn-icon variant-filled"
            ><i
              class:!text-white={$modeCurrent}
              class="text-xl bi bi-envelope-fill"
            /></a
          >
        </div>
      </div>
    </div>
  </div>
  <div class="about-me mt-6 md:mt-3">
    <p>
      Hello! I'm a <span
        class:!text-light-primary={$modeCurrent}
        class="font-bold text-primary-500">Software Engineering</span
      >
      student at Avans Hogeschool. I'm currently tinkering a lot in Linux, learning
      more about C and Rust. I enjoy tinkering with new technologies and learning
      more about how the tech we use works. Take a look at some of my
      <a
        class:!text-light-tertiary={$modeCurrent}
        class="font-bold link text-tertiary-500 underline"
        href="/Projects">Projects →</a
      >
    </p>
  </div>
</ContentArea>

<ContentArea class="Site Reason">
  <div class:!bg-slate-100={$modeCurrent} class="card p-4 space-y-4">
    <p>
      Discovering interesting small websites is getting more difficult. Since
      search engines favor SEO optimized pages, filled with webscraped content,
      that add little to no value.
    </p>

    <p>
      Therefore I made this page where I share some of the sites that I found
      <a
        class:!text-light-tertiary={$modeCurrent}
        class="font-bold link text-tertiary-500 underline"
        href="/Links">Links →</a
      >
    </p>
  </div>
</ContentArea>
