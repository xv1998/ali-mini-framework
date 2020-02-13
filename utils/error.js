import { wxShowModal } from './wxApi'

let Raven = require('../third-party/raven')

/**
 * 自定义错误信息类
 */
class ErrorMessage {
    constructor(msg, code, options) {
        const error = new Error(msg)

        // 去掉该函数的错误栈
        error.stack = error.stack.replace(/\n.*\n/, '')
        let option = options
        if (typeof code === 'string') {
            error.message += `错误码: ${code}`
        } else {
            option = code
        }
        console.error(error)
        if (!option || !option.needReport) {
            Raven.captureException(msg, {
                level: 'error'
            })
        }
        return error
    }
}

/**
 * 通用错误弹窗
 * @param options
 */
const showError = function (options) {
    let optionObj
    if (typeof options === 'string') {
        optionObj = {
            content: options
        }
    } else {
        optionObj = options
    }
    let _options = Object.assign({
        type:"fail",
        content: '系统繁忙，请稍后再来'
    }, optionObj)
    return wxShowModal(_options)
}

export { showError, ErrorMessage }
export default { showError, ErrorMessage }
