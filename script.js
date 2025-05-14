// script.js

document.addEventListener('DOMContentLoaded', function() {

    // --- Cập nhật năm hiện tại ở footer ---
    const currentYearElement = document.getElementById('currentYear');
    if (currentYearElement) {
        currentYearElement.textContent = new Date().getFullYear();
    }

    // --- Xử lý gửi form liên hệ ---
    const contactForm = document.getElementById('contactForm');
    const formMessageElement = document.getElementById('formMessage');

    if (contactForm && formMessageElement) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            if (name.trim() === '' || email.trim() === '' || message.trim() === '') {
                formMessageElement.textContent = 'Vui lòng điền đầy đủ các trường bắt buộc.';
                formMessageElement.className = 'mt-4 text-center text-red-600 p-3 bg-red-100 rounded-md shadow';
                return;
            }

            formMessageElement.textContent = `Cảm ơn, ${name}! Lời nhắn của bạn đã được gửi. Chúng tôi sẽ phản hồi sớm.`;
            formMessageElement.className = 'mt-4 text-center text-green-600 p-3 bg-green-100 rounded-md shadow';
            contactForm.reset();
        });
    }

    // --- Hiệu ứng cuộn mượt cho các liên kết điều hướng ---
    const navLinks = document.querySelectorAll('nav a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                // Tính toán vị trí header để offset khi cuộn
                const headerOffset = document.querySelector('header').offsetHeight;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });

                // Đóng menu mobile sau khi click (nếu đang mở)
                const mainNav = document.getElementById('mainNav'); 
                if (mainNav.classList.contains('flex') && !mainNav.classList.contains('md:flex')) {
                     mainNav.classList.add('hidden');
                }
            }
        });
    });

    // --- Nút Back to Top ---
    const backToTopButton = document.getElementById('backToTopButton');
    if (backToTopButton) {
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 300) { // Hiển thị nút sau khi cuộn xuống 300px
                backToTopButton.classList.remove('hidden');
            } else {
                backToTopButton.classList.add('hidden');
            }
        });

        backToTopButton.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // --- Xử lý Menu Mobile ---
    const mobileMenuButton = document.getElementById('mobileMenuButton');
    const mainNav = document.getElementById('mainNav'); 

    if (mobileMenuButton && mainNav) {
        mobileMenuButton.addEventListener('click', function() {
            mainNav.classList.toggle('hidden'); 
        });
    }

    console.log("Trang web giới thiệu trường học đã tải xong!");
});
