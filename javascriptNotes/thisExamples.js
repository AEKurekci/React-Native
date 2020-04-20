var person={
    name:"Ali",
    surname:"Kürekci",
    age:23,
    id:57,
    fullName:function(){
        return this.name + " " + this.surname;
    }
};
var person1 = {
    fullName: function() {
      return this.firstName + " " + this.lastName;
    }
  }
var person2 = {
    firstName:"John",
    lastName: "Doe",
  }
 