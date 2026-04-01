/* ============================================
   chef.js
   만개의 레시피 — 셰프 페이지 스크립트
============================================ */

/* ── 기본 프로필 SVG ── */
var DEFAULT_AVATAR_SVG = '<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="64" height="64" fill="#BDBDBD"/><circle cx="32" cy="24" r="12" fill="#E0E0E0"/><ellipse cx="32" cy="54" rx="22" ry="16" fill="#E0E0E0"/></svg>';
var DEFAULT_AVATAR_SVG_SM = '<svg viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="38" height="38" fill="#BDBDBD"/><circle cx="19" cy="14" r="7" fill="#E0E0E0"/><ellipse cx="19" cy="31" rx="13" ry="9" fill="#E0E0E0"/></svg>';

/* ── 구독자/레시피 아이콘 SVG ── */
var ICON_SUBSCRIBERS = '<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></svg>';
var ICON_RECIPES = '<img src= "images_10000_recipes/recipe_count_icon.png" alt="레시피수" width="18" height="18" style="vertical-align:middle;">';

/* ── 더미 데이터 (1~53위) ── */
var ALL_CHEFS = [
    { rank: 1,  name: '시크제이맘',      subscribers: 32403, recipes: 1711, views: '78.2M', img: 'images_10000_recipes/chef_images/chef_01.jpg', recipeThumbs: [
        'images_10000_recipes/recipe_card_img/noodle_01.png',
        'images_10000_recipes/recipe_card_img/noodle_02.png',
        'images_10000_recipes/recipe_card_img/noodle_03.png'
    ] },
    { rank: 2,  name: '조밍키♥',          subscribers: 21064, recipes: 249,  views: '31.6M', img: 'images_10000_recipes/chef_images/chef_02.jpg', recipeThumbs: [
        'images_10000_recipes/recipe_card_img/noodle_04.png',
        'images_10000_recipes/recipe_card_img/noodle_05.png',
        'images_10000_recipes/recipe_card_img/noodle_06.png'
    ]  },
    { rank: 3,  name: '김진옥요리가좋다', subscribers: 17788, recipes: 681,  views: '27.1M', img: 'images_10000_recipes/chef_images/chef_03.jpg', recipeThumbs: [
        'images_10000_recipes/recipe_card_img/noodle_07.png',
        'images_10000_recipes/recipe_card_img/noodle_08.png',
        'images_10000_recipes/recipe_card_img/noodle_09.png'
    ]  },
    { rank: 4,  name: '뽀밀이',          subscribers: 16340, recipes: 532,  views: '55.1M', img: '' },
    { rank: 5,  name: '뽀유TV',          subscribers: 15694, recipes: 357,  views: '26.3M', img: '' },
    { rank: 6,  name: '엘린84',          subscribers: 14981, recipes: 270,  views: '40.3M', img: '' },
    { rank: 7,  name: '만개의주방',       subscribers: 13205, recipes: 410,  views: '33.8M', img: '' },
    { rank: 8,  name: '집밥선생',         subscribers: 11872, recipes: 388,  views: '21.4M', img: '' },
    { rank: 9,  name: '오늘뭐먹지',       subscribers: 10540, recipes: 295,  views: '18.9M', img: '' },
    { rank: 10, name: '쉐프의비밀',       subscribers: 9830,  recipes: 224,  views: '15.2M', img: '' },
    { rank: 11, name: '냠냠쿡',          subscribers: 9210,  recipes: 318,  views: '14.7M', img: '' },
    { rank: 12, name: '요리연구가박선생', subscribers: 8950,  recipes: 502,  views: '13.1M', img: '' },
    { rank: 13, name: '건강밥상',         subscribers: 8430,  recipes: 276,  views: '12.5M', img: '' },
    { rank: 14, name: '한식마스터',       subscribers: 7980,  recipes: 341,  views: '11.8M', img: '' },
    { rank: 15, name: '집밥여왕',         subscribers: 7650,  recipes: 289,  views: '10.4M', img: '' },
    { rank: 16, name: '맛있는하루',       subscribers: 7200,  recipes: 215,  views: '9.8M',  img: '' },
    { rank: 17, name: '쿡방스타',         subscribers: 6980,  recipes: 198,  views: '9.1M',  img: '' },
    { rank: 18, name: '요리왕비룡',       subscribers: 6540,  recipes: 423,  views: '8.7M',  img: '' },
    { rank: 19, name: '초간단레시피',     subscribers: 6230,  recipes: 187,  views: '8.2M',  img: '' },
    { rank: 20, name: '다이어트쿡',       subscribers: 5980,  recipes: 244,  views: '7.9M',  img: '' },
    { rank: 21, name: '베이킹러버',       subscribers: 5710,  recipes: 312,  views: '7.4M',  img: '' },
    { rank: 22, name: '파스타장인',       subscribers: 5430,  recipes: 156,  views: '6.9M',  img: '' },
    { rank: 23, name: '전통한식',         subscribers: 5180,  recipes: 398,  views: '6.5M',  img: '' },
    { rank: 24, name: '채식주의자',       subscribers: 4920,  recipes: 267,  views: '6.1M',  img: '' },
    { rank: 25, name: '간편식달인',       subscribers: 4680,  recipes: 143,  views: '5.8M',  img: '' },
    { rank: 26, name: '국물요리왕',       subscribers: 4450,  recipes: 201,  views: '5.4M',  img: '' },
    { rank: 27, name: '브런치카페',       subscribers: 4210,  recipes: 178,  views: '5.1M',  img: '' },
    { rank: 28, name: '스트리트푸드',     subscribers: 3980,  recipes: 134,  views: '4.8M',  img: '' },
    { rank: 29, name: '영양사의부엌',     subscribers: 3760,  recipes: 289,  views: '4.5M',  img: '' },
    { rank: 30, name: '매운맛전문',       subscribers: 3540,  recipes: 167,  views: '4.2M',  img: '' },
    { rank: 31, name: '달콤한디저트',     subscribers: 3320,  recipes: 221,  views: '3.9M',  img: '' },
    { rank: 32, name: '글로벌쿡',         subscribers: 3110,  recipes: 198,  views: '3.7M',  img: '' },
    { rank: 33, name: '시골밥상',         subscribers: 2940,  recipes: 312,  views: '3.5M',  img: '' },
    { rank: 34, name: '오가닉키친',       subscribers: 2770,  recipes: 145,  views: '3.2M',  img: '' },
    { rank: 35, name: '퓨전요리사',       subscribers: 2600,  recipes: 189,  views: '3.0M',  img: '' },
    { rank: 36, name: '냉장고파먹기',     subscribers: 2440,  recipes: 234,  views: '2.8M',  img: '' },
    { rank: 37, name: '밥도둑레시피',     subscribers: 2280,  recipes: 176,  views: '2.6M',  img: '' },
    { rank: 38, name: '초보도가능',       subscribers: 2130,  recipes: 122,  views: '2.4M',  img: '' },
    { rank: 39, name: '여름별미',         subscribers: 1980,  recipes: 98,   views: '2.2M',  img: '' },
    { rank: 40, name: '겨울국물',         subscribers: 1840,  recipes: 145,  views: '2.0M',  img: '' },
    { rank: 41, name: '봄나물요리',       subscribers: 1700,  recipes: 167,  views: '1.9M',  img: '' },
    { rank: 42, name: '가을결실',         subscribers: 1570,  recipes: 134,  views: '1.7M',  img: '' },
    { rank: 43, name: '이탈리안셰프',     subscribers: 1450,  recipes: 112,  views: '1.6M',  img: '' },
    { rank: 44, name: '중식전문가',       subscribers: 1330,  recipes: 98,   views: '1.4M',  img: '' },
    { rank: 45, name: '일식장인',         subscribers: 1220,  recipes: 87,   views: '1.3M',  img: '' },
    { rank: 46, name: '태국요리',         subscribers: 1110,  recipes: 76,   views: '1.1M',  img: '' },
    { rank: 47, name: '인도카레',         subscribers: 1010,  recipes: 65,   views: '1.0M',  img: '' },
    { rank: 48, name: '멕시코타코',       subscribers: 920,   recipes: 54,   views: '0.9M',  img: '' },
    { rank: 49, name: '프랑스요리',       subscribers: 840,   recipes: 89,   views: '0.8M',  img: '' },
    { rank: 50, name: '스페인파에야',     subscribers: 760,   recipes: 43,   views: '0.7M',  img: '' },
    { rank: 51, name: '그리스요리',       subscribers: 690,   recipes: 67,   views: '0.6M',  img: '' },
    { rank: 52, name: '베트남쌀국수',     subscribers: 620,   recipes: 55,   views: '0.5M',  img: '' },
    { rank: 53, name: '터키케밥',         subscribers: 560,   recipes: 48,   views: '0.5M',  img: '' },
    { rank: 54,  name: '뚝딱한끼',        subscribers: 510,   recipes: 42,   views: '0.4M',  img: '' },
    { rank: 55,  name: '집밥요정',         subscribers: 470,   recipes: 38,   views: '0.4M',  img: '' },
    { rank: 56,  name: '오늘도냠냠',       subscribers: 430,   recipes: 35,   views: '0.3M',  img: '' },
    { rank: 57,  name: '밥한공기뚝딱',     subscribers: 400,   recipes: 31,   views: '0.3M',  img: '' },
    { rank: 58,  name: '냉장고탈출',       subscribers: 370,   recipes: 28,   views: '0.3M',  img: '' },
    { rank: 59,  name: '양념장인',         subscribers: 340,   recipes: 25,   views: '0.3M',  img: '' },
    { rank: 60,  name: '국물요정',         subscribers: 315,   recipes: 33,   views: '0.2M',  img: '' },
    { rank: 61,  name: '반찬요정',         subscribers: 290,   recipes: 29,   views: '0.2M',  img: '' },
    { rank: 62,  name: '찌개달인',         subscribers: 268,   recipes: 26,   views: '0.2M',  img: '' },
    { rank: 63,  name: '간장게장러버',     subscribers: 247,   recipes: 22,   views: '0.2M',  img: '' },
    { rank: 64,  name: '된장찌개마스터',   subscribers: 228,   recipes: 19,   views: '0.2M',  img: '' },
    { rank: 65,  name: '김치볶음밥왕',     subscribers: 210,   recipes: 17,   views: '0.2M',  img: '' },
    { rank: 66,  name: '제육볶음장인',     subscribers: 194,   recipes: 15,   views: '0.1M',  img: '' },
    { rank: 67,  name: '순두부찌개요정',   subscribers: 179,   recipes: 14,   views: '0.1M',  img: '' },
    { rank: 68,  name: '삼겹살조리사',     subscribers: 165,   recipes: 13,   views: '0.1M',  img: '' },
    { rank: 69,  name: '감자탕달인',       subscribers: 152,   recipes: 12,   views: '0.1M',  img: '' },
    { rank: 70,  name: '부대찌개러버',     subscribers: 140,   recipes: 11,   views: '0.1M',  img: '' },
    { rank: 71,  name: '닭볶음탕마스터',   subscribers: 129,   recipes: 10,   views: '0.1M',  img: '' },
    { rank: 72,  name: '갈비찜요정',       subscribers: 119,   recipes: 9,    views: '0.1M',  img: '' },
    { rank: 73,  name: '잡채달인',         subscribers: 110,   recipes: 8,    views: '0.1M',  img: '' },
    { rank: 74,  name: '비빔밥장인',       subscribers: 101,   recipes: 8,    views: '0.1M',  img: '' },
    { rank: 75,  name: '냉면마스터',       subscribers: 93,    recipes: 7,    views: '0.09M', img: '' },
    { rank: 76,  name: '칼국수요정',       subscribers: 86,    recipes: 7,    views: '0.08M', img: '' },
    { rank: 77,  name: '수제비달인',       subscribers: 79,    recipes: 6,    views: '0.07M', img: '' },
    { rank: 78,  name: '떡볶이장인',       subscribers: 73,    recipes: 6,    views: '0.07M', img: '' },
    { rank: 79,  name: '순대국마스터',     subscribers: 67,    recipes: 5,    views: '0.06M', img: '' },
    { rank: 80,  name: '설렁탕요정',       subscribers: 62,    recipes: 5,    views: '0.06M', img: '' },
    { rank: 81,  name: '삼계탕달인',       subscribers: 57,    recipes: 4,    views: '0.05M', img: '' },
    { rank: 82,  name: '육개장마스터',     subscribers: 53,    recipes: 4,    views: '0.05M', img: '' },
    { rank: 83,  name: '해장국장인',       subscribers: 49,    recipes: 4,    views: '0.05M', img: '' },
    { rank: 84,  name: '콩나물국요정',     subscribers: 45,    recipes: 3,    views: '0.04M', img: '' },
    { rank: 85,  name: '된장국달인',       subscribers: 42,    recipes: 3,    views: '0.04M', img: '' },
    { rank: 86,  name: '미역국마스터',     subscribers: 38,    recipes: 3,    views: '0.04M', img: '' },
    { rank: 87,  name: '계란국요정',       subscribers: 35,    recipes: 3,    views: '0.03M', img: '' },
    { rank: 88,  name: '닭개장달인',       subscribers: 32,    recipes: 2,    views: '0.03M', img: '' },
    { rank: 89,  name: '추어탕장인',       subscribers: 30,    recipes: 2,    views: '0.03M', img: '' },
    { rank: 90,  name: '도가니탕마스터',   subscribers: 27,    recipes: 2,    views: '0.03M', img: '' },
    { rank: 91,  name: '꼬리곰탕요정',     subscribers: 25,    recipes: 2,    views: '0.02M', img: '' },
    { rank: 92,  name: '사골국달인',       subscribers: 23,    recipes: 2,    views: '0.02M', img: '' },
    { rank: 93,  name: '오이소박이장인',   subscribers: 21,    recipes: 2,    views: '0.02M', img: '' },
    { rank: 94,  name: '깍두기마스터',     subscribers: 19,    recipes: 1,    views: '0.02M', img: '' },
    { rank: 95,  name: '열무김치요정',     subscribers: 18,    recipes: 1,    views: '0.02M', img: '' },
    { rank: 96,  name: '총각김치달인',     subscribers: 16,    recipes: 1,    views: '0.01M', img: '' },
    { rank: 97,  name: '파김치장인',       subscribers: 15,    recipes: 1,    views: '0.01M', img: '' },
    { rank: 98,  name: '보쌈마스터',       subscribers: 14,    recipes: 1,    views: '0.01M', img: '' },
    { rank: 99,  name: '족발요정',         subscribers: 13,    recipes: 1,    views: '0.01M', img: '' },
    { rank: 100, name: '편육달인',         subscribers: 12,    recipes: 1,    views: '0.01M', img: '' },

];

