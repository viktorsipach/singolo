function load() {
   
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
    })

    document.querySelector('.image-container').addEventListener('click', (e) => {
        document.querySelectorAll('.portfolio__img').forEach(el => 
            el.classList.remove('active-img') 
        );
        e.target.classList.add('active-img');
    })
}

window.onload = () => {
    load();
}


