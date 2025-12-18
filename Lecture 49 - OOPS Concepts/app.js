class Interest{
    constructor(rate,time,n,principal){
      this.rate=rate;
      this.time=time;
      this.n=n;
      this.principal=principal;
    }
    interest(){
     return this.principal+ this.rate*this.time;
    }
}

class simple extends Interest{
    constructor(rate,time,n,principal){
        super(rate,time,n,principal);
    }
    interest(){
        return (this.principal*this.rate*this.time)/100;
    }
}

class compound extends Interest{
    constructor(rate,time,n,principal){
        super(rate,time,n,principal);
    }
    interest(){
    return this.principal * (1 + this.rate / this.n) ** (this.n * this.time)-this.principal;
    }
}

const simple1=new simple(2,3,2,20000);
console.log(simple1.interest());

const compound1=new compound(0.02,3,2,20000);
console.log(compound1.interest());




class Student {
  constructor(marks) {
    this._marks = marks;
  }

  #calculateMarks() {
    const totalSubjects = Object.keys(this._marks).length;
    let totalMarks = 0;
    for (let marks in this._marks) {
      totalMarks += this._marks[marks];
    }

    return totalMarks / totalSubjects;
  }

  get marks() {
    return this.#calculateMarks();
  }
}

const marks = {
  math: 90,
  science: 80,
  english: 100,
};
const rahul = new Student(marks);
console.log(rahul.marks);




class PersonalDetails {
  constructor({ name, age, dob }) {
    this.name = name;
    this.age = age;
    this.dob = dob;
  }
  print() {
    console.log("Personal Details: ", this.name, this.age, this.dob);
  }
}

class EducationalDetails {
  constructor({ college, gradYear, cgpa }) {
    this.college = college;
    this.gradYear = gradYear;
    this.cgpa = cgpa;
  }

  print() {
    console.log(
      "Educational Details: ",
      this.college,
      this.gradYear,
      this.cgpa
    );
  }
}

const personalDetails = {
  name: "Vaibhav",
  age: 23,
  dob: "11dec2035",
};

const educationalDetails = {
  college: "AIT",
  gradYear: 2023,
  cgpa: 8,
};

class Person {
  constructor(aadharNumber, personalDetails, educationalDetails) {
    this.aadharNumber = aadharNumber;
    this.personalDetails = new PersonalDetails(personalDetails);
    this.educationalDetails = new EducationalDetails(educationalDetails);
  }

  print() {
    console.log("Aadhar Number: " + this.aadharNumber);
    console.log("Personal Details: " + JSON.stringify(this.personalDetails));
    this.educationalDetails.print();
  }
}

const vaibhav = new Person(212122, personalDetails, educationalDetails);
vaibhav.print();