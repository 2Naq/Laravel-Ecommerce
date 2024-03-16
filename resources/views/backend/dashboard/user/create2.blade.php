<div class="-mx-3 flex flex-wrap">
    <div class="flex-0 w-full max-w-full px-3">
        <div
            multisteps-form=""
            class="mb-12"
        >
            @if ($errors->any())
                <div class="mb-4 rounded border border-red-400 bg-red-100 p-4 text-red-700">
                    <ul>
                        @foreach ($errors->all() as $error)
                            <li>{{ $error }}</li>
                        @endforeach
                    </ul>
                </div>
            @endif
            <div class="-mx-3 flex flex-wrap justify-center">
                <div class="flex-0 m-auto w-full max-w-full px-3 lg:w-8/12">
                    <form
                        class="relative mb-32"
                        style="height: 404px;"
                        action="{{ route('user.store') }}"
                        method="POST"
                    >
                        @csrf
                        <div
                            active=""
                            form="user"
                            class="dark:shadow-soft-dark-xl shadow-soft-xl visible absolute left-0 top-0 flex h-auto w-full min-w-0 flex-col break-words rounded-2xl border-0 bg-white bg-clip-border p-4 opacity-100 dark:bg-gray-950"
                        >
                            <h5 class="mb-0 font-bold">About me</h5>
                            <p class="mb-0 text-sm leading-normal">Mandatory informations</p>
                            {{-- field --}}
                            <div>
                                <div class="-mx-3 mt-4 flex flex-wrap">
                                    <div class="flex-0 w-full max-w-full px-3 sm:w-6/12">
                                        <label
                                            class="mb-2 ml-1 text-xs font-bold text-slate-700 dark:text-white/80"
                                            for="fullname"
                                        >Full Name (<span class="text-red-600">*</span>)</label>
                                        <input
                                            type="text"
                                            id="fullname"
                                            name="fullname"
                                            placeholder="eg. Michael"
                                            class="focus:shadow-soft-primary-outline leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 text-sm font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-fuchsia-300 focus:outline-none dark:bg-gray-950 dark:text-white/80 dark:placeholder:text-white/80"
                                        >
                                    </div>
                                    <div class="flex-0 mt-4 w-full max-w-full px-3 sm:mt-0 sm:w-6/12">
                                        <label
                                            class="mb-2 ml-1 text-xs font-bold text-slate-700 dark:text-white/80"
                                            for="email"
                                        >Email Address (<span class="text-red-600">*</span>)</label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            autocomplete="username"
                                            placeholder="eg. soft@dashboard.com"
                                            class="focus:shadow-soft-primary-outline leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 text-sm font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-fuchsia-300 focus:outline-none dark:bg-gray-950 dark:text-white/80 dark:placeholder:text-white/80"
                                        >
                                    </div>
                                </div>

                                <div class="-mx-3 mt-4 flex flex-wrap">
                                    <div class="flex-0 w-full max-w-full px-3 sm:w-6/12">
                                        <label
                                            class="mb-2 ml-1 text-xs font-bold text-slate-700 dark:text-white/80"
                                            for="user-catelogue_id"
                                        >Nhóm thành viên (<span class="text-red-600">*</span>)</label>
                                        <select
                                            choices-select=""
                                            choice
                                            id="user-catelogue_id"
                                            name="user-catelogue_id"
                                            placeholder="Chọn nhóm thành viên"
                                        >
                                            <option value="0">--Chọn nhóm thành viên--</option>
                                            <option value="1">Quản trị viên</option>
                                            <option value="2">Cộng tác viên</option>
                                            <option value="3">Thành viên</option>
                                        </select>

                                    </div>
                                    <div class="flex-0 mt-4 w-full max-w-full px-3 sm:mt-0 sm:w-6/12">
                                        <label
                                            class="mb-2 ml-1 text-xs font-bold text-slate-700 dark:text-white/80"
                                            for="birthday"
                                        >Birthday</label>
                                        <input
                                            type="date"
                                            id="birthday"
                                            name="birthday"
                                            {{-- placeholder="eg. --/--/----" --}}
                                            class="focus:shadow-soft-primary-outline leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 text-sm font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-fuchsia-300 focus:outline-none dark:bg-gray-950 dark:text-white/80 dark:placeholder:text-white/80"
                                        >
                                    </div>
                                </div>

                                <div class="-mx-3 mt-4 flex flex-wrap">
                                    <div class="flex-0 w-full max-w-full px-3 sm:w-6/12">
                                        <label
                                            class="mb-2 ml-1 text-xs font-bold text-slate-700 dark:text-white/80"
                                            for="password"
                                        >Password (<span class="text-red-600">*</span>)</label>
                                        <input
                                            type="password"
                                            id="password"
                                            name="password"
                                            autocomplete="new-password"
                                            placeholder="******"
                                            class="focus:shadow-soft-primary-outline leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 text-sm font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-fuchsia-300 focus:outline-none dark:bg-gray-950 dark:text-white/80 dark:placeholder:text-white/80"
                                        >
                                    </div>
                                    <div class="flex-0 mt-4 w-full max-w-full px-3 sm:mt-0 sm:w-6/12">
                                        <label
                                            class="mb-2 ml-1 text-xs font-bold text-slate-700 dark:text-white/80"
                                            for="Repeat-Password"
                                        >Repeat Password (<span class="text-red-600">*</span>)</label>
                                        <input
                                            type="password"
                                            id="Repeat-Password"
                                            name="Repeat-Password"
                                            autocomplete="new-password"
                                            placeholder="******"
                                            class="focus:shadow-soft-primary-outline leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 text-sm font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-fuchsia-300 focus:outline-none dark:bg-gray-950 dark:text-white/80 dark:placeholder:text-white/80"
                                        >
                                    </div>
                                </div>
                                {{-- choice --}}
                                <div class="-mx-3 mt-4 flex flex-wrap">
                                    {{-- province --}}
                                    <div class="flex-0 mt-4 w-full max-w-full px-3 sm:mt-0 sm:w-6/12">
                                        <label
                                            class="mb-2 ml-1 text-xs font-bold text-slate-700 dark:text-white/80"
                                            for="provinces"
                                        >Tỉnh/Thành Phố</label>
                                        <div class="w-full">
                                            <select
                                                id="provinces"
                                                class="provinces location w-full appearance-none outline-none"
                                                name="provinces"
                                                type="select-one"
                                                data-target="districts"
                                            >
                                                <option value="0">--Chọn Tỉnh/Thành Phố--</option>
                                                @if (isset($provinces))
                                                    @foreach ($provinces as $province)
                                                        <option value="{{ $province['code'] }}">
                                                            {{ $province['full_name'] }}</option>
                                                    @endforeach
                                                @endif
                                            </select>
                                        </div>
                                    </div>
                                    {{-- districts  --}}
                                    <div class="flex-0 mt-4 w-full max-w-full px-3 sm:mt-0 sm:w-6/12">
                                        <label
                                            class="mb-2 ml-1 text-xs font-bold text-slate-700 dark:text-white/80"
                                            for="districts"
                                        >Quận/Huyện</label>
                                        <div class="w-full">
                                            <select
                                                id="districts"
                                                class="districts location w-full appearance-none outline-none"
                                                name="districts"
                                                type="select-one"
                                                data-target="wards"
                                            >
                                                <option value="#">--Chọn Quận/Huyện--</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                {{-- wards --}}
                                <div class="-mx-3 mt-4 flex flex-wrap">
                                    <div class="flex-0 mt-4 w-full max-w-full px-3 sm:mt-0 sm:w-6/12">
                                        <label
                                            class="mb-2 ml-1 text-xs font-bold text-slate-700 dark:text-white/80"
                                            for="wards"
                                        >Phường/Xã</label>
                                        <div class="w-full">
                                            <select
                                                id="wards"
                                                class="w-full appearance-none outline-none"
                                                name="wards"
                                                type="select-one"
                                            >
                                                <option value="#">--Chọn Phường/Xã--</option>
                                            </select>
                                        </div>
                                    </div>
                                    {{-- address --}}
                                    <div class="flex-0 mt-4 w-full max-w-full px-3 sm:mt-0 sm:w-6/12">
                                        <label
                                            class="mb-2 ml-1 text-xs font-bold text-slate-700 dark:text-white/80"
                                            for="Address"
                                        >Detailed address</label>
                                        <input
                                            type="text"
                                            id="Address"
                                            name="Address"
                                            placeholder="eg. ấp 5 xã Long Thọ, Nhơn Trạch, Đồng Nai"
                                            class="focus:shadow-soft-primary-outline leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 text-sm font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-fuchsia-300 focus:outline-none dark:bg-gray-950 dark:text-white/80 dark:placeholder:text-white/80"
                                        >
                                    </div>
                                </div>
                                {{-- button summit --}}
                                <div class="mt-6 flex">
                                    <button
                                        type="submit"
                                        aria-controls="address"
                                        next-form-btn=""
                                        href="javascript:;"
                                        class="hover:scale-102 active:opacity-85 hover:shadow-soft-xs dark:from-slate-850 dark:to-gray-850 leading-pro ease-soft-in tracking-tight-soft shadow-soft-md bg-150 bg-x-25 mb-0 ml-auto inline-block cursor-pointer rounded-lg border-0 bg-gradient-to-tl from-gray-900 to-slate-800 px-6 py-3 text-right align-middle text-xs font-bold uppercase text-white transition-all dark:bg-gradient-to-tl"
                                    >Next</button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