var TOP3    = ALL_CHEFS.slice(0, 3);
var LIST    = ALL_CHEFS;               /* 전체 — 1페이지 리스트는 4위부터 슬라이싱 */

var ITEMS_PER_PAGE = 50;
var TOTAL_PAGES    = 2;
var currentPage    = 1;

/* ── 숫자 포맷 ── */
function fmtNum(n) {
    return n.toLocaleString('ko-KR');
}

/* ── 기본 프로필 아바타 HTML ── */
function avatarHtml(imgSrc, size) {
    if (imgSrc) {
        return '<img src="' + imgSrc + '" alt="프로필">';
    }
    return size === 'sm' ? DEFAULT_AVATAR_SVG_SM : DEFAULT_AVATAR_SVG;
}

/* ── TOP3 렌더링 ── */
function renderTop3() {
    var container = document.getElementById('chef-top3-grid');
    if (!container) return;

    var rankClass = ['r1', 'r2', 'r3'];
    var html = '';

    TOP3.forEach(function(chef, i) {
        html += '<div class="chef-top-card">';
        html += '<div class="chef-top-card__head">';
        html += '<div class="chef-rank-badge ' + rankClass[i] + '">' + chef.rank + '</div>';
        html += '<div class="chef-avatar">' + avatarHtml(chef.img, 'lg') + '</div>';
        html += '<p class="chef-name">' + chef.name + '</p>';
        html += '<div class="chef-stats">';

        /* 구독자수 */
        html += '<span class="chef-stat">';
        html += '<span class="chef-tooltip">구독자수</span>';
        html += ICON_SUBSCRIBERS;
        html += fmtNum(chef.subscribers);
        html += '</span>';

        /* 레시피수 */
        html += '<span class="chef-stat">';
        html += '<span class="chef-tooltip">레시피수</span>';
        html += ICON_RECIPES;
        html += fmtNum(chef.recipes);
        html += '</span>';

        html += '</div>';
        html += '</div>';

        /* 레시피 썸네일 3개 */
        html += '<div class="chef-recipe-thumbs">';
        for (var t = 0; t < 3; t++) {
            html += '<div class="chef-recipe-thumb">';
        if (chef.recipeThumbs && chef.recipeThumbs[t]) {
            html += '<img src="' + chef.recipeThumbs[t] + '" alt="레시피 썸네일">';
        } else {
            html += '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#bbb" stroke-width="1.5"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="M21 15l-5-5L5 21"/></svg>';
        }
        html += '</div>';
        }
        html += '</div>';

        /* 구독 버튼 */
        html += '<button class="chef-sub-btn" data-rank="' + chef.rank + '">구독하기</button>';
        html += '</div>';
    });

    container.innerHTML = html;
}

