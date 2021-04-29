export default // @ts-ignore
class ErrorAPI extends Error {
  private message: string;

  private clientMessage: any;

  private statusCode: any;

  private data: any;

  constructor({ response }, clientMessage = '') {
    super();
    this.message = response?.data?.message || 'Erro';
    this.statusCode = response.status;
    this.data = response.data;
    this.clientMessage = clientMessage;
  }
}
