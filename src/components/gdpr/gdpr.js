/**
 * Created by elsa_li on 2020/10/15
 */
// window.$ = require('../../Common/js/jquery-1.11.1')

import $ from 'jquery'
require('../../Common/js/jquery-1.11.1.js')
const l10n = require('../../Common/js/l10n.js')
require('../../Common/js/jquery.scrollbar.min.js')
// require('../../Common/js/angular.1.2.32.min.js')
require('../../js/definition.js')
require('../../js/common.js')
const bridge = require('../../js/bridge.js')
require('../../js/customize.js')
// require('../../Common/Directive/max-min.js')

class gdprCtrl {
    constructor($scope) {
        $scope.i18n = $.extend({}, l10n.wordingJson)
        $scope.platform = bridge.PLATFORM

        $scope.crashOption = true
        $scope.usageOption = false

        $scope.toggleOption = function () {
            $scope.usageOption = !$scope.usageOption
        }

        bridge.native.userEvent({
            event_category: 'User',
            event_action: 'Before_Install'
        })

        $scope.confirmLicense = function () {
            if ($scope.platform == bridge.PLATFORM_TYPE.MAC) {
                var config = {
                    crashOption: $scope.crashOption.toString(),
                    usageOption: $scope.usageOption.toString()
                }

                if ($scope.crashOption) {
                    bridge.native.userEvent({
                        event_category: 'button_click',
                        event_action: 'user.accept.share.crash.data'
                    })
                } else {
                    bridge.native.userEvent({
                        event_category: 'button_click',
                        event_action: 'user.not.accept.share.crash.data'
                    })
                }

                if ($scope.usageOption) {
                    bridge.native.userEvent({
                        event_category: 'button_click',
                        event_action: 'user.accept.help.improve.app'
                    })
                } else {
                    bridge.native.userEvent({
                        event_category: 'button_click',
                        event_action: 'user.not.accept.help.improve.app'
                    })
                }

                bridge.native.userEvent({
                    event_category: 'button_click',
                    event_action: 'user.accept.dcn'
                })

                bridge.native.gdprAcceptShareCrashAndUsage(config)
            }
            window.location.href = window.location.href.replace(
                'GDPRPage',
                'WelcomePage'
            )
        }

        $scope.openOutBrowser = function (str) {
            if (str == 'DCN') {
                bridge.native.openUrl({
                    url: $scope.i18n.GDPRPageDCNURL,
                    action: 'common'
                })
                bridge.native.userEvent({
                    event_category: 'link_open',
                    event_action: 'user.open.data.collection.notice.url'
                })
            } else if (str == 'Policy') {
                bridge.native.openUrl({
                    url: $scope.i18n.GDPRPagePolicyURL,
                    action: 'common'
                })
                bridge.native.userEvent({
                    event_category: 'link_open',
                    event_action: 'user.open.privacy.policy.url'
                })
            }
        }

        $(document)
            .unbind('keydown')
            .bind('keydown', function (e) {
                if ((e.ctrlKey || e.metaKey) && e.keyCode == 67) {
                    var selecter
                    try {
                        selecter = window.getSelection().toString()
                        if (selecter != null && selecter.trim() != '') {
                            bridge.native.pasteboardCopy({ content: selecter })
                        }
                    } catch (err) {
                        selecter = document.selection.createRange()
                        var s = selecter.text
                        if (s != null && s.trim() != '') {
                            bridge.native.pasteboardCopy({ content: selecter })
                        }
                    }
                    // 返回false, 防止重复触发copy事件
                    return false
                }
            })

        $(document).ready(function () {
            $('.scrollbar-dynamic').scrollbar()
        })
    }
}
export default gdprCtrl
