/*!

=========================================================
* Soft UI Dashboard Pro Tailwind - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/soft-ui-dashboard-pro-tailwind
* Copyright 2024 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (site.license)

* Coded by www.creative-tim.com

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
var page_path = window.location.pathname.split('/'),
    current_page = page_path.pop(),
    parent_page = page_path.pop(),
    root_page = page_path.pop(),
    root = page_path.pop();
if ('documentation.html' == current_page) var to_build = '../';
else if ('index.html' == current_page || '' == current_page) var to_build = './';
else if ('pages' == root) var to_build = '../../../';
else var to_build = '../../';
function loadStylesheet(b) {
    let a = document.createElement('link');
    a.setAttribute('href', b),
        a.setAttribute('type', 'text/css'),
        a.setAttribute('rel', 'stylesheet'),
        document.head.appendChild(a);
}
function loadJS(b, c) {
    let a = document.createElement('script');
    a.setAttribute('src', b),
        a.setAttribute('type', 'text/javascript'),
        a.setAttribute('async', c),
        document.head.appendChild(a);
}
loadStylesheet(to_build + 'assets/css/perfect-scrollbar.css'),
    loadJS(to_build + 'assets/js/perfect-scrollbar.js', !0),
    document.querySelector('canvas') && loadJS(to_build + 'assets/js/charts.js', !1),
    document.querySelector('[data-toggle="widget-calendar"]') &&
        (loadStylesheet(to_build + 'assets/css/full-calendar.css'),
        loadJS(to_build + 'assets/js/full-calendar.js', !1)),
    document.querySelector('[data-toggle="calendar"]') &&
        (loadStylesheet(to_build + 'assets/css/full-calendar.css'),
        loadJS(to_build + 'assets/js/full-calendar.js', !1)),
    document.querySelector('#globe') && loadJS(to_build + 'assets/js/globe.js', !1),
    document.querySelector("[data-target='tooltip_trigger']") &&
        (loadJS(to_build + 'assets/js/tooltips.js', !0),
        loadStylesheet(to_build + 'assets/css/tooltips.css')),
    document.querySelector('#sliderRegular') &&
        (loadStylesheet(to_build + 'assets/css/noui-slider.css'),
        loadJS(to_build + 'assets/js/slider.js', !0)),
    document.querySelector('[choice]') &&
        (loadStylesheet(to_build + 'assets/css/choices.css'),
        loadJS(to_build + 'assets/js/choices.js', !0)),
    document.querySelector('#mapid.leaflet') &&
        (loadStylesheet(to_build + 'assets/css/leaflet.css'),
        loadJS(to_build + 'assets/js/map.js', !0)),
    document.querySelector('[countTo]') && loadJS(to_build + 'assets/js/count-to.js', !0),
    document.querySelector('[nav-pills]') &&
        (document.querySelector("[nav-pills][aria-controls='camera-gallery']") &&
            loadJS(to_build + 'assets/js/pills-gallery.js', !0),
        document.querySelector("[nav-pills][aria-controls='pricing-plans']") &&
            loadJS(to_build + 'assets/js/pills-pricing.js', !0),
        loadJS(to_build + 'assets/js/nav-pills.js', !0)),
    document.querySelector('[fixed-plugin]') && loadJS(to_build + 'assets/js/fixed-plugin.js', !0),
    document.querySelector('aside') &&
        (loadJS(to_build + 'assets/js/sidenav.js', !0),
        loadJS(to_build + 'assets/js/sidenav-burger.js', !0)),
    document.querySelector('[dropdown-trigger]') && loadJS(to_build + 'assets/js/dropdown.js', !0),
    document.querySelector('[navbar-main]') && loadJS(to_build + 'assets/js/navbar-sticky.js', !0),
    document.querySelector('.github-button') && loadJS('https://buttons.github.io/buttons.js', !0),
    document.querySelector('[multisteps-form]') &&
        loadJS(to_build + 'assets/js/multisteps-form.js', !0),
    document.querySelector('[profile-visibility-toggle]') &&
        loadJS(to_build + 'assets/js/toggle.js', !0),
    document.querySelector('[editor-quill]') &&
        (loadStylesheet(to_build + 'assets/css/editor-quill.css'),
        loadJS(to_build + 'assets/js/editor-quill.js', !0)),
    document.querySelector('[datetimepicker]') &&
        (loadStylesheet(to_build + 'assets/css/flatpickr.css'),
        loadJS(to_build + 'assets/js/flatpickr.js', !0)),
    document.querySelector('[dropzone]') &&
        (loadStylesheet(to_build + 'assets/css/dropzone.css'),
        loadJS(to_build + 'assets/js/dropzone.js', !0)),
    document.querySelector('[notification]') && loadJS(to_build + 'assets/js/notify.js', !0),
    document.querySelector('[alert]') && loadJS(to_build + 'assets/js/alert.js', !0),
    document.querySelector('[toast]') && loadJS(to_build + 'assets/js/toast.js', !0),
    document.querySelector('[accordion]') && loadJS(to_build + 'assets/js/accordion.js', !0),
    document.querySelector('[nav-nested-menu]') &&
        loadJS(to_build + 'assets/js/navbar-dropdown.js', !0),
    document.querySelector('[nav-collapse-trigger]') &&
        loadJS(to_build + 'assets/js/navbar-collapse.js', !0),
    document.querySelector('#myKanban') &&
        (loadJS(to_build + 'assets/js/kanban.js', !0),
        loadStylesheet(to_build + 'assets/css/kanban.css')),
    document.querySelector('[checkbox-color-label]') &&
        loadJS(to_build + 'assets/js/label-color.js', !0),
    document.querySelector("[data-toggle='modal']") && loadJS(to_build + 'assets/js/modal.js', !0),
    document.querySelector('[datatable]') &&
        (loadStylesheet(to_build + 'assets/css/datatable.css'),
        loadJS(to_build + 'assets/js/datatable.js', !0)),
    document.querySelector("[onclick^='soft.showSwal']") &&
        (loadJS(to_build + 'assets/js/sweet-alerts.js', !0),
        loadStylesheet(to_build + 'assets/css/sweet-alerts.css')),
    document.querySelector('[photo-swipe-gallery]') &&
        (loadJS(to_build + 'assets/js/photo-swipe.js', !0),
        loadStylesheet(to_build + 'assets/css/photo-swipe.css'));
