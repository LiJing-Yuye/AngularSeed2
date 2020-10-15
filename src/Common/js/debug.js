
/* eslint-disable */
var device_state = 0;
var device_count = 3;

var external = {
    gdprAcceptShareCrashAndUsage: function (str) {
        console.log("[store GDPR config]: " + str);
    },

    getAllSSID: function () {
        return JSON.stringify({
            "00:00:00:00:00:00": {
                network_name: "AP2000宝宝",
                has_success_scaned: true,
                is_current_network: false,
            },
            "00:00:00:00:00:01": {
                network_name: "BYODDKLSJFS",
                has_success_scaned: true,
                is_current_network: false,
            },
            "04:D4:C4:3E:07:08": {
                network_name: "Baobao",
                has_success_scaned: true,
                is_current_network: true,
            },
        });
    },

    scanNowAction: function () {
        console.log("[scanNowAction]");
        var inter = setInterval(function () {
        }, 1000);

        setTimeout(function () {
            typeof deviceFindFinished != "undefined" && deviceFindFinished();
        }, 5000);

        setTimeout(function () {
            scanFinished();
        }, 10000);

        setTimeout(function () {
            clearInterval(inter);
        }, 15000);
    },

    GetUserLocale: function () {
        return "EN-US";
    },

    getDeviceHistory: function () {
        deviceList = []
        var tmpList = {
            "04:D4:C4:3E:07:08": {
                device_role: 2,
                device_state: 2,
                device_static_info: {
                    brand_confidence: "A",
                    cache_type: "",
                    category_class_id: 256,
                    category_confidence: "A",
                    category_id: 256,
                    client_mac: "",
                    dev_brand: "Asus",
                    dev_ipv4: "192.168.50.1",
                    dev_ipv6: "",
                    dev_mac: "04:D4:C4:3E:07:08",
                    dev_model: "",
                    fb_dev_brand: "Asus",
                    fb_dev_categ: 0,
                    fb_dev_model: "RT-AC86U",
                    fb_friendly_name: "Asus Router",
                    friendly_name: "",
                    friendly_name_rule: 0,
                    hostname: "router.asus.com",
                    hostname_confidence: "A",
                    last_update_time_for_nmap: 1569739269,
                    model_confidence: "Z",
                    model_id: "",
                    static_scan_done: 1,
                },
                device_vunl_info: {
                    vul_scan_done: 1,
                    vunl_default_pwd: {
                        is_default_pwd: 0,
                        last_update_time_for_nmap: 0,
                    },
                    vunl_default_ssid: {
                        is_default_ssid: 1,
                        last_update_time_for_nmap: 0,
                    },
                    vunl_public_access: {
                        internal_port: 0,
                        internal_port_list: [],
                        last_update_time_for_nmap: 1569739823,
                        outer_port: 2,
                        outer_port_list: [],
                    },
                    vunl_smb_security: {
                        is_weak_smb: 0,
                        last_update_time_for_nmap: 0,
                    },
                    vunl_wifi_security: {
                        is_weak_password: 0,
                        last_update_time_for_nmap: 1569739823,
                        wifi_state: 3,
                    },
                },
                gateway_mac: "04:D4:C4:3E:07:08",
                is_family: 255,
                is_new: false,
                last_online_time: "2019-09-29 14:50:31",
                nmap_all_done: 1,
                static_scan_done: true,
                total_online_time: 61,
            },
            "A0:63:91:DE:68:BA": {
                device_role: 0,
                device_state: 2,
                device_static_info: {
                    brand_confidence: "A",
                    cache_type: "",
                    category_class_id: 256,
                    category_confidence: "A",
                    category_id: 256,
                    client_mac: "",
                    dev_brand: "Netgear",
                    dev_ipv4: "192.168.50.231",
                    dev_ipv6: "",
                    dev_mac: "A0:63:91:DE:68:BA",
                    dev_model: "",
                    fb_dev_brand: "",
                    fb_dev_categ: 0,
                    fb_dev_model: "",
                    fb_friendly_name: "",
                    friendly_name: "Netgear Router",
                    friendly_name_rule: 0,
                    hostname: "R7000",
                    hostname_confidence: "A",
                    last_update_time_for_nmap: 1569739281,
                    model_confidence: "Z",
                    model_id: "",
                    static_scan_done: 1,
                },
                device_vunl_info: {},
                gateway_mac: "04:D4:C4:3E:07:08",
                is_family: 255,
                is_new: false,
                last_online_time: "2019-09-29 14:50:26",
                nmap_all_done: 1,
                static_scan_done: true,
                total_online_time: 61,
            },
            "00:71:47:77:95:8F": {
                device_role: 0,
                device_state: 2,
                device_static_info: {
                    brand_confidence: "A",
                    cache_type: "",
                    category_class_id: 2048,
                    category_confidence: "A",
                    category_id: 2051,
                    client_mac: "",
                    dev_brand: "Amazon",
                    dev_ipv4: "192.168.1.6",
                    dev_ipv6: "",
                    dev_mac: "00:71:47:77:95:8F",
                    dev_model: "",
                    fb_dev_brand: "",
                    fb_dev_categ: 0,
                    fb_dev_model: "",
                    fb_friendly_name: "",
                    friendly_name: "Amazon Set-top Box",
                    friendly_name_rule: 2,
                    hostname:
                        "amzn.dmgr:88271C14EA73051691E84F7977BE146C:xnVDMM+4u1:713425",
                    hostname_confidence: "A",
                    last_update_time_for_nmap: 1569810035,
                    model_confidence: "Z",
                    model_id: "",
                    static_scan_done: 1,
                },
                device_vunl_info: {},
                gateway_mac: "04:D4:C4:3E:07:08",
                is_family: 255,
                is_new: false,
                last_online_time: "2019-09-30 10:26:22",
                nmap_all_done: 0,
                static_scan_done: true,
                total_online_time: 61,
            },
            "B8:27:EB:DA:EA:81": {
                device_role: 0,
                device_state: 2,
                device_static_info: {
                    brand_confidence: "Z",
                    cache_type: "",
                    category_class_id: 0x2100,
                    category_confidence: "Z",
                    category_id: 0x2100,
                    client_mac: "",
                    dev_brand: "Raspberry PI",
                    dev_ipv4: "192.168.50.203",
                    dev_ipv6: "",
                    dev_mac: "B8:27:EB:DA:EA:81",
                    dev_model: "",
                    fb_dev_brand: "",
                    fb_dev_categ: 0,
                    fb_dev_model: "",
                    fb_friendly_name: "",
                    friendly_name: "Raspberry PI",
                    friendly_name_rule: 0,
                    hostname: "",
                    hostname_confidence: "Z",
                    last_update_time_for_nmap: 1569739279,
                    model_confidence: "Z",
                    model_id: "",
                    static_scan_done: 1,
                },
                device_vunl_info: {},
                gateway_mac: "04:D4:C4:3E:07:08",
                is_family: 255,
                is_new: false,
                last_online_time: "2019-09-29 14:50:28",
                nmap_all_done: 1,
                static_scan_done: true,
                total_online_time: 61,
            },
            "48:D6:D5:74:11:0C": {
                device_role: 0,
                device_state: 2,
                device_static_info: {
                    brand_confidence: "A",
                    cache_type: "",
                    category_class_id: 2560,
                    category_confidence: "A",
                    category_id: 2560,
                    client_mac: "",
                    dev_brand: "Google",
                    dev_ipv4: "192.168.1.22",
                    dev_ipv6: "",
                    dev_mac: "48:D6:D5:74:11:0C",
                    dev_model: "",
                    fb_dev_brand: "",
                    fb_dev_categ: 0,
                    fb_dev_model: "",
                    fb_friendly_name: "",
                    friendly_name: "Google Home",
                    friendly_name_rule: 1,
                    hostname: "googlerpc-1",
                    hostname_confidence: "A",
                    last_update_time_for_nmap: 1569809999,
                    model_confidence: "Z",
                    model_id: "",
                    static_scan_done: 1,
                },
                device_vunl_info: {},
                gateway_mac: "04:D4:C4:3E:07:08",
                is_family: 255,
                is_new: false,
                last_online_time: "2019-09-30 10:26:22",
                nmap_all_done: 0,
                static_scan_done: true,
                total_online_time: 61,
            },
            "D4:F4:6F:CB:4D:FC": {
                device_role: 0,
                device_state: 2,
                device_static_info: {
                    brand_confidence: "A",
                    cache_type: "",
                    category_class_id: 512,
                    category_confidence: "A",
                    category_id: 514,
                    client_mac: "",
                    dev_brand: "Apple",
                    dev_ipv4: "192.168.50.38",
                    dev_ipv6: "",
                    dev_mac: "D4:F4:6F:CB:4D:FC",
                    dev_model: "",
                    fb_dev_brand: "",
                    fb_dev_categ: 0,
                    fb_dev_model: "",
                    fb_friendly_name: "",
                    friendly_name: "evilisngsiPhone",
                    friendly_name_rule: 0,
                    hostname: "evilisngsiPhone",
                    hostname_confidence: "A",
                    last_update_time_for_nmap: 1569739275,
                    model_confidence: "Z",
                    model_id: "",
                    static_scan_done: 1,
                },
                device_vunl_info: {},
                gateway_mac: "04:D4:C4:3E:07:08",
                is_family: 255,
                is_new: false,
                last_online_time: "2019-09-29 14:46:32",
                nmap_all_done: 1,
                static_scan_done: true,
                total_online_time: 61,
            },
            "D4:F4:6F:C4:4D:FD": {
                device_role: 0,
                device_state: 2,
                device_static_info: {
                    brand_confidence: "A",
                    cache_type: "",
                    category_class_id: 512,
                    category_confidence: "A",
                    category_id: 514,
                    client_mac: "",
                    dev_brand: "Apple",
                    dev_ipv4: "192.168.50.39",
                    dev_ipv6: "",
                    dev_mac: "D4:F4:6F:C4:4D:FD",
                    dev_model: "",
                    fb_dev_brand: "",
                    fb_dev_categ: 0,
                    fb_dev_model: "",
                    fb_friendly_name: "",
                    friendly_name: "xiasiPhone",
                    friendly_name_rule: 0,
                    hostname: "xiasiPhone",
                    hostname_confidence: "A",
                    last_update_time_for_nmap: 1569739275,
                    model_confidence: "Z",
                    model_id: "",
                    static_scan_done: 1,
                },
                device_vunl_info: {},
                gateway_mac: "04:D4:C4:3E:07:08",
                is_family: 255,
                is_new: false,
                last_online_time: "2019-09-29 14:46:32",
                nmap_all_done: 1,
                static_scan_done: true,
                total_online_time: 61,
            },
            "FC:77:74:82:DE:6C": {
                device_role: 0,
                device_state: 2,
                device_static_info: {
                    brand_confidence: "A",
                    cache_type: "",
                    category_class_id: 1536,
                    category_confidence: "A",
                    category_id: 1537,
                    client_mac: "",
                    dev_brand: "Dell",
                    dev_ipv4: "192.168.50.59",
                    dev_ipv6: "",
                    dev_mac: "FC:77:74:82:DE:6C",
                    dev_model: "",
                    fb_dev_brand: "",
                    fb_dev_categ: 0,
                    fb_dev_model: "",
                    fb_friendly_name: "",
                    friendly_name: "NEIL-SHAO",
                    friendly_name_rule: 0,
                    hostname: "NJ-NEIL-SHAO",
                    hostname_confidence: "A",
                    last_update_time_for_nmap: 1569739277,
                    model_confidence: "Z",
                    model_id: "",
                    static_scan_done: 1,
                },
                device_vunl_info: {},
                gateway_mac: "04:D4:C4:3E:07:08",
                is_family: 255,
                is_new: false,
                last_online_time: "2019-09-29 14:50:23",
                nmap_all_done: 1,
                static_scan_done: true,
                total_online_time: 61,
            },
            "44:47:CC:34:87:A3": {
                device_role: 0,
                device_state: 2,
                device_static_info: {
                    brand_confidence: "A",
                    cache_type: "",
                    category_class_id: 0x700,
                    category_confidence: "A",
                    category_id: 0x700,
                    client_mac: "",
                    dev_brand: "Hikvision",
                    dev_ipv4: "192.168.50.58",
                    dev_ipv6: "",
                    dev_mac: "44:47:CC:34:87:A3",
                    dev_model: "",
                    fb_dev_brand: "",
                    fb_dev_categ: 0,
                    fb_dev_model: "",
                    fb_friendly_name: "",
                    friendly_name: "Hikvision IP Camera",
                    friendly_name_rule: 0,
                    hostname: "NJ-NEIL-SHAO",
                    hostname_confidence: "A",
                    last_update_time_for_nmap: 1569739277,
                    model_confidence: "Z",
                    model_id: "",
                    static_scan_done: 1,
                },
                device_vunl_info: {},
                gateway_mac: "04:D4:C4:3E:07:08",
                is_family: 255,
                is_new: false,
                last_online_time: "2019-09-29 14:50:23",
                nmap_all_done: 1,
                static_scan_done: true,
                total_online_time: 61,
            },
            "00:00:AA:23:8A:34": {
                device_role: 0,
                device_state: 2,
                device_static_info: {
                    brand_confidence: "A",
                    cache_type: "",
                    category_class_id: 0x1b00,
                    category_confidence: "A",
                    category_id: 0x1b00,
                    client_mac: "",
                    dev_brand: "Xerox",
                    dev_ipv4: "192.168.50.54",
                    dev_ipv6: "",
                    dev_mac: "00:00:AA:23:8A:34",
                    dev_model: "",
                    fb_dev_brand: "",
                    fb_dev_categ: 0,
                    fb_dev_model: "",
                    fb_friendly_name: "",
                    friendly_name: "Xerox Printer",
                    friendly_name_rule: 0,
                    hostname: "NJ-NEIL-SHAO",
                    hostname_confidence: "A",
                    last_update_time_for_nmap: 1569739277,
                    model_confidence: "Z",
                    model_id: "",
                    static_scan_done: 1,
                },
                device_vunl_info: {},
                gateway_mac: "04:D4:C4:3E:07:08",
                is_family: 255,
                is_new: false,
                last_online_time: "2019-09-29 14:50:23",
                nmap_all_done: 1,
                static_scan_done: true,
                total_online_time: 61,
            },
            "00:00:AA:23:8A:35": {
                device_role: 0,
                device_state: 1,
                device_static_info: {
                    brand_confidence: "A",
                    cache_type: "",
                    category_class_id: 0xc00,
                    category_confidence: "A",
                    category_id: 0xc00,
                    client_mac: "",
                    dev_brand: "Sony",
                    dev_ipv4: "192.168.50.55",
                    dev_ipv6: "",
                    dev_mac: "00:00:95:23:8A:35",
                    dev_model: "",
                    fb_dev_brand: "",
                    fb_dev_categ: 0,
                    fb_dev_model: "",
                    fb_friendly_name: "",
                    friendly_name: "Sony TV",
                    friendly_name_rule: 0,
                    hostname: "Sony TV",
                    hostname_confidence: "A",
                    last_update_time_for_nmap: 1569739277,
                    model_confidence: "Z",
                    model_id: "",
                    static_scan_done: 1,
                },
                device_vunl_info: {},
                gateway_mac: "04:D4:C4:3E:07:08",
                is_family: 255,
                is_new: false,
                last_online_time: "2019-09-29 14:50:23",
                nmap_all_done: 1,
                static_scan_done: true,
                total_online_time: 61,
            },
        };

        for (var i = 0; i < device_count; i++) {
            for (var key in tmpList) {
                device = deepCopy(tmpList[key])
                if (i != 0) {
                    device.device_static_info.dev_ipv4 += i
                }
                deviceList.push(device)
            }
        }
        
        return JSON.stringify(deviceList);
    },

    setISCHistory: function () {
        return [];
    },

    OpenDefaultOuterBrowser: function (str) {
        console.log("[openUrl]: " + str);
    },

    reScanAction: function (str) {
        console.log("[reScanAction]: " + str);
    },

    getISCHistory: function () {
        var deviceList = [
            {
                gateway_mac: "00:00:00:00:00:00",
                device_state: device_state,
                host_ip: "192.168.50.203",
                in_extender: 0,
                vulnerabilities_details: [
                    {
                        is_vuln: 1,
                        id: "YM_WANNACRY_MS17-010",
                        vul_name: "WannaCry Ransomware",
                    },
                    {
                        is_vuln: 1,
                        id: "YM_HEARTBLEED_CVE-2014-0160",
                        vul_name: "Heartbleed Bug",
                    },
                    // {
                    //     is_vuln: 1,
                    //     id: "YM_PRINTER_PJL_MEMORYACCESS",
                    //     vul_name: "YM_PRINTER_PJL_MEMORYACCESS",
                    // },
                ],
                open_ports: [
                    // { state: "open", port: 22, service: { name: "SSH" } },
                    // { state: "open", port: 23, service: { name: "TELNET" } },
                    // { state: "open", port: 445, service: { name: "SMB" } },
                    // { state: "open", port: 3389, service: { name: "RDP" } },
                    // { state: "open", port: 5928, service: { name: "TeamViewer" } },
                    // { state: "open", port: 5900, service: { name: "VNC" } },
                    // { state: "open", port: 45, service: { name: "https" } },
                ],
            }
        ];

        return JSON.stringify(deviceList);
    },

    getSDKStatus: function () {
        updateSDKStatus(JSON.stringify({ result: 1 }));
    },

    welcomeAcceptAndContinue: function () {
        console.log("[welcomeAcceptAndContinue]");
    },

    getAirSupportState: function () {
        console.log("[getAirSupportState]");
        return true;
    },

    userEditDeviceInfor: function (str) {
        console.log("[userEditDeviceInfor]: " + str);
    },

    forgetDevice: function (str) {
        console.log("[forgetDevice]: " + str);
    },

    setDraggable: function (str) {
        console.log("[setDraggable]: " + str);
    },

    getHostMac: function (str) {
        console.log("[getHostMac]: " + str);
    },

    WriteJSLog: function (str) {
        console.log("[WriteJSLog]: " + str);
    },

    PasteboardCopy: function (str) {
        console.log("[pasteboardCopy]: " + str);
    },

    userEvent: function (str) {
        console.log("[userEvent]: " + str);
    },

    removeWifiHistory: function (str) {
        console.log("[removeWifiHistory]: " + str);
    },

    getDevOLStatus: function (str) {
        console.log("[getDevOLStatus]: " + str);
    },

    InitializeSDK: function (str) {
        console.log("[InitializeSDK]: " + str);
    },

    GetBannerAd: function () {
        console.log("[GetBannerAd]: " );
        return "{}";
    },

    OnMsgFromWeb: function (cmd, parm) {
        switch (cmd) {
            case 0x10020051: {
                return external.getDeviceHistory();
            }

            case 0x10020053: {
                return external.getISCHistory();
            }

            case NativeCMD.CMD_GET_VERSION: {
                return JSON.stringify({
                    version: "5.3.0.1013",
                });
            }

            case NativeCMD.EVENT_PROGRAM_RELAUNCH: {
                window.location.href = window.location.href.replace(
                    "InstallPage",
                    "ResultPage"
                );
                return JSON.stringify({});
            }

            case NativeCMD.CMD_GET_USER_LOCALE: {
                return JSON.stringify({
                    user_locale: "EN-Au",
                });
            }

            case NativeCMD.CMD_GET_EVENT_SETTING: {
                return JSON.stringify({
                    NewDevice: false,
                    NewVulnerability: true,
                    NewNetwork: false,
                    Survey: true,
                    UsageData: false,
                });
            }

            case NativeCMD.CMD_GET_SHOW_TUTORIAL: {
                return JSON.stringify({
                    show: false,
                });
                return;
            }

            default: {
                console.log(cmd);
                return JSON.stringify({});
            }
        }
    },
};

