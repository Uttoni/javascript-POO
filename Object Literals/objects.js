//OBJECT LITERALS
var userOne = {
    email: 'ryu@ninjas.com',
    name: 'Ryu',

    login(){
        console.log(this.email, ' has logged in')
    },
    logout() {
        console.log(this.email, ' has logged out')
    }
};

console.log(userOne.name);

//UPDATING PROPERTIES
//static atributes and methods
userOne.name="Jack";
console.log(userOne.name);
//dinamic atributes and methods
var props = 'email';
userOne['email'] = 'novoEmail@gec.com';
console.log(userOne[props]);

//Adding atributes and methods after creating the Object
userOne.age = 25;
userOne.saySomething = function(){
    console.log("Saying something");
}

userOne.saySomething();
console.log('My age ', userOne['age']);