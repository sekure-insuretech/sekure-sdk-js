import { BatchDetail } from "./BatchDetail";
import { InputParameter } from "./InputParameter";

export interface BatchDiscovery {
    BatchDetail: BatchDetail;
    Quote:       InputParameter[];
    Confirm:     InputParameter[];
    ToEmit:      InputParameter[];
}
