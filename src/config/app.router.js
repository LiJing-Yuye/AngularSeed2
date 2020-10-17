routing.$inject = ['$stateProvider', '$locationProvider', '$urlRouterProvider']

export default function routing(
    $stateProvider,
    $locationProvider,
    $urlRouterProvider
) {
    $locationProvider.html5Mode(true)
    $urlRouterProvider.otherwise('/login')
    $stateProvider
        .state('login', {
            url: '/login',
            template: '<login></login>'
        })
        .state('home', {
            url: '/home',
            template: '<home></home>'
        })
        .state('install', {
            url: '/install',
            template: '<install></install>'
        })
        .state('about', {
            url: '/about',
            template: '<about></about>'
        })
        .state('gdpr', {
            url: '/gdpr',
            template: '<gdpr></gdpr>'
        })
}
