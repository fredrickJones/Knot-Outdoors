'use strict';
var app = angular.module('knotOutdoors', ['formly', 'formlyBootstrap']);

app.controller('loginCtrl', function($scope) {
	this.onSubmit = onSubmit;
	// variable assignment
	this.exampleTitle = 'Introduction';
	this.env = {
		angularVersion: angular.version.full,
		formlyVersion: formlyVersion
	};

	this.formData = {
		awesome: true
	};

	this.awesomeIsForced = false;

	this.formFields = [
		{
			key: 'text',
			type: 'input',
			templateOptions: {
				label: 'Text',
				placeholder: 'Crag Name'
			}
		},
		{
			key: 'story',
			type: 'textarea',
			templateOptions: {
				label: 'Some sweet story',
				placeholder: 'It allows you to build and maintain your forms with the ease of JavaScript :-)'
			}
		},
		{
			key: 'awesome',
			type: 'checkbox',
			expressionProperties: {
				'templateOptions.disabled': function() {
					return vm.awesomeIsForced;
				},
				'templateOptions.label': function() {
					if (vm.awesomeIsForced) {
						return 'Too bad, formly is really awesome...';
					} else {
						return 'Is formly totally awesome? (uncheck this and see what happens)';
					}
				}
			}
		},
		{
			key: 'whyNot',
			type: 'textarea',
			expressionProperties: {
				hide: 'model.awesome'
			},
			templateOptions: {
				label: 'Why Not?',
				placeholder: 'Type in here... I dare you', 
				disabled: false
			},
			watcher: {
				listener: function(field, newValue, oldValue, scope, stopWatching) {
					if (newValue) {
						console.log(newValue);
						stopWatching();
						scope.model.awesome = true;
						scope.model.whyNot = undefined;
						field.expressionProperties.hide = null;
						field.templateOptions.disabled = true;
						field.templateOptions.placeholder = 'Too bad... It really is awesome!  Wasn\'t that cool?';
						vm.awesomeIsForced = true;
					}
				}
			}
		},
		{
			key: 'custom',
			type: 'custom',
			templateOptions: {
				label: 'Custom inlined',
			}
		},
		{
			key: 'exampleDirective',
			template: '<div example-directive></div>',
			templateOptions: {
				label: 'Example Directive',
			}
		}
	];

	// function definition
	function onSubmit() {
		alert(JSON.stringify(this.formData), null, 2);
	}
});

  
app.directive('exampleDirective', function() {
	return {
		templateUrl: 'example-directive.html'
	};
});


