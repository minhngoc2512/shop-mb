$(document).ready(function(){
    $(".tab-item").click(function(){
        var id_tab = $(this).attr('id');
        if($(this).hasClass('active')){
            return false;
        }
        var id_tab_active = $('.tab-item.active').attr('id');
        console.log('id_tab:'+id_tab);
        console.log('actived:'+id_tab_active);
        $('.tab-item').removeClass('active');
        $(this).addClass('active');
        $('#content-'+id_tab_active).removeClass('active-tab');
        $('#content-'+id_tab).addClass('active-tab');
    });

    $('#btn-option').click(function(){
        var type_item = $(".type-item");
        if(type_item.hasClass('type-1')){
            $(this).html('<img src="public/images/icons/type_2.png">');

            type_item.removeClass('type-1');
            type_item.addClass('type-2');
            console.log('rm 1')
        }else{
            $(this).html('<img src="public/images/icons/type_1.png">');
            type_item.removeClass('type-2');
            type_item.addClass('type-1');
            console.log('rm 2');
        }
    });
    console.log('run js');

    window.addEventListener('load', function(){
        console.log('load');
        // var mouseTimer;
        // function mouseDown() {
        //     mouseUp();
        //     mouseTimer = window.setTimeout(execMouseDown,2000); //set timeout to fire in 2 seconds when the user presses mouse button down
        // }
        //
        // function mouseUp() {
        //     if (mouseTimer) {
        //         console.log('clear event');
        //         window.clearTimeout(mouseTimer);
        //     } //cancel timer when mouse button is released
        //     div.style.backgroundColor = "black";
        // }
        //
        // function execMouseDown() {
        //     div.style.backgroundColor = "#CFCF00";
        // }
        //
        // var div = document.getElementById("bam");
        // div.addEventListener("mousedown", mouseDown);
        // document.body.addEventListener("mouseup", function(){
        //     mouseUp();
        //     console.log('click body')
        // });

        // window.addEventListener('touch', function() {
        //     console.log('asdf');
        // });
        //
        //
        // var box1 = document.getElementById('box1')
        // var statusdiv = document.getElementById('statusdiv')
        // var startx = 0
        // var dist = 0
        //
        var box1 = document.getElementById("bam");
        var touchEvent;
        var statusHold = false;
        function touchHold(){
            clearEvent();
            touchEvent = window.setTimeout(actionHold,2000);
        }
        function actionHold() {
            statusHold=true;
            box1.style.backgroundColor = "#CFCF00";
        }

        function clearEvent() {
            if (touchEvent) {
                console.log('clear event');
                window.clearTimeout(touchEvent);
            } //cancel timer when mouse button is released
            box1.style.backgroundColor = "black";
        }


        box1.addEventListener('touchstart', function(e){
            touchHold();
            console.log('touchstart');
            $('#text').html('<h1>sdfgdfg</h1>');
            // var touchobj = e.changedTouches[0] // reference first touch point (ie: first finger)
            // startx = parseInt(touchobj.clientX) // get x position of touch point relative to left edge of browser
            // statusdiv.innerHTML = 'Status: touchstart<br> ClientX: ' + startx + 'px'
            // e.preventDefault()
        }, false)
        //
        box1.addEventListener('touchmove', function(e){

            console.log(e);

        }, false)
        //
        box1.addEventListener('touchend', function(e){
            if(statusHold===false) {
                clearEvent();
                // console.log(e);
                console.log('touchend');
            }
        }, false)
        var body = document.getElementById('body');
        body.addEventListener('touchend', function(e){
            if(statusHold===false) {
                clearEvent();
                console.log(e);
                console.log('body');
            }
        }, false)
    }, false)
});

