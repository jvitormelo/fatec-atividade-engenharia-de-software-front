export default class ErrorAPI extends Error {
  // @ts-ignore
  private statusCode: any;

  // @ts-ignore
  private data: any;

  // @ts-ignore
  private clientMessage: string;

  // @ts-ignore
  constructor ({ response }, clientMessage = '') {
    super()
    this.message = response?.data?.message || 'Erro'
    this.statusCode = response.status
    this.data = response.data
    this.clientMessage = clientMessage
  }
}