setTimeout(function () {
    typeof updateSDKStatus != "undefined" &&
        updateSDKStatus(JSON.stringify({ result: 1 }));
}, 500);

function triggerScanError(type) {
    ScanErrorHandle(
        JSON.stringify({
            type: type,
            scanStatus: 1,
            isBackgroundRuning: false,
        })
    );
}

function triggerPopup(type) {
    notifyUserWithPopup(
        JSON.stringify({
            data: {
                device_ip_list: ["192.168.50.541"],
            },
            popup_type: type,
        })
    );
}

function triggergotoUI() {
    goToUIPage(
        JSON.stringify({
            page: 1,
            data: {
                device_ip_list: ["192.168.50.382"],
            },
            popup_type: 200001,
        })
    );
}

function CheckScanStatus() {
    scope.curDevice.DrScanFinished = 0;
    scope.curDevice.IscScanFinished = 0;
    scope.curDRStatus = 10002;
    scope.$apply();
}

function ChangeUIState() {
    updateUIState(
        JSON.stringify({
            scan_type: 1,
            state: 10002,
        })
    );
}

setTimeout(function () {
    updateUIState(
        JSON.stringify({
            scan_type: 1,
            state: 10002,
        })
    );
}, 10000);

setTimeout(function () {
    updateUIState(
        JSON.stringify({
            scan_type: 1,
            state: 10005,
        })
    );
}, 10000);

