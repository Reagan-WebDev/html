class User {
    static userCount = 0;
    constructor(username) {
        this.username = username;
        User.userCount++;
    }
}
const user1 = new User("ReaganOT");
const user2 = new User("ReaganOluoch");
console.log(user1.username);
console.log(user2.username);
console.log(User.userCount);