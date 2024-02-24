<div fixed-plugin>
    <a
        fixed-plugin-button
        class="bottom-7.5 right-7.5 z-990 shadow-soft-lg rounded-circle fixed cursor-pointer bg-white px-4 py-2 text-xl text-slate-700"
    >
        <i class="fa fa-cog pointer-events-none py-2"> </i>
    </a>
    <!-- -right-90 in loc de 0-->
    <div
        fixed-plugin-card
        class="z-sticky shadow-soft-3xl w-90 ease-soft -right-90 fixed left-auto top-0 flex h-full min-w-0 flex-col break-words rounded-none border-0 bg-white bg-clip-border px-2.5 duration-200"
    >
        <div class="mb-0 rounded-t-2xl border-b-0 bg-white px-6 pb-0 pt-4">
            <div class="float-left">
                <h5 class="mb-0 mt-4">Soft UI Configurator</h5>
                <p>See our dashboard options.</p>
            </div>
            <div class="float-right mt-6">
                <button
                    fixed-plugin-close-button
                    class="hover:scale-102 leading-pro ease-soft-in tracking-tight-soft bg-150 bg-x-25 active:opacity-85 mb-4 inline-block cursor-pointer rounded-lg border-0 bg-transparent p-0 text-center align-middle text-xs font-bold uppercase text-slate-700 shadow-none transition-all"
                >
                    <i class="fa fa-close"></i>
                </button>
            </div>
            <!-- End Toggle Button -->
        </div>
        <hr class="mx-0 my-1 h-px bg-transparent bg-gradient-to-r from-transparent via-black/40 to-transparent" />
        <div class="flex-auto p-6 pt-0 sm:pt-4">
            <!-- Sidebar Backgrounds -->
            <div>
                <h6 class="mb-0">Sidebar Colors</h6>
            </div>
            <a href="javascript:void(0)">
                <div
                    class="my-2 text-left"
                    sidenav-colors
                >
                    <span
                        class="rounded-circle h-5.75 mr-1.25 w-5.75 ease-soft-in-out relative inline-block cursor-pointer whitespace-nowrap border border-solid border-slate-700 bg-gradient-to-tl from-purple-700 to-pink-500 text-center align-baseline text-xs font-bold uppercase leading-none text-white transition-all duration-200 hover:border-slate-700"
                        active-color
                        data-color-from="purple-700"
                        data-color-to="pink-500"
                        onclick="sidebarColor(this)"
                    ></span>
                    <span
                        class="rounded-circle h-5.75 mr-1.25 w-5.75 ease-soft-in-out relative inline-block cursor-pointer whitespace-nowrap border border-solid border-white bg-gradient-to-tl from-gray-900 to-slate-800 text-center align-baseline text-xs font-bold uppercase leading-none text-white transition-all duration-200 hover:border-slate-700"
                        data-color-from="gray-900"
                        data-color-to="slate-800"
                        onclick="sidebarColor(this)"
                    ></span>
                    <span
                        class="rounded-circle h-5.75 mr-1.25 w-5.75 ease-soft-in-out relative inline-block cursor-pointer whitespace-nowrap border border-solid border-white bg-gradient-to-tl from-blue-600 to-cyan-400 text-center align-baseline text-xs font-bold uppercase leading-none text-white transition-all duration-200 hover:border-slate-700"
                        data-color-from="blue-600"
                        data-color-to="cyan-400"
                        onclick="sidebarColor(this)"
                    ></span>
                    <span
                        class="rounded-circle h-5.75 mr-1.25 w-5.75 ease-soft-in-out relative inline-block cursor-pointer whitespace-nowrap border border-solid border-white bg-gradient-to-tl from-green-600 to-lime-400 text-center align-baseline text-xs font-bold uppercase leading-none text-white transition-all duration-200 hover:border-slate-700"
                        data-color-from="green-600"
                        data-color-to="lime-400"
                        onclick="sidebarColor(this)"
                    ></span>
                    <span
                        class="rounded-circle h-5.75 mr-1.25 w-5.75 ease-soft-in-out relative inline-block cursor-pointer whitespace-nowrap border border-solid border-white bg-gradient-to-tl from-red-500 to-yellow-400 text-center align-baseline text-xs font-bold uppercase leading-none text-white transition-all duration-200 hover:border-slate-700"
                        data-color-from="red-500"
                        data-color-to="yellow-400"
                        onclick="sidebarColor(this)"
                    ></span>
                    <span
                        class="rounded-circle h-5.75 mr-1.25 w-5.75 ease-soft-in-out relative inline-block cursor-pointer whitespace-nowrap border border-solid border-white bg-gradient-to-tl from-red-600 to-rose-400 text-center align-baseline text-xs font-bold uppercase leading-none text-white transition-all duration-200 hover:border-slate-700"
                        data-color-from="red-600"
                        data-color-to="rose-400"
                        onclick="sidebarColor(this)"
                    ></span>
                </div>
            </a>
            <!-- Sidenav Type -->
            <div class="mt-4">
                <h6 class="mb-0">Sidenav Type</h6>
                <p class="text-sm leading-normal">Choose between 2 different sidenav types.</p>
            </div>
            <div class="flex">
                <button
                    transparent-style-btn
                    class="xl-max:cursor-not-allowed xl-max:opacity-65 xl-max:pointer-events-none xl-max:bg-gradient-to-tl xl-max:from-purple-700 xl-max:to-pink-500 xl-max:text-white xl-max:border-0 hover:scale-102 hover:shadow-soft-xs active:opacity-85 leading-pro ease-soft-in tracking-tight-soft shadow-soft-md bg-150 bg-x-25 mb-2 inline-block w-full cursor-pointer rounded-lg border border-solid border-transparent bg-fuchsia-500 bg-gradient-to-tl from-purple-700 to-pink-500 px-4 py-3 text-center align-middle text-xs font-bold uppercase text-white transition-all hover:border-fuchsia-500"
                    data-class="bg-transparent"
                    active-style
                >Transparent</button>
                <button
                    white-style-btn
                    class="xl-max:cursor-not-allowed xl-max:opacity-65 xl-max:pointer-events-none xl-max:bg-gradient-to-tl xl-max:from-purple-700 xl-max:to-pink-500 xl-max:text-white xl-max:border-0 hover:scale-102 hover:shadow-soft-xs active:opacity-85 leading-pro ease-soft-in tracking-tight-soft shadow-soft-md bg-150 bg-x-25 mb-2 ml-2 inline-block w-full cursor-pointer rounded-lg border border-solid border-fuchsia-500 bg-transparent bg-none px-4 py-3 text-center align-middle text-xs font-bold uppercase text-fuchsia-500 transition-all hover:border-fuchsia-500"
                    data-class="bg-white"
                >White</button>
            </div>
            <p class="mt-2 block text-sm leading-normal xl:hidden">You can change the sidenav type just on
                desktop view.</p>
            <!-- Navbar Fixed -->
            <div class="mt-4">
                <h6 class="mb-0">Navbar Fixed</h6>
            </div>
            <div class="min-h-6 mb-0.5 block pl-0">
                <input
                    navbarFixed
                    class="rounded-10 duration-250 ease-soft-in-out after:rounded-circle after:shadow-soft-2xl after:duration-250 checked:after:translate-x-5.25 relative float-left ml-auto mt-1 h-5 w-10 cursor-pointer appearance-none border border-solid border-gray-200 bg-slate-800/10 bg-none bg-contain bg-left bg-no-repeat align-top transition-all after:absolute after:top-px after:h-4 after:w-4 after:translate-x-px after:bg-white after:content-[''] checked:border-slate-800/95 checked:bg-slate-800/95 checked:bg-none checked:bg-right"
                    type="checkbox"
                />
            </div>
            <hr class="h-px bg-transparent bg-gradient-to-r from-transparent via-black/40 to-transparent sm:my-6" />
            <a
                class="leading-pro ease-soft-in hover:shadow-soft-xs hover:scale-102 active:opacity-85 tracking-tight-soft shadow-soft-md bg-150 bg-x-25 mb-4 inline-block w-full cursor-pointer rounded-lg border-0 bg-transparent bg-gradient-to-tl from-gray-900 to-slate-800 px-6 py-3 text-center align-middle text-xs font-bold uppercase text-white transition-all"
                href="https://www.creative-tim.com/product/soft-ui-dashboard-tailwind"
                target="_blank"
            >Free Download</a>
            <a
                class="active:shadow-soft-xs hover:scale-102 active:opacity-85 leading-pro ease-soft-in tracking-tight-soft bg-150 bg-x-25 mb-4 inline-block w-full cursor-pointer rounded-lg border border-solid border-slate-700 bg-transparent px-6 py-3 text-center align-middle text-xs font-bold uppercase text-slate-700 shadow-none transition-all hover:bg-transparent hover:text-slate-700 hover:shadow-none active:bg-slate-700 active:text-white active:hover:bg-transparent active:hover:text-slate-700 active:hover:shadow-none"
                href="https://www.creative-tim.com/learning-lab/tailwind/html/quick-start/soft-ui-dashboard/"
                target="_blank"
            >View documentation</a>
            <div class="w-full text-center">
                <a
                    class="github-button"
                    href="https://github.com/creativetimofficial/soft-ui-dashboard-tailwind"
                    data-icon="octicon-star"
                    data-size="large"
                    data-show-count="true"
                    aria-label="Star creativetimofficial/soft-ui-dashboard on GitHub"
                >Star</a>
                <h6 class="mt-4">Thank you for sharing!</h6>
                <a
                    href="https://twitter.com/intent/tweet?text=Check%20Soft%20UI%20Dashboard%20Tailwind%20made%20by%20%40CreativeTim&hashtags=webdesign,dashboard,tailwindcss&amp;url=https%3A%2F%2Fwww.creative-tim.com%2Fproduct%2Fsoft-ui-dashboard-tailwind"
                    class="hover:shadow-soft-xs hover:scale-102 active:opacity-85 leading-pro ease-soft-in tracking-tight-soft shadow-soft-md bg-150 bg-x-25 mb-0 me-2 mr-2 inline-block cursor-pointer rounded-lg border-0 border-slate-700 bg-slate-700 px-6 py-3 text-center align-middle text-xs font-bold uppercase text-white transition-all"
                    target="_blank"
                > <i class="fab fa-twitter mr-1"></i> Tweet </a>
                <a
                    href="https://www.facebook.com/sharer/sharer.php?u=https://www.creative-tim.com/product/soft-ui-dashboard-tailwind"
                    class="hover:shadow-soft-xs hover:scale-102 active:opacity-85 leading-pro ease-soft-in tracking-tight-soft shadow-soft-md bg-150 bg-x-25 mb-0 me-2 mr-2 inline-block cursor-pointer rounded-lg border-0 border-slate-700 bg-slate-700 px-6 py-3 text-center align-middle text-xs font-bold uppercase text-white transition-all"
                    target="_blank"
                > <i class="fab fa-facebook-square mr-1"></i> Share </a>
            </div>
        </div>
    </div>
</div>
