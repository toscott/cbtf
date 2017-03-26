class AdminNotes extends React.Component {

    render() {
        return (
            <div>
                <h4>Notes</h4>
                <table>
                    <tbody>
                        <tr>
                            <td>Administrator Notes</td>
                            <td>Mentor's/Mentee's Notes</td>
                        </tr>
                        <tr>
                            <td> <textarea name="admin-message" rows="7" cols="30"></textarea></td>
                            <td> {this.props.notes.mentorMenteeNotes}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

var notes = {
    mentorMenteeNotes:" No notes at this time "
};

ReactDOM.render(<AdminNotes notes={notes} />, document.getElementById('root'));