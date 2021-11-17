import React, { useState } from 'react';
import { render } from 'react-dom';
import React from "react";
import { v4 as uuidv4 } from 'uuid';
import moment from "moment";
import Chirp from "./Chirp";

class AddChirp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            content: '',
            id: '',
            chirp: []
        };
        this.addChirps = this.addChirps.bind(this);
    };

     addChirps(e) {
        e.preventDefault();
        
        fetch('/chirps', {
            method: 'POST',
            body: JSON.stringify(content, id),
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        })
     }

    handleContent(e) {
        this.setState({ content: e.target.value })
    }
    handleID(e) {
        this.setState({ id: e.target.value })
    }
    
    render() {
        return (
            <>
                <main>
                    <h1 className="bg-danger">RUN</h1>
                    <section>
                        <div className="col-md-3">
                            <form className="form-group">
                                <label>
                                    Username
                                    <input value={this.state.content} onChange={e => this.handleContent(e)} />
                                </label>
                                <label>
                                    whatUSay
                                    <input value={this.state.id} onChange={e => this.handleID(e)} />
                                </label>

                            </form>
                        </div>
                    </section>
                </main>
                {this.state.chirp.map((chirp) => <Chirp chirp={chirp} key={chirp.id} />)}
            </>
        )
    };
}

export default AddChirp;