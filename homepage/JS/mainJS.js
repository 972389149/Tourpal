// JavaScript Document

window.onload = function() {
    alert('注意事项：\n 1、 账号：0；密码：0；\n 2、已实现功能\n      a.主页设计\n      b.用户文章详情(三个用户文章详情)\n      c.主题文章发布(未完全实现)\n      d.分享朋友圈发动态评论点赞\n      e.风景栏目实现了瀑布流 \n      f.假登录 \n      g.模拟注册页面(含表单认证)\n      h.注册个人信息(含表单验证和计算年龄生肖星座)\n      i.修改个人信息(包括头像)\n3、 推荐使用火狐浏览，其他浏览器兼容不是很好\n4、 只用作协同前端考核，不作商业用途')
    var PDDL=1;//用于判断是否登录
    var waternum=1;//用于判断是否执行瀑布流
    var bottom=document.getElementById('bottom');
    var last=document.getElementById('last');
     //以下部分是实现照片轮换
    var bigbox = document.getElementById("bigbox");
    var lists = document.getElementById("lists");
    var buttons = document.getElementById("buttons").getElementsByTagName("span");
    var next = document.getElementById("next");
    var prev = document.getElementById("prev");
    var index = 1;
    var animated = false;
    var timer;
    function showbutton()                                               //检查按钮的“灯”是否处于on状态
    {
        for (var i = 0; i < buttons.length; i++) {
            if (buttons[i].className == "on") {
                buttons[i].className = "";
                break;
            }
        }
        buttons[index - 1].className = "on";
    }

    function animate(offset)                                            //实现照片滑出来，通过控制left值改变的速度，达到滑的效果
    {
        var newset = parseInt(lists.style.left) + offset;
        var time = 600;
        var interval = 10;
        var speed = offset / (time / interval);
        animated = true;                                               //这个false值用来控制函数循环
        function go() {
            if ((speed < 0 && parseInt(lists.style.left) > newset) || (speed > 0 && parseInt(lists.style.left) < newset)) {
                lists.style.left = parseInt(lists.style.left) + speed + 'px';
                setTimeout(go, interval);
            } else {
                animated = false;
                lists.style.left = newset + "px";                      //判断照片是否滑到尽头，然后立刻切回到第-1张图片上，第-1张图片与最后
                if (newset > -502) {                                   //一张相同，在视觉上就错以为是滑回第一张
                    lists.style.left = -1506 + "px";
                } 
                if (newset < -1506) {
                    lists.style.left = -502 + "px";
                }
            }

        }
        go();                                                           
    }
    prev.onclick = function() {                                               //返回上一张按钮
        index -= 1;
        if (index < 1) {
            index = 3
        }
        showbutton();
        if (!animated) {
            animate(502);
        }
    }
    next.onclick = function()                                               //滑到下一张按钮
    {
        index += 1;
        if (index > 3) {
            index = 1
        }
        showbutton();
        if (!animated) {
            animate( - 502);
        }

    }
    function play() {                                                       //实现图片自动轮换函数
        timer = setInterval(function() {
            next.onclick();
        },
        3000)
    }
    function stop() {                                                       //实现图片自动轮换暂停函数
        clearInterval(timer);
    }
    for (var j = 0; j < buttons.length; j++)                                 //实现点击按钮切换图片
    {
        buttons[j].onclick = function() {
            var mydex = parseInt(this.getAttribute("index"));
            var offset = -502 * (mydex - index); //计算出需要改变的left值
            var lists = document.getElementById("lists");
            if (lists.style.left == '-502px' || lists.style.left == '-1004px' || lists.style.left == '-1506px') {
                animate(offset);
                index = mydex;
                showbutton();
            }
        }
    }

    bigbox.onmouseover = stop;                                            //鼠标经过时停止
    bigbox.onmouseout = play;                                              //鼠标离开时启动
    play();
    //这是第一个驴友滚动的图片
    var inbox4pal11 = document.getElementById("inbox4pal11");
    var inbox4pal1a = document.getElementById("inbox4pal1a");
    var turn1 = document.getElementById("turn1");
    var animated2 = false;
    var timer2;
    turn1.onclick = function() {

        if (!animated2) {
            animate2( - 200);
        }
    }
    inbox4pal11.onmouseover = stop2;                                          //鼠标经过时停止
    inbox4pal11.onmouseout = play2;                                           //鼠标离开时启动
    play2();

    //        这是第2个驴友滚动的图片
    var inbox4pal21 = document.getElementById("inbox4pal21");
    var inbox4pal2a = document.getElementById("inbox4pal2a");
    var turn2 = document.getElementById("turn2");
    var animated3 = false;
    var timer3;
    turn2.onclick = function() {

        if (!animated3) {
            animate3( - 200);
        }
    }
 clearInterval(timer3);
    inbox4pal21.onmouseover = stop3;                             //鼠标经过时停止
    inbox4pal21.onmouseout = play3;                              //鼠标离开时启动
    play3();

    //        这是第3个驴友滚动的图片
    var inbox4pal31 = document.getElementById("inbox4pal31");
    var inbox4pal3a = document.getElementById("inbox4pal3a");
    var turn3 = document.getElementById("turn3");
    var animated4 = false;
    var timer4;
    turn3.onclick = function() {

        if (!animated4) {
            animate4( - 200);
        }
    }
    
    inbox4pal31.onmouseover = stop4;                              //鼠标经过时停止
    inbox4pal31.onmouseout = play4;                               //鼠标离开时启动
    play4();

    //这是登录弹出框
    var oBtn = document.getElementById("btnLogin");
    //点击登录按钮
    oBtn.onclick = function() {
        openNew();
        return false;
    }

    /*这是滚动的文字的代码，原理和图片轮换一样*/
    var bigbox1 = document.getElementById("bigbox1");
    var word = document.getElementById("word");
    var up = document.getElementById("up");
    var animated1 = false;
    up.onclick = function() {
        if (!animated1) {
            animate1( - 120);
        }
    }
    play1();


//实现导航条样式的改变
    var zt = document.getElementById('zt');
    var fx = document.getElementById('fx');
    var fj = document.getElementById('fj');
    var gc1 = document.getElementsByClassName('box2word1')[0];
    var zt1 = document.getElementsByClassName('box2word')[0];
    var fx1 = document.getElementsByClassName('box2word')[1];
    var fj1 = document.getElementsByClassName('box2word')[2];
    var inbox1 = document.getElementById('inbox2-11');
    var inbox2 = document.getElementById('inbox2-2');
    var inbox3 = document.getElementById('inbox2-3');
    var inbox4 = document.getElementById('inbox2-4');
    var abox1=document.getElementById('box2-1');
    var abox2=document.getElementById('box2-2');
    var abox3=document.getElementById('box2-3');
    var abox4=document.getElementById('box2-4');
var sections=document.getElementsByTagName('section');
     var topdiv=document.getElementById('topdiv');
     var FGX4=document.getElementById('FGX4');
fx.onclick=function(){
    if(PDDL==2){
    gc1.className='box2word';
    inbox3.id = 'inbox2-31';
    inbox1.id = 'inbox2-1';
    abox3.id = 'box2-3a';
    abox1.id = 'box2-1a';
    fx1.className='box2word1';


    inbox2.id = 'inbox2-1';
    abox2.id = 'box2-2';
    zt1.className='box2word';

    inbox4.id = 'inbox2-4';
    abox4.id = 'box2-4';
    fj1.className='box2word';

    sections[4].style.display='none';
    sections[2].style.display='none';
    sections[3].style.display='none';
    sections[8].style.display='none';
    sections[6].style.display='none';
    sections[7].style.display='none';
    sections[9].style.display='none';
    sections[10].style.display='none';
    // topdiv.style.height='850px';
    FGX4.style.display='block';
    sections[5].style.display='block';
    waternum=1;
    bottom.style.display='block';
    last.style.display='block';
}
else{
    alert('请先登录!');
}
}
zt.onclick=function(){
    if(PDDL==2){
    gc1.className='box2word';
    inbox2.id = 'inbox2-11';
    inbox1.id = 'inbox2-1';
    abox2.id = 'box2-2a';
    abox1.id = 'box2-1a';
    zt1.className='box2word1';

    inbox4.id = 'inbox2-4';
    abox4.id = 'box2-4';
    fj1.className='box2word';

    inbox3.id = 'inbox2-3';
    abox3.id = 'box2-3';
    fx1.className='box2word';
    sections[4].style.display='none';
    sections[2].style.display='none';
    sections[3].style.display='none';
    sections[5].style.display='none';
    sections[6].style.display='none';
    sections[7].style.display='none';
    sections[8].style.display='none';
    sections[9].style.display='none';
    sections[10].style.display='block';
    topdiv.style.height='122px';
    FGX4.style.display='block';
    waternum=1;
    bottom.style.display='block';
    last.style.display='block';
}else{
    alert('请先登录！');
}
}
fj.onclick=function(){
    waternum=2;
    gc1.className='box2word';
    inbox4.id = 'inbox2-41';
    inbox1.id = 'inbox2-1';
    abox4.id = 'box2-4a';
    abox1.id = 'box2-1a'
    fj1.className='box2word1';

    inbox3.id = 'inbox2-3';
    abox3.id = 'box2-3';
    fx1.className='box2word';
    inbox2.id = 'inbox2-1';
    abox2.id = 'box2-2';
    zt1.className='box2word';

    sections[4].style.display='none';
    sections[2].style.display='none';
    sections[3].style.display='none';
    sections[5].style.display='none';
    sections[6].style.display='none';
    sections[7].style.display='block';
    sections[8].style.display='none';
    sections[9].style.display='none';
    sections[10].style.display='none';
    topdiv.style.height='122px';
    FGX4.style.display='block';
    bottom.style.display='none';
    last.style.display='none';
    waterfall('waterfall','pic');
}
var dataInt={'data':[
    {'src':'../../view/images/1.jpg'},
    {'src':'../../view/images/2.jpg'},
    {'src':'../../view/images/3.jpg'},
    {'src':'../../view/images/4.jpg'},
    {'src':'../../view/images/5.jpg'},
    {'src':'../../view/images/6.jpg'},
    {'src':'../../view/images/7.jpg'},
    {'src':'../../view/images/8.jpg'},
    {'src':'../../view/images/9.jpg'},
    {'src':'../../view/images/10.jpg'},
    {'src':'../../view/images/11.jpg'},
    {'src':'../../view/images/12.jpg'},
    {'src':'../../view/images/13.jpg'},
    {'src':'../../view/images/14.jpg'},
    {'src':'../../view/images/15.jpg'},
    {'src':'../../view/images/16.jpg'},
    {'src':'../../view/images/17.jpg'},
    {'src':'../../view/images/18.jpg'},
    {'src':'../../view/images/19.jpg'},
    {'src':'../../view/images/20.jpg'},
    {'src':'../../view/images/21.jpg'},
    ]}; 


    //回到顶部
    var up1 = document.getElementById('up1');
    var time = null;
    var viewtop = document.documentElement.clientHeight; //获取可视区域高度
    var istop = true; //用于中途停止滚动和显示按钮
    window.onscroll = function() { //滚动条事件
        var flow = document.documentElement.scrollTop || document.body.scrollTop; //实现当
        if (flow >= viewtop) { //滚动条到顶端距离大于可视区域就出现按钮
            up1.style.display = 'block';
        } else {
            up1.style.display = 'none';
        }
        if (!istop) { //实现中途停止滚动
            clearInterval(time);
        }
        istop = false;

        if(checkscrollside()&&waternum==2){
            var owater = document.getElementById('waterfall');
            for(var i=0;i<dataInt.data.length;i++){
                // alert(dataInt.data.length);
                var oPic=document.createElement('li'); 
                oPic.className='pic';                  
                owater.appendChild(oPic);            
                var oinpic=document.createElement('div');
                oinpic.className='inpic';
                oPic.appendChild(oinpic);
                var oImg=document.createElement('img');
                oImg.src='../../view/images/'+dataInt.data[i].src;
                oinpic.appendChild(oImg);
            }
            waterfall('waterfall','pic');
        }
    }
    up1.onclick = function() { //点击按钮事件
        time = setInterval(function() {
            var flow = document.documentElement.scrollTop || document.body.scrollTop; //获取滚动条到顶端高度
            var upspeed = Math.floor( - flow / 8); //控制向上滚的速度.取负数是因为向下取证，使滚动条到顶端距离为0
            document.documentElement.scrollTop = document.body.scrollTop = flow + upspeed;
            istop = true;
            if (flow == 0) { //如果距离为0则清除定时器
                clearInterval(time);
            }
        },
        30);
    }

    var delu = document.getElementById('delu');//验证账号是否正确并且切换div显示已登录状态
    delu.onclick = function() {
        var User = document.getElementById('user');
        var UCon = User.value;
        var Pass = document.getElementById('password');
        var PCon = Pass.value;
        if (UCon != '0') {
            alert('Warning:不存在此账号！')
        }
        if (UCon == '0' && PCon == '0') {
            PDDL=2;
            var oLogin = document.getElementById('login');
            oLogin.className = 'loginCon';
            oMask = document.getElementById('mask');
            document.body.removeChild(oMask);
            var Moveword = document.getElementById('moveword');
            Moveword.style.display='none';
            var userMessage=document.getElementById('userMessage');
            userMessage.style.display='block';

        } else {
            alert('Warning:密码错误！');
        }
    }
    var loginouted=document.getElementById('loginout');
    loginout.onclick=function(){
        waternum=1;
        bottom.style.display='block';
        last.style.display='block';
        PDDL=1;
        window.alert('你已退出当前账号！');
    var Moveword = document.getElementById('moveword');
             Moveword.style.display='block';
            userMessage.style.display='none';
            sections[4].style.display='block';
        sections[2].style.display='block';
        sections[3].style.display='block';
        sections[5].style.display='none';
        sections[6].style.display='none';
        sections[7].style.display='none';
        sections[8].style.display='none';
        sections[9].style.display='none';
        sections[10].style.display='none';
        topdiv.style.height='2500px';
        FGX4.style.display='none';
        //恢复导航条样式
        gc1.className='box2word1';
        inbox3.id = 'inbox2-3';
        inbox1.id = 'inbox2-11';
        abox3.id = 'box2-3';
        abox1.id = 'box2-1'
        fx1.className='box2word';

        inbox2.id = 'inbox2-1';
        abox2.id = 'box2-2';
        zt1.className='box2word';

        inbox4.id = 'inbox2-4';
        abox4.id = 'box2-4';
        fj1.className='box2word';
    }

    var personal=document.getElementById('personal');
    personal.onclick=function(){
        waternum=2;
        bottom.style.display='block';
        last.style.display='block';
        topdiv.style.height='122px';
        sections[4].style.display='none';
        sections[2].style.display='none';
        sections[3].style.display='none';
        sections[5].style.display='none';
        sections[7].style.display='none';
        sections[6].style.display='none';
        sections[8].style.display='none';
        sections[9].style.display='block';
        sections[10].style.display='none';
         FGX4.style.display='block';
         waternum=1;
    }

    //导航下面的图片显示
    var messagePictrue = document.getElementById("messagePictrue");
    var inmessagePictrue = document.getElementById("inmessagePictrue");
    var rounds = document.getElementById("rounds").getElementsByTagName("span");
    var right = document.getElementById("right");
    var left = document.getElementById("left");
    var indexs = 1;
    var animatings = false;
    var timed;
    function showround() //检查按钮的“灯”是否处于on状态
    {
        for (var k = 0; k < rounds.length; k++) {
            if (rounds[k].className == "on") {
                rounds[k].className = "";
                break;
            }
        }
        rounds[indexs - 1].className = "on";
    }

    function animating(offseting) //实现照片滑出来，通过控制left值改变的速度，达到滑的效果
    {
        var newseting = parseInt(inmessagePictrue.style.left) + offseting;
        var timimg = 600;
        var intervaling = 10;
        var speeding = offseting / (timimg / intervaling);
        animatings = true; //这个false值用来控制函数循环
        function going() {
            if ((speeding < 0 && parseInt(inmessagePictrue.style.left) > newseting) || (speeding > 0 && parseInt(inmessagePictrue.style.left) < newseting)) {
                inmessagePictrue.style.left = parseInt(inmessagePictrue.style.left) + speeding + 'px';
                setTimeout(going, intervaling);
            } else {
                animatings = false;
                inmessagePictrue.style.left = newseting + "px"; //判断照片是否滑到尽头，然后立刻切回到第-1张图片上，第-1张图片与最后
                if (newseting > -700) {
                    inmessagePictrue.style.left = -4200 + "px";
                } //一张相同，在视觉上就错以为是滑回第一张
                if (newseting < -4200) {
                    inmessagePictrue.style.left = -700 + "px";
                }
            }

        }
        going(); //返回上一张按钮
    }
    left.onclick = function() {
        indexs -= 1;
        if (indexs < 1) {
            indexs = 6
        }
        showround();
        if (!animatings) {
            animating(700);
        }
    }
    right.onclick = function() //滑到下一张按钮
    {
        indexs += 1;
        if (indexs > 6) {
            indexs = 1
        }
        showround();
        if (!animatings) {
            animating( - 700);
        }

    }
    function playing() { //实现图片自动轮换函数
        timed = setInterval(function() {
            right.onclick();
        },
        5000)
    }
    function stopping() { //实现图片自动轮换暂停函数
        clearInterval(timed);
    }
    for (var l = 0; l < rounds.length; l++) //实现点击按钮切换图片
    {
        rounds[l].onclick = function() {
            var mydexs = parseInt(this.getAttribute("indexs"));
            var offseting = -700 * (mydexs - indexs); //计算出需要改变的left值
            var inmessagePictrue = document.getElementById("inmessagePictrue");
            if (inmessagePictrue.style.left == '-700px' || inmessagePictrue.style.left == '-1400px' || inmessagePictrue.style.left == '-2100px' || inmessagePictrue.style.left == '-2800px' || inmessagePictrue.style.left == '-3500px' || inmessagePictrue.style.left == '-4200px') {
                animating(offseting); //这个判断用于禁止连续点击按钮
                indexs = mydexs;
                showround();
            }
        }
    }

    messagePictrue.onmouseover = stopping; //鼠标经过时停止
    messagePictrue.onmouseout = playing; //鼠标离开时启动
    playing();

    var Uptop;
    var Downtop;
    var Uptop1;
    var Downtop1;
    var Uptop2;
    var Downtop2;
    var underW = document.getElementsByClassName('underW');
    var messageshare1 = document.getElementsByClassName('messageshare1'); //第一个向上升的图片和文字
    var BF = parseInt(underW[0].style.top);
    messageshare1[0].onmouseover = function() {
        Uptop = setInterval(function() {
            if (BF > 700) {
                BF -= 1;
            }
            underW[0].style.top = BF + 'px';
        },
        10);
        clearInterval(Downtop);
    }
    messageshare1[0].onmouseout = function() {
        Downtop = setInterval(function() {
            if (BF < 720) {
                BF += 1;
            }
            underW[0].style.top = BF + 'px';
        },
        10);
        clearInterval(Uptop);
    }

    var BF1 = parseInt(underW[1].style.top); //第二个向上升的图片和文字
    var BF = parseInt(underW[0].style.top);
    messageshare1[1].onmouseover = function() {
        Uptop1 = setInterval(function() {
            if (BF1 > 700) {
                BF1 -= 1;
            }
            underW[1].style.top = BF1 + 'px';
        },
        10);
        clearInterval(Downtop1);
    }
    messageshare1[1].onmouseout = function() {
        Downtop1 = setInterval(function() {
            if (BF1 < 720) {
                BF1 += 1;
            }
            underW[1].style.top = BF1 + 'px';
        },
        10);
        clearInterval(Uptop1);
    }

    var BF2 = parseInt(underW[2].style.top); //第三个向上升的图片和文字
    var BF = parseInt(underW[0].style.top);
    messageshare1[2].onmouseover = function() {
        Uptop2 = setInterval(function() {
            if (BF2 > 700) {
                BF2 -= 1;
            }
            underW[2].style.top = BF2 + 'px';
        },
        10);
        clearInterval(Downtop2);
    }
    messageshare1[2].onmouseout = function() {
        Downtop2 = setInterval(function() {
            if (BF2 < 720) {
                BF2 += 1;
            }
            underW[2].style.top = BF2 + 'px';
        },
        10);
        clearInterval(Uptop2);
    }

    var Uptop3;
    var Downtop3;
    var Uptop4;
    var Downtop4;
    var Uptop5;
    var Downtop5;
    var messageshare2 = document.getElementsByClassName('messageshare2'); //第四个向上升的图片和文字
    var BF3 = parseInt(underW[3].style.top);
    messageshare2[0].onmouseover = function() {
        Uptop3 = setInterval(function() {
            if (BF3 > 900) {
                BF3 -= 1;
            }
            underW[3].style.top = BF3 + 'px';
        },
        10);
        clearInterval(Downtop3);
    }
    messageshare2[0].onmouseout = function() {
        Downtop3 = setInterval(function() {
            if (BF3 < 920) {
                BF3 += 1;
            }
            underW[3].style.top = BF3 + 'px';
        },
        10);
        clearInterval(Uptop3);
    }

    var BF4 = parseInt(underW[4].style.top); //第五个向上升的图片和文字
    var BF4 = parseInt(underW[4].style.top);
    messageshare2[1].onmouseover = function() {
        Uptop4 = setInterval(function() {
            if (BF4 > 900) {
                BF4 -= 1;
            }
            underW[4].style.top = BF4 + 'px';
        },
        10);
        clearInterval(Downtop4);
    }
    messageshare2[1].onmouseout = function() {
        Downtop4 = setInterval(function() {
            if (BF4 < 920) {
                BF4 += 1;
            }
            underW[4].style.top = BF4 + 'px';
        },
        10);
        clearInterval(Uptop4);
    }

    var BF5 = parseInt(underW[5].style.top); //第六个向上升的图片和文字
    var BF5 = parseInt(underW[5].style.top);
    messageshare2[2].onmouseover = function() {
        Uptop5 = setInterval(function() {
            if (BF5 > 900) {
                BF5 -= 1;
            }
            underW[5].style.top = BF5 + 'px';
        },
        10);
        clearInterval(Downtop5);
    }
    messageshare2[2].onmouseout = function() {
        Downtop5 = setInterval(function() {
            if (BF5 < 920) {
                BF5 += 1;
            }
            underW[5].style.top = BF5 + 'px';
        },
        10);
        clearInterval(Uptop5);
    }
     

     var registerbutton=document.getElementById('registerbutton');                            //实现点击注册 出现 注册表单
     var box1=document.getElementById('box1');
    registerbutton.onclick=function(){
        topdiv.style.height='122px';
        sections[4].style.display='none';
        sections[2].style.display='none';
        sections[3].style.display='none';
        sections[5].style.display='none';
        sections[7].style.display='none';
        sections[6].style.display='none';
        sections[8].style.display='block';
        sections[9].style.display='none';
        sections[10].style.display='none';
        FGX4.style.display='block';
        waternum=1;
        bottom.style.display='block';
    last.style.display='block';
    }
        box1.onclick=function(){
        sections[4].style.display='block';
        sections[2].style.display='block';
        sections[3].style.display='block';
        sections[5].style.display='none';
        sections[6].style.display='none';
        sections[7].style.display='none';
        sections[8].style.display='none';
        sections[9].style.display='none';
        topdiv.style.height='2500px';
        waternum=1;
        bottom.style.display='block';
    last.style.display='block';
        FGX4.style.display='none';
        //恢复导航条样式
        gc1.className='box2word1';
        inbox3.id = 'inbox2-3';
        inbox1.id = 'inbox2-11';
        abox3.id = 'box2-3';
        abox1.id = 'box2-1'
        fx1.className='box2word';

        inbox2.id = 'inbox2-1';
        abox2.id = 'box2-2';
        zt1.className='box2word';

        inbox4.id = 'inbox2-4';
        abox4.id = 'box2-4';
        fj1.className='box2word';
        }
         gc.onclick=function(){
        waternum=1;
        bottom.style.display='block';
        last.style.display='block';
        sections[4].style.display='block';
        sections[2].style.display='block';
        sections[3].style.display='block';
        sections[5].style.display='none';
        sections[6].style.display='none';
        sections[7].style.display='none';
        sections[8].style.display='none';
        sections[9].style.display='none';
        sections[10].style.display='none';
        topdiv.style.height='2500px';
        FGX4.style.display='none';
        //恢复导航条样式
        gc1.className='box2word1';
        inbox3.id = 'inbox2-3';
        inbox1.id = 'inbox2-11';
        abox3.id = 'box2-3';
        abox1.id = 'box2-1'
        fx1.className='box2word';

        inbox2.id = 'inbox2-1';
        abox2.id = 'box2-2';
        zt1.className='box2word';

        inbox4.id = 'inbox2-4';
        abox4.id = 'box2-4';
        fj1.className='box2word';
         }


                function Zhanghao(){                                           //用来验证账号是否符合格式
                var zhanghao=document.getElementById("zhanghao");
                var zhanghao1=document.getElementById("zhanghao1");
                    zhanghao.onfocus=function(){
                    zhanghao1.id="zhanghao2";
                    zhanghao1.innerHTML="&nbsp;长度:8-12 数字或字母";
                    }
                    zhanghao.onblur=function(){
                        zhanghao1.id="zhanghao1";
                        var ZHCon=zhanghao.value;
                        var res1=/\W/g;
                        if(res1.test(ZHCon)==true || ZHCon.length>12 || ZHCon.length<8){
                            zhanghao1.id="zhanghao4";
                            zhanghao1.innerHTML=" &nbsp;× 格式有误";
                         }
                         else{
                            zhanghao1.id="zhanghao3";
                            zhanghao1.innerHTML=" &nbsp√";
                         }
                     }
                }
                    Zhanghao(); 


                    function Mima(){                                           //用来验证密码是否符合格式
                       var mima=document.getElementById("mima");
                       var mima1=document.getElementById("mima1");
                       var MMQDR=document.getElementById("MMQDR");
                       var MMQDZ=document.getElementById("MMQDZ");
                       var MMQDQ=document.getElementById("MMQDQ");
                       mima.onfocus=function(){                                //判断密码强度
                               mima1.id="mima2";
                               mima1.innerHTML="字母开头 仅限数字或字母";
                               }
                               mima.onkeyup=function(){
                                if(this.value.length>=6){
                                    MMQDR.id="MMQDR1";
                                    mimaYZ.removeAttribute("disabled");
                                }
                                if(this.value.length>=8){
                                    MMQDZ.id="MMQDZ1";
                                }
                                if(this.value.length>=10){
                                    MMQDQ.id="MMQDQ1";
                                }
                                if(this.value.length<10){
                                    MMQDQ.id='MMQDQ';
                                }
                                if(this.value.length<8){
                                    MMQDZ.id='MMQDZ';
                                }
                                if(this.value.length<6){
                                    MMQDR.id='MMQDR';
                                    mimaYZ.setAttribute("disabled","");
                                }
                               }
                    mima.onblur=function(){
                        mima1.id="mima1";
                        var MMCon=mima.value;
                        var res2=/^[a-zA-Z]\w{0,}$/g;
                        var res3=/\d+/g;
                        if(res2.test(MMCon)==false || MMCon.length>12 || MMCon.length<6){
                            mima1.id="mima4";
                            mima1.innerHTML=" &nbsp;× 格式有误";
                         }else if(this.value==zhanghao.value){
                            window.alert("账号与密码不能相同!");                     //判断账号与密码是否相同
                         }else if(res3.test(MMCon)==false){
                            mima1.id="mima4";
                            mima1.innerHTML=" &nbsp;× 不能全为字母";
                         }
                         else{
                             mima1.id="mima3";
                             mima1.innerHTML=" &nbsp√";
                         }
                    }             
                }
                        Mima();




                        function MimaYZ(){                                          //再次确认密码                               
                            var mimaYZ=document.getElementById("mimaYZ");
                            var mimayz=document.getElementById("mimayz");
                            mimaYZ.onfocus=function(){
                                mimayz.id="mimayz2";
                                mimayz.innerHTML=" &nbsp;请再次输入密码";
                        }
                            mimaYZ.onblur=function(){                               
                            if(mimaYZ.value==mima.value){
                                        mimayz.id="mimayz1";
                                        mimayz.innerHTML=" &nbsp;√";
                            }
                            else{
                                window.alert("必须与密码相同！");
                            }
                        }
                    }
                        MimaYZ();
 
                        function Question(){                                              //密保问题答案
                            var question=document.getElementById("question");
                            var answer=document.getElementById("questionAn");
                            question.onfocus=function(){
                                answer.id="answer1";
                                answer.innerHTML=" &nbsp;答案用于找回你的密码";
                            }
                            question.onblur=function(){
                                answer.id="answer";
                                answer.innerHTML="";
                            }
                        }
                        Question();



                        var read=document.getElementById("read");                     //取消选中按钮
                        read.onclick=function(){
                            read.removeAttribute("checked");
                       }
                       var main2=document.getElementById('main2');
                       main2.onclick=function(){
                        gc1.className='box2word1';
        inbox3.id = 'inbox2-3';
        inbox1.id = 'inbox2-11';
        abox3.id = 'box2-3';
        abox1.id = 'box2-1'
        fx1.className='box2word';

        inbox2.id = 'inbox2-1';
        abox2.id = 'box2-2';
        zt1.className='box2word';

        inbox4.id = 'inbox2-4';
        abox4.id = 'box2-4';
        fj1.className='box2word';
    sections[4].style.display='none';
    sections[2].style.display='none';
    sections[3].style.display='none';
    sections[5].style.display='none';
    sections[6].style.display='block';
    sections[8].style.display='none';
    sections[9].style.display='none';
    sections[10].style.display='none';
    topdiv.style.height='122px';
    FGX4.style.display='block';
                       }


    var mainpictrue3=document.getElementById('mainpictrue3');
    var piccontent = document.getElementById("piccontent"); 
    piccontent.addEventListener('change',readFile,false);  
function readFile(){ 
    var file = this.files[0]; 
    if(!/image\/\w+/.test(file.type)){ 
        alert("文件必须为图片！"); 
        return false; 
    } 
    var reader = new FileReader(); 
    reader.readAsDataURL(file); 
    reader.onload = function(e){ 
        mainpictrue3.innerHTML = '<img src="'+this.result+'" alt=""/>';
    } 
}


    
    var wholecomment = document.getElementById('wholecomment');
    var parts = wholecomment.childNodes;
    var timer;
    var pubbutton=document.getElementById('pubbutton');                
    pubbutton.onclick=function(){                        //添加一个新的动态
        var publishcon=document.getElementById('publishcon');
        if(publishcon.value==''){alert('发表的内容不能为空！');}
        else{
        var a1=document.createElement('div');        //创建一个div，里面是发表的内容
        a1.id='part0';                    
        a1.innerHTML=
'<div id="touxiang">'+
'</div>'+
'<div class="txt">'+
'<div class="txtword">'+
'我'+
'<div class="close" href="javascript:;">×</div>'+
'</div>'+
'<div class="txtpictrue">'+
formateDate(new Date())+
'</div>'+
'</div>'+
'<div class="main">'+
'<div class="mainword">'+
publishcon.value+    
'</div>'+
'<div id="mainpictrue1">'+     
'</div>'+
'</div>'+
'<a class="praise" href="javascript:;">赞</a>'+
'<div class="praises-total" total="0" style="display: none;"></div>'+
'<div class="comment-list">'+
'</div>'+
'<div class="text-box">'+
'<textarea class="commenttext" autocomplete="off">评论…</textarea>'+
'<button class="btn ">回 复</button>'+
'<span class="word"><span class="length">0</span>/50</span>'+
'</div>';
        wholecomment.insertBefore(a1,wholecomment.childNodes[0]);      //插入到最前面
        var mainpictrue1=document.getElementById('mainpictrue1');
        mainpictrue1.innerHTML=mainpictrue3.innerHTML;
        var touxaing=document.getElementById('touxiang');
        touxiang.innerHTML=personpic.innerHTML;
        alert('发表成功！');
        var ownerpraise=document.getElementsByClassName('praise')[0];        
        ownerpraise.onclick=function(){                //下面是对新发表内容的一些dom操作
        praiseBox(parts[0], ownerpraise);               //可以对自己发表的内容进行点赞
        }
        var ownerclose=document.getElementsByClassName('close')[0];       //可以关闭自己发过的内容
        ownerclose.onclick=function(){
        parts[0].parentNode.removeChild(parts[0]);
        }

        var textArea = parts[0].getElementsByClassName('commenttext')[0];           //下面是对文本域的一些操作

        textArea.onfocus = function () {                                      
            this.parentNode.className = 'text-box text-box-on';
            this.value = this.value == '评论…' ? '' : this.value;
            this.onkeyup();
        }
        textArea.onblur = function () {
            var me = this;
            var val = me.value;
            if (val == '') {
                timer = setTimeout(function () {
                    me.value = '评论…';
                    me.parentNode.className = 'text-box';
                }, 200);
            }
        }
        textArea.onkeyup = function () {
            var val = this.value;
            var len = val.length;
            var els = this.parentNode.children;
            var btn = els[1];
            var word = els[2];
            if (len <=0 || len > 50) {
                btn.className = 'btn btn-off';
            }
            else {
                btn.className = 'btn';
            }
            word.innerHTML = len + '/50';
        }
        var ownerbutton=document.getElementsByClassName('btn')[0];
        ownerbutton.onclick=function(){          //调用点赞自己的评论函数
            reply(parts[0],ownerbutton);
            var ownercompraise=document.getElementsByClassName('comment-praise')[0];
        ownercompraise.onclick=function(){
            praiseReply(ownercompraise);         //调用回复自己评论的函数
        }
        var owneroperate=document.getElementsByClassName('comment-operate')[0];
        owneroperate.onclick=function(){
            operate(owneroperate);               //调用删除自己评论的函数      
        }
        }
    }
}

    var timer;
    //获取每个动态的事件，根据事件发生节点的classname匹配相对应的函数，进行相对应的操作。
    var wholecomment = document.getElementById('wholecomment');
    var parts = wholecomment.children;
    for (var i = 0; i < parts.length; i++) {
        //点击
        parts[i].onclick = function (e) {
            e = e || window.event;
            var el = e.target;
            switch (el.className) {
                //关闭分享
                case 'close':
                    removeNode(el.parentNode.parentNode.parentNode);
                    break;

                //赞分享
                case 'praise':
                    praiseBox(el.parentNode, el);
                    break;

                //回复按钮蓝
                case 'btn':
                    reply(el.parentNode.parentNode, el);                   
                    break;

                //回复按钮灰
                case 'btn btn-off':
                    clearTimeout(timer);
                    break;

                //赞留言
                case 'comment-praise':
                    praiseReply(el);
                    break;

                //操作留言
                case 'comment-operate':
                    operate(el);
                    break;

            }
        }

        //评论
        var textArea = parts[i].getElementsByClassName('commenttext')[0];

        //评论获取焦点
        textArea.onfocus = function () {
            this.parentNode.className = 'text-box text-box-on';
            this.value = this.value == '评论…' ? '' : this.value;
            this.onkeyup();
        }
        //评论失去焦点
        textArea.onblur = function () {
            var me = this;
            var val = me.value;
            if (val == '') {
                timer = setTimeout(function () {
                    me.value = '评论…';
                    me.parentNode.className = 'text-box';
                }, 200);
            }
        }

        //评论按键事件
        textArea.onkeyup = function () {
            var val = this.value;
            var len = val.length;
            var els = this.parentNode.children;
            var btn = els[1];
            var word = els[2];
            if (len <=0 || len > 50) {
                btn.className = 'btn btn-off';
            }
            else {
                btn.className = 'btn';
            }
            word.innerHTML = len + '/50';
        }
    }
    var morepage=document.getElementById('morepage');
    morepage.onclick=function(){
        alert('没有更多内容！')
    }
    //下面是完善个人信息
    var birthdaya=document.getElementById('birthdaya');
    var birthdayb=document.getElementById('birthdayb');
    var birthdayc=document.getElementById('birthdayc');
    var birthday1=document.getElementById('birthday1');
    var age=document.getElementById('age');
    var zodiac=document.getElementById('zodiac');
    var Constellation=document.getElementById('Constellation');
    birthdaya.onkeyup=function(){
        var userage=birthdaya.value;       //判断输入的年份是否为4位数
        if(userage.length<4){
            zodiac.value='';
            age.value='';
        }
        if(userage.length==4){             //根据输入的年份计算出年龄
        var age1=2017-userage;
         if(age1<0){
            birthday1.innerHTML='<span style="color:red;">请输入正确的年份!</span>';
         }
         else
         {
            birthday1.innerHTML='格 式 : 1998 - 01 - 01';
            age.value=age1;
        for(var i=1901;i<=2017;i=i+12){           //根据年份匹配生肖，最多可以匹配到1900年之后
        if(parseInt(userage)==i){
            zodiac.value='牛';
            break;
        }
    }
        for(var i=1902;i<=2017;i=i+12){
        if(parseInt(userage)==i){
            zodiac.value='虎';
            break;
        }
    }
        for(var i=1903;i<=2017;i=i+12){
        if(parseInt(userage)==i){
            zodiac.value='兔';
            break;
        }
    }
        for(var i=1904;i<=2017;i=i+12){
        if(parseInt(userage)==i){
            zodiac.value='龙';
            break;
        }
    }
        for(var i=1905;i<=2017;i=i+12){
        if(parseInt(userage)==i){
            zodiac.value='蛇';
            break;
        }
    }
        for(var i=1906;i<=2017;i=i+12){
        if(parseInt(userage)==i){
            zodiac.value='马';
            break;
        }
    }
        for(var i=1907;i<=2017;i=i+12){
        if(parseInt(userage)==i){
            zodiac.value='羊';
            break;
        }
    }   
        for(var i=1908;i<=2017;i=i+12){
        if(parseInt(userage)==i){
            zodiac.value='猴';
            break;
        }
    }   for(var i=1909;i<=2017;i=i+12){
        if(parseInt(userage)==i){
            zodiac.value='鸡';
            break;
        }
    }   for(var i=1910;i<=2017;i=i+12){
        if(parseInt(userage)==i){
            zodiac.value='狗';
            break;
        }
    }   
        for(var i=1911;i<=2017;i=i+12){
        if(parseInt(userage)==i){
            zodiac.value='猪';
            break;
        }
    }   
        for(var i=1900;i<=2017;i=i+12){
        if(parseInt(userage)==i){
            zodiac.value='鼠';
            break;
        }
    }
  }
}
}
    birthdayb.onkeyup=function(){
        if(parseInt(birthdayb.value)>12||parseInt(birthdayb.value)<1){          //判断输入的月份是否在1-12之内
            birthday1.innerHTML='<span style="color:red;">请输入正确的月份!</span>';
        }
        else{
            birthday1.innerHTML='格 式 : 1998 - 01 - 01';
        }
    }
    birthdayc.onkeyup=function(){          //判断输入的日期是否为1-31之内
        if(parseInt(birthdayc.value)>31||parseInt(birthdayc.value)<1||birthdayc.value.length==1){
            birthday1.innerHTML='<span style="color:red;">请输入正确的日期!</span>';
        }
        else{
            birthday1.innerHTML='格 式 : 1998 - 01 - 01';           
                if(birthdayb.value.length==1){              //如果月份只填了一个数字，则在前面加个0
                    birthdayb.value=0+birthdayb.value;
                }
                if(birthdayc.value.length==2){            //如果日期长度为2，调用星座计算函数
                   Constell();
                }
                if(birthdayc.value.length==0){          //如果日期为空，则星座为空
                    Constellation.value='';
                }
            }
  }

        var nickname=document.getElementById('nickname');
        var personal2=document.getElementsByClassName('personal2');
        nickname.onfocus=function(){
             personal2[0].innerHTML='好的昵称更容易交到朋友哟^.^';
        }
        nickname.onblur=function(){
            var checknick=/^(\w|[\u4e00-\u9fa5]){3,10}$/gi;        //判断昵称是否为字母，数字，汉字且长度在3-10
            if(checknick.test(nickname.value)==true){
                personal2[0].innerHTML='<span style="color:#079B2E; font-size:14px;">√ 检测通过</span>';
            }
            else{
                personal2[0].innerHTML='<span style="color:red; font-size:11px;">× 注意特殊字符且长度不超过10</span>';
            }
        }
        var englishname=document.getElementById('englishname');
        englishname.onblur=function(){
            var checkenglish=/[a-z]{4,12}/gi;                         //判断输入为字母且长度为4-12                 
            if(checkenglish.test(englishname.value)==true && englishname.value.length<16){
                personal2[1].innerHTML='<span style="color:#079B2E; font-size:13px;">√ 检测通过</span>';
            }
            else{
                personal2[1].innerHTML='<span style="color:red; font-size:11px;">× 只能使用字母且长度不超过12</span>';
            }
        }
        englishname.onfocus=function(){
            personal2[1].innerHTML='';
        }
        var telephone=document.getElementById('telephone');
        telephone.onblur=function(){
            var checktelephone=/^1(3|4|5|7|8)\d{9}$/;                       //判断手机号，要以13 14 15 17 18开头且长度为9
            if(checktelephone.test(telephone.value)==true && telephone.value.length < 12){
                personal2[5].innerHTML='<span style="color:#079B2E; font-size:13px;">√ 检测通过</span>';
            }
            else{
                personal2[5].innerHTML='<span style="color:red; font-size:11px;">× 手机号码有误</span>';
            }
        }
        telephone.onfocus=function(){
            personal2[5].innerHTML='';
        }
        var surname=document.getElementById('surname');
        surname.onblur=function(){
            var checksurname= /^[\u4e00-\u9fa5]{2,5}$/g;                 //判断姓名为汉字且长度为2-5
            if(checksurname.test(surname.value)){
                personal2[6].innerHTML='<span style="color:#079B2E; font-size:13px;">√ 检测通过</span>';
            }
            else{
                personal2[6].innerHTML='<span style="color:red; font-size:11px;">× 名字格式有误</span>';
            }
        }
        surname.onfocus=function(){
            personal2[6].innerHTML='';
        }
        var phone=document.getElementById('phone');
        phone.onblur=function(){
            var checkphone=/^(\d)(\d+)$/g;                                  //判断电话为数字开头且以数字结尾
            if(checkphone.test(phone.value) && phone.value.length<12){
                personal2[10].innerHTML='<span style="color:#079B2E; font-size:13px;">√ 检测通过</span>';
            }
            else{
                personal2[10].innerHTML='<span style="color:red; font-size:11px;">× 电话号码有误</span>';
            }
        }
        phone.onfocus=function(){
            personal2[10].innerHTML='';
        }

        var personpic = document.getElementById("personpic"); 
        var personpicword = document.getElementById("personpicword"); 
        personpicword.addEventListener('change',readFile1,false);


   //导航主题里面的发表文章的内容
    var place=document.getElementById('place');
    var placeitd=document.getElementById('placeitd');
    var exprience=document.getElementById('exprience');
    var expriencectu=document.getElementById('expriencectu');
    var resetexp=document.getElementById('resetexp');
    var shareexp=document.getElementById('shareexp');
    var expriencepic=document.getElementById('expriencepic');
    var expriencepicctu=document.getElementById('expriencepicctu');
    var alltopic=document.getElementById('alltopic');
    var topic=document.getElementById('topic');
    resetexp.onclick=function(){
        place.value='';
        placeitd.value='';
        exprience.value='';
        expriencepic.innerHTML='';
    }
    resetexpctu.onclick=function(){
        expriencectu.value='';
        expriencepicctu.innerHTML='';
    }


//以下部分是实现 发表文章
    var expriencepicbut = document.getElementById("expriencepicbut"); 
    expriencepicbut.addEventListener('change',readFile2,false);  
function readFile2(){ 
    var file = this.files[0]; 
    if(!/image\/\w+/.test(file.type)){ 
        alert("文件必须为图片！"); 
        return false; 
    } 
    var reader = new FileReader(); 
    reader.readAsDataURL(file); 
    reader.onload = function(e){ 
        expriencepic.innerHTML = '<img src="'+this.result+'" alt=""/>';
    } 
}


var expriencepicbutctu = document.getElementById("expriencepicbutctu"); 
    expriencepicbutctu.addEventListener('change',readFile3,false);  
function readFile3(){ 
    var file = this.files[0]; 
    if(!/image\/\w+/.test(file.type)){ 
        alert("文件必须为图片！"); 
        return false; 
    } 
    var reader = new FileReader(); 
    reader.readAsDataURL(file); 
    reader.onload = function(e){ 
        expriencepicctu.innerHTML = '<img src="'+this.result+'" alt=""/>';
    } 
}
    shareexp.onclick=function(){                   //发表文章，创建新的div
        if(place.value!='' && placeitd.value!='' && exprience.value!='' &&expriencepic.innerHTML!=''){
        var continued=document.getElementById('continued');
        continued.style.display='block';
        var topiccon=document.createElement('div');
        topiccon.className='topic1';
        topic.appendChild(topiccon);
        var topichpic=document.createElement('div');
        topichpic.className='topichpic';
        topichpic.innerHTML='<img src="../pictures/lv.jpg" alt="" style="width:90px;height:90px;border-radius:20px;">';
        topiccon.appendChild(topichpic);
        var topicword=document.createElement('div');
        topicword.className='topicword';
        topiccon.appendChild(topicword);
        var topicword1=document.createElement('div');
        topicword1.className='topicword1';
        topicword1.innerHTML='我&nbsp;分享了&nbsp;'+place.value;
        topicword.appendChild(topicword1);
        var topicword2=document.createElement('div');
        topicword2.className='topicword2';
        topicword2.innerHTML='&nbsp;&nbsp;&nbsp;&nbsp;'+placeitd.value;
        topicword.appendChild(topicword2);
        var topicclose=document.createElement('div');
        topicclose.className='topicclose';
        topicclose.innerHTML='×';
        topiccon.appendChild(topicclose);
        var topicfgx=document.createElement('div');
        topicfgx.className='topicfgx';
        topiccon.appendChild(topicfgx);
        var topictime=document.createElement('div');
        topictime.className='topictime';
        topictime.innerHTML=formateDate(new Date());
        topiccon.appendChild(topictime);
        var topicmword=document.createElement('div');
        topicmword.className='topicmword';
        topicmword.innerHTML='&nbsp;&nbsp;&nbsp;&nbsp;'+exprience.value;
        topiccon.appendChild(topicmword);
        var topicmpic=document.createElement('div');
        topicmpic.className='topicmpic';
        topicmpic.innerHTML=expriencepic.innerHTML;
        topiccon.appendChild(topicmpic);
        var topicclose=document.getElementsByClassName('topicclose')[0];
        topicclose.onclick=function(){
        var topic1=document.getElementsByClassName('topic1')[0];
        topic.removeChild(topic1);
        continued.style.display='none';
        var topic2=document.getElementsByClassName('topic2')[0];
        topic.removeChild(topic2);
        }
    }else{
        alert('内容不能为空！');
    }
  }


  shareexpctu.onclick=function(){               //为文章添加更多的内容
    if(expriencectu.value!='' && expriencepicctu.value!='' &&expriencepicctu.innerHTML!=''){
        var topicconctu=document.createElement('div');
        topicconctu.className='topic2';
        topic.appendChild(topicconctu);
        var topicfgx=document.createElement('div');
        topicfgx.className='topicfgx';
        topicconctu.appendChild(topicfgx);
        var topictime=document.createElement('div');
        topictime.className='topictime';
        topictime.innerHTML=formateDate(new Date());
        topicconctu.appendChild(topictime);
        var topicmword=document.createElement('div');
        topicmword.className='topicmword';
        topicmword.innerHTML='&nbsp;&nbsp;&nbsp;&nbsp;'+expriencectu.value;
        topicconctu.appendChild(topicmword);
        var topicmpic=document.createElement('div');
        topicmpic.className='topicmpic';
        topicmpic.innerHTML=expriencepicctu.innerHTML;
        topicconctu.appendChild(topicmpic);
    }else{
        alert('内容不能为空！');
    }
  } 
}