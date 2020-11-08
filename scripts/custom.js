$(function () {

    // <!-- _____________________________ vertical-navbar movement _____________________________________________________________ -->

    var a = window.innerWidth;
    var navbar = $("#nav");
    var item_index = 0;
    var length = 0;

    $("#NavRightButton").click(function () {

        var nav_length = $("#nav").width();
        var scroll_length = $("#nav .nav").width();
        var fark = scroll_length - nav_length;

        if (item_index == 0 || length <= fark) {

            var nav_item = $("#nav .nav-item").eq(item_index);
            length = length + nav_item.width() + 30;
            $("#nav").animate({
                scrollLeft: length
            }, 1000);
            item_index++;

        }
        else {

            $("#nav").animate({
                scrollLeft: -length
            }, 1000);
            item_index = 0;
            length = 0;

        }
    });

    navbar.find(".nav-item .nav-link").click(function () {

        $(this).addClass("active");
        $(this).parent().siblings().find(".nav-link").removeClass("active");

    });


    // <!-- _____________________________ active olanı ortalamaya çalışma _____________________________________________________________ -->


    var active_element = $("#nav .nav-item").find(".active");
    var kaydir = 0;
    if (a < 992) {
        var active_elementWidth = active_element.width();
        // .left
        var active_elementSol = active_element.offset();
        var kaydir = (active_elementSol - a / 2) + active_elementWidth / 2;

        $("#nav").animate({
            scrollLeft: kaydir
        }, 1000);
    }

    // <!-- _____________________________ active position on resizing _____________________________________________________________ -->

    var rtime;
    var timeout = false;
    var delta = 200;

    $(window).resize(function () {
        rtime = new Date();
        // console.log(rtime);
        if (timeout === false) {
            timeout = true;
            setTimeout(resizeend, delta);
        }
    });

    function resizeend() {
        if (new Date() - rtime < delta) {
            setTimeout(resizeend, delta);
        } else {
            timeout = false;

            // alert(a);
            c = window.innerWidth;
            b = a;
            a = window.innerWidth;
            // sayfa büyüdü
            if (c > b) {
                // alert("sayfa büyüdü");
                // alert("şimdiki genişlik = " + a);
                // alert("önceki genişlik = " + b);
                // alert("a-b = " + (a - b));
                // alert(kaydir);

                if (kaydir != 0) {
                    kaydir = kaydir - (a - b) / 2;
                }
            } else {
                // burası 992 den büyükten küçülme
                if (b > 992) {
                    // burası büyümüş de küçülmüş
                    // alert(kaydir);
                    if (kaydir != 0) {
                        // if(c > 992)
                        kaydir = kaydir + (b - a) / 2;
                        // burası sıfırdan ilk defa küçülecek
                    } else {
                        if (c > 992) {
                            kaydir = kaydir;
                        } else {
                            active_elementWidth = active_element.width();
                            // left
                            active_elementSol = active_element.offset();
                            kaydir = (active_elementSol - a / 2) + active_elementWidth / 2;
                        }
                    }
                    // burası 992 den küçük kısımda küçülme
                } else {
                    // alert("sayfa sıkıntısız küçüldü");
                    // alert("şimdiki genişlik = " + a);
                    // alert("önceki genişlik = " + b);
                    // alert("b-a = " + (b - a));
                    kaydir = kaydir + (b - a) / 2;
                }
            }

            // alert(kaydir);
            $("#nav").animate({
                scrollLeft: kaydir
            }, 1000);
        }
    }


    // _____________________________ mobil menu _____________________________________________________________
    var menu_ac = $("#menu_ac");
    var menu_kapat = $("#menu_kapat");
    var m_section = $("#menu_section");
    var submenu_button = $("#submenu_button_container li");
    var menu_3 = $("#menu_3");
    // var a = 0, e = 0, l = 0;

    $('#menu_ac, .overlay').click(function () {
        // scrollbar şi karıştırdı
        w = window.innerWidth;
        if (w > 1200) {
            submenu_button.removeClass('active').find('ul').hide();
            m_section.hide(333);
            $('.overlay').removeClass('show');
            $('body').removeClass('overflow');

            if (menu_3.hasClass("fadeInDown_2")) {
                menu_3.addClass("fadeOutUp_2").removeClass("fadeInDown_2");
            } else {
                menu_3.addClass("fadeInDown_2").removeClass("fadeOutUp_2");
            }
            // menu_3.toggle(333);
        } else {
            // menu_3.hide(333);

            if ($(m_section).hasClass("animate__slideInLeft")) {
                $(m_section).addClass('animate__slideOutLeft').removeClass('animate__slideInLeft');
                $('.overlay').removeClass('show');
                $('body').removeClass('overflow');
            } else {
                $(m_section).show().addClass('animate__slideInLeft').removeClass('animate__slideOutLeft');
                $('.overlay').addClass('show');
                $('body').addClass('overflow');
            }

            menu_kapat.click(function () {
                $(m_section).addClass('animate__slideOutLeft').removeClass('animate__slideInLeft');
                $('.overlay').removeClass('show');
                $('body').removeClass('overflow');
            });

            submenu_button.removeClass('active').find('ul').hide();

        }
    });


    // _____________________________ mobil menunun submenusu _____________________________________________________________
    var blue_2 = "#1a73e8";
    submenu_button.click(function () {
        if ($(this).hasClass('active')) {
            $(this).removeClass('active');
            $(this).find("ul").hide(333);
        } else {
            $(this).addClass('active');
            $(this).find("ul").show(333);
            $(this).siblings().removeClass('active').find("ul").hide(333);
        }
    });


    // _____________________________ checkbox - radio button  _____________________________________________________________
    $(':radio, :checkbox').each(function () {
        $(this).after('');
        if ($(this).is(':checked')) {
            $(this).parent().addClass('checked');
        }
    });

    $('label').on('click', function (e) {

        // radio
        if ($(':radio', this).length) {
            var name = $(':radio', this).attr('name');
            $('input[name=' + name + ']').parent().removeClass('checked');
            $(this).addClass('checked');
        }

        // checkbox
        if ($(':checkbox', this).length) {
            if ($(':checkbox', this).is(':checked')) {
                $(this).addClass('checked');
            } else {
                $(this).removeClass('checked');
            }
        }

    });

});