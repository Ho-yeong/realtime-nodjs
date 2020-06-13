(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handleNewMessage = void 0;

var _socket = require("./socket");

var messages = document.getElementById("jsMessages");
var sendMsg = document.getElementById("jsSendMsg");

var appendMsg = function appendMsg(text, nickname) {
  var li = document.createElement("li");
  li.innerHTML = "\n  <span class=\"author ".concat(nickname ? "out" : "self", "\">").concat(nickname ? nickname : "You", ":</span> ").concat(text, "\n");
  messages.appendChild(li);
};

var handleSendMsg = function handleSendMsg(event) {
  event.preventDefault();
  var input = sendMsg.querySelector("input");
  var value = input.value;
  (0, _socket.getSocket)().emit(window.events.sendMsg, {
    message: value
  });
  input.value = "";
  appendMsg(value);
};

var handleNewMessage = function handleNewMessage(_ref) {
  var message = _ref.message,
      nickname = _ref.nickname;
  appendMsg(message, nickname);
};

exports.handleNewMessage = handleNewMessage;

if (sendMsg) {
  sendMsg.addEventListener("submit", handleSendMsg);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYXQuanMiXSwibmFtZXMiOlsibWVzc2FnZXMiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwic2VuZE1zZyIsImFwcGVuZE1zZyIsInRleHQiLCJuaWNrbmFtZSIsImxpIiwiY3JlYXRlRWxlbWVudCIsImlubmVySFRNTCIsImFwcGVuZENoaWxkIiwiaGFuZGxlU2VuZE1zZyIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJpbnB1dCIsInF1ZXJ5U2VsZWN0b3IiLCJ2YWx1ZSIsImVtaXQiLCJ3aW5kb3ciLCJldmVudHMiLCJtZXNzYWdlIiwiaGFuZGxlTmV3TWVzc2FnZSIsImFkZEV2ZW50TGlzdGVuZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFFQSxJQUFNQSxRQUFRLEdBQUdDLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixZQUF4QixDQUFqQjtBQUNBLElBQU1DLE9BQU8sR0FBR0YsUUFBUSxDQUFDQyxjQUFULENBQXdCLFdBQXhCLENBQWhCOztBQUVBLElBQU1FLFNBQVMsR0FBRyxTQUFaQSxTQUFZLENBQUNDLElBQUQsRUFBT0MsUUFBUCxFQUFvQjtBQUNwQyxNQUFNQyxFQUFFLEdBQUdOLFFBQVEsQ0FBQ08sYUFBVCxDQUF1QixJQUF2QixDQUFYO0FBQ0FELEVBQUFBLEVBQUUsQ0FBQ0UsU0FBSCxzQ0FDc0JILFFBQVEsR0FBRyxLQUFILEdBQVcsTUFEekMsZ0JBRUVBLFFBQVEsR0FBR0EsUUFBSCxHQUFjLEtBRnhCLHNCQUdZRCxJQUhaO0FBS0FMLEVBQUFBLFFBQVEsQ0FBQ1UsV0FBVCxDQUFxQkgsRUFBckI7QUFDRCxDQVJEOztBQVVBLElBQU1JLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsQ0FBQ0MsS0FBRCxFQUFXO0FBQy9CQSxFQUFBQSxLQUFLLENBQUNDLGNBQU47QUFDQSxNQUFNQyxLQUFLLEdBQUdYLE9BQU8sQ0FBQ1ksYUFBUixDQUFzQixPQUF0QixDQUFkO0FBRitCLE1BR3ZCQyxLQUh1QixHQUdiRixLQUhhLENBR3ZCRSxLQUh1QjtBQUkvQiwyQkFBWUMsSUFBWixDQUFpQkMsTUFBTSxDQUFDQyxNQUFQLENBQWNoQixPQUEvQixFQUF3QztBQUFFaUIsSUFBQUEsT0FBTyxFQUFFSjtBQUFYLEdBQXhDO0FBQ0FGLEVBQUFBLEtBQUssQ0FBQ0UsS0FBTixHQUFjLEVBQWQ7QUFDQVosRUFBQUEsU0FBUyxDQUFDWSxLQUFELENBQVQ7QUFDRCxDQVBEOztBQVNPLElBQU1LLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBbUIsT0FBMkI7QUFBQSxNQUF4QkQsT0FBd0IsUUFBeEJBLE9BQXdCO0FBQUEsTUFBZmQsUUFBZSxRQUFmQSxRQUFlO0FBQ3pERixFQUFBQSxTQUFTLENBQUNnQixPQUFELEVBQVVkLFFBQVYsQ0FBVDtBQUNELENBRk07Ozs7QUFJUCxJQUFJSCxPQUFKLEVBQWE7QUFDWEEsRUFBQUEsT0FBTyxDQUFDbUIsZ0JBQVIsQ0FBeUIsUUFBekIsRUFBbUNYLGFBQW5DO0FBQ0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBnZXRTb2NrZXQgfSBmcm9tIFwiLi9zb2NrZXRcIjtcclxuXHJcbmNvbnN0IG1lc3NhZ2VzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJqc01lc3NhZ2VzXCIpO1xyXG5jb25zdCBzZW5kTXNnID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJqc1NlbmRNc2dcIik7XHJcblxyXG5jb25zdCBhcHBlbmRNc2cgPSAodGV4dCwgbmlja25hbWUpID0+IHtcclxuICBjb25zdCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcclxuICBsaS5pbm5lckhUTUwgPSBgXHJcbiAgPHNwYW4gY2xhc3M9XCJhdXRob3IgJHtuaWNrbmFtZSA/IFwib3V0XCIgOiBcInNlbGZcIn1cIj4ke1xyXG4gICAgbmlja25hbWUgPyBuaWNrbmFtZSA6IFwiWW91XCJcclxuICB9Ojwvc3Bhbj4gJHt0ZXh0fVxyXG5gO1xyXG4gIG1lc3NhZ2VzLmFwcGVuZENoaWxkKGxpKTtcclxufTtcclxuXHJcbmNvbnN0IGhhbmRsZVNlbmRNc2cgPSAoZXZlbnQpID0+IHtcclxuICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gIGNvbnN0IGlucHV0ID0gc2VuZE1zZy5xdWVyeVNlbGVjdG9yKFwiaW5wdXRcIik7XHJcbiAgY29uc3QgeyB2YWx1ZSB9ID0gaW5wdXQ7XHJcbiAgZ2V0U29ja2V0KCkuZW1pdCh3aW5kb3cuZXZlbnRzLnNlbmRNc2csIHsgbWVzc2FnZTogdmFsdWUgfSk7XHJcbiAgaW5wdXQudmFsdWUgPSBcIlwiO1xyXG4gIGFwcGVuZE1zZyh2YWx1ZSk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgaGFuZGxlTmV3TWVzc2FnZSA9ICh7IG1lc3NhZ2UsIG5pY2tuYW1lIH0pID0+IHtcclxuICBhcHBlbmRNc2cobWVzc2FnZSwgbmlja25hbWUpO1xyXG59O1xyXG5cclxuaWYgKHNlbmRNc2cpIHtcclxuICBzZW5kTXNnLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgaGFuZGxlU2VuZE1zZyk7XHJcbn1cclxuIl19
},{"./socket":6}],2:[function(require,module,exports){
"use strict";

require("./socket");

require("./login");

require("./chat");

require("./paint");
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZha2VfYjljMjViMDcuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcIi4vc29ja2V0XCI7XHJcbmltcG9ydCBcIi4vbG9naW5cIjtcclxuaW1wb3J0IFwiLi9jaGF0XCI7XHJcbmltcG9ydCBcIi4vcGFpbnRcIjtcclxuIl19
},{"./chat":1,"./login":3,"./paint":5,"./socket":6}],3:[function(require,module,exports){
"use strict";

var _socket = require("./socket");

var body = document.querySelector("body");
var loginForm = document.getElementById("jsLogin");
var NICKNAME = "nickname";
var LOGGED_OUT = "loggedOut";
var LOGGED_IN = "loggedIn";
var nickname = localStorage.getItem(NICKNAME);

var logIn = function logIn(nickname) {
  // eslint-disable-next-line no-undef
  var socket = io("/");
  socket.emit(window.events.setNickname, {
    nickname: nickname
  });
  (0, _socket.initSockets)(socket);
};

if (nickname === null) {
  body.className = LOGGED_OUT;
} else {
  body.className = LOGGED_IN;
  logIn(nickname);
}

var handleFormSubmit = function handleFormSubmit(e) {
  e.preventDefault();
  var input = loginForm.querySelector("input");
  var value = input.value;
  input.value = "";
  localStorage.setItem(NICKNAME, value);
  body.className = LOGGED_IN;
  logIn(value);
};

if (loginForm) {
  loginForm.addEventListener("submit", handleFormSubmit);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLmpzIl0sIm5hbWVzIjpbImJvZHkiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJsb2dpbkZvcm0iLCJnZXRFbGVtZW50QnlJZCIsIk5JQ0tOQU1FIiwiTE9HR0VEX09VVCIsIkxPR0dFRF9JTiIsIm5pY2tuYW1lIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImxvZ0luIiwic29ja2V0IiwiaW8iLCJlbWl0Iiwid2luZG93IiwiZXZlbnRzIiwic2V0Tmlja25hbWUiLCJjbGFzc05hbWUiLCJoYW5kbGVGb3JtU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwiaW5wdXQiLCJ2YWx1ZSIsInNldEl0ZW0iLCJhZGRFdmVudExpc3RlbmVyIl0sIm1hcHBpbmdzIjoiOztBQUFBOztBQUVBLElBQU1BLElBQUksR0FBR0MsUUFBUSxDQUFDQyxhQUFULENBQXVCLE1BQXZCLENBQWI7QUFDQSxJQUFNQyxTQUFTLEdBQUdGLFFBQVEsQ0FBQ0csY0FBVCxDQUF3QixTQUF4QixDQUFsQjtBQUVBLElBQU1DLFFBQVEsR0FBRyxVQUFqQjtBQUNBLElBQU1DLFVBQVUsR0FBRyxXQUFuQjtBQUNBLElBQU1DLFNBQVMsR0FBRyxVQUFsQjtBQUVBLElBQU1DLFFBQVEsR0FBR0MsWUFBWSxDQUFDQyxPQUFiLENBQXFCTCxRQUFyQixDQUFqQjs7QUFFQSxJQUFNTSxLQUFLLEdBQUcsU0FBUkEsS0FBUSxDQUFDSCxRQUFELEVBQWM7QUFDMUI7QUFDQSxNQUFNSSxNQUFNLEdBQUdDLEVBQUUsQ0FBQyxHQUFELENBQWpCO0FBQ0FELEVBQUFBLE1BQU0sQ0FBQ0UsSUFBUCxDQUFZQyxNQUFNLENBQUNDLE1BQVAsQ0FBY0MsV0FBMUIsRUFBdUM7QUFBRVQsSUFBQUEsUUFBUSxFQUFSQTtBQUFGLEdBQXZDO0FBQ0EsMkJBQVlJLE1BQVo7QUFDRCxDQUxEOztBQU9BLElBQUlKLFFBQVEsS0FBSyxJQUFqQixFQUF1QjtBQUNyQlIsRUFBQUEsSUFBSSxDQUFDa0IsU0FBTCxHQUFpQlosVUFBakI7QUFDRCxDQUZELE1BRU87QUFDTE4sRUFBQUEsSUFBSSxDQUFDa0IsU0FBTCxHQUFpQlgsU0FBakI7QUFDQUksRUFBQUEsS0FBSyxDQUFDSCxRQUFELENBQUw7QUFDRDs7QUFFRCxJQUFNVyxnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQW1CLENBQUNDLENBQUQsRUFBTztBQUM5QkEsRUFBQUEsQ0FBQyxDQUFDQyxjQUFGO0FBQ0EsTUFBTUMsS0FBSyxHQUFHbkIsU0FBUyxDQUFDRCxhQUFWLENBQXdCLE9BQXhCLENBQWQ7QUFGOEIsTUFHdEJxQixLQUhzQixHQUdaRCxLQUhZLENBR3RCQyxLQUhzQjtBQUk5QkQsRUFBQUEsS0FBSyxDQUFDQyxLQUFOLEdBQWMsRUFBZDtBQUNBZCxFQUFBQSxZQUFZLENBQUNlLE9BQWIsQ0FBcUJuQixRQUFyQixFQUErQmtCLEtBQS9CO0FBQ0F2QixFQUFBQSxJQUFJLENBQUNrQixTQUFMLEdBQWlCWCxTQUFqQjtBQUNBSSxFQUFBQSxLQUFLLENBQUNZLEtBQUQsQ0FBTDtBQUNELENBUkQ7O0FBVUEsSUFBSXBCLFNBQUosRUFBZTtBQUNiQSxFQUFBQSxTQUFTLENBQUNzQixnQkFBVixDQUEyQixRQUEzQixFQUFxQ04sZ0JBQXJDO0FBQ0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBpbml0U29ja2V0cyB9IGZyb20gXCIuL3NvY2tldFwiO1xyXG5cclxuY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpO1xyXG5jb25zdCBsb2dpbkZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImpzTG9naW5cIik7XHJcblxyXG5jb25zdCBOSUNLTkFNRSA9IFwibmlja25hbWVcIjtcclxuY29uc3QgTE9HR0VEX09VVCA9IFwibG9nZ2VkT3V0XCI7XHJcbmNvbnN0IExPR0dFRF9JTiA9IFwibG9nZ2VkSW5cIjtcclxuXHJcbmNvbnN0IG5pY2tuYW1lID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oTklDS05BTUUpO1xyXG5cclxuY29uc3QgbG9nSW4gPSAobmlja25hbWUpID0+IHtcclxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcclxuICBjb25zdCBzb2NrZXQgPSBpbyhcIi9cIik7XHJcbiAgc29ja2V0LmVtaXQod2luZG93LmV2ZW50cy5zZXROaWNrbmFtZSwgeyBuaWNrbmFtZSB9KTtcclxuICBpbml0U29ja2V0cyhzb2NrZXQpO1xyXG59O1xyXG5cclxuaWYgKG5pY2tuYW1lID09PSBudWxsKSB7XHJcbiAgYm9keS5jbGFzc05hbWUgPSBMT0dHRURfT1VUO1xyXG59IGVsc2Uge1xyXG4gIGJvZHkuY2xhc3NOYW1lID0gTE9HR0VEX0lOO1xyXG4gIGxvZ0luKG5pY2tuYW1lKTtcclxufVxyXG5cclxuY29uc3QgaGFuZGxlRm9ybVN1Ym1pdCA9IChlKSA9PiB7XHJcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gIGNvbnN0IGlucHV0ID0gbG9naW5Gb3JtLnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dFwiKTtcclxuICBjb25zdCB7IHZhbHVlIH0gPSBpbnB1dDtcclxuICBpbnB1dC52YWx1ZSA9IFwiXCI7XHJcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oTklDS05BTUUsIHZhbHVlKTtcclxuICBib2R5LmNsYXNzTmFtZSA9IExPR0dFRF9JTjtcclxuICBsb2dJbih2YWx1ZSk7XHJcbn07XHJcblxyXG5pZiAobG9naW5Gb3JtKSB7XHJcbiAgbG9naW5Gb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgaGFuZGxlRm9ybVN1Ym1pdCk7XHJcbn1cclxuIl19
},{"./socket":6}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handelDisconnected = exports.handleNewUser = void 0;
var body = document.querySelector("body");

var fireNotification = function fireNotification(text, color) {
  var notification = document.createElement("div");
  notification.innerText = text;
  notification.style.backgroundColor = color;
  notification.className = "notification";
  body.appendChild(notification);
};

var handleNewUser = function handleNewUser(_ref) {
  var nickname = _ref.nickname;
  fireNotification("".concat(nickname, " just joined"), "rgb(0, 122, 255");
};

exports.handleNewUser = handleNewUser;

var handelDisconnected = function handelDisconnected(_ref2) {
  var nickname = _ref2.nickname;
  fireNotification("".concat(nickname, " just left"), "rgb(255, 149, 0");
};

exports.handelDisconnected = handelDisconnected;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vdGlmaWNhdGlvbnMuanMiXSwibmFtZXMiOlsiYm9keSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImZpcmVOb3RpZmljYXRpb24iLCJ0ZXh0IiwiY29sb3IiLCJub3RpZmljYXRpb24iLCJjcmVhdGVFbGVtZW50IiwiaW5uZXJUZXh0Iiwic3R5bGUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJjbGFzc05hbWUiLCJhcHBlbmRDaGlsZCIsImhhbmRsZU5ld1VzZXIiLCJuaWNrbmFtZSIsImhhbmRlbERpc2Nvbm5lY3RlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsSUFBTUEsSUFBSSxHQUFHQyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsTUFBdkIsQ0FBYjs7QUFFQSxJQUFNQyxnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQW1CLENBQUNDLElBQUQsRUFBT0MsS0FBUCxFQUFpQjtBQUN4QyxNQUFNQyxZQUFZLEdBQUdMLFFBQVEsQ0FBQ00sYUFBVCxDQUF1QixLQUF2QixDQUFyQjtBQUNBRCxFQUFBQSxZQUFZLENBQUNFLFNBQWIsR0FBeUJKLElBQXpCO0FBQ0FFLEVBQUFBLFlBQVksQ0FBQ0csS0FBYixDQUFtQkMsZUFBbkIsR0FBcUNMLEtBQXJDO0FBQ0FDLEVBQUFBLFlBQVksQ0FBQ0ssU0FBYixHQUF5QixjQUF6QjtBQUNBWCxFQUFBQSxJQUFJLENBQUNZLFdBQUwsQ0FBaUJOLFlBQWpCO0FBQ0QsQ0FORDs7QUFRTyxJQUFNTyxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLE9BQWtCO0FBQUEsTUFBZkMsUUFBZSxRQUFmQSxRQUFlO0FBQzdDWCxFQUFBQSxnQkFBZ0IsV0FBSVcsUUFBSixtQkFBNEIsaUJBQTVCLENBQWhCO0FBQ0QsQ0FGTTs7OztBQUlBLElBQU1DLGtCQUFrQixHQUFHLFNBQXJCQSxrQkFBcUIsUUFBa0I7QUFBQSxNQUFmRCxRQUFlLFNBQWZBLFFBQWU7QUFDbERYLEVBQUFBLGdCQUFnQixXQUFJVyxRQUFKLGlCQUEwQixpQkFBMUIsQ0FBaEI7QUFDRCxDQUZNIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpO1xyXG5cclxuY29uc3QgZmlyZU5vdGlmaWNhdGlvbiA9ICh0ZXh0LCBjb2xvcikgPT4ge1xyXG4gIGNvbnN0IG5vdGlmaWNhdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgbm90aWZpY2F0aW9uLmlubmVyVGV4dCA9IHRleHQ7XHJcbiAgbm90aWZpY2F0aW9uLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGNvbG9yO1xyXG4gIG5vdGlmaWNhdGlvbi5jbGFzc05hbWUgPSBcIm5vdGlmaWNhdGlvblwiO1xyXG4gIGJvZHkuYXBwZW5kQ2hpbGQobm90aWZpY2F0aW9uKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBoYW5kbGVOZXdVc2VyID0gKHsgbmlja25hbWUgfSkgPT4ge1xyXG4gIGZpcmVOb3RpZmljYXRpb24oYCR7bmlja25hbWV9IGp1c3Qgam9pbmVkYCwgXCJyZ2IoMCwgMTIyLCAyNTVcIik7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgaGFuZGVsRGlzY29ubmVjdGVkID0gKHsgbmlja25hbWUgfSkgPT4ge1xyXG4gIGZpcmVOb3RpZmljYXRpb24oYCR7bmlja25hbWV9IGp1c3QgbGVmdGAsIFwicmdiKDI1NSwgMTQ5LCAwXCIpO1xyXG59O1xyXG4iXX0=
},{}],5:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handleFilled = exports.handleStrokedPath = exports.handleBeganPath = void 0;