setTimeout(function () {
    updateUIState(
        JSON.stringify({
            scan_type: 1,
            state: 10006,
        })
    );
}, 20000);

function NotificationEN(type) {
    if (type == 200005) {
        url = "http://localhost/win/NotificationPage.html?debug&data={%22popup_type%22:200005,%22data%22:{%22network_name%22:%22tset%22,%22has_success_scaned%22:false,%22is_current_network%22:true,%22gateway_mac%22:%22test%22}}"
    } else {
        url = "http://localhost/win/NotificationPage.html?debug&data={%22popup_type%22:" + type + ",%22data%22:{%22device_ip_list%22:[%2212345%22]}}"
    }

    window.open(url)
}

function NotificationJP(type) {
    if (type == 200005) {
        url =  "http://localhost/win/NotificationPage.html?debug&lang=JA_JP&data={%22popup_type%22:200005,%22data%22:{%22network_name%22:%22tset%22,%22has_success_scaned%22:false,%22is_current_network%22:true,%22gateway_mac%22:%22test%22}}"
    } else {
        url =  "http://localhost/win/NotificationPage.html?debug&lang=JA_JP&data={%22popup_type%22:" + type + ",%22data%22:{%22device_ip_list%22:[%2212345%22]}}"
    }

    window.open(url)
}

function closeWifi() {
    currentWifiChanged(
        JSON.stringify({
            gateway_mac: null,
            network_name: null,
            has_success_scaned: false,
            is_current_network: false,
        })
    );
}
