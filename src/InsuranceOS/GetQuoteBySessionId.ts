import axios from "axios";
import { Product } from "../Interfaces/Product";
import { configRequest, skrKey, url } from "./Configuration";

export const GetQuoteBySessionId = async ( sessionId : string ) : Promise<Product> => {

    const resp = await axios.get<Product>(`${ url }/Quote/Session/${ sessionId }`, 
      configRequest);
  
    return resp.data;
  }
  