import AbstractResource from './AbstractResource'
import { CreateAccountInputs } from '../components/home/create_account'

class UserResource extends AbstractResource {
  async index () {
    try {
      const response = await this.api.get('/public/users')
      return {
        error: false,
        data: response?.data?.response || [],
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

  async create (values: CreateAccountInputs) {
    try {
      const response = await this.api.post('/public/users', values)
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
