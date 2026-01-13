// Simple TikTok Trending Badge Script
(function ($) {
    "use strict";

    $(document).ready(function () {
        // Initialize Trending badges for TikTok items
        function initTrendingBadges() {
            const tiktokItems = document.querySelectorAll('[data-tiktok-url]');
            
            tiktokItems.forEach(item => {
                const badge = item.querySelector('.tiktok-views-badge .view-count');
                if (badge) {
                    badge.textContent = 'Trending';
                }
            });
        }

        // Run on page load
        initTrendingBadges();
    });

})(window.jQuery);
