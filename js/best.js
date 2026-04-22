/* ============================================
   best.js
   만개의 레시피 — 베스트 레시피 페이지 스크립트
============================================ */

/* ── 더미 데이터 ── */
var BEST_DATA = [
    { id: 1013, rank: 1,  change: 'up',   diff: 2, title: '콩나물국', author: '시크제이맘', views: '78.2만', scrap: '8.7K', rating: '4.5', img: 'images_10000_recipes/recipe_card_img/guk_01.png',  scraped: false },
    { id: 1004, rank: 2,  change: 'same', diff: 0, title: '봄동 겉절이',                           author: '뿅림이',  views: '55.1만', scrap: '6.2K', rating: '5.0', img: 'images_10000_recipes/recipe_card_img/banchan_04.png',                                                         scraped: false },
    { id: 1074, rank: 3,  change: 'down', diff: 1, title: '오므라이스',                         author: '조밍키♥',  views: '40.3만', scrap: '5.1K', rating: '4.3', img: 'images_10000_recipes/recipe_card_img/western_02.png',                                                         scraped: false },
    { id: 1017, rank: 4,  change: 'up',   diff: 3, title: '얼큰 부대찌개',                      author: '뽀유TV',   views: '33.8만', scrap: '4.8K', rating: '4.6', img: 'images_10000_recipes/recipe_card_img/guk_05.png',                                                         scraped: false },
    { id: 1021, rank: 5,  change: 'same', diff: 0, title: '김치짜글이',                              author: '밥차리라',   views: '27.1만', scrap: '3.9K', rating: '4.2', img: 'images_10000_recipes/recipe_card_img/guk_09.png',                                                         scraped: false },
    { id: 1003, rank: 6,  change: 'down', diff: 2, title: '쪽파 계란말이',                              author: '김진옥요리가좋다',    views: '21.4만', scrap: '3.2K', rating: '4.1', img: 'images_10000_recipes/recipe_card_img/banchan_03.png',                                                         scraped: false },
    { id: 1040, rank: 7,  change: 'up',   diff: 1, title: '해장라면',                     author: '뿅림이',   views: '18.9만', scrap: '2.8K', rating: '4.7', img: 'images_10000_recipes/recipe_card_img/noodle_04.png',                                                         scraped: false },
    { id: 1044, rank: 8,  change: 'same', diff: 0, title: '열무비빔국수',                       author: '판교댁쏭아', views: '15.2만', scrap: '2.1K', rating: '4.4', img: 'images_10000_recipes/recipe_card_img/noodle_08.png',                                                         scraped: false },
    { id: 1083, rank: 9,  change: 'up',   diff: 4, title: '샤브샤브',  author: '루던',   views: '13.8만', scrap: '1.9K', rating: '4.5', img: 'images_10000_recipes/recipe_card_img/guk_13.png',                                                         scraped: false },
    { id: 1007, rank: 10, change: 'down', diff: 1, title: '세발나물 겉절이',                  author: '살찌우는엄마',   views: '12.1만', scrap: '1.6K', rating: '4.3', img: 'images_10000_recipes/recipe_card_img/banchan_07.png',                                                         scraped: false }
];

/* ── SVG ── */
var PLACEHOLDER_SVG = '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#bbb" stroke-width="1.2"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="M21 15l-5-5L5 21"/></svg>';

var SCRAP_SVG_ON   = '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/></svg>';
var SCRAP_SVG_OFF  = '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#bbb" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/></svg>';

/* ── 순위 변동 화살표 ── */
function changeHTML(change, diff) {
    if (change === 'up') {
        return '<span class="best-rank-change is-up">' +
            '<svg width="8" height="8" viewBox="0 0 10 10" fill="#ff0000"><polygon points="5,1 9,9 1,9"/></svg>' +
            diff + '</span>';
    }
    if (change === 'down') {
        return '<span class="best-rank-change is-down">' +
            '<svg width="8" height="8" viewBox="0 0 10 10" fill="#6fa8dc"><polygon points="5,9 9,1 1,1"/></svg>' +
            diff + '</span>';
    }
    return '<span class="best-rank-change is-same">—</span>';
}

/* ── 렌더링 ── */
function render(sortType) {
    var list = document.getElementById('best-list');
    if (!list) return;

    /* 정렬 */
    var sorted = BEST_DATA.slice().sort(function(a, b) {
        if (sortType === 'views')  return parseFloat(b.views)  - parseFloat(a.views);
        if (sortType === 'scrap')  return parseFloat(b.scrap)  - parseFloat(a.scrap);
        if (sortType === 'rating') return parseFloat(b.rating) - parseFloat(a.rating);
        return 0;
    });

    var html = '';
    sorted.forEach(function(item, idx) {
        var displayRank = idx + 1;
        var isTop = displayRank <= 3;
        var thumb = item.img
            ? '<img src="' + item.img + '" alt="' + item.title + '">'
            : PLACEHOLDER_SVG;
        var scrapClass = item.scraped ? 'best-scrap-btn is-scraped' : 'best-scrap-btn';
        var scrapIcon  = item.scraped ? SCRAP_SVG_ON : SCRAP_SVG_OFF;
                        
        html += '<a class="best-item" href="recipe-detail.html?id=' + item.id + '">';
        html += '<div class="best-rank-col">';
        html += '<span class="best-rank-num' + (isTop ? ' is-top' : '') + '">' + displayRank + '</span>';
        html += changeHTML(item.change, item.diff);
        html += '</div>';
        html += '<div class="best-thumb">' + thumb + '</div>';
        html += '<div class="best-info">';
        html += '<p class="best-recipe-title">' + item.title + '</p>';
        html += '<div class="best-meta">';
        html += '<span>' + item.author + '</span>';
        html += '조회수<span class="best-meta-val">' + item.views + '</span>';
        html += '스크랩<span class="best-meta-val">' + item.scrap + '</span>';
        html += `<span class="best-meta-star">
                    <span class="star-icon" aria-hidden="true">★</span>
                    <span class="star-rating"> ${item.rating}</span>
                </span>`;
        html += '</div></div>';
        html += '<button class="' + scrapClass + '" data-id="' + item.id + '" aria-label="스크랩">' + scrapIcon + '</button>';
        html += '</a>';
    });

    list.innerHTML = html;
}

/* ── 스크랩 버튼 이벤트 위임 ── */
function bindScrap() {
    var list = document.getElementById('best-list');
    if (!list) return;
    list.addEventListener('click', function(e) {
        var btn = e.target.closest('.best-scrap-btn');
        if (!btn) return;
        e.preventDefault();
        e.stopPropagation();
        var id   = parseInt(btn.dataset.id, 10);
        var item = BEST_DATA.filter(function(d) { return d.id === id; })[0];
        if (!item) return;
        item.scraped = !item.scraped;
        btn.classList.toggle('is-scraped', item.scraped);
        btn.innerHTML = item.scraped ? SCRAP_SVG_ON : SCRAP_SVG_OFF;

        /* scrap.js 연동 — scrappedRecipes localStorage */
        if (typeof addScrap === 'function' && typeof removeScrap === 'function') {
            if (item.scraped) addScrap({ id: item.id, title: item.title, author: item.author, image: item.img });
            else removeScrap(item.id);
        }
    });
}

/* ── 초기화 ── */
document.addEventListener('DOMContentLoaded', function() {
    var sortEl = document.getElementById('best-sort');
    if (!sortEl) return;

    render(sortEl.value);

    sortEl.addEventListener('change', function() {
        render(sortEl.value);
    });

    bindScrap();
});
