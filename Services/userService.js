import users from "../Classes/users";

export class userService {
    constructor(logger) {
    
      this.users = [];
      this.logger = logger;
    }
  
    list(filterCb) {
      
      console.log(filterCb !== undefined ? this.users.filter(filterCb) : this.users); // ternary operator
   
    }
  
    add(newUser) {


      if(!this.users.length){
        
        this.users.push(newUser);
        this.logger.log("A new user added.", newUser);

      }else{

      this.users.forEach(element => {
        if(element.userId == newUser.userId){
          this.logger.log("It seems this ID already in use...")
        }else{
          this.users.push(newUser);
          this.logger.log("A new user added..", newUser);
        }
      });
    }
     
    }

    delete(oldUser){

      this.users = this.users.filter((user) => { user.userId !== oldUser.userId })
      this.logger.log(`${ oldUser.userName } named user deleted...`)
    }
    
  }