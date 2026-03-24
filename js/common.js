//header
$(document).ready(function(){
    //카테고리
    $(".ctg_wrap").hover(function(){
        $(".ctg_panel").stop(true,true).slideDown(150) .scrollTop(0);
    }, function(){
        $(".ctg_panel").stop(true,true).slideUp(150) .scrollTop(0);
    });
    // 커뮤니티
    $(".comm").hover(function() {
        $(this).find(".comm_panel").stop(true, true).slideDown(120);
    },function() {
        $(this).find(".comm_panel").stop(true, true).slideUp(120);
    });
    
    //top_bt 스크롤 효과
    $(".top_bt a").on("click", function(e){
        e.preventDefault();

        var scrollTop = $(window).scrollTop();
        var duration  = Math.max(150, Math.min(scrollTop * 0.4, 1200));
        // 최소 150ms, 최대 1200ms, 거리에 비례
        
        $("html, body").animate({
            scrollTop: 0
        }, duration);
    });

    //로그인/회원가입 성공시
    const isSiteLoggedIn = localStorage.getItem("isLoggedIn") === "true";
    const joinLink = $(".top_menu .join a");

    if (joinLink.length > 0) {
        if (isSiteLoggedIn) {
            // 로그인 상태일 때
            joinLink.text("로그아웃");
            joinLink.attr("href", "#none");
            
            // 로그아웃 동작 추가
            joinLink.on("click", function(e) {
                e.preventDefault();
                localStorage.removeItem("isLoggedIn");
                alert("로그아웃 되었습니다.");
                location.href = "index.html"; // 메인으로 이동하며 새로고침
            });
        } else {
            // 로그아웃 상태일 때 (명시적으로 '로그인/ 회원가입' 지정)
            joinLink.text("로그인 / 회원가입");
            joinLink.attr("href", "login.html"); // 필요시 login.html로 이동하도록 설정
        }
    }
    // ── 최근 본 레시피 플로팅 패널 ──
    $(function () {
        var STORAGE_KEY = 'recentlyViewed';
    
        function getList() {
            try { return JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]'); }
            catch (e) { return []; }
        }
        function saveList(list) {
            try { localStorage.setItem(STORAGE_KEY, JSON.stringify(list)); }
            catch (e) {}
        }
    
        function formatTime(isoStr) {
            var now    = new Date();
            var viewed = new Date(isoStr);
            var diffMin = Math.floor((now - viewed) / 60000);
            var diffH   = Math.floor(diffMin / 60);
            var diffD   = Math.floor(diffH / 24);
            if (diffMin < 1)  return '방금 전';
            if (diffMin < 60) return diffMin + '분 전';
            if (diffH   < 24) return diffH + '시간 전';
            if (diffD   < 2)  return '어제';
            return diffD + '일 전';
        }
    
        function getGroupLabel(isoStr) {
            var now      = new Date();
            var viewed   = new Date(isoStr);
            var nowDate  = new Date(now.getFullYear(), now.getMonth(), now.getDate());
            var vDate    = new Date(viewed.getFullYear(), viewed.getMonth(), viewed.getDate());
            var dayDiff  = Math.round((nowDate - vDate) / 86400000);
            if (dayDiff === 0) return '오늘';
            if (dayDiff === 1) return '어제';
            return dayDiff + '일 전';
        }
    
        function renderPanel() {
            var list = getList();
            var $body = $('.rv_panel_body');
            $body.empty();
    
            if (list.length === 0) {
                $body.html(
                    '<div class="rv_panel_empty">' +
                        '<p>아직 본 레시피가 없어요</p>' +
                        '<p>레시피를 클릭하면 여기에 저장돼요</p>' +
                    '</div>'
                );
                return;
            }
    
            // 날짜 그룹핑
            var groups = {}, groupOrder = [];
            list.forEach(function (r) {
                var label = getGroupLabel(r.viewedAt);
                if (!groups[label]) { groups[label] = []; groupOrder.push(label); }
                groups[label].push(r);
            });
    
            groupOrder.forEach(function (label) {
                $body.append('<div class="rv_panel_group">' + label + '</div>');
                groups[label].forEach(function (r) {
                    var imgTag = r.image
                        ? '<img class="rv_panel_img" src="' + r.image + '" alt="' + r.title + '">'
                        : '<div class="rv_panel_img" style="background:#f0ede8;"></div>';
                    var $item = $(
                        '<div class="rv_panel_item" data-id="' + r.id + '">' +
                            '<a href="recipe-detail.html?id=' + r.id + '">' +
                                imgTag +
                                '<div class="rv_panel_info">' +
                                    '<div class="rv_panel_name">' + r.title + '</div>' +
                                    '<div class="rv_panel_time">' + formatTime(r.viewedAt) + '</div>' +
                                '</div>' +
                            '</a>' +
                            '<button class="rv_panel_del" aria-label="삭제">✕</button>' +
                        '</div>'
                    );
                    $body.append($item);
                });
            });
    
            // 개별 삭제
            $body.find('.rv_panel_del').on('click', function () {
                var id = Number($(this).closest('.rv_panel_item').data('id'));
                saveList(getList().filter(function (r) { return r.id !== id; }));
                renderPanel();
            });
        }
    
        function openPanel() {
            renderPanel();
            $('.rv_panel_overlay').addClass('is-open');
            $('.rv_panel').addClass('is-open');
            $('body').css('overflow', 'hidden');
        }
    
        function closePanel() {
            $('.rv_panel_overlay').removeClass('is-open');
            $('.rv_panel').removeClass('is-open');
            $('body').css('overflow', '');
        }
    
        // 플로팅 버튼 클릭
        $(document).on('click', '.recently_viewed_btn', function () {
            $('.rv_panel').hasClass('is-open') ? closePanel() : openPanel();
        });
    
        // 닫기 버튼
        $(document).on('click', '.rv_panel_close', closePanel);
    
        // 오버레이 클릭
        $(document).on('click', '.rv_panel_overlay', closePanel);
    
        // 전체 삭제
        $(document).on('click', '.rv_panel_clear', function () {
            if (confirm('최근 본 레시피를 모두 삭제할까요?')) {
                saveList([]);
                renderPanel();
            }
        });
    
        // ESC 닫기
        $(document).on('keydown', function (e) {
            if (e.key === 'Escape') closePanel();
        });
    });
});

