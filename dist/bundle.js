'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);

class Drax extends React__default.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false
    };
  }

  static getDerivedStateFromError(error) {
    return {
      hasError: true,
      error
    };
  }

  render() {
    if (this.state.hasError) {
      return React__default.createElement(React__default.Fragment, null, React__default.createElement("h1", null, "Nothing goes over my head, I would catch it."), React__default.createElement("pre", null, this.state.error));
    }

    return this.props.children;
  }

}

var index = ((appRoot = 'root') => {
  const [root, updateRoot] = React.useState();
  React.useEffect(() => {
    const docRoot = document.getElementById(appRoot);
    updateRoot(docRoot);
  });

  const snap = () => root.remove();

  return [snap];
});

var index$1 = (() => React__default.createElement("h1", null, "I am groot"));

const weapons = ['🔪', '⚔️', '🗡', '💣', '💥', '🔫', '🧨', '🛡'];
var index$2 = (({
  children
}) => React__default.Children.map(children, child => React__default.createElement(React__default.Fragment, null, React__default.createElement("span", {
  role: "image"
}, weapons[Math.floor(Math.random() * weapons.length)]), child, React__default.createElement("span", {
  role: "image"
}, weapons[Math.floor(Math.random() * weapons.length)]))));

exports.Drax = Drax;
exports.Groot = index$1;
exports.Rocket = index$2;
exports.useThanos = index;
