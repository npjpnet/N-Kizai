export default class {
  addProducts(product) {
    return { id: '0123456789ABCDEF' };
  }

  addDeviceByProductId(productId, device) {
    return { code: 'NW-0334' };
  }

  getEvents() {
    return [
      { name: 'マイフェス2020', slug: 'myfes2020' },
      { name: 'マイフェス2021', slug: 'myfes2021' },
      { name: 'マイフェス2022', slug: 'myfes2022' },
    ];
  }
}
