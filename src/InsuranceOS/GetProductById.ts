import axios from "axios";
import { configRequest, url } from "./Configuration";
import i = Sekure.Interface;

export const GetProductById = async (id: number) : Promise<i.Product> => {

    const resp = await axios.get<i.Product>(`${ url }/Products/${ id }`, 
      configRequest);
  
    return resp.data;
  }
  