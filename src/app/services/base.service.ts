import resolveUrl_ from '../utils/path';

export class BaseService {

  private CONTEXT: String = 'api';

  private readonly baseUrl: String = '';

  constructor() {
    this.baseUrl = `/${this.CONTEXT}`;
  }

  public resolveUrl = (appendUrl: String) => {
    return resolveUrl_([this.baseUrl, appendUrl]);
  }

}
