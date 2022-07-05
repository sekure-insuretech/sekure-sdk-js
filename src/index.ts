import InsuranceOS from './InsuranceOS';
import i = Sekure.Interface;
import t = Sekure.Types;

export default class Sekure {
  private ios: InsuranceOS;
  constructor(url: string, skrKey: string) {
    this.ios = new InsuranceOS(url, skrKey);
  }

  public GetProductById = async (id: number): Promise<i.Product> => {
    return await this.ios
      .GetProductById(id)
      .then(res => res)
      .catch(error => error);
  };

  public GetProducts = async (): Promise<i.ProductDetail> => {
    return await this.ios
      .GetProducts()
      .then(res => res)
      .catch(error => error);
  };

  public GetEstimateBySessionId = async (sessionId: string): Promise<i.Estimate> => {
      return await this.ios
        .GetEstimateBySessionId(sessionId)
        .then(res => res)
        .catch(error => error);
  };

  public GetQuoteBySessionId = async (sessionId: string): Promise<i.Product> => {
    return await this.ios
      .GetQuoteBySessionId(sessionId)
      .then(res => res)
      .catch(error => error);
  };

  public GetProductStage = async (sessionId: string): Promise<i.ProductStage> => {
    return await this.ios
      .GetProductStage(sessionId)
      .then(res => res)
      .catch(error => error);
  };

  public GetProductLotByName = async (name: string): Promise<i.BatchDiscovery> => {
    return await this.ios
      .GetProductLotByName(name)
      .then(res => res)
      .catch(error => error);
  };

  public Quote = async (request: t.ExecutableProduct): Promise<i.QuotedProduct> => {
    return await this.ios
      .Quote(request)
      .then(res => res)
      .catch(error => error);
  };

  public Confirm = async (request: t.ExecutableProduct, SessionId: string ): Promise<i.Policy> => {
    return await this.ios
      .Confirm(request, SessionId)
      .then(res => res)
      .catch(error => error);
  };

  public Emit = async (request: t.ExecutableProduct, SessionId: string): Promise<string> => {
    return await this.ios
      .Emit(request, SessionId)
      .then(res => res)
      .catch(error => error);
  };

  public QuoteLot = async (request: t.ExecutatbleProductLot): Promise<(i.QuoteProductLot)> => {
    return await this.ios
      .QuoteLot(request)
      .then(res => res)
      .catch(error => error);
  };
}