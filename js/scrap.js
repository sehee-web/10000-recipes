/* ============================================
   scrap.js
   만개의 레시피 — 스크랩한 레시피 페이지 스크립트
   localStorage key: 'scrappedRecipes'
   저장 구조: [{ id, title, author, image, scrappedAt }, ...]
============================================ */

var SCRAP_KEY = 'scrappedRecipes';

/* ── localStorage 유틸 ── */
function getScrapList() {
    try {
        return JSON.parse(localStorage.getItem(SCRAP_KEY)) || [];
    } catch (e) {
        return [];
    }
}

function setScrapList(list) {
    try {
        localStorage.setItem(SCRAP_KEY, JSON.stringify(list));
    } catch (e) {}
}

function isScraped(id) {
    return getScrapList().some(function(item) {
        return String(item.id) === String(id);
    });
}

function addScrap(recipe) {
    var list = getScrapList();
    if (isScraped(recipe.id)) return;
    list.unshift({
        id:         recipe.id,
        title:      recipe.title    || '',
        author:     recipe.author   || '',
        image:      recipe.image    || '',
        scrappedAt: Date.now()
    });
    setScrapList(list);
}

function removeScrap(id) {
    var list = getScrapList().filter(function(item) {
        return String(item.id) !== String(id);
    });
    setScrapList(list);
}

function toggleScrap(recipe) {
    if (isScraped(recipe.id)) {
        removeScrap(recipe.id);
        return false;
    } else {
        addScrap(recipe);
        return true;
    }
}

/* ── 플레이스홀더 SVG ── */
var PLACEHOLDER_SVG =
    '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#bbb" stroke-width="1.2">' +
    '<rect x="3" y="3" width="18" height="18" rx="2"/>' +
    '<circle cx="8.5" cy="8.5" r="1.5"/>' +
    '<path d="M21 15l-5-5L5 21"/>' +
    '</svg>';

/* ── 그리드 렌더링 ── */
function renderScrapGrid(list) {
    var grid    = document.getElementById('scrap-grid');
    var hasEl   = document.getElementById('scrap-has');
    var emptyEl = document.getElementById('scrap-empty');
    var countEl = document.getElementById('scrap-count-num');
    var filter  = document.getElementById('scrap-filter');

    if (!grid) return;

    if (countEl) countEl.textContent = list.length ;

    if (list.length === 0) {
        hasEl.style.display   = 'none';
        emptyEl.style.display = '';
        if (filter) filter.disabled = true;
        return;
    }

    hasEl.style.display   = '';
    emptyEl.style.display = 'none';
    if (filter) filter.disabled = false;

    var html = '';
    list.forEach(function(item) {
        var thumb = item.image
            ? '<img src="' + item.image + '" alt="' + item.title + '">'
            : PLACEHOLDER_SVG;

        html += '<a href="recipe-detail.html?id=' + item.id + '" class="scrap-card">';
        html += '<div class="scrap-card__thumb">' + thumb + '</div>';
        html += '<div class="scrap-card__body">';
        html += '<p class="scrap-card__title">' + item.title + '</p>';
        html += '<p class="scrap-card__author">' + item.author + '</p>';
        html += '</div>';
        html += '<button class="scrap-card__del" data-id="' + item.id + '" aria-label="스크랩 삭제">×</button>';
        html += '</a>';
    });

    grid.innerHTML = html;
}

/* ── 정렬 ── */
function getSortedList(order) {
    var list = getScrapList();
    if (order === 'oldest') {
        list = list.slice().sort(function(a, b) {
            return a.scrappedAt - b.scrappedAt;
        });
    }
    return list;
}

/* ── scrap.html 초기화 ── */
function initScrapPage() {
    var filterEl = document.getElementById('scrap-filter');
    var grid     = document.getElementById('scrap-grid');
    if (!filterEl || !grid) return;

    renderScrapGrid(getSortedList('newest'));

    filterEl.addEventListener('change', function() {
        renderScrapGrid(getSortedList(filterEl.value));
    });

    /* X 버튼 이벤트 위임 */
    grid.addEventListener('click', function(e) {
        var delBtn = e.target.closest('.scrap-card__del');
        if (!delBtn) return;
        e.preventDefault();
        var id = delBtn.dataset.id;
        removeScrap(id);
        renderScrapGrid(getSortedList(filterEl.value));
    });

    /* 전체 삭제 */
    var deleteAllBtn = document.getElementById('scrap-delete-all');
    if (deleteAllBtn) {
        deleteAllBtn.addEventListener('click', function() {
            if (!confirm('스크랩한 레시피를 모두 삭제할까요?')) return;
            setScrapList([]);
            renderScrapGrid([]);
        });
    }
}

/* ── recipe-detail.html 스크랩 버튼 연동 ── */
function initScrapButton() {
    var btn = document.querySelector('.action-btn[aria-label="레시피 스크랩"]');
    if (!btn) return;

    var id = new URLSearchParams(window.location.search).get('id');
    if (!id || typeof RECIPES === 'undefined') return;

    var recipe = RECIPES[Number(id)];
    if (!recipe) return;

    /* 초기 상태 반영 */
    updateScrapBtnState(btn, isScraped(id));

    btn.addEventListener('click', function() {
        var scrapped = toggleScrap(recipe);
        updateScrapBtnState(btn, scrapped);
    });
}

function updateScrapBtnState(btn, scrapped) {
    var svg = btn.querySelector('svg');
    if (!svg) return;

    if (scrapped) {
        svg.setAttribute('fill', '#e9722e');
        svg.setAttribute('stroke', '#e9722e');
        btn.setAttribute('aria-label', '스크랩 취소');
        btn.title = '스크랩 취소';
    } else {
        svg.setAttribute('fill', 'none');
        svg.setAttribute('stroke', 'currentColor');
        btn.setAttribute('aria-label', '레시피 스크랩');
        btn.title = '레시피 스크랩';
    }
}

/* ── 진입점 ── */
document.addEventListener('DOMContentLoaded', function() {
    /* scrap.html */
    if (document.getElementById('scrap-grid')) {
        initScrapPage();
    }

    /* recipe-detail.html */
    if (document.querySelector('.action-btn[aria-label="레시피 스크랩"]') ||
        document.querySelector('.action-btn[aria-label="스크랩 취소"]')) {
        initScrapButton();
    }
});
