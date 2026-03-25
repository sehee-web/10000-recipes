/* ============================================
   new-recipe.js
   만개의 레시피 — 레시피 등록 페이지 스크립트
============================================ */

/* ── 상태 ── */
const WRITE_STATE = {
    currentStep: 0,
    totalSteps: 3,
    img: false,
    title: false,
    desc: false,
    type: false,
    ingr: false,
    mth: false,
    serve: false,
    time: false,
    level: false
};

/* ── 필수 키 목록 (진행률 계산) ── */
const WRITE_REQ_KEYS = ['img', 'title', 'desc', 'type', 'ingr', 'mth', 'serve', 'time', 'level'];

/* ========================================
   섹션 아코디언 토글
======================================== */
function writeToggleSec(secId) {
    const sec = document.getElementById(secId);
    if (!sec) return;
    sec.classList.toggle('is-open');
    const head = sec.querySelector('.write-section__head');
    if (head) {
        const expanded = sec.classList.contains('is-open');
        head.setAttribute('aria-expanded', expanded ? 'true' : 'false');
    }
}

/* ========================================
   대표 사진 업로드 시뮬레이션
======================================== */
function writeUploadImg() {
    WRITE_STATE.img = true;
    const drop = document.getElementById('write-img-drop');
    drop.classList.add('is-uploaded');
    drop.innerHTML = '<div style="width:100%;height:100%;background:linear-gradient(135deg,#DCEAD1,#74B243);display:flex;align-items:center;justify-content:center;"><svg width="32" height="32" viewBox="0 0 24 24" stroke="#5a8f32" fill="none" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3.75 21h16.5M12 3v1.5"/></svg></div>';
    document.getElementById('write-img-change').style.display = 'block';
    writeSec1Status();
    writeCalcProgress();
}

function writeRemoveImg() {
    WRITE_STATE.img = false;
    const drop = document.getElementById('write-img-drop');
    drop.classList.remove('is-uploaded');
    drop.innerHTML = `
        <svg class="write-img-drop__icon" viewBox="0 0 24 24" fill="none" stroke-width="1.5" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"/>
        </svg>
        <span class="write-img-drop__label">사진 업로드</span>
        <span class="write-img-drop__sub">JPG, PNG · 최대 10MB</span>`;
    document.getElementById('write-img-change').style.display = 'none';
    writeSec1Status();
    writeCalcProgress();
}

/* ========================================
   제목 / 소개 입력
======================================== */
function writeOnTitle(el) {
    document.getElementById('write-title-len').textContent = el.value.length;
    WRITE_STATE.title = el.value.trim().length > 0;
    writeSec1Status();
    writeCalcProgress();
}

function writeOnDesc(el) {
    document.getElementById('write-desc-len').textContent = el.value.length;
    WRITE_STATE.desc = el.value.trim().length > 0;
    writeSec1Status();
    writeCalcProgress();
}

/* ========================================
   영상 미리보기 (YouTube 썸네일 자동 로드)
======================================== */
function writePreviewVideo() {
    const url = document.getElementById('write-video-url').value.trim();
    if (!url) return;

    const videoId = writeExtractYouTubeId(url);
    const thumbEl = document.getElementById('write-video-thumb-img');
    const emptyEl = document.getElementById('write-video-thumb-empty');
    const infoEl  = document.getElementById('write-video-info');
    const titleEl = document.getElementById('write-video-title');
    const metaEl  = document.getElementById('write-video-meta');

    if (videoId) {
        const thumbUrl = 'https://img.youtube.com/vi/' + videoId + '/mqdefault.jpg';
        thumbEl.src = thumbUrl;
        thumbEl.style.display = 'block';
        emptyEl.style.display = 'none';
        titleEl.textContent = 'YouTube 영상';
        metaEl.textContent  = 'YouTube · ID: ' + videoId;
    } else {
        thumbEl.style.display = 'none';
        emptyEl.style.display = 'flex';
        titleEl.textContent = url;
        metaEl.textContent  = '영상 URL 등록됨';
    }

    infoEl.style.display = 'flex';
}

function writeRemoveVideo() {
    const thumbEl = document.getElementById('write-video-thumb-img');
    const emptyEl = document.getElementById('write-video-thumb-empty');
    const infoEl  = document.getElementById('write-video-info');

    thumbEl.src = '';
    thumbEl.style.display = 'none';
    emptyEl.style.display = 'flex';
    infoEl.style.display  = 'none';
    document.getElementById('write-video-url').value = '';
}

function writeExtractYouTubeId(url) {
    const patterns = [
        /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([a-zA-Z0-9_-]{11})/
    ];
    for (const p of patterns) {
        const m = url.match(p);
        if (m) return m[1];
    }
    return null;
}

