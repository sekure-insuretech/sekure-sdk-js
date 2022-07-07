namespace Sekure {
  export namespace Interface {
    export interface PaymentStatus {
      Policy: string;
      SessionId: string;
      TenantContactId: number;
      PaymentGatewayInformation: string;
      Status: string;
      CoverageNote: string;
    }
  }
}
