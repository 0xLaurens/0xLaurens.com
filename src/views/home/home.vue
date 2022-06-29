<template>
    <div class="snap-y snap-mandatory h-screen overflow-scroll overflow-x-hidden">
        <div class="snap-start hero min-h-screen bg-base-500">
            <div class="hero-content">
                <div class="max-w-md text-center md:text-left">
                    <h1>Hi, I'm</h1>
                    <h1 class="text-primary text-5xl font-bold">
                        <span class="tooltip" data-tip="Pronounced Lawrence">Laurens</span>
                        Weterings<span class="text-accent">.</span>
                    </h1>
                    <h1 class="text-3xl pb-6">Software Engineer.</h1>
                    <h1 class="text-xl text-center">
                        Computer science student passionate about cyber security and new
                        technologies.
                    </h1>
                </div>
            </div>
        </div>
        <div class="snap-start hero mx-auto min-h-screen bg-yellow-50">
            <div class="hero-content flex-col lg:flex-row-reverse">
                <img
                    src="../../assets/dev.svg"
                    class="mx-auto lg:max-w-md 4xl:max-w-lg rounded-lg"
                />
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
        <div class="snap-start mx-auto grid place-items-center min-h-screen bg-base-100">
            <div class="flex gap-4 items-center content-center flex-col lg:flex-row">
                <img
                    src="../../assets/skills.svg"
                    class="mx-auto lg:max-w-md 4xl:max-w-lg rounded-lg"
                />
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
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pb-10">
                <div class="card w-72 h-52 sm:w-64 bg-yellow-50 shadow-xl">
                    <div class="card-body">
                        <h2 class="card-title text-primary">Front-end</h2>
                        <div class="card-actions center">
                            <div class="badge badge-outline text-base-100">Javascript</div>
                            <div class="badge badge-outline text-base-100">HTML</div>
                            <div class="badge badge-outline text-base-100">CSS</div>
                            <div class="badge badge-outline text-base-100">Vue js</div>
                        </div>
                    </div>
                </div>

                <div class="card w-72 sm:w-64 bg-yellow-50 shadow-xl">
                    <div class="card-body">
                        <h2 class="card-title text-primary">Back-end</h2>
                        <div class="card-actions center">
                            <div class="badge badge-outline text-base-100">Node.js</div>
                            <div class="badge badge-outline text-base-100">Java</div>
                            <div class="badge badge-outline text-base-100">C++</div>
                            <div class="badge badge-outline text-base-100">C#</div>
                            <div class="badge badge-outline text-base-100">MySql</div>
                            <div class="badge badge-outline text-base-100">MSsql</div>
                            <div class="badge badge-outline text-base-100">Rust</div>
                            <div class="badge badge-outline text-base-100">Firebase</div>
                            <div class="badge badge-outline text-base-100">Heroku</div>
                            <div class="badge badge-outline text-base-100">Express.js</div>
                        </div>
                    </div>
                </div>

                <div class="card w-72 h-52 sm:w-64 bg-yellow-50 shadow-xl">
                    <div class="card-body">
                        <h2 class="card-title text-primary">Professional</h2>
                        <div class="card-actions center">
                            <div class="badge badge-outline text-base-100">Jira</div>
                            <div class="badge badge-outline text-base-100">Git</div>
                            <div class="badge badge-outline text-base-100">Bash</div>
                            <div class="badge badge-outline text-base-100">Github</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup></script>
