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
        scope = $scope
        $scope.i18n = $.extend({}, l10n.wordingJson)
        $scope.platform = bridge.PLATFORM
        $scope.isinstallFinish = false
        $scope.installProcess = 0
        bridge.native.Install()
        bridge.native.userEvent({
            event_category: 'User',
            event_action: 'Install_Open'
        })

        $scope.process = setInterval(function () {
            $scope.installProcess += 5
            if ($scope.installProcess >= 95) {
                clearInterval($scope.process)
            }
            $scope.$apply()
        }, 500)

        $scope.StartNow = function () {
            bridge.native.CMDEXEC(bridge.NativeCMD.EVENT_PROGRAM_RELAUNCH, '{}')
        }

        $scope.$on('installFinish', function () {
            $scope.installProcess = 100
            clearInterval($scope.process)
            $scope.isinstallFinish = true
            $scope.$apply()
        })
    }
}
export default installCtrl
