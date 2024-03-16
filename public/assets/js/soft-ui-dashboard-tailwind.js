/*!

=========================================================
* Soft UI Dashboard Tailwind - v1.0.5
=========================================================

* Product Page: https://www.creative-tim.com/product/soft-ui-dashboard-tailwind
* Copyright 2023 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (site.license)

* Coded by www.creative-tim.com

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
var page = window.location.pathname.split('/').pop().split('.')[0];
var aux = window.location.pathname.split('/');
var to_build = aux.includes('pages') ? '../' : './';
var root = window.location.pathname.split('/');
if (!aux.includes('pages')) {
    page = 'dashboard';
}

function loadResource(resourceUrl, type) {
    var dynamicResource =
        type === 'css' ? document.createElement('link') : document.createElement('script');

    if (type === 'css') {
        dynamicResource.setAttribute('href', resourceUrl);
        dynamicResource.setAttribute('type', 'text/css');
        dynamicResource.setAttribute('rel', 'stylesheet');
    } else {
        dynamicResource.setAttribute('src', resourceUrl);
        dynamicResource.setAttribute('type', 'text/javascript');
        dynamicResource.setAttribute('async', true);
    }

    document.head.appendChild(dynamicResource);
}

loadResource(to_build + 'assets/css/perfect-scrollbar.css', 'css');
loadResource(to_build + 'assets/js/perfect-scrollbar.js', 'js');

document.querySelector('[choice]') && loadResource(to_build + 'assets/js/choices.js', 'js');
// loadResource(to_build + 'assets/css/choices.css', 'css')

document.querySelector('.select-icon') &&
    loadResource(to_build + 'assets/js/plugins/select-option.js', 'js');

document.querySelector('nav [navbar-trigger]') &&
    loadResource(to_build + 'assets/js/navbar-collapse.js', 'js');

document.querySelector("[data-target='tooltip']") &&
    (loadResource(to_build + 'assets/js/tooltips.js', 'js'),
    loadResource(to_build + 'assets/css/tooltips.css', 'css'));

document.querySelector('[nav-pills]') && loadResource(to_build + 'assets/js/nav-pills.js', 'js');

document.querySelector('[dropdown-trigger]') &&
    loadResource(to_build + 'assets/js/dropdown.js', 'js');

document.querySelector('[fixed-plugin]') &&
    loadResource(to_build + 'assets/js/fixed-plugin.js', 'js');

document.querySelector('[navbar-main]') &&
    (loadResource(to_build + 'assets/js/sidenav-burger.js', 'js'),
    loadResource(to_build + 'assets/js/navbar-sticky.js', 'js'));

document.querySelector('canvas') &&
    loadResource(to_build + 'assets/js/chart-1.js', 'js') &&
    loadResource(to_build + 'assets/js/chart-2.js', 'js');
