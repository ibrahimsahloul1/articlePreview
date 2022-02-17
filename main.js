let share = document.getElementById('shareBtn')
let sharePc = document.querySelector('.share-action')
let shareMob = document.getElementById('share-mob')
let infoBox = document.querySelector('.box-container')
let closeShareMob = document.querySelector('#share-mob')

share.onclick = function(){
    if(sharePc.style.display ==='flex' && window.screen.width>850){
        sharePc.style.display = 'none'
    }else if(window.screen.width>850){
        sharePc.style.display = 'flex'
    }else if(window.screen.width<850){
        shareMob.style.display = 'flex'
        infoBox.style.display = 'none'
    }
}
closeShareMob.onclick = function(){
    shareMob.style.display = 'none'
    infoBox.style.display = 'flex'
}