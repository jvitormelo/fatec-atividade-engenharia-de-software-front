import AbstractResource from './AbstractResource'

class UserResource extends AbstractResource {
  index () {

  }

  async find (id: string | number) {
    try {
      const response = await this.api.get(`/users/${id}`)
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
export default new UserResource()
