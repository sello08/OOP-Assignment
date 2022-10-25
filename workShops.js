export default class workShops{
    constructor(kampKonu, kampEğitmen, kampİçerik, kampTanıtımResim , kampÜcret,   ){
      this.kampKonu = kampKonu;
      this.kampEğitmen = kampEğitmen;
      this.kampİçerik = kampİçerik;
      this.kampTanıtımResim = kampTanıtımResim;
      this.kampÜcret = kampÜcret;
    }

    kampTanıt(){
      console.log(`${this.kampKonu} konusunun işleneceği kamp ${this.kampEğitmen} tarafından yönetilecek olup fiyatı ${this.kampÜcret} olarak belirlenmiştir.  `)
    }
  }


  const java = new workShops("Java" , "Selim Akyol", "Java giriş ve temel özellikler", "resim", "Ücretsiz");