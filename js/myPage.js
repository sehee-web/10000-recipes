/* ============================================
   myPage.js
   만개의 레시피 — 마이페이지 스크립트
============================================ */

/* ── 더미 유저 데이터 ── */
var USER = {
    name: '만개의레시피',
    email: '10000-recipes@example.com',
    nickname: '만개의레시피'
};

/* ── 더미 레시피 데이터 ── */
var MY_RECIPES = [
    { id: 1, title: '봄나물 시금치 된장국', date: '2026.04.01', status: 'public', img: '' },
    { id: 2, title: '냉이 된장찌개',        date: '2026.03.22', status: 'public', img: '' },
    { id: 3, title: '달래 간장 비빔밥',     date: '2026.03.10', status: 'draft',  img: '' }
];

/* ── 더미 문의 데이터 ── */
var MY_QNA = [
    { id: 1, title: '레시피 등록 시 사진이 업로드가 안돼요',        date: '2026.03.15', status: 'done' },
    { id: 2, title: '공모전 참여 레시피 수정이 안되는 것 같아요',   date: '2026.04.02', status: 'wait' }
];

/* ── 유효한 탭 목록 ── */
var VALID_TABS = ['myRecipe', 'qna', 'edit-profile'];
var DEFAULT_TAB = 'myRecipe';

/* ── 탭 전환 ── */
function goToTab(tab) {
    if (VALID_TABS.indexOf(tab) === -1) tab = DEFAULT_TAB;

    /* 네비 활성화 */
    document.querySelectorAll('.mypage-nav-item').forEach(function(item) {
        if (item.dataset.tab === tab) {
            item.classList.add('is-active');
        } else {
            item.classList.remove('is-active');
        }
    });

    /* 패널 표시 */
    document.querySelectorAll('.mypage-panel').forEach(function(panel) {
        panel.classList.remove('is-active');
    });
    var target = document.getElementById('panel-' + tab);
    if (target) target.classList.add('is-active');

    /* URL 히스토리 */
    history.pushState({ tab: tab }, '', '?tab=' + tab);
}

/* ── 레시피 렌더링 ── */
function renderRecipes() {
    var countEl = document.getElementById('recipe-count');
    var grid    = document.getElementById('recipe-grid');
    var hasEl   = document.getElementById('recipe-has');
    var emptyEl = document.getElementById('recipe-empty');

    if (!grid) return;

    if (MY_RECIPES.length === 0) {
        hasEl.style.display   = 'none';
        emptyEl.style.display = '';
        if (countEl) countEl.textContent = '총 0개';
        return;
    }

    hasEl.style.display   = '';
    emptyEl.style.display = 'none';
    if (countEl) countEl.textContent = '총 ' + MY_RECIPES.length + '개';

    var html = '';
    MY_RECIPES.forEach(function(r) {
        var badgeClass = r.status === 'public' ? 'is-public' : 'is-draft';
        var badgeText  = r.status === 'public' ? '공개' : '임시저장';
        var thumb = r.img
            ? '<img src="' + r.img + '" alt="' + r.title + '">'
            : '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#ccc" stroke-width="1.5"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="M21 15l-5-5L5 21"/></svg>';

        html += '<a href="coming-soon.html" class="mypage-recipe-card">';
        html += '<div class="mypage-recipe-thumb">' + thumb + '</div>';
        html += '<div class="mypage-recipe-meta">';
        html += '<span class="mypage-recipe-badge ' + badgeClass + '">' + badgeText + '</span>';
        html += '<p class="mypage-recipe-name">' + r.title + '</p>';
        html += '<p class="mypage-recipe-date">' + r.date + '</p>';
        html += '</div></a>';
    });

    grid.innerHTML = html;
}

