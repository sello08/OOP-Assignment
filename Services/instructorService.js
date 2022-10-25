import instructors from "../Classes/instructors"

console.log("--------------------------------------------");

export class instructorService {
  constructor(logger) {
  
    this.instructors = [];
    this.logger = logger;
  }

  list(filterCb) {
    
    console.log(filterCb !== undefined ? this.instructors.filter(filterCb) : this.instructors); // ternary operator
 
  }

  add(newInstructor) {

    this.instructors.push(instructor);
    this.logger.log("A new instructor added.", instructor); //x , this.loggerType
  }
}