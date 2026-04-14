/* ============================================
   community-faq.js
   만개의 레시피 — 자주 묻는 질문 페이지 스크립트
============================================ */

var FAQ_DATA = [
    {
        q: '레시피를 등록하려면 어떻게 해야 하나요?',
        a: '로그인 후 상단 메뉴의 \'레시피 등록\' 버튼을 클릭하면 등록 페이지로 이동합니다. 대표 사진, 레시피 제목, 재료, 요리 순서를 입력한 뒤 \'공개\' 버튼을 누르면 등록이 완료됩니다. 비회원은 레시피 등록이 불가하니 먼저 회원가입을 진행해 주세요.'
    },
    {
        q: '레시피를 수정하거나 삭제할 수 있나요?',
        a: '마이페이지 → 내 레시피에서 등록한 레시피를 수정하거나 삭제할 수 있습니다. 단, 공모전에 참여된 레시피는 이벤트 기간 중에는 삭제가 제한될 수 있습니다.'
    },
    {
        q: '셰프 구독은 어떻게 하나요?',
        a: '셰프 페이지에서 원하는 셰프의 \'구독하기\' 버튼을 클릭하면 구독이 완료됩니다. 구독한 셰프가 새 레시피를 등록하면 알림을 받을 수 있으며, 마이페이지에서 구독 목록을 확인할 수 있습니다.'
    },
    {
        q: '이벤트 공모전에 참여하는 방법은?',
        a: '이벤트 페이지에서 진행 중인 공모전을 확인한 뒤, 해당 공모전 상세 페이지의 \'공모전 참여하기\' 버튼을 클릭하면 레시피 등록 페이지로 이동합니다. 공모전 주제에 맞는 레시피를 등록하면 자동으로 참여가 완료됩니다.'
    },
    {
        q: '비밀번호를 잊어버렸을 때 어떻게 하나요?',
        a: '로그인 페이지에서 \'비밀번호 찾기\'를 클릭하면 가입 시 등록한 이메일로 재설정 링크가 발송됩니다. 이메일을 받지 못한 경우 스팸함을 확인하거나 고객센터(help@10000recipe.com)로 문의해 주세요.'
    }
];

var ARROW_SVG = '<svg class="faq-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7"/></svg>';

/* ── 렌더링 ── */
function renderFaq() {
    var list = document.getElementById('faq-list');
    if (!list) return;

    var html = '';

    FAQ_DATA.forEach(function(item, i) {
        html += '<div class="faq-item" id="faq-item-' + i + '">';
        html += '<button class="faq-q" aria-expanded="false" aria-controls="faq-a-' + i + '">';
        html += '<span class="faq-q-mark">Q</span>';
        html += '<span class="faq-q-text">' + item.q + '</span>';
        html += ARROW_SVG;
        html += '</button>';
        html += '<div class="faq-a" id="faq-a-' + i + '" role="region">';
        html += '<p class="faq-a-inner">' + item.a + '</p>';
        html += '</div>';
        html += '</div>';
    });

    list.innerHTML = html;
}

/* ── 아코디언 이벤트 ── */
function bindFaqEvents() {
    var list = document.getElementById('faq-list');
    if (!list) return;

    list.addEventListener('click', function(e) {
        var btn = e.target.closest('.faq-q');
        if (!btn) return;

        var item     = btn.closest('.faq-item');
        var isOpen   = item.classList.contains('is-open');

        /* 다른 항목 모두 닫기 */
        document.querySelectorAll('.faq-item.is-open').forEach(function(el) {
            el.classList.remove('is-open');
            el.querySelector('.faq-q').setAttribute('aria-expanded', 'false');
        });

        /* 클릭한 항목 토글 */
        if (!isOpen) {
            item.classList.add('is-open');
            btn.setAttribute('aria-expanded', 'true');
        }
    });
}

/* ── 초기화 ── */
document.addEventListener('DOMContentLoaded', function() {
    renderFaq();
    bindFaqEvents();
});
