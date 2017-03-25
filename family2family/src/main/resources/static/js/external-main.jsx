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
                <span>Congrats {this.state.person.givenName}, you are a Mentor/Mentee.</span>
            </div>
        );
    }
}

class AlertComponent extends React.Component{
    render() {
        return (
            <div>
                <h3>The will be the date of the alert</h3>
                <p>
                    this will be the message of the alert.
                </p>
            </div>
        )
    }
}

class MatchContactComponent extends React.Component{


    render(){

        return (
            <div className="contact-information-box">
                    <div className="component-box-title">My Match's Contact Information</div>
                    <ul>
                        <ul >Daytime Phone Number : {this.props.dayPhoneNumber}</ul>
                        <ul >Other Phone Number : {this.props.otherPhoneNumber}</ul>
                        <ul >Email : {this.props.email}</ul>
                        <ul >Alternative Email : {this.props.altEmail}</ul>
                        <ul >Location : {this.props.location}</ul>
                    </ul>
            </div>
        )
    }
}

class Notes extends React.Component{
    render(){
        return(
            <div className="note-box">
                <div className="component-box-title">
                    My Notes:
                </div>
                <textarea rows="6" cols="50" className="notes-textarea">
                </textarea>
        </div>);
    }
}
class AppContent extends React.Component {
    //TODO add routing or page state handling
    render() {
        return (
            <div>
                <AlreadySignedIn />
                <div className="row-one">
                        <div className="component-box"><MatchContactComponent dayPhoneNumber="123456789" otherPhoneNumber="987654321" email="something@gmail.com" altEmail="somethingelse@gmail.com" location="here.exe" /></div>
                        <div className="component-box"><Notes /></div>
                </div>
            </div>
        );
    }
}


ReactDOM.render(<AppContent />, document.getElementById('appContent'));