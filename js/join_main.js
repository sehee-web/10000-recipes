function join_check(){
    const username = document.getElementById("username");
    const u_id = document.getElementById("u_id");
    const pw = document.getElementById("pw");
    const pwchk = document.getElementById("pwchk");
    const email_id = document.getElementById("email_id");
    const email_dns = document.getElementById("email_dns");
    const email_sel = document.getElementById("email_sel");
    if(username.value == ""){ 
        alert("이름을 입력하세요.");
        username.focus();
        return false;
    }

    //id 공백 검사
    if(!u_id.value){
        alert("아이디를 입력해주세요");
        u_id.focus();
        return false;
    }
    //id 정규식 유효성 검사
    const idReg = /^(?=.*[a-zA-Z])(?=.*[0-9])[a-zA-Z0-9]{5,20}$/;
    if(!idReg.test(u_id.value)){
        alert("아이디는 5~20자의 영문과 숫자를 모두 포함해야 합니다.");
        u_id.focus();
        return false;
    }
    //pw 공백 검사
    if(!pw.value){
        alert("비밀번호를 입력해주세요.");
        pw.focus();
        return false;
    }
    //pw 정규식 유효성 검사
    const pwReg = /^(?:(?=.*[a-zA-Z])(?=.*[0-9])|(?=.*[a-zA-Z])(?=.*[^a-zA-Z0-9])|(?=.*[0-9])(?=.*[^a-zA-Z0-9]))[^\s]{8,20}$/;
    if(!pwReg.test(pw.value)){
        alert("비밀번호는 8~20자이며 공백 없이 영문/숫자/특수문자 중 2가지 이상 조합해야 합니다.");
        pw.focus();
        return false;
    }
    //비밀번호 확인 유효성 검사
    if(pwchk.value != pw.value){
        alert("비밀번호를 확인해주세요.");
        pwchk.focus();
        return false;
    }
    //이메일 공백 검사
    if(!email_id.value){
        alert("이메일을 입력해주세요.");
        email_id.focus();
        return false;
    }
    if (!email_dns.value) {
        alert("이메일 도메인을 입력하거나 선택해주세요.");
        email_dns.focus();
        return false;
    }
    const fullEmail = email_id.value + "@" + email_dns.value;
    const emailReg = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!emailReg.test(fullEmail)) {
        alert("올바른 이메일 형식이 아닙니다.");
        email_id.focus();
        return false;
    }

    //필수 이용약관 동의 검사
    const requiredChk = document.querySelectorAll(".agree_item.required");

    for(let i = 0; i < requiredChk.length; i++){
        if(!requiredChk[i].checked){
            alert("필수 이용약관에 모두 동의해주세요.");
            requiredChk[i].focus();
            return false;
        }
    }
    //회원가입 성공시
    alert("회원가입을 축하합니다!");
    
    // 포폴용: localStorage에 로그인 상태 저장
    localStorage.setItem("isLoggedIn", "true");
    
    // 메인 페이지로 이동
    window.location.replace("index.html");
    return false;
}

//email도메인 선택
function change_email(){
    const email_dns = document.getElementById("email_dns");
    const email_sel = document.getElementById("email_sel");

    const idx = email_sel.options.selectedIndex;
    const selected = email_sel.options[idx].value;

    email_dns.value=selected; 
}

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

    // 전체 동의
    const agreeAll = document.getElementById("agree_all");
    const agreeItems = document.querySelectorAll(".agree_item");

    agreeAll.addEventListener("change", function () {
        agreeItems.forEach(function (item) {
            item.checked = agreeAll.checked;
        });
    });

    agreeItems.forEach(function (item) {
        item.addEventListener("change", function () {
            const total = agreeItems.length;
            const checked = document.querySelectorAll(".agree_item:checked").length;
            agreeAll.checked = (total === checked);
        });
    });

});
