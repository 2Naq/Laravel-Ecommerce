<div class="ibox-content">
    <table class="table-bordered table">
        <thead>
            {{-- tableHeading --}}
            <tr>
                <th>
                    <input
                        type="checkbox"
                        value=""
                        class="input-checkbox checkBoxItem"
                    >
                </th>
                <th>#</th>
                <th class="tb_w-100">Họ Tên</th>
                <th class="tb_w-100">Email</th>
                <th class="tb_w-100">Số điện thoại</th>
                <th>Địa chỉ</th>
                <th class="tb_w-100 text-center">Status</th>
                <th class="tb_w-100 text-center">Thao tác</th>
            </tr>
        </thead>
        <tbody>
            @if (isset($users) && is_object($users))

                @foreach ($users as $user)
                    <tr>
                        <td class="spacing-0">
                            <input
                                type="checkbox"
                                value=""
                                class="input-checkbox checkBoxItem"
                            >
                        </td>
                        <td class="spacing-0">{{ $user->id }}</td>
                        <td>{{ $user->name }}</td>
                        <td>{{ $user->email }}</td>
                        <td>{{ $user->phone_number }}</td>
                        <td>{{ $user->address }}</td>
                        <td class="text-center">
                            <input
                                type="checkbox"
                                class="js-switch"
                                checked=""
                                data-switchery="true"
                                style="display: none;"
                            >
                        </td>
                        <td class="text-center">
                            <a
                                href="#"
                                class="btn btn-success"
                            >
                                <i class="fa fa-edit"></i>
                            </a>
                            <a
                                href="#"
                                class="btn btn-danger"
                            >
                                <i class="fa fa-trash"></i>
                            </a>
                        </td>
                    </tr>
                @endforeach
            @endif
        </tbody>
    </table>
    @include('vendor.pagination.apagination_custom')
</div>
