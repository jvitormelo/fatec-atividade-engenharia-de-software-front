import AbstractResource from './AbstractResource'

class ImagesResource extends AbstractResource {
  async index () {
    try {
      const response = await this.api.get('/images')
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

  async create (values: any) {
    try {
      const response = await this.api.post('/images', values)
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

  async destroy (id : number) {
    try {
      const response = await this.api.delete(`/images/${id}`)
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
export default new ImagesResource()
