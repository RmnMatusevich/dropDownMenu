let sub=document.getElementsByClassName('nav-item_sub');

document.getElementsByClassName('nav-item').onclick= function() {
    for (let i = 0; i<sub.length; i++) {
        sub[i].style.display = 'block';
    }
}

function closeMenu(){
    let subm=document.getElementsByClassName('nav-menu_sub');
    for (let i=0; i<subm.length; i++) {
        subm[i].style.display="none";
    }
}

document.onclick=function(event) {
    let target = event.target; // где был клик?
    console.log(event.target);
    if (target.className!=='nav-item' && target.className!=='nav-item_sub') {
        closeMenu();
    }
}