
app.controller("DeviceListCtrl", function ($scope, $rootScope, $route, $routeParams) {
    $scope.$route = $route;

    $('.carousel').carousel('pause');
    $scope.init = function() {
        if (typeof ($routeParams.param) === 'number') {
            $scope.ClickDevice($routeParams.param);
        } else if (typeof ($routeParams.param) === 'string') {
            for (var index in $scope.deviceList) {
                if ($scope.deviceList[index].deviceIP  === $routeParams.param || 
                    $scope.deviceList[index].deviceMac === $routeParams.param) {
                    $scope.ClickDevice(index);
                    break
                }
            }
        }

        if ($scope.$parent.curDevice == null || $scope.$parent.curDevice.selected == false) {
            $scope.ClickDevice(0);
        } else {
            smoothToElement($scope.curDevice.deviceMac);
        }

        result = native.CMDEXEC(NativeCMD.CMD_GET_SHOW_TUTORIAL, '{}');
        if (result["show"]) {
            $('#TutorialModal').show();
        }
    }

    $scope.$on('ngRepeatFinished', function (ngRepeatFinishedEvent) {
        jQuery('.scrollbar-dynamic').scrollbar();
        
        if ($scope.curDevice) {
            setTimeout(function() {
                smoothToElement($scope.curDevice.deviceMac);
            }, 300)
        } else {
            $scope.ClickDevice(0);
        }
    })

    $scope.jqueryScrollbarOptions = {
        "onScroll":function(y, x){
            //var curHeight = $(".vulnerability-result")[0].scrollTop;
            var curHeight = parseInt(y.scroll);
            var totalHeight = 0;
            var boxHeight = 388;
            var curView = {};

            if (!$scope.curDevice) {
                return;
            }
            
            for (var Type in $scope.curDevice.vuln) {
                for (var index in $scope.curDevice.vuln[Type]) { 
                    var element = $("[id='"+ $scope.curDevice.vuln[Type][index].Title +"']")[0];
                    if (!element) {
                        return;
                    }

                    var curElementHeight = parseInt(element.scrollHeight);
                    totalHeight += curElementHeight;

                    if (totalHeight > curHeight) {
                        var curCalHeight = 0;
                        var curCalMaxHeight = 0;
                        for (var height in curView) {
                            var height = parseInt(height);
                            curHeight += height;
                            curCalHeight += height;

                            if (height > curCalMaxHeight) {
                                curCalMaxHeight = height;
                            }

                            if (curCalHeight >= boxHeight) {
                                $scope.curDevice.curShowVuln = $scope.curDevice.vuln[curView[curCalMaxHeight].Type][curView[curCalMaxHeight].index];
                                $scope.$apply();
                                return;
                            }
                        }
                        
                        if (totalHeight - curHeight > boxHeight - curCalHeight) {
                            curView[boxHeight - curCalHeight] = {
                                "Type": Type,
                                "index": index
                            }    
                        }
                        else {
                            curView[totalHeight - curHeight] = {
                                "Type": Type,
                                "index": index
                            } 
                        }
                                    
                    }    
                }
            }

            var curCalMaxHeight = 0;
            for (var height in curView) {
                var height = parseInt(height);
                if (height > curCalMaxHeight) {
                    curCalMaxHeight = height;
                }
            }
            
            if (curCalMaxHeight !== 0) {
                var curViewType = curView[curCalMaxHeight].Type;
                var curViewIndex = curView[curCalMaxHeight].index;
                $scope.curDevice.curShowVuln = $scope.curDevice.vuln[curViewType][curViewIndex];
            }  
            $scope.$apply();
        }
    };

    $scope.ClickDevice = function(index) {
        jQuery('.scrollbar-vuln').scrollTop(0);
        if ($scope.deviceList.length > 0) {
            $scope.$parent.curDevice && ($scope.$parent.curDevice.selected = false);
            $scope.$parent.curDevice = $scope.deviceList[index];
            $scope.$parent.curDevice.selected = true;
            $scope.$parent.curDevice.newInfo = false;
            $scope.$parent.curDevice.setCurShowVuln();
        }
    }

    $scope.$on('ClickDevice', function (event, data) {
        $scope.ClickDevice(data);
    })

    $scope.ClickVuln = function (vuln) {
        if ($scope.$parent.curDevice.curShowVuln != vuln) {
            $scope.$parent.curDevice.curShowVuln = vuln;
            smoothToElement($scope.$parent.curDevice.curShowVuln.Title);
        } 
    }

    $scope.ClickWording = function (str) {
        var x = document.getElementById("snackbar");
        if (x.className != "show") {
            if (str == $scope.i18n.ResultPageIPAddress) {
                native.pasteboardCopy({"content": $scope.$parent.curDevice.deviceIP});
            }
            else if (str == $scope.i18n.ResultPageMacAddress) {
                native.pasteboardCopy({"content": $scope.$parent.curDevice.deviceMac});
            }
            else if (str == $scope.i18n.ResultPageBrand) {
                native.pasteboardCopy({"content": $scope.$parent.curDevice.deviceBrand});
            }
            else if (str == $scope.i18n.ResultPageModel) {
                native.pasteboardCopy({"content": $scope.$parent.curDevice.deviceModel});
            }
            
            x.className = "show";
            x.innerHTML = $scope.i18n.ResultPageCopied.replace('#1', str);
            setTimeout(function(){ x.className = x.className.replace("show", ""); }, 2000);
        }
        
    }

    // Forget Function
    $scope.ForgetDevice = function () {
        $("#ForgetModal").modal("show");   
    }

    $scope.ForgetDeviceOK = function () {

        native.CMDEXEC(NativeCMD.CMD_REMOVE_DEVICE, JSON.stringify({
            "device_mac": $scope.$parent.curDevice.deviceMac,
            "device_ip": $scope.$parent.curDevice.deviceIP,
            "gateway_mac": $scope.curShowNetwork.gatewayMac
        }));

        native.userEvent({
            "event_category": "button_click",
            "event_action": "user.forget.device"
        })

        $("#ForgetModal").modal("hide");
        var offlineDevice = $scope.deviceListByKey[$scope.$parent.curDevice.deviceIP];
        delete $scope.deviceListByKey[$scope.$parent.curDevice.deviceIP];
        
        var index = $scope.deviceList.indexOf(offlineDevice);
        $scope.deviceList.splice(index, 1);
        $scope.$parent.deviceCount = $scope.deviceList.length;
        
        if ($scope.deviceCount == 0) {
            $scope.$parent.curDevice = null;
        }
        
        if (index < $scope.deviceCount - 1) {
            $scope.ClickDevice(index);
        }
        else {
            $scope.ClickDevice($scope.deviceCount - 1);
        }

        $scope.updateFamilySecurity();
    }

    // Edit Function
    $scope.editedInfo = {
        "category_class": "",
        "host_mac": "",
        "device_ip": "",
        "friendly_name"	: "#Device_Name#",
        "brand" : "Brand",
        "model" : "Model"
    }

    $scope.editDeviceInfo = function() {
        native.setDraggable({"can_drag":false});
        $scope.editedInfo = {
            "category_class": $scope.$parent.curDevice.deviceClass,
            "host_mac": $scope.$parent.curDevice.deviceMac,
            "friendly_name"	: $scope.$parent.curDevice.deviceFriendlyName,
            "device_ip": $scope.$parent.curDevice.deviceIP,
            "device_model": $scope.$parent.curDevice.deviceModel,
            "device_brand": $scope.$parent.curDevice.deviceBrand,
            "gateway_mac": $scope.curShowNetwork.gatewayMac,
        }

        $('#cate-icon')[0].src = $scope.$parent.curDevice.deviceIcon;
        $('#EditModal').modal('show');
    }

    $scope.SelectIcon = function(category) {
        $scope.editedInfo['category_class'] = parseInt(category),        
        $('#cate-icon')[0].src = "./Common/img/category_icon_v2/" +  CategoryClassIconMappingUI_V2[category];;
    }

    $scope.EditSave = function () {
        $("#EditModal").modal("hide");   

        native.setDraggable({"can_drag":true});
        native.userEditDeviceInfor($scope.editedInfo);
        if ($scope.deviceListByKey.hasOwnProperty($scope.editedInfo.device_ip)) {
            $scope.deviceListByKey[$scope.editedInfo.device_ip].deviceFriendlyName = $scope.editedInfo.friendly_name;
            $scope.deviceListByKey[$scope.editedInfo.device_ip].deviceClass = $scope.editedInfo.category_class;
            $scope.deviceListByKey[$scope.editedInfo.device_ip].deviceBrand = $scope.editedInfo.device_brand;
            $scope.deviceListByKey[$scope.editedInfo.device_ip].deviceModel = $scope.editedInfo.device_model;
            $scope.deviceListByKey[$scope.editedInfo.device_ip].setDeviceIcon();
        }

        native.userEvent({
            "event_category": "button_click",
            "event_action": "user.edit.device"
        })
        
    }

    $scope.EditCancel = function () {
        native.setDraggable({"can_drag":true});
        $("#EditModal").modal("hide");  
    }

    $scope.closeTip = function() {
        $("#scan-over-tip").hide();
    }

    $scope.viewResult = function() {
        $("#scan-over-tip").hide();
        $scope.clickTab(0);
    }

    $("#scroll-text").hover(
        function() {
            if (
                $("#scroll-text")[0].parentNode.offsetWidth <
                $("#scroll-text")[0].offsetWidth
            ) {
                $("#scroll-text")[0].parentNode.classList.add(
                    "friendly-name-text"
                );
            }
        },

        function() {
            $("#scroll-text")[0].parentNode.classList.remove(
                "friendly-name-text"
            );
        }
    );

    $scope.init();

})