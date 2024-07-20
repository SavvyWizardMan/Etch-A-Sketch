const container = document.querySelector('.container');
const btn = document.querySelector('button');
const divs = [];

for (let i = 0; i < 256; i++) {
    divs[i] = document.createElement('div');
}

divs.forEach((div) => {
    div.classList.add('flex');
    div.style.width = 600/16 + "px";
    div.style.height = 600/16 + "px";
    div.addEventListener('mouseenter', () => {
        div.style.backgroundColor = 'black';
    });

    container.appendChild(div);
});

btn.addEventListener('click', () => {
    let value = Number(prompt("How many pixels do you want?", 16));

    if (value > 100) {
        alert("Please do not enter a number greater than 100 for computational reasons.");
        value = 16;
    }

    container.innerHTML = '';

    divs.splice(0, divs.length);

    for (let i = 0; i < value**2; i++) {
        divs[i] = document.createElement('div');
    }

    divs.forEach((div) => {
        div.style.width = 600/value + 'px';
        div.style.height = 600/value + 'px';
        div.classList.add('flex');

        div.addEventListener('mouseenter', () => {
            div.style.backgroundColor = 'black';
        });

        container.appendChild(div);
    });
});

