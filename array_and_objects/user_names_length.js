// . Write a function which returns array of lengths of user names

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
// getUsernameLengths(users); // [12, 13]

function getUsernameLengths(users) {
    return users.map((user) => user.username.length);
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

console.log(getUsernameLengths(users))
