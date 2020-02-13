// 全局常量
const constant = {
    production: 'production',
    development: 'development',
}

// 存放Cache key 的map
const cacheKeyMap = {
    loginState: Symbol('login_key')
}

// wx.setStorageSync('Symbol(login_key)', {
//     skey: '0122edd7-41fd-4eca-aba2-e0b10a7266d3',
//     skeyExpiresAt: '2019-05-11 13:28:19',
//     refresh_key: '07f94523-d473-4d4f-b3c1-c2bc5d3914f1',
//     refreshKeyExpiresAt: '2019-06-07 13:28:19'
// })


export { constant, cacheKeyMap }
