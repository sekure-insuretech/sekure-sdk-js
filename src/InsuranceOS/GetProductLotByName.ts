import axios from "axios";
import i = Sekure.Interface;
import { configRequest, url } from "./Configuration";

export const GetProductLotByName = async ( name : string ) : Promise<i.BatchDiscovery> => {

    const resp = await axios.get<i.BatchDiscovery>(`${ url }/Products/Batch/${ name }`, 
      configRequest);
  
    return resp.data;
  }
  