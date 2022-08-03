namespace Sekure {
  export namespace Interface {
    export interface Policy {
      SessionId: string;
      ProductDetail: ProductDetail;
      PolicyHolder: PolicyHolder;
      ConfirmedQuote: InputParameter[];
      Status: string;
    }
  }
}
