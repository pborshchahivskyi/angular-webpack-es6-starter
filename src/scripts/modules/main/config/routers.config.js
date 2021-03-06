/* @ngInject */
export default function RouteConfig($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    /**
     * Description all routers.
     */
    $stateProvider
        .state('app', {
            abstract: true,
            url: '',
            views: {
                '': {
                    template: require('../templates/main.tmpl.html')
                },
                'header@app': {
                    template: require('../templates/header.tmpl.html'),
                    controller: 'HeaderCtrl'
                },
                'content@app': 'content',
                'footer@app': {
                    template: require('../templates/footer.tmpl.html'),
                    controller: 'FooterCtrl'
                }
            }
        })

        .state('app.main', {
            url: '/',
            views: {
                'content@app': {
                    template: '<h1 ng-click="mainCtrl.getThings()">Inner Content</h1> {{mainCtrl.prop}}',
                    controller: 'MainCtrl',
                    controllerAs: 'mainCtrl'
                }
            }
        });
}