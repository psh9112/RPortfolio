

fetch('./js/data.json')
    .then(function (data) { return data.json() })
    .then(function (realData) {


        const elItem = document.querySelector('.project-img > ul');
        const elImg = document.querySelectorAll('.project-img > ul .more');
        const elBox = document.querySelector('.project-list > article .plist');

        let conList = '';
        realData.product.forEach(function (v) {
            conList = `<li>${v.detail}</li>`;
            elBox.innerHTML += conList;
        });
        const elList = document.querySelectorAll('.project-list > article .plist > li');
        elList[0].classList.add('active');


        function printFn(v) {
            let tags = '';
            tags = `<li class="more">
                            <span>
                            <b>제작기간 <small>${v.period}</small>
                            기여도 <small>${v.level}</small></b>
                            <img src="${v.photo}" alt="project" class="mokup">
                            </span>
                        </li>`;

            elItem.innerHTML = tags;

        }


        printFn(realData.product[0]);


        // ===================================================================================
        // works page 클릭 화면전환

        function showFn() {

            let idx = 0;
            elList.forEach(function (el, key) {
                el.addEventListener('click', function () {
                    elList[idx].classList.remove('active');
                    elList[key].classList.add('active');

                    idx = key;
                    printFn(realData.product[key]);
                })

            })

        }

        showFn()

    })

// ===================================================================================

// top btn

$('.top_btn > button').on('click', function () {
    $('html').animate({ scrollTop: 0 }, 500);
    return false;
});