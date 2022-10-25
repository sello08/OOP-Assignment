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


    if(!this.instructors.length){
        
      this.instructors.push(newInstructor);
      this.logger.log("A new user added.", newInstructor);

    }else{

    this.instructors.forEach(element => {
      if(element.instructorId == newInstructor.instructorId){
        this.logger.log("It seems this ID already in use...")
      }else{
        this.users.push(newInstructor);
        this.logger.log("A new user added..", newInstructor);
      }
    });
  }
  }
  
  ddeleteById(id){
    this.instructors =  this.instructors.filter((instructor) => { instructor.instructorId !== id })

    this.logger.log(`${id} id instructor deleted from the list....`)
    };
}