var _socket = require("./socket");

var canvas = document.getElementById("jsCanvas");
var ctx = canvas.getContext("2d");
var colors = document.getElementsByClassName("jsColor");
var mode = document.getElementById("jsMode");
var INITIAL_COLOR = "#2c2c2c";
var CANVAS_SIZE = 700;
canvas.width = CANVAS_SIZE;
canvas.height = CANVAS_SIZE;
ctx.fillStyle = "white";
ctx.fillRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);
ctx.strokeStyle = INITIAL_COLOR;
ctx.fillStyle = INITIAL_COLOR;
ctx.lineWidth = 2.5;
var painting = false;
var filling = false;

function stopPainting() {
  painting = false;
}

function startPainting() {
  painting = true;
}

var beginPath = function beginPath(x, y) {
  ctx.beginPath();
  ctx.moveTo(x, y);
};

var strokePath = function strokePath(x, y) {
  var color = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  var currentColor = ctx.strokeStyle;

  if (color !== null) {
    ctx.strokeStyle = color;
  }

  ctx.lineTo(x, y);
  ctx.stroke();
  ctx.strokeStyle = currentColor;
};

function onMouseMove(event) {
  var x = event.offsetX;
  var y = event.offsetY;

  if (!painting) {
    beginPath(x, y);
    (0, _socket.getSocket)().emit(window.events.beginPath, {
      x: x,
      y: y
    });
  } else {
    strokePath(x, y);
    (0, _socket.getSocket)().emit(window.events.strokePath, {
      x: x,
      y: y,
      color: ctx.strokeStyle
    });
  }
}

