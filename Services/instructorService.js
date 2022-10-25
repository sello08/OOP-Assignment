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


    this.isntructors.forEach(instructor => {
      if(instructor.instructorId = newInstructor.instructorId){
        this.logger.log("It seems this instructor already exist")
      }else{
        this.users.push(newInstructor);
        this.logger.log("A new instructor added.", newInstructor); //x , this.loggerType
      }
    });




    this.instructors.push(instructor);
    this.logger.log("A new instructor added.", instructor); //x , this.loggerType
  }
}