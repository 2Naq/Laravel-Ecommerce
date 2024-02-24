<div class="dataTable-top dataTable-top[none-after] flex justify-between">
    <div class="dataTable-dropdown"><label><select class="dataTable-selector">
                <option value="5">5</option>
                <option
                    value="10"
                    selected=""
                >10</option>
                <option value="15">15</option>
                <option value="20">20</option>
                <option value="25">25</option>
            </select> entries per page</label>
    </div>
    <div class="groupToolBox flex">
        <div class="dataTable-search"><input
                class="dataTable-input focus:shadow-soft-primary-outline ease-soft focus:outline-none focus:transition-shadow dark:text-white/80"
                placeholder="Search..."
                type="text"
            >
        </div>
        <div class="addNewUser ml-3">
            <a
                class="leading-pro ease-soft-in shadow-soft-md bg-150 hover:shadow-soft-xs active:opacity-85 hover:scale-102 tracking-tight-soft bg-x-25 inline-block cursor-pointer rounded-lg bg-transparent bg-gradient-to-tl from-gray-900 to-slate-800 px-6 py-2.5 text-center align-middle text-xs font-bold uppercase text-white transition-all"
                href="{{ route('user.create') }}"
            > <i
                    class="fas fa-plus"
                    aria-hidden="true"
                > </i>&nbsp;&nbsp;Thêm thành viên</a>
        </div>
    </div>
</div>
