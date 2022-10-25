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

      this.users.forEach(user => {
        if(user.userEmail = newUser.userEmail){
          this.logger.log("It seems this email already exist")
        }else{
          this.users.push(newUser);
          this.logger.log("A new user added.", newUser); //x , this.loggerType
        }
      });
    }

    delete(oldUser){

      this.users = this.users.filter((user) => { user.userId !== oldUser.userId })
      this.logger.log(`${ oldUser.userName } named user deleted...`)
    }
    
  }