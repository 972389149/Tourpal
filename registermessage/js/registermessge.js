window.onload=function(){
	var birthdaya=document.getElementById('birthdaya');
	var birthdayb=document.getElementById('birthdayb');
	var birthdayc=document.getElementById('birthdayc');
	var birthday1=document.getElementById('birthday1');
	var age=document.getElementById('age');
	var zodiac=document.getElementById('zodiac');
	var Constellation=document.getElementById('Constellation');
	birthdaya.onkeyup=function(){
		var userage=birthdaya.value;
		if(userage.length<4){
			zodiac.value='';
			age.value='';
		}
		if(userage.length==4){
		var age1=2017-userage;
         if(age1<0){
         	birthday1.innerHTML='<span style="color:red;">请输入正确的年份!</span>';
         }
         else
         {
         	birthday1.innerHTML='格 式 : 1998 - 01 - 01';
         	age.value=age1;
        for(var i=1901;i<=2017;i=i+12){
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
		if(parseInt(birthdayb.value)>12||parseInt(birthdayb.value)<1){
			birthday1.innerHTML='<span style="color:red;">请输入正确的月份!</span>';
		}
		else{
			birthday1.innerHTML='格 式 : 1998 - 01 - 01';
		}
	}
    birthdayc.onkeyup=function(){
		if(parseInt(birthdayc.value)>31||parseInt(birthdayc.value)<1||birthdayc.value.length==1){
			birthday1.innerHTML='<span style="color:red;">请输入正确的日期!</span>';
		}
		else{
			birthday1.innerHTML='格 式 : 1998 - 01 - 01';
				if(birthdayb.value.length==1){
					birthdayb.value=0+birthdayb.value;
				}
				if(birthdayc.value.length==2){
				   Constell();
				}
				if(birthdayc.value.length==0){
					Constellation.value='';
				}
	        }
  }
  function Constell(){
			var Constellation1=birthdayb.value+birthdayc.value;
			if(321<=parseInt(Constellation1)&&parseInt(Constellation1)<=420){
				Constellation.value='白羊座';
			}
			if(421<=parseInt(Constellation1)&&parseInt(Constellation1)<=521){
				Constellation.value='金牛座';
			}
			if(522<=parseInt(Constellation1)&&parseInt(Constellation1)<=621){
				Constellation.value='双子座';
			}
			if(622<=parseInt(Constellation1)&&parseInt(Constellation1)<=722){
				Constellation.value='巨蟹座';
			}
			if(723<=parseInt(Constellation1)&&parseInt(Constellation1)<=822){
				Constellation.value='狮子座';
			}
			if(823<=parseInt(Constellation1)&&parseInt(Constellation1)<=923){
				Constellation.value='处女座';
			}
			if(924<=parseInt(Constellation1)&&parseInt(Constellation1)<=1023){
				Constellation.value='天秤座';
			}
			if(1024<=parseInt(Constellation1)&&parseInt(Constellation1)<=1122){
				Constellation.value='天蝎座';
			}
			if(1123<=parseInt(Constellation1)&&parseInt(Constellation1)<=1221){
				Constellation.value='射手座';
			}
			if(1221<=parseInt(Constellation1)&&parseInt(Constellation1)<=1231||0<parseInt(Constellation1)&&parseInt(Constellation1)<=120){
				Constellation.value='魔蝎座';
			}
			if(121<=parseInt(Constellation1)&&parseInt(Constellation1)<=219){
				Constellation.value='水瓶座';
			}
			if(220<=parseInt(Constellation1)&&parseInt(Constellation1)<=320){
				Constellation.value='双鱼座';
			}
		}




		var nickname=document.getElementById('nickname');
		var personal2=document.getElementsByClassName('personal2');
		nickname.onfocus=function(){
             personal2[0].innerHTML='好的昵称更容易交到朋友哟^.^';
		}
		nickname.onblur=function(){
			var checknick=/^(\w|[\u4e00-\u9fa5]){3,10}$/gi;
			if(checknick.test(nickname.value)==true){
				personal2[0].innerHTML='<span style="color:#079B2E; font-size:14px;">√ 检测通过</span>';
			}
			else{
				personal2[0].innerHTML='<span style="color:red; font-size:11px;">× 注意特殊字符且长度不超过10</span>';
			}
		}
		var englishname=document.getElementById('englishname');
		englishname.onblur=function(){
            var checkenglish=/\w{4,12}/gi;
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
			var checktelephone=/^1(3|4|5|7|8)\d{9}$/;
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
			var checksurname= /^[\u4e00-\u9fa5]{2,5}$/g;
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
			var checkphone=/^(\d)(\d+)$/g;
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
}