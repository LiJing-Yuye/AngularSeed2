import tem from './gdpr.html'
import gdprCtrl from './gdpr.js'
import './gdpr.less'
import './scrollBar.less'
import '../../Common/font/style.less'

export default angular.module('gdpr', []).component('gdpr', {
    template: tem,
    controller: gdprCtrl,
    controllerAs: 'ctrl'
}).name
