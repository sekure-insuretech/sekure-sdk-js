import axios from "axios";
import { Product } from "../Interfaces/Product";
import { configRequest, url } from "./Configuration";

export const GetProductById = async (id: number) : Promise<Product> => {

    const resp = await axios.get<Product>(`${ url }/Products/${ id }`, 
      configRequest);
  
    return resp.data;
  }
  