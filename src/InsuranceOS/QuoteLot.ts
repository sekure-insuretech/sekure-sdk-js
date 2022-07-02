import axios from "axios";
import { skrKey, url } from "./Configuration";
import { Exception } from "../Interfaces/Exception";
import { ExecutatbleProductLot } from "../Types/ExecutatbleProductLot";
import { QuoteProductLot } from "../Interfaces/QuoteProductLot";

export const QuoteLot = async ( request : ExecutatbleProductLot ) : Promise<( QuoteProductLot | Exception )> => {

    const { data } = await axios.post<( QuoteProductLot | Exception )>(`${ url }/Products/Batch/Quote`,
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
