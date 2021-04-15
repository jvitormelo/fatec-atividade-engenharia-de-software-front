import { AxiosInstance } from 'axios';

import api from '../services/api';

export default class AbstractResource {
  public api: AxiosInstance;

  constructor() {
    this.api = api;
  }
}
