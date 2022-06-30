<template>
    <NavBar class="sticky top-0 z-50" />
    <div class="hero min-h-screen bg-base-500">
        <div class="hero-content flex-col lg:flex-row">
            <img src="../../assets/dev.svg" class="mx-auto lg:max-w-md 4xl:max-w-lg rounded-lg" />
            <div class="max-w-md text-center md:text-left">
                <h1 class="text-contrast">Hi, I'm</h1>
                <h1 class="text-primary text-5xl font-bold">
                    <span class="tooltip" data-tip="Pronounced Lawrence">Laurens</span>
                    Weterings<span class="text-accent">.</span>
                </h1>
                <h1 class="text-3xl pb-6 text-secondary">Software Engineer.</h1>
                <h1 class="text-xl text-center">
                    Computer science student passionate about cyber security and new technologies.
                </h1>
                <div class="flex py-5 w-full justify-center lg:justify-end">
                    <button class="btn btn-secondary">
                        <eye-icon class="h-5 w-5 mx-2" /> View portfolio
                    </button>
                </div>
            </div>
        </div>
    </div>
    <div class="hero mx-auto min-h-screen bg-yellow-50">
        <div class="hero-content flex-col lg:flex-row-reverse">
            <img src="../../assets/dev.svg" class="mx-auto lg:max-w-md 4xl:max-w-lg rounded-lg" />
            <div class="md:max-w-md">
                <h1 class="text-primary text-5xl font-bold">
                    About<span class="text-accent">.</span>
                </h1>
                <p class="py-6 text-base-100">
                    Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi
                    exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.
                </p>
            </div>
        </div>
    </div>
    <div class="mx-auto grid place-items-center min-h-screen bg-base-100">
        <div class="flex gap-4 items-center content-center flex-col lg:flex-row max-w-3xl">
            <img src="../../assets/skills.svg" class="mx-auto sm:max-w-sm rounded-lg" />
            <div>
                <h1 class="text-primary text-5xl font-bold">
                    Skills<span class="text-accent">.</span>
                </h1>
                <p class="py-6 text-white">
                    Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi
                    exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.
                </p>
            </div>
        </div>
        <div class="h-screen sm:h-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 py-10">
            <div class="card w-72 h-56 sm:w-64 bg-yellow-50 shadow-xl">
                <div class="card-body">
                    <h2 class="card-title text-primary">Front-end</h2>
                    <div class="card-actions center">
                        <div class="badge badge-outline text-base-100">
                            <img class="h-5 w-5" src="../../assets/icons/js.svg" /> Javascript
                        </div>
                        <div class="badge badge-outline text-base-100">
                            <img class="h-5 w-5" src="../../assets/icons/html.svg" /> HTML
                        </div>
                        <div class="badge badge-outline text-base-100">
                            <img class="h-5 w-5" src="../../assets/icons/css.svg" />CSS
                        </div>
                        <div class="badge badge-outline text-base-100">
                            <img class="h-5 w-5" src="../../assets/icons/vue.svg" />Vue js
                        </div>
                    </div>
                </div>
            </div>

            <div class="card w-72 h-56 sm:w-64 bg-yellow-50 shadow-xl">
                <div class="card-body">
                    <h2 class="card-title text-primary">Back-end</h2>
                    <div class="card-actions center">
                        <div class="badge badge-outline text-base-100">
                            <img class="h-5 w-5" src="../../assets/icons/nodejs.svg" />Node.js
                        </div>
                        <div class="badge badge-outline text-base-100">
                            <img class="h-5 w-5" src="../../assets/icons/java.svg" />Java
                        </div>
                        <div class="badge badge-outline text-base-100">
                            <img class="h-5 w-5" src="../../assets/icons/c++.svg" />C++
                        </div>
                        <div class="badge badge-outline text-base-100">
                            <img class="h-5 w-5" src="../../assets/icons/csharp.svg" />C#
                        </div>
                        <div class="badge badge-outline text-base-100">
                            <img class="h-5 w-5" src="../../assets/icons/mysql.svg" />MySql
                        </div>
                        <div class="badge badge-outline text-base-100">
                            <img class="h-5 w-5" src="../../assets/icons/db.png" />MSsql
                        </div>
                        <div class="badge badge-outline text-base-100">
                            <img class="h-5 w-5" src="../../assets/icons/rust.png" />Rust
                        </div>
                        <div class="badge badge-outline text-base-100">
                            <img class="h-5 w-5" src="../../assets/icons/firebase.png" />Firebase
                        </div>
                        <div class="badge badge-outline text-base-100">
                            <img class="h-5 w-5" src="../../assets/icons/heroku.svg" />Heroku
                        </div>
                        <div class="badge badge-outline text-base-100">
                            <img class="h-5 w-5" src="../../assets/icons/js.svg" />Express.js
                        </div>
                    </div>
                </div>
            </div>

            <div class="card w-72 h-56 sm:w-64 bg-yellow-50 shadow-xl">
                <div class="card-body">
                    <h2 class="card-title text-primary">Professional</h2>
                    <div class="card-actions center">
                        <div class="badge badge-outline text-base-100">
                            <img class="h-5 w-5" src="../../assets/icons/jira.svg" />Jira
                        </div>
                        <div class="badge badge-outline text-base-100">
                            <img class="h-5 w-5" src="../../assets/icons/git.svg" />Git
                        </div>
                        <div class="badge badge-outline text-base-100">
                            <img class="h-5 w-5" src="../../assets/icons/bash.svg" />Bash
                        </div>
                        <div class="badge badge-outline text-base-100">
                            <img class="h-5 w-5" src="../../assets/icons/github.svg" />Github
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <cfooter class="" />
</template>

<script setup>
import { EyeIcon } from "@heroicons/vue/outline";
</script>
