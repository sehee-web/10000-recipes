/**
 * recipe-card-link.js
 * 모든 페이지의 레시피 카드 클릭 → 상세 페이지 이동
 * category.html, index.html, ingredient.html 등
 * <script src="js/recipe-card-link.js"></script> 로 추가하면 됩니다.
 */

(function () {
  'use strict';

  function syncCardData(card, recipe) {
    // 난이도
    var metaItems = card.querySelectorAll('.meta-item');
    metaItems.forEach(function (item) {
      var span = item.querySelector('span');
      if (!span) return;
      var svg = item.querySelector('svg');
      if (!svg) return;
      // 난이도 아이콘: rect 3개 (막대그래프형)
      if (svg.querySelectorAll('rect').length === 3) {
        span.textContent = recipe.level || span.textContent;
      }
      // 시간 아이콘: circle + path (시계형)
      if (svg.querySelector('circle') && svg.querySelector('path')) {
        span.textContent = recipe.time || span.textContent;
      }
    });

    // 작성자
    var authorName = card.querySelector('.author-name');
    if (authorName && recipe.author) authorName.textContent = recipe.author;

    // 제목
    var title = card.querySelector('.recipe-card__title');
    if (title && recipe.title) title.textContent = recipe.title;

    // 설명
    var desc = card.querySelector('.recipe-card__desc');
    if (desc && recipe.subtitle) desc.textContent = recipe.subtitle;

    // 태그
    var tagsWrap = card.querySelector('.recipe-card__tags');
    if (tagsWrap && recipe.tags && recipe.tags.length) {
      tagsWrap.innerHTML = recipe.tags.map(function (t) {
        return '<span class="recipe-card__tag">' + t + '</span>';
      }).join('');
    }
  }

  // function init() {
  //   // .recipe-card 가 있는 모든 카드에 적용
  //   document.querySelectorAll('.recipe-card').forEach(function (card) {
  //     var id = card.getAttribute('data-recipe-id');
  //     if (!id) return;

  //     // recipe-data.js 데이터 동기화
  //     var recipe = (typeof RECIPES !== 'undefined') ? RECIPES[Number(id)] : null;
  //     if (recipe) syncCardData(card, recipe);

  //     // 카드 이미지 링크
  //     var imgLink = card.querySelector('.recipe-card__img-wrap a');
  //     if (imgLink) {
  //       imgLink.href = 'recipe-detail.html?id=' + id;
  //     }

  //     // 카드 제목 링크
  //     var titleLink = card.querySelector('.recipe-card__body a');
  //     if (titleLink) {
  //       titleLink.href = 'recipe-detail.html?id=' + id;
  //     }

  //     // 카드 전체 클릭 (링크 아닌 빈 영역 클릭시도 이동)
  //     card.style.cursor = 'pointer';
  //     card.addEventListener('click', function (e) {
  //       // 스크랩 버튼 클릭은 페이지 이동 X
  //       if (e.target.closest('.recipe-card__scrap')) return;
  //       // 링크 자체 클릭도 자연스럽게 동작
  //       if (e.target.closest('a')) return;
  //       window.location.href = 'recipe-detail.html?id=' + id;
  //     });
  //   });
  // }
  function init() {
  // 현재 페이지 상태 가져오기
  var params = new URLSearchParams(window.location.search);
  var currentD2 = params.get('d2') || 'all';
  var pageType = document.body.dataset.page || 'type';

  // .recipe-card 가 있는 모든 카드에 적용
  document.querySelectorAll('.recipe-card').forEach(function (card) {
    var id = card.getAttribute('data-recipe-id');
    if (!id) return;

    // recipe-data.js 데이터 동기화
    var recipe = (typeof RECIPES !== 'undefined') ? RECIPES[Number(id)] : null;
    if (recipe) syncCardData(card, recipe);

    // ✅ 상세페이지로 이동할 URL 생성 (핵심)
    var url = 'recipe-detail.html?id=' + id +
              '&from=' + pageType +
              '&d2=' + currentD2;

    // 카드 이미지 링크
    var imgLink = card.querySelector('.recipe-card__img-wrap a');
    if (imgLink) {
      imgLink.href = url;
    }

    // 카드 제목 링크
    var titleLink = card.querySelector('.recipe-card__body a');
    if (titleLink) {
      titleLink.href = url;
    }

    // 카드 전체 클릭 (링크 아닌 빈 영역 클릭시도 이동)
    card.style.cursor = 'pointer';
    card.addEventListener('click', function (e) {
      // 스크랩 버튼 클릭은 페이지 이동 X
      if (e.target.closest('.recipe-card__scrap')) return;
      // 링크 자체 클릭도 자연스럽게 동작
      if (e.target.closest('a')) return;

      // ✅ 여기 тоже 수정
      window.location.href = url;
    });
  });
}

  // DOM 준비 후 실행
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