/* ── 리스트 렌더링 (페이지네이션 적용) ── */
function renderList(page) {
    var body = document.getElementById('chef-list-body');
    if (!body) return;

    /* 1페이지: index 3~49 (4위~50위), 2페이지~: index 50~99 (51위~100위) */
    var start, end;
    if (page === 1) {
        start = 3;
        end   = 50;
    } else {
        start = 50 + (page - 2) * ITEMS_PER_PAGE;
        end   = start + ITEMS_PER_PAGE;
    }
    var items = LIST.slice(start, end);

    var html = '';
    items.forEach(function(chef) {
        html += '<div class="chef-list-row">';
        html += '<span class="chef-list-rank">' + chef.rank + '</span>';
        html += '<div class="chef-list-chef">';
        html += '<div class="chef-list-avatar">' + avatarHtml(chef.img, 'sm') + '</div>';
        html += '<span class="chef-list-name">' + chef.name + '</span>';
        html += '</div>';
        html += '<span class="chef-list-val">' + fmtNum(chef.recipes) + '</span>';
        html += '<span class="chef-list-val">' + chef.views + '</span>';
        html += '<span class="chef-list-val">' + fmtNum(chef.subscribers) + '</span>';
        html += '<div style="text-align:center"><button class="chef-list-sub-btn" data-rank="' + chef.rank + '">구독하기</button></div>';
        html += '</div>';
    });

    body.innerHTML = html;
}

