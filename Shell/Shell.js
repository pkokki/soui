angular.module('Shell', [
	'ui.bootstrap',
	'ui.utils',
	'ui.router',
	'ngAnimate'
	])
	
	/*************** config **************/
	.config(function($stateProvider) {
		//$stateProvider
		//	.state('home', {
		//		url: '/home',
		//		controller: 'ShellController',
		//		templateUrl: 'shell/shell.html'
		//	})
		//;
	})
	
	/*************** ShellSettings **************/
	.factory('ShellSettings', function() {
		var settings = {
			appTitle: 'The Application',
			appIcon: '',
			appIconTooltip: '',
			showLogoutButton: true,
			showSearchTool: true,
			showInspectorTool: true,
			showFeederTool: true,
			
			headerItems: [
				{ type: 'TextView', text: 'User Name', tooltip: 'U.Name' },
				{ type: 'Button', text: 'Personalize', tooltip: 'Personalize', press:function(ev){} },
				{ type: 'MenuButton', text: 'Help', tooltip: 'Help menu', items: [ { text: 'M1' } ] },
			],
			
			toolPopups: [
				{ 
					id: 'contactTool', 
					icon: 'images/Contact_regular.png', 
					tooltip: 'Create New Contact', 
					
					title: 'New Contact', 
					content: {text:'Here could be a contact sheet.'},
					buttons: [  
						{ text:'Cancel', click: function(ev) { } },
					]
				}
			],
			
			workareaItems: [
				{ key: 'T1', text: 'Home', subItems: [] },
				{ key: 'T2', text: 'Examples', subItems: [] }
			],
			
			paneBarItems: [
				{ key: 'PB1', text: 'Option1' }
			],
			
			homeViewUrl: 'views/home.html',
		};
		return settings;
	})
	
	
	
	/*************** ShellController **************/
	.controller('ShellController', ['$scope', 'ShellSettings', function($scope, ShellSettings) {
		// this.setModel(i18nModel, "i18n");
		// this.setModel(deviceModel, "device");
		
		// var sServiceUrl = mConfig.serviceConfig.serviceUrl;
		// var oModel = new ODataModel(sServiceUrl, true);
		// this.setModel(oModel);
		
		$scope.settings = ShellSettings;
		
		$scope.logout = function() {
			// Fired when the user presses the logout button/link.
			window.alert('$scope.logout');
		};
		
		function fireLogout() {
			// Fire event logout to attached listeners.
		}
		
		function destroy() {
			// Destroys the app/shell
		}

	}])
	
	;