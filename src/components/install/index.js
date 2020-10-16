/**
 * Created by elsa_li on 2020/10/15
 */

import tem from './install.html'
import installCtrl from './install'
import './install.less'
import '../../Common/font/style.less'

export default angular.module('install', []).component('install', {
    template: tem,
    controller: installCtrl,
    controllerAs: 'ctrl'
}).name
