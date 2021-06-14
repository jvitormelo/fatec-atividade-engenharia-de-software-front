import AbstractResource from './AbstractResource'

class LogsResource extends AbstractResource {
  async index () {
    try {
      const response = await this.api.get('/logs')
      return {
        error: false,
        data: response?.data?.response || [],
        response
      }
    } catch (e) {
      return {
        error: true,
        data: [],
        response: e
      }
    }
  }
}
export default new LogsResource()