/* ── 페이지네이션 렌더링 ── */
function renderPagination(page) {
    var container = document.getElementById('chef-pagination');
    if (!container) return;

    var arrowSvgLeft  = '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7"/></svg>';
    var arrowSvgRight = '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7"/></svg>';

    var html = '';
    html += '<button class="chef-pg-btn' + (page === 1 ? ' is-disabled' : '') + '" id="pg-prev">' + arrowSvgLeft + '</button>';

    for (var i = 1; i <= TOTAL_PAGES; i++) {
        html += '<button class="chef-pg-btn' + (i === page ? ' is-active' : '') + '" data-page="' + i + '">' + i + '</button>';
    }

    html += '<button class="chef-pg-btn' + (page === TOTAL_PAGES ? ' is-disabled' : '') + '" id="pg-next">' + arrowSvgRight + '</button>';

    container.innerHTML = html;

    /* 페이지 번호 클릭 */
    container.querySelectorAll('[data-page]').forEach(function(btn) {
        btn.addEventListener('click', function() {
            goToPage(parseInt(btn.dataset.page, 10));
        });
    });

    /* 이전/다음 클릭 */
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
    renderList(page);
    renderPagination(page);
    var top3Grid   = document.getElementById('chef-top3-grid');
    var top3Header = document.querySelector('.chef-top3-header');
    var isFirst    = page === 1;
    if (top3Grid)   top3Grid.style.display   = isFirst ? '' : 'none';
    if (top3Header) top3Header.style.display = isFirst ? '' : 'none';

    // 히스토리에 현재 페이지 상태 저장
    history.pushState({ page: page }, '', '?page=' + page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

/* ── 구독 버튼 이벤트 위임 ── */
function bindSubButtons() {
    /* TOP3 */
    var top3Grid = document.getElementById('chef-top3-grid');
    if (top3Grid) {
        top3Grid.addEventListener('click', function(e) {
            var btn = e.target.closest('.chef-sub-btn');
            if (!btn) return;
            btn.classList.toggle('is-subbed');
            btn.textContent = btn.classList.contains('is-subbed') ? '구독중' : '구독하기';
        });
    }

    /* 리스트 (동적 렌더링이므로 상위 위임) */
    var listBody = document.getElementById('chef-list-body');
    if (listBody) {
        listBody.addEventListener('click', function(e) {
            var btn = e.target.closest('.chef-list-sub-btn');
            if (!btn) return;
            btn.classList.toggle('is-subbed');
            btn.textContent = btn.classList.contains('is-subbed') ? '구독중' : '구독하기';
        });
    }
}

/* ── 탭 이벤트 ── */
function bindTabs() {
    document.querySelectorAll('.chef-tab').forEach(function(tab) {
        tab.addEventListener('click', function() {
            document.querySelectorAll('.chef-tab').forEach(function(t) {
                t.classList.remove('is-active');
            });
            tab.classList.add('is-active');
            /* 탭별 콘텐츠 전환 — 현재는 동일 데이터 유지 (추후 탭별 데이터 분리 가능) */
        });
    });
}

/* ── 초기화 ── */
document.addEventListener('DOMContentLoaded', function() {
    renderTop3();
    renderList(1);
    renderPagination(1);
    bindSubButtons();
    bindTabs();
});
// 뒤로가기/앞으로가기 감지
window.addEventListener('popstate', function(e) {
    var page = (e.state && e.state.page) ? e.state.page : 1;
    currentPage = page;
    renderList(page);
    renderPagination(page);

    var top3Grid   = document.getElementById('chef-top3-grid');
    var top3Header = document.querySelector('.chef-top3-header');
    var isFirst    = page === 1;
    if (top3Grid)   top3Grid.style.display   = isFirst ? '' : 'none';
    if (top3Header) top3Header.style.display = isFirst ? '' : 'none';

    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// 초기 진입 시 URL에 page 파라미터 있으면 해당 페이지로
var initParams = new URLSearchParams(window.location.search);
var initPage   = parseInt(initParams.get('page'), 10) || 1;
if (initPage !== 1) goToPage(initPage);
else history.replaceState({ page: 1 }, '', '?page=1');
