/**
 * Created by elsa_li on 2020/10/17
 */

import tem from './about.html'
import AboutCtrl from './about'
import './about.less'
import '../../Common/font/style.less'

export default angular.module('about', []).component('about', {
    template: tem,
    controller: AboutCtrl,
    controllerAs: 'ctrl'
}).name
