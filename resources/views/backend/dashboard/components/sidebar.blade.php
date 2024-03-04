<!-- sidenav  -->
<aside
    class="max-w-62.5 ease-nav-brand z-990 fixed inset-y-0 my-4 ml-4 block w-full -translate-x-full flex-wrap items-center justify-between overflow-y-auto rounded-2xl border-0 bg-white p-0 antialiased shadow-none transition-transform duration-200 xl:left-0 xl:translate-x-0 xl:bg-transparent"
>
    <div class="h-19.5">
        <i
            class="fas fa-times absolute right-0 top-0 hidden cursor-pointer p-4 text-slate-400 opacity-50 xl:hidden"
            sidenav-close
        ></i>
        <a
            class="m-0 block whitespace-nowrap px-8 py-6 text-sm text-slate-700"
            href="javascript:;"
            target="_blank"
        >
            <img
                src="./assets/img/logo-ct.png"
                class="ease-nav-brand inline h-full max-h-8 max-w-full transition-all duration-200"
                alt="main_logo"
            />
            <span class="ease-nav-brand ml-1 font-semibold transition-all duration-200">Soft UI Dashboard</span>
        </a>
    </div>

    <hr class="mt-0 h-px bg-transparent bg-gradient-to-r from-transparent via-black/40 to-transparent" />

    <div class="block h-auto max-h-screen w-auto grow basis-full items-center overflow-auto">
        <ul class="mb-0 flex flex-col py-2 pl-0">
            <li class="mt-0.5 w-full">
                <a
                    class="{{ request()->is('dashboard/index') ? 'active' : '' }} py-2.7 ease-nav-brand mx-4 my-0 flex items-center whitespace-nowrap px-4 text-sm transition-colors"
                    href="{{ route('dashboard.index') }}"
                >
                    <div
                        class="{{ request()->is('dashboard/index') ? 'icon-active' : '' }} shadow-soft-2xl mr-2 flex h-8 w-8 items-center justify-center rounded-lg bg-white bg-center stroke-0 text-center xl:p-2.5">
                        <i
                            class="fa fa-tachometer {{ request()->is('dashboard/index') ? 'text-white' : '' }}"
                            aria-hidden="true"
                        ></i>
                    </div>
                    <span class="ease-soft pointer-events-none ml-1 opacity-100 duration-300">Tổng quan</span>
                </a>
            </li>

            <li class="mt-0.5 w-full">
                <a
                    class="{{ request()->is('dashboard/user/*') ? 'active' : '' }} py-2.7 ease-nav-brand mx-4 my-0 flex items-center whitespace-nowrap px-4 text-sm transition-colors"
                    href="{{ route('user.index') }}"
                >
                    <div
                        class="{{ request()->is('dashboard/user/*') ? 'icon-active' : '' }} shadow-soft-2xl mr-2 flex h-8 w-8 items-center justify-center rounded-lg bg-white bg-center stroke-0 text-center xl:p-2.5">
                        <i
                            class="fa fa-user {{ request()->is('dashboard/user/*') ? 'text-white' : '' }}"
                            aria-hidden="true"
                        ></i>
                    </div>
                    <span class="ease-soft pointer-events-none ml-1 opacity-100 duration-300">Thành viên</span>
                </a>
            </li>
        </ul>
</aside>

<!-- end sidenav -->
