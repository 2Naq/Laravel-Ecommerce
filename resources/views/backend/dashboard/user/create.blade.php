@include('backend.dashboard.components.breadcrumb', ['title' => $config['seo']['create']['title']])
<div class="flex flex-col pb-40 pt-6">
    <div class="col-lg-12 flex">
        <div class="col-lg-5 mt-5">
            <div class="panel-title">
                <h3>Thông tin người dùng</h3>
            </div>
            <div class="panel-discription">
                <p> - Nhập thông tin người dùng</p>
                <p> - Lưu ý: những trường bắt buộc đánh dấu <span class="error-message">(*)</span></p>
            </div>
        </div>
        <form
            action=""
            method="GET"
            class="col-lg-7 mt-6 bg-white"
        >
            <div class="ibox-title_c flex justify-between">
                <h3>{{ $config['seo']['create']['title'] }}</h3>
                <div class="ibox-tools">
                    <a class="collapse-link">
                        <i class="fa fa-chevron-up"></i>
                    </a>
                    <a
                        class="dropdown-toggle"
                        data-toggle="dropdown"
                        href="#"
                    >
                        <i class="fa fa-wrench"></i>
                    </a>
                    <ul class="dropdown-menu dropdown-user">
                        <li><a href="#">Config option 1</a>
                        </li>
                        <li><a href="#">Config option 2</a>
                        </li>
                    </ul>
                    <a class="close-link">
                        <i class="fa fa-times"></i>
                    </a>
                </div>
            </div>
            <div class="ibox-content_c flex flex-col">
                <div class="col-lg-12 flex">
                    <div class="col-lg-6 mb-6 flex flex-col">
                        <label class="control-label">Email
                            <span class="error-message">*</span>
                        </label>
                        <div class=""><input
                                type="text"
                                name="email"
                                placeholder="Email"
                                class="form-control"
                                autocomplete="off"
                                value=""
                            > <span class="error-message">Email không hợp lệ</span>
                        </div>
                    </div>
                    <div class="col-lg-6 mb-6 flex flex-col">
                        <label class="control-label">Họ và tên
                            <span class="error-message">*</span>
                        </label>
                        <div class=""><input
                                type="text"
                                name="name"
                                value=""
                                placeholder="Nhập email"
                                class="form-control"
                                autocomplete="off"
                            >
                        </div>
                    </div>
                </div>
                <div class="col-lg-12 flex">
                    <div class="col-lg-6 mb-6 flex flex-col">
                        <label class="control-label">Nhóm thành viên
                        </label>
                        <select
                            class="form-control"
                            name="user_catalog_id"
                            id=""
                        >
                            <option value="0">Chọn thành viên</option>
                            <option value="1">Quản trị viên</option>
                            <option value="2">Thành viên</option>
                            <option value="3">Cộng tác viên</option>
                        </select>
                    </div>
                    <div class="col-lg-6 mb-6 flex flex-col">
                        <label class="control-label">Ngày sinh
                        </label>
                        <div class=""><input
                                type="date"
                                name="birthday"
                                value=""
                                placeholder="Nhập email"
                                class="form-control"
                                autocomplete="off"
                            >
                        </div>
                    </div>
                </div>
                <div class="col-lg-12 flex">
                    <div class="col-lg-6 mb-6 flex flex-col">
                        <label class="control-label">Mật khẩu
                            <span class="error-message">*</span>
                        </label>
                        <div class=""><input
                                type="password"
                                name="password"
                                placeholder="Nhập mật khẩu"
                                class="form-control"
                                autocomplete="off"
                            >
                        </div>
                    </div>
                    <div class="col-lg-6 mb-6 flex flex-col">
                        <label class="control-label">Họ và tên
                            <span class="error-message">*</span>
                        </label>
                        <div class=""><input
                                type="password"
                                name="re_password"
                                value=""
                                placeholder="Nhập lại mật khẩu"
                                class="form-control"
                                autocomplete="off"
                            >
                        </div>
                    </div>
                </div>

                <div class="py-6">
                    <div class="col-lg-12 text-right">
                        <button
                            class="btn btn-sm btn-primary"
                            type="submit"
                        >Tạo mới</button>
                    </div>
                </div>
            </div>
        </form>
    </div>

    <hr>

    <div class="col-lg-12 flex">
        <div class="col-lg-5 mt-5">
            <div class="panel-title">
                <h3>Thông tin người dùng</h3>
            </div>
            <div class="panel-discription">
                <p> - Nhập thông tin người dùng</p>
                <p> - Lưu ý: những trường bắt buộc đánh dấu <span class="error-message">(*)</span></p>
            </div>
        </div>
        <form
            action=""
            method="GET"
            class="col-lg-7 mt-6 bg-white"
        >
            <div class="ibox-title_c flex justify-between">
                <h3>{{ $config['seo']['create']['title'] }}</h3>
                <div class="ibox-tools">
                    <a class="collapse-link">
                        <i class="fa fa-chevron-up"></i>
                    </a>
                    <a
                        class="dropdown-toggle"
                        data-toggle="dropdown"
                        href="#"
                    >
                        <i class="fa fa-wrench"></i>
                    </a>
                    <ul class="dropdown-menu dropdown-user">
                        <li><a href="#">Config option 1</a>
                        </li>
                        <li><a href="#">Config option 2</a>
                        </li>
                    </ul>
                    <a class="close-link">
                        <i class="fa fa-times"></i>
                    </a>
                </div>
            </div>
            <div class="ibox-content_c flex flex-col">
                <div class="col-lg-12 flex">
                    <div class="col-lg-6 mb-6 flex flex-col">
                        <label class="control-label">
                            Tỉnh/Thành Phố
                        </label>
                        <div class=""> <select
                                class="form-control"
                                name="province_id"
                                id=""
                            >
                                <option value="0">[Chọn Tỉnh/Thành Phố]</option>
                            </select>
                        </div>
                    </div>
                    <div class="col-lg-6 mb-6 flex flex-col">
                        <label class="control-label">
                            Quận/Huyện
                        </label>
                        <div class=""> <select
                                class="form-control"
                                name="district_id"
                                id=""
                            >
                                <option value="0">Chọn Quận/Huyện</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div class="col-lg-12 flex">
                    <div class="col-lg-6 mb-6 flex flex-col">
                        <label class="control-label">
                            Phường/Xã
                        </label>
                        <div class=""> <select
                                class="form-control"
                                name="Ward_id"
                                id=""
                            >
                                <option value="0">Chọn Phường/Xã</option>
                            </select>
                        </div>
                    </div>
                    <div class="col-lg-6 mb-6 flex flex-col">
                        <label class="control-label">Ngày sinh
                        </label>
                        <div class=""><input
                                type="date"
                                name="birthday"
                                value=""
                                placeholder="Nhập email"
                                class="form-control"
                                autocomplete="off"
                            >
                        </div>
                    </div>
                </div>
                <div class="col-lg-12 flex">
                    <div class="col-lg-6 mb-6 flex flex-col">
                        <label class="control-label">Mật khẩu
                            <span class="error-message">*</span>
                        </label>
                        <div class=""><input
                                type="password"
                                name="password"
                                placeholder="Nhập mật khẩu"
                                class="form-control"
                                autocomplete="off"
                            >
                        </div>
                    </div>
                    <div class="col-lg-6 mb-6 flex flex-col">
                        <label class="control-label">Họ và tên
                            <span class="error-message">*</span>
                        </label>
                        <div class=""><input
                                type="password"
                                name="re_password"
                                value=""
                                placeholder="Nhập lại mật khẩu"
                                class="form-control"
                                autocomplete="off"
                            >
                        </div>
                    </div>
                </div>

                <div class="py-6">
                    <div class="col-lg-12 text-right">
                        <button
                            class="btn btn-sm btn-primary"
                            type="submit"
                        >Tạo mới</button>
                    </div>
                </div>
            </div>
        </form>
    </div>

</div>
