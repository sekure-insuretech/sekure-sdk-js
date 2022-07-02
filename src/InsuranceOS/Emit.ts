import axios from "axios";
import { ExecutableProduct } from "../Types/ExecutableProduct";
import { configRequest, url } from "./Configuration";

export const Emit = async (request : ExecutableProduct, SessionId: string ) : Promise<string> => {

    const { data } = await axios.post<string>(`${ url }/Products/Emit/${ SessionId }`,
      JSON.stringify(request), configRequest);
      
      return data;
  }