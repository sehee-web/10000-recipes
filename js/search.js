/* ============================================
   search.js
   만개의 레시피 — 검색결과 페이지 스크립트
   검색 범위: 제목 / 작성자 / 재료 / 태그(키워드) / 셰프(author)
============================================ */

/* ── 추천 검색어 ── */
var SUGGEST_KEYWORDS = ['카레','파스타', '샐러드', '볶음밥', '달래', '계란말이'];

/* ── 플레이스홀더 SVG ── */
var PLACEHOLDER_SVG = '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#bbb" stroke-width="1.2"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="M21 15l-5-5L5 21"/></svg>';

/* ── 키워드 포함 여부 체크 ── */
function containsKeyword(str, kw) {
    if (!str) return false;
    return String(str).toLowerCase().indexOf(kw) !== -1;
}

/* ── 레시피 검색 ── */
function searchRecipes(keyword) {
    var kw = keyword.trim().toLowerCase();
    if (!kw) return [];

    var results = [];

    Object.keys(RECIPES).forEach(function(key) {
        var r = RECIPES[key];
        var matched = false;

        /* 1. 제목 */
        if (containsKeyword(r.title, kw)) { matched = true; }

        /* 2. 작성자(셰프) */
        if (!matched && containsKeyword(r.author, kw)) { matched = true; }

        /* 3. 태그(키워드) */
        if (!matched && r.tags) {
            var tags = Array.isArray(r.tags) ? r.tags : [r.tags];
            tags.forEach(function(tag) {
                if (containsKeyword(tag, kw)) matched = true;
            });
        }

        /* 4. 재료 */
        if (!matched && r.ingredients) {
            r.ingredients.forEach(function(group) {
                if (group.items) {
                    group.items.forEach(function(item) {
                        if (containsKeyword(item.name, kw)) matched = true;
                    });
                }
            });
        }

        /* 5. 카테고리 */
        if (!matched && containsKeyword(r.category, kw)) { matched = true; }
        if (!matched && containsKeyword(r.subcategory, kw)) { matched = true; }

        if (matched) results.push(r);
    });

    return results;
}

/* ── 키워드 하이라이트 ── */
function highlight(text, keyword) {
    if (!text || !keyword) return text;
    var kw = keyword.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    var re = new RegExp('(' + kw + ')', 'gi');
    return text.replace(re, '<mark>$1</mark>');
}

/* ── 카드 렌더링 ── */
function renderResults(results, keyword) {
    var grid    = document.getElementById('search-grid');
    var emptyEl = document.getElementById('search-empty');
    var countEl = document.getElementById('search-result-count');

    if (!grid) return;

    if (results.length === 0) {
        grid.style.display    = 'none';
        emptyEl.style.display = 'flex';

        var titleEl = document.getElementById('search-empty-title');
        if (titleEl) titleEl.textContent = '"' + keyword + '"에 해당하는 레시피가 없어요';

        renderSuggestChips();
        if (countEl) countEl.innerHTML = '';
        return;
    }

    grid.style.display    = '';
    emptyEl.style.display = 'none';

    if (countEl) {
        countEl.innerHTML = '<strong>"' + keyword + '"</strong> 검색결과 총 <strong>' + results.length + '개</strong>';
    }

    var html = '';
    results.forEach(function(r) {
        var thumb = r.image
            ? '<img src="' + r.image + '" alt="' + r.title + '">'
            : PLACEHOLDER_SVG;
        var titleHL = highlight(r.title, keyword);

        html += '<a class="search-card" href="recipe-detail.html?id=' + r.id + '">';
        html += '<div class="search-card__thumb">' + thumb + '</div>';
        html += '<div class="search-card__body">';
        html += '<p class="search-card__title">' + titleHL + '</p>';
        html += '<p class="search-card__author">' + r.author + '</p>';
        html += '</div></a>';
    });

    grid.innerHTML = html;
}

/* ── 추천 검색어 렌더링 ── */
function renderSuggestChips() {
    var container = document.getElementById('search-suggest-chips');
    if (!container) return;

    var html = '';
    SUGGEST_KEYWORDS.forEach(function(kw) {
        html += '<a class="search-suggest-chip" href="search.html?q=' + encodeURIComponent(kw) + '">' + kw + '</a>';
    });
    container.innerHTML = html;
}

/* ── 헤더 검색창에 현재 키워드 채우기 ── */
function fillHeaderInput(keyword) {
    var input = document.getElementById('topSch');
    if (input && keyword) input.value = keyword;
}

/* ── 헤더 폼 action 설정 ── */
function initHeaderForm() {
    var form = document.getElementById('search-form');
    if (!form) return;
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        var val = document.getElementById('topSch').value.trim();
        if (!val) return;
        window.location.href = 'search.html?q=' + encodeURIComponent(val);
    });
}

/* ── 초기화 ── */
document.addEventListener('DOMContentLoaded', function() {
    var params  = new URLSearchParams(window.location.search);
    var keyword = params.get('q') || '';

    fillHeaderInput(keyword);
    initHeaderForm();

    if (!keyword.trim()) {
        /* 키워드 없이 진입한 경우 */
        renderSuggestChips();
        var emptyEl = document.getElementById('search-empty');
        if (emptyEl) emptyEl.style.display = 'flex';
        var titleEl = document.getElementById('search-empty-title');
        if (titleEl) titleEl.textContent = '';
        return;
    }

    var results = searchRecipes(keyword);
    renderResults(results, keyword);
});
