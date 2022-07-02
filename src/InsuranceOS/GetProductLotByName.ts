import axios from "axios";
import { BatchDiscovery } from "../Interfaces/BatchDiscovery";
import { configRequest, url } from "./Configuration";

export const GetProductLotByName = async ( name : string ) : Promise<BatchDiscovery> => {

    const resp = await axios.get<BatchDiscovery>(`${ url }/Products/Batch/${ name }`, 
      configRequest);
  
    return resp.data;
  }
  