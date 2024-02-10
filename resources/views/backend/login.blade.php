<!DOCTYPE html>
<html>

    <head>

        <meta charset="utf-8">
        <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
        >

        <title>DevShop | Login</title>

        <link
            href="access/css/bootstrap.min.css"
            rel="stylesheet"
        >
        <link
            href="access/font-awesome/css/font-awesome.css"
            rel="stylesheet"
        >

        <link
            href="access/css/animate.css"
            rel="stylesheet"
        >
        <link
            href="access/css/style.css"
            rel="stylesheet"
        >
        <link
            href="access/css/customize.css"
            rel="stylesheet"
        >

    </head>

    <body class="gray-bg">
        <div class="d-logo">

            <h1
                class="logo-name"
                style="font-size: 75px "
            >SHOP DEV</h1>

        </div>
        <div class="middle-box loginscreen animated fadeInDown text-center">
            <div>
                <h3>Welcome to SHOP DEV</h3>
                <p>Perfectly designed and precisely prepared admin theme with over 50 pages with extra new web app
                    views.
                    <!--Continually expanded and constantly improved Inspinia Admin Them (IN+)-->
                </p>
                <p>Login in. To see it in action.</p>
                <form
                    method="POST"
                    class="m-t text-left"
                    role="form"
                    action="{{ route('auth.login') }}"
                >
                    @csrf
                    <div class="form-group">
                        <input
                            type="text"
                            name="email"
                            class="form-control radius-3px mb_input"
                            placeholder="Email"
                        >
                        @if ($errors->has('email'))
                            <span class="error-message">
                                {{ $errors->first('email') }}
                            </span>
                        @endif
                    </div>
                    <div class="form-group">
                        <input
                            type="password"
                            name="password"
                            class="form-control radius-3px mb_input"
                            placeholder="Password"
                        >
                        @if ($errors->has('password'))
                            <span class="error-message">
                                {{ $errors->first('password') }}
                            </span>
                        @endif
                    </div>
                    <button
                        type="submit"
                        class="btn btn-primary full-width m-b block"
                    >Login</button>

                    <a href="#"><small>Forgot password?</small></a>
                    <p class="text-muted text-center"><small>Do not have an account?</small></p>
                    <a
                        class="btn btn-sm btn-white btn-block"
                        href="register.html"
                    >Create an account</a>
                </form>
                <p class="m-t"> <small>Inspinia we app framework base on Bootstrap 3 &copy; 2014</small> </p>
            </div>
        </div>

        <!-- Mainly scripts -->
        <script src="access/js/jquery-3.1.1.min.js"></script>
        <script src="access/js/bootstrap.min.js"></script>

    </body>

</html>
