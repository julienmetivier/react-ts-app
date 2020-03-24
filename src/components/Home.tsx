import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { RouteComponentProps } from 'react-router';
import { Link } from 'react-router-dom';

export class Home extends Component<HomeProps, HomeState> {
    constructor(props: HomeProps) {
        super(props);
    }

    render() {
        return (
            <div>
                <div className="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light">
                    <div className="col-md-5 p-lg-5 mx-auto my-5">
                        <h1 className="display-4 font-weight-normal">Welcome!</h1>
                        <p className="lead font-weight-normal">Have a glimpse at all the First Gen Pokemon existing</p>
                        <Link className="btn btn-outline-secondary" to="/pokemon">Look for all pokemons</Link>
                    </div>
                </div>
                <div className="d-md-flex flex-md-equal w-100">
                    <div className="col-6 p-3">
                        <div className="bg-dark pt-3 px-3 pt-md-5 px-md-5 col-12 text-center text-white overflow-hidden">
                            <div className="my-3 py-3">
                                <h2 className="display-5">Another headline</h2>
                                <p className="lead">And an even wittier subheading.</p>
                            </div>
                            <div className="bg-light shadow-sm mx-auto round-edge"></div>
                        </div>
                    </div>
                    <div className="col-6 p-3">
                        <div className="bg-light pt-3 px-3 pt-md-5 px-md-5 col-12 text-center overflow-hidden">
                            <div className="my-3 p-3">
                                <h2 className="display-5">Another headline</h2>
                                <p className="lead">And an even wittier subheading.</p>
                            </div>
                            <div className="bg-dark shadow-sm mx-auto round-edge"></div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

interface HomeProps extends RouteComponentProps<{ name: string }> {

}

interface HomeState {
}

export default Home
