import workShops from "./Classes/workShops.js"
import { workShopService } from "./Services/workShopService.js";
import { SmsLogger, FileLogger, EmailLogger, BaseLogger } from "./Loggers.js";






//Workshop Creation--------------------------------------------------------------------------------------------

const logger1 = new SmsLogger();
const workShopService1 = new workShopService(logger1);
const workShop1 = new workShops(1, "Java" , "Selim Akyol", "Java giriş ve temel özellikler", "resim", "Ücretsiz")

workShopService1.add(workShop1);



