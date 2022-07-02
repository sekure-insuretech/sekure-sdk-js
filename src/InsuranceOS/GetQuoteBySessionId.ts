import axios from "axios";
import i = Sekure.Interface;
import { configRequest, url } from "./Configuration";

export const GetQuoteBySessionId = async ( sessionId : string ) : Promise<i.Product> => {

    const resp = await axios.get<i.Product>(`${ url }/Quote/Session/${ sessionId }`, 
      configRequest);
  
    return resp.data;
  }
  