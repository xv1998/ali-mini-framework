const oauthHost = 'https://oauth.candycute.cn'
const syllabusHost = 'https://syllabus.candycute.cn'

const api = {
    login: oauthHost + '/oauth/login',  // 汕头大学账号账号密码验证
    authorize: oauthHost + '/oauth/authorize',   // 课程表Oauth授权
    stu_login: syllabusHost + '/user/stu_login',   // 课程表Oauth授权，重定向接口
    mini_pro_login: syllabusHost + '/user/mini_pro_login',  // 小程序登录
    refresh_login_state: syllabusHost + '/user/refresh_login_state',    // 刷新登录态
    user_info: syllabusHost + '/user/info',    // 查询用户信息
}

const errCode = {
    validateLoginState: {
        no_skey: '02300101',
        not_find_session: '02300102',
        invalid_skey: '02300103'
    }
}

export { api, errCode }
