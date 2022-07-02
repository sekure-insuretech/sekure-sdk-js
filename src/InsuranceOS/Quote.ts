import axios from "axios";
import { configRequest, url } from "./Configuration";

import i = Sekure.Interface;
import t = Sekure.Types;

export const Quote = async (request : t.ExecutableProduct) : Promise<i.QuotedProduct> => {

    const { data } = await axios.post<i.QuotedProduct>(`${ url }/Products/Quote`,
      JSON.stringify(request), configRequest);
  
    return data;
  }
