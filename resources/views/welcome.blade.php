<!DOCTYPE html>
<html lang="en">

    <head>
        <meta charset="UTF-8">
        <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
        >
        <meta
            http-equiv="X-UA-Compatible"
            content="ie=edge"
        >
        <title>Document</title>
        @vite('resources/css/app.css')
        <style>
            .gradient-text {
                background: linear-gradient(90deg, #00ffff, #ff00c3);
                -webkit-background-clip: text;
                background-clip: text;
                -webkit-text-fill-color: transparent;
                font-size: 100px;
            }
        </style>
    </head>

    <body>
        <div class="w-[100%] text-center">
            <span class="gradient-text">heheh</span>
        </div>
    </body>

</html>
