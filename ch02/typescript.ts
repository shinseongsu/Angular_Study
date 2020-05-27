// string
var fullname: string = 'Nate Murray';

// number
var age: number = 36;

// boolean
var married: boolean = true;

// Array
var jobs: Array<string> = ['IBM', 'Microsoft', 'Google'];
var jobs: string[] = ['Apple', 'Dell', 'HP'];

var chickens: Array<number> = [1, 2, 3];
var chickens: number[] = [4, 5, 6];

// 열거형
//enum Role {Employee, Manager, Admin};
//var role: Role = Role.Employee;

enum Role { Employee = 3, Manager, Admin};
var role: Role = Role.Employee;


class Person {
    first_name: string;
    last_name: string;
    age: number;

    greet() {
        console.log("Hello", this.first_name);
    }
}



