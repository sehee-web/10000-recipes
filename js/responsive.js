/* ============================================
   responsive.js
   만개의 레시피 — 반응형 인터랙션
============================================ */

document.addEventListener('DOMContentLoaded', function () {

    var hamburgerBtn    = document.getElementById('hamburger-btn');
    var drawerOverlay   = document.getElementById('drawer-overlay');
    var gnb             = document.querySelector('.gnb');
    var mobileSearchBtn = document.getElementById('mobile-search-btn');
    var searchBoxMobile = document.querySelector('.search-box--mobile');
    var ctgToggle       = document.querySelector('.ctg_toggle');
    var ctgPanel        = document.querySelector('.ctg_panel');
    var commToggle      = document.querySelector('.comm_toggle');
    var commPanel       = document.querySelector('.comm_panel');

    /* ── GNB 드로어 ── */
    function openDrawer() {
        if (!gnb) return;
        gnb.classList.add('is-open');
        if (drawerOverlay) drawerOverlay.classList.add('is-open');
        if (hamburgerBtn) hamburgerBtn.setAttribute('aria-expanded', 'true');
        document.body.style.overflow = 'hidden';
    }

    function closeDrawer() {
        if (!gnb) return;
        gnb.classList.remove('is-open');
        if (drawerOverlay) drawerOverlay.classList.remove('is-open');
        if (hamburgerBtn) hamburgerBtn.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
    }

    if (hamburgerBtn) {
        hamburgerBtn.addEventListener('click', function () {
            gnb && gnb.classList.contains('is-open') ? closeDrawer() : openDrawer();
        });
    }

    if (drawerOverlay) {
        drawerOverlay.addEventListener('click', closeDrawer);
    }

    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') closeDrawer();
    });

    /* ── 모바일 검색 토글 ── */
    if (mobileSearchBtn && searchBoxMobile) {
        mobileSearchBtn.addEventListener('click', function () {
            var isOpen = searchBoxMobile.classList.toggle('is-open');
            if (isOpen) {
                var input = searchBoxMobile.querySelector('input');
                if (input) input.focus();
            }
        });
    }

    /* ── 드로어 내 카테고리 아코디언 ── */
    if (ctgToggle && ctgPanel) {
        ctgToggle.addEventListener('click', function (e) {
            if (window.innerWidth > 1024) return;
            e.preventDefault();
            ctgPanel.classList.toggle('is-open');
        });
    }

    /* ── 드로어 내 커뮤니티 아코디언 ── */
    if (commToggle && commPanel) {
        commToggle.addEventListener('click', function (e) {
            if (window.innerWidth > 1024) return;
            e.preventDefault();
            commPanel.classList.toggle('is-open');
        });
    }

    /* ── 리사이즈 대응 ── */
    window.addEventListener('resize', function () {
        if (window.innerWidth > 1024) {
            closeDrawer();
            if (searchBoxMobile) searchBoxMobile.classList.remove('is-open');
        }
    });
});
