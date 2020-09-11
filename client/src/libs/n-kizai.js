import axios from 'axios';

export default class {
  baseUri;

  constructor() {
    console.log(process.env.REACT_APP_API_BASE_URI);
    this.baseUri = process.env.REACT_APP_API_BASE_URI;
  }

  _get(endpoint) {
    console.log(this.baseUri + endpoint);
    return axios.get(this.baseUri + endpoint);
  }

  _post(endpoint, data) {
    return axios.post(this.baseUri + endpoint, data);
  }

  helloWorld() {
    return this._get('/');
  }

  addProducts(product) {
    return {
      id: '5f41ff42f12d5a5ec0f783a7',
      name: 'U2C-BF30BK',
      maker: 'エレコム',
      genre: 'pa',
      devices: [
        { code: 'NP-0014', serialNumber: '', status: 'ready', remarks: '' },
      ],
    };
  }

  getProductById(id) {
    return {
      id: '5f464ee25410e3231058e73a',
      name: 'T-T02-3650WH/RS',
      maker: 'エレコム',
      genre: 'oa',
      devices: [
        { code: 'NP-0044', serialNumber: '', status: 'ready', remarks: '' },
        { code: 'NP-0048', serialNumber: '', status: 'ready', remarks: '' },
      ],
    };
  }

  addDeviceByProductId(productId, device) {
    return { code: 'NP-0014', serialNumber: '', status: 'ready', remarks: '' };
  }

  getEvents() {
    return [
      { name: 'マイフェス2020', slug: 'myfes2020' },
      { name: 'マイフェス2021', slug: 'myfes2021' },
      { name: 'マイフェス2022', slug: 'myfes2022' },
    ];
  }
}
