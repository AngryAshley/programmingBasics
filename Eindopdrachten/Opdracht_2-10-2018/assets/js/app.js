function opdracht1(){
 let roundTimes = {
     0: 55.99,
     1: 63.00,
     2: 63.01,
     3: 54.01,
     4: 62.79,
     5: 52.88,
     6: 53.10,
     7: 54.12,
 }   
 return roundTimes
}

function opdracht2(){
    const teachers = [
        {
            name: "Loek",
            profession: "Teacher",
            brand: "Linux"
        },
        {
            name: "Daan",
            profession: "Teacher",
            brand: "Arduino"
        },
        {
            name: "Rimmert",
            profession: "Teacher",
            brand: "Apple"
        }
    ]
    teachers.forEach(function(element){
        console.log(`I have a ${element.profession} called ${element.name} and he likes to work on a ${element.brand} system`)
    });
}

///Opdracht 3 moet buiten een functie staan, anders werkt hij niet
    const teachers = [
        {
            name: "Loek",
            profession: "Teacher",
            brand: "Linux",
            HoursPerWeek: 40,
            Salary: 2000,
            SalaryPerHour(){return this.Salary/this.HoursPerWeek},
        },
        {
            name: "Daan",
            profession: "Teacher",
            brand: "Arduino",
            HoursPerWeek: 30,
            Salary: 1957,
            SalaryPerHour(){return this.Salary/this.HoursPerWeek},
        },
        {
            name: "Rimmert",
            profession: "Teacher",
            brand: "Apple",
            HoursPerWeek: 45,
            Salary: 2205,
            SalaryPerHour(){return this.Salary/this.HoursPerWeek},
        }
    ]
