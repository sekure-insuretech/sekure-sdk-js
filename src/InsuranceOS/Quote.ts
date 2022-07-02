import axios from "axios";
import { ExecutableProduct } from "../Types/ExecutableProduct";
import { configRequest, url } from "./Configuration";
import { QuotedProduct } from "../Interfaces/QuotedProduct";

export const Quote = async (request : ExecutableProduct) : Promise<QuotedProduct> => {

    const { data } = await axios.post<QuotedProduct>(`${ url }/Products/Quote`,
      JSON.stringify(request), configRequest);
  
    return data;
  }
