<div class="my-2_5 mx-5 flex flex-col">
    <div class='flex items-center justify-between'>
        <div
            class="dataTables_length"
            id="DataTables_Table_0_length"
        >
            <label class="flex items-center">Show
                <select
                    id="recordsPerPage"
                    name="DataTables_Table_0_length"
                    aria-controls="DataTables_Table_0"
                    class="form-control input-sm mx-2"
                >
                    <option value="10">10</option>
                    <option value="25">25</option>
                    <option value="50">50</option>
                    <option value="100">100</option>
                </select>
                entries</label>
        </div>

        <div class="flex flex-row items-center">
            <div class="flex items-center">
                <label class="flex items-center">
                    <select
                        name="DataTables_Table_0_length"
                        aria-controls="DataTables_Table_0"
                        class="form-control input-sm mx-2"
                    >
                        <option value="0">Chọn nhóm thành viên</option>
                        <option value="1">Quản trị viên</option>
                    </select>
                </label>
            </div>
            <div class="input-group">
                <input
                    type="text"
                    placeholder="Search"
                    class="input-sm form-control"
                >
                <span class="input-group-btn">
                    <button
                        type="button"
                        class="btn btn-sm btn-deafult mr-2"
                    ><i class="fa fa-search"></i> Tìm kiếm</button>
                </span>
            </div>
            <span class="w-auto">
                <a
                    href="{{ route('user.create') }}"
                    type="button"
                    class="btn btn-sm btn-primary mr-2"
                >
                    <i class="fa fa-plus"></i> Thêm thành viên mới</a>
            </span>
        </div>
    </div>
    <div
        class="dataTables_info my-2_5"
        id="DataTables_Table_0_info"
        role="status"
        aria-live="polite"
    >
        Showing {{ $users->firstItem() }} to {{ $users->lastItem() }} of {{ $users->total() }} entries
    </div>
</div>
