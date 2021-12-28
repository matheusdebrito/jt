const btnMobile = document.getElementById('btn-mobile');

function toggleMenu(event) {
    if (event.type === "toutchstart") event.preventDefault
    const nav = document.getElementById("header");
    nav.classList.toggle('active');
}

btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('toutchstart', toggleMenu);