function login_check(){
            const u_id = document.getElementById("u_id");
            const pw = document.getElementById("pw");
            if (!u_id.value.trim()) {
                alert("아이디를 입력해주세요.");
                u_id.focus();
                return false;
            }

            if (!pw.value.trim()) {
                alert("비밀번호를 입력해주세요.");
                pw.focus();
                return false;
            }
            //로그인 성공시
            localStorage.setItem("isLoggedIn", "true");
            window.location.replace("index.html");
            return false;
        };

document.addEventListener("DOMContentLoaded", function () {
    // 비밀번호 보기 토글
    document.querySelectorAll(".toggle-password").forEach(function(button) {
        button.addEventListener("click", function() {
            const input = this.previousElementSibling;
            const img = this.querySelector("img");

            if (input.type === "password") {
                input.type = "text";
                img.src = "images_10000_recipes/eye_off.png";
                img.alt = "비밀번호 숨기기";
            } else {
                input.type = "password";
                img.src = "images_10000_recipes/eye.png";
                img.alt = "비밀번호 보기";
            }
        });
    });

});
