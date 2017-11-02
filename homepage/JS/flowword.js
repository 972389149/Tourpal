function animate1(offset1) //通过改变top的值，使其可以实现滑上去的效果
    {
        var newset1 = parseInt(word.style.top) + offset1;
        var time1 = 960;
        var interval1 = 12;
        var speed1 = offset1 / (time1 / interval1);
        animated1 = true;
        function go1() {
            if (parseInt(word.style.top) > newset1) {
                word.style.top = parseInt(word.style.top) + speed1 + 'px';
                setTimeout(go1, interval1);
            } else {
                animated1 = false;
                word.style.top = newset1 + "px";
                if (newset1 < -360) {
                    word.style.top = -120 + "px";
                }
            }

        }
        go1();
    }
    function play1() {
        setInterval(function() {
            up.onclick();
        },
        8000)
    }