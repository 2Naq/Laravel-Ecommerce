<base href="{{ env('APP_URL') }}">
<meta charset="utf-8">
<meta
    name="viewport"
    content="width=device-width, initial-scale=1.0"
>
<title>SHOPDEV | Dashboard</title>

<script src="access/js/jquery-3.1.1.min.js"></script>

<link
    href="access/font-awesome/css/font-awesome.css"
    rel="stylesheet"
>
<link
    href="access/css/bootstrap.min.css"
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

@if (isset($config['css']) && is_array($config['css']))
    @foreach ($config['css'] as $key => $val)
        <link
            href="{{ $val }}"
            rel="stylesheet"
        >
    @endforeach
@endif

<link
    href="access/css/customize.css"
    rel="stylesheet"
>
