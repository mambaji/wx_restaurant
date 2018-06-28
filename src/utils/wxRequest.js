import wepy from 'wepy';
import util from './util';
import md5 from './md5';
import tip from './tip'

const API_SECRET_KEY = 'www.mall.cycle.com'
const TIMESTAMP = util.getCurrentTime()
const SIGN = md5.hex_md5((TIMESTAMP + API_SECRET_KEY).toLowerCase())

const wxRequest = async(params = {}, url) => {
    tip.loading();
    let data = params.query || {};
    console.log(data);
    console.log(url);
    let res = await wepy.request({
        url: url,
        method:params.method ||'GET',
        data: data,
        // header: { 'Content-Type': 'application/json' },
        success:function(res){
            console.log("请求成功.....");
            console.log(res);
        },
        fail:function(res){
            console.log("请求失败.....");
            console.log(res);
        }
    });
    tip.loaded();
    return res;
};


module.exports = {
    wxRequest
}
