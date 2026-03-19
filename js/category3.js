/* ================================================================
   category3.js
   카테고리 페이지 상태 관리 + UI 제어
================================================================ */

/* ================================================================
   STATE
================================================================ */
const state = {
    depth1: 'type',
    depth2: 'all',
    depth3: 'all',
    sort:   'popular',
    page:   1
};

const CARDS_PER_PAGE = 12;
const TOTAL_PAGES    = 5;   /* 전체(all) 탭 고정 페이지 수 */

/* depth2 → depth3 category값 매핑 */
const D3_MAP = {
    'banchan':        { 'all': ['basic-banchan', 'main-banchan'], 'basic-banchan': ['basic-banchan'], 'main-banchan': ['main-banchan'] },
    'guk-jjigae':    { 'all': ['guk', 'jjigae'],                  'guk': ['guk'],                    'jjigae': ['jjigae'] },
    'bap-juk-tteok': { 'all': ['bap', 'juk', 'tteok'],            'bap': ['bap'],                    'juk': ['juk'],  'tteok': ['tteok'] },
    'noodle':         { 'all': ['noodle'] },
    'jang-yangnyeom':{ 'all': ['jang', 'yangnyeom', 'jam'],       'jang': ['jang'],                  'yangnyeom': ['yangnyeom'], 'jam': ['jam'] },
    'salad':          { 'all': ['salad'] },
    'western':        { 'all': ['western', 'soup'],                'western': ['western'],            'soup': ['soup'] },
};


/* ================================================================
   DOM 참조
================================================================ */
const $d2Filter      = document.querySelector('.depth2-filter');
const $accordion     = document.querySelector('.depth3-accordion');
const $switcher      = document.getElementById('depth1-switcher');
const $triggerBtn    = document.getElementById('switcher-trigger-btn');
const $switcherLabel = document.getElementById('switcher-label');
const $bcD2          = document.getElementById('bc-d2');
const $bcD3          = document.getElementById('bc-d3');
const $bcSepD2       = document.getElementById('bc-sep-d2');
const $bcSepD3       = document.getElementById('bc-sep-d3');
const $recipeList    = document.getElementById('recipe-list');
const $pagination    = document.querySelector('.pagination');
const $resultCount   = document.getElementById('result-count');


/* ================================================================
   PAGINATION + 필터링
================================================================ */

