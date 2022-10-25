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

  add(instructor) {
    this.instructors.push(instructor);
    this.logger.log("Yeni bir eğitmen eklendi.", instructor); //x , this.loggerType
  }
}