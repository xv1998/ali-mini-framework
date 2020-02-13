/**
 * @author 小糖
 * @date 2019/1/31
 * @Description:
 */

/**
 * 微信接口Promise化
 * @param {Function} fn
 */
const wxPromisify = function (fn) {
    return function (obj = {}) {
        return new Promise((resolve, reject) => {
            obj.success = function (res) {
                // 成功
                resolve(res, obj)
            }
            obj.fail = function (res) {
                // 失败
                reject(res)
            }
            fn(obj)
        })
    }
}

const aliGetUserInfo = wxPromisify(my.getOpenUserInfo)
const wxRequest = wxPromisify(my.request)
const wxShowModal = wxPromisify(my.showToast)

export { wxPromisify, aliGetUserInfo, wxRequest, wxShowModal }
