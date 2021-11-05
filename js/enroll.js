//手机号正则
const phoneReg = /^(?:(?:\+|00)86)?1[3-9]\d{9}$/;
let phoneResult;
function phoneRes(){
    let value = $('#phone').val();
    console.log(value);
    phoneResult = phoneReg.test(value);
    if(value != ''){
        if(phoneResult){
            $('#notic').text('正确!');
        }else{
            $('#notic').text('无效!');
        }
    }else{
        $('#notic').text('空!');
    }
}
$('#phone').blur(phoneRes);

const passReg = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
let passResult;
function passRes(){
    let passvla = $('#password').val();
    // console.log(passvla);
    passResult = passReg.test(passvla);
    if(passvla != ''){
        // console.log(1);
        if(passResult){
            // console.log(1);
            $('#pass-notice').text('正确');
        }else{
            $('#pass-notice').text('无效');
        }
    }else{
        console.log(1);
        $('#pass-notice').text('空');
    }
}
$('#password').blur(passRes);

let arrCode=[]
$('.btn').click(function(){
    arrCode=[];
    for(let i=0;i<4;i++){
    let code=Math.floor(Math.random()*9);
        arrCode.push(String.fromCharCode(code+65))
    }
    str=arrCode.join('')
    return $('#btn-notice').text(str);
})

let verifyResult;
$('#verify').blur(function(){
    verifyResult = $('#verify').val();
    if(verifyResult != ''){
        if(verifyResult ==  $('#btn-notice').text()){
            console.log(1);
            $('#verify-notice').text('正确');
        }else{
            $('#verify-notice').text('错误');
        }
    }else{
        $('#verify-notice').text('空');
    }
})

$('.new').click(function(){
    let phone = $('#phone').val();
    let password = $('#password').val();
    if(phone != '' && phoneResult && password != '' && passResult){
        alert('注册成功');
        window.location.href = './index.html';
        localStorage.setItem('phone',phone);
        localStorage.setItem('password',password);
    }else{
        alert('请检查相关信息是否填写正确');
    }
})