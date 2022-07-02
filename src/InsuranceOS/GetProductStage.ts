import axios from "axios";
import i = Sekure.Interface;
import { configRequest, url } from "./Configuration";

export const GetProductStage = async ( sessionId : string ) : Promise<i.ProductStage> => {

    const resp = await axios.get<i.ProductStage>(`${ url }/Products/Stage/${ sessionId }`, 
      configRequest);
  
    return resp.data;
  }