function handleColorClick(event) {
  var color = event.target.style.backgroundColor;
  ctx.strokeStyle = color;
  ctx.fillStyle = color;
}

function handleModeClick() {
  if (filling === true) {
    filling = false;
    mode.innerText = "Paint";
  } else {
    filling = true;
    mode.innerText = "Fill";
  }
}

var fill = function fill() {
  var color = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  var currentColor = ctx.fillStyle;

  if (color !== null) {
    ctx.fillStyle = color;
  }

  ctx.fillRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);
  ctx.fillStyle = currentColor;
};

function handleCanvasClick() {
  if (filling) {
    fill();
    (0, _socket.getSocket)().emit(window.events.fill, {
      color: ctx.fillStyle
    });
  }
}

function handleCM(event) {
  event.preventDefault();
}

if (canvas) {
  canvas.addEventListener("mousemove", onMouseMove);
  canvas.addEventListener("mousedown", startPainting);
  canvas.addEventListener("mouseup", stopPainting);
  canvas.addEventListener("mouseleave", stopPainting);
  canvas.addEventListener("click", handleCanvasClick);
  canvas.addEventListener("contextmenu", handleCM);
}

Array.from(colors).forEach(function (color) {
  return color.addEventListener("click", handleColorClick);
});

if (mode) {
  mode.addEventListener("click", handleModeClick);
}

