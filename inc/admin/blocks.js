jQuery(document).ready(function ($) {

    console.log("HELLOO");
(function () {

    function initViewportObserver() {

        const elements = document.querySelectorAll('.js-viewport-checker');

        if (!elements.length) return;

        const observer = new IntersectionObserver((entries, observer) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add('checker-visible');
                    entry.target.classList.remove('invisible');

                    observer.unobserve(entry.target); // repeat: false
                }
            });

        }, {
            threshold: 0.15, // 15% visible
            rootMargin: '0px 0px -8% 0px'
        });

        elements.forEach(el => observer.observe(el));
    }

    // DOM ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initViewportObserver);
    } else {
        initViewportObserver();
    }

    // Gutenberg support (re-render blocks)
    if (window.wp && wp.data) {
        wp.data.subscribe(() => {
            initViewportObserver();
        });
    }

})();
});

// jQuery(document).ready(function ($) {
//     // назви функцій які викликаються 
// });
