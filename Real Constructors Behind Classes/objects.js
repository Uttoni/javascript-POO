function User(email) {
    this.email = email;
    this.name;
    this.online = false;
}

User.prototype.login = function(){
    this.online = true;
    console.log(this.email, 'just logged in');
}

function Admin(...args){
    User.apply(this, args);
    this.role = 'Super Admin';
}

Admin.prototype = User.prototype;

var userOne = new User('toni@gmail');
userOne.name = 'Toni';
var userTwo = new User('maria@gmail');
userTwo.name = 'Maria';

var admin = new Admin('admin@gmail');

console.log(userOne);
userTwo.login();
console.log(admin);