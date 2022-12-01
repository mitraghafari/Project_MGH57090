// create a class to store the student detail     
class Patient{
    constructor(first, last, age,birthDate,phone,email,gender){
        this.firstName = first;
        this.lastName = last;
        this.age = age;
        this.birthDate = birthDate;
        this.phone = phone;
        this.email = email;
        this.gender = gender;
    }

    // instance method
    fullName(){
        return this.firstName + " " + this.lastName;
    }
}