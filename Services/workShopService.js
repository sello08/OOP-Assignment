

console.log("--------------------------------------------");

export class workShopService {
  constructor(logger) {
  
    this.workShops = [];
    this.logger = logger;
  }

  list(filterCb) {
    
    console.log(filterCb !== undefined ? this.workShops.filter(filterCb) : this.workShops); // ternary operator
 
  }

  add(newWorkShop) {

    
        this.workShops.push(newWorkShop);
        this.logger.log("A new WorkShop added.", newWorkShop); //x , this.loggerType
    
  }

  deleteById(id){
    this.workShops =  this.workShops.filter((workShop) => { workShop.workShopId !== id })

    this.logger.log(`${topic} named workshop deleted from the list....`)
    };
  }
