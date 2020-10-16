/* eslint-disable */
const l10n = require('../Common/js/l10n.js')
const bridge = require('./bridge.js')
;(function () {
    const locale = l10n.getLang()
    if (locale == 'JA-JP') {
        l10n.wordingJson['imageAppLogo'] = 'img_lockup_jp@2x.png'
        l10n.wordingJson['imagePromoteDiamond'] =
            'https://drs2-client-conf.s3-us-west-1.amazonaws.com/drs-client-conf/DiamondPromoteImage_JP.png'
        l10n.wordingJson['homeBanner'] = 'main_banner_jp.png'
        l10n.wordingJson['scanBanner'] = 'scan_banner_en.png'
        l10n.wordingJson['maxDevices'] = 50
    } else {
        l10n.wordingJson['imageAppLogo'] = 'img_lockup@2x.png'
        l10n.wordingJson['imagePromoteDiamond'] =
            'https://drs2-client-conf.s3-us-west-1.amazonaws.com/drs-client-conf/DiamondPromoteImage.png'
        l10n.wordingJson['scanBanner'] = 'scan_banner_jp.png'
        l10n.wordingJson['maxDevices'] = 100
    }

    l10n.wordingJson.DRSSupportER =
        'http://gr.trendmicro.com/GREntry/NonPayment?Target=support_drs&OS=&SP=&PID=&FunID=#1&VID=&Locale=' +
        locale
    l10n.wordingJson.ISCIKBLink =
        'http://gr.trendmicro.com/GREntry/NonPayment?Target=iKB_ISC&OS=&SP=&PID=&FunID=#1&VID=&Locale=' +
        locale

    let includeProductNameKey = [
        'WholeProductName',
        'GDPRPageContent1',
        'GDPRPageContent2',
        'GDPRPageContent4',
        'installPageMessage',
        'unInstallPageTitle',
        'unInstallPageMessage',
        'unInstallPageTips'
    ]
    for (var index in includeProductNameKey) {
        var key = includeProductNameKey[index]
        l10n.wordingJson[key] = l10n.wordingJson[key].replace(
            /#ProductName#/g,
            l10n.wordingJson.ProductName
        )
    }

    var changeWordingMap = {
        Windows: {
            'EN-US': {
                GDPRPageDCNURL: l10n.wordingJson.DRSSupportER.replace(
                    '#1',
                    'GDPR_Win'
                ),
                GDPRPagePolicyURL:
                    'https://www.trendmicro.com/en_us/about/legal/privacy.html',
                LicenseAgreementUrl:
                    'https://www.trendmicro.com/en_us/about/legal.html',
                GDPRPageContent3: l10n.wordingJson['GDPRPageContent3_win']
            },
            'JA-JP': {
                GDPRPageDCNURL: l10n.wordingJson.DRSSupportER.replace(
                    '#1',
                    'GDPR_Win'
                ),
                GDPRPagePolicyURL:
                    'https://www.trendmicro.com/ja_jp/about/legal/privacy-policy.html',
                LicenseAgreementUrl:
                    'https://www.trendmicro.com/ja_jp/about/legal.html',
                GDPRPageContent3: l10n.wordingJson['GDPRPageContent3_win'],
                GDPRPageContent10: ''
            }
        },

        Mac: {
            'EN-US': {
                GDPRPageDCNURL: l10n.wordingJson.DRSSupportER.replace(
                    '#1',
                    'GDPR_Mac'
                ),
                GDPRPagePolicyURL:
                    'https://www.trendmicro.com/en_us/about/legal/privacy-policy-product.html',
                LicenseAgreementUrl:
                    'http://akagrbeta.trendmicro.com/GREntry/NonPayment?Target=EULA&OS=&SP=&PID=CV10&FunID=LicenseLink&VID=&Locale=EN-US'
            }
        }
    }
    console.log(bridge.PLATFORM)
    var changeWording = changeWordingMap[bridge.PLATFORM][locale]
    for (key in changeWording) {
        l10n.wordingJson[key] = changeWording[key]
    }
})()

var WebSiteUrls = {
    'EN-AU':
        'http://shop.trendmicro.com.au/homenetworksecurity-social/?utm_source=housecall_win',
    'EN-NZ':
        'http://shop.trendmicro.co.nz/homenetworksecurity-social/?utm_source=housecall_win',
    'EN-US':
        'https://www.trendmicro.com/en_us/forHome/products/homenetworksecurity.html?utm_source=housecall_win&utm_content=01',
    'EN-SG':
        'https://shop.sg.trendmicro-apac.com/homenetworksecurity/Default.asp?utm_source=housecall_win'
}

var faqUrls = {
    'EN-US':
        'https://www.trendmicro.com/en_us/forHome/products/housecall/home-networks.html#faqs-tm-anchor',
    'JA-JP': 'https://virusbuster.jp/vbhn/drs/details/?AAID=ui_drs_main'
}

var feedbackUrl =
    'https://ics-new.trendmicro-cloud.com/survey/HouseCallforHomeNetworks​-EN?os=value1&build=value2&language=value3&Country=value4'

var getDiamondPromotion = function (param) {
    var promote = native.CMDEXEC(NativeCMD.CMD_GET_DIAMOND_PROMOTE_URL, '{}')
    var promoteUrl = promote['promote_url']
    if (param) {
        promoteUrl += '?' + param
    }
    return promoteUrl
}

var getFAQLink = function () {
    var locale = getLang()
    if (faqUrls.hasOwnProperty(locale)) {
        return faqUrls[locale]
    } else {
        return faqUrls['EN-US']
    }
}

var getFeedbackLink = function () {
    var versionResult = native.CMDEXEC(NativeCMD.CMD_GET_VERSION, '{}')
    version = versionResult['version']

    var local = native.CMDEXEC(NativeCMD.CMD_GET_USER_LOCALE, '{}')
    local = local['user_locale'].toUpperCase()

    return feedbackUrl
        .replace('value1', 'Windows')
        .replace('value2', version)
        .replace('value3', getLang())
        .replace('value4', local)
}
