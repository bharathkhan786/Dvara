import React, { Component } from 'react';
import axios from 'axios';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
class AddUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: '',
            phoneNumber: '',
            fileName: ''
        }
        this.onClickHanduler = this.onClickHanduler.bind(this);
        this.onFileUpload = this.onFileUpload.bind(this);

    }
    onClickHanduler() {
        let data = {
            userName: this.state.userName,
            phoneNumber: this.state.phoneNumber,
            fileName: this.state.fileName
        };
        axios.post('/api/tasks/create', { data })
            .then((res) => {
                console.log(`Status: ${res.status}`);
                console.log('Body: ', res.data);
            }).catch((err) => {
                console.error(err);
            });
    }
    onFileUpload(event) {

        const field_name = event.target.name;

        let input = event.target;


        var files = input.files;
        let fileData = new Blob([files[0]]);
        var promise = new Promise((resolve, reject) => {
            var reader = new FileReader();
            reader.readAsDataURL(fileData);
            reader.onload = function () {
                var arrayBuffer = reader.result;
                resolve(arrayBuffer);
            }
        });

        promise.then((data) => {
            let field = data.toString().split('base64,');
            this.state[field_name] = field[1];
        }).catch(function (err) {
            console.log('Error: ', err);
        });
        return this.setState({ fileName: this.state.fileName });

    }

    render() {
        return (
            <div className='container'>
                <form >
                    <div >
                        <label>User Name</label>
                        <input type='text' name='userName' value={this.state.userName} onChange={(e) => this.setState({ userName: e.target.value })} />
                    </div>
                    <div ><label>Phone Number</label>
                        <input type='number' name='phoneNumber' value={this.state.phoneNumber} onChange={(e) => this.setState({ phoneNumber: e.target.value })} /></div>
                    <div > <label>Upload File</label>
                        <input type='file' name='fileName' onChange={this.onFileUpload} />
                    </div>
                    <button onClick={this.onClickHanduler}>Save</button>
                </form>
            </div >

        )
    }
}

export default AddUser;
