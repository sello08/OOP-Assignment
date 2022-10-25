import users from "../Classes/users";

export class userService {
    constructor(logger) {
    
      this.users = [];
      this.logger = logger;
    }
  
    list(filterCb) {
      
      console.log(filterCb !== undefined ? this.users.filter(filterCb) : this.users); // ternary operator
   
    }
  
    add(user) {
      this.users.push(user);
      this.logger.log("Yeni bir kullanıcı eklendi.", user); //x , this.loggerType
    }
  }