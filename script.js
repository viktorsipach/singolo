function load() {
    document.querySelector('.home__btn_ver').addEventListener('click' , () => {
        document.querySelector('.black-screen__ver').classList.toggle('hide');
    })
    
    document.querySelector('.home__btn_gor').addEventListener('click' , () => {
        document.querySelector('.black-screen__gor').classList.toggle('hide');
    })
    
    document.getElementById('btn-left').addEventListener('click' , () => {
        document.querySelector('.slide-one').classList.toggle('hide-slide');
        document.querySelector('.slide-second').classList.toggle('hide-slide');
    })

    document.getElementById('btn-right').addEventListener('click' , () => {
        document.querySelector('.slide-one').classList.toggle('hide-slide');
        document.querySelector('.slide-second').classList.toggle('hide-slide');
    })
}

load();