/* ── 문의 내역 렌더링 ── */
function renderQna() {
    var list    = document.getElementById('qna-list');
    var countEl = document.getElementById('qna-count');
    if (!list) return;

    if (countEl) countEl.textContent = MY_QNA.length + '건';

    if (MY_QNA.length === 0) {
        list.innerHTML = '<p style="font-size:13px;color:#aaa;text-align:center;padding:24px 0;">문의 내역이 없습니다.</p>';
        return;
    }

    var html = '';
    MY_QNA.forEach(function(q) {
        var badgeClass = q.status === 'done' ? 'is-done' : 'is-wait';
        var badgeText  = q.status === 'done' ? '답변완료' : '답변대기';
        html += '<div class="mypage-qna-item">';
        html += '<span class="mypage-qna-badge ' + badgeClass + '">' + badgeText + '</span>';
        html += '<span class="mypage-qna-title">' + q.title + '</span>';
        html += '<span class="mypage-qna-date">' + q.date + '</span>';
        html += '</div>';
    });

    list.innerHTML = html;
}

/* ── 유저 정보 렌더링 ── */
function renderUserInfo() {
    var nameEl     = document.getElementById('profile-name');
    var emailEl    = document.getElementById('profile-email');
    var infoEmail  = document.getElementById('info-email');
    var infoNick   = document.getElementById('info-nickname');

    if (nameEl)    nameEl.textContent    = USER.nickname;
    if (emailEl)   emailEl.textContent   = USER.email;
    if (infoEmail) infoEmail.textContent = USER.email;
    if (infoNick)  infoNick.textContent  = USER.nickname;
}

/* ── 문의 등록 버튼 ── */
function bindQnaSubmit() {
    var btn = document.getElementById('qna-submit');
    if (!btn) return;
    btn.addEventListener('click', function() {
        var title   = document.getElementById('qna-title').value.trim();
        var content = document.getElementById('qna-content').value.trim();
        if (!title || !content) {
            alert('제목과 내용을 입력해 주세요.');
            return;
        }
        /* 더미 등록 */
        MY_QNA.unshift({ id: Date.now(), title: title, date: new Date().toLocaleDateString('ko-KR').replace(/\. /g, '.').replace('.', ''), status: 'wait' });
        document.getElementById('qna-title').value   = '';
        document.getElementById('qna-content').value = '';
        renderQna();
        alert('문의가 등록되었습니다.');
    });
}

/* ── 회원정보 수정 버튼 ── */
function bindEditButtons() {
    var btnEmail = document.getElementById('btn-edit-email');
    if (btnEmail) {
        btnEmail.addEventListener('click', function() {
            var val = prompt('새 이메일을 입력해 주세요.', USER.email);
            if (val && val.trim()) {
                USER.email = val.trim();
                renderUserInfo();
            }
        });
    }

    var btnNick = document.getElementById('btn-edit-nickname');
    if (btnNick) {
        btnNick.addEventListener('click', function() {
            var val = prompt('새 닉네임을 입력해 주세요.', USER.nickname);
            if (val && val.trim()) {
                USER.nickname = val.trim();
                renderUserInfo();
            }
        });
    }

    var btnWithdraw = document.getElementById('btn-withdraw');
    if (btnWithdraw) {
        btnWithdraw.addEventListener('click', function() {
            if (confirm('정말 탈퇴하시겠습니까? 모든 데이터가 삭제됩니다.')) {
                alert('회원 탈퇴가 완료되었습니다.');
                location.href = 'index.html';
            }
        });
    }
}

/* ── 사이드바 클릭 ── */
function bindNav() {
    document.querySelectorAll('.mypage-nav-item').forEach(function(item) {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            goToTab(item.dataset.tab);
        });
    });
}

/* ── 뒤로가기 대응 ── */
function bindPopstate() {
    window.addEventListener('popstate', function(e) {
        var tab = (e.state && e.state.tab) ? e.state.tab : DEFAULT_TAB;
        goToTab(tab);
    });
}

/* ── 초기화 ── */
document.addEventListener('DOMContentLoaded', function() {
    var params  = new URLSearchParams(window.location.search);
    var initTab = params.get('tab') || DEFAULT_TAB;

    renderUserInfo();
    renderRecipes();
    renderQna();
    bindQnaSubmit();
    bindEditButtons();
    bindNav();
    bindPopstate();

    goToTab(initTab);
    history.replaceState({ tab: initTab }, '', '?tab=' + initTab);
});
