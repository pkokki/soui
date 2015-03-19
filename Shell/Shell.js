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
						{ text:'Cancel', press: function(oEvent) { /*sap.ui.getCore().byId('contactTool').close();*/ } },
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
		// extends Control @	https://openui5.hana.ondemand.com/#docs/api/symbols/sap.ui.core.Control.html
		
		// The Shell control can be used as root element of applications, it can contain an App or SplitApp control. 
		// The Shell provides some overarching functionality for the overall application and takes care of visual adaptation, 
		// like a frame around the App, on desktop browser platforms.
		// The use of the Shell is to control the width of the app on the desktop. On particularly large monitors, a 
		// full-width rendering of an application would be too wide. Placing the app's core inside a Shell container 
		// will give you appropriate left and right vertical margins.
		
		// {string:undefined}	sTitle	new value for property title
		// {sap.ui.core.URI:undefined}	sLogo	new value for property logo
		// {boolean:true}	bShowLogout	new value for property showLogout
		// {string:undefined}	sHeaderRightText	new value for property headerRightText
		// {boolean:true}	bAppWidthLimited	new value for property appWidthLimited
		// {sap.ui.core.CSSColor:undefined}	sBackgroundColor	new value for property backgroundColor
		// {sap.ui.core.URI:undefined}	sBackgroundImage	new value for property backgroundImage
		// {float:1}	fBackgroundOpacity	new value for property backgroundOpacity
		// {boolean:false}	bBackgroundRepeat	new value for property backgroundRepeat
		// {object:undefined}	oHomeIcon	new value for property homeIcon
		
		// this.setModel(i18nModel, "i18n");
		// this.setModel(deviceModel, "device");
		// this.getRouter().initialize();
		
		// var sServiceUrl = mConfig.serviceConfig.serviceUrl;
		// var oModel = new sap.ui.model.odata.ODataModel(sServiceUrl, true);
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