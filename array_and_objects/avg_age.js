// . Write a function which calculates average age of users.

// const users = [
// {
// username: "Yuri Gagarin",
// lang: "ru",
// age: 56,
// },
// {
// username: "Nil Armstrong",
// lang: "ENG",
// age: 54,
// },
// ];
// getAverageAge(users); // 55

function getAverageAge(users) {
    return users.reduce((acc, user) => acc + user.age, 0) / users.length;
}

const users = [
    {
        username: "Yuri Gagarin",
        lang: "ru",
        age: 56,
    },
    {
        username: "Nil Armstrong",
        lang: "ENG",
        age: 54,
    },
];

console.log(getAverageAge(users)); 