import swan from "/onekit/swan"
/* globals App */

App({onekit:{server:"https://支付宝小程序域名/onekit/api/"},

    onLaunch(event) {
        console.log('onLaunch');
    },

    onShow(event) {
        console.log('onShow');
    },

    globalData: {
        userInfo: 'user'
    }
});
