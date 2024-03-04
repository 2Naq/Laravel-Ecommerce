<div
    class="dataTable-container"
    style="height: 302.594px;"
>
    <table
        class="table-flush dataTable-table table table-auto"
        datatable=""
        id="datatable-search"
    >
        <thead class="thead-light">
            <tr>
                <th
                    data-sortable=""
                    style="width: 0%;"
                >
                    <input
                        type="checkbox"
                        value=""
                        class="input-checkbox checkBoxItem"
                    >
                </th>
                <th
                    data-sortable=""
                    style="width: 6%;"
                ><a href="javascript:;">#</a>

                </th>
                <th
                    data-sortable=""
                    style="width: 16.614%;"
                >
                    <a
                        href="javascript:;"
                        class="dataTable-sorter"
                    >
                        Họ và tên </a>
                </th>
                <th
                    data-sortable=""
                    style="width: 16.614%;"
                >
                    <a
                        href="javascript:;"
                        class="dataTable-sorter"
                    >
                        Email </a>
                </th>
                <th
                    data-sortable=""
                    style="width: 16.614%;"
                >
                    <a
                        href="javascript:;"
                        class="dataTable-sorter"
                    >
                        Số điện thoại</a>
                </th>
                <th
                    data-sortable=""
                    style="width: 16.614%;"
                >
                    <a
                        href="javascript:;"
                        class="dataTable-sorter"
                    >Địa chỉ </a>
                </th>
                <th data-sortable="">Status</th>
                <th data-sortable="">Thao tác</th>
            </tr>
        </thead>
        <tbody>
            @if (isset($users) && is_object($users))
                @foreach ($users as $user)
                    <tr>
                        <td class="text-sm font-normal leading-normal">
                            <input
                                type="checkbox"
                                value=""
                                class="input-checkbox checkBoxItem"
                            >
                        </td>
                        <td class="text-sm font-normal leading-normal">{{ $user->id }}</td>
                        <td class="text-sm font-normal leading-normal">{{ $user->name }}</td>
                        <td class="text-sm font-normal leading-normal">{{ $user->email }}</td>
                        <td class="text-sm font-normal leading-normal">{{ $user->phone_number }}
                        </td>
                        <td class="whitespace-normal text-sm font-normal leading-normal">{{ $user->address }}</td>
                        {{-- trạng thái --}}
                        <td class="text-sm font-normal leading-normal">
                            <input
                                id="status"
                                class="mt-0.54 rounded-10 duration-250 ease-soft-in-out after:rounded-circle after:shadow-soft-2xl after:duration-250 checked:after:translate-x-5.25 relative float-left ml-auto h-5 w-10 cursor-pointer appearance-none border border-solid border-gray-200 bg-slate-800/10 bg-none bg-contain bg-left bg-no-repeat align-top transition-all after:absolute after:top-px after:h-4 after:w-4 after:translate-x-px after:bg-white after:content-[''] checked:border-slate-800/95 checked:bg-slate-800/95 checked:bg-none checked:bg-right"
                                type="checkbox"
                            >
                        </td>
                        {{-- thao tác --}}
                        <td class="text-center text-sm font-normal leading-normal">
                            <a
                                href="javascript:;"
                                class="text-xs font-semibold leading-tight text-slate-400"
                            >
                                <i class="fa fa-edit text-cyan-500"></i>
                            </a>
                            <a
                                href="#"
                                class="ml-3 text-xs font-semibold leading-tight text-slate-400"
                            >
                                <i class="fa fa-trash text-red-500"></i>
                            </a>
                        </td>
                    </tr>
                @endforeach
            @endif
        </tbody>
    </table>
</div>
