/* ============================================
   event-detail.js
   만개의 레시피 — 이벤트 상세 페이지 스크립트
   URL 파라미터: event-detail.html?id=1
============================================ */

/* ── 이벤트 데이터 ── */
const EVENT_DATA = {
    1: {
        status: 'end',                          /* 'ing' | 'end' */
        badge: '종료',
        titleMain: '제 191회 만개의 레시피 공모전',
        titleSub: "연말파티 손님 접대",
        period: '2026.01.01 – 2026.01.31',
        announceDate: '2026.02.02',
        participants: 181,
        bannerImg: 'images_10000_recipes/event_img/event_img1.png',
        winner: '대상 (1명) : 초록잎사귀님\n우수상 (3명) : 주부9단님, 요리왕님, 밥맛없어님\n장려상 (5명) : 초보쿡님 외 4명',
        desc: '안녕하세요~만개의 레시피입니다.\n설레는 연말을 맞아 특별한 요리 축제가 시작됩니다. 12월은 사랑하는 사람들과 함께하는 홈 파티로 가득한 달입니다.\n복잡한 코스 요리 대신 맛과 비주얼을 모두 사로잡는 손님 접대용 한 그릇 요리를 주제로 모두에게 잊지 못할 추억을 선사할 여러분의 레시피를 알려주세요.\n여러분의 창의적인 요리 아이디어와 특별한 레시피를 만개의레시피와 함께 공유해주세요!',
        selection: [
            '<span style="font-size: 16px;">경 품 : 신세계 상품권</span> <span style="color: #ff0000ff; font-size: 16px;font-weight: 600;">50,000원권</span>',
            '<span style="font-size: 16px;">당첨인원 : 총</span> <span style=" font-size: 16px; color: #ff0000ff; font-weight: 600;">6</span><span style="font-size: 16px;">명</span>',
            '주제에 맞는 레시피의 리뷰와 의견, 스크랩 수, 재료계량, 과정 설명, 과정 이미지가 잘 된 레시피와 아이디어가 돋보이는 레시피 대상으로 취합하여 선정합니다.',
            '<span style="color: #ff0000ff; font-weight: 600; background-color: #ffee00ff; padding:1px 6px;">레시피 제목 앞머리에 ‘[연말 파티]’문구 포함 되어야 참여 인정.</span>.',
            '해당 월에 수상하신 경우, 해당 월에 진행하는 모든 공모전의 수상 대상에서 제외되며, 해당 월 다음 월에 진행하는 공모전부터 수상대상에 포함됩니다.'
        ],
        notices: [
            '공모전 요리 주제에 맞는 레시피를 등록해주세요.',
            '전문레시피(직접등록/블로그 편집)만 응모 가능합니다.\n(※ 응모일 이전에 등록된 레시피는 제외)',
            '주제와 맞지 않는 레시피는 수상 목록에서 제외될 수 있습니다.',
            '공모전에 응모한 레시피는 재가공하여 만개의레시피 영상 컨텐츠로 제작될 수 있습니다.',
            '당첨자 발표는 따로 SMS를 전송하지 않습니다. 당첨자 발표일을 확인하시고 이벤트 페이지에서 확인하시기 바랍니다.',
            'TV레시피는 수상대상에서 제외됩니다.',
            '본 공모전의 당첨 상품은 기타 소득세 신고대상입니다.'
        ],
        recipes: [
            { title: '마라탕 만들기',    author: '승승맘', likes: 142, img: '' },
            { title: '전복 요리', author: '요리왕',   likes: 98,  img: '' },
            { title: '에그인헬 샥슈카', author: '밥맛없어', likes: 76,  img: '' },
            { title: '지중해식 샐러드', author: '초보쿡',   likes: 54,  img: '' }
        ],
        comments: [
            { name: '초록잎사귀', text: '레시피 너무 좋아요! 꼭 도전해볼게요', date: '2025.04.03', likes: 3 },
            { name: '주부9단',   text: '참여 완료했습니다! 당첨되길 기원해요',       date: '2025.04.05', likes: 1 }
        ],
        prev: { id: null,  title: '이전 이벤트 없음', date: '' },
        next: { id: 2,     title: '제 193회 만개의 레시피 공모전', date: '2026.04.01' }
    },
    2: {
        status: 'end',                          /* 'ing' | 'end' */
        badge: '종료',
        titleMain: '제 192회 만개의 레시피 공모전',
        titleSub: "제철 채소 시금치로 맛있는 요리를 알려주세요",
        period: '2026.02.01 – 2026.02.28',
        announceDate: '2026.03.02',
        participants: 181,
        bannerImg: 'images_10000_recipes/event_img/event_img2.png',
        winner: '대상 (1명) : 초록잎사귀님\n우수상 (3명) : 주부9단님, 요리왕님, 밥맛없어님\n장려상 (5명) : 초보쿡님 외 4명',
        desc: '안녕하세요~만개의 레시피입니다.\n2026 병오년 새해가 밝았어요. 지난해는 다 잊어버리고 새로운 마음으로 2026년을 맞이하면 좋겠어요.\n2026년은 붉은 말의 에너지가 가득한 해라고 하네요. 우리도 붉은 말의 기운을 받아 붉은(매운) 요리 해보는건 어떨까요?? 나만의 붉은색(매운) 요리를 알려주세요.\n여러분의 창의적인 요리 아이디어와 특별한 레시피를 만개의레시피와 함께 공유해주세요!',
        selection: [
            '<span style="font-size: 16px;">경 품 : 신세계 상품권</span> <span style="color: #ff0000ff; font-size: 16px;font-weight: 600;">50,000원권</span>',
            '<span style="font-size: 16px;">당첨인원 : 총</span> <span style=" font-size: 16px; color: #ff0000ff; font-weight: 600;">6</span><span style="font-size: 16px;">명</span>',
            '주제에 맞는 레시피의 리뷰와 의견, 스크랩 수, 재료계량, 과정 설명, 과정 이미지가 잘 된 레시피와 아이디어가 돋보이는 레시피 대상으로 취합하여 선정합니다.',
            '<span style="color: #ff0000ff; font-weight: 600; background-color: #ffee00ff; padding:1px 6px;"> 레시피 제목 앞머리에 ‘[붉은요리]’ 또는 [매운요리] 문구 포함 되어야 참여 인정.</span>.',
            '해당 월에 수상하신 경우, 해당 월에 진행하는 모든 공모전의 수상 대상에서 제외되며, 해당 월 다음 월에 진행하는 공모전부터 수상대상에 포함됩니다.'
        ],
        notices: [
            '공모전 요리 주제에 맞는 레시피를 등록해주세요.',
            '전문레시피(직접등록/블로그 편집)만 응모 가능합니다.\n(※ 응모일 이전에 등록된 레시피는 제외)',
            '주제와 맞지 않는 레시피는 수상 목록에서 제외될 수 있습니다.',
            '공모전에 응모한 레시피는 재가공하여 만개의레시피 영상 컨텐츠로 제작될 수 있습니다.',
            '당첨자 발표는 따로 SMS를 전송하지 않습니다. 당첨자 발표일을 확인하시고 이벤트 페이지에서 확인하시기 바랍니다.',
            'TV레시피는 수상대상에서 제외됩니다.',
            '본 공모전의 당첨 상품은 기타 소득세 신고대상입니다.'
        ],
        recipes: [
            { title: '감자 고추장 찌개',    author: '짱구엄마', likes: 142, img: '' },
            { title: '토마토 시금치 스파게티', author: '요리왕',   likes: 98,  img: '' },
            { title: '토마토스튜', author: '밥맛없어', likes: 76,  img: '' },
            { title: '냉이 김치전', author: '초보쿡',   likes: 54,  img: '' }
        ],
        comments: [
            { name: '초록잎사귀', text: '레시피 너무 좋아요! 꼭 도전해볼게요', date: '2025.04.03', likes: 3 },
            { name: '주부9단',   text: '참여 완료했습니다! 당첨되길 기원해요',       date: '2025.04.05', likes: 1 }
        ],
        prev: { id: 1,  title: '제 191회 만개의 레시피 공모전', date: '2026.01.01' },
        next: { id: 3,     title: '제 193회 만개의 레시피 공모전', date: '2026.03.01' }
    },
    3: {
        status: 'ing',                          /* 'ing' | 'end' */
        badge: '진행중',
        titleMain: '제 193회 만개의 레시피 공모전',
        titleSub: "제철 채소 시금치로 맛있는 요리를 알려주세요",
        period: '2026.03.01 – 2026.03.31',
        announceDate: '2026.04.02',
        participants: 181,
        bannerImg: 'images_10000_recipes/event_img/event_img3.png',
        winner: '대상 (1명) : 초록잎사귀님\n우수상 (3명) : 주부9단님, 요리왕님, 밥맛없어님\n장려상 (5명) : 초보쿡님 외 4명',
        desc: '안녕하세요~만개의 레시피입니다.\n아직 추위가 기승을 부리고있는 2월이네요. 추운 겨울을 버티고 가장 먼저 초록을 틔우고 뿌리 끝까지 달콤함을 머금은 2월의 시금치를 아시나요??\n지금 아니면 맛볼 수 없는 꿀맛 시금치의 화려한 변신! 여러분의 독창적인 시금치 레시피를 식탁 위에 미리 봄을 불러와 주세요.\n여러분의 창의적인 요리 아이디어와 특별한 레시피를 만개의레시피와 함께 공유해주세요!',
        selection: [
            '<span style="font-size: 16px;">경 품 : 신세계 상품권</span> <span style="color: #ff0000ff; font-size: 16px;font-weight: 600;">50,000원권</span>',
            '<span style="font-size: 16px;">당첨인원 : 총</span> <span style=" font-size: 16px; color: #ff0000ff; font-weight: 600;">6</span><span style="font-size: 16px;">명</span>',
            '주제에 맞는 레시피의 리뷰와 의견, 스크랩 수, 재료계량, 과정 설명, 과정 이미지가 잘 된 레시피와 아이디어가 돋보이는 레시피 대상으로 취합하여 선정합니다.',
            '<span style="color: #ff0000ff; font-weight: 600; background-color: #ffee00ff; padding:1px 6px;">레시피 제목에 ‘시금치’ 또는 ‘포항초’, 또는 시금치연상 문구 포함 되어야 참여 인정.</span>.',
            '해당 월에 수상하신 경우, 해당 월에 진행하는 모든 공모전의 수상 대상에서 제외되며, 해당 월 다음 월에 진행하는 공모전부터 수상대상에 포함됩니다.'
        ],
        notices: [
            '공모전 요리 주제에 맞는 레시피를 등록해주세요.',
            '전문레시피(직접등록/블로그 편집)만 응모 가능합니다.\n(※ 응모일 이전에 등록된 레시피는 제외)',
            '주제와 맞지 않는 레시피는 수상 목록에서 제외될 수 있습니다.',
            '공모전에 응모한 레시피는 재가공하여 만개의레시피 영상 컨텐츠로 제작될 수 있습니다.',
            '당첨자 발표는 따로 SMS를 전송하지 않습니다. 당첨자 발표일을 확인하시고 이벤트 페이지에서 확인하시기 바랍니다.',
            'TV레시피는 수상대상에서 제외됩니다.',
            '본 공모전의 당첨 상품은 기타 소득세 신고대상입니다.'
        ],
        recipes: [
            { title: '시금치 된장국',    author: '짱구엄마', likes: 142, img: '' },
            { title: '시금치 크림파스타', author: '요리왕',   likes: 98,  img: '' },
            { title: '시금치 나물 무침', author: '밥맛없어', likes: 76,  img: '' },
            { title: '시금치 달걀볶음', author: '초보쿡',   likes: 54,  img: '' }
        ],
        comments: [
            { name: '초록잎사귀', text: '시금치 레시피 너무 좋아요! 꼭 도전해볼게요', date: '2025.04.03', likes: 3 },
            { name: '주부9단',   text: '참여 완료했습니다! 당첨되길 기원해요',       date: '2025.04.05', likes: 1 }
        ],
        prev: { id: 2,  title: '제 192회 만개의 레시피 공모전', date: '2026.02.01' },
        next: { id: 4,     title: '제 194회 만개의 레시피 공모전', date: '2026.04.01' }
    },
    4: {
        status: 'ing',
        badge: '진행중',
        titleMain: '제 194회 만개의 레시피 공모전',
        titleSub: "내 몸을 깨우는 '봄나물 비타민' 레시피를 알려주세요",
        period: '2026.04.01 – 2026.05.15',
        announceDate: '2026.05.22',
        participants: 181,
        bannerImg: 'images_10000_recipes/event_img/event_img4.png',
        winner: null,
        desc: '안녕하세요. 만개의 레시피입니다.\n벌써 3월의 시작이네요. 나른한 봄날, 당신의 식탁 위로 찾아온 초록빛 활력!\n겨울을 이겨내고 땅속 영양을 듬뿍 머금은 봄나물은 \'천연 비타민\'과 같아요. 춘곤증으로 무거운 몸과 마음을 깨워줄 봄나물(냉이, 달래, 쑥, 미나리) 요리 어떠신가요?\n여러분의 창의적인 요리 아이디어와 특별한 레시피를 만개의레시피와 함께 공유해주세요!',
        selection: [
            '<span style="font-size: 16px;">경 품 : 신세계 상품권</span> <span style="color: #ff0000ff; font-size: 16px;font-weight: 600;">50,000원권</span>',
            '<span style="font-size: 16px;">당첨인원 : 총</span> <span style=" font-size: 16px; color: #ff0000ff; font-weight: 600;">6</span><span style="font-size: 16px;">명</span>',
            '주제에 맞는 레시피의 리뷰와 의견, 스크랩 수, 재료계량, 과정 설명, 과정 이미지가 잘 된 레시피와 아이디어가 돋보이는 레시피 대상으로 취합하여 선정합니다.',
            '<span style="color: #ff0000ff; font-weight: 600; background-color: #ffee00ff; padding:1px 6px;">레시피 제목에 \'냉이\' 또는 \'달래\', \'쑥\', \'미나리\' 또는 봄나물 연상 문구 포함 되어야 참여 인정</span>.',
            '해당 월에 수상하신 경우, 해당 월에 진행하는 모든 공모전의 수상 대상에서 제외되며, 해당 월 다음 월에 진행하는 공모전부터 수상대상에 포함됩니다.'
        ],
        notices: [
            '공모전 요리 주제에 맞는 레시피를 등록해주세요.',
            '전문레시피(직접등록/블로그 편집)만 응모 가능합니다.\n<span style=" color: #ff0000ff; font-weight: 600;">(※ 응모일 이전에 등록된 레시피는 제외)</span>',
            '주제와 맞지 않는 레시피는 수상 목록에서 제외될 수 있습니다.',
            '공모전에 응모한 레시피는 재가공하여 만개의레시피 영상 컨텐츠로 제작될 수 있습니다.',
            '당첨자 발표는 따로 SMS를 전송하지 않습니다. 당첨자 발표일을 확인하시고 이벤트 페이지에서 확인하시기 바랍니다.',
            '<span style="color: #ff0000ff; font-weight: 600;">TV레시피는 수상대상에서 제외됩니다.</span>',
            '<span style="color: #ff0000ff; font-weight: 600;">본 공모전의 당첨 상품은 기타 소득세 신고대상입니다.</span>'
        ],
        recipes: [
            { title: '냉이 된장국',    author: '봄봄봄', likes: 87, img: '' },
            { title: '달래 간장 비빔밥', author: '밥먹자', likes: 64, img: '' },
            { title: '쑥 버터구이',    author: '요리고수', likes: 51, img: '' },
            { title: '미나리 잡채',    author: '주부9단', likes: 39, img: '' }
        ],
        comments: [
            { name: '봄나물러버', text: '냉이 된장국 정말 맛있어 보여요! 참여해볼게요', date: '2026.04.02', likes: 5 },
            { name: '초록주방',  text: '봄나물 레시피 너무 좋아요. 꼭 도전할게요!',   date: '2026.04.04', likes: 2 }
        ],
        prev: { id: 3,    title: '제 193회 만개의 레시피 공모전', date: '2025.03.01' },
        next: { id: null, title: '다음 이벤트 없음', date: '' }
    },
};

