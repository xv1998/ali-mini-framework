import cache from './utils/Cache.js'
import app_config from '../config/config'
import { constant } from './config/constant'
import { request } from './utils/request'
import { showError, ErrorMessage } from './utils/error'

const Raven = require('./third-party/raven')

const config = app_config

// 初始化APP
function initApp(app) {
    console.log('[egg-mini-framework] initApp')
    // 挂载配置到app
    app.config = config
}

// 初始化sentry
function initSentry() {
    switch (true) {
        case config.environment !== constant.production:
            console.warn('[egg-mini-framework] 开发环境不初始化sentry')
            break
        case !config.sentry && config.sentry.dsn:
            console.warn('[egg-mini-framework] 未配置sentry')
            break
        default:
            console.log('[egg-mini-framework] initSentry')
            Raven.config(config.sentry.dsn, config.sentry.options).install()
    }
}

export default { cache, initApp }
export { cache, initApp, request, showError, ErrorMessage }
