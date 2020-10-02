/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/ceremony.js":
/*!*************************!*\
  !*** ./src/ceremony.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass Ceremony {\n    constructor(ctx, graduates, currentStudent = 0) {\n        this.ctx = ctx;\n        this.graduates = graduates;\n        this.currentStudent = currentStudent;\n        this.potatSpriteSheet = new Image();\n        this.stage = new Image();\n        this.audienceChairs = new Image();\n        this.diploma = new Image();\n        this.aalogo = new Image();\n\n        this.potatSpriteSheet.src = \"./dist/assets/potat-sprite-sheet.png\";\n        this.stage.src = './dist/assets/pixel_art_stage.png';\n        this.audienceChairs.src = \"./dist/assets/theatre_chairs.png\";\n        this.diploma.src = \"./dist/assets/diploma.png\";\n        this.aalogo.src = \"./dist/assets/logo.png\";\n    }\n\n    constructStage() {\n        let waitingSprite = [750, 0];\n        let spriteSize = [375, 500];\n\n        this.interval = setInterval(() => {\n            this.ctx.drawImage(this.stage, 20, 50, 850, 300);\n            this.ctx.drawImage(this.audienceChairs, 20, 349, 850, 70);\n            this.ctx.drawImage(this.audienceChairs, 20, 349, 850, 130);\n            this.ctx.drawImage(this.potatSpriteSheet,\n                waitingSprite[0], waitingSprite[1],\n                spriteSize[0], spriteSize[1],\n                80, 245,\n                // spriteSize[0], spriteSize[1])\n                80, 80);\n                // clearInterval(this.interval)\n        },100);\n    }\n\n    nextStudentMoves(button) {\n        button.disabled = true;\n        this.graduates[this.currentStudent].moveAcrossScreen(this, button);\n        this.currentStudent += 1;\n    }\n\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Ceremony);\n\n//# sourceURL=webpack:///./src/ceremony.js?");

/***/ }),

/***/ "./src/graduate.js":
/*!*************************!*\
  !*** ./src/graduate.js ***!
  \*************************/
