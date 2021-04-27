import AbstractResource from './AbstractResource';

class UserResource extends AbstractResource {
  async index() {
    try {
      const response = await this.api.get('/public/users');
      return {
        error: false,
        data: response?.data?.response || [],
        response,
      };
    } catch (e) {
      return {
        error: true,
        data: {},
        response: e,
      };
    }
  }

  async find(id: string | number) {
    try {
      const response = await this.api.get(`/users/${id}`);
      return {
        error: false,
        data: response?.data?.response || {},
        response,
      };
    } catch (e) {
      return {
        error: true,
        data: {},
        response: e,
      };
    }
  }
}
export default new UserResource();
