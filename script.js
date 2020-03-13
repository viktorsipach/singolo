function load() {
   
    const SUBMIT = document.getElementById('submit');
    const CLOSE_BTN = document.getElementById('btn-ok');

    document.querySelector('.navigation').addEventListener('click', (e) => {
        document.querySelectorAll('.navigation__link').forEach(el => el.classList.remove('active-link'));   
        e.target.classList.add('active-link');
    })

    document.querySelector('.home__btn_ver').addEventListener('click', () => {
        document.querySelector('.black-screen__ver').classList.toggle('hide');
    })
    
    document.querySelector('.home__btn_gor').addEventListener('click', () => {
        document.querySelector('.black-screen__gor').classList.toggle('hide');
    })

    document.querySelector('.home__btn').addEventListener('click', () => {
        document.querySelector('.black-screen').classList.toggle('hide');
    })
    
    document.getElementById('btn-left').addEventListener('click', () => {
        document.querySelector('.slide-first__container').classList.toggle('hide-slide');
        document.querySelector('.slide-second__container').classList.toggle('show-slide');
        document.querySelector('.slide-second__container').classList.toggle('hide-slide');
    })

    document.getElementById('btn-right').addEventListener('click', () => {
        document.querySelector('.slide-first__container').classList.toggle('hide-slide');
        document.querySelector('.slide-second__container').classList.toggle('show-slide');
        document.querySelector('.slide-second__container').classList.toggle('hide-slide');
    })

    document.querySelector('.button-container').addEventListener('click', (e) => {
        document.querySelectorAll('.portfolio__btn').forEach(el => el.classList.remove('active'));   
        e.target.classList.add('active');

        const imgArr = document.querySelectorAll('.portfolio__img');
        imgArr[0].before(imgArr[10]);
        imgArr[1].before(imgArr[11]);
        imgArr[2].before(imgArr[3]);
        imgArr[3].before(imgArr[5]);
        imgArr[4].before(imgArr[6]);
       
    })

    document.querySelector('.image-container').addEventListener('click', (e) => {
        document.querySelectorAll('.portfolio__img').forEach(el => 
            el.classList.remove('active-img') 
        );
        e.target.classList.add('active-img');
    })

    SUBMIT.addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo(pageXOffset, 0);
        const subject = document.getElementById('subject');
        const describe = document.getElementById('textarea');

        if (subject.value !== '') {
            document.getElementById('subject-text').innerText = `Тема: ${subject.value.toString()}`;  
        } else {
            document.getElementById('subject-text').innerText = 'Без темы';
        };

        if (describe.value !== '') {
            document.getElementById('describe').innerText = `Описание: ${describe.value.toString()}`; 
        } else {
            document.getElementById('describe').innerText = 'Без описания';
        };

        document.getElementById('message-block').classList.remove('hidden');
    });
        
    CLOSE_BTN.addEventListener('click', () => {
        document.getElementById('subject-text').innerText = '';
        document.getElementById('describe').innerText = '';
        document.getElementById('message-block').classList.add('hidden');
    })

};

window.onload = () => {
    load();
}


