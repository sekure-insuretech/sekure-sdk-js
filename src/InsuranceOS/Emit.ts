import axios from "axios";
import { ExecutableProduct } from "../Types/ExecutableProduct";
import { skrKey, url } from "./Configuration";

export const Emit = async (request : ExecutableProduct, SessionId: string ) : Promise<string> => {

    const { data } = await axios.post<string>(`${ url }/Products/Emit/${ SessionId }`,
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