'use strict';

var isVisible = false;

var onToggle = function onToggle() {
    isVisible = !isVisible;
    render();
};

var root = document.querySelector('#app');

var render = function render() {
    var template = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            'Visibility Toggle'
        ),
        React.createElement(
            'button',
            { onClick: onToggle },
            isVisible ? 'Hide' : 'Show',
            ' details'
        ),
        React.createElement(
            'p',
            { style: { display: isVisible ? 'block' : 'none' } },
            'Hey. These are some details you can now see!'
        )
    );

    ReactDOM.render(template, root);
};

render();
