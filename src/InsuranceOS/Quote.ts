import { ExecutableProduct } from "../Types/ExecutableProduct";
import axios from "axios";
import { skrKey, url } from "./Configuration";
import { QuotedProduct } from "../Interfaces/QuotedProduct";

export const Quote = async (request : ExecutableProduct) : Promise<QuotedProduct> => {

    const { data } = await axios.post<QuotedProduct>(`${ url }/Products/Quote`,
    JSON.stringify(request),
    {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json; charset=utf-8",
          "Access-Control-Allow-Credentials": true,
          "X-Requested-With": "XMLHttpRequest",
          "skr-key": skrKey
        }
      });
  
    return data;
  }
