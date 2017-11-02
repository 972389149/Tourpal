 function Constell(){
            var Constellation1=birthdayb.value+birthdayc.value;           //根据月份+日期的方式计算星座，所以要求输入的日期必须为2个数字
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

        function readFile1(){ 
    var file = this.files[0]; 
    if(!/image\/\w+/.test(file.type)){ 
        alert("文件必须为图片！"); 
        return false; 
    } 
    var reader1 = new FileReader(); 
    reader1.readAsDataURL(file); 
    reader1.onload = function(e){ 
        personpic.innerHTML = '<img src="'+this.result+'" alt=""/>';
        var personcomfirm=document.getElementById('personcomfirm');
        personcomfirm.onclick=function(){
            var userPic=document.getElementById('userPic');
            userPic.innerHTML=personpic.innerHTML;
            alert('修改成功');
        } 
    } 
}