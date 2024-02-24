<!DOCTYPE html>
<html lang="en">

    <head>
        @include('backend.components.head')
    </head>

    <body>
        <section>
            <div class="relative flex min-h-screen items-center overflow-hidden bg-cover bg-center p-0">
                <div class="z-1 container">
                    <div class="-mx-3 flex flex-wrap">
                        <div
                            class="md:flex-0 mr-auto flex w-full max-w-full shrink-0 flex-col px-3 md:w-7/12 lg:mx-0 lg:w-5/12 xl:w-4/12">
                            <div
                                class="lg:py4 relative flex min-w-0 flex-col break-words rounded-2xl border-0 bg-transparent bg-clip-border shadow-none dark:bg-gray-950">
                                <div class="mb-0 p-6 pb-0">
                                    <h4 class="font-bold">Sign In</h4>
                                    <p class="mb-0">Enter your email and password to sign in</p>
                                </div>
                                <div class="flex-auto p-6">
                                    <form
                                        method="POST"
                                        class="m-t text-left"
                                        role="form"
                                        action="{{ route('auth.login') }}"
                                    > @csrf
                                        <div class="email-login mb-4">
                                            <input
                                                type="email"
                                                placeholder="Email"
                                                name="email"
                                                @if (@isset($_COOKIE['email'])) value="{{ $_COOKIE['email'] }}"
                                                @else
                                                value="{{ old('email') }}" @endif
                                                class="focus:shadow-soft-primary-outline leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 text-sm font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-fuchsia-300 focus:outline-none dark:bg-gray-950 dark:text-white/80 dark:placeholder:text-white/80"
                                            >
                                            @if ($errors->has('email'))
                                                <span class="text-sm font-normal text-red-500/95">
                                                    {{ $errors->first('email') }}
                                                </span>
                                            @endif
                                        </div>
                                        <div class="password-login mb-4">
                                            <input
                                                type="password"
                                                name="password"
                                                @if (@isset($_COOKIE['password'])) value="{{ $_COOKIE['password'] }}" @endif
                                                placeholder="Password"
                                                class="focus:shadow-soft-primary-outline leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 text-sm font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-fuchsia-300 focus:outline-none dark:bg-gray-950 dark:text-white/80 dark:placeholder:text-white/80"
                                            >
                                            @if ($errors->has('password'))
                                                <span class="text-sm font-normal text-red-500/95">
                                                    {{ $errors->first('password') }}
                                                </span>
                                            @endif
                                        </div>
                                        <div class="min-h-6 mb-0.5 block pl-12 text-left">
                                            <input
                                                id="remember"
                                                name="remember"
                                                @if (isset($_COOKIE['email'])) checked="" @endif
                                                class="rounded-10 duration-250 ease-soft-in-out after:rounded-circle after:shadow-soft-2xl after:duration-250 checked:after:translate-x-5.3 relative float-left -ml-12 mt-0.5 h-5 w-10 cursor-pointer appearance-none border border-solid border-gray-200 bg-slate-800/10 bg-none bg-contain bg-left bg-no-repeat align-top transition-all after:absolute after:top-px after:h-4 after:w-4 after:translate-x-px after:bg-white after:content-[''] checked:border-slate-800/95 checked:bg-slate-800/95 checked:bg-none checked:bg-right"
                                                type="checkbox"
                                            >
                                            <label
                                                class="mb-2 ml-1 cursor-pointer select-none text-sm font-normal text-slate-700"
                                                for="remember"
                                            >Remember me?</label>
                                        </div>
                                        <div class="text-center">
                                            <button
                                                type="submit"
                                                class="hover:scale-102 active:opacity-85 hover:shadow-soft-xs leading-pro ease-soft-in tracking-tight-soft shadow-soft-md bg-150 bg-x-25 mb-0 mt-6 inline-block w-full cursor-pointer rounded-lg border-0 bg-gradient-to-tl from-purple-700 to-pink-500 px-6 py-3 text-center align-middle text-xs font-bold uppercase text-white transition-all"
                                            >Sign In</button>
                                        </div>
                                    </form>
                                </div>
                                <div
                                    class="border-black/12.5 rounded-b-2xl border-t-0 border-solid p-6 px-1 pt-0 text-center sm:px-6">
                                    <p class="mx-auto mb-4">Don't have an account? <a
                                            href="../../../pages/authentication/signup/basic.html"
                                            class="bg-gradient-to-tl from-purple-700 to-pink-500 bg-clip-text font-bold text-transparent"
                                        >Sign up</a></p>
                                </div>
                            </div>
                        </div>
                        <div
                            class="flex-0 absolute right-0 top-0 my-auto hidden h-full w-6/12 max-w-full flex-col justify-center px-3 pr-0 text-center lg:flex">
                            <div
                                class="relative m-4 flex h-full flex-col justify-center rounded-xl bg-gradient-to-tl from-purple-700 to-pink-500 px-24">
                                <img
                                    class="absolute left-0 opacity-40"
                                    src="https://demos.creative-tim.com/soft-ui-dashboard-pro/assets/img/shapes/pattern-lines.svg"
                                    alt="pattern-lines"
                                >
                                <div class="relative">
                                    <img
                                        class="max-w-125 z-2 relative w-full"
                                        src="https://demos.creative-tim.com/soft-ui-dashboard-pro/assets/img/illustrations/chat.png"
                                        alt="chat-img"
                                    >
                                </div>
                                <h4 class="mt-12 font-bold text-white">"Attention is the new currency"</h4>
                                <p class="text-white">The more effortless the writing looks, the more effort the writer
                                    actually
                                    pui into the proccess.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </body>
    {{-- <script src="assets/js/creative-UI.js"></script> --}}

</html>
