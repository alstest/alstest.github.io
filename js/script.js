function consoleBG() {
    const mediaQuery = window.matchMedia('(max-width: 768px)');
    const mediaSquery = window.matchMedia('(min-width: 768px)');
    let hoverPrev = document.querySelector('.preview');
    if ($(window).scrollTop() == 0 && mediaSquery.matches) {
        $('#scroll').css('background', 'none');
        $('#scroll').css('transition', '0.5s all');
        $('.header__logo_link').css('color', '#03463F');
        $('.header__logo_link-a').css('color', '#03463F');
        $('.menu__link').css('color', '#03463F');
        $('.menu__link:hover').css('color', '#03463F');
        $('.menu__link:after').css('background', '#03463F');
        $('.menu__link:hover:after').css('background', '#03463F');
        $('.hamburger_span').css('background', '#03463F')
    }
    else {
        $('#scroll').css('background', 'rgba(3, 70, 63, 0.80)');
        $('.header__logo_link').css('color', '#fff');
        $('.menu__link').css('color', '#fff');
        $('.menu__link:hover').css('color', '#fff');
        $('.hamburger_span').css('background', '#fff');
        $('.header__logo_link-a').css('color', '#fff');
    }
    if ($(window).scrollTop() == 0 && mediaQuery.matches) {
        $('.menu__link').css('color', '#fff');
        $('#scroll').css('background', 'none');
        $('.hamburger_span').css('background', '#03463F');
        $('.header__logo_link').css('color', '#03463F');
        $('.header__logo_link-a').css('color', '#03463F');

    }
}

consoleBG();

$(window).scroll(function () {
    consoleBG();
});

window.addEventListener('DOMContentLoaded', () => {
    menu = document.querySelector('.menu');
    menuItem = document.querySelectorAll('.menu__item');
    hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('menu_active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            menu.classList.toggle('menu_active');
        })
    })
})

function VidView() {
    let btnFirst = document.querySelector('.a1_position');
    let btnSecond = document.querySelector('.a2_position');
    let btnThird = document.querySelector('.a3_position');
    let btnFourth = document.querySelector('.a4_position');
    let btnFifth = document.querySelector('.a5_position');
    let btnSixth = document.querySelector('.a6_position');
    let btnSeventh = document.querySelector('.a7_position');
    let btnEighth = document.querySelector('.a8_position');
    let btnNinth = document.querySelector('.a9_position');
    let btnTenth = document.querySelector('.a10_position');

    btnFirst.addEventListener('click', () => {
        window.location = 'htmltovid/vidfirst.html';
    })
    btnSecond.addEventListener('click', () => {
        window.location = 'htmltovid/vidsecond.html';
    })
    btnThird.addEventListener('click', () => {
        window.location = "htmltovid/vidthird.html";
    })
    btnFourth.addEventListener('click', () => {
        window.location = "htmltovid/vidfourth.html";
    })
    btnFifth.addEventListener('click', () => {
        window.location = "htmltovid/vidfifth.html";
    })
    btnSixth.addEventListener('click', () => {
        window.location = "htmltovid/vidsixth.html";
    })
    btnSeventh.addEventListener('click', () => {
        window.location = "htmltovid/vidseventh.html";
    })
    btnEighth.addEventListener('click', () => {
        window.location = "htmltovid/videighth.html";
    })
    btnNinth.addEventListener('click', () => {
        window.location = "htmltovid/vidninth.html";
    })
    btnTenth.addEventListener('click', () => {
        window.location = "htmltovid/vidtenth.html";
    })
}

VidView();


window.addEventListener("mousewheel", function (e) {
    if (e.ctrlKey) {
        e.preventDefault();
        return false;
    }
}, { passive: false });

document.ondragstart = noselect;
document.onselectstart = noselect;
document.oncontextmenu = noselect;
function noselect() {
    return false;
}


$('input[name=phone]').mask("+998(99)999-99-99");

$('form').submit(function (e) {
    e.preventDefault();
    $.ajax({
        type: "POST",
        url: "../mailer/smart.php",
        data: $(this).serialize()
    }).done(function () {
        $(this).find("input").val("");
        $('form').trigger('reset');
    });
    return false;
});