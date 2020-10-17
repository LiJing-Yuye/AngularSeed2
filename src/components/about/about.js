/**
 * Created by elsa_li on 2020/10/15
 */
// window.$ = require('../../Common/js/jquery-1.11.1')

import $ from 'jquery'
require('../../Common/js/jquery-1.11.1.js')
const l10n = require('../../Common/js/l10n.js')
// require('../../Common/js/angular.1.2.32.min.js')
require('../../js/definition.js')
require('../../js/common.js')
const bridge = require('../../js/bridge.js')
require('../../js/customize.js')
// require('../../Common/Directive/max-min.js')

export var scope
class installCtrl {
    constructor($scope) {
        $scope.i18n = $.extend({}, l10n.wordingJson)
        $scope.platform = bridge.PLATFORM
        var versionResult = bridge.native.CMDEXEC(
            bridge.NativeCMD.CMD_GET_VERSION,
            '{}'
        )
        $scope.version = versionResult['version']

        $scope.Close = function () {
            bridge.native.CMDEXEC(bridge.NativeCMD.EVENT_PROGRAM_CLOSE, '{}')
        }

        $scope.openBrowserByUrl = function (url) {
            bridge.native.openUrl({
                url: url,
                action: 'common'
            })
        }

        $scope.openThirdPartyLicense = function () {
            bridge.native.CMDEXEC(
                bridge.NativeCMD.CMD_OPEN_THIRDPARTY_LICENSE,
                '{}'
            )
        }
    }
}
export default installCtrl
