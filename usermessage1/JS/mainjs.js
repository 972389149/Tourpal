window.onload=function(){
      var up=document.getElementById('up');
     var time=null;
     var viewtop=document.documentElement.clientHeight;          //获取可视区域高度
     var istop=true;                                           //用于中途停止滚动和显示按钮
window.onscroll=function(){                                      //滚动条事件
  var flow=document.documentElement.scrollTop || document.body.scrollTop;            //实现当
    if(flow>=viewtop){                                          //滚动条到顶端距离大于可视区域就出现按钮
      up.style.display='block';
    }
    else{
      up.style.display='none';
    }
          if(!istop){                                        //实现中途停止滚动
            clearInterval(time);                                      
          }
          istop=false;
}
     up.onclick=function(){                               //点击按钮事件
      time=setInterval(function(){
      var flow=document.documentElement.scrollTop || document.body.scrollTop;          //获取滚动条到顶端高度
          var upspeed=Math.floor( - flow / 8);               //控制向上滚的速度.取负数是因为向下取整，使滚动条到顶端距离为0
          document.documentElement.scrollTop=document.body.scrollTop=flow+upspeed; 
          istop=true;
          if(flow==0){                         //如果距离为0则清除定时器
        clearInterval(time);
      }
      },30);
     }


             //这是登录弹出框
  var oBtn=document.getElementById("btnLogin");
                           //点击登录按钮
  oBtn.onclick=function()
  {
  openNew();
  return false;
  }
        /*弹出登录框*/
function openNew(){
                                   //获取页面的高度和宽度
  var sWidth=document.body.scrollWidth;
  var sHeight=document.body.scrollHeight;
  
                                     //获取页面的可视区域高度（一般页面是竖向的，所以可以不用获取宽度）
  var wHeight=document.documentElement.clientHeight;
  
  var oMask=document.createElement("div");          //创建一个div，这个div是包含整个页面，其是遮盖层
    oMask.id="mask";
    oMask.style.height=sHeight+"px";
    oMask.style.width=sWidth+"px";
    document.body.appendChild(oMask);
  var oLogin=document.getElementById("Login");               //其是弹出层，下面内容是弹出层的结构
    // oLogin.id="login";
  var oLogin=document.getElementById('login');
    oLogin.className='loginCona';
    // document.body.appendChild(oLogin);
                                                                  //获取登陆框的宽和高
  var dHeight=oLogin.offsetHeight;
  var dWidth=oLogin.offsetWidth;
                                                                 //设置登陆框的left和top
    oLogin.style.left=sWidth/2-dWidth/2+"px";
    oLogin.style.top=wHeight/2-dHeight/2+"px";
                                                                     
                                                                     //点击关闭按钮
  var oClose=document.getElementById("close");
                                                                    //点击登陆框以外的区域也可以关闭登陆框
              oClose.onclick=oMask.onclick=function(){
                      document.body.removeChild(oMask);
                      oLogin.className='loginCon';
          }
              }
              
     var delu = document.getElementById('delu');
     var PDDL = 1;
    delu.onclick = function() {
        var User = document.getElementById('user');
        var UCon = User.value;
        var Pass = document.getElementById('password');
        var PCon = Pass.value;
        if (UCon != '0') {
            alert('Warning:不存在此账号！')
        }
        if (UCon == '0' && PCon == '0') {
            var oLogin = document.getElementById('login');
            oLogin.className = 'loginCon';
            oMask = document.getElementById('mask');
            document.body.removeChild(oMask);
            var Moveword = document.getElementById('moveword');
            Moveword.style.display='none';
            var userMessage=document.getElementById('userMessage');
            userMessage.style.display='block';
            PDDL=2;

        } else {
            alert('Warning:密码错误！');
        }
    }
    var loginouted=document.getElementById('loginout');
    loginout.onclick=function(){
        window.alert('你已退出当前账号！');
    var Moveword = document.getElementById('moveword');
             Moveword.style.display='block';
            userMessage.style.display='none';
            PDDL=1;
    }
     //下面是评论区，if（PDDL==2）是判断是否已经登录
       var  comment=document.getElementById('comment');
       var praise=document.getElementsByClassName('praise')[0];
       var textArea = document.getElementsByClassName('comment')[0];
                 //实现按点赞和取消点赞
         praise.onclick=function(){
          if(PDDL==2){
         var txt = praise.innerHTML;
         var praisesTotal = document.getElementsByClassName('praises-total')[0];
         if (txt == '赞') {
             praisesTotal.innerHTML ='我和' + '1080' + '个人觉得很赞';
             praise.innerHTML = '取消赞';
         }
         else {
             praisesTotal.innerHTML = '1080' + '个人觉得很赞';
             praise.innerHTML = '赞';
         }
       }else{
        alert('请先登录！')
       }
     }
        // //评论获取焦点
        textArea.onfocus = function () {
            this.parentNode.className = 'text-box text-box-on';
            this.value = (this.value == '评论…' )? '' : this.value;
            this.onkeyup();
        }

        // //评论失去焦点
        textArea.onblur = function () {
            if(this.value==''){
                  this.value = '评论…';
                    this.parentNode.className = 'text-box';
                }
        }

        // //评论按键事件
        textArea.onkeyup = function () {
            var val = this.value;
            var len = val.length;
            var els = this.parentNode.children;
            var btn = els[1];
            var word = els[2];
            if (len <=0 || len > 140) {
                btn.className = 'btn btn-off';
            }
            else {
                btn.className = 'btn';
            }
            word.innerHTML = len + '/140';
        }

    // 格式化日期
    function formateDate(date) {
        var y = date.getFullYear();
        var m = date.getMonth() + 1;
        var d = date.getDate();
        var h = date.getHours();
        var mi = date.getMinutes();
        m = m > 9 ? m : '0' + m;                 //使个数月份前面加0
        return y + '-' + m + '-' + d + ' ' + h + ':' + mi;
    }
    
    var btn=document.getElementsByClassName('btn')[0];
     var commentList = document.getElementsByClassName('comment-list')[0];
     var commentBox = document.createElement('div');
     function Com(){
     btn.onclick=function(){                              //实现添加一个一个新的评论div，并且赋予内容
        if(PDDL==2){
        var commentBox = document.createElement('div');
              commentBox.setAttribute('user', 'self');
              commentBox.className = 'comment-box';
              commentBox.innerHTML=
                     '<img class="myhead" src="../Pictures/userhead.jpg" alt=""/>'+
                     '<div class="comment-content">'+
                     '<p class="comment-text"><span class="user">我：</span>' + textArea.value + '</p>' +
                     '<p class="comment-time">' +
                      formateDate(new Date()) +'&nbsp'+
                      '<a href="javascript:;" class="comment-praise" total="0" my="0" style="">赞</a>' +
                      '<a href="javascript:;" class="comment-operate">删除</a>' +
                      '</p>' +
                      '</div>';
                commentList.appendChild(commentBox);               //把评论放到最后
                textArea.value="";                                 //把文本域恢复原来样子
                textArea.onblur();
       }
       else{
                      alert('请先登录!');
                    }         
     }
   }
 Com();
        comment.onclick = function (e) {               //实现评论点赞和回复
            e = e || window.event;
            var el = e.target;                      //触发事件，判断点击的是哪个赞或者留言或者删除
            switch (el.className) {
                //赞留言
                case 'comment-praise':              //当 点击赞时，触发函数
                    if(PDDL==2){
                    praiseReply(el);}
                    else{
                      alert('请先登录!');
                    }
                    break;

                //操作留言
                case 'comment-operate':               //当点击回复或者删除时，触发函数
                    if(PDDL==2){
                    operate(el);}
                    else{
                      alert('请先登录!');
                    }
                    break;
                }
            }
        
            function praiseReply(el) {                      //评论点赞函数
        var myPraise = parseInt(el.getAttribute('my'));
        var oldTotal = parseInt(el.getAttribute('total'));
        var newTotal;
        if (myPraise == 0) {                                  //获取原来点赞数total,并且+1
            newTotal = oldTotal + 1;
            el.setAttribute('total', newTotal);
            el.setAttribute('my', 1);                           
            el.innerHTML = newTotal + ' 取消赞';
        }
        else {                                                    //获取点赞数，并且-1
            newTotal = oldTotal - 1;
            el.setAttribute('total', newTotal);
            el.setAttribute('my', 0);
            el.innerHTML = (newTotal == 0) ? '赞' : newTotal + ' 赞';
        }
        el.style.display = (newTotal == 0) ? '' : 'inline-block'
    }
    function operate(el) {                                          //实现回复或者删除功能
        var commentBox1 = el.parentNode.parentNode.parentNode;
        var box = commentBox1.parentNode.parentNode.parentNode;
        var txt = el.innerHTML;
        var user = commentBox1.getElementsByClassName('user')[0].innerHTML;
        var textarea = box.getElementsByClassName('comment')[0];
        if (txt == '回复') {                                  //判断如果是回复就执行回复
            textarea.focus();
            textarea.value = '回复' + user;
            textarea.onkeyup();
        }
        else {                                                     //否则执行删除
            // commentBox.className='hidden'; 
            var a2=el.parentNode.parentNode.parentNode.parentNode;          //获取曾曾祖父节点
            var a3=a2.lastChild;                                             //删除曾曾祖父最后一个节点，就是新添加的那个。
            a2.removeChild(a3);                                        
        }                                                                          
      }
  }