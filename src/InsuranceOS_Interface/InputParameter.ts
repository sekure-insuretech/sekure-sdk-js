namespace Sekure {
  export namespace Interface {
    export interface InputParameter {
      Name: string;
      InputParameterId: number;
      InputParameterType: string;
      InputParameterValue: string;
      InputParameterDescription: string;
      InputParameterRequired: string;
      ShowApi: boolean;
      InputParameterSchemaList: InputParameterSchemaList[];
    }
  }
}
