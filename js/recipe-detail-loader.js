/**
 * recipe-detail-loader.js
 * URL의 ?id=1001 을 읽어 RECIPES 데이터를 페이지에 자동으로 채워줍니다.
 * 반드시 recipe-data.js 보다 뒤에 로드하세요.
 */

(function () {
  'use strict';

  function qs(sel) { return document.querySelector(sel); }
  function setText(sel, val) { var el = qs(sel); if (el) el.textContent = val; }

  function getParam(key) {
    return new URLSearchParams(window.location.search).get(key);
  }

  function fillImage(r) {
    var wrap = qs('.hero-image');
    if (!wrap || !r.image) return;
    wrap.innerHTML = '<img src="' + r.image + '" alt="' + r.title +
      '" style="width:100%;height:100%;object-fit:cover;">';
  }

  function fillHero(r) {
    setText('.recipe-title', r.title);
    setText('.author-name',  r.author);
    setText('.recipe-subtitle', r.subtitle)
    var labels = document.querySelectorAll('.meta-icon-label');
    if (labels[0]) labels[0].textContent = r.servings || '';
    if (labels[1]) labels[1].textContent = r.time     || '';
    if (labels[2]) labels[2].textContent = r.level    || '';
    document.title = r.title + ' — 만개의 레시피';
  }

  function fillBreadcrumb(r) {
    var sepD2 = document.getElementById('bc-sep-d2');
    var d2    = document.getElementById('bc-d2');
    var sepD3 = document.getElementById('bc-sep-d3');
    var d3    = document.getElementById('bc-d3');

    // depth2 (예: 반찬)
    if (d2 && r.category) {
      d2.textContent = r.category;
      if (sepD2) sepD2.classList.add('is-visible');
      d2.classList.add('is-visible');
    }

    // depth3 (예: 밑반찬)
    if (d3 && r.subcategory) {
      d3.textContent = r.subcategory;
      if (sepD3) sepD3.classList.add('is-visible');
      d3.classList.add('is-visible');
    }

    // 페이지 타이틀
    document.title = r.title + ' | 만개의 레시피';
    
  }

  function fillIngredients(r) {
    var headSpan = qs('.sidebar-head span');
    if (headSpan) headSpan.textContent = r.servings || '';
    var body = qs('.sidebar-body');
    if (!body) return;
    body.innerHTML = '';
    (r.ingredients || []).forEach(function (group) {
      var g = document.createElement('div');
      g.className = 'ing-group';
      g.innerHTML = '<div class="ing-group-label">' + group.group + '</div>';
      (group.items || []).forEach(function (item) {
        g.innerHTML +=
          '<div class="ing-row">' +
            '<span class="ing-name">' + item.name + '</span>' +
            '<span class="ing-amt">'  + item.amount + '</span>' +
          '</div>';
      });
      body.appendChild(g);
    });
  }

  function fillSteps(r) {
    var list = qs('.step-list');
    if (!list) return;
    var steps = r.steps || [];
    list.innerHTML = '';
    steps.forEach(function (step, i) {
      var isLast = (i === steps.length - 1);
      var connector = isLast ? '' :
        '<div style="flex:1;width:2px;min-height:14px;margin-top:4px;' +
        'background:repeating-linear-gradient(to bottom,#E97229 0,#E97229 3px,transparent 3px,transparent 7px);' +
        'opacity:.22;"></div>';
      var timeHTML = step.time ? '<span class="step-time">' + step.time + '</span>' : '';
      var imgInner = step.image
        ? '<img src="' + step.image + '" alt="' + step.title + '" style="width:100%;height:100%;object-fit:cover;">'
        : '<span class="step-img-label">STEP ' + (i + 1) + '</span>';
      var tipHTML = step.tip ? '<p class="step-tip">' + step.tip + '</p>' : '';
      var li = document.createElement('li');
      li.className = 'step-item';
      li.innerHTML =
        '<div class="step-num-col"><div class="step-num">' + (i + 1) + '</div>' + connector + '</div>' +
        '<div class="step-content">' + timeHTML +
          '<div class="step-body">' +
            '<div class="step-img">' + imgInner + '</div>' +
            '<div class="step-text">' +
              (step.title    ? '<p class="step-title">'    + step.title    + '</p>' : '') +
              (step.subtitle ? '<p class="step-subtitle">' + step.subtitle + '</p>' : '') +
              tipHTML +
            '</div>' +
          '</div>' +
        '</div>';
      list.appendChild(li);
    });
  }

  function fillReviews(r) {
    var tabBtns = document.querySelectorAll('.tab-btn');
    if (tabBtns[0]) {
      var tc = tabBtns[0].querySelector('.tab-count');
      if (tc) tc.textContent = (r.reviews || []).length;
    }
    var panel = qs('#panel-review');
    if (!panel) return;
    panel.querySelectorAll('.review-card').forEach(function (c) { c.remove(); });
    var moreBtn = panel.querySelector('.review-more-btn');
    (r.reviews || []).forEach(function (rv) {
      var starsHTML = '';
      for (var i = 1; i <= 5; i++) {
        starsHTML += '<span class="star' + (i <= rv.stars ? ' on' : '') + '">★</span>';
      }
      var card = document.createElement('div');
      card.className = 'review-card';
      var thumbHTML = rv.image
        ? '<div class="review-thumb"><img src="' + rv.image + '" alt="후기 이미지" style="width:100%;height:100%;object-fit:cover;"></div>'
        : '<div class="review-thumb review-thumb--empty"></div>';
      card.innerHTML =
        thumbHTML +
        '<div class="review-body">' +
          '<div class="review-meta-row">' +
            '<div class="review-avatar">' +
              '<svg viewBox="0 0 24 24" fill="none" stroke="#aaa" stroke-width="1.8">' +
              '<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>' +
              '<circle cx="12" cy="7" r="4"/></svg>' +
            '</div>' +
            '<span class="review-username">' + rv.username + '</span>' +
            '<span class="review-stars">'    + starsHTML   + '</span>' +
            '<span class="review-date">'     + rv.date     + '</span>' +
          '</div>' +
          '<p class="review-text">' + rv.text + '</p>' +
        '</div>';
      if (moreBtn) panel.insertBefore(card, moreBtn);
      else panel.appendChild(card);
    });
  }

  function fillQuestions(r) {
    var tabBtns = document.querySelectorAll('.tab-btn');
    if (tabBtns[1]) {
      var tc = tabBtns[1].querySelector('.tab-count');
      if (tc) tc.textContent = (r.questions || []).length;
    }
    var panel = qs('#panel-question');
    if (!panel) return;
    panel.querySelectorAll('.q-card').forEach(function (c) { c.remove(); });
    var moreBtn = panel.querySelector('.review-more-btn');
    (r.questions || []).forEach(function (q) {
      var answered = !!q.answer;
      var answerHTML = answered
        ? '<div class="q-answer"><p class="q-answer-label">작성자 답변</p>' +
          '<p class="q-answer-text">' + q.answer + '</p></div>' : '';
      var card = document.createElement('div');
      card.className = 'q-card';
      card.innerHTML =
        '<div class="q-header">' +
          '<span class="q-badge ' + (answered ? 'q-badge--answered' : 'q-badge--pending') + '">' +
            (answered ? '답변완료' : '미답변') + '</span>' +
          '<span class="q-username">' + q.username + '</span>' +
          '<span class="q-date">'     + q.date     + '</span>' +
        '</div>' +
        '<p class="q-text">' + q.text + '</p>' + answerHTML;
      if (moreBtn) panel.insertBefore(card, moreBtn);
      else panel.appendChild(card);
    });
  }

  function showNotFound(id) {
    var main = qs('.main-wrap');
    if (main) {
      main.innerHTML =
        '<div style="text-align:center;padding:80px 20px;">' +
          '<p style="font-size:18px;color:#999;margin-bottom:16px;">' +
            '레시피를 찾을 수 없어요. (id: ' + id + ')<br>' +
            '<small style="font-size:14px;">recipe-data.js에 해당 id의 데이터를 추가해 주세요.</small>' +
          '</p>' +
          '<a href="index.html" style="color:#E97229;font-weight:700;">홈으로 돌아가기</a>' +
        '</div>';
    }
  }

  function run() {
    var id = getParam('id');
    if (!id) return;
    var recipe = (typeof RECIPES !== 'undefined') ? RECIPES[Number(id)] : null;
    if (!recipe) { showNotFound(id); return; }
    fillImage(recipe);
    fillHero(recipe);
    fillBreadcrumb(recipe);
    fillIngredients(recipe);
    fillSteps(recipe);
    fillReviews(recipe);
    fillQuestions(recipe);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', run);
  } else {
    run();
  }
})();
/* ── breadcrumb depth1 switcher ── */
(function () {
  var switcher    = document.getElementById('depth1-switcher');
  var triggerBtn  = document.getElementById('switcher-trigger-btn');

  if (!triggerBtn || !switcher) return;

  triggerBtn.addEventListener('click', function (e) {
    e.stopPropagation();
    var isOpen = switcher.classList.contains('is-open');
    switcher.classList.toggle('is-open', !isOpen);
    triggerBtn.setAttribute('aria-expanded', String(!isOpen));
  });

  document.addEventListener('click', function (e) {
    if (!switcher.contains(e.target)) {
      switcher.classList.remove('is-open');
      triggerBtn.setAttribute('aria-expanded', 'false');
    }
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      switcher.classList.remove('is-open');
      triggerBtn.setAttribute('aria-expanded', 'false');
    }
  });
})();