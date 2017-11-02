/*弹出登录框*/
    function openNew() {
        //获取页面的高度和宽度
        var sWidth = document.body.scrollWidth;
        var sHeight = document.body.scrollHeight;

        //获取页面的可视区域高度（一般页面是竖向的，所以可以不用获取宽度）
        var wHeight = document.documentElement.clientHeight;

        var oMask = document.createElement("div"); //创建一个div，这个div是包含整个页面，其是遮盖层
        oMask.id = "mask";
        oMask.style.height = sHeight + "px";
        oMask.style.width = sWidth + "px";
        document.body.appendChild(oMask);
        var oLogin = document.getElementById("Login"); //其是弹出层，下面内容是弹出层的结构
        // oLogin.id="login";
        var oLogin = document.getElementById('login');
        oLogin.className = 'loginCona';
        // document.body.appendChild(oLogin);
        //获取登陆框的宽和高
        var dHeight = oLogin.offsetHeight;
        var dWidth = oLogin.offsetWidth;
        //设置登陆框的left和top
        oLogin.style.left = sWidth / 2 - dWidth / 2 + "px";
        oLogin.style.top = wHeight / 2 - dHeight / 2 + "px";

        //点击关闭按钮
        var oClose = document.getElementById("close");
        //点击登陆框以外的区域也可以关闭登陆框
        oClose.onclick = oMask.onclick = function() {
            document.body.removeChild(oMask);
            oLogin.className = 'loginCon';
        }
    }