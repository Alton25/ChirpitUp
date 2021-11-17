import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';

class SingleChirp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            objects: []
        }
        this.deleteChirp = this.deleteChirp.bind(this);
    }

    componentDidMount() {
        let url = '/chirps/' + this.props.match.params.id;
        fetch(url, {
            method: 'GET',
            headers: new Headers({ 'Content-Type': 'application/json' })
        })
            .then(response => response.json())
            .then(object => this.setState({ objects: object[0] }))
    }

    deleteChirp(event) {
        let url = '/chirps/' + this.props.match.params.id;
        fetch(url, {
            method: 'DELETE',
            headers: new Headers({ 'Content-Type': 'application/json' })
        })
        .then(this.props.history.push('/'))
    }

    render() {
        return (
            <Fragment>
                <div className="container">
                    <div className="row text-left my-2">
                        <div className="card w-100">
                            <div className="card-header">
                                <div className="media">
                                    <img className="Avatar rounded-circle border border-dark mr-3"
                                        src="https://orig00.deviantart.net/b48b/f/2014/242/5/7/profile_picture_by_sonic_the_blue_blur-d7xal3o.jpg"
                                        alt="SANIC"
                                        style={{ height: `50px`, width: `50px` }}
                                    />
                                    <div className="media-body">
                                        <h5 className="d-inline font-weight-bold">Luke</h5>
                                        <h6 className="text-muted">Chirpped:</h6>
                                    </div>
                                </div>
                            </div>
                            <p className="card-text p-1 m-1">{this.state.objects.text}</p>
                            <h6 className="card-subtitle p-1 m-1 text-muted font-weight-light">- {this.props.match.params.id}</h6>
                            <Link className="btn btn-primary my-1" to="/">Go Back to All Chirps</Link>
                            <Link className="btn btn-secondary my-1" to={"/chirps/" + this.props.match.params.id + "/edit"}>Edit Chirp</Link>
                            <button onClick={this.deleteChirp} className="btn btn-danger my-1">Delete Chirp</button>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }

}

export default SingleChirp;