import React, { Component } from 'react';
import axios from 'axios';

class FindUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: [],
            userNumber: '',
        }
        this.onClickHanduler = this.onClickHanduler.bind(this);
    }
    onClickHanduler(event) {
        event.preventDefault();
        let data = {
            phoneNumber: this.state.userNumber,
        };
        let url = '/api/user';
        axios.post(url, { data })
            .then(res => {
                const user = res.data;
                this.setState({ user: user.user });
            }).catch((err) => {
                console.error(err);
            });
    }

    render() {
        return (
            <div className='container'>
                <form >
                    <div >
                        <label>User Phone Number</label>
                        <input type='number' name='userNumber' value={this.state.userNumber} onChange={(e) => this.setState({ userNumber: e.target.value })} />
                    </div>
                    <button onClick={e => this.onClickHanduler(e)}>Find</button>
                    {this.state.user.map((user => (
                        <div>
                            <img src={'data:image/bmp;base64,' + user.image} height='100px' width='100px' />
                            <p>User : {user.user_name}</p>
                            <p>Phone Number: {user.phone_number}</p>
                            <p>Reg Date: {dateFormate(new Date(user.createdOn))}</p>
                        </div>
                    )))}
                </form>
            </div>

        )
    }
}
function dateFormate(valueDate) {
    let today = valueDate;
    today = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate('dd');
    return today;
}
export default FindUser;
