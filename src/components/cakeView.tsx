import * as React from 'react';
import '../styles/App.css';
import 'bulma/css/bulma.css';
import { connect } from 'react-redux';
import { ICake, ICakeAppStore } from '../models';
import { Link } from 'react-router-dom';

interface IProps {
    cakes: ICake[];
    match: any;
}
class CakeView extends React.Component<IProps> {
    public render() {
        const cake: ICake | undefined = this.props.cakes.find((c: ICake) => c.id === this.props.match.params.id);
        if (!cake) {
            return (<div>No cake found</div>)
        }
        return (
            <div>
                <nav className="navbar" role="navigation" aria-label="main navigation">
                    <Link to={`/`}>
                        <div className="navbar-item">Home</div>
                    </Link>
                    <Link to={`/addcake/`}>
                        <div className="navbar-item">Add New Cake</div>
                    </Link>
                </nav>
                <div className="columns is-centered">
                    <div className="column is-two-fifths">
                        <div className="card">
                            <header className="card-header">
                                <p className="card-header-title">{cake.name}</p>
                            </header>
                            <div className="card-image">
                                <figure className="image is-4by3">
                                    <img src={cake.imageUrl} alt="Placeholder image" />
                                </figure>
                            </div>
                            <div className="content">
                                <p>
                                    <b>Comment: </b>{cake.comment}
                                    <br />
                                    <b>Cake Yum Factor: </b>{cake.yumFactor}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
const mapStateToProps = (state: ICakeAppStore) => ({
    cakes: state.cakes
});
export default connect(
    mapStateToProps,
)(CakeView);

