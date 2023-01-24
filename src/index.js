const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let array = String(expr).split("");
    let tenCharacters = [];
    let letterConvert = [];
    let start = 0;
    let end = 10;
    while ((tenCharacters.length * 10) < array.length) {
        let tenCharactersSlice = array.slice(start, end);
        let codeLatter = '';
            for (let step = 0; step < 10;) {
                if ((tenCharactersSlice[step] + tenCharactersSlice[step + 1]) == 10) {
                    codeLatter += ".";
                    // console.log((tenCharactersSlice[step] + tenCharactersSlice[step + 1]) + "it's dots");
                } else if ((tenCharactersSlice[step] + tenCharactersSlice[step + 1]) == '11') {
                    codeLatter += "-";
                    // console.log((tenCharactersSlice[step] + tenCharactersSlice[step + 1]) + "it's dashes");
                } else {
                    // console.log(tenCharactersSlice[step] + tenCharactersSlice[step + 1]);
                }
                step += 2;
            }
        // console.log(codeLatter);
        tenCharacters.push(tenCharactersSlice);
        letterConvert.push(codeLatter);
        start +=10;
        end +=10;
    }
    // console.log(letterConvert);
    let secretWords = '';
    for (letter in letterConvert) {
        if (letterConvert[letter] in MORSE_TABLE) {
            secretWords += MORSE_TABLE[letterConvert[letter]];
            // console.log(MORSE_TABLE[letterConvert[letter]]);
        } else {
            secretWords += " ";
        }
    }
    return secretWords;
}

module.exports = {
    decode
}