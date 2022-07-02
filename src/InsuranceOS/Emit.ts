import { configRequest, url } from "./Configuration";
import axios from "axios";
import t = Sekure.Types;

export const Emit = async (request : t.ExecutableProduct, SessionId: string ) : Promise<string> => {

    const { data } = await axios.post<string>(`${ url }/Products/Emit/${ SessionId }`,
      JSON.stringify(request), configRequest);
      
      return data;
  }