/* ========================================
   카테고리 칩 선택
======================================== */
document.addEventListener('DOMContentLoaded', function () {

    document.querySelectorAll('.write-chip').forEach(function (chip) {
        chip.addEventListener('click', function () {
            const group = chip.dataset.group;
            document.querySelectorAll('.write-chip[data-group="' + group + '"]').forEach(function (c) {
                c.classList.remove('is-selected');
            });
            chip.classList.add('is-selected');

            if (group === 'type') WRITE_STATE.type = true;
            if (group === 'ingr') WRITE_STATE.ingr = true;
            if (group === 'mth')  WRITE_STATE.mth  = true;

            writeSec2Status();
            writeCalcProgress();
        });
    });

    /* ── 태그 입력 ── */
    const tagInput = document.getElementById('write-tag-input');
    if (tagInput) {
        tagInput.addEventListener('keydown', function (e) {
            if ((e.key === 'Enter' || e.key === ',') && tagInput.value.trim()) {
                e.preventDefault();
                const val = tagInput.value.replace(',', '').trim();
                const wrap = document.getElementById('write-tag-wrap');
                if (wrap.querySelectorAll('.write-tag').length >= 10) return;
                const tag = document.createElement('span');
                tag.className = 'write-tag';
                tag.innerHTML = val + ' <button type="button" class="write-tag__del" aria-label="태그 삭제">×</button>';
                tag.querySelector('.write-tag__del').addEventListener('click', function () {
                    tag.remove();
                    writeSec4Status();
                });
                wrap.insertBefore(tag, tagInput);
                tagInput.value = '';
                writeSec4Status();
            }
        });
    }

    /* ── 재료 그룹 추가 버튼 ── */
    const btnAddGroup = document.getElementById('write-btn-add-group');
    if (btnAddGroup) {
        btnAddGroup.addEventListener('click', writeAddIngredientGroup);
    }

    /* ── 재료 행 추가 / 삭제 이벤트 위임 ── */
    const ingrContainer = document.getElementById('write-ingr-groups');
    if (ingrContainer) {
        ingrContainer.addEventListener('click', function (e) {
            if (e.target.classList.contains('write-btn-add-row')) {
                const group = e.target.closest('.write-ingr-group');
                writeAddIngredientRow(group);
            }
            if (e.target.classList.contains('write-ingr-row__del')) {
                e.target.closest('.write-ingr-row').remove();
            }
            if (e.target.classList.contains('write-ingr-group__del')) {
                e.target.closest('.write-ingr-group').remove();
            }
        });
    }

    /* ── 요리 순서 추가 버튼 ── */
    const btnAddOrder = document.getElementById('write-btn-add-order');
    if (btnAddOrder) {
        btnAddOrder.addEventListener('click', writeAddOrderCard);
    }

    /* ── 요리 순서 삭제 이벤트 위임 ── */
    const orderList = document.getElementById('write-order-list');
    if (orderList) {
        orderList.addEventListener('click', function (e) {
            if (e.target.classList.contains('write-btn-del-order')) {
                e.target.closest('.write-order-card').remove();
                writeRenumberOrders();
            }
        });
    }

    /* ── 스테퍼 클릭 ── */
    document.querySelectorAll('.write-stepper__item').forEach(function (item) {
        item.addEventListener('click', function () {
            const step = parseInt(item.dataset.step, 10);
            if (step <= WRITE_STATE.currentStep) {
                writeGoToStep(step);
            }
        });
    });

    /* ── 다음/이전/공개 버튼 ── */
    document.getElementById('write-btn-next').addEventListener('click', function () {
        if (WRITE_STATE.currentStep < WRITE_STATE.totalSteps - 1) {
            writeGoToStep(WRITE_STATE.currentStep + 1);
        }
    });
    document.getElementById('write-btn-prev').addEventListener('click', function () {
        if (WRITE_STATE.currentStep > 0) {
            writeGoToStep(WRITE_STATE.currentStep - 1);
        }
    });
    document.getElementById('write-btn-publish').addEventListener('click', function () {
        alert('레시피가 공개되었습니다! 🎉');
    });

    /* ── 임시저장 ── */
    document.getElementById('btn-draft').addEventListener('click', function () {
        writeAutoSave();
    });

    /* ── 자동저장 (30초) ── */
    setInterval(writeAutoSave, 30000);

    /* ── 초기 진행률 계산 ── */
    writeCalcProgress();
});

