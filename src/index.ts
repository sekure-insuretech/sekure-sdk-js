import InsuranceOS from "./InsuranceOS";
import i = Sekure.Interface;
/* import t = Sekure.Types; */

export default class Sekure {

    private ios: InsuranceOS;
    constructor( url: string, skrKey: string ) 
    {
        this.ios = new InsuranceOS(url, skrKey);
    }

    public GetProductById = async (id: number) : Promise<i.Product> => {
        return await this.ios.GetProductById(id).then((res) => res).catch((error) => error);
    }

    public forEach(items: any, callback: any) {
        for (let index = 0; index < items.length; index++) {
          callback(items[index]);
        }
      }
}