const container = document.querySelector('.container');
const randBtn = document.querySelector('.random');
const colorBtn = document.querySelector('.color');
const input = document.querySelector('input[type="color"]');
const pixelInput = document.querySelector("input[type='range']");
const opacBtn = document.querySelector('.opacity');
const span = document.querySelector('span');
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

pixelInput.addEventListener('input', () => {
    span.textContent = pixelInput.value + "x" + pixelInput.value;
})

pixelInput.addEventListener('change', () => {
    container.innerHTML = '';

    divs.splice(0, divs.length);

    for (let i = 0; i < pixelInput.value**2; i++) {
        divs[i] = document.createElement('div');
    }

    divs.forEach((div) => {
        div.style.width = 600/pixelInput.value + 'px';
        div.style.height = 600/pixelInput.value + 'px';
        div.classList.add('flex');

        div.addEventListener('mouseenter', () => {
            div.style.backgroundColor = 'black';
        });

        container.appendChild(div);
    });
    input.value = '#000000';
});

randBtn.addEventListener('click', () => {
    divs.forEach((div) => {
        div.addEventListener('mouseenter', () => {
            const random = Math.floor(Math.random() * 256);
            const random2 = Math.floor(Math.random() * 256);
            const random3 = Math.floor(Math.random() * 256);
            div.style.opacity = "100%";
            div.style.backgroundColor = `rgb(${random}, ${random2}, ${random3})`;
                window.onbeforeunload = function(event) {
                    return event;
                }
        });
    });
});

input.addEventListener('change', () => {
    divs.forEach((div) => {
        div.addEventListener('mouseenter', () => {
            div.style.opacity="100%";
            div.style.backgroundColor = input.value;
                window.onbeforeunload = function(event) {
                    return event;
                }
        });
    });
});

opacBtn.addEventListener('click', () => {
    divs.forEach((div) => {
        let opacity = 0;
        div.addEventListener('mouseenter', () => {
            opacity += 10;
            div.style.opacity = opacity + "%";
            div.style.backgroundColor = 'black';
                window.onbeforeunload = function(event) {
                    return event;
                }
        });
    });
});

