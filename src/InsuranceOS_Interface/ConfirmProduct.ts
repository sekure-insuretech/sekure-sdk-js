namespace Sekure {
  export namespace Interface {
    export interface ConfirmProduct {
      SessionId: string;
      ProductDetail: ProductDetail;
      PolicyHolder: PolicyHolder;
      ConfirmedQuote: InputParameter;
      Status: string;
    }
  }
}
