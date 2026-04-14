/* ============================================
   notice.js
   만개의 레시피 — 공지사항 페이지 스크립트
============================================ */

var ITEMS_PER_PAGE = 15;
var currentPage    = 1;

/* ── 공지사항 데이터 ── */
var NOTICE_DATA = [
    /* 상단 고정 공지 (type: 'notice') */
    { id: 'n1', type: 'notice', title: '[안내] 셀프 교환 서비스 도입 안내 (2026.03.10~)',          date: '2026.03.09' },
    { id: 'n2', type: 'notice', title: '[안내] 3월 은행/카드/기관 시스템 점검 일정 안내',            date: '2026.02.23' },
    { id: 'n3', type: 'notice', title: '[안내] 만개의 레시피 소비자 분쟁해결 기준 안내',             date: '2022.07.27' },
    /* 일반 공지 */
    { id: 33, type: 'normal', title: '[이벤트] 4/9(목) 봄나물 레시피 공모전 당첨자 안내',         date: '2026.04.10' },
    { id: 32, type: 'normal', title: '[이벤트] 4/8(수) 제철 봄나물 레시피 챌린지 당첨자 안내',    date: '2026.04.08' },
    { id: 31, type: 'normal', title: '[이벤트] 4/7(화) 한식 레시피 경연 이벤트 당첨자 안내',      date: '2026.04.08' },
    { id: 30, type: 'normal', title: '[공지] 만개의 레시피 4월 업데이트 안내',                    date: '2026.04.05' },
    { id: 29, type: 'normal', title: '[이벤트] 4/4(토) 주말 요리 챌린지 당첨자 안내',             date: '2026.04.04' },
    { id: 28, type: 'normal', title: '[안내] 레시피 등록 정책 변경 안내',                         date: '2026.04.02' },
    { id: 27, type: 'normal', title: '[이벤트] 3/31(화) 봄맞이 레시피 이벤트 당첨자 안내',        date: '2026.03.31' },
    { id: 26, type: 'normal', title: '[공지] 서비스 점검 안내 (4/1 새벽 2시~4시)',                date: '2026.03.30' },
    { id: 25, type: 'normal', title: '[이벤트] 3/28(토) 주말 특선 레시피 당첨자 안내',            date: '2026.03.28' },
    { id: 24, type: 'normal', title: '[안내] 개인정보 처리방침 개정 안내',                        date: '2026.03.25' },
    { id: 23, type: 'normal', title: '[이벤트] 3/24(화) 냉이달래 봄나물 레시피 당첨자 안내',      date: '2026.03.24' },
    { id: 22, type: 'normal', title: '[공지] 3월 정기 업데이트 안내',                            date: '2026.03.20' },
    { id: 21, type: 'normal', title: '[이벤트] 3/18(수) 된장찌개 레시피 이벤트 당첨자 안내',      date: '2026.03.18' },
    { id: 20, type: 'normal', title: '[안내] 레시피 검색 기능 개선 안내',                         date: '2026.03.15' },
    { id: 19, type: 'normal', title: '[이벤트] 3/13(금) 주말 특선 레시피 당첨자 안내',            date: '2026.03.13' },
    { id: 18, type: 'normal', title: '[공지] 2월 서비스 점검 안내 (3/1 새벽 1시~3시)',            date: '2026.03.01' },
    { id: 17, type: 'normal', title: '[이벤트] 2/26(목) 명절 레시피 이벤트 당첨자 안내',          date: '2026.02.26' },
    { id: 16, type: 'normal', title: '[안내] 회원 포인트 정책 변경 안내',                         date: '2026.02.20' },
    { id: 15, type: 'normal', title: '[이벤트] 2/17(화) 설날 음식 레시피 이벤트 당첨자 안내',     date: '2026.02.17' },
    { id: 14, type: 'normal', title: '[공지] 2월 업데이트 안내',                                 date: '2026.02.10' },
    { id: 13, type: 'normal', title: '[이벤트] 2/6(금) 겨울 별미 레시피 당첨자 안내',             date: '2026.02.06' },
    { id: 12, type: 'normal', title: '[안내] 스크랩 기능 개선 안내',                              date: '2026.02.03' },
    { id: 11, type: 'normal', title: '[이벤트] 1/29(목) 한파 대비 보양식 레시피 당첨자 안내',     date: '2026.01.29' },
    { id: 10, type: 'normal', title: '[공지] 1월 서비스 점검 안내',                              date: '2026.01.20' },
    { id: 9, type: 'normal', title: '[이벤트] 1/15(목) 새해 레시피 이벤트 당첨자 안내',          date: '2026.01.15' },
    { id: 8, type: 'normal', title: '[안내] 2026년 새해 인사',                                  date: '2026.01.01' },
    { id: 7, type: 'normal', title: '[이벤트] 12/24(수) 크리스마스 요리 이벤트 당첨자 안내',     date: '2025.12.24' },
    { id: 6, type: 'normal', title: '[공지] 12월 업데이트 안내',                                date: '2025.12.10' },
    { id: 5, type: 'normal', title: '[이벤트] 11/27(목) 김장 레시피 이벤트 당첨자 안내',         date: '2025.11.27' },
    { id: 4, type: 'normal', title: '[안내] 레시피 사진 업로드 용량 확대 안내',                  date: '2025.11.15' },
    { id: 3, type: 'normal', title: '[이벤트] 11/10(월) 가을 제철 레시피 당첨자 안내',           date: '2025.11.10' },
    { id: 2, type: 'normal', title: '[공지] 11월 서비스 점검 안내',                             date: '2025.11.01' },
    { id: 1, type: 'normal', title: '[이벤트] 10/29(수) 핼러윈 요리 이벤트 당첨자 안내',         date: '2025.10.29' }
];

