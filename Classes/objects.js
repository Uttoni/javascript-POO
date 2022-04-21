class User{
    email;
    name;
    score
    constructor(email){
        this.email = email;
        this.score = 0;
    }

    login(){
        console.log(this.email, 'just logged in');
    }

    logout() {
        console.log(this.email, 'just logged out');
    }

    updateScore(){
        this.score++;
        console.log(this.email, 'score is now', this.score);
        return this;
    }
}

/*
var user = new User('meuEmail@email.com');
user.name = 'Eu';
console.log(user);
user.updateScore();
user.updateScore().login();
*/

class Admin extends User{
    deleteUser(user){
        users = users.filter(u => {
            // true mantem no array e false apaga
            return u.email != user.email;
        });
    }
}


var userOne = new User('toni@gmail');
userOne.name = 'Toni';
var userTwo = new User('maria@gmail');
userTwo.name = 'Maria';

var admin = new Admin('joana@gmail');
admin['name'] = 'Joana';

var users = [admin, userOne, userTwo];

admin.deleteUser(userTwo);

console.log(users);