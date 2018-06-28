import {
  wxRequest
} from '@/utils/wxRequest';

let env = "-test" //-dev 或者 -test
// const apiMall = 'http://localhost:8080/'
// 
const apiMall = 'https://sujiefs.com/';
/**
 * manbasji 自定义接口
 */
const hostUrl = 'https://www.passingjoy.com';
/**
 * api工厂host
 */

const apiHost = 'https://api.it120.cc/manbasji/';
const apisuHost = 'https://api.it120.cc/suya/';

//微信的code换取sessionKey和openId
// const sendWxCode = (params) => wxRequest(params,hostUrl+'/wechat/hxcy/auth/wxlogin');
const sendWxCode = (params) => wxRequest(params,apiHost+'/user/wxapp/login');

//检验微信登录token
// const checkToken = (params) => wxRequest(params,hostUrl+'/wechat/hxcy/auth/token/');
const checkToken = (params) => wxRequest(params,apiHost + '/user/check-token');

//查询我的订单
const getMyOrderList = (params) => wxRequest(params, apiMall + '/api/mall/goodsOrder/getMyOrderList');

//获取商家信息
const getShopInfo = (params) => wxRequest(params,apiHost + '/shop/subshop/list');

//查询用户所有收货地址
const getAddressAll = (params) => wxRequest(params,apiHost + '/user/shipping-address/list');

//添加用户收货地址
const addAddress = (params) => wxRequest(params,apiHost+'/user/shipping-address/add');

//修改用户收货地址
const updateAddress = (params) => wxRequest(params,apiHost+'/user/shipping-address/update');

//删除用户收货地址
const deleteAddress = (params) => wxRequest(params,apiHost+'/user/shipping-address/delete');

//用户收货地址根据id查询
const reachAddressById = (params) => wxRequest(params, apiHost + '/user/shipping-address/detail');

export default {
  sendWxCode,
  checkToken,
  getMyOrderList,
  getShopInfo,
  getAddressAll,
  addAddress,
  updateAddress,
  deleteAddress,
  reachAddressById
}
