const wrapper = document.querySelector('.wrapper');
const registerBox = document.querySelector('.register');
const loginBox = document.querySelector('.login');
const registerLink = document.querySelector('.register-link');
const loginLink = document.querySelector('.login-link');

registerLink.onclick = () =>{
    wrapper.classList.add('active');

    registerBox.classList.remove('classname'); // reset animation
    void registerBox.offsetWidth; // trigger reflow very imp  as it allows for better geometric position in document
    registerBox.classList.add('classname'); // start animation

    
};

loginLink.onclick = () =>{
    wrapper.classList.remove('active');

    loginBox.classList.remove('classname'); // reset animation
    void registerBox.offsetWidth; // trigger reflow
    loginBox.classList.add('classname'); // start animation


};