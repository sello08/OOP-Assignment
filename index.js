import workShops from "./Classes/workShops";
import { workShopService } from "./Services/workShopService";
import { SmsLogger, FileLogger, EmailLogger, BaseLogger } from "./Loggers";






//Workshop Creation--------------------------------------------------------------------------------------------

const logger1 = new SmsLogger();
const workShopService1 = new workShopService(logger1);
const workShop1 = new workShops("Java" , "Selim Akyol", "Java giriş ve temel özellikler", "resim", "Ücretsiz")

workShopService1.add(workShop1);

