function join_check(){
    const username = document.getElementById("username");
    const u_id = document.getElementById("u_id");
    const pw = document.getElementById("pw");
    const pwchk = document.getElementById("pwchk");
    const telnb = document.getElementById("telnb");
    const apply = document.getElementById("apply");
    if(username.value == ""){ 
        alert("이름을 입력하세요.");
        return false;
    }
    if(!u_id.value){
        alert("5자 이상 20자 이하의 영문과 숫자를 조합해 입력해주세요");
        return false;
    }
    //id 글자수 유효성 검사
    let id_len = u_id.value.length; 
    if((id_len < 5 || id_len > 20)){
        alert("5자 이상 20자 이하로 입력해주세요.");
        return false;
    }
    if(!pw.value){
        alert("8자 이상 20자 이하의 영문/ 숫자/ 특수문자(공백 제외) 2가지 이상 조합해 입력해주세요");
        return false;
    }
    //pw 글자수 유효성 검사
    let pw_len = pw.value.length
    if(pw_len <8 || pw_len > 20){
        alert("8자 이상 20자 이하로 입력해주세요.");
        return false;
    }
    //비밀번호 확인 유효성 검사
    if(pwchk.value != pw.value){
        alert("비밀번호를 확인해주세요.");
        return false;
    }

    const reg = /^[0-9]{10,11}$/g;
    if(telnb.value){    //전화번호란에 값을 입력했을때,
        if(!reg.test(telnb.value)){ 
        alert("전화번호는 숫자만 입력할 수 있습니다.");
        }
    }
    //이용약관 동의
    if(!(apply.checked)){
        alert("약관에 동의해주세요.");
        return false;
    }
    //필수 이용약관 동의 검사
    

}

function change_email(){
    const email_dns = document.getElementById("email_dns");
    const email_sel = document.getElementById("email_sel");

    const idx = email_sel.options.selectedIndex;
    const selected = email_sel.options[idx].value;

    email_dns.value=selected;
    
    
}
    