/* 고정 공지와 일반 공지 분리 */
var PINNED  = NOTICE_DATA.filter(function(n) { return n.type === 'notice'; });
var NORMAL  = NOTICE_DATA.filter(function(n) { return n.type === 'normal'; });
var TOTAL_PAGES = Math.ceil(NORMAL.length / ITEMS_PER_PAGE);

/* ── 리스트 렌더링 ── */
function renderNoticeList(page) {
    var body = document.getElementById('notice-list-body');
    if (!body) return;

    var html = '';

    /* 1페이지에만 고정 공지 표시 */
    if (page === 1) {
        PINNED.forEach(function(item) {
            html += '<a href="#none" class="notice-row">';
            html += '<div class="notice-row__num-wrap"><span class="notice-badge">공지</span></div>';
            html += '<span class="notice-row__title">' + item.title + '</span>';
            html += '<span class="notice-row__date">' + item.date + '</span>';
            html += '</a>';
        });
    }

    /* 일반 공지 */
    var start = (page - 1) * ITEMS_PER_PAGE;
    var end   = start + ITEMS_PER_PAGE;
    var items = NORMAL.slice(start, end);

    items.forEach(function(item) {
        html += '<a href="#none" class="notice-row">';
        html += '<div class="notice-row__num-wrap"><span class="notice-num-text">' + item.id + '</span></div>';
        html += '<span class="notice-row__title">' + item.title + '</span>';
        html += '<span class="notice-row__date">' + item.date + '</span>';
        html += '</a>';
    });

    body.innerHTML = html;
}

/* ── 페이지네이션 렌더링 ── */
function renderPagination(page) {
    var container = document.getElementById('notice-pagination');
    if (!container) return;

    var arrowLeft  = '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7"/></svg>';
    var arrowRight = '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7"/></svg>';

    var html = '';
    html += '<button class="notice-pg-btn' + (page === 1 ? ' is-disabled' : '') + '" id="pg-prev">' + arrowLeft + '</button>';

    for (var i = 1; i <= TOTAL_PAGES; i++) {
        html += '<button class="notice-pg-btn' + (i === page ? ' is-active' : '') + '" data-page="' + i + '">' + i + '</button>';
    }

    html += '<button class="notice-pg-btn' + (page === TOTAL_PAGES ? ' is-disabled' : '') + '" id="pg-next">' + arrowRight + '</button>';

    container.innerHTML = html;

    container.querySelectorAll('[data-page]').forEach(function(btn) {
        btn.addEventListener('click', function() {
            goToPage(parseInt(btn.dataset.page, 10));
        });
    });

    var prevBtn = document.getElementById('pg-prev');
    var nextBtn = document.getElementById('pg-next');

    if (prevBtn) {
        prevBtn.addEventListener('click', function() {
            if (currentPage > 1) goToPage(currentPage - 1);
        });
    }
    if (nextBtn) {
        nextBtn.addEventListener('click', function() {
            if (currentPage < TOTAL_PAGES) goToPage(currentPage + 1);
        });
    }
}

/* ── 페이지 이동 ── */
function goToPage(page) {
    currentPage = page;
    renderNoticeList(page);
    renderPagination(page);
    history.pushState({ page: page }, '', '?page=' + page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

/* ── 초기화 ── */
document.addEventListener('DOMContentLoaded', function() {
    var params   = new URLSearchParams(window.location.search);
    var initPage = parseInt(params.get('page'), 10) || 1;

    currentPage = initPage;
    renderNoticeList(initPage);
    renderPagination(initPage);

    if (initPage === 1) {
        history.replaceState({ page: 1 }, '', '?page=1');
    }

    /* 뒤로가기 대응 */
    window.addEventListener('popstate', function(e) {
        var page = (e.state && e.state.page) ? e.state.page : 1;
        currentPage = page;
        renderNoticeList(page);
        renderPagination(page);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});
