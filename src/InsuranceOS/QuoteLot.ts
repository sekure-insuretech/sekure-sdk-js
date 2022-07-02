import axios from "axios";
import { configRequest, url } from "./Configuration";
import { Exception } from "../Interfaces/Exception";
import { ExecutatbleProductLot } from "../Types/ExecutatbleProductLot";
import { QuoteProductLot } from "../Interfaces/QuoteProductLot";

export const QuoteLot = async ( request : ExecutatbleProductLot ) : Promise<( QuoteProductLot | Exception )> => {

    const { data } = await axios.post<( QuoteProductLot | Exception )>(`${ url }/Products/Batch/Quote`,
      JSON.stringify(request), configRequest);
  
    return data;
  }
