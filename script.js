window.onload = () => {
    addClickMenuHandler();
    addClickTagsHandler();
    addClickSliderHandler();
    addClickBlackScreenHandler();
    addClickImgHandler();
    addClickSubmitHandler();
    addClickModalCloseHandler();
    
};

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
    const imgArr = document.querySelectorAll('.portfolio__img');
        imgArr[0].before(imgArr[10]);
        imgArr[1].before(imgArr[11]);
        imgArr[2].before(imgArr[3]);
        imgArr[3].before(imgArr[5]);
        imgArr[4].before(imgArr[6]);
};

const addClickBlackScreenHandler = () => {
    document.querySelector('.home__btn_ver').addEventListener('click', () => {
        document.querySelector('.black-screen__ver').classList.toggle('hidden');
    })
    
    document.querySelector('.home__btn_gor').addEventListener('click', () => {
        document.querySelector('.black-screen__gor').classList.toggle('hidden');
    })

    document.querySelector('.home__btn').addEventListener('click', () => {
        document.querySelector('.black-screen').classList.toggle('hidden');
    })
    
};

const addClickSliderHandler = () => {
    document.querySelector('.slider__btn_left').addEventListener('click', () => {
        document.querySelector('.slide-first__container').classList.toggle('hidden');
        document.querySelector('.slide-second__container').classList.toggle('hidden');
      
    })

    document.querySelector('.slider__btn_right').addEventListener('click', () => {
        document.querySelector('.slide-first__container').classList.toggle('hidden');
        document.querySelector('.slide-second__container').classList.toggle('hidden');
    })
};

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
        if (subject.value === 'Singolo' || subject.value === 'singolo') {
            document.querySelector('.subject-text').innerText = `Тема: ${subject.value.toString()}`;  
        } else {
            document.querySelector('.subject-text').innerText = 'Без темы';
        };

        if (describe.value === 'Portfolio project') {
            document.querySelector('.describe').innerText = `Описание: ${describe.value.toString()}`; 
        } else {
            document.querySelector('.describe').innerText = 'Без описания';
        };
      
        if (name.value !== '' && email.validity.valid) {
            e.preventDefault();
            document.querySelector('.message-block').classList.remove('hidden');
        }
    });
};

const addClickModalCloseHandler = () => {
    const close_btn = document.querySelector('.btn-ok');
    close_btn.addEventListener('click', () => {
        document.querySelector('.subject-text').innerText = '';
        document.querySelector('.describe').innerText = '';
        document.querySelector('.message-block').classList.add('hidden');
    })
};



