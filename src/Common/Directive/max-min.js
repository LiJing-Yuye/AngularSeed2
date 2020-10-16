/* eslint-disable */
import '../../app.js'
app.directive('maxMinArea', function () {
    return {
        restrict: 'E',
        scope: {
            isblack: '=isblack'
        },
        replace: true,
        controller: function ($scope, $element, $attrs) {
            $scope.init = function () {
                $scope.isResultPage = false
                if (window.location.href.indexOf('ResultPage') != -1) {
                    $scope.isResultPage = true
                }
            }

            $scope.init()

            $scope._close = function () {
                if ($scope.isResultPage) {
                    native.CMDEXEC(NativeCMD.EVENT_PROGRAM_CLOSE, '{}')
                    native.userEvent({
                        event_category: 'flow',
                        event_action: 'Program_Close'
                    })
                } else {
                    native.CMDEXEC(NativeCMD.EVENT_PROGRAM_EXIT, '{}')
                    native.userEvent({
                        event_category: 'flow',
                        event_action: 'Program_Exit'
                    })
                }
            }

            $scope._minimize = function () {
                native.CMDEXEC(NativeCMD.EVENT_PROGRAM_MINIMIZE, '{}')
                native.userEvent({
                    event_category: 'flow',
                    event_action: 'Program_Minimize'
                })
            }
        },
        //templateUrl: "./Common/Template/max-min.html",
        template:
            '<div class="max-min" ng-class=\'{"max-min-b": isblack}\'>    <style>        .max-min {margin-right: 16px;            box-sizing: border-box;            height: 32px;            width: 80px;            display: flex;            flex-direction: row;            align-items: center;            justify-content: space-between;            box-shadow: inset 1px 0 0 0 rgba(0,0,0,0.10);             padding-left: 8px;}        .max-min-b {            box-shadow: inset 1px 0 0 0 #F0F0F0;         }        .max-min .pointer {            cursor: pointer;        }        .min-img {           height: 32px;            width: 32px;            background-image: url("./Common/img/icon_minimize_normal@2x.png");            background-size: contain;        }        .min-img-b {            background-image: url("./Common/img/ico_system_minimize_b.png");        }        .close-img {           height: 32px;            width: 32px;            background-image: url("./Common/img/icon_close_normal@2x.png");            background-size: contain;        }        .close-img-b {            background-image: url("./Common/img/ico_system_close_b.png");        }    </style>    <div ng-click="_minimize()" class="min-img pointer" ng-class=\'{"min-img-b": isblack}\'></div>    <div ng-click="_close()" class="close-img pointer" ng-class=\'{"close-img-b": isblack}\'></div></div>'
    }
})
