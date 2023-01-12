/* window.onload=function(){} */ //옆에 내용은 defer를 안쓸 경우에 제일 위에 써준다. 주석처리 된 부분
const submit=document.getElementById('submit')
const id1=document.getElementById('id1');
//정규식표현때 쓰는 방식 / 안에내용 / 

/* java쓸 때 필요한 변수변환용 이름 */
let pw1=document.getElementById('pw1');
let pw2=document.getElementById('pw2');
let point1=document.getElementById('point1');
let point2=document.getElementById('point2');
let email1=document.getElementById('email1');
let tel1=document.getElementById('tel1');
let id1Msg=document.getElementById('id1Msg');
let pw1Msg=document.getElementById('pw1Msg');
let pw2Msg=document.getElementById('pw2Msg');
let point1Msg=document.getElementById('point1Msg');
let point2Msg=document.getElementById('point2Msg');
let gender1Msg=document.getElementById('gender1Msg');
let tel1Msg=document.getElementById('tel1Msg');
let email1Msg=document.getElementById('email1Msg');

let regId=/^[A-Z][a-zA-Z0-9]{4,}$/; //아이디
let regPw1=/^.*(?=^.{8,16})(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&*]).*$/; //비밀번호
let regPoint1=/^\d{6}$/; //포인트 숫자6자리만 가능
let regEmail1=/(^[0-9a-zA-Z]{3,})([-_.!@#$%^&*]?[0-9a-zA-Z])$/g//영어숫자 3글자 이상의 조합 및 특수문자 포함가능합니다
let regPhone1=/(^01[016789]{1})([0-9]{3,4})[0-9]{4}$/g;

id1.addEventListener("blur",function(){
    //value값이 regId값(정규값이 아니면)
    if(!regId.test(id1.value)){
        id1Msg.style.color="red";
        id1Msg.innerHTML="아이디는 5글자 이상 첫글자가 대문자이고 영문자, 숫자만 가능합니다!"
    }else{
        id1Msg.style.color="green";
        id1Msg.innerHTML="사용가능한 ID입니다."
    }
});

pw1.addEventListener("blur",function(){
    if(!regPw1.test(pw1.value)){
        pw1Msg.style.color="red";
        pw1Msg.innerHTML="비밀번호는 특수문자,문자,숫자 포함하고 8~16이내의 값만 가능합니다!" //특수문자,문자,숫자 포함하고 8~16이내의 값만 가능
    }else{
        pw1Msg.style.color="green";
        pw1Msg.innerHTML="사용가능한 비밀번호입니다."
    }
})

pw2.addEventListener("focus",function(){
    if(document.getElementById('pw1').value==""){
        alert("패스워드를 입력하세요");
        document.getElementById("pw1").focus();
    }
});
pw2.addEventListener("blur",function(){
    if(pw1.value !=pw2.value){
        pw2Msg.style.color="red"
        pw2Msg.innerHTML="비밀번호가 일치하지않습니다!"
        return false;
    }else{
        if((pw1.value=='')&&(pw2.value=='')){
            pw2Msg.innerHTML="" 
        }else{
            pw2Msg.style.color="green";
            pw2Msg.innerHTML="비밀번호가 일치합니다."
        }
       
    }
});

email1.addEventListener("blur",function(){
    if(!regEmail1.test(email1.value)){
        email1Msg.style.color="red";
        email1Msg.innerHTML="영어숫자 3글자 이상부터 가능합니다! (특수문자 포함가능합니다.)"
    }else{
        email1Msg.style.color="green";
        email1Msg.innerHTML="사용가능한 이메일입니다."
    }
});

/* email select jquery */
$("select[name=select]").on("change", function(){
    var $addr = $(this).closest(".form_1").find("input[name=address_email]");
    if ($(this).val() == "etc") {
        $addr.val('');
        $addr.prop("readonly",false);

    } else {
        $addr.val($(this).val());
        $addr.prop("readonly",true);
    }
});


/* 포인트 */

point1.addEventListener("blur",function(){
    if(!regPoint1.test(point1.value)){
        point1Msg.style.color="red";
        point1Msg.innerHTML="숫자만 6자리를 써주시길 바랍니다!" //숫자만 6자리이내의 값만 가능
    }else{
        point1Msg.style.color="green";
        point1Msg.innerHTML="사용가능한 포인트 번호입니다."
    }
})

point2.addEventListener("focus",function(){
    if(document.getElementById('point1').value==""){/* 포인트번호 틀리면 안된다고 표시함 */
        alert("포인트 번호를 입력하세요");
        document.getElementById("point1").focus();
    }
});
point2.addEventListener("blur",function(){
    if(point1.value !=point2.value){
        point2Msg.style.color="red"
        point2Msg.innerHTML="포인트번호가 일치하지않습니다."
        return false;
    }else{
        if((point1.value=='')&&(point2.value=='')){
            point2Msg.innerHTML="" 
        }else{
            point2Msg.style.color="green";
            point2Msg.innerHTML="포인트번호가 일치합니다."
        }
       
    }
});

/* 포인트 */

tel1.addEventListener("blur",function(){
    if(!regPhone1.test(tel1.value)){
        tel1Msg.style.color="red";
        tel1Msg.innerHTML="전화번호는 번호만 11자리를 써주시길 바랍니다!"
    }else{
        tel1Msg.style.color="green";
        tel1Msg.innerHTML="사용 가능한 전화번호입니다."
    }
});

//document.getElementById("submit").onclick=function(){} 밑에 항목이랑 같은방법이다.
document.getElementById('submit').addEventListener("click",function(){
    if(id1.value==""){
        alert("아이디를 입력하세요");
        return false;
    }else{
        if(!regPw1.test(pw1.value)){
            alert("특수문자, 문자, 숫자 포함하고 8~16 이내의 값만 가능합니다!")
            pw1.value=""
            return false;
        }else{
            if(pw1.value==""){
                alert("패스워드를 입력하세요");
                return false;
            }else{}
        }
    }

    if(document.querySelector("[name=gender]:checked")==null){
        gender1Msg.style.color="red"
        gender1Msg.innerHTML="성별을 체크해주길 바랍니다!"; 
        document.getElementById("m").focus();
        return false;
    }else{
        location.href = "result.html"
    }

})





