import axios from "axios";
import { ProductStage } from "../Interfaces/ProductStage";
import { configRequest, url } from "./Configuration";

export const GetProductStage = async ( sessionId : string ) : Promise<ProductStage> => {

    const resp = await axios.get<ProductStage>(`${ url }/Products/Stage/${ sessionId }`, 
      configRequest);
  
    return resp.data;
  }