/*! exports provided: Graduate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Graduate\", function() { return Graduate; });\nclass Graduate {\n    constructor(ctx, name, img_url) {\n        this.ctx = ctx\n        this.name = name\n        this.img_url = new Image()\n        this.img_url.src = img_url\n    }\n\n    drawGraduate(ceremony, i, startingPosition, jumpHeight){\n        let spriteSize = [375, 500]\n        let runningSprites = [[0, 0], [375, 0], [0, 0]];\n        let dashSprites = [[0, 0], [375, 0], [0, 0]];\n        let jumpSprite = [1125, 0];\n        let grabSprite = [0, 500];\n\n        this.ctx.clearRect(0, 0, 1000, 1000)\n\n        this.ctx.drawImage(ceremony.stage, 20, 50, 850, 300);\n        this.ctx.drawImage(ceremony.audienceChairs, 20, 349, 850, 70)\n        this.ctx.drawImage(ceremony.audienceChairs, 20, 349, 850, 130)\n\n        this.scaleGraduateImg();\n\n        if (startingPosition[0] >= 390 && startingPosition[0] <= 490) { // grabbing diploma\n            if (startingPosition[0] <= 420) {\n                jumpHeight[0] = jumpHeight[0] + 5;\n            } else {\n                jumpHeight[0] = jumpHeight[0] - 5;\n            }\n\n            this.ctx.drawImage(ceremony.potatSpriteSheet,\n                grabSprite[0], grabSprite[1],\n                spriteSize[0], spriteSize[1],\n                startingPosition[0], startingPosition[1] - jumpHeight,\n                80, 80)\n        } else if (startingPosition[0] >= 350 && startingPosition[0] <= 490) {\n            if (startingPosition[0] <= 420) {\n                jumpHeight[0] = jumpHeight[0] + 11;\n            } else {\n                jumpHeight[0] = jumpHeight[0] - 11;\n            }\n\n            this.ctx.drawImage(ceremony.potatSpriteSheet,\n                // runningSprites[i % runningSprites.length][0], runningSprites[i % runningSprites.length][1],\n                jumpSprite[0], jumpSprite[1],\n                spriteSize[0], spriteSize[1],\n                startingPosition[0], startingPosition[1] - jumpHeight,\n                80, 80)\n        } else if (startingPosition[0] > 490) { // after landing from diploma catch\n            this.ctx.drawImage(ceremony.potatSpriteSheet,\n                dashSprites[i % dashSprites.length][0], dashSprites[i % runningSprites.length][1],\n                spriteSize[0], spriteSize[1],\n                startingPosition[0], startingPosition[1],\n                80, 80)\n        } else {\n            this.ctx.drawImage(ceremony.potatSpriteSheet,\n                runningSprites[i % runningSprites.length][0], runningSprites[i % runningSprites.length][1],\n                spriteSize[0], spriteSize[1],\n                startingPosition[0], startingPosition[1],\n                80, 80)\n        }\n\n        if (startingPosition[0] < 440) {\n            this.ctx.drawImage(ceremony.diploma, 440, 235, 20, 20); //draw diploma\n        } else if (startingPosition[0] === 440) {\n            ceremony.sound.play();\n        } else {\n            this.ctx.drawImage(ceremony.aalogo, 365, 55, 170, 150);\n        }\n    }\n\n    moveAcrossScreen(ceremony,button) {\n        clearInterval(ceremony.interval);\n        let startingPosition = [80, 245]\n        let jumpSprite = [300, 100] //might get to use this later\n        let studentName = document.querySelector(\"#student\")\n        studentName.innerHTML = this.name\n        let i = 0;\n        let jumpHeight = [0];\n\n        let interval = setInterval(() => {\n            startingPosition[0] += 20\n            i++\n\n            this.drawGraduate(ceremony,i, startingPosition, jumpHeight)\n\n            if (startingPosition[0] >= 740) {\n                clearInterval(interval)\n                this.ctx.clearRect(0, 0, 1000, 1000)\n                ceremony.constructStage()\n                button.disabled = false\n                studentName.innerHTML  = \"\"\n            }\n        }, 100)\n    }\n\n    scaleGraduateImg() {\n        let scale = Math.max(150 / this.img_url.width, 170 / this.img_url.height);\n        let x = 450 - ((this.img_url.width / 2) * scale);\n        let y = 140 - ((this.img_url.height / 2) * scale);\n        this.ctx.drawImage(this.img_url, x, y, this.img_url.width * scale, this.img_url.height * scale);\n    }\n\n    jumpAndGrabDiploma(ceremony, i, startingPosition) {\n\n    }\n}\n\n\n\n//# sourceURL=webpack:///./src/graduate.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _graduate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./graduate */ \"./src/graduate.js\");\n/* harmony import */ var _ceremony__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ceremony */ \"./src/ceremony.js\");\n/* harmony import */ var _students_Four_20__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./students/Four-20 */ \"./src/students/Four-20.js\");\n\n //there is no reason that these two imports are different. I was messing around with how you can import files\n\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n    let canvas = document.getElementById(\"canvas\");\n    let nextStudentButton = document.getElementById(\"next-student\");\n    let ctx = canvas.getContext(\"2d\");\n    let ol1 = document.getElementById(\"ol1\");\n    let ol2 = document.getElementById(\"ol2\");\n    let punch = document.getElementById(\"punch\");\n    let submitButton = document.querySelector(\"#current-student-button\");\n\n    let graduates = [] ;\n    _students_Four_20__WEBPACK_IMPORTED_MODULE_2__[\"default\"].forEach((student) => {\n        let graduate = new _graduate__WEBPACK_IMPORTED_MODULE_0__[\"Graduate\"](ctx,student.name,student.imageUrl);\n        graduates.push(graduate);\n    });\n\n    let mid = Math.floor(graduates.length/2);\n    ol2.start = mid + 1;\n\n    for (let i = 0; i < mid; i++) {\n        let listItem = document.createElement(\"li\");\n        listItem.textContent = graduates[i].name;\n        ol1.appendChild(listItem);\n    }\n\n    for (let i = mid; i < graduates.length; i++) {\n        let listItem = document.createElement(\"li\");\n        listItem.textContent = graduates[i].name;\n        ol2.appendChild(listItem);\n    }\n\n    let ceremony = new _ceremony__WEBPACK_IMPORTED_MODULE_1__[\"default\"](ctx, graduates);\n    ceremony.sound = punch; // give sound to ceremony instance\n\n    submitButton.addEventListener(\"click\", () => {\n        let input = document.querySelector(\"input\");\n        ceremony.currentStudent = parseInt(input.value) - 1;\n    });\n\n    ceremony.constructStage();\n\n\n    nextStudentButton.addEventListener(\"click\", (e) => {\n        ceremony.nextStudentMoves(e.target);\n    });\n\n\n});\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/students/Four-20.js":
/*!*********************************!*\
  !*** ./src/students/Four-20.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst students = [\n  {\n    \"name\": \"Ben Anderson\",\n    \"imageUrl\": \"https://avatars1.githubusercontent.com/u/62520351?s=460&u=55b9329cab60bcd8ed323f29212e021176a206c1&v=4\",\n  },\n  {\n    \"name\": \"Austin Burger\",\n    \"imageUrl\": \"https://avatars2.githubusercontent.com/u/42685291?s=460&u=ac18527f45d40abab39ffb6c8e36a26c0c6c6e13&v=4\",\n  },\n  {\n    \"name\": \"Sam Brady\",\n    \"imageUrl\": \"https://avatars0.githubusercontent.com/u/62111533?s=460&u=0e5484317dcbb7e15b90a537d940dd6e116ee6d4&v=4\",\n  },\n  {\n    \"name\": \"Aaron Carpenter\",\n    \"imageUrl\": \"https://avatars1.githubusercontent.com/u/17888256?s=460&u=a67b41f7c22333e3de31717f4269101117c9ee4e&v=4\",\n  },\n  {\n    \"name\": \"John Chen\",\n    \"imageUrl\": \"https://avatars0.githubusercontent.com/u/19940754?s=460&u=affceb6bb37d0d469873f4dd4230b6c9c43c23a3&v=4\",\n  },\n  {\n    \"name\": \"Chris Cottier\",\n    \"imageUrl\": \"https://avatars0.githubusercontent.com/u/63880220?s=460&u=22a67d3cab8526e811a7a15d1e1e4456a742940a&v=4\",\n  },\n  {\n    \"name\": \"Nolan Crenshaw\",\n    \"imageUrl\": \"https://avatars0.githubusercontent.com/u/51563575?s=460&u=f897e860217075c9541287a835c0f1c09756bf13&v=4\",\n  },\n  {\n    \"name\": \"Robert Estrada\",\n    \"imageUrl\": \"https://avatars0.githubusercontent.com/u/57651772?s=460&u=4038cc06dca01f8fe73d30d8966cb8106005b42b&v=4\",\n  },\n  {\n    \"name\": \"Warren Gifford\",\n    \"imageUrl\": \"https://avatars0.githubusercontent.com/u/13024338?s=460&u=a5553deda2584e47948a345e47079de90a036fdb&v=4\",\n  },\n  {\n    \"name\": \"Zachary Haley\",\n    \"imageUrl\": \"https://avatars2.githubusercontent.com/u/59539209?s=460&u=9260e6ed55747c63fdf5307eaccf79be4795e28c&v=4\",\n  },\n  {\n    \"name\": \"Stedman Houston\",\n    \"imageUrl\": \"https://avatars3.githubusercontent.com/u/42789271?s=460&u=b2a9745dc3f60b4be908c61ead4a5626a3dabfff&v=4\",\n  },\n  {\n    \"name\": \"Dan Kim\",\n    \"imageUrl\": \"https://avatars1.githubusercontent.com/u/56294291?s=460&u=ce0c0dfb6d9975de14c9ae42fb92b6dc8cdf90d0&v=4\",\n  },\n  {\n    \"name\": \"Catherine Lee\",\n    \"imageUrl\": \"https://3er1viui9wo30pkxh1v2nh4w-wpengine.netdna-ssl.com/wp-content/uploads/prod/sites/358/2019/08/GettyImages-914818226-1024x677.jpg\",\n  },\n  {\n    \"name\": \"Greg Lloyd\",\n    \"imageUrl\": \"https://avatars2.githubusercontent.com/u/63263440?s=460&u=4cee066f673e1bbe48c0d07cf4956fad2a743cf3&v=4\",\n  },\n  {\n    \"name\": \"Conrad Orta\",\n    \"imageUrl\": \"https://media-exp1.licdn.com/dms/image/C5603AQHWDgyKnmT93g/profile-displayphoto-shrink_800_800/0?e=1606953600&v=beta&t=1CB2Y5R87D8NeATA6TWkIe2FC1kAdo1Ru6bz0wSQW5w\",\n  },\n  {\n    \"name\": \"Deepak Ponnuswamy\",\n    \"imageUrl\": \"https://avatars3.githubusercontent.com/u/31281304?s=460&u=aa3572b203a149a1cecddb9acc9f3aef52092bd9&v=4\",\n  },\n  {\n    \"name\": \"Casey Riley\",\n    \"imageUrl\": \"https://avatars3.githubusercontent.com/u/60625370?s=460&u=543a96acc7f0dedfc629657210604e846e582b24&v=4\",\n  }\n];\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (students);\n\n//# sourceURL=webpack:///./src/students/Four-20.js?");

/***/ })

/******/ });