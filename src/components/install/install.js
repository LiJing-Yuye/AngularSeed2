/**
 * Created by elsa_li on 2020/10/15
 */

class installCtrl {
    constructor() {}
}
export default installCtrl

// var scope;

// app.controller("InstallPageCtrl", function ($scope, $rootScope) {
//     scope = $scope;
//     rootScope = $rootScope;
//     $scope.i18n = $.extend({}, wordingJson);
//     $scope.platform = PLATFORM;
//     $scope.isinstallFinish = false;
//     $scope.installProcess = 0;
//     native.Install();
//     native.userEvent({
//         "event_category": "User",
//         "event_action": "Install_Open"
//     })

//     $scope.process = setInterval(function() {
//         $scope.installProcess += 5;
//         if ($scope.installProcess >= 95) {
//             clearInterval($scope.process);
//         }
//         $scope.$apply();
//     }, 500)

//     $scope.StartNow = function() {
//         native.CMDEXEC(NativeCMD.EVENT_PROGRAM_RELAUNCH, '{}');
//     }

//     $scope.$on('installFinish', function(event, data) {
//         $scope.installProcess = 100;
//         clearInterval($scope.process);
//         $scope.isinstallFinish = true;
//         $scope.$apply();
//     })
// })
