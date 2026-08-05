jQuery(document).ready(function ($) {

(function () {

    function initViewportObserver() {
        const elements = document.querySelectorAll('.js-viewport-checker');

        if (!elements.length) return;

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('checker-visible');
                    entry.target.classList.remove('invisible');
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.15,
            rootMargin: '0px 0px -8% 0px'
        });

        elements.forEach(el => observer.observe(el));
    }

    function playBlockVideos(root) {
        const scope = root && root.querySelectorAll ? root : document;
        const videos = scope.querySelectorAll('.acf-block-preview video.js-block-video, .acf-block-preview .about__video video, .acf-block-preview .banner__video video');

        videos.forEach((video) => {
            if (video.dataset.blockVideoBound === '1') {
                if (video.paused) {
                    video.play().catch(function () {});
                }
                return;
            }

            video.dataset.blockVideoBound = '1';
            video.muted = true;
            video.playsInline = true;
            video.setAttribute('muted', '');
            video.setAttribute('playsinline', '');

            const tryPlay = function () {
                video.play().catch(function () {});
            };

            if (video.readyState >= 2) {
                tryPlay();
            } else {
                video.addEventListener('loadeddata', tryPlay, { once: true });
                video.load();
            }
        });
    }

    function initBlockPreviewMedia() {
        initViewportObserver();
        playBlockVideos(document);
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initBlockPreviewMedia);
    } else {
        initBlockPreviewMedia();
    }

    // Re-run after ACF/Gutenberg re-renders block previews
    if (window.wp && wp.data) {
        let scheduled = false;
        wp.data.subscribe(() => {
            if (scheduled) return;
            scheduled = true;
            requestAnimationFrame(() => {
                scheduled = false;
                initBlockPreviewMedia();
            });
        });
    }

    if (window.MutationObserver) {
        const mo = new MutationObserver((mutations) => {
            for (const mutation of mutations) {
                if (!mutation.addedNodes || !mutation.addedNodes.length) continue;
                mutation.addedNodes.forEach((node) => {
                    if (node.nodeType !== 1) return;
                    if (node.matches && (node.matches('video') || node.querySelector('video'))) {
                        playBlockVideos(node);
                    }
                });
            }
        });
        mo.observe(document.body, { childList: true, subtree: true });
    }

})();
});
