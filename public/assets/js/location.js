'use strict';
const choiceProvinces = new Choices('#provinces', { allowHTML: true });
const choicesDistricts = new Choices('#districts', { allowHTML: true });
const choicesWards = new Choices('#wards', { allowHTML: true });
(function ($) {
    const HT = {
        initSearchIcons: function () {
            const inputs = document.querySelectorAll('input');
            inputs.forEach(function (input) {
                // Kiểm tra xem input có class "choices__input choices__input--cloned" hay không
                if (
                    input.classList.contains('choices__input') ||
                    input.classList.contains('choices__input--cloned')
                ) {
                    const divWrapper = document.createElement('div');
                    // Thêm class cho div wrapper
                    divWrapper.classList.add('input-wrapper', 'divInputSearch', 'div-icon-search');
                    // Tạo phần tử span container
                    const spanContainer = document.createElement('span');
                    spanContainer.classList.add('choice-icon', 'span-icon');
                    // Tạo icon tìm kiếm
                    const searchIcon = document.createElement('i');
                    searchIcon.classList.add('fas', 'fa-search');
                    searchIcon.setAttribute('aria-hidden', 'true');

                    //Gắn span vào div vào
                    divWrapper.appendChild(spanContainer);
                    // Gắn icon vào span
                    spanContainer.appendChild(searchIcon);
                    // Chuyển input vào trong div wrapper
                    input.parentNode.insertBefore(divWrapper, input);
                    divWrapper.appendChild(input);
                }
            });
        },

        location: function () {
            $(document).on('change', '.location', function () {
                let _this = $(this);
                let options = {
                    data: {
                        location_id: _this.val()
                    },
                    target: _this.attr('data-target')
                };
                HT.sendDataTogleLocation(options);
            });
        },

        // district: function () {
        //     const districtsSelect = document.getElementById('districts');
        //     districtsSelect.addEventListener('change', (event) => {
        //         const targetValue = districtsSelect.dataset.target;
        //         const district_id = event.target.value;
        //         let options = {
        //             data: {
        //                 district_id: district_id
        //             },
        //             target: targetValue
        //         };
        //         HT.sendDataTogleLocation(options);
        //     });
        // },

        sendDataTogleLocation: function (options) {
            $.ajax({
                url: '/ajax/location/getLocation',
                method: 'GET',
                data: options,
                dataType: 'json',
                success: function (response) {
                    const dataRes = Object.values(response);
                    if (options.target == 'districts') {
                        dataRes.unshift({ value: '', label: '--Chọn Quận/Huyện--' });
                        choicesDistricts
                            .setChoices(dataRes, 'value', 'label', true)
                            .setChoiceByValue('');
                        choicesWards
                            .setChoices(
                                [{ value: '', label: '--Chọn Phường/xã--' }],
                                'value',
                                'label',
                                true
                            )
                            .setChoiceByValue('');
                    } else {
                        dataRes.unshift({ value: '', label: '--Chọn Phường/Xã--' });
                        choicesWards
                            .setChoices(dataRes, 'value', 'label', true)
                            .setChoiceByValue('');
                    }
                },
                error: (xhr, status, error) => {
                    console.error('Ajax error:', xhr.status, error);
                    console.error('Response text:', xhr.responseText);
                }
            });
        }
    };
    $(document).ready(function () {
        HT.location();
        HT.initSearchIcons();
        console.log('🚀 ~ function-main:', '-----------run--------');
    });
    console.log('🚀 ~File location:', '-----------run--------');
})(jQuery);
