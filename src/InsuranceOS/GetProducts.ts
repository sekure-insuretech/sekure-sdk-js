import axios from "axios";
import { ProductDetail } from "../Interfaces/ProductDetail";
import { skrKey, url } from "./Configuration";

export const GetProducts = async () : Promise<ProductDetail> => {

    const resp = await axios.get<ProductDetail>(`${url}/Products/`, {
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