import axios from "axios";
import { configRequest, url } from "./Configuration";

import i = Sekure.Interface;
import t = Sekure.Types;

export const QuoteLot = async ( request : t.ExecutatbleProductLot ) : Promise<( i.QuoteProductLot | i.Exception )> => {

    const { data } = await axios.post<( i.QuoteProductLot | i.Exception )>(`${ url }/Products/Batch/Quote`,
      JSON.stringify(request), configRequest);
  
    return data;
  }