/* ── 유틸: 줄바꿈 → <br> ── */
function nl2br(str) {
    return str.replace(/\n/g, '<br>');
}

/* ── 유틸: 이미지 플레이스홀더 SVG ── */
function placeholderSVG() {
    return `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
        <rect x="3" y="3" width="18" height="18" rx="2"/>
        <circle cx="8.5" cy="8.5" r="1.5"/>
        <path d="M21 15l-5-5L5 21"/>
    </svg>`;
}

/* ── 렌더링 ── */
function renderEvent(data) {

    /* ── 페이지 타이틀 ── */
    document.title = data.titleMain + ' | 만개의 레시피';

    /* ── 브레드크럼 ── */
    document.getElementById('breadcrumb-title').textContent = data.titleMain;

    /* ── 콘텐츠 HTML 조립 ── */
    var html = '';

    /* 배너 */
    var bannerImg = data.bannerImg
        ? '<img src="' + data.bannerImg + '" alt="' + data.titleMain + '" style="width:100%;height:100%;object-fit:cover;">'
        : '<div class="banner-area-inner"><div class="banner-placeholder">' +
          '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="M21 15l-5-5L5 21"/></svg>' +
          '</div><span class="banner-label">이벤트 대표 이미지</span></div>';

    html += '<div class="section">';
    html += '<div class="sec-body" style="padding:1rem">';
    html += '<div class="banner-area">' + bannerImg + '<span class="banner-badge">' + data.badge + '</span></div>';
    html += '<p class="ev-title">' + data.titleMain + '<br>' + data.titleSub + '</p>';
    html += '<p class="ev-sub">' + data.period + ' · 참여자 <span class="ev-participants">' + data.participants + '</span>명</p>';
    html += '</div></div>';

    /* 당첨자 발표 — 종료 이벤트만 표시 */
    if (data.status === 'end' && data.winner) {
        html += '<div class="section">';
        html += '<div class="sec-head"><div class="sec-head-bar"></div><span class="sec-title">당첨자 발표</span></div>';
        html += '<div class="sec-body"><p class="desc-text">' + nl2br(data.winner) + '</p></div>';
        html += '</div>';
    }

    /* 이벤트 설명 */
    html += '<div class="section">';
    html += '<div class="sec-head"><div class="sec-head-bar"></div><span class="sec-title">이벤트 설명</span></div>';
    html += '<div class="sec-body"><p class="desc-text">' + nl2br(data.desc) + '</p></div>';
    html += '</div>';

    /* 기간 */
    html += '<div class="section">';
    html += '<div class="sec-head"><div class="sec-head-bar"></div><span class="sec-title">기간</span></div>';
    html += '<div class="sec-body"><div class="meta-grid">';
    html += '<div class="meta-item"><p class="label">이벤트 기간</p><p class="value">' + data.period + '</p></div>';
    html += '<div class="meta-item"><p class="label">당첨자 발표일</p><p class="value">' + data.announceDate + '</p></div>';
    html += '</div></div></div>';

    /* 당첨자 선정 */
    html += '<div class="section">';
    html += '<div class="sec-head"><div class="sec-head-bar"></div><span class="sec-title">당첨자 선정</span></div>';
    html += '<div class="sec-body"><div class="notice-list">';
    data.selection.forEach(function(item) {
        html += '<div class="notice-item"><div class="notice-dot"></div><p>' + item + '</p></div>';
    });
    html += '</div></div></div>';

    /* 안내사항 */
    html += '<div class="section">';
    html += '<div class="sec-head"><div class="sec-head-bar"></div><span class="sec-title">안내사항</span></div>';
    html += '<div class="sec-body"><div class="notice-list">';
    data.notices.forEach(function(notice) {
        html += '<div class="notice-item"><div class="notice-dot"></div><p>' + nl2br(notice) + '</p></div>';
    });
    html += '</div></div></div>';

    /* 참여 버튼 */
    html += '<div class="cta-wrap">';
    if (data.status === 'ing') {
        html += '<button class="cta-btn" id="cta-participate">공모전 참여하기</button>';
    } else {
        html += '<button class="cta-btn" disabled style="opacity:0.45;cursor:default;">공모전이 종료되었습니다</button>';
    }
    html += '</div>';

    /* 참여한 레시피 */
    html += '<div class="section">';
    html += '<div class="sec-head"><div class="sec-head-bar"></div><span class="sec-title">참여한 레시피</span>';
    html += '<span style="margin-left:auto;font-size:12px;color:#888">총 <span class="ev-participants">' + data.participants + '</span>개</span>';
    html += '</div><div class="sec-body"><div class="recipe-grid">';
    data.recipes.forEach(function(r) {
        var thumb = r.img
            ? '<img src="' + r.img + '" alt="' + r.title + '" style="width:100%;height:100%;object-fit:cover;">'
            : placeholderSVG();
        html += '<div class="recipe-card">';
        html += '<div class="recipe-thumb">' + thumb + '</div>';
        html += '<div class="recipe-info"><p>' + r.title + '</p><p>' + r.author + ' · ♥ ' + r.likes + '</p></div>';
        html += '</div>';
    });
    html += '<button class="recipe-more">더보기</button>';
    html += '</div></div></div>';

    /* 댓글 */
    html += '<div class="section">';
    html += '<div class="sec-head"><div class="sec-head-bar"></div><span class="sec-title">댓글</span>';
    html += '<span style="margin-left:auto;font-size:12px;color:#888">' + data.comments.length + '개</span>';
    html += '</div><div class="sec-body">';
    html += '<div class="comment-input-wrap"><div class="comment-avatar"></div><div class="comment-input-box">댓글을 입력하세요...</div></div>';
    html += '<div class="comment-list">';
    data.comments.forEach(function(c) {
        html += '<div class="comment-item"><div class="comment-avatar"></div><div class="comment-body">';
        html += '<p class="comment-name">' + c.name + '</p>';
        html += '<p class="comment-text">' + c.text + '</p>';
        html += '<p class="comment-meta">' + c.date + ' · 좋아요 ' + c.likes + '</p>';
        html += '</div></div>';
    });
    html += '</div></div></div>';

    /* 이전글 / 다음글 */
    html += '<div class="post-nav">';

    /* 다음글 */
    if (data.next && data.next.id) {
        html += '<div class="post-nav-item" onclick="location.href=\'event-detail.html?id=' + data.next.id + '\'">';
        html += '<span class="post-nav-label">다음글</span>';
        html += '<div class="post-nav-arrow"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M5 15l7-7 7 7"/></svg></div>';
        html += '<span class="post-nav-title">' + data.next.title + '</span>';
        html += '<span class="post-nav-date">' + data.next.date + '</span>';
        html += '</div>';
    } else {
        html += '<div class="post-nav-item" style="cursor:default;opacity:0.45;">';
        html += '<span class="post-nav-label">다음글</span>';
        html += '<div class="post-nav-arrow"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M5 15l7-7 7 7"/></svg></div>';
        html += '<span class="post-nav-title">다음 이벤트가 없습니다</span>';
        html += '</div>';
    }

    /* 이전글 */
    if (data.prev && data.prev.id) {
        html += '<div class="post-nav-item" onclick="location.href=\'event-detail.html?id=' + data.prev.id + '\'">';
        html += '<span class="post-nav-label">이전글</span>';
        html += '<div class="post-nav-arrow"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7"/></svg></div>';
        html += '<span class="post-nav-title">' + data.prev.title + '</span>';
        html += '<span class="post-nav-date">' + data.prev.date + '</span>';
        html += '</div>';
    } else {
        html += '<div class="post-nav-item" style="cursor:default;opacity:0.45;">';
        html += '<span class="post-nav-label">이전글</span>';
        html += '<div class="post-nav-arrow"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7"/></svg></div>';
        html += '<span class="post-nav-title">이전 이벤트가 없습니다</span>';
        html += '</div>';
    }

    html += '</div>'; /* /post-nav */

    /* 목록 버튼 */
    html += '<div class="post-nav-list-btn">';
    html += '<button class="list-btn" onclick="location.href=\'event.html\'">';
    html += '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16"/></svg>';
    html += '목록</button></div>';

    /* ── DOM에 삽입 ── */
    document.getElementById('event-content').innerHTML = html;

    /* ── 참여 버튼 이벤트 ── */
    var ctaBtn = document.getElementById('cta-participate');
    if (ctaBtn) {
        ctaBtn.addEventListener('click', function() {
            location.href = '#none';
        });
    }
}

/* ── 진입점 ── */
document.addEventListener('DOMContentLoaded', function() {
    var params = new URLSearchParams(window.location.search);
    var id     = params.get('id');

    if (!id || !EVENT_DATA[id]) {
        /* id가 없거나 없는 이벤트면 목록으로 */
        location.href = 'event.html';
        return;
    }

    renderEvent(EVENT_DATA[id]);
});
