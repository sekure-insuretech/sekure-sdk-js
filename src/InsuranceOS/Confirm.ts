import axios from "axios";
import { ExecutableProduct } from "../Types/ExecutableProduct";
import { skrKey, url } from "./Configuration";
import { Exception } from "../Interfaces/Exception";
import { Policy } from "../Interfaces/Policy";

export const Confirm = async (request : ExecutableProduct, SessionId: string ) : Promise<( Policy | Exception )> => {

    const { data } = await axios.post<( Policy | Exception )>(`${ url }/Products/Confirm/${ SessionId }`,
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