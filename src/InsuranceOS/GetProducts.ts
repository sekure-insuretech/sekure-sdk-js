import axios from "axios";
import i = Sekure.Interface;
import { configRequest, url } from "./Configuration";

export const GetProducts = async () : Promise<i.ProductDetail> => {

    const resp = await axios.get<i.ProductDetail>(`${url}/Products/`, 
      configRequest);
  
    return resp.data;
  }