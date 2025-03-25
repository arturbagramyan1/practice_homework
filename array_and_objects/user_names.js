// Write a function which returns array of usernames.

// const users = [
// {
// username: "Yuri Gagarin",
// lang: "ru",
// },
// {
// username: "Nil Armstrong",
// lang: "ENG",
// },

// FullCourseTasks.md 8/5/2023

// 2 / 4

// ];
// getUserNames(users); // ['Yuri Gagarin', 'Nil Armstrong']

function getUserNames(users) {
    return users.map(user => user.username);
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

console.log(getUserNames(users));