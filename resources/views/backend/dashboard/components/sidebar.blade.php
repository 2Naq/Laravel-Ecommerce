<nav
    class="navbar-default navbar-static-side"
    role="navigation"
>
    <div class="sidebar-collapse">
        <ul
            class="nav metismenu"
            id="side-menu"
        >
            <li class="nav-header">
                <div class="dropdown profile-element"> <span>
                        <img
                            alt="image"
                            class="img-circle"
                            src="img/profile_small.jpg"
                        />
                    </span>
                    <a
                        data-toggle="dropdown"
                        class="dropdown-toggle"
                        href="#"
                    >
                        <span class="clear"> <span class="m-t-xs block"> <strong class="font-bold">David
                                    Williams</strong>
                            </span> <span class="text-muted block text-xs">Art Director <b class="caret"></b></span>
                        </span> </a>
                    <ul class="dropdown-menu animated fadeInRight m-t-xs">
                        <li><a href="#">Profile</a></li>
                        <li><a href="#">Contacts</a></li>
                        <li><a href="#">Mailbox</a></li>
                        <li class="#"></li>
                        <li><a href="{{ route('auth.logout') }}">Logout</a></li>
                    </ul>
                </div>
                <div class="logo-element">
                    IN+
                </div>
            </li>
            <li class="active">
                <a href="{{ route('dashboard.index') }}"><i class="fa fa-th-large"></i>
                    <span class="nav-label">Tổng quan</span>
                </a>
            </li>
            <li>
                <a href="#"><i class="fa fa-th-large"></i>
                    <span class="nav-label">Quản lý</span>
                    <span class="fa arrow"></span>
                </a>
                <ul class="nav nav-second-level">
                    <li><a href="{{ route('user.index') }}">Quản lý User</a></li>
                    <li><a href="#">Phân quyền</a></li>
                </ul>
            </li>
        </ul>
    </div>
</nav>
