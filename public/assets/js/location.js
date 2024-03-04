'use strict';
(function ($) {
    const choiceProvinces = new Choices('#provinces', { allowHTML: true });
    const choicesDistricts = new Choices('#districts', { allowHTML: true });
    const choicesWards = new Choices('#wards', { allowHTML: true });
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

        provinces: function () {
            const provincesSelect = document.getElementById('provinces');
            provincesSelect.addEventListener('change', (event) => {
                const provincesID = event.target.value;

                $.ajax({
                    url: '/ajax/location/getProvince',
                    method: 'GET',
                    data: { province_id: provincesID },
                    dataType: 'json',
                    success: function (response) {
                        const dataRes = Object.values(response);
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
                    },
                    error: (xhr, status, error) => {
                        console.error('Ajax error:', xhr.status, error);
                        console.error('Response text:', xhr.responseText);
                    }
                });
            });
        },

        district: function () {
            const districtsSelect = document.getElementById('districts');
            districtsSelect.addEventListener('change', (event) => {
                const district_id = event.target.value;

                $.ajax({
                    url: '/ajax/location/getDistrict',
                    method: 'GET',
                    data: { district_id: district_id },
                    dataType: 'json',
                    success: function (response) {
                        const dataRes = Object.values(response);
                        dataRes.unshift({ value: '', label: '--Chọn Phường/xã--' });
                        choicesWards
                            .setChoices(dataRes, 'value', 'label', true)
                            .setChoiceByValue('');
                    },
                    error: (xhr, status, error) => {
                        console.error('Ajax error:', xhr.status, error);
                        console.error('Response text:', xhr.responseText);
                    }
                });
            });
        }
    };

    $(document).ready(function () {
        HT.initSearchIcons();
        HT.provinces();
        HT.district();
        console.log('🚀 ~ function-main:', '-----------run--------');
    });
    console.log('🚀 ~File location:', '-----------run--------');
})(jQuery);
