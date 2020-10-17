import Home from './home'
import login from './login'
import install from './install'
import about from './about'
import gdpr from './gdpr'

export default angular.module('components', [Home, login, install, about, gdpr])
    .name
