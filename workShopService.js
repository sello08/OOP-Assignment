import workShops from "./workShops";

console.log("--------------------------------------------");

export class workShopService {
  constructor(logger) {
  
    this.workShops = [];
    this.logger = logger;
  }

  list(filterCb) {
    
    console.log(filterCb !== undefined ? this.workShops.filter(filterCb) : this.workShops); // ternary operator
 
  }

  add(workShop) {
    this.workShops.push(workShop);
    this.logger.log("Yeni bir ev eklendi.", workShop); //x , this.loggerType
  }
}