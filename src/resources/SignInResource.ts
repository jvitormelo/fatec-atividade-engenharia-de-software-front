import AbstractResource from './AbstractResource'

interface Login {
  email:string,
  password:string
}

class SignInResource extends AbstractResource {
  async login (payload:Login) {
    try {
      const response = await this.api.post('/public/login', payload)
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

export default new SignInResource()
