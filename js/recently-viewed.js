/**
 * recently-viewed.js
 * localStorage에서 최근 본 레시피를 읽어 리스트로 표시
 */

(function () {
  'use strict';

  var KEY = 'recentlyViewed';

  /* ── localStorage 읽기 ── */
  function getList() {
    try { return JSON.parse(localStorage.getItem(KEY)) || []; }
    catch(e) { return []; }
  }

  function saveList(list) {
    try { localStorage.setItem(KEY, JSON.stringify(list)); }
    catch(e) {}
  }

  /* ── 시간 포맷 ── */
  function formatTime(ts) {
    var diff = Date.now() - ts;
    var min  = Math.floor(diff / 60000);
    var hour = Math.floor(diff / 3600000);
    var day  = Math.floor(diff / 86400000);

    if (min < 1)   return '방금 전';
    if (min < 60)  return min + '분 전';
    if (hour < 24) return hour + '시간 전';
    if (day < 7)   return day + '일 전';

    var d = new Date(ts);
    return d.getFullYear() + '.' +
           String(d.getMonth()+1).padStart(2,'0') + '.' +
           String(d.getDate()).padStart(2,'0');
  }

  /* ── 카드 HTML ── */
  function buildItem(item, index) {
    var imgHTML = item.image
      ? '<img src="' + item.image + '" alt="' + item.title + '">'
      : '<div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;">' +
          '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ccc" stroke-width="1.5"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="M21 15l-5-5L5 21"/></svg>' +
        '</div>';

    var catHTML = item.category
      ? '<span class="rv-category">' + item.category + '</span>'
      : '';

    return '<li class="rv-item" data-id="' + item.id + '">' +
      '<span class="rv-num">' + (index + 1) + '</span>' +
      '<div class="rv-thumb">' + imgHTML + '</div>' +
      '<div class="rv-content">' +
        '<a href="recipe-detail.html?id=' + item.id + '" class="rv-title">' + item.title + '</a>' +
        '<p class="rv-subtitle">' + (item.subtitle || '') + '</p>' +
        '<div class="rv-meta">' +
          catHTML +
          '<span class="rv-time">' + formatTime(item.viewedAt) + '</span>' +
        '</div>' +
      '</div>' +
      '<button class="rv-delete-btn" aria-label="삭제" data-id="' + item.id + '">✕</button>' +
    '</li>';
  }

  /* ── 렌더링 ── */
  function render() {
    var list      = getList();
    var listEl    = document.getElementById('rv-list');
    var emptyEl   = document.getElementById('rv-empty');
    var countEl   = document.getElementById('rv-count');
    var clearBtn  = document.getElementById('rv-clear-btn');

    if (countEl) countEl.textContent = list.length;

    if (!list.length) {
      if (listEl)  listEl.style.display  = 'none';
      if (emptyEl) emptyEl.style.display = 'block';
      if (clearBtn) clearBtn.style.display = 'none';
      return;
    }

    if (listEl)  listEl.style.display  = '';
    if (emptyEl) emptyEl.style.display = 'none';
    if (clearBtn) clearBtn.style.display = '';

    if (listEl) {
      listEl.innerHTML = list.map(function(item, i) {
        return buildItem(item, i);
      }).join('');
    }
  }

  /* ── 이벤트 ── */
  function bindEvents() {
    /* 개별 삭제 */
    var listEl = document.getElementById('rv-list');
    if (listEl) {
      listEl.addEventListener('click', function(e) {
        var btn = e.target.closest('.rv-delete-btn');
        if (!btn) return;
        e.preventDefault();
        e.stopPropagation();
        var id   = Number(btn.getAttribute('data-id'));
        var list = getList().filter(function(item) { return item.id !== id; });
        saveList(list);
        render();
      });

      /* 카드 클릭 → 상세 페이지 이동 */
      listEl.addEventListener('click', function(e) {
        if (e.target.closest('.rv-delete-btn')) return;
        if (e.target.closest('a')) return;
        var item = e.target.closest('.rv-item');
        if (!item) return;
        var id = item.getAttribute('data-id');
        if (id) window.location.href = 'recipe-detail.html?id=' + id;
      });
    }

    /* 전체 삭제 */
    var clearBtn = document.getElementById('rv-clear-btn');
    if (clearBtn) {
      clearBtn.addEventListener('click', function() {
        if (!confirm('최근 본 레시피를 모두 삭제할까요?')) return;
        saveList([]);
        render();
      });
    }
  }

  function init() {
    render();
    bindEvents();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
