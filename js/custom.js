MainFullpages();

function MainFullpages() {
    const nav = document.querySelectorAll('.gnb li');
    new fullpage('#content', {
        anchors: ['intro', 'my_pages01', 'my_pages02', 'my_pages03', 'sample', 'profile'],
        onLeave: function (origin, destination, direction) {
            let idx = destination.index;
            nav.forEach(it => it.classList.remove('on'))
            nav[idx].classList.add('on');
        }
    })
}

$(function () {
    $('.my_pages01 .p_wrap .right .btns_ul button').on('click', function () {
        let idx = $(this).index();
        $('.my_pages01 .p_wrap .right .btns_li>div').eq(idx).addClass('on').siblings().removeClass('on');
    });
});

$(function () {
    $('.my_pages02 .p_Wrap02 .right .btns_ul button').on('click', function () {
        let idx = $(this).index();
        $('.my_pages02 .p_Wrap02 .right .btns_li>div').eq(idx).addClass('on').siblings().removeClass('on');
    });
});



$(function () {


    function bubleAnimation() {
        const tl = gsap.timeline({ repeat: -1, repeatDelay: 4 });


        let targets = gsap.utils.toArray(".intro .wd");

        targets.forEach((it, idx) => {
            let randomNumber = gsap.utils.random(1, Math.floor(targets.length / 3), 1);
            let randomNumber2 = gsap.utils.random(1, Math.floor(targets.length / 3), 1);
            console.log(randomNumber, randomNumber2)
            tl.from(it, {
                duration: 6,
                y: "random(100, 200, true)",
                ease: "elastic.out(1, 0.5)",
                opacity: 0,
                delay: randomNumber * 0.1 + randomNumber2 * 0.1
            }, 0)
        })


        tl.from(".intro .txt", {
            opacity: 0,
            x: -300,
            delay: 1
        }, 0)

    }


    function bubleAnimationF() {
        const tl = gsap.timeline({ repeat: -1, repeatDelay: 1 });


        let targets = gsap.utils.toArray(".profile .wd");

        targets.forEach((it, idx) => {
            let randomNumber = gsap.utils.random(1, Math.floor(targets.length / 3), 1);
            let randomNumber2 = gsap.utils.random(1, Math.floor(targets.length / 3), 1);
            console.log(randomNumber, randomNumber2)
            tl.from(it, {
                duration: 6,
                y: "random(100, 200, true)",
                ease: "elastic.out(1, 0.5)",
                opacity: 0,
                delay: randomNumber * 0.1 + randomNumber2 * 0.1
            }, 0)
        })


        // tl.from(".intro .txt", {
        //     opacity: 0,
        //     x: -300,
        //     delay: 1
        // }, 0)

    }

    bubleAnimation();
    bubleAnimationF();
})