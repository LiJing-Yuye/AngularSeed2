/* eslint-disable */
// must import after l10n.js
const l10n = require('../Common/js/l10n.js')

var extra_l10 = {
    ErrorModalMap: {
        General: l10n.wordingJson.ErrorModal_General,
        NoInternet: l10n.wordingJson.ErrorModal_NoInternet,
        PublicSSID: l10n.wordingJson.ErrorModal_PublicSSID,
        OverMaxDevices: l10n.wordingJson.ErrorModal_OverMaxDevices,
        UnstableInternet: l10n.wordingJson.ErrorModal_UnstableInternet,
        Networkchange: l10n.wordingJson.ErrorModal_Networkchange,
        DoingStopScan: l10n.wordingJson.ErrorModal_DoingStopScan,
        DiamondExist: l10n.wordingJson.ErrorModal_DiamondExist
    },

    PopupModal: {
        NewDeviceDetected: {
            Title: l10n.wordingJson.PopupModal_NewDeviceDetected_Title,
            Content: l10n.wordingJson.PopupModal_NewDeviceDetected_Content,
            OKButton: l10n.wordingJson.PopupModal_NewDeviceDetected_OKButton,
            CancelButton:
                l10n.wordingJson.PopupModal_NewDeviceDetected_CancelButton
        },
        HighRiskDeviceFound: {
            Title: l10n.wordingJson.PopupModal_HighRiskDeviceFound_Title,
            Content: l10n.wordingJson.PopupModal_HighRiskDeviceFound_Content,
            OKButton: l10n.wordingJson.PopupModal_HighRiskDeviceFound_OKButton,
            CancelButton:
                l10n.wordingJson.PopupModal_HighRiskDeviceFound_CancelButton
        },
        NewVulnerabilityDetected: {
            Title: l10n.wordingJson.PopupModal_NewVulnerabilityDetected_Title,
            Content:
                l10n.wordingJson.PopupModal_NewVulnerabilityDetected_Content,
            OKButton:
                l10n.wordingJson.PopupModal_NewVulnerabilityDetected_OKButton,
            CancelButton:
                l10n.wordingJson
                    .PopupModal_NewVulnerabilityDetected_CancelButton
        },
        ScanReminder: {
            Title: l10n.wordingJson.PopupModal_ScanReminder_Title,
            Content: l10n.wordingJson.PopupModal_ScanReminder_Content,
            OKButton: l10n.wordingJson.PopupModal_ScanReminder_OKButton,
            CancelButton: l10n.wordingJson.PopupModal_ScanReminder_CancelButton
        },
        NewNetworkChangeDetected: {
            Title: l10n.wordingJson.PopupModal_NewNetworkChangeDetected_Title,
            Content:
                l10n.wordingJson.PopupModal_NewNetworkChangeDetected_Content,
            OKButton:
                l10n.wordingJson.PopupModal_NewNetworkChangeDetected_OKButton,
            CancelButton:
                l10n.wordingJson
                    .PopupModal_NewNetworkChangeDetected_CancelButton
        },
        ConfirmHomeNetwork: {
            Title: l10n.wordingJson.DeviceLimitPopup,
            Content: l10n.wordingJson.DeviceLimitContent,
            OKButton: l10n.wordingJson.DeviceLimitConfirmButton,
            CancelButton: l10n.wordingJson.DeviceLimitCancelButton
        }
    },

    SettingItems: [
        {
            Name: l10n.wordingJson.Notification,
            Check: true,
            Detail: {
                NewDevice: {
                    Title:
                        l10n.wordingJson
                            .SettingItems_Notification_NewDevice_Title,
                    Check: true
                },
                NewVulnerability: {
                    Title:
                        l10n.wordingJson
                            .SettingItems_Notification_NewVulnerability_Title,
                    Check: true
                },
                NewNetwork: {
                    Title:
                        l10n.wordingJson
                            .SettingItems_Notification_NewNetwork_Title,
                    Check: true
                },
                Survey: {
                    Title:
                        l10n.wordingJson.SettingItems_Notification_Survey_Title,
                    Check: true
                }
            }
        },
        {
            Name: l10n.wordingJson.Privacy,
            Check: false,
            Detail: {
                UsageData: {
                    Title:
                        l10n.wordingJson.SettingItems_Privacy_UsageData_Title,
                    Content:
                        l10n.wordingJson.SettingItems_Privacy_UsageData_Content,
                    Check: true
                }
            }
        }
    ],

    PotentialRiskTip: {
        Gateway: {
            Vulnerability:
                l10n.wordingJson.PotentialRiskTip_Gateway_Vulnerability,
            DefaultAdministratorPassword:
                l10n.wordingJson.PotentialRiskTip_Gateway_DefaultPassword,
            WeakWiFiPassword:
                l10n.wordingJson.PotentialRiskTip_Gateway_WeakWiFiPassword,
            WeakWiFiEncryption:
                l10n.wordingJson.PotentialRiskTip_Gateway_WeakWiFiEncryption,
            DefaultSSID: l10n.wordingJson.PotentialRiskTip_Gateway_DefaultSSID,
            SMBRiskyPorts:
                l10n.wordingJson.PotentialRiskTip_Gateway_SMBRiskyPorts,
            LowRiskyPorts:
                l10n.wordingJson.PotentialRiskTip_Gateway_LowRiskyPorts,
            RouterNoRisks:
                l10n.wordingJson.PotentialRiskTip_Gateway_RouterNoRisks
        },

        NonGateway: {
            WannaCry: l10n.wordingJson.PotentialRiskTip_NonGateway_WannaCry,
            Vulnerability:
                l10n.wordingJson.PotentialRiskTip_NonGateway_Vulnerability,
            DefaultAdministratorPassword:
                l10n.wordingJson.PotentialRiskTip_NonGateway_DefaultPassword,
            SMBRiskyPorts:
                l10n.wordingJson.PotentialRiskTip_NonGateway_SMBRiskyPorts,
            RemoteRiskyPorts:
                l10n.wordingJson.PotentialRiskTip_NonGateway_RemoteRiskyPorts,
            LowRiskyPorts:
                l10n.wordingJson.PotentialRiskTip_NonGateway_LowRiskyPorts,
            DeviceNoRiskGatewayRisk:
                l10n.wordingJson
                    .PotentialRiskTip_NonGateway_DeviceNoRiskGatewayRisk,
            CameraNoRisks:
                l10n.wordingJson.PotentialRiskTip_NonGateway_CameraNoRisks,
            TVNoRisks: l10n.wordingJson.PotentialRiskTip_NonGateway_TVNoRisks,
            BrowsingNoRisks:
                l10n.wordingJson.PotentialRiskTip_NonGateway_BrowsingNoRisks,
            OtherNoRisks:
                l10n.wordingJson.PotentialRiskTip_NonGateway_OtherNoRisks
        }
    },

    StatusTitle: {
        0: l10n.wordingJson.StatusTitle_No,
        2: l10n.wordingJson.StatusTitle_Low,
        1: l10n.wordingJson.StatusTitle_High,
        3: l10n.wordingJson.StatusTitle_Check
    },

    StatusDescription: {
        0: l10n.wordingJson.StatusDescription_No,
        2: l10n.wordingJson.StatusDescription_Low,
        1: l10n.wordingJson.StatusDescription_High,
        3: l10n.wordingJson.StatusDescription_Check
    },

    DiamondAdWord: [
        l10n.wordingJson.DiamondAdWord1,
        l10n.wordingJson.DiamondAdWord2,
        l10n.wordingJson.DiamondAdWord3
    ]
}
;(function () {
    for (var key in extra_l10) {
        l10n.wordingJson[key] = extra_l10[key]
    }
})()
