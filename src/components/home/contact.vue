<template>
    <div class="flex min-h-screen font-custom justify-center content-center">
        <div class="grid grid-cols-3 grid-flow-row px-5 md:px-16 gap-y-10 self-center">
            <div class="col-span-3 rounded-lg">
                <h1 class="text-5xl font-bold text-black">
                    Contact.
                    <div class="line w-32" />
                </h1>
            </div>

            <div class="col-span-3 md:col-span-1 row-span-3 bg-base-200 rounded-3xl rounded-r-none">
                <img class="h-full" src="../../assets/contact.svg" />
            </div>

            <div class="col-span-3 md:col-span-2 row-span-3">
                <div class="card md:rounded-l-none bg-base-200 h-full">
                    <div class="card-body text-lg font-normal font-custom">
                        <form>
                            <div class="grid md:grid-cols-2 md:gap-6">
                                <div class="relative z-0 mb-6 w-full group">
                                    <input
                                        type="text"
                                        class="block py-2.5 px-0 w-full bg-transparent border-0 border-b-2 border-black appearance-none focus:outline-none focus:ring-0 focus:border-primary peer"
                                        placeholder=" "
                                        required
                                    />
                                    <label
                                        class="peer-focus:font-medium absolute text-black duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                        >First name</label
                                    >
                                </div>
                                <div class="relative z-0 mb-6 w-full group">
                                    <input
                                        class="block py-2.5 px-0 w-full bg-transparent border-0 border-b-2 border-black appearance-none focus:outline-none focus:ring-0 focus:border-primary peer"
                                        placeholder=" "
                                        required
                                    />
                                    <label
                                        for="floating_last_name"
                                        class="peer-focus:font-medium absolute text-black duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                        >Last name</label
                                    >
                                </div>
                            </div>
                            <div class="relative z-0 mb-6 w-full group">
                                <input
                                    type="email"
                                    class="block py-2.5 px-0 w-full bg-transparent border-0 border-b-2 border-black appearance-none focus:outline-none focus:ring-0 focus:border-primary peer"
                                    placeholder=" "
                                    required
                                />
                                <label
                                    for="floating_email"
                                    class="peer-focus:font-medium absolute text-black duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                    >Email address</label
                                >
                            </div>
                            <div class="py-2.5">
                                <label for="message" class="block mb-2">Message</label>
                                <textarea
                                    class="textarea bg-inherit textarea-bordered border-black focus:border-primary resize-y w-full capitalize font-custom"
                                    rows="3"
                                    placeholder="message"
                                ></textarea>
                            </div>
                            <button class="btn btn-primary w-full text-lg">Submit.</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup></script>
