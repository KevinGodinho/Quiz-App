var person = {
    firstName: 'John',
    lastName: 'Smith',
    fullName: function(){
        return this.firstName + ' ' + this.lastName;
    }
};

var nick = {
    firstName: 'Nick',
    lastName: 'Doe'
};

console.log(person.fullName.call(nick))


var definePerson = function(age, job){
    console.log(this.fullName() + ' is ' + age + ' years old and works as a ' + job);
};

definePerson.call(person, 28, 'trash man');
definePerson.apply(person, [43, 'teacher']); // same as call, but use array for arguments

var getPerson = definePerson.bind(person, 77);
getPerson('musician');
getPerson('doctor');












