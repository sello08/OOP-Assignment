

console.log("--------------------------------------------");

export class workShopService {
  constructor(logger) {
  
    this.workShops = [];
    this.logger = logger;
  }

  list(filterCb) {
    
    console.log(filterCb !== undefined ? this.workShops.filter(filterCb) : this.workShops); 
 
  }

  add(newWorkShop) {
       

    // check array has any workshop or not if it has any value then check its ID so workshops ID has uniqueness
    if(!this.workShops.length){
        this.workShops.push(newWorkShop);
        this.logger.log("A new WorkShop added.", newWorkShop);
    }else{
      this.workShops.forEach(element => {
        if(element.workShopId == newWorkShop.workShopId){
          this.logger.log("It seems this topic ID already in use...")
        }else{
          this.workShops.push(newWorkShop);
          this.logger.log("A new WorkShop added.", newWorkShop);
        }
      });
    }
  }

  deleteById(id){
    this.workShops =  this.workShops.filter((workShop) => { workShop.workShopId !== id })

    this.logger.log(`${id} id workshop deleted from the list....`)
    };
  }
