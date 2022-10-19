class Person{
    name;  //# inseamna ca e clasa privata
    constructor(pName){
        this.name=pName;
    }

    introduceSelf(){
        console.log(`Hi! My name is ${this.name}`)
    }
}



class Teacher extends Person{
    subject;

    constructor(pName, pSubject){
        super(pName);
        this.subject=pSubject;
    }

    introduceSelf(){
        console.log(`Hi! My name is ${this.name} and I will be your ${this.subject} professor`)
    }

    grade(paper){
        let number=Math.random()
        console.log(number*10)
        console.log(Math.ceil(number*10))
        const grade=Math.floor(Math.random()*10)
        return grade
    }

}

class Student extends Person{
    #year;

    static #count=0

    constructor(pName,pYear){
        super(pName);
        this.#year=pYear;
        Student.#count++
        
    }

    introduceSelf(){
        console.log(`Hi! My name is ${this.name} and I an in year ${this.#year}`)
    }

    get getYear(){
        return this.#year;
    }

    set setYear(pYear){
        if(typeof(pYear)=="number && ">0)
            this.#year=pYear
        else
            throw new Error("Year should be grater than 0!")

    }

    static get count(){
        return Student.count
    }
}

const Andreea=new Person("Andreea")

Andreea.introduceSelf()

const teacher=new Teacher("Profesor", "TW");
teacher.introduceSelf();

console.log(teacher.grade("test"));


const student=new Student("Student", 3)
student.introduceSelf()


console.log(student.getYear)
student.setYear=2
console.log(student.getYear)

const student2=new Student("Student", 3)

//console.log("Count: " + Student.count)

Student.prototype.whichYear=function(){
    console.log(`I am in year ${this.getYear}`)
}

student.whichYear();

Person.prototype.introduce=function(){
    console.log(`Hi! My name is ${this.name}`)
}

Andreea.introduce()
student.introduce()


String.prototype.capitalizeWords=function(){
    return this.replace(/\b[a-z]/g, match=>match.toUpperCase()) 
}

let text=new String("hi!my name is andreea and i am in year two")

console.log(text.capitalizeWords())

