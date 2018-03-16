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


    window.addEventListener('load', function(){
        var mouseTimer;
        function mouseDown() {
            mouseUp();
            mouseTimer = window.setTimeout(execMouseDown,2000); //set timeout to fire in 2 seconds when the user presses mouse button down
        }

        function mouseUp() {
            if (mouseTimer) {
                console.log('clear event');
                window.clearTimeout(mouseTimer);
            } //cancel timer when mouse button is released
            div.style.backgroundColor = "#FFFFFF";
        }

        function execMouseDown() {
            div.style.backgroundColor = "#CFCF00";
        }

        var div = document.getElementById("bam");
        div.addEventListener("mousedown", mouseDown);
        document.body.addEventListener("mouseup", function(){
            console.log('click body')
        });

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
        // box1.addEventListener('touches', function(e){
        //     console.log('touchcancel');
        //     var touchobj = e.changedTouches[0] // reference first touch point (ie: first finger)
        //     startx = parseInt(touchobj.clientX) // get x position of touch point relative to left edge of browser
        //     statusdiv.innerHTML = 'Status: touchstart<br> ClientX: ' + startx + 'px'
        //     e.preventDefault()
        // }, false)
        //
        // box1.addEventListener('touchmove', function(e){
        //     console.log('touchmove');
        //     var touchobj = e.changedTouches[0] // reference first touch point for this event
        //     var dist = parseInt(touchobj.clientX) - startx
        //     statusdiv.innerHTML = 'Status: touchmove<br> Horizontal distance traveled: ' + dist + 'px'
        //     e.preventDefault()
        // }, false)
        //
        // box1.addEventListener('touchend', function(e){
        //     console.log('touchend');
        //     var touchobj = e.changedTouches[0] // reference first touch point for this event
        //     statusdiv.innerHTML = 'Status: touchend<br> Resting x coordinate: ' + touchobj.clientX + 'px'
        //     e.preventDefault()
        // }, false)

    }, false)
});

