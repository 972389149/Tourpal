// window.onload=function(){
// 	waterfall('waterfall','pic');
// 	var dataInt={'data':[
// 	{'src':'../images/1.jpg'},
// 	{'src':'../images/2.jpg'},
// 	{'src':'../images/3.jpg'},
// 	{'src':'../images/4.jpg'},
// 	{'src':'../images/5.jpg'},
// 	{'src':'../images/6.jpg'},
// 	{'src':'../images/7.jpg'},
// 	{'src':'../images/8.jpg'},
// 	{'src':'../images/9.jpg'},
// 	{'src':'../images/10.jpg'},
// 	{'src':'../images/11.jpg'},
// 	{'src':'../images/12.jpg'},
// 	{'src':'../images/13.jpg'},
// 	{'src':'../images/14.jpg'},
// 	{'src':'../images/15.jpg'},
// 	{'src':'../images/16.jpg'},
// 	{'src':'../images/17.jpg'},
// 	{'src':'../images/18.jpg'},
// 	{'src':'../images/19.jpg'},
// 	{'src':'../images/20.jpg'},
// 	{'src':'../images/21.jpg'},
// 	]}; 
// 	window.onscroll=function(){
//         if(checkscrollside()){
//             var owater = document.getElementById('waterfall');
//             for(var i=0;i<dataInt.data.length;i++){
//                 var oPic=document.createElement('li'); 
//                 oPic.className='pic';                  
//                 owater.appendChild(oPic);            
//                 var oinpic=document.createElement('div');
//                 oinpic.className='inpic';
//                 oPic.appendChild(oinpic);
//                 var oImg=document.createElement('img');
//                 oImg.src='../images/'+dataInt.data[i].src;
//                 oinpic.appendChild(oImg);
//             }
//             waterfall('waterfall','pic');
//         };
//     }
// }
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