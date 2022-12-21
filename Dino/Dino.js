class Dino
{
    constructor(naam,vleeseter,leeftijd)
    {
        this.naam = naam;
        this.vleeseter = vleeseter;
        this.leeftijd = leeftijd;
    }  
}

class App

{
    runApplication()
    {
        let trex = new Dino("Trex",true,10)
        console.log(trex);
    } 
}

let app = new App();
app.runApplication();


class Dino2
{
    constructor(naam, planteneter,leeftijd)
    {
        this.naam = naam;
        this.planteneter = planteneter;
        this.leeftijd = leeftijd;
    }
}

class App2

{
    runApplication()
    {
        let trex = new Dino2("Olorotitan",false,20)
        console.log(trex);
    } 
}

let app2 = new App();
app.runApplication();


class Dino3
{
    constructor(naam, planteneter,leeftijd)
    {
        this.naam = naam;
        this.alleseter = alleseter;
        this.leeftijd = leeftijd;
    }
}

