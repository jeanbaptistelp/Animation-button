console.log('script loaded');

btnAnimation = [
    'wobble-hor-bottom 0.8s both',
    'shake-horizontal 0.8s cubic-bezier(0.455, 0.030, 0.515, 0.955) both',
    'vibrate-1 0.3s linear both',
    'jello-horizontal 0.9s both',
    'bounce-top 0.9s both',
    'heartbeat 1.5s ease-in-out both'
]

let allBtn = document.querySelectorAll('button');


for (let i = 0; i < allBtn.length; i++) {

    allBtn[i].onclick = (e) => {

        allBtn[i].style.animation = btnAnimation[i]
    }

    allBtn[i].onmouseout = (e) => {
        
        console.log('mouseout')
        allBtn[i].style.animation = '';
    }
}








