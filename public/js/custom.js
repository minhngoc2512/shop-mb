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
        var box1 = document.getElementsByClassName("touch-item");
        var touchEvent;
        var statusHold = false;
        function touchHold(){
            if(statusHold===false) {
                clearEvent();
                touchEvent = window.setTimeout(actionHold, 1000);
            }
        }
        function actionHold() {
            statusHold=true;
            console.log('status:'+statusHold);
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
            // alert('demo alert');
            touchHold();
            console.log('touchstart');
            $('#text').html('<h1>sdfgdfg</h1>');
        }, false);
        //
        box1.addEventListener('touchmove', function(e){

            console.log(e);

        }, false);
        //
        box1.addEventListener('touchend', function(e){
            if(statusHold===false) {
                clearEvent();
                // console.log(e);
                console.log('touchend');
            }
        }, false);
        var body = document.getElementById('body');
        body.addEventListener('touchend', function(e){
            if(e.target.className!=='active-event'){
                clearEvent();
                statusHold=false;

                console.log('status:'+statusHold);
            }
        }, false);
});

