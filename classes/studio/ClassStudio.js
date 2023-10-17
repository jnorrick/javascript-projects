//Declare a class called CrewCandidate with a constructor that takes three parameters—name, mass, and scores. Note that scores will be an array of test results.

class CrewCandidate {
    constructor(name, mass, scores) {

        this.name = name; //string
        this.mass = mass; //number
        this.scores = scores // array of numbers
    }

    addScore(score) {
        this.scores.push(score)
    }

    average() {
        let totalSum = 0
        let numCount = this.scores.length  
        
        for (let i in this.scores){
            totalSum += this.scores[i];
            
        }
        let crewMemberAverage = Math.round(totalSum/numCount*10)/10
        this.averageScore = crewMemberAverage
        return crewMemberAverage
        
    }

    status() {
        let crewStatus = ""
        if (this.averageScore >= 90) {
            crewStatus = "Accepted";
        } else if (this.averageScore <= 89 && this.averageScore >= 80 ) {
            crewStatus = "Reserve";
        } else if (this.averageScore <= 79 && this.averageScore >= 70) {
            crewStatus = "Probationary";
        } else {
            crewStatus = "Rejected"
        } this.crewStatus = crewStatus 
        return crewStatus 
        
    } 
}

let bubbaBear = new CrewCandidate("Bubba Bear", 135,[88,85,90])

let merryMaltese = new CrewCandidate("Merry Maltese", 1.5, [93, 88, 97])

let gladGator = new CrewCandidate("Glad Gator", 225, [75, 78, 62])

// let crewResult = console.log(`${this.name} earned an average test score of ${this.averageScore} and has the status of ${this.crewStatus}`)
// console.log(bubbaBear)
// console.log(merryMaltese)
// console.log(gladGator)

// bubbaBear.addScore(83)
merryMaltese.average(merryMaltese.scores)
merryMaltese.status(merryMaltese.averageScore)
console.log(merryMaltese)
console.log(`${merryMaltese.name} earned an average test score of ${merryMaltese.averageScore} and has the status of ${merryMaltese.crewStatus}`)
//Add methods for adding scores, averaging scores and determining candidate status as described in the studio activity.



//Part 4 - Use the methods to boost Glad Gator’s status to Reserve or higher. How many tests will it take to reach Reserve status? How many to reach Accepted? Remember, scores cannot exceed 100%.