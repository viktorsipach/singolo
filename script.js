window.onload = () => {
    addScrollMenuHandler();
    addClickMenuHandler();
    addClickTagsHandler();
    addClickSliderHandler();
    addClickBlackScreenHandler();
    addClickImgHandler();
    addClickSubmitHandler();
    addClickModalCloseHandler(); 
    addClickBurgerMenuHandler();
};

const addScrollMenuHandler = () => {
    document.addEventListener('scroll', onScroll);
};

const onScroll = () => {
    const curPos = window.scrollY;
    const sections = document.querySelectorAll('.wrapper>section');
    const links = document.querySelectorAll('.navigation__link');
    const HEIGHT_HEADER = 89;

    sections.forEach((el) => {
        el.getAttribute('class');
        if ((el.offsetTop <= curPos + HEIGHT_HEADER) && (el.offsetTop + el.offsetHeight) > curPos) {
            links.forEach((a) => {
                a.classList.remove('active_link');
                if (el.getAttribute('class') === a.getAttribute('href').substring(1)) {
                    a.classList.add('active_link');
                }
            })
        };
    });
}

const addClickMenuHandler = () => {
    document.querySelector('.navigation').addEventListener('click', (e) => {
        if (e.target.classList.contains('navigation__link')) {
            let clickedLink = e.target;
            removeSelectedLink();
            selectClickedLink(clickedLink);
        }
    })
};

const removeSelectedLink = () => {
    let links = document.querySelectorAll('.navigation__link');
    links.forEach(link => {
        link.classList.remove('active_link');
    });
};

const selectClickedLink = (link) => {
    link.classList.add('active_link');
};


const addClickTagsHandler = () => {
    document.querySelector('.tags-container').addEventListener('click', (e) => {
        if (e.target.classList.contains('portfolio__tag')) {
            let clickedTag = e.target;
            removeSelectedTag();
            selectClickedTag(clickedTag);
            changeImgPosition();
        }
    })
};

const removeSelectedTag = () => {
    let buttons = document.querySelectorAll('.portfolio__tag');
    buttons.forEach(btn => {
        btn.classList.remove('active_tag');
    });
};

const selectClickedTag = (btn) => {
    btn.classList.add('active_tag');
};

const changeImgPosition = () => {
    const imgArr = document.querySelectorAll('.portfolio__list');
        imgArr[0].before(imgArr[11]);
        imgArr[1].before(imgArr[10]);
        imgArr[2].before(imgArr[3]);
        imgArr[3].before(imgArr[5]);
        imgArr[4].before(imgArr[6]);
};

const addClickBlackScreenHandler = () => {
    document.querySelector('.home__btn_ver').addEventListener('click', () => {
        document.querySelector('.black-screen__ver').classList.toggle('hidden_screen');
    })
    
    document.querySelector('.home__btn_gor').addEventListener('click', () => {
        document.querySelector('.black-screen__gor').classList.toggle('hidden_screen');
    })

    document.querySelector('.home__btn').addEventListener('click', () => {
        document.querySelector('.black-screen').classList.toggle('hidden_screen');
    })
    
};

const addClickSliderHandler = () => {
    const firstSlide = document.querySelector('.slide-first');
    const secondSlide = document.querySelector('.slide-second');
    let isShowFirstSlide = true;

    document.querySelector('.slider__btn_left').addEventListener('click', () => {
        firstSlide.style.transition = 'all .5s ease';
        secondSlide.style.transition = 'all .5s ease';
            if (isShowFirstSlide) {
                firstSlide.style.left = '-100%'
                secondSlide.style.left = '0';
                isShowFirstSlide = false;  
            } else {
                firstSlide.style.left = '100%';
                secondSlide.style.left = '-100%';
                firstSlide.style.left = '0';
                isShowFirstSlide = true;
            }
        setTimeout(()=> {
            changeSlidePositionToRight(isShowFirstSlide);
        }, 500);
    })

    document.querySelector('.slider__btn_right').addEventListener('click', () => {
        firstSlide.style.transition = 'all .5s ease';
        secondSlide.style.transition = 'all .5s ease';
            if (isShowFirstSlide) {
                firstSlide.style.left = '100%'
                secondSlide.style.left = '0';
                isShowFirstSlide = false;
            } else {
                firstSlide.style.left = '-100%';
                secondSlide.style.left = '100%';
                firstSlide.style.left = '0';
                isShowFirstSlide = true;
            }
        setTimeout(() => {
            changeSlidePositionToLeft(isShowFirstSlide);
        }, 500);
    })
};

