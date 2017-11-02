    	window.onload=function(){
//       var up=document.getElementById('up');
//      var time=null;
//      var viewtop=document.documentElement.clientHeight;          //获取可视区域高度
//      var istop=true;                                           //用于中途停止滚动和显示按钮
// window.onscroll=function(){                                      //滚动条事件
//   var flow=document.documentElement.scrollTop || document.body.scrollTop;            //实现当
//     if(flow>=viewtop){                                          //滚动条到顶端距离大于可视区域就出现按钮
//       up.style.display='block';
//     }
//     else{
//       up.style.display='none';
//     }
//           if(!istop){                                        //实现中途停止滚动
//             clearInterval(time);                                      
//           }
//           istop=false;
// }
//      up.onclick=function(){                               //点击按钮事件
//       time=setInterval(function(){
//       var flow=document.documentElement.scrollTop || document.body.scrollTop;          //获取滚动条到顶端高度
//           var upspeed=Math.floor( - flow / 8);               //控制向上滚的速度.取负数是因为向下取证，使滚动条到顶端距离为0
//           document.documentElement.scrollTop=document.body.scrollTop=flow+upspeed; 
//           istop=true;
//           if(flow==0){                         //如果距离为0则清除定时器
//         clearInterval(time);
//       }
//       },30);
//      }
   

   var wholecomment = document.getElementById('wholecomment');
    var parts = wholecomment.childNodes;
    var timer;
    var pubbutton=document.getElementById('pubbutton');                    //添加一个新的动态
    pubbutton.onclick=function(){
        var publishcon=document.getElementById('publishcon');
        if(publishcon.value==''){alert('发表内容不能为空！');}
        else{
        var a1=document.createElement('div');
        a1.id='part0';
        a1.innerHTML=
'<img src="../images/cyx.jpg" alt="" class="head">'+
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
'<div class="mainpictrue">'+ 
'未实现发图片功能'+     
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
        wholecomment.insertBefore(a1,wholecomment.childNodes[0]);
        var ownerpraise=document.getElementsByClassName('praise')[0];
        ownerpraise.onclick=function(){
        praiseBox(parts[0], ownerpraise);
        }
        var ownerclose=document.getElementsByClassName('close')[0];
        ownerclose.onclick=function(){
        parts[0].parentNode.removeChild(parts[0]);
        }

        var textArea = parts[0].getElementsByClassName('commenttext')[0];

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
        ownerbutton.onclick=function(){
            reply(parts[0],ownerbutton);
            var ownercompraise=document.getElementsByClassName('comment-praise')[0];
        ownercompraise.onclick=function(){
            praiseReply(ownercompraise);
        }
        var owneroperate=document.getElementsByClassName('comment-operate')[0];
        owneroperate.onclick=function(){
            operate(owneroperate);
        }
        }
    }
}

    var timer;
    //格式化日期
    function formateDate(date) {
        var y = date.getFullYear();
        var m = date.getMonth() + 1;
        var d = date.getDate();
        var h = date.getHours();
        var mi = date.getMinutes();
        m = m > 9 ? m : '0' + m;
        return y + '-' + m + '-' + d + ' ' + h + ':' + mi;
    }

    //删除节点
    function removeNode(node) {
        node.parentNode.removeChild(node);
    }

    /**
     * 赞分享
     * @param part 每个分享的div容器
     * @param el 点击的元素
     */
    function praiseBox(part, el) {
        var txt = el.innerHTML;
        var praisesTotal = part.getElementsByClassName('praises-total')[0];
        var oldTotal = parseInt(praisesTotal.getAttribute('total'));
        var newTotal;
        if (txt == '赞') {
            newTotal = oldTotal + 1;
            praisesTotal.setAttribute('total', newTotal);
            praisesTotal.innerHTML = (newTotal == 1) ? '我觉得很赞' : '我和' + oldTotal + '个人觉得很赞';
            el.innerHTML = '取消赞';
        }
        else {
            newTotal = oldTotal - 1;
            praisesTotal.setAttribute('total', newTotal);
            praisesTotal.innerHTML = (newTotal == 0) ? '' : newTotal + '个人觉得很赞';
            el.innerHTML = '赞';
        }
        praisesTotal.style.display = (newTotal == 0) ? 'none' : 'block';
    }

    /**
     * 发评论
     * @param part 每个分享的div容器
     * @param el 点击的元素
     */
    function reply(part, el) {
        var commentlist = part.getElementsByClassName('comment-list')[0];
        var textarea = part.getElementsByClassName('commenttext')[0];
        var commentBox = document.createElement('div');
        commentBox.className = 'comment-box';
        commentBox.setAttribute('user', 'self');
        commentBox.innerHTML =
            '<img class="myhead" src="../images/cyx.jpg" alt=""/>' +
                '<div class="comment-content">' +
                '<p class="comment-text"><span class="user">我：</span>' + textarea.value + '</p>' +
                '<p class="comment-time">' +
                formateDate(new Date()) +
                '<a href="javascript:;" class="comment-praise" total="0" my="0" style="">赞</a>' +
                '<a href="javascript:;" class="comment-operate">删除</a>' +
                '</p>' +
                '</div>';
        commentlist.appendChild(commentBox);
        textarea.value = '';
        textarea.onblur();
    }

    /**
     * 赞回复
     * @param el 点击的元素
     */
    function praiseReply(el) {
        var myPraise = parseInt(el.getAttribute('my'));
        var oldTotal = parseInt(el.getAttribute('total'));
        var newTotal;
        if (myPraise == 0) {
            newTotal = oldTotal + 1;
            el.setAttribute('total', newTotal);
            el.setAttribute('my', 1);
            el.innerHTML = newTotal + ' 取消赞';
        }
        else {
            newTotal = oldTotal - 1;
            el.setAttribute('total', newTotal);
            el.setAttribute('my', 0);
            el.innerHTML = (newTotal == 0) ? '赞' : newTotal + ' 赞';
        }
        el.style.display = (newTotal == 0) ? '' : 'inline-block'
    }

    /**
     * 操作留言
     * @param el 点击的元素
     */
    function operate(el) {
        var commentBox = el.parentNode.parentNode.parentNode;
        var part = commentBox.parentNode.parentNode;
        var txt = el.innerHTML;
        var user = commentBox.getElementsByClassName('user')[0].innerHTML;
        var textarea = part.getElementsByClassName('commenttext')[0];
        if (txt == '回复') {
            textarea.focus();
            textarea.value = '回复' + user;
            textarea.onkeyup();
        }
        else {
            removeNode(commentBox);
        }
    }

    //把事件代理到每条分享div容器
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
 }