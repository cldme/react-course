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
            <button onClick={onToggle}>{isVisible ? 'Hide details' : 'Show details'}</button>
            {isVisible && (
                <div>
                    <p>Hey. These are some details you can now see.</p>
                </div>
            )}
        </div>
    );

    ReactDOM.render(template, root);
};

render();