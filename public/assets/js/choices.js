if (document.querySelector('[choices-select]')) {
    var choices = document.querySelectorAll('[choices-select]');
    // choices.forEach((choice) => {
    //     const example = new Choices(choice, {
    //         addItems: true,
    //         removeItems: true,
    //         allowHTML: true
    //     });
    //     console.log('🚀 ~ choices:', example);
    // });

    var inputs = document.querySelectorAll('input');
    inputs.forEach(function (input) {
        // Kiểm tra xem input có class "choices__input choices__input--cloned" hay không
        if (
            input.classList.contains('choices__input') ||
            input.classList.contains('choices__input--cloned')
        ) {
            var divWrapper = document.createElement('div');
            // Thêm class cho div wrapper
            divWrapper.classList.add('input-wrapper', 'divInputSearch', 'div-icon-search');

            // Tạo phần tử span container
            var spanContainer = document.createElement('span');
            spanContainer.classList.add('choice-icon', 'span-icon');
            //Gắn span vào div vào
            divWrapper.appendChild(spanContainer);

            // Tạo icon tìm kiếm
            var searchIcon = document.createElement('i');
            searchIcon.classList.add('fas', 'fa-search');
            searchIcon.setAttribute('aria-hidden', 'true');
            // Gắn icon vào span
            spanContainer.appendChild(searchIcon);

            // Chuyển input vào trong div wrapper
            input.parentNode.insertBefore(divWrapper, input);
            divWrapper.appendChild(input);
        }
    });
}
if (document.getElementById('choices-gender')) {
    var gender = document.getElementById('choices-gender');
    const example = new Choices(gender);
}
if (document.getElementById('choices-language')) {
    var language = document.getElementById('choices-language');
    const example = new Choices(language);
}
if (document.getElementById('choices-skills')) {
    var skills = document.getElementById('choices-skills');
    const example = new Choices(skills, {
        delimiter: ',',
        editItems: true,
        maxItemCount: 5,
        removeItemButton: true,
        addItems: true
    });
}
if (document.getElementById('choices-year')) {
    var year = document.getElementById('choices-year');
    setTimeout(function () {
        const example = new Choices(year);
    }, 1);
    for (y = 1900; y <= 2022; y++) {
        var optn = document.createElement('OPTION');
        optn.text = y;
        optn.value = y;
        if (y == 2022) {
            optn.selected = true;
        }
        year.options.add(optn);
    }
}
if (document.getElementById('choices-day')) {
    var day = document.getElementById('choices-day');
    setTimeout(function () {
        const example = new Choices(day);
    }, 1);
    for (y = 1; y <= 31; y++) {
        var optn = document.createElement('OPTION');
        optn.text = y;
        optn.value = y;
        if (y == 3) {
            optn.selected = true;
        }
        day.options.add(optn);
    }
}
if (document.getElementById('choices-month')) {
    var month = document.getElementById('choices-month');
    setTimeout(function () {
        const example = new Choices(month);
    }, 1);
    var d = new Date();
    var monthArray = new Array();
    monthArray[0] = 'January';
    monthArray[1] = 'February';
    monthArray[2] = 'March';
    monthArray[3] = 'April';
    monthArray[4] = 'May';
    monthArray[5] = 'June';
    monthArray[6] = 'July';
    monthArray[7] = 'August';
    monthArray[8] = 'September';
    monthArray[9] = 'October';
    monthArray[10] = 'November';
    monthArray[11] = 'December';
    for (m = 0; m <= 11; m++) {
        var optn = document.createElement('OPTION');
        optn.text = monthArray[m];
        optn.value = m + 1;
        if (m == 4) {
            optn.selected = true;
        }
        month.options.add(optn);
    }
}
if (document.getElementById('choices-questions')) {
    var element = document.getElementById('choices-questions');
    const example = new Choices(element);
}
if (document.getElementById('choices-multiple-remove-button')) {
    var choices = document.getElementById('choices-multiple-remove-button');
    const example = new Choices(choices, {
        delimiter: ',',
        editItems: true,
        maxItemCount: 5,
        removeItemButton: true,
        addItems: true
    });
}
if (document.getElementById('choices-country')) {
    var country = document.getElementById('choices-country');
    const example = new Choices(country);
}
if (document.getElementById('choices-category')) {
    var element = document.getElementById('choices-category');
    const example = new Choices(element, { searchEnabled: false });
}
