$(document).ready(function () {
    $(".tab-item").click(function () {
        var id_tab = $(this).attr('id');
        if ($(this).hasClass('active')) {
            return false;
        }
        var id_tab_active = $('.tab-item.active').attr('id');
        console.log('id_tab:' + id_tab);
        console.log('actived:' + id_tab_active);
        $('.tab-item').removeClass('active');
        $(this).addClass('active');
        $('#content-' + id_tab_active).removeClass('active-tab');
        $('#content-' + id_tab).addClass('active-tab');
    });

    $('#btn-option').click(function () {
        var type_item = $(".type-item");
        if (type_item.hasClass('type-1')) {
            $(this).html('<img src="public/images/icons/type_2.png">');
            type_item.removeClass('type-1');
            type_item.addClass('type-2');
        } else {
            $(this).html('<img src="public/images/icons/type_1.png">');
            type_item.removeClass('type-2');
            type_item.addClass('type-1');
        }
    });
    var box1 = document.getElementsByClassName("touch-item");
    var touchEvent;
    var statusHold = false;
    var item_action;

    function touchHold() {
        if (statusHold === false) {
            clearEvent();
            touchEvent = window.setTimeout(actionHold, 500);
        }
    }

    function actionHold() {
        statusHold = true;
        item_action.target.offsetParent.classList.add('active-content-touch');
        clearEvent();
    }

    function clearEvent() {
        if (touchEvent) {
            clearTimeout(touchEvent);

        }
    }

    for (var i = 0; i < box1.length; i++) {
        var element = box1[i];
        element.addEventListener('touchstart', function (e) {
            var element = e.target.offsetParent.classList;
            if(element.contains('active-content-touch')){
                return;
            }else{
                var item_touch_old = $('.touch-item');
                if(item_touch_old.hasClass('active-content-touch')){
                    item_touch_old.removeClass('active-content-touch');
                    statusHold = false;
                }
                item_action = e;
                touchHold();
            }


        }, false);
        element.addEventListener('touchend', function (e) {
            clearEvent();
            var element = e.target.offsetParent.classList;
            if(element.contains('active-content-touch')){
            }
        }, false);
    }
});

