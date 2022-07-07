import axios from 'axios';
import i = Sekure.Interface;
import t = Sekure.Types;

export default class InsuranceOS {
  private _url: string;
  private _skrKey: string;

  constructor(url: string, skrKey: string) {
    this._url = url;
    this._skrKey = skrKey;
  }

  public ConfigRequest(skrKey: string): any {
    if (process.env.NODE_ENV === 'development') {
      console.log(skrKey);
    }
    return {
      headers: {
        mode: 'no-cors',
        Accept: 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json; charset=utf-8',
        'X-Requested-With': 'XMLHttpRequest',
        'skr-key': skrKey,
      },
    };
  }

  public GetProducts = async (): Promise<i.ProductDetail> => {
    const { data } = await axios.get<i.ProductDetail>(
      `${this._url}/Products/`,
      this.ConfigRequest(this._skrKey)
    );
    return data;
  };

  public GetProductById = async (id: number): Promise<i.Product> => {
    const { data } = await axios.get<i.Product>(
      `${this._url}/Products/${id}`,
      this.ConfigRequest(this._skrKey)
    );
    return data;
  };

  public GetEstimateBySessionId = async (
    sessionId: string
  ): Promise<i.Estimate> => {
    const { data } = await axios.get<i.Estimate>(
      `${this._url}/Estimates/Session/${sessionId}`,
      this.ConfigRequest(this._skrKey)
    );
    return data;
  };

  public GetQuoteBySessionId = async (
    sessionId: string
  ): Promise<i.Product> => {
    const { data } = await axios.get<i.Product>(
      `${this._url}/Quote/Session/${sessionId}`,
      this.ConfigRequest(this._skrKey)
    );
    return data;
  };

  public GetProductStage = async (
    sessionId: string
  ): Promise<i.ProductStage> => {
    const { data } = await axios.get<i.ProductStage>(
      `${this._url}/Products/Stage/${sessionId}`,
      this.ConfigRequest(this._skrKey)
    );
    return data;
  };

  public GetProductLotByName = async (
    name: string
  ): Promise<i.BatchDiscovery> => {
    const { data } = await axios.get<i.BatchDiscovery>(
      `${this._url}/Products/Batch/${name}`,
      this.ConfigRequest(this._skrKey)
    );
    return data;
  };

  public Quote = async (
    request: t.ExecutableProduct
  ): Promise<i.QuotedProduct> => {
    const { data } = await axios.post<i.QuotedProduct>(
      `${this._url}/Products/Quote`,
      JSON.stringify(request),
      this.ConfigRequest(this._skrKey)
    );
    return data;
  };

  public Confirm = async (
    request: t.ExecutableProduct,
    sessionId: string
  ): Promise<i.Policy> => {
    const { data } = await axios.post<i.Policy>(
      `${this._url}/Products/Confirm/${sessionId}`,
      JSON.stringify(request),
      this.ConfigRequest(this._skrKey)
    );
    return data;
  };

  public Emit = async (
    request: t.ExecutableProduct,
    sessionId: string
  ): Promise<string> => {
    const { data } = await axios.post<string>(
      `${this._url}/Products/Emit/${sessionId}`,
      JSON.stringify(request),
      this.ConfigRequest(this._skrKey)
    );
    return data;
  };

  public QuoteLot = async (
    request: t.ExecutatbleProductLot
  ): Promise<i.QuoteProductLot> => {
    const { data } = await axios.post<i.QuoteProductLot>(
      `${this._url}/Products/Batch/Quote`,
      JSON.stringify(request),
      this.ConfigRequest(this._skrKey)
    );
    return data;
  };

  public ConfirmLot = async (
    request: t.ExecutatbleProductLot,
    sessionId: string
  ): Promise<i.QuoteProductLot> => {
    const { data } = await axios.post<i.QuoteProductLot>(
      `${this._url}/Products/Batch/Confirm/${sessionId}`,
      JSON.stringify(request),
      this.ConfigRequest(this._skrKey)
    );
    return data;
  };

  public EmitLot = async (
    request: t.ExecutatbleProductLot,
    sessionId: string
  ): Promise<string> => {
    const { data } = await axios.post<string>(
      `${this._url}/Products/Batch/Emit/${sessionId}`,
      JSON.stringify(request),
      this.ConfigRequest(this._skrKey)
    );
    return data;
  };

  public Pay = async (request: t.PaymentDetail): Promise<string> => {
    const { data } = await axios.post<string>(
      `${this._url}/Payment`,
      JSON.stringify(request),
      this.ConfigRequest(this._skrKey)
    );
    return data;
  };

  public GetPaymentStatus = async (
    request: t.PaymentDetail
  ): Promise<i.PaymentStatus> => {
    const { data } = await axios.post<i.PaymentStatus>(
      `${this._url}/Payment/Status`,
      JSON.stringify(request),
      this.ConfigRequest(this._skrKey)
    );
    return data;
  };

  public GetPaymentGatewayConfiguration = async (
    paymentGatewayName: string,
    productName: string
  ): Promise<i.PaymentGatewayProduct> => {
    const { data } = await axios.get<i.PaymentGatewayProduct>(
      `${this._url}/Payment/Configuration/paymentGatewayName=${paymentGatewayName}&productName=${productName}`,
      this.ConfigRequest(this._skrKey)
    );
    return data;
  };

  public AskSekure = async (
    parameters: any,
    productId: number,
    productName: string
  ): Promise<string> => {
    const { data } = await axios.post<string>(
      `${this._url}/Products/AskSekure/productId=${productId}&productName=${productName}`,
      JSON.stringify(parameters),
      this.ConfigRequest(this._skrKey)
    );
    return data;
  };
}
