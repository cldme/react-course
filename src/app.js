class IndecisionApp extends React.Component {
    constructor(props) {
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            options: props.options
        };
    }
    handleDeleteOptions() {
        this.setState(() => ({
            options: []
        }));
    }
    handlePick() {
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum];
        alert(option);
    }
    handleAddOption(option) {
        if (!option) {
            return 'Enter valid value to add item.';
        } else if (this.state.options.indexOf(option) > -1) {
            return 'This option already exists! Please enter different options.';
        }

        this.setState((prevState) => {
            return {
                options: prevState.options.concat(option)
            };
        });
    }
    render() {
        const title = 'Indecision';
        const subtitle = 'Put your life in the hands of a computer.';

        return (
            <div>
                <Header title={title} subtitle={subtitle}/>
                <Action 
                    hasOptions={this.state.options.length > 0}
                    handlePick={this.handlePick}
                />
                <Options 
                    options={this.state.options}
                    handleDeleteOptions={this.handleDeleteOptions}
                />
                <AddOption 
                    handleAddOption={this.handleAddOption}
                />
            </div>
        );
    }
}

IndecisionApp.defaultProps = {
    options: []
};

const Header = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            <h2>{props.subtitle}</h2>
        </div>
    );
};

const Action = (props) => {
    return (
        <div>
            <button onClick={props.handlePick} disabled={!props.hasOptions}>What should I do?</button>
        </div>
    );
};

const Options = (props) => {
    return (
        <div>
            <button onClick={props.handleDeleteOptions}>Remove All</button>
            <ul>
                {props.options.map((option) => <Option key={option} option={option}/>)}
            </ul>
        </div>
    );
};

const Option = (props) => {
    return (
        <div>
            <li>{props.option}</li>
        </div>
    );
};

class AddOption extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            error: undefined
        };
    }
    handleAddOption(e) {
        e.preventDefault();

        const option = e.target.elements.option.value.trim();

        e.target.elements.option.value = '';
        
        const error = this.props.handleAddOption(option);
        this.setState(() => {
            return { 
                error: error 
            };
        });
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleAddOption}>
                    <input type='text' name='option'/>
                    <button>Add Option</button>
                    {this.state.error && <p>{this.state.error}</p>}
                </form>
            </div>
        );
    }
}

ReactDOM.render(<IndecisionApp options={[]}/>, document.getElementById('app'));