const changeSlidePositionToRight = (firstSlidePosition) => {
    const firstSlide = document.querySelector('.slide-first');
    const secondSlide = document.querySelector('.slide-second');

    firstSlide.style.transition = 'none';
    secondSlide.style.transition = 'none';

    if (firstSlidePosition) {
        secondSlide.style.left = '100%';
    } else {
        firstSlide.style.left = '100%';
    }
};

const changeSlidePositionToLeft = (firstSlidePosition) => {
    const firstSlide = document.querySelector('.slide-first');
    const secondSlide = document.querySelector('.slide-second');
    firstSlide.style.transition = 'none';
    secondSlide.style.transition = 'none';
    if (firstSlidePosition) {
        secondSlide.style.left = '-100%';
    } else {
        firstSlide.style.left = '-100%';
    }
}

const addClickImgHandler = () => {
    document.querySelector('.image-container').addEventListener('click', (e) => {
        if ( e.target.classList.contains('active_img')) {
            e.target.classList.remove('active_img')
        } else if (e.target.classList.contains('portfolio__img')) {
            let clickedImg = e.target;
            removeActiveImg();
            selectClickedImg(clickedImg);
        }
    })
};

const removeActiveImg = () => {
    let images = document.querySelectorAll('.portfolio__img');
    images.forEach(img => img.classList.remove('active_img'));
};

const selectClickedImg = (img) => {
    img.classList.add('active_img');
}

const addClickSubmitHandler = () => {
    const submit = document.querySelector('.form__submit');
    const name = document.querySelector('.form__name');
    const email = document.querySelector('.form__email');
    const subject = document.querySelector('.form__subject');
    const describe = document.querySelector('.form__textarea');

    submit.addEventListener('click', (e) => {
        if (subject.value !== '') {
            document.querySelector('.subject-text').innerText = `Subject: ${subject.value.toString()}`;  
        } else {
            document.querySelector('.subject-text').innerText = 'Without subject';
        };

        if (describe.value !== '') {
            document.querySelector('.describe').innerText = `Description: ${describe.value.toString()}`; 
        } else {
            document.querySelector('.describe').innerText = 'Without description';
        };
      
        if (name.value !== '' && email.validity.valid) {
            e.preventDefault();
            document.querySelector('.message-block').classList.remove('hidden');
        }
    });
};

const addClickModalCloseHandler = () => {
    const form = document.querySelector('.form');
    const close_btn = document.querySelector('.btn-ok');
    close_btn.addEventListener('click', () => {
        form.reset();
        document.querySelector('.subject-text').innerText = '';
        document.querySelector('.describe').innerText = '';
        document.querySelector('.message-block').classList.add('hidden');
    })
};


const addClickBurgerMenuHandler = () => {
    const burgerMenu = document.querySelector('.burger__menu');
    const logo = document.querySelector('.header__logo');
    const nav = document.querySelector('.navigation');
  
    burgerMenu.addEventListener('click', () => {
        burgerMenu.classList.toggle('burger__menu_transform');
        logo.classList.toggle('logo__mobile');
        nav.classList.toggle('navigation__mobile');
    });

    nav.addEventListener('click', (e) => {
        if (nav.classList.contains('navigation__mobile') && e.target.classList.contains('navigation__link')) {
            burgerMenu.classList.toggle('burger__menu_transform');
            logo.classList.toggle('logo__mobile');
            nav.classList.toggle('navigation__mobile');   
        }
    });
}