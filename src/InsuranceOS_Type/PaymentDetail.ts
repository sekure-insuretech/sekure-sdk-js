namespace Sekure {
  export namespace Types {
    export type PaymentDetail = {
      PaymentGatewayName: string;
      ProductName: string;
      TransactionSkrId: string;
      ClientSkrId?: string;
      Request: any[];
    };
  }
}
