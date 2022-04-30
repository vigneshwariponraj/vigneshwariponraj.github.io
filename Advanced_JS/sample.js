const initApp = () => {
    const button1 = document.getElementById('1');
    button1.addEventListener('click', createParas1);

    const button2 = document.getElementById('2');
    button2.addEventListener('click', createParas2);


}

document.addEventListener('DOMContentLoaded', initApp);

const createParas1 = () => {
    const start = Date.now();

    const main = document.querySelector('main');

    let i = 0;
    while (i < 500) {
        main.innerHTML += `<p> My value is ${i}</p>`;
        i++;
    }
    const duration = Date.now() -start;
    console.log(`duration: ${duration}`);
}
