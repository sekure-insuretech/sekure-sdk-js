import { InputParameterSchemaList } from "./InputParameterSchemaList";

export type InputParameter = {
    Name:                      string;
    InputParameterId:          number;
    InputParameterType:        string;
    InputParameterDescription: string;
    InputParameterRequired:    string;
    ShowApi:                   boolean;
    InputParameterSchemaList:  InputParameterSchemaList[];
}