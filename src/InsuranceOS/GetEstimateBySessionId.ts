import axios from "axios";
import { Estimate } from "../Interfaces/Estimate";
import { configRequest, url } from "./Configuration";

export const GetEstimateBySessionId = async ( sessionId : string ) : Promise<Estimate> => {

    const resp = await axios.get<Estimate>(`${ url }/Estimates/Session/${ sessionId }`, 
      configRequest);
  
    return resp.data;
  }
  