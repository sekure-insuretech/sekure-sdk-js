namespace Sekure {
  export namespace Types {
    export type InputParameter = {
      Name: string;
      InputParameterId: number;
      InputParameterType: string;
      InputParameterDescription: string;
      inputParameterValue: string;
      InputParameterRequired: string;
      ShowApi: boolean;
      InputParameterSchemaList: InputParameterSchemaList[];
    };
  }
}
