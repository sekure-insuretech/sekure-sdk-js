import axios from "axios";
import { ProductStage } from "../Interfaces/ProductStage";
import { skrKey, url } from "./Configuration";

export const GetProductStage = async (sessionId : string) : Promise<ProductStage> => {

    const resp = await axios.get<ProductStage>(`${url}/Products/Stage/${sessionId}`, {
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