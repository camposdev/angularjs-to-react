'use strict';

var app = angular.module('myApp', ['react']);

app.controller('mainController', function ($scope) {
  var vm = this;

  vm.initialCounter = 10;
});

app.directive('counterComponent', function (reactDirective) {
  return reactDirective(CounterComponent);
});
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var alignCenter = {
  textAlign: 'center'
};
var alignRight = {
  textAlign: 'right'
};

var CounterComponent = function (_React$Component) {
  _inherits(CounterComponent, _React$Component);

  function CounterComponent(props) {
    _classCallCheck(this, CounterComponent);

    var _this = _possibleConstructorReturn(this, (CounterComponent.__proto__ || Object.getPrototypeOf(CounterComponent)).call(this, props));

    _this.state = {
      counter: _this.props.initialCounter
    };

    _this.changeCount = _this.changeCount.bind(_this);
    return _this;
  }

  _createClass(CounterComponent, [{
    key: 'changeCount',
    value: function changeCount(type, qtd) {
      var curr = this.state.counter;
      var calc = type === 'DECREMENT' ? curr - 1 : curr + 1;
      this.setState({ counter: calc });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return React.createElement(
        'div',
        { className: 'row' },
        React.createElement(
          'div',
          { className: 'five columns', style: alignRight },
          React.createElement(
            'button',
            { onClick: function onClick() {
                return _this2.changeCount('DECREMENT', 5);
              } },
            'Decrement'
          )
        ),
        React.createElement(
          'div',
          { className: 'two columns', style: alignCenter },
          React.createElement(
            'h2',
            null,
            this.state.counter
          )
        ),
        React.createElement(
          'div',
          { className: 'five columns' },
          React.createElement(
            'button',
            { onClick: function onClick() {
                return _this2.changeCount('INCREMENT', 5);
              } },
            'Increment'
          )
        )
      );
    }
  }]);

  return CounterComponent;
}(React.Component);

CounterComponent.propTypes = {
  initialCounter: React.PropTypes.string
};
//# sourceMappingURL=simple.js.map
