export default class workShops{
    constructor(workShopsTopic, workShopsInstructor, workShopsContent, workShopImage , workShopPrice,   ){
      this.workShopsTopic = workShopsTopic;
      this.workShopsInstructor = workShopsInstructor;
      this.workShopsContent = workShopsContent;
      this.workShopImage = workShopImage;
      this.workShopPrice = workShopPrice;
    }

    kampTanıt(){
      console.log(`${this.workShopsTopic} konusunun işleneceği kamp ${this.workShopsInstructor} tarafından yönetilecek olup fiyatı ${this.workShopPrice} olarak belirlenmiştir.  `)
    }
  }


  const java = new workShops("Java" , "Selim Akyol", "Java giriş ve temel özellikler", "resim", "Ücretsiz");