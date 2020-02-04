export function numberFromText(text){
    const charCodes = text
        .split('')
        .map(char => char.charCodeAt(0))
        .join('');
    return parseInt(charCodes, 10);
}