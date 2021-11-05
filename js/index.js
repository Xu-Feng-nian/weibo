$("#tab").focus(function(){
    $("#tab").css("color","#eb7350")
})
// 轮播图   
var mySwiper = new Swiper('.swiper-container', {
    effect: 'cube',//设置切换效果
    loop: true,//循环播放，强强强强
    autoplay: {//自动轮播
      delay: 2000,//设置定时时长，单位毫秒
      stopOnLastSlide: false,
      disableOnInteraction: false,
    },
    // 如果需要分页器
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
})

$('.login-btn').click(function(){
  let phoneValue = $('#phone').val();
  let passwordValue = $('#password').val();
  let keyPhone = localStorage.getItem('phone',phone);
  let keyPassword = localStorage.getItem('password',password);
  if(phoneValue == keyPhone && passwordValue == keyPassword){
    alert('登录成功');
  }else{
    alert('登录失败，请检查账号密码是否正确！');
  }
})


function showArticle(index){
    let article = ' <div class="post-s"><div class="img"><img src="'+articleData[index].img1+'"></div><div class="text"><h3><a href="#">'+articleData[index].textA+'</a><a href="#">'+articleData[index].textB+'</a></h3><div class="author"><span><img src="'+articleData[index].img2+'"></span><a href="#">'+articleData[index].authorA+'</a><a href="#">'+articleData[index].authorB+'</a></div><div class="comments"><span><i class="iconfont icon-share"></i></span><span>'+articleData[index].span1+'</span><span><i class="iconfont icon-xinxi"></i></span><span>'+articleData[index].span2+'</span><span><i class="iconfont icon-zan"></i></span><span>'+articleData[index].span3+'</span></div></div>'
    $('.post').append(article);
}
showArticle(0);
showArticle(1);

var i=1;
var a=$(document).scroll(function(){
  let Box = $(document).height();//获取页面总高度；
  let cHeigth = document.documentElement.clientHeight;//获取页面可视高度；
  let top = $(document).scrollTop();//滚动高度；
  if(Box <= top+cHeigth){
        i++;
        $(function(){
          showArticle(i);
        })
        console.log(i);
  }
})
function show(){
  a;
}
show();
