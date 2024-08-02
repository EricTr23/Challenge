const inputText = document.getElementById('inputText');
const encryptBtn = document.getElementById('encryptBtn');
const decryptBtn = document.getElementById('decryptBtn');
const copyBtn = document.getElementById('copyBtn');
const output = document.getElementById('output');
const message = document.getElementById('message');

const encryptionKeys = {
    'e': 'enter',
    'i': 'imes',
    'a': 'ai',
    'o': 'ober',
    'u': 'ufat'
};

const decryptionKeys = {
    'enter': 'e',
    'imes': 'i',
    'ai': 'a',
    'ober': 'o',
    'ufat': 'u'
};

function encrypt(text) {
    return text.split('').map(char => encryptionKeys[char] || char).join('');
}

function decrypt(text) {
    return text.replace(/enter|imes|ai|ober|ufat/g, match => decryptionKeys[match]);
}

encryptBtn.addEventListener('click', () => {
    const text = inputText.value.trim().toLowerCase();
    if (text === '') {
        message.textContent = 'Por favor, introduce un texto válido.';
        output.textContent = '';
    } else {
        message.textContent = '';
        output.textContent = 'Texto cifrado: ' + encrypt(text);
    }
});

decryptBtn.addEventListener('click', () => {
    const text = inputText.value.trim().toLowerCase();
    if (text === '') {
        message.textContent = 'Por favor, introduce un texto válido.';
        output.textContent = '';
    } else {
        message.textContent = '';
        output.textContent = 'Texto descifrado: ' + decrypt(text);
    }
});

copyBtn.addEventListener('click', () => {
    const text = output.textContent.replace(/^(Texto cifrado: |Texto descifrado: )/, '');
    if (text === '') {
        message.textContent = 'No hay texto para copiar.';
    } else {
        navigator.clipboard.writeText(text).then(() => {
            message.textContent = 'Texto copiado al portapapeles.';
        }).catch(err => {
            message.textContent = 'Error al copiar el texto.';
        });
    }
});
