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
const apiTHost= 'https://www.passingjoy.com/test/wechat';

//管理员登录接口
const adminLogin = (params) => wxRequest(params,apiTHost+'/auth/login/');

//获取上传图片uptoken
const getUptoken = (params) => wxRequest(params,apiTHost+'/auth/uptoken/');

//删除七牛图片
const delImage = (params) => wxRequest(params,apiTHost+'/auth/delete/');

//微信的code换取sessionKey和openId
const sendWxCode = (params) => wxRequest(params,apiTHost+'/auth/wxlogin/');
// const sendWxCode = (params) => wxRequest(params,apiHost+'/user/wxapp/login');

//检验微信登录token
const checkToken = (params) => wxRequest(params,apiTHost+'/auth/token/');
// const checkToken = (params) => wxRequest(params,apiHost + '/user/check-token');

//查询我的订单
const getMyOrderList = (params) => wxRequest(params, apiMall + '/api/mall/goodsOrder/getMyOrderList/');

//获取商家信息
// const getShopInfo = (params) => wxRequest(params,apiHost + '/shop/subshop/list');
const getShopInfo = (params) => wxRequest(params,apiTHost + '/auth/info/');

//查询用户所有收货地址
// const getAddressAll = (params) => wxRequest(params,apiHost + '/user/shipping-address/list');
const getAddressAll = (params) => wxRequest(params,apiTHost + '/address/list/');

//添加用户收货地址
// const addAddress = (params) => wxRequest(params,apiHost+'/user/shipping-address/add');
const addAddress = (params) => wxRequest(params,apiTHost+'/address/add/');

//修改用户收货地址
const updateAddress = (params) => wxRequest(params,apiTHost+'/address/revise/');

//提交预约表单信息
const submitRecord = (params) => wxRequest(params,apiTHost+'/record/submit/');

//获取预约记录
const getRecord = (params) => wxRequest(params,apiTHost+'/record/get/');

//取消预约记录
const cancelRecord = (params) =>wxRequest(params,apiTHost+'/record/cancel/');

//删除用户收货地址
// const deleteAddress = (params) => wxRequest(params,apiHost+'/user/shipping-address/delete');
const deleteAddress = (params) => wxRequest(params,apiTHost+'/address/del/');

//用户收货地址根据id查询
const reachAddressById = (params) => wxRequest(params, apiHost + '/user/shipping-address/detail/');

//获取分类信息
// const getCategory = (params) => wxRequest(params,apiHost +'/shop/goods/category/all');
const getCategory = (params) => wxRequest(params,apiTHost +'/category/list/');

//获取分类下面的商品信息
const getFoodMsgList = (params) => wxRequest(params,apiTHost + '/goods/list/');

//获取商品属性
const getAttrMsgList = (params) => wxRequest(params,apiTHost + '/attribute/list/');

//获取规格价格
const getAttrPrice = (params) => wxRequest(params,apiHost+'/shop/goods/price/');

//获取商户排队人数
const getListPeopleNum = (params) => wxRequest(params,apiTHost+'/queue/amount/');
//开始排队
const startList = (params) => wxRequest(params,apiTHost+'/queue/begin/');
//取消排队
const cancelList = (params) => wxRequest(params,apiTHost+'/queue/cancel/');

//提交订单
const submitOrder = (params) => wxRequest(params,apiTHost+'/order/submit/');

//订单列表
const getOrderList = (params) => wxRequest(params,apiTHost+'/order/list/');

//订单详情
const getOrderDetail = (params) => wxRequest(params,apiTHost+'/order/detail/');

//订单状态修改
const updateOrderStatus = (params) => wxRequest(params,apiTHost+'/order/status/');

//添加商品
const addGoods = (params) => wxRequest(params,apiTHost+'/goods/add/');

//添加属性
const addGoodsAttribute = (params) =>wxRequest(params,apiTHost+'/attribute/add/');

//商品信息修改
const updateGoods = (params) =>wxRequest(params,apiTHost+'/goods/revise/');

//商品删除
const delGoods = (params) =>wxRequest(params,apiTHost+'/goods/del/');

//商品状态修改
const updateGoodsStatus = (params) =>wxRequest(params,apiTHost+'/goods/status/');

//商品属性修改
const updateGoodsAttribute = (params) =>wxRequest(params,apiTHost+'/attribute/revise/');

//商品属性删除
const delGoodsAttribute = (params) =>wxRequest(params,apiTHost+'/attribute/del/');

//获取后台商品信息
const getShopGoods = (params) => wxRequest(params,apiTHost+'/goods/list/');



export default {
  getUptoken,
  sendWxCode,
  checkToken,
  getMyOrderList,
  getShopInfo,
  getAddressAll,
  addAddress,
  updateAddress,
  deleteAddress,
  reachAddressById,
  getCategory,
  getFoodMsgList,
  getAttrMsgList,
  getAttrPrice,
  getListPeopleNum,
  startList,
  cancelList,
  submitRecord,
  getRecord,
  submitOrder,
  getOrderList,
  getOrderDetail,
  updateOrderStatus,
  addGoods,
  addGoodsAttribute,
  updateGoods,
  delGoods,
  updateGoodsStatus,
  updateGoodsAttribute,
  delGoodsAttribute,
  getShopGoods,
  delImage,
  adminLogin,
  cancelRecord
}
