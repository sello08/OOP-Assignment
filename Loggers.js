export class BaseLogger {
    getTimeNow() {
      return new Date().getFullYear();
    }
    log(title, data) {
      throw new Error("log methodu implemente edilmeli.");
    }
  }
  
  export class FileLogger extends BaseLogger {
    log(title, data) {
      console.log(`${this.getTimeNow()} File Logger:`, title, data);
    }
  }
  
  export class SmsLogger extends BaseLogger {
    log(title, data) {
      console.log(`${this.getTimeNow()} Sms Logger:`, title, data);
    }
  }
  
  export class EmailLogger extends BaseLogger {
    log(title, data) {
      console.log(`${this.getTimeNow()} Email Logger:`, title, data);
    }
  }