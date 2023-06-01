const yearsOld = 21;

const name = "Janusz";

const sentence = `Mam na imię ${name} i mam ${yearsOld} lat`;

// console.log(sentence);

// tagged template literal string
// example: https://styled-components.com/

function html(texts, ...vars) {
    // console.log(texts);
    // console.log(vars);


    return '<p>' +
        texts
            .map((text, index) => text + (vars[index] ? `<span>${vars[index]}</span>` : ''))
            .join('') + '</p>';

}

const sentenceHTML = html`Mam na imię ${name} i mam ${yearsOld} lat`;

console.log(sentenceHTML);