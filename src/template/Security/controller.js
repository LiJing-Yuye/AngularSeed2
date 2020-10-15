app.controller("SecurityCtrl", function ($scope, $location, $route) {
    $scope.$route = $route;

    $scope.PotentialRiskTipPriorityDefine = PotentialRiskTipPriorityDefine;
    $scope.isHoverRouter = false;
    $scope.isHoverDiamond = false;
    $scope.curHoverDevice; 
    $scope.backgroundImage;
 
    $scope.$on('ngRepeatFinished', function(e){
        jQuery('.scrollbar-dynamic').scrollbar();

        $(".se-device-border").hover(
            function(event) {
                var ip = event.currentTarget.id;
                $scope.curHoverDevice = $scope.$parent.deviceListByKey[ip];
                document.getElementById(ip + "name").style.display = 'none';
                $scope.$apply();
            },
    
            function(event) {
                var ip = event.currentTarget.id;
                $scope.curHoverDevice = null;
                document.getElementById(ip + "name").style.display = 'flex';
                $scope.$apply();
            }
        )
    });

    $(".se-router-img").hover( 
        function() {
            $scope.isHoverRouter = true;
            $scope.$apply();
        },

        function() {
            $scope.isHoverRouter = false;
            $scope.$apply();
        }
    );

    $(".se-diamond-box").hover( 
        function() {
            $scope.isHoverDiamond = true;
            $("body").addClass("diamond-hover");
            $scope.backgroundImage = $(".se-security-tab")[0].style.backgroundImage;
            $(".se-security-tab")[0].style.backgroundImage = "url(template/Security/img/animation_diamond_once.gif?"+Math.random() +")"
            $scope.$apply();
        },

        function() {
            $scope.isHoverDiamond = false;
            $("body").removeClass("diamond-hover");
            $(".se-security-tab")[0].style.backgroundImage = $scope.backgroundImage;
            $scope.$apply();
        }
    );

    $scope.viewDetail = function(mac_address) {
        $scope.clickTab(1, mac_address);
    }

    $scope.checkNewInfo = function(item) {
        return item.newInfo
    }

    $scope.ShowUnkonwDevice = function() {
        $("#UnkonwDeviceModal").show();
    }
})