/* Fisher-Yates 셔플 */
function shuffle(arr) {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

const pageCache     = {};
const originalCards = [];   /* HTML 원본 순서 고정 */

/* 현재 depth2/depth3에 해당하는 카드 목록 반환 */
function getFilteredCards() {
    if (state.depth2 === 'all') return [...originalCards];
    const d3Map      = D3_MAP[state.depth2] ?? {};
    const categories = d3Map[state.depth3] ?? d3Map['all'] ?? [];
    return originalCards.filter(card => {
        const cardCategories = card.dataset.category.split(' ');
        return cardCategories.some(c => categories.includes(c));
    });
}

/* 페이지 수 계산 — 항상 5페이지 고정 */
function getTotalPages(filteredCards) {
    return TOTAL_PAGES;
}

/* 페이지별 카드
   - 1페이지: 해당 카드 원본 순서 고정
   - 2~5페이지: 같은 카드 셔플 (캐시 적용)
*/
function getPageCards(filteredCards, page) {
    if (page === 1) return filteredCards;
    const cacheKey = `${state.depth2}_${state.depth3}_${page}`;
    if (!pageCache[cacheKey]) {
        pageCache[cacheKey] = shuffle([...filteredCards]);
    }
    return pageCache[cacheKey];
}

function renderCards() {
    const filtered   = getFilteredCards();
    const totalPages = getTotalPages(filtered);
    /* 현재 page가 범위 초과하면 1로 보정 */
    if (state.page > totalPages) state.page = 1;

    const pageCards = getPageCards(filtered, state.page);

    /* 전체 숨김 */
    originalCards.forEach(c => { c.style.display = 'none'; });

    /* 해당 페이지 카드만 표시 + 순서 재정렬 */
    pageCards.forEach(card => {
        card.style.display = '';
        $recipeList.appendChild(card);
    });

    /* 총 개수 업데이트 */
    if ($resultCount) {
        $resultCount.textContent = filtered.length.toLocaleString();
    }

    renderPagination(totalPages);
}

function renderPagination(totalPages) {
    const btns = $pagination.querySelectorAll('.pagination__btn:not(.pagination__btn--arrow)');
    btns.forEach((btn, i) => {
        const page     = i + 1;
        const isActive = page === state.page;
        const inRange  = page <= totalPages;
        btn.classList.toggle('is-active', isActive);
        btn.setAttribute('aria-current', isActive ? 'page' : 'false');
        btn.style.visibility = inRange ? '' : 'hidden';
    });

    const [$prev, $next] = $pagination.querySelectorAll('.pagination__btn--arrow');
    $prev.disabled = state.page === 1;
    $next.disabled = state.page >= totalPages;
}


/* ================================================================
   setState
================================================================ */
function setState(patch) {
    if (patch.depth2 !== undefined && patch.depth2 !== state.depth2) {
        patch.depth3 = 'all';
        patch.page   = 1;
    }
    if (patch.depth3 !== undefined && patch.depth3 !== state.depth3) {
        patch.page = 1;
    }
    Object.assign(state, patch);
    syncURL();
    render();
}


/* ================================================================
   URL 동기화
================================================================ */
function syncURL() {
    const p = new URLSearchParams();
    if (state.depth2 !== 'all')     p.set('d2',   state.depth2);
    if (state.depth3 !== 'all')     p.set('d3',   state.depth3);
    if (state.sort   !== 'popular') p.set('sort', state.sort);
    if (state.page   !== 1)         p.set('page', state.page);
    const url = p.toString() ? `?${p}` : location.pathname;
    history.pushState({ ...state }, '', url);
}


/* ================================================================
   render
================================================================ */
function render() {
    renderDepth2();
    renderSidebar();
    renderBreadcrumb();
    renderCards();
}

function renderDepth2() {
    document.querySelectorAll('.depth2-filter__btn').forEach(btn => {
        const active = btn.dataset.d2 === state.depth2;
        btn.classList.toggle('is-active', active);
        btn.setAttribute('aria-pressed', active);
    });
}

function renderSidebar() {
    const isAll = state.depth2 === 'all';
    document.querySelectorAll('.accordion-item').forEach(item => {
        if (isAll) { closeAccordion(item); return; }
        item.dataset.d2 === state.depth2 ? openAccordion(item) : closeAccordion(item);
    });
    if (!isAll) {
        const openItem = document.querySelector(`.accordion-item[data-d2="${state.depth2}"]`);
        openItem?.querySelectorAll('.accordion-panel__btn').forEach(btn => {
            btn.classList.toggle('is-active', btn.dataset.d3 === state.depth3);
        });
    }
}

function renderBreadcrumb() {
    if (state.depth2 === 'all') {
        hide($bcSepD2); hide($bcD2);
        hide($bcSepD3); hide($bcD3);
        return;
    }
    const d2Btn = document.querySelector(`.depth2-filter__btn[data-d2="${state.depth2}"]`);
    show($bcSepD2); show($bcD2);
    $bcD2.textContent = d2Btn?.dataset.label ?? '';

    const openItem = document.querySelector(`.accordion-item[data-d2="${state.depth2}"]`);
    const d3Btn    = openItem?.querySelector(`.accordion-panel__btn[data-d3="${state.depth3}"]`);
    const d3Label  = d3Btn?.dataset.label ?? '';

    if (state.depth3 !== 'all' && d3Label) {
        show($bcSepD3); show($bcD3);
        $bcD3.textContent = d3Label;
    } else {
        hide($bcSepD3); hide($bcD3);
    }
}

function show(el) { el?.classList.add('is-visible'); }
function hide(el) { el?.classList.remove('is-visible'); }


/* ================================================================
   ACCORDION
================================================================ */
function openAccordion(item) {
    item.classList.add('is-open');
    item.querySelector('.accordion-trigger')?.setAttribute('aria-expanded', 'true');
}
function closeAccordion(item) {
    item.classList.remove('is-open');
    item.querySelector('.accordion-trigger')?.setAttribute('aria-expanded', 'false');
}


/* ================================================================
   DEPTH1 SWITCHER
================================================================ */
function openSwitcher() {
    $switcher?.classList.add('is-open');
    $triggerBtn?.setAttribute('aria-expanded', 'true');
}
function closeSwitcher() {
    $switcher?.classList.remove('is-open');
    $triggerBtn?.setAttribute('aria-expanded', 'false');
}

$triggerBtn?.addEventListener('click', e => {
    e.stopPropagation();
    $switcher?.classList.contains('is-open') ? closeSwitcher() : openSwitcher();
});
document.addEventListener('click', e => {
    if (!$switcher?.contains(e.target)) closeSwitcher();
});
document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeSwitcher();
});


