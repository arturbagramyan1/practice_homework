// . Convert a long phrase to its acronym.
// Input Output
// ‘Prisoner of Warʼ ‘POWʼ
// ‘Have a good nightʼ ‘HAGNʼ

function acronym(str) {
    let words = str.split(' ');
    let acronym = '';
    words.forEach(word => {
        acronym += word[0].toUpperCase();
    });
    return acronym;
}

console.log(acronym('Prisoner of War'));
console.log(acronym('Have a good night'));