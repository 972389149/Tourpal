//第一个驴友滚动
function animate2(offset2) //实现照片滑出来，通过控制left值改变的速度，达到滑的效果
    {
        var newset2 = parseInt(inbox4pal1a.style.left) + offset2;
        var time2 = 400;
        var interval2 = 10;
        var speed2 = offset2 / (time2 / interval2);
        animated2 = true; //这个false值用来控制函数循环
        function go2() {
            if ((speed2 < 0 && parseInt(inbox4pal1a.style.left) > newset2) || (speed2 > 0 && parseInt(inbox4pal1a.style.left) < newset)) {
                inbox4pal1a.style.left = parseInt(inbox4pal1a.style.left) + speed2 + 'px';
                setTimeout(go2, interval2);
            } else {
                animated2 = false;
                inbox4pal1a.style.left = newset2 + "px"; //判断照片是否滑到尽头，然后立刻切回到第-1张图片上，第-1张图片与最后
                if (newset2 > -200) {
                    inbox4pal1a.style.left = -600 + "px";
                } //一张相同，在视觉上就错以为是滑回第一张
                if (newset2 < -600) {
                    inbox4pal1a.style.left = -200 + "px";
                }
            }

        }
        go2(); //返回上一张按钮
    }
     function play2() { //实现图片自动轮换函数
        timer2 = setInterval(function() {
            turn1.onclick();
        },
        4000)
    }
    function stop2() { //实现图片自动轮换暂停函数
        clearInterval(timer2);
    }



    function animate3(offset3) //实现照片滑出来，通过控制left值改变的速度，达到滑的效果
    {
        var newset3 = parseInt(inbox4pal2a.style.left) + offset3;
        var time3 = 400;
        var interval3 = 10;
        var speed3 = offset3 / (time3 / interval3);
        animated3 = true; //这个false值用来控制函数循环
        function go3() {
            if ((speed3 < 0 && parseInt(inbox4pal2a.style.left) > newset3) || (speed3 > 0 && parseInt(inbox4pal2a.style.left) < newset3)) {
                inbox4pal2a.style.left = parseInt(inbox4pal2a.style.left) + speed3 + 'px';
                setTimeout(go3, interval3);
            } else {
                animated3 = false;
                inbox4pal2a.style.left = newset3 + "px"; //判断照片是否滑到尽头，然后立刻切回到第-1张图片上，第-1张图片与最后
                if (newset3 > -200) {
                    inbox4pal2a.style.left = -1000 + "px";
                } //一张相同，在视觉上就错以为是滑回第一张
                if (newset3 < -1000) {
                    inbox4pal2a.style.left = -200 + "px";
                }
            }

        }
        go3(); //返回上一张按钮
    }
    function play3() { //实现图片自动轮换函数
        timer3 = setInterval(function() {
            turn2.onclick();
        },
        2500)
    }
    function stop3() { //实现图片自动轮换暂停函数
        clearInterval(timer3);
    }

    function animate4(offset4) //实现照片滑出来，通过控制left值改变的速度，达到滑的效果
    {
        var newset4 = parseInt(inbox4pal3a.style.left) + offset4;
        var time4 = 400;
        var interval4 = 10;
        var speed4 = offset4 / (time4 / interval4);
        animated4 = true; //这个false值用来控制函数循环
        function go4() {
            if ((speed4 < 0 && parseInt(inbox4pal3a.style.left) > newset4) || (speed4 > 0 && parseInt(inbox4pal3a.style.left) < newset4)) {
                inbox4pal3a.style.left = parseInt(inbox4pal3a.style.left) + speed4 + 'px';
                setTimeout(go4, interval4);
            } else {
                animated4 = false;
                inbox4pal3a.style.left = newset4 + "px"; //判断照片是否滑到尽头，然后立刻切回到第-1张图片上，第-1张图片与最后
                if (newset4 > -200) {
                    inbox4pal3a.style.left = -800 + "px";
                } //一张相同，在视觉上就错以为是滑回第一张
                if (newset4 < -800) {
                    inbox4pal3a.style.left = -200 + "px";
                }
            }

        }
        go4(); //返回上一张按钮
    }

    function play4() { //实现图片自动轮换函数
        timer4 = setInterval(function() {
            turn3.onclick();
        },
        3000)
    }
    function stop4() { //实现图片自动轮换暂停函数
        clearInterval(timer4);
    }