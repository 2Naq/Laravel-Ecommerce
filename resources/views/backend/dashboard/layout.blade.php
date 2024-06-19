<!DOCTYPE html>
<html>

    <head>
        @include('backend.dashboard.components.head-dashboard')
    </head>

    <body class="leading-default m-0 bg-gray-50 font-sans text-base font-normal text-slate-500 antialiased">
        @include('backend.dashboard.components.sidebar')
        <main class="ease-soft-in-out xl:ml-68.5 relative h-full min-h-screen rounded-xl transition-all duration-200">
            <!-- Navbar -->
            @include('backend.dashboard.components.nav', ['title' => $title['title']])
            <!-- end Navbar -->
            <div class="mx-auto w-full px-6 py-6">
                @include($template)
            </div>
            {{-- Start footer --}}
            @include('backend.dashboard.components.foo')
            {{-- end footer --}}
        </main>
    </body>
    @include('backend.dashboard.components.script')
    <script
        src='./assets/js/plugins/perfect-scrollbar.min.js'
        async
    ></script>
    <script
        src='./assets/js/soft-ui-dashboard-tailwind.js'
        async
    ></script>

</html>
