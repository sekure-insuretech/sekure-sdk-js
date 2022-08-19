import InsuranceOS from './InsuranceOS';
import i = Sekure.Interface;
import t = Sekure.Types;

export default class Sekure {
  private ios: InsuranceOS;
  constructor(url: string, skrKey: string) {
    this.ios = new InsuranceOS(url, skrKey);
  }

  public GetProducts = async (): Promise<i.ProductReference> => {
    return await this.ios
      .GetProducts()
      .then(res => res)
      .catch(error => error);
  };

  public GetProductById = async (id: number): Promise<i.Product> => {
    return await this.ios
      .GetProductById(id)
      .then(res => res)
      .catch(error => error);
  };

  public GetEstimateBySessionId = async (
    sessionId: string
  ): Promise<i.Estimate> => {
    return await this.ios
      .GetEstimateBySessionId(sessionId)
      .then(res => res)
      .catch(error => error);
  };

  public GetQuoteBySessionId = async (
    sessionId: string
  ): Promise<i.QuotedProduct> => {
    return await this.ios
      .GetQuoteBySessionId(sessionId)
      .then(res => res)
      .catch(error => error);
  };

  public GetProductStage = async (
    sessionId: string
  ): Promise<i.ProductStage> => {
    return await this.ios
      .GetProductStage(sessionId)
      .then(res => res)
      .catch(error => error);
  };

  public GetProductLotByName = async (
    name: string
  ): Promise<i.BatchDiscovery> => {
    return await this.ios
      .GetProductLotByName(name)
      .then(res => res)
      .catch(error => error);
  };

  public Quote = async (
    request: t.ExecutableProduct
  ): Promise<i.QuotedProduct> => {
    return await this.ios
      .Quote(request)
      .then(res => res)
      .catch(error => error);
  };

  public Confirm = async (
    request: t.ExecutableProduct,
    SessionId: string
  ): Promise<i.Policy> => {
    return await this.ios
      .Confirm(request, SessionId)
      .then(res => res)
      .catch(error => error);
  };

  public Emit = async (
    request: t.ExecutableProduct,
    SessionId: string
  ): Promise<i.Policy> => {
    return await this.ios
      .Emit(request, SessionId)
      .then(res => res)
      .catch(error => error);
  };

  public QuoteLot = async (
    request: t.ExecutatbleProductLot
  ): Promise<i.QuoteProductLot> => {
    return await this.ios
      .QuoteLot(request)
      .then(res => res)
      .catch(error => error);
  };

  public ConfirmLot = async (
    request: t.ExecutatbleProductLot,
    sessionId: string
  ): Promise<i.QuoteProductLot> => {
    return await this.ios
      .ConfirmLot(request, sessionId)
      .then(res => res)
      .catch(error => error);
  };

  public EmitLot = async (
    request: t.ExecutatbleProductLot,
    sessionId: string
  ): Promise<i.Policy> => {
    return await this.ios
      .EmitLot(request, sessionId)
      .then(res => res)
      .catch(error => error);
  };

  public GetPaymentStatus = async (
    request: t.PaymentDetail
  ): Promise<i.PaymentStatus> => {
    return await this.ios
      .GetPaymentStatus(request)
      .then(res => res)
      .catch(error => error);
  };

  public Pay = async (request: t.PaymentDetail): Promise<string> => {
    return await this.ios
      .Pay(request)
      .then(res => res)
      .catch(error => error);
  };

  public GetPaymentGatewayConfiguration = async (
    paymentGatewayName: string,
    productName: string
  ): Promise<i.PaymentGatewayProduct> => {
    return await this.ios
      .GetPaymentGatewayConfiguration(paymentGatewayName, productName)
      .then(res => res)
      .catch(error => error);
  };

  public AskSekure = async (
    parameters: any,
    productId: number,
    productName: string
  ): Promise<string> => {
    return await this.ios
      .AskSekure(parameters, productId, productName)
      .then(res => res)
      .catch(error => error);
  };
}
