/**
 * Created by elsa_li on 2020/10/15
 */
// window.$=require('../../Common/js/jquery-1.11.1')
// require('../../Common/js/jquery-1.11.1')
// require('../../Common/font/style.less')
// require('../../Common/js/l10n')
// require('../../Common/js/angular.1.2.32.min.js')
// require('../../js/definition.js')
import tem from './install.html'
import installCtrl from './install'
import './install.less'

export default angular.module('install', []).component('install', {
    template: tem,
    controller: installCtrl,
    controllerAs: 'ctrl'
}).name
