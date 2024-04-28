function generate() {
    const length = document.getElementById('length').value;
    const numbers = document.getElementById('numbers').checked;
    const uppercase = document.getElementById('uppercase').checked;
    const lowercase = document.getElementById('lowercase').checked;
    const noDuplicates = document.getElementById('no-duplicates').checked;
    const symbols = document.getElementById('symbols').checked;

    const password = generatePassword(parseInt(length), numbers, uppercase, lowercase, symbols, noDuplicates);

    document.getElementById('output').value = password;
}

function generatePassword(length, numbers, uppercase, lowercase, symbols, noDuplicates) {
    let characters = '';

    if (numbers) {
        characters += '0123456789';
    }

    if (uppercase) {
        characters += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    }

    if (lowercase) {
        characters += 'abcdefghijklmnopqrstuvwxyz';
    }

    if (symbols) {
        characters += '!@#$%&*';
    }

    let passwordArray = [];
    
    while (passwordArray.length < length) {
        const character = characters[Math.floor(Math.random() * characters.length)];

        if (!noDuplicates || !passwordArray.includes(character)) {
            passwordArray.push(character);
        }
    }

    return passwordArray.join('');
}
