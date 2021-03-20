import ajax from './ajax'
const BASE_URL = '/api'
// 1.获取经纬度
export const reqAddress = (geohash) => ajax(`${BASE_URL}/position/${geohash}`)
// 2.获取食物分类列表
export const reqFoodCategorys = () => ajax(BASE_URL + '/index_category')
// 3、根据经纬度获取商铺列表
export const reqShops = (longitude, latitude) => ajax(BASE_URL + '/shops', {longitude, latitude})
// 4、根据经纬度和关键字搜索商铺列表
export const reqShopsByGeohashAndKeyword = (geohash, keyword) => ajax(BASE_URL + '/search_shops', {geohash, keyword})
// 5、获取一次性验证码
export const reqCaptcha = () => ajax('/captcha')
// 6、用户名密码登陆
export const reqLogin = ({name, pwd, captcha}) => ajax(BASE_URL + '/login_pwd', {name, pwd, captcha}, 'POST')
// 7、发送短信验证码
export const reqTextCaptcha = (phone) => ajax(BASE_URL + '/sendcode', {phone})
// 8、手机号验证码登陆
export const reqPhoneLogin = (phone, code) => ajax(BASE_URL + '/login_sms', {phone, code}, 'POST')
// 9、根据会话获取用户信息
export const reqUserInfo = () => ajax(BASE_URL + '/userinfo')
// 10、用户登出
export const reqLogOut = () => ajax(BASE_URL + '/logout')
/**
 * 获取商家信息
 */
export const reqShopInfo = () => ajax('/info')

/**
 * 获取商家评价数组
 */
export const reqShopRatings = () => ajax('/ratings')

/**
 * 获取商家商品数组
 */
export const reqShopGoods = () => ajax('/goods')
