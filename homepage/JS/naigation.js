function navfx(){
	if(PDDL==2){
    gc1.className='box2word';
    inbox3.id = 'inbox2-31';
    inbox1.id = 'inbox2-1';
    abox3.id = 'box2-3a';
    abox1.id = 'box2-1a';
    fx1.className='box2word1';
    inbox2.id = 'inbox2-1';
    abox2.id = 'box2-2';
    zt1.className='box2word';
    inbox4.id = 'inbox2-4';
    abox4.id = 'box2-4';
    fj1.className='box2word';
    sections[4].style.display='none';
    sections[2].style.display='none';
    sections[3].style.display='none';
    sections[8].style.display='none';
    sections[6].style.display='none';
    sections[7].style.display='none';
    sections[9].style.display='none';
    sections[10].style.display='none';
    FGX4.style.display='block';
    sections[5].style.display='block';
    waternum=1;
    bottom.style.display='block';
    last.style.display='block';
}
else{
    alert('请先登录!');
}
}