import axios from "axios";
import { BatchDiscovery } from "../Interfaces/BatchDiscovery";
import { skrKey, url } from "./Configuration";

export const GetProductLotByName = async ( name : string ) : Promise<BatchDiscovery> => {

    const resp = await axios.get<BatchDiscovery>(`${ url }/Products/Batch/${ name }`, {
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
  