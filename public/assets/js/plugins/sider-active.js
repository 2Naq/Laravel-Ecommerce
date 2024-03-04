// 'use strict';
// const navLinks = document.querySelectorAll('a');
// const activeLinkIndex = localStorage.getItem('activeLinkIndex');
// function applyActiveStyles(activeLink) {
//     const divElement = activeLink.querySelector('div');
//     const iconElement = activeLink.querySelector('i');
//     if (iconElement) iconElement.classList.add('text-white');
//     if (divElement) divElement.classList.add('icon-active');
//     activeLink.classList.add('active');
// }

// if (activeLinkIndex !== null) {
//     const activeLink = navLinks[activeLinkIndex];
//     applyActiveStyles(activeLink);
// }

// window.onload = () => {
//     navLinks.forEach((navLink, index) => {
//         navLink.addEventListener('click', (event) => {
//             // Xóa class 'active' từ tất cả link
//             navLinks.forEach((link) => {
//                 link.classList.remove('active');
//                 const divElement = link.querySelector('div');
//                 const iconElement = link.querySelector('i');
//                 if (divElement) divElement.classList.remove('icon-active');
//                 if (iconElement) iconElement.classList.remove('text-white');
//             });

//             // Áp dụng style cho link được click
//             event.currentTarget.classList.add('active');
//             const divElement = event.currentTarget.querySelector('div');
//             const iconElement = event.currentTarget.querySelector('i');

//             if (divElement) divElement.classList.add('icon-active');
//             if (iconElement) iconElement.classList.add('text-white');

//             localStorage.setItem('activeLinkIndex', index); // Lưu chỉ mục link đang hoạt động
//         });
//     });
// };
