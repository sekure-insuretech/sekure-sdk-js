import axios from "axios";
import { ProductDetail } from "../Interfaces/ProductDetail";
import { configRequest, url } from "./Configuration";

export const GetProducts = async () : Promise<ProductDetail> => {

    const resp = await axios.get<ProductDetail>(`${url}/Products/`, 
      configRequest);
  
    return resp.data;
  }