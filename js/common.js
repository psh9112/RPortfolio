$('header').load('./inc.html header .top');
$('footer').load('./inc.html footer .bottom');
$('nav').load('./inc.html nav .navigator');

function init() {
    // header 
    let scrollState = { y: 0, y2: 0, state: 'down' };
    let offsetTop = [
        $('.con').eq(0).offset().top,
        $('.con').eq(1).offset().top,
        $('.con').eq(2).offset().top,
        $('.con').eq(3).offset().top
    ]

    console.log(offsetTop);

    function scrollFn() {

        scrollState.y = $(window).scrollTop();

        if (scrollState.y > scrollState.y2) {
            scrollState.state = true;
        } else {
            scrollState.state = false;
        }

        scrollState.y2 = scrollState.y
    };

    function headerFn() {

        scrollFn();

        // 헤더 스크롤 down 숨기기, up 보이기
        if (scrollState.state) {
            $('header').addClass('active');
        } else {
            $('header').removeClass('active');
        }

    };




    let posY, scrollTop;
    let winH = $(window).height(); // window 높이값

    // .con top값 도달 시 .title-02 active 작동
    $(window).on('scroll', function () {
        headerFn();

        scrollTop = $(window).scrollTop();

        $('.con').each(function (i) {
            posY = $('.con').eq(i).offset().top;

            if (posY - winH < scrollTop) {
                $('.con').eq(i).find('.title-02').addClass('active');
            }
        })

    });

    // menu a click > 해당 페이지 이동

    $('#menu > a').on('click', pageMove);

    function pageMove() {
        let idx = $(this).index();

        let conTop = $('.con').eq(idx).offset().top;

        $('html').animate({ scrollTop: conTop }, 500);
    }



    //trigger click open


    const elTrigger = document.querySelector('header .bar');
    const elNavi = document.querySelector('nav');

    setTimeout(function () {
        elTrigger.addEventListener('click', function () {
            elTrigger.classList.toggle('nav-active');

            if (elTrigger.classList.contains('nav-active')) {
                elNavi.classList.add('open');
            } else {
                elNavi.classList.remove('open');
            }
        })
    })


    // 네비게이션 menu a click > 해당 페이지 이동

    $('.navigator > a').on('click', pageMove);

    function pageMove() {
        let idx = $(this).index();

        let conTop = $('.con').eq(idx).offset().top;

        $('html').animate({ scrollTop: conTop }, 500);

        elTrigger.classList.remove('nav-active');
    }


    // top btn

    $('.top_btn > button').on('click', function () {
        $('html').animate({ scrollTop: 0 }, 500);
        return false;
    });

}

$(window).on('load', init);