var handleBeganPath = function handleBeganPath(_ref) {
  var x = _ref.x,
      y = _ref.y;
  return beginPath(x, y);
};

exports.handleBeganPath = handleBeganPath;

var handleStrokedPath = function handleStrokedPath(_ref2) {
  var x = _ref2.x,
      y = _ref2.y,
      color = _ref2.color;
  return strokePath(x, y, color);
};

exports.handleStrokedPath = handleStrokedPath;

var handleFilled = function handleFilled(_ref3) {
  var color = _ref3.color;
  return fill(color);
};

exports.handleFilled = handleFilled;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhaW50LmpzIl0sIm5hbWVzIjpbImNhbnZhcyIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJjdHgiLCJnZXRDb250ZXh0IiwiY29sb3JzIiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsIm1vZGUiLCJJTklUSUFMX0NPTE9SIiwiQ0FOVkFTX1NJWkUiLCJ3aWR0aCIsImhlaWdodCIsImZpbGxTdHlsZSIsImZpbGxSZWN0Iiwic3Ryb2tlU3R5bGUiLCJsaW5lV2lkdGgiLCJwYWludGluZyIsImZpbGxpbmciLCJzdG9wUGFpbnRpbmciLCJzdGFydFBhaW50aW5nIiwiYmVnaW5QYXRoIiwieCIsInkiLCJtb3ZlVG8iLCJzdHJva2VQYXRoIiwiY29sb3IiLCJjdXJyZW50Q29sb3IiLCJsaW5lVG8iLCJzdHJva2UiLCJvbk1vdXNlTW92ZSIsImV2ZW50Iiwib2Zmc2V0WCIsIm9mZnNldFkiLCJlbWl0Iiwid2luZG93IiwiZXZlbnRzIiwiaGFuZGxlQ29sb3JDbGljayIsInRhcmdldCIsInN0eWxlIiwiYmFja2dyb3VuZENvbG9yIiwiaGFuZGxlTW9kZUNsaWNrIiwiaW5uZXJUZXh0IiwiZmlsbCIsImhhbmRsZUNhbnZhc0NsaWNrIiwiaGFuZGxlQ00iLCJwcmV2ZW50RGVmYXVsdCIsImFkZEV2ZW50TGlzdGVuZXIiLCJBcnJheSIsImZyb20iLCJmb3JFYWNoIiwiaGFuZGxlQmVnYW5QYXRoIiwiaGFuZGxlU3Ryb2tlZFBhdGgiLCJoYW5kbGVGaWxsZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFFQSxJQUFNQSxNQUFNLEdBQUdDLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixVQUF4QixDQUFmO0FBQ0EsSUFBTUMsR0FBRyxHQUFHSCxNQUFNLENBQUNJLFVBQVAsQ0FBa0IsSUFBbEIsQ0FBWjtBQUNBLElBQU1DLE1BQU0sR0FBR0osUUFBUSxDQUFDSyxzQkFBVCxDQUFnQyxTQUFoQyxDQUFmO0FBQ0EsSUFBTUMsSUFBSSxHQUFHTixRQUFRLENBQUND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cG9ydCB7IGdldFNvY2tldCB9IGZyb20gXCIuL3NvY2tldFwiO1xyXG5cclxuY29uc3QgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJqc0NhbnZhc1wiKTtcclxuY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcclxuY29uc3QgY29sb3JzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImpzQ29sb3JcIik7XHJcbmNvbnN0IG1vZGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImpzTW9kZVwiKTtcclxuXHJcbmNvbnN0IElOSVRJQUxfQ09MT1IgPSBcIiMyYzJjMmNcIjtcclxuY29uc3QgQ0FOVkFTX1NJWkUgPSA3MDA7XHJcblxyXG5jYW52YXMud2lkdGggPSBDQU5WQVNfU0laRTtcclxuY2FudmFzLmhlaWdodCA9IENBTlZBU19TSVpFO1xyXG5cclxuY3R4LmZpbGxTdHlsZSA9IFwid2hpdGVcIjtcclxuY3R4LmZpbGxSZWN0KDAsIDAsIENBTlZBU19TSVpFLCBDQU5WQVNfU0laRSk7XHJcbmN0eC5zdHJva2VTdHlsZSA9IElOSVRJQUxfQ09MT1I7XHJcbmN0eC5maWxsU3R5bGUgPSBJTklUSUFMX0NPTE9SO1xyXG5jdHgubGluZVdpZHRoID0gMi41O1xyXG5cclxubGV0IHBhaW50aW5nID0gZmFsc2U7XHJcbmxldCBmaWxsaW5nID0gZmFsc2U7XHJcblxyXG5mdW5jdGlvbiBzdG9wUGFpbnRpbmcoKSB7XHJcbiAgcGFpbnRpbmcgPSBmYWxzZTtcclxufVxyXG5cclxuZnVuY3Rpb24gc3RhcnRQYWludGluZygpIHtcclxuICBwYWludGluZyA9IHRydWU7XHJcbn1cclxuXHJcbmNvbnN0IGJlZ2luUGF0aCA9ICh4LCB5KSA9PiB7XHJcbiAgY3R4LmJlZ2luUGF0aCgpO1xyXG4gIGN0eC5tb3ZlVG8oeCwgeSk7XHJcbn07XHJcblxyXG5jb25zdCBzdHJva2VQYXRoID0gKHgsIHksIGNvbG9yID0gbnVsbCkgPT4ge1xyXG4gIGxldCBjdXJyZW50Q29sb3IgPSBjdHguc3Ryb2tlU3R5bGU7XHJcbiAgaWYgKGNvbG9yICE9PSBudWxsKSB7XHJcbiAgICBjdHguc3Ryb2tlU3R5bGUgPSBjb2xvcjtcclxuICB9XHJcbiAgY3R4LmxpbmVUbyh4LCB5KTtcclxuICBjdHguc3Ryb2tlKCk7XHJcbiAgY3R4LnN0cm9rZVN0eWxlID0gY3VycmVudENvbG9yO1xyXG59O1xyXG5cclxuZnVuY3Rpb24gb25Nb3VzZU1vdmUoZXZlbnQpIHtcclxuICBjb25zdCB4ID0gZXZlbnQub2Zmc2V0WDtcclxuICBjb25zdCB5ID0gZXZlbnQub2Zmc2V0WTtcclxuICBpZiAoIXBhaW50aW5nKSB7XHJcbiAgICBiZWdpblBhdGgoeCwgeSk7XHJcbiAgICBnZXRTb2NrZXQoKS5lbWl0KHdpbmRvdy5ldmVudHMuYmVnaW5QYXRoLCB7IHgsIHkgfSk7XHJcbiAgfSBlbHNlIHtcclxuICAgIHN0cm9rZVBhdGgoeCwgeSk7XHJcbiAgICBnZXRTb2NrZXQoKS5lbWl0KHdpbmRvdy5ldmVudHMuc3Ryb2tlUGF0aCwge1xyXG4gICAgICB4LFxyXG4gICAgICB5LFxyXG4gICAgICBjb2xvcjogY3R4LnN0cm9rZVN0eWxlLFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBoYW5kbGVDb2xvckNsaWNrKGV2ZW50KSB7XHJcbiAgY29uc3QgY29sb3IgPSBldmVudC50YXJnZXQuc3R5bGUuYmFja2dyb3VuZENvbG9yO1xyXG4gIGN0eC5zdHJva2VTdHlsZSA9IGNvbG9yO1xyXG4gIGN0eC5maWxsU3R5bGUgPSBjb2xvcjtcclxufVxyXG5cclxuZnVuY3Rpb24gaGFuZGxlTW9kZUNsaWNrKCkge1xyXG4gIGlmIChmaWxsaW5nID09PSB0cnVlKSB7XHJcbiAgICBmaWxsaW5nID0gZmFsc2U7XHJcbiAgICBtb2RlLmlubmVyVGV4dCA9IFwiUGFpbnRcIjtcclxuICB9IGVsc2Uge1xyXG4gICAgZmlsbGluZyA9IHRydWU7XHJcbiAgICBtb2RlLmlubmVyVGV4dCA9IFwiRmlsbFwiO1xyXG4gIH1cclxufVxyXG5cclxuY29uc3QgZmlsbCA9IChjb2xvciA9IG51bGwpID0+IHtcclxuICBsZXQgY3VycmVudENvbG9yID0gY3R4LmZpbGxTdHlsZTtcclxuICBpZiAoY29sb3IgIT09IG51bGwpIHtcclxuICAgIGN0eC5maWxsU3R5bGUgPSBjb2xvcjtcclxuICB9XHJcbiAgY3R4LmZpbGxSZWN0KDAsIDAsIENBTlZBU19TSVpFLCBDQU5WQVNfU0laRSk7XHJcbiAgY3R4LmZpbGxTdHlsZSA9IGN1cnJlbnRDb2xvcjtcclxufTtcclxuXHJcbmZ1bmN0aW9uIGhhbmRsZUNhbnZhc0NsaWNrKCkge1xyXG4gIGlmIChmaWxsaW5nKSB7XHJcbiAgICBmaWxsKCk7XHJcbiAgICBnZXRTb2NrZXQoKS5lbWl0KHdpbmRvdy5ldmVudHMuZmlsbCwgeyBjb2xvcjogY3R4LmZpbGxTdHlsZSB9KTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGhhbmRsZUNNKGV2ZW50KSB7XHJcbiAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxufVxyXG5cclxuaWYgKGNhbnZhcykge1xyXG4gIGNhbnZhcy5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsIG9uTW91c2VNb3ZlKTtcclxuICBjYW52YXMuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLCBzdGFydFBhaW50aW5nKTtcclxuICBjYW52YXMuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNldXBcIiwgc3RvcFBhaW50aW5nKTtcclxuICBjYW52YXMuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbGVhdmVcIiwgc3RvcFBhaW50aW5nKTtcclxuICBjYW52YXMuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGhhbmRsZUNhbnZhc0NsaWNrKTtcclxuICBjYW52YXMuYWRkRXZlbnRMaXN0ZW5lcihcImNvbnRleHRtZW51XCIsIGhhbmRsZUNNKTtcclxufVxyXG5cclxuQXJyYXkuZnJvbShjb2xvcnMpLmZvckVhY2goKGNvbG9yKSA9PlxyXG4gIGNvbG9yLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBoYW5kbGVDb2xvckNsaWNrKVxyXG4pO1xyXG5cclxuaWYgKG1vZGUpIHtcclxuICBtb2RlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBoYW5kbGVNb2RlQ2xpY2spO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgaGFuZGxlQmVnYW5QYXRoID0gKHsgeCwgeSB9KSA9PiBiZWdpblBhdGgoeCwgeSk7XHJcbmV4cG9ydCBjb25zdCBoYW5kbGVTdHJva2VkUGF0aCA9ICh7IHgsIHksIGNvbG9yIH0pID0+IHN0cm9rZVBhdGgoeCwgeSwgY29sb3IpO1xyXG5leHBvcnQgY29uc3QgaGFuZGxlRmlsbGVkID0gKHsgY29sb3IgfSkgPT4gZmlsbChjb2xvcik7XHJcbiJdfQ==
},{"./socket":6}],6:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initSockets = exports.getSocket = void 0;

