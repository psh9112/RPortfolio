
let lnfoData;

$.ajax({
    url: './js/works.xml',
    success: function (data) {
        infoData = data;

        printFn($(infoData).find('content').eq(0));

        selectFn();

    }
})

function printFn(data) {


    let elTag = '', elData = [], title, link, contribute, period, string, img;

    // works.xml 데이터 보여주기

    title = data.find('title').html();
    link = data.find('link').html();
    contribute = data.find('contribute').html();
    period = data.find('period').html();
    string = data.find('string').html();
    img = data.find('img').html();
    page = data.find('page').html();

    elTag = `<div class="sub-proj">
    <article class="proj-title">
        <h4>${title}</h4>
        <a ${link}>페이지 보기</a>
        <a ${page}>기획안 보기</a>
    </article>

    <div class="description">
        <ul>
            <li class="per">
                <p><b>기여도 및 제작기간</b></p>
                <p><span>${contribute}</span>
                    <span>${period}</span></p>
            </li>
            <li class="rea">
                <p><b>프로젝트 개요</b></p>
                <p class="string"><span>${string}</span></p>
            </li>
        </ul>
    </div>

    <div class="proj-img">
        <p>
            <img src="${img}" alt="project">
        </p>
    </div>
</div>`;

    $('.sub-navi .explain .contains').html(elTag);
}









// =============================================================================================================
// 탭 선택 시 카테고리 및 페이지 보여주기

const elBtns = document.querySelectorAll('.portfolio .port_nav .sub_tab'); //subject tab

const elTit = document.querySelectorAll('.sub-navi .section-title .tab-title'); //tab title


function selectFn() {
    let idx = 0;

    elBtns.forEach(function (el, key) {

        // 포트폴리오의 테마를 클릭하면 각 첫번째의 콘텐츠를 보여주고, 선택된 해당 순번의 콘텐츠를 보여주기
        el.addEventListener('click', function () {

            elBtns[idx].classList.remove('active');
            elBtns[key].classList.add('active');

            elTit[idx].classList.remove('active');
            elTit[key].classList.add('active');


            idx = key;

            //차민규 추가(printFn)
            printFn($(infoData).find('content').eq(key));

        })
    })

    // ==================================================
    // 테마 안의 1번째 콘텐츠를 보여주고 선택하는 콘텐츠를 보여주기


}


    // top btn

    $('.top_btn > button').on('click', function () {
        $('html').animate({ scrollTop: 0 }, 500);
        return false;
    });