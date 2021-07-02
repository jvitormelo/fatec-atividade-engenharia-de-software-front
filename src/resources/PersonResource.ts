import AbstractResource from './AbstractResource'

class PersonResource extends AbstractResource {
  async find () {
    try {
      const response = await this.api.get('/persons')
      return {
        error: false,
        data: response?.data?.response || {},
        response
      }
    } catch (e) {
      return {
        error: true,
        data: {},
        response: e
      }
    }
  }
}
export default new PersonResource()