var _notifications = require("./notifications");

var _chat = require("./chat");

var _paint = require("./paint");

var socket = null;

var getSocket = function getSocket() {
  return socket;
};

exports.getSocket = getSocket;

var initSockets = function initSockets(aSocket) {
  var _window = window,
      events = _window.events;
  socket = aSocket;
  socket.on(events.newUser, _notifications.handleNewUser);
  socket.on(events.disconnected, _notifications.handelDisconnected);
  socket.on(events.newMsg, _chat.handleNewMessage);
  socket.on(events.beganPath, _paint.handleBeganPath);
  socket.on(events.strokedPath, _paint.handleStrokedPath);
  socket.on(events.filled, _paint.handleFilled);
};

exports.initSockets = initSockets;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNvY2tldC5qcyJdLCJuYW1lcyI6WyJzb2NrZXQiLCJnZXRTb2NrZXQiLCJpbml0U29ja2V0cyIsImFTb2NrZXQiLCJ3aW5kb3ciLCJldmVudHMiLCJvbiIsIm5ld1VzZXIiLCJoYW5kbGVOZXdVc2VyIiwiZGlzY29ubmVjdGVkIiwiaGFuZGVsRGlzY29ubmVjdGVkIiwibmV3TXNnIiwiaGFuZGxlTmV3TWVzc2FnZSIsImJlZ2FuUGF0aCIsImhhbmRsZUJlZ2FuUGF0aCIsInN0cm9rZWRQYXRoIiwiaGFuZGxlU3Ryb2tlZFBhdGgiLCJmaWxsZWQiLCJoYW5kbGVGaWxsZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFFQSxJQUFJQSxNQUFNLEdBQUcsSUFBYjs7QUFFTyxJQUFNQyxTQUFTLEdBQUcsU0FBWkEsU0FBWTtBQUFBLFNBQU1ELE1BQU47QUFBQSxDQUFsQjs7OztBQUVBLElBQU1FLFdBQVcsR0FBRyxTQUFkQSxXQUFjLENBQUNDLE9BQUQsRUFBYTtBQUFBLGdCQUNuQkMsTUFEbUI7QUFBQSxNQUM5QkMsTUFEOEIsV0FDOUJBLE1BRDhCO0FBRXRDTCxFQUFBQSxNQUFNLEdBQUdHLE9BQVQ7QUFDQUgsRUFBQUEsTUFBTSxDQUFDTSxFQUFQLENBQVVELE1BQU0sQ0FBQ0UsT0FBakIsRUFBMEJDLDRCQUExQjtBQUNBUixFQUFBQSxNQUFNLENBQUNNLEVBQVAsQ0FBVUQsTUFBTSxDQUFDSSxZQUFqQixFQUErQkMsaUNBQS9CO0FBQ0FWLEVBQUFBLE1BQU0sQ0FBQ00sRUFBUCxDQUFVRCxNQUFNLENBQUNNLE1BQWpCLEVBQXlCQyxzQkFBekI7QUFDQVosRUFBQUEsTUFBTSxDQUFDTSxFQUFQLENBQVVELE1BQU0sQ0FBQ1EsU0FBakIsRUFBNEJDLHNCQUE1QjtBQUNBZCxFQUFBQSxNQUFNLENBQUNNLEVBQVAsQ0FBVUQsTUFBTSxDQUFDVSxXQUFqQixFQUE4QkMsd0JBQTlCO0FBQ0FoQixFQUFBQSxNQUFNLENBQUNNLEVBQVAsQ0FBVUQsTUFBTSxDQUFDWSxNQUFqQixFQUF5QkMsbUJBQXpCO0FBQ0QsQ0FUTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGhhbmRsZU5ld1VzZXIsIGhhbmRlbERpc2Nvbm5lY3RlZCB9IGZyb20gXCIuL25vdGlmaWNhdGlvbnNcIjtcclxuaW1wb3J0IHsgaGFuZGxlTmV3TWVzc2FnZSB9IGZyb20gXCIuL2NoYXRcIjtcclxuaW1wb3J0IHsgaGFuZGxlQmVnYW5QYXRoLCBoYW5kbGVTdHJva2VkUGF0aCwgaGFuZGxlRmlsbGVkIH0gZnJvbSBcIi4vcGFpbnRcIjtcclxuXHJcbmxldCBzb2NrZXQgPSBudWxsO1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldFNvY2tldCA9ICgpID0+IHNvY2tldDtcclxuXHJcbmV4cG9ydCBjb25zdCBpbml0U29ja2V0cyA9IChhU29ja2V0KSA9PiB7XHJcbiAgY29uc3QgeyBldmVudHMgfSA9IHdpbmRvdztcclxuICBzb2NrZXQgPSBhU29ja2V0O1xyXG4gIHNvY2tldC5vbihldmVudHMubmV3VXNlciwgaGFuZGxlTmV3VXNlcik7XHJcbiAgc29ja2V0Lm9uKGV2ZW50cy5kaXNjb25uZWN0ZWQsIGhhbmRlbERpc2Nvbm5lY3RlZCk7XHJcbiAgc29ja2V0Lm9uKGV2ZW50cy5uZXdNc2csIGhhbmRsZU5ld01lc3NhZ2UpO1xyXG4gIHNvY2tldC5vbihldmVudHMuYmVnYW5QYXRoLCBoYW5kbGVCZWdhblBhdGgpO1xyXG4gIHNvY2tldC5vbihldmVudHMuc3Ryb2tlZFBhdGgsIGhhbmRsZVN0cm9rZWRQYXRoKTtcclxuICBzb2NrZXQub24oZXZlbnRzLmZpbGxlZCwgaGFuZGxlRmlsbGVkKTtcclxufTtcclxuIl19
},{"./chat":1,"./notifications":4,"./paint":5}]},{},[2])