/* ========================================
   단계 이동
======================================== */
function writeGoToStep(step) {
    const panels   = document.querySelectorAll('.write-panel');
    const stepItems = document.querySelectorAll('.write-stepper__item');

    panels[WRITE_STATE.currentStep].classList.remove('is-active');
    stepItems[WRITE_STATE.currentStep].classList.remove('is-active');
    if (step > WRITE_STATE.currentStep) {
        stepItems[WRITE_STATE.currentStep].classList.add('is-done');
    } else {
        stepItems[WRITE_STATE.currentStep].classList.remove('is-done');
    }

    WRITE_STATE.currentStep = step;
    panels[step].classList.add('is-active');
    stepItems[step].classList.add('is-active');

    const btnPrev    = document.getElementById('write-btn-prev');
    const btnNext    = document.getElementById('write-btn-next');
    const btnPublish = document.getElementById('write-btn-publish');

    btnPrev.style.display    = step > 0 ? '' : 'none';
    btnNext.style.display    = step < WRITE_STATE.totalSteps - 1 ? '' : 'none';
    btnPublish.style.display = step === WRITE_STATE.totalSteps - 1 ? '' : 'none';

    window.scrollTo({ top: 0, behavior: 'smooth' });
    writeCalcProgress();
}

/* ========================================
   진행률 계산
======================================== */
function writeCalcProgress() {
    WRITE_STATE.serve = !!document.getElementById('write-sel-serve').value;
    WRITE_STATE.time  = !!document.getElementById('write-sel-time').value;
    WRITE_STATE.level = !!document.getElementById('write-sel-level').value;

    const done = WRITE_REQ_KEYS.filter(function (k) { return WRITE_STATE[k]; }).length;
    const pct  = Math.round(done / WRITE_REQ_KEYS.length * 100);

    document.getElementById('write-pbar').style.width = pct + '%';

    const allDone = WRITE_REQ_KEYS.every(function (k) { return WRITE_STATE[k]; });
    const btnNext = document.getElementById('write-btn-next');
    const label   = document.getElementById('write-prog-label');

    if (WRITE_STATE.currentStep === 0) {
        btnNext.disabled = !allDone;
        label.textContent = allDone ? '모든 필수 항목 입력 완료!' : '필수 항목을 모두 입력해 주세요';
        if (allDone) {
            label.classList.add('is-complete');
        } else {
            label.classList.remove('is-complete');
        }
    } else {
        btnNext.disabled = false;
        label.textContent = '';
    }

    writeSec1Status();
    writeSec2Status();
    writeSec3Status();
}

/* ========================================
   섹션 상태 업데이트
======================================== */
function writeSec1Status() {
    const ok = WRITE_STATE.img && WRITE_STATE.title && WRITE_STATE.desc;
    const any = WRITE_STATE.img || WRITE_STATE.title || WRITE_STATE.desc;
    const el = document.getElementById('write-st-1');
    if (!el) return;
    if (ok) {
        el.textContent = '입력 완료';
        el.classList.add('is-done');
    } else if (any) {
        el.textContent = '일부 입력';
        el.classList.remove('is-done');
    } else {
        el.textContent = '미입력';
        el.classList.remove('is-done');
    }
}

function writeSec2Status() {
    const req = WRITE_STATE.type && WRITE_STATE.ingr && WRITE_STATE.mth;
    const any = WRITE_STATE.type || WRITE_STATE.ingr || WRITE_STATE.mth;
    const el = document.getElementById('write-st-2');
    if (!el) return;
    if (req) {
        el.textContent = '입력 완료';
        el.classList.add('is-done');
    } else if (any) {
        el.textContent = '일부 입력';
        el.classList.remove('is-done');
    } else {
        el.textContent = '미입력';
        el.classList.remove('is-done');
    }
}

function writeSec3Status() {
    const ok  = WRITE_STATE.serve && WRITE_STATE.time && WRITE_STATE.level;
    const any = WRITE_STATE.serve || WRITE_STATE.time || WRITE_STATE.level;
    const el = document.getElementById('write-st-3');
    if (!el) return;
    if (ok) {
        el.textContent = '입력 완료';
        el.classList.add('is-done');
    } else if (any) {
        el.textContent = '일부 입력';
        el.classList.remove('is-done');
    } else {
        el.textContent = '미입력';
        el.classList.remove('is-done');
    }
}

function writeSec4Status() {
    const cnt = document.getElementById('write-tag-wrap').querySelectorAll('.write-tag').length;
    const el  = document.getElementById('write-st-4');
    if (!el) return;
    if (cnt > 0) {
        el.textContent = cnt + '개 입력';
        el.classList.add('is-done');
    } else {
        el.textContent = '미입력';
        el.classList.remove('is-done');
    }
}

/* ========================================
   팁 토글
======================================== */
function writeTipToggle(btn) {
    const tipInput = btn.nextElementSibling;
    if (!tipInput) return;
    const isVisible = tipInput.style.display !== 'none';
    tipInput.style.display = isVisible ? 'none' : 'block';
}

