function waterfall(waterfall,pic){
    var water=document.getElementById('waterfall');
    var pic=document.getElementsByClassName('pic');
    var num=5;
    var picHArr=[];//用于存储 每列中的列相加的高度。
    for(var i=0;i<pic.length;i++){
        var picH=pic[i].offsetHeight;
        if(i<num){
            picHArr[i]=picH;
        }else{
            var minH=Math.min.apply(null,picHArr);//数组picHArr中的最小值minH
            var minHIndex=getminHIndex(picHArr,minH);
            pic[i].style.position='absolute';//设置绝对位移
            pic[i].style.top=minH+'px';
            pic[i].style.left=pic[minHIndex].offsetLeft+'px';
            picHArr[minHIndex]+=pic[i].offsetHeight;//更新添加了块框后的列高
        }
    }
}
function getminHIndex(arr,minH){
    for(var i in arr){
        if(arr[i]==minH){
            return i;
        }
    }
}
function checkscrollside(){
    var water=document.getElementById('waterfall');
    var pic=document.getElementsByClassName('pic');
    var lastPicH=pic[pic.length-1].offsetTop;
    var scrollTop=document.documentElement.scrollTop||document.body.scrollTop;//解决兼容性
    var documentH=document.documentElement.clientHeight;//页面高度
    return (lastPicH<scrollTop+documentH)?true:false;//到达指定高度后 返回true，触发waterfall()函数
}