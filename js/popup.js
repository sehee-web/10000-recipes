/* 포트폴리오 안내 팝업*/
(function () {

    const STORAGE_KEY = 'portfolio_popup_hidden_date';

    /* 오늘 날짜 문자열 (YYYY-MM-DD) */
    function getTodayStr() {
        const d  = new Date();
        const mm = String(d.getMonth() + 1).padStart(2, '0');
        const dd = String(d.getDate()).padStart(2, '0');
        return `${d.getFullYear()}-${mm}-${dd}`;
    }

    if (localStorage.getItem(STORAGE_KEY) === getTodayStr()) return;


    /* 팝업 HTML 생성 */
    const overlay = document.createElement('div');
    overlay.className = 'popup-overlay';
    overlay.setAttribute('role', 'dialog');
    overlay.setAttribute('aria-modal', 'true');
    overlay.setAttribute('aria-labelledby', 'popup-title');

    overlay.innerHTML = [
        '<div class="popup">',
        '  <div class="popup__body">',
        '    <p class="popup__icon" aria-hidden="true">📌</p>',
        '    <h2 class="popup__title" id="popup-title">포트폴리오 안내</h2>',
        '    <p class="popup__message">',
        '      이 사이트는 상업적 목적이 아닌<br>',
        '      <b>포트폴리오 용도</b>로 제작된 사이트입니다.<br>',
        '      사용된 이미지는 실제 서비스를<br>',
        '       참고하여 재구성하였습니다.',
        '    </p>',
        '  </div>',
        '  <hr class="popup__divider">',
        '  <div class="popup__footer">',
        '    <label class="popup__checkbox-wrap">',
        '      <input class="popup__checkbox-input" type="checkbox" id="popup-no-show">',
        '      <span class="popup__checkbox-box" aria-hidden="true"></span>',
        '      <span class="popup__checkbox-label">오늘 하루 보지 않기</span>',
        '    </label>',
        '    <button class="popup__confirm-btn" type="button" id="popup-confirm-btn">확인</button>',
        '  </div>',
        '</div>'
    ].join('\n');

    document.body.appendChild(overlay);
    /* 팝업 닫기 */
    function closePopup() {
        if (overlay.querySelector('#popup-no-show').checked) {
            localStorage.setItem(STORAGE_KEY, getTodayStr());
        }
        overlay.classList.add('is-closing');
        overlay.addEventListener('animationend', function () {
            overlay.remove();
        }, { once: true });
    }

    overlay.querySelector('#popup-confirm-btn').addEventListener('click', closePopup);

    overlay.addEventListener('click', function (e) {
        if (e.target === overlay) closePopup();
    });

    document.addEventListener('keydown', function onEsc(e) {
        if (e.key === 'Escape') {
            closePopup();
            document.removeEventListener('keydown', onEsc);
        }
    });

}());
