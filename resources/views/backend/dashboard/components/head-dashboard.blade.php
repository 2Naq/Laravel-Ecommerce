<base href="{{ env('APP_URL') }}">
<meta charset="utf-8">
<meta
    name="viewport"
    content="width=device-width, initial-scale=1.0"
>
<meta
    http-equiv="X-UA-Compatible"
    content="ie=edge"
>
@vite('resources/css/app.css')
<title>DevShop | Login</title>
<link
    href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700"
    rel="stylesheet"
/>
<script
    src="https://kit.fontawesome.com/42d5adcbca.js"
    crossorigin="anonymous"
></script>
<link
    href="./assets/css/nucleo-icons.css"
    rel="stylesheet"
/>
<link
    href="./assets/css/nucleo-svg.css"
    rel="stylesheet"
/>
<link
    href="./assets/css/soft-ui-dashboard-tailwind.css"
    rel="stylesheet"
/>
{{-- add css  plugin --}}
@if (isset($config['css']) && is_array($config['css']))
    @foreach ($config['css'] as $key => $val)
        <link
            href="{{ htmlspecialchars($val) }}"
            rel="stylesheet"
        />
    @endforeach
@endif
<script
    src='./assets/js/plugins/jquery-3.1.1.min.js'
    crossorigin="anonymous"
></script>
