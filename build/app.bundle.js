/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _potholeService = __webpack_require__(1);
	
	var service = _interopRequireWildcard(_potholeService);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	service.findAll().then(function (potholes) {
	
	  potholes = service.removeDuplicateReports(potholes);
	
	  console.log(potholes);
	
	  var _service$getPercentFi = service.getPercentFilled(potholes);
	
	  var total = _service$getPercentFi.total;
	  var filled = _service$getPercentFi.filled;
	  var percent = _service$getPercentFi.percent;
	  var closed_reports = _service$getPercentFi.closed_reports;
	
	
	  document.getElementById("percent_filled").innerHTML = percent + '% Completed, ' + filled + ' total potholes filled.';
	
	  var html = '';
	
	  potholes.forEach(function (pothole) {
	    return html += '<tr><td>' + pothole.creation_date + '</td><td>' + pothole.street_address + ', ' + pothole.zip + '</td><td>' + pothole.status + '</td><td>' + pothole.number_of_potholes_filled_on_block + '</td><td>' + pothole.most_recent_action + '</td></tr>';
	  });
	  document.getElementById("potholes").innerHTML = html;
	}).catch(function (e) {
	  return console.log(e);
	});

/***/ },
/* 1 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var url = "https://data.cityofchicago.org/resource/7as2-ds3y.json";
	
	var findAll = exports.findAll = function findAll() {
		return new Promise(function (resolve, reject) {
	
			fetch(url).then(function (response) {
				return response.json();
			}).then(function (json) {
				if (json) {
					resolve(json);
				} else {
					reject("No potholes.");
				}
			});
		});
	};
	
	var getPercentFilled = exports.getPercentFilled = function getPercentFilled(potholes) {
	
		var total = potholes.length;
		var filled = 0;
		var closed_reports = 0;
		var percent = 0;
		var number_on_block = 0;
	
		potholes.forEach(function (pothole) {
			if (pothole.status === 'Completed') {
	
				closed_reports++;
	
				if (pothole.most_recent_action === 'Pothole Patched') {
					filled += pothole.number_of_potholes_filled_on_block * 1;
				}
			}
		});
	
		percent = (closed_reports / total * 100).toFixed(2);
	
		return { total: total, filled: filled, percent: percent };
	};
	
	var removeDuplicateReports = exports.removeDuplicateReports = function removeDuplicateReports(potholes) {
	
		var original = potholes;
		var cleanData = [];
	
		original.forEach(function (pothole) {
			if (pothole.status === 'Open' || pothole.status === 'Completed') {
				cleanData.push(pothole);
			}
		});
	
		return cleanData;
	};

/***/ }
/******/ ]);
//# sourceMappingURL=app.bundle.js.map