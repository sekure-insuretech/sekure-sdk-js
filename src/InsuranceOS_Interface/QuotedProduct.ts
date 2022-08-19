namespace Sekure {
  export namespace Interface {
    export interface QuotedProduct {
      SessionId: string;
      ProductDetail: ProductDetail;
      PolicyHolder: PolicyHolder;
      Quotes: Quote[];
      PaymentGatewaySkr: boolean;
    }
  }
}
