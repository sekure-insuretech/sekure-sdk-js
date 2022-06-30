import { InputParameterSchemaList } from "./InputParameterSchemaList";

export interface Quote {
    Name:                      string;
    InputParameterId:          number;
    InputParameterType:        string;
    InputParameterDescription: string;
    InputParameterRequired:    string;
    ShowApi:                   boolean;
    InputParameterSchemaList:  InputParameterSchemaList[];
}