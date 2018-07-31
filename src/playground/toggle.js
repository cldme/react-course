let isVisible = false;

const onToggle = () => {
    isVisible = !isVisible;
    render();
};

const root = document.querySelector('#app');

const render = () => {
    const template = (
        <div>
            <h1>Visibility Toggle</h1>
            <button onClick={onToggle}>{isVisible ? 'Hide' : 'Show'} details</button>
            <p style={{display: isVisible ? 'block' : 'none'}}>Hey. These are some details you can now see!</p>
        </div>
    );

    ReactDOM.render(template, root);
};

render();