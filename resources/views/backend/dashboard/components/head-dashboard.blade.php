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
<!-- Main Styling -->
<link
    href="./assets/css/soft-ui-dashboard-tailwind.css"
    rel="stylesheet"
/>
<!--     Fonts and icons     -->
<link
    href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700"
    rel="stylesheet"
/>
<!-- Font Awesome Icons -->
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
{{-- add css  plugin --}}
@if (isset($config['css']) && is_array($config['css']))
    @foreach ($config['css'] as $key => $val)
        <link
            href="{{ htmlspecialchars($val) }}"
            rel="stylesheet"
        />
    @endforeach
@endif
