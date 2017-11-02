window.onload=function(){
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
function formateDate(date) {
        var y = date.getFullYear();
        var m = date.getMonth() + 1;
        var d = date.getDate();
        var h = date.getHours();
        var mi = date.getMinutes();
        m = m > 9 ? m : '0' + m;
        return y + '-' + m + '-' + d + ' ' + h + ':' + mi;
    }
    shareexp.onclick=function(){
    	if(place.value!='' && placeitd.value!='' && exprience.value!='' &&expriencepic.innerHTML!=''){
    	var	continued=document.getElementById('continued');
    	continued.style.display='block';
    	var topiccon=document.createElement('div');
    	topiccon.className='topic1';
    	topic.appendChild(topiccon);
    	var topichpic=document.createElement('div');
    	topichpic.className='topichpic';
    	topichpic.innerHTML='<img src="../images/lv.jpg" alt="" style="width:90px;height:90px;border-radius:20px;">';
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


  shareexpctu.onclick=function(){
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