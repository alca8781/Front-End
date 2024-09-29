fetch('https://x-colors.yurace.pro/api/random')
    .then(response => response.json())
    .then(json => console.log(json));


document.getElementById('showColorBtn').addEventListener('click', showColor)


async function showColor() {
    const url = 'https://x-colors.yurace.pro/api/random';

    fetch(url)
        .then(response => response.json())
        .then(color => {
            console.log(color);

            const colorBox = document.getElementById('colorBox');
            const colorHex = document.getElementById('colorHex');
            const colorRgb = document.getElementById('colorRgb');
            const colorHSL = document.getElementById('colorHSL');

            colorBox.style.backgroundColor = color.hex;
            colorHEX.innerText = `HEX: ${color.hex}`;
            colorRGB.innerText = `RGB: ${color.rgb}`;
            colorHSL.innerText = `HSL: ${color.hsl}`;



        })
}