/* ========================================
   재료 그룹 추가
======================================== */
function writeAddIngredientGroup() {
    const container = document.getElementById('write-ingr-groups');
    const addBtn    = document.getElementById('write-btn-add-group');
    const groupEl   = document.createElement('div');
    groupEl.className = 'write-ingr-group';
    groupEl.innerHTML = `
        <div class="write-ingr-group__head">
            <span class="write-ingr-group__drag" aria-hidden="true">⠿</span>
            <input type="text" class="write-ingr-group__name" placeholder="그룹명 (예: 양념)">
            <button type="button" class="write-ingr-group__del" aria-label="그룹 삭제">×</button>
        </div>
        <div class="write-ingr-rows">
            <div class="write-ingr-row">
                <input type="text" class="write-input write-ingr-row__name" placeholder="재료명">
                <input type="text" class="write-input write-ingr-row__qty" placeholder="수량">
                <select class="write-select write-ingr-row__unit">
                    <option value="">단위</option>
                    <option>g</option><option>ml</option><option>개</option>
                    <option>큰술</option><option>작은술</option><option>컵</option>
                    <option>줄기</option><option>적당량</option>
                </select>
                <button type="button" class="write-ingr-row__del" aria-label="재료 삭제">×</button>
            </div>
        </div>
        <button type="button" class="write-btn-add-row">+ 재료 추가</button>`;
    container.insertBefore(groupEl, addBtn);
}

/* ========================================
   재료 행 추가
======================================== */
function writeAddIngredientRow(groupEl) {
    const rows = groupEl.querySelector('.write-ingr-rows');
    const row  = document.createElement('div');
    row.className = 'write-ingr-row';
    row.innerHTML = `
        <input type="text" class="write-input write-ingr-row__name" placeholder="재료명">
        <input type="text" class="write-input write-ingr-row__qty" placeholder="수량">
        <select class="write-select write-ingr-row__unit">
            <option value="">단위</option>
            <option>g</option><option>ml</option><option>개</option>
            <option>큰술</option><option>작은술</option><option>컵</option>
            <option>줄기</option><option>적당량</option>
        </select>
        <button type="button" class="write-ingr-row__del" aria-label="재료 삭제">×</button>`;
    rows.appendChild(row);
}

/* ========================================
   요리 순서 카드 추가
======================================== */
function writeAddOrderCard() {
    const list     = document.getElementById('write-order-list');
    const addBtn   = document.getElementById('write-btn-add-order');
    const num      = list.querySelectorAll('.write-order-card').length + 1;
    const ordinals = ['첫', '두', '세', '네', '다섯', '여섯', '일곱', '여덟', '아홉', '열'];
    const label    = (ordinals[num - 1] || num) + ' 번째 순서';
    const card     = document.createElement('div');
    card.className = 'write-order-card';
    card.innerHTML = `
        <div class="write-order-card__head">
            <div class="write-order-num">${num}</div>
            <span class="write-order-card__title">${label}</span>
            <span class="write-order-drag" aria-hidden="true">⠿</span>
        </div>
        <div class="write-order-card__body">
            <textarea class="write-textarea write-order-textarea" placeholder="순서를 입력해 주세요."></textarea>
            <div class="write-order-imgs">
                <div class="write-order-img-slot" role="button" tabindex="0" aria-label="사진 추가">
                    <svg viewBox="0 0 24 24" fill="none" stroke-width="1.5" style="width:20px;height:20px;stroke:#999;">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316Z"/>
                        <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0z"/>
                    </svg>
                </div>
                <button type="button" class="write-order-img-add" aria-label="사진 추가">+</button>
            </div>
            <button type="button" class="write-tip-toggle" onclick="writeTipToggle(this)">팁 추가 (선택)</button>
            <input type="text" class="write-input write-tip-input" placeholder="요리 팁을 입력하세요" style="display:none;">
        </div>
        <div class="write-order-card__foot">
            <button type="button" class="write-btn-del-order">삭제</button>
        </div>`;
    list.insertBefore(card, addBtn);
}

/* ========================================
   요리 순서 번호 재정렬
======================================== */
function writeRenumberOrders() {
    const cards    = document.querySelectorAll('#write-order-list .write-order-card');
    const ordinals = ['첫', '두', '세', '네', '다섯', '여섯', '일곱', '여덟', '아홉', '열'];
    cards.forEach(function (card, i) {
        const numEl   = card.querySelector('.write-order-num');
        const titleEl = card.querySelector('.write-order-card__title');
        if (numEl)   numEl.textContent   = i + 1;
        if (titleEl) titleEl.textContent = (ordinals[i] || (i + 1)) + ' 번째 순서';
    });
}

/* ========================================
   자동저장
======================================== */
function writeAutoSave() {
    const statusEl = document.getElementById('autosave-status');
    if (!statusEl) return;
    const now  = new Date();
    const time = now.getHours() + ':' + String(now.getMinutes()).padStart(2, '0');
    statusEl.innerHTML = '<span class="write-autosave-dot"></span>자동저장됨 ' + time;
}
