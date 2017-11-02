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
     //点赞的函数
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

    //发表回复的内容
    function reply(part, el) {
        var commentlist = part.getElementsByClassName('comment-list')[0];
        var textarea = part.getElementsByClassName('commenttext')[0];
        var commentBox = document.createElement('div');
        commentBox.className = 'comment-box';
        commentBox.setAttribute('user', 'self');
        commentBox.innerHTML =                                          //赋予新的div自己发表的内容
        '<div id="pltouxiang">'+
            '<img class="myhead" src="../../comment/images/cyx.jpg" alt=""/>' +
            '</div>'+
                '<div class="comment-content">' +
                '<p class="comment-text"><span class="user">我：</span>' + textarea.value + '</p>' +
                '<p class="comment-time">' +
                formateDate(new Date()) +
                '<a href="javascript:;" class="comment-praise" total="0" my="0" style="">赞</a>' +
                '<a href="javascript:;" class="comment-operate">删除</a>' +
                '</p>' +
                '</div>';
        commentlist.appendChild(commentBox);              //插入到评论最后
        var pltouxaing=document.getElementById('pltouxiang');
        pltouxiang.innerHTML=personpic.innerHTML;
        textarea.value = '';
        textarea.onblur();
    }
     //点赞评论的内容
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
    //对评论里面的操作，实现回复或者删除
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