/* ================================================================
   이벤트 위임
================================================================ */

/* depth2 pill */
$d2Filter?.addEventListener('click', e => {
    const btn = e.target.closest('.depth2-filter__btn');
    if (!btn) return;
    setState({ depth2: btn.dataset.d2 });
});

/* 아코디언 트리거 */
$accordion?.addEventListener('click', e => {
    const trigger = e.target.closest('.accordion-trigger');
    if (!trigger) return;
    const item = trigger.closest('.accordion-item');
    const d2   = item.dataset.d2;
    if (d2 === state.depth2) {
        item.classList.contains('is-open') ? closeAccordion(item) : openAccordion(item);
    } else {
        setState({ depth2: d2 });
    }
});

/* depth3 버튼 */
$accordion?.addEventListener('click', e => {
    const btn = e.target.closest('.accordion-panel__btn');
    if (!btn) return;
    setState({ depth3: btn.dataset.d3 });
});

/* 정렬 */
document.getElementById('sort-select')?.addEventListener('change', e => {
    setState({ sort: e.target.value, page: 1 });
});

/* 스크랩 토글 */
$recipeList?.addEventListener('click', e => {
    const btn = e.target.closest('.recipe-card__scrap');
    if (!btn) return;
    const pressed = btn.getAttribute('aria-pressed') === 'true';
    btn.setAttribute('aria-pressed', String(!pressed));
    btn.querySelector('.scrap-icon').textContent = pressed ? '🤍' : '💚';
});

/* 페이지네이션 */
$pagination?.addEventListener('click', e => {
    const btn = e.target.closest('.pagination__btn');
    if (!btn || btn.disabled) return;

    const filtered   = getFilteredCards();
    const totalPages = getTotalPages(filtered);

    if (btn.classList.contains('pagination__btn--arrow')) {
        const [$prev] = $pagination.querySelectorAll('.pagination__btn--arrow');
        const delta   = btn === $prev ? -1 : 1;
        const next    = Math.min(Math.max(state.page + delta, 1), totalPages);
        if (next !== state.page) {
            setState({ page: next });
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    } else {
        const page = Number(btn.textContent);
        if (page !== state.page && page <= totalPages) {
            setState({ page });
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    }
});

/* 뒤로가기 */
window.addEventListener('popstate', e => {
    if (e.state) { Object.assign(state, e.state); render(); }
});


/* ================================================================
   초기화
================================================================ */
function initFromURL() {
    /* 원본 카드 순서 저장 — render() 호출 전에 반드시 실행 */
    originalCards.push(...$recipeList.querySelectorAll('.recipe-card'));

    const p      = new URLSearchParams(location.search);
    state.depth2 = p.get('d2')   || 'all';
    state.depth3 = p.get('d3')   || 'all';
    state.sort   = p.get('sort') || 'popular';
    state.page   = Number(p.get('page')) || 1;

    const sortEl = document.getElementById('sort-select');
    if (sortEl) sortEl.value = state.sort;

    render();
}

document.addEventListener('DOMContentLoaded', initFromURL);
