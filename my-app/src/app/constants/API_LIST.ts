const api = `http://127.0.0.1:8000/api`;

export const API_LIST = {
  //auth
  login: `${api}/customer/login?token=true`,
  register: `${api}/customer/register`,
  logout: `${api}/customer/logout?token=true`,

  //product
  getProduct: `${api}/products`,
};
