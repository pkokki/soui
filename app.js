angular.module('soui', ['ui.bootstrap', 'ui.utils', 'ui.router', 'ngAnimate', 'Shell']);

angular.module('soui').config(function($stateProvider, $urlRouterProvider) {

	$stateProvider
		.state('app', {
			url: '/app',
			views: {
				'': { templateUrl: 'shell/layout.html' },
				'header@app': { templateUrl: 'shell/shell-header.html' },
				'toolbar@app': { templateUrl: 'shell/shell-toolbar.html' },
				'content@app': { templateUrl: 'shell/shell-content.html' },
				'content.nav@app': { templateUrl: 'shell/shell-content-nav.html' },
				'content.main@app': { templateUrl: 'shell/shell-content-main.html' },
				'content.panes@app': { templateUrl: 'shell/shell-content-panes.html' }
			}
		})
	;
	
    $urlRouterProvider.otherwise('/app');

});

angular.module('soui').run(function($rootScope) {

    $rootScope.safeApply = function(fn) {
        var phase = $rootScope.$$phase;
        if (phase === '$apply' || phase === '$digest') {
            if (fn && (typeof(fn) === 'function')) {
                fn();
            }
        } else {
            this.$apply(fn);
        }
    };

	//$rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams) {
	//	console.log('$stateChangeStart', event, toState, toParams, fromState, fromParams);
	//});
	//$rootScope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams) {
	//	console.log('$stateChangeSuccess', event, toState, toParams, fromState, fromParams);
	//});
	$rootScope.$on('$stateNotFound', function(event, unfoundState, fromState, fromParams) {
		window.alert('$stateNotFound');
		console.log('$stateNotFound', event, unfoundState, fromState, fromParams);
	});
	$rootScope.$on('$stateChangeError', function(event, toState, toParams, fromState, fromParams, error) {
		window.alert('$stateChangeError');
		console.log('$stateChangeError', event, toState, toParams, fromState, fromParams, error);
	});
	
});
