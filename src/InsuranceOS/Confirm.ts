import axios from "axios";
import { ExecutableProduct } from "../Types/ExecutableProduct";
import { configRequest, url } from "./Configuration";
import { Exception } from "../Interfaces/Exception";
import { Policy } from "../Interfaces/Policy";

export const Confirm = async (request : ExecutableProduct, SessionId: string ) : Promise<( Policy | Exception )> => {

    const { data } = await axios.post<( Policy | Exception )>(`${ url }/Products/Confirm/${ SessionId }`,
    JSON.stringify(request), configRequest);

    return data;
  }