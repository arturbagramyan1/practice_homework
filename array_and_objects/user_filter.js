// . Write a function which remove users with language equals to 'ru'.

// const users = [
// {
// username: "Yuri Gagarin",
// lang: "ru",
// },
// {
// username: "Nil Armstrong",
// lang: "ENG",
// },
// ];
// filterUsers(users); // [{ username: "Nil Armstrong, lang: "ENG" }]


function filterUsers(users) {
    return users.filter((user) => user.lang === "ru")
}

const users = [
    {
        username: "Yuri Gagarin",
        lang: "ru",
    },
    {
        username: "Nil Armstrong",
        lang: "ENG",
    },
];
console.log(filterUsers(users)); 