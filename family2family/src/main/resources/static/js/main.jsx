
class NavBarComponent extends React.Component {
    render() {
        return(
            <nav className="navbar ">
                <div className="container-fluid">
                    <ul className="nav navbar-nav">
                        <li className="active"><a href="#">Contact Entry</a></li>
                        <li><a href="#Page1">Find a Mentor</a></li>
                        <li><a href="#Page2">Admin Settings</a></li>
                    </ul>
                </div>
            </nav>
        )
    }
}

class AlreadySignedIn extends React.Component {
    constructor(props) {
        super(props);

        this.state = {person: []};
    }

    componentWillMount() {
        $.getJSON('/api/user').then((data) => {
            this.setState({person: data});
        });
    }

    render() {
        return(
            <div>
                <span>Congrats {this.state.person.givenName}, you are signed in.</span>
            </div>
        );
    }
}

class AppContent extends React.Component {
    //TODO add routing or page state handling
    render() {
        return (
            <div>
                <NavBarComponent />
                <AlreadySignedIn />
            </div>
        );
    }
}

ReactDOM.render(<AppContent />, document.getElementById('appContent'));