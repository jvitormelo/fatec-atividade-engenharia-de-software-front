import api from '../services/api'

import { AxiosInstance } from 'axios'

export default class AbstractResource {
  public api: AxiosInstance;
  constructor () {
    this.api = api
  }
}
