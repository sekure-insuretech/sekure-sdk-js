import axios from "axios";
import { Estimate } from "../Interfaces/Estimate";
import { skrKey, url } from "./Configuration";

export const GetEstimateBySessionId = async ( sessionId : string ) : Promise<Estimate> => {

    const resp = await axios.get<Estimate>(`${ url }/Estimates/Session/${ sessionId }`, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json; charset=utf-8",
        "Access-Control-Allow-Credentials": true,
        "X-Requested-With": "XMLHttpRequest",
        "skr-key": skrKey
      }
    });
  
    return resp.data;
  }
  