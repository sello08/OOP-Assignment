import workShops from "./Classes/workShops.js"
import { workShopService } from "./Services/workShopService.js";
import { SmsLogger, FileLogger, EmailLogger, BaseLogger } from "./Loggers.js";






//Workshop Creation--------------------------------------------------------------------------------------------

const logger1 = new SmsLogger();
const workShopService1 = new workShopService(logger1);
const workShop1 = new workShops(1, "Java" , "Selim Akyol", "Java giriş ve temel özellikler", "resim", "Ücretsiz")

workShopService1.add(workShop1);

//-----------------check ID is taken or not function -----------------------------

workShopService1.add(workShop1);


//workShopService1.deleteById(1);


//console.log("-----------------delete function control-----------------------------")
workShopService1.list();




