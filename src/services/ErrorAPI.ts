export default // @ts-ignore
class ErrorAPI extends Error {
  // @ts-ignore
  private statusCode: any;

  private data: any;

  private clientMessage: string;

  // @ts-ignore
  constructor({ response }, clientMessage = '') {
    super();
    this.message = response?.data?.message || 'Erro';
    this.statusCode = response.status;
    this.data = response.data;
    this.clientMessage = clientMessage;
  }

  test() {
    console.log(this.clientMessage, this.data);
  }
}
