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
        <script
            src="https://kit.fontawesome.com/42d5adcbca.js"
            crossorigin="anonymous"
        ></script>
        @vite('resources/css/app.css')
        <link
            href="./assets/css/choices.css"
            rel="stylesheet"
        />
        <script src="./assets/js/choices.js"></script>

        {{-- <style>
            .gradient-text {
                background: linear-gradient(90deg, #00ffff, #ff00c3);
                -webkit-background-clip: text;
                background-clip: text;
                -webkit-text-fill-color: transparent;
                font-size: 100px;
            }

            .choices--provinces-item-choice-1 {
                position: relative;
                display: flex;
                flex-wrap: wrap;
                height: 100%;
                width: 200px;
                align-items: stretch;
                transition-timing-function: cubic-bezier(0.25, 0.1, 0.25, 1);
            }

            .choice-icon {
                display: flex;
                position: absolute;
                z-index: 50;
                line-height: 5.6;
                height: 100%;
                margin-left: 1px;
                left: 0px;
                text-align: center;
                align-items: center;
                white-space: nowrap;
                padding: 0.625rem 0.5rem;
            }

            .choices__input.choices__input--cloned {
                display: flex;
                flex: 1 1 auto;
                position: relative;
                padding-left: 2.1875rem;
                padding-right: 0.75rem;
                padding-top: 0.5rem;
                padding-bottom: 0.5rem;
                min-width: 0px;
                border-radius: 0.5rem;
                /* -webkit-appearance: none;
                appearance: none; */
                outline: deepskyblue;
                border: 1px solid #d2d6da !important;
            }

            .choices__input.choices__input--cloned:focus {
                box-shadow: 0 0 0 2px #e9aede, 0 0 0 2px #0000;
            }
        </style> --}}
    </head>

    <body class="leading-default m-0 bg-gray-50 font-sans text-base font-normal text-slate-500 antialiased">
        <div class="w-[100%] text-center">
            <span class="gradient-text">heheh</span>
        </div>
        {{-- flex items-center justify-center --}}
        {{-- <div class="choices--provinces-item-choice-1">
            <span class="choice-icon span-icon"><i
                    class="fas fa-search"
                    aria-hidden="true"
                >
                </i>
            </span>
            <input
                type="search"
                name="search_terms"
                class="choices__input choices__input--cloned"
                autocomplete="off"
                autocapitalize="off"
                spellcheck="false"
                role="textbox"
                aria-autocomplete="list"
                aria-label="null"
            >
        </div> --}}
        <select
            id="district"
            name="district"
            class="form-control"
            choices-select=""
            choice
        >
            <option value="">Chọn quận/huyện</option>
            <option value="1">Quận 1</option>
            <option value="2">Quận 2</option>
            <option value="3">Quận 3</option>
            <option value="4">Quận 4</option>
            <option value="5">Quận 5</option>
        </select>

    </body>
    <script src="./assets/js/plugins/choices.min.js"></script>
    {{-- <script
        src='./assets/js/soft-ui-dashboard-tailwind.js'
        async
    ></script> --}}

</html>
