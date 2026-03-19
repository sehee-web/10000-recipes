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
});



