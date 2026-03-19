/**
 * recipe-card-render.js
 * recipe-data.js의 RECIPES 데이터를 읽어 각 페이지에 맞는 카드를 동적으로 생성합니다.
 *
 * 로드 순서 (각 페이지 </body> 앞):
 *   <script src="js/recipe-data.js"></script>
 *   <script src="js/recipe-card-render.js"></script>
 *   <script src="js/category3.js"></script>  ← 또는 해당 페이지 JS
 *   <script src="js/recipe-card-link.js"></script>
 *
 * 페이지 판별: <body data-page="type|ingredient|method|situation|health">
 */

(function () {
  'use strict';

  /* ── 별점 HTML ── */
  function starsHTML(rating) {
    var full = Math.floor(rating);
    var half = (rating - full) >= 0.5;
    var html = '';
    for (var i = 1; i <= 5; i++) {
      if (i <= full)            html += '<span class="star">★</span>';
      else if (i === full + 1 && half) html += '<span class="star star--half">★</span>';
      else                      html += '<span class="star star--empty">★</span>';
    }
    return html;
  }

  /* ── data-category 값 추출 ── */
  function getCatVal(r, pageType) {
    var cats = r.categories || {};
    var val  = cats[pageType] || '';
    return Array.isArray(val) ? val.join(' ') : val;
  }

  /* ── 카드 HTML 생성 ── */
  function buildCard(r, pageType) {
    var catVal = getCatVal(r, pageType);

    var badgeHTML = r.badge
      ? '<span class="recipe-card__badge ' + (r.badge_class || '') + '">' + r.badge + '</span>'
      : '';

    var tagsHTML = (r.tags || []).map(function (t) {
      return '<span class="recipe-card__tag">' + t + '</span>';
    }).join('');

    var authorHTML = r.author_img
      ? '<img class="author-avatar" src="' + r.author_img + '" alt="' + (r.author||'') + ' 프로필">'
      : '<svg class="author-avatar" viewBox="0 0 32 32" fill="none" stroke="#ccc" stroke-width="1.5"><path d="M28 28v-3a8 8 0 0 0-8-8H12a8 8 0 0 0-8 8v3"/><circle cx="16" cy="10" r="6"/></svg>';

    return '<article class="recipe-card" data-recipe-id="' + r.id + '" data-category="' + catVal + '">' +
      '<div class="recipe-card__img-wrap">' +
        '<a href="recipe-detail.html?id=' + r.id + '">' +
          '<img src="' + (r.image||'') + '" alt="' + (r.title||'') + '" loading="lazy">' +
        '</a>' +
        badgeHTML +
        '<button class="recipe-card__scrap" type="button" aria-label="스크랩" aria-pressed="false">' +
          '<span class="scrap-icon">🤍</span>' +
        '</button>' +
      '</div>' +
      '<div class="recipe-card__body">' +
        '<div class="recipe-card__stars" role="img" aria-label="평점 ' + (r.rating||0) + ' (' + (r.review_count||0) + '개 후기)">' +
          '<div class="stars__icons" aria-hidden="true">' + starsHTML(r.rating||0) + '</div>' +
          '<span class="review-count" aria-hidden="true">(' + (r.review_count||0) + ')</span>' +
        '</div>' +
        '<a href="recipe-detail.html?id=' + r.id + '">' +
          '<h3 class="recipe-card__title">' + (r.title||'') + '</h3>' +
        '</a>' +
        '<p class="recipe-card__desc">' + (r.subtitle||'') + '</p>' +
        '<div class="recipe-card__tags">' + tagsHTML + '</div>' +
        '<ul class="recipe-card__meta">' +
          '<li class="meta-item meta-item--like">' +
            '<svg class="meta-item__icon" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">' +
              '<path d="M8 13.5C8 13.5 2 9.5 2 5.5a3.5 3.5 0 0 1 6-2.45A3.5 3.5 0 0 1 14 5.5c0 4-6 8-6 8z"/>' +
            '</svg>' +
            '<span>' + (r.likes||'0') + '</span>' +
          '</li>' +
          '<li class="meta-item">' +
            '<svg class="meta-item__icon" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true">' +
              '<rect x="1" y="10" width="3" height="5" rx="0.5"/>' +
              '<rect x="6.5" y="6" width="3" height="9" rx="0.5"/>' +
              '<rect x="12" y="2" width="3" height="13" rx="0.5"/>' +
            '</svg>' +
            '<span>' + (r.level||'') + '</span>' +
          '</li>' +
          '<li class="meta-item">' +
            '<svg class="meta-item__icon" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true">' +
              '<circle cx="8" cy="9" r="6"/>' +
              '<path stroke-linecap="round" d="M8 6v3.5l2 1.5"/>' +
              '<path stroke-linecap="round" d="M6 1h4"/>' +
            '</svg>' +
            '<span>' + (r.time||'') + '</span>' +
          '</li>' +
          '<li class="meta-item meta-item--author">' +
            '<address>' +
              authorHTML +
              '<a href="#" class="author-name">' + (r.author||'') + '</a>' +
            '</address>' +
          '</li>' +
        '</ul>' +
      '</div>' +
    '</article>';
  }

  /* ── 메인 렌더링 ── */
  function render() {
    if (typeof RECIPES === 'undefined') return;

    var list = document.getElementById('recipe-list');
    if (!list) return;

    var pageType = (document.body && document.body.getAttribute('data-page')) || 'type';

    // 해당 페이지 카테고리 값이 있는 레시피만 필터링
    var recipes = Object.values(RECIPES).filter(function (r) {
      var cats = r.categories;
      if (!cats) return false;
      var val = cats[pageType];
      if (!val) return false;
      if (Array.isArray(val)) return val.length > 0;
      return val.trim() !== '';
    });

    list.innerHTML = recipes.map(function (r) {
      return buildCard(r, pageType);
    }).join('');
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', render);
  } else {
    render();
  }

})();
