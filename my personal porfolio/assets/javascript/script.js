const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});


const moon = document.getElementById('moon');

moon.onclick = function () {
    document.body.classList.toggle('dark-theme');

    if(document.body.classList.contains('dark-theme')) {
        moon.src = "./pictures/sun.png";
    }else {
        moon.src = "./pictures/moon.png";
    }
}


