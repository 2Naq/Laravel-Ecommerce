<!DOCTYPE html>
<html>

    <head>
        @include('backend.dashboard.components.head-dashboard')
    </head>

    <body class="leading-default m-0 bg-gray-50 font-sans text-base font-normal text-slate-500 antialiased">
        @include('backend.dashboard.components.sidebar')
        <main class="ease-soft-in-out xl:ml-68.5 relative h-full max-h-screen rounded-xl transition-all duration-200">
            <!-- Navbar -->
            @include('backend.dashboard.components.nav', ['title' => $title['title']])
            <!-- end Navbar -->
            <div class="mx-auto w-full px-6 py-6">
                @include($template)
                {{-- Start footer --}}
                @include('backend.dashboard.components.foo')
                {{-- end footer --}}
            </div>
        </main>
    </body>
    @include('backend.dashboard.components.script')

</html>
