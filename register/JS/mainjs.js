// JavaScript Document



    	window.onload=function(){
    		var register=document.getElementById("main2");
    		 function change(){                                     //用来改变注册按钮的背景
    			register.onmouseover=function(){
    				register.id="main2-1";
    			}
    			register.onmouseout=function(){
    				register.id="main2"
    			}
    			
    			}
    			change();

    			function Zhanghao(){                                           //用来验证账号是否符合格式
    			var zhanghao=document.getElementById("zhanghao");
    			var zhanghao1=document.getElementById("zhanghao1");
       			    zhanghao.onfocus=function(){
    				zhanghao1.id="zhanghao2";
    				zhanghao1.innerHTML=" &nbsp;长度为8-12个字符，仅限数字或字母";
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
    				           mima1.innerHTML=" &nbsp;长度为6-12个字符，以字母开头，仅限数字或字母";
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
    				   			answer.innerHTML=" &nbsp;此答案用于找回你的密码";
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
    			} 