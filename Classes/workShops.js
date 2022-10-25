export default class workShops{
    constructor(workShopId ,workShopTopic, workShopInstructor, workShopContent, workShopImage , workShopPrice,   ){
      this.workShopId = workShopId;
      this.workShopTopic = workShopTopic;
      this.workShopInstructor = workShopInstructor;
      this.workShopContent = workShopContent;
      this.workShopImage = workShopImage;
      this.workShopPrice = workShopPrice;
    }

    kampTanıt(){
      console.log(`${this.workShopTopic} konusunun işleneceği kamp ${this.workShopInstructor} tarafından yönetilecek olup fiyatı ${this.workShopPrice} olarak belirlenmiştir.  `)
    }
  }


  const java = new workShops("Java" , "Selim Akyol", "Java giriş ve temel özellikler", "resim", "Ücretsiz");