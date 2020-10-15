/* eslint-disable */
// must import after l10n.js
extra_l10 = {
    ErrorModalMap: {
        General: wordingJson.ErrorModal_General,
        NoInternet: wordingJson.ErrorModal_NoInternet,
        PublicSSID: wordingJson.ErrorModal_PublicSSID,
        OverMaxDevices: wordingJson.ErrorModal_OverMaxDevices,
        UnstableInternet: wordingJson.ErrorModal_UnstableInternet,
        Networkchange: wordingJson.ErrorModal_Networkchange,
        DoingStopScan: wordingJson.ErrorModal_DoingStopScan,
        DiamondExist: wordingJson.ErrorModal_DiamondExist,
    },

    PopupModal: {
        NewDeviceDetected: {
            Title: wordingJson.PopupModal_NewDeviceDetected_Title,
            Content: wordingJson.PopupModal_NewDeviceDetected_Content,
            OKButton: wordingJson.PopupModal_NewDeviceDetected_OKButton,
            CancelButton: wordingJson.PopupModal_NewDeviceDetected_CancelButton,
        },
        HighRiskDeviceFound: {
            Title: wordingJson.PopupModal_HighRiskDeviceFound_Title,
            Content: wordingJson.PopupModal_HighRiskDeviceFound_Content,
            OKButton: wordingJson.PopupModal_HighRiskDeviceFound_OKButton,
            CancelButton:
                wordingJson.PopupModal_HighRiskDeviceFound_CancelButton,
        },
        NewVulnerabilityDetected: {
            Title: wordingJson.PopupModal_NewVulnerabilityDetected_Title,
            Content: wordingJson.PopupModal_NewVulnerabilityDetected_Content,
            OKButton: wordingJson.PopupModal_NewVulnerabilityDetected_OKButton,
            CancelButton:
                wordingJson.PopupModal_NewVulnerabilityDetected_CancelButton,
        },
        ScanReminder: {
            Title: wordingJson.PopupModal_ScanReminder_Title,
            Content: wordingJson.PopupModal_ScanReminder_Content,
            OKButton: wordingJson.PopupModal_ScanReminder_OKButton,
            CancelButton: wordingJson.PopupModal_ScanReminder_CancelButton,
        },
        NewNetworkChangeDetected: {
            Title: wordingJson.PopupModal_NewNetworkChangeDetected_Title,
            Content: wordingJson.PopupModal_NewNetworkChangeDetected_Content,
            OKButton: wordingJson.PopupModal_NewNetworkChangeDetected_OKButton,
            CancelButton:
                wordingJson.PopupModal_NewNetworkChangeDetected_CancelButton,
        },
        ConfirmHomeNetwork: {
            Title: wordingJson.DeviceLimitPopup,
            Content: wordingJson.DeviceLimitContent,
            OKButton: wordingJson.DeviceLimitConfirmButton,
            CancelButton: wordingJson.DeviceLimitCancelButton,
        }
    },

    SettingItems: [
        {
            Name: wordingJson.Notification,
            Check: true,
            Detail: {
                NewDevice: {
                    Title:
                        wordingJson.SettingItems_Notification_NewDevice_Title,
                    Check: true,
                },
                NewVulnerability: {
                    Title:
                        wordingJson.SettingItems_Notification_NewVulnerability_Title,
                    Check: true,
                },
                NewNetwork: {
                    Title:
                        wordingJson.SettingItems_Notification_NewNetwork_Title,
                    Check: true,
                },
                Survey: {
                    Title: wordingJson.SettingItems_Notification_Survey_Title,
                    Check: true,
                },
            },
        },
        {
            Name: wordingJson.Privacy,
            Check: false,
            Detail: {
                UsageData: {
                    Title: wordingJson.SettingItems_Privacy_UsageData_Title,
                    Content: wordingJson.SettingItems_Privacy_UsageData_Content,
                    Check: true,
                },
            },
        }
        
    ],

    PotentialRiskTip: {
        Gateway: {
            Vulnerability: wordingJson.PotentialRiskTip_Gateway_Vulnerability,
            DefaultAdministratorPassword:
                wordingJson.PotentialRiskTip_Gateway_DefaultPassword,
            WeakWiFiPassword:
                wordingJson.PotentialRiskTip_Gateway_WeakWiFiPassword,
            WeakWiFiEncryption:
                wordingJson.PotentialRiskTip_Gateway_WeakWiFiEncryption,
            DefaultSSID: wordingJson.PotentialRiskTip_Gateway_DefaultSSID,
            SMBRiskyPorts: wordingJson.PotentialRiskTip_Gateway_SMBRiskyPorts,
            LowRiskyPorts: wordingJson.PotentialRiskTip_Gateway_LowRiskyPorts,
            RouterNoRisks: wordingJson.PotentialRiskTip_Gateway_RouterNoRisks,
        },

        NonGateway: {
            WannaCry: wordingJson.PotentialRiskTip_NonGateway_WannaCry,
            Vulnerability:
                wordingJson.PotentialRiskTip_NonGateway_Vulnerability,
            DefaultAdministratorPassword:
                wordingJson.PotentialRiskTip_NonGateway_DefaultPassword,
            SMBRiskyPorts:
                wordingJson.PotentialRiskTip_NonGateway_SMBRiskyPorts,
            RemoteRiskyPorts:
                wordingJson.PotentialRiskTip_NonGateway_RemoteRiskyPorts,
            LowRiskyPorts:
                wordingJson.PotentialRiskTip_NonGateway_LowRiskyPorts,
            DeviceNoRiskGatewayRisk:
                wordingJson.PotentialRiskTip_NonGateway_DeviceNoRiskGatewayRisk,
            CameraNoRisks:
                wordingJson.PotentialRiskTip_NonGateway_CameraNoRisks,
            TVNoRisks: wordingJson.PotentialRiskTip_NonGateway_TVNoRisks,
            BrowsingNoRisks:
                wordingJson.PotentialRiskTip_NonGateway_BrowsingNoRisks,
            OtherNoRisks: wordingJson.PotentialRiskTip_NonGateway_OtherNoRisks,
        },
    },

    StatusTitle: {
        "0": wordingJson.StatusTitle_No,
        "2": wordingJson.StatusTitle_Low,
        "1": wordingJson.StatusTitle_High,
        "3": wordingJson.StatusTitle_Check,
    },

    StatusDescription: {
        "0": wordingJson.StatusDescription_No,
        "2": wordingJson.StatusDescription_Low,
        "1": wordingJson.StatusDescription_High,
        "3": wordingJson.StatusDescription_Check,
    },

    DiamondAdWord: [
        wordingJson.DiamondAdWord1,
        wordingJson.DiamondAdWord2,
        wordingJson.DiamondAdWord3,
    ]
};

(function () {
    for (var key in extra_l10) {
        wordingJson[key] = extra_l10[key];
    }
})();
