import * as React from 'react';
import '../styles/App.css';
import 'bulma/css/bulma.css';
import { connect } from 'react-redux';
import { addCakeAction } from '../actions';
import { ICake } from '../models';
import { Link } from 'react-router-dom';

interface IProps {
    addCake: (cake: ICake) => any;
}

interface IState {
    cakeForm: {
        cakeName: string;
        yumFactor: number;
        cakeImageUrl: string;
        cakeComment: string;
    }
}

class AddCake extends React.Component<IProps, IState> {
    public constructor(props: IProps) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    public state = {
        cakeForm: {
            cakeName: '',
            yumFactor: 1,
            cakeImageUrl: '',
            cakeComment: ''
        }
    };

    public render() {
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
                    <div className="column is-half">
                        <form className="searchform" onSubmit={this.handleSubmit}>
                            <div className="field">
                                <label className="label">Cake Name:</label>
                                <div className="control">
                                    <input id="cakeName" className="input is-primary" type="text" placeholder="Cake Name" onChange={this.onInputChange} required={true} />
                                </div>
                            </div>
                            <div className="field">
                                <label className="label">Cake Image:</label>
                                <div className="control">
                                    <input id="cakeImageUrl" className="input is-primary" type="text" placeholder="Cake Image Url" onChange={this.onInputChange} required={true} />
                                </div>
                            </div>
                            <div className="field">
                                <label className="label">Cake Comment:</label>
                                <div className="control">
                                    <input id="cakeComment" className="input is-primary" type="text" placeholder="Cake Comment" onChange={this.onInputChange} required={true} />
                                </div>
                            </div>
                            <div className="field">
                                <label className="label">Cake Yum Factor:</label>
                                <div className="control">
                                    <div className="select is-primary">
                                        <select value={this.state.cakeForm.yumFactor} id="yumFactor" onChange={this.onInputChange}>
                                            <option value={1}>1</option>
                                            <option value={2}>2</option>
                                            <option value={3}>3</option>
                                            <option value={4}>4</option>
                                            <option value={5}>5</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="field">
                                <div className="control">
                                    <input className="button is-primary" type="submit" value="Add Cake" />
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }

    private onInputChange = (event: any) => {
        const id = event.target.id;
        const value: string | number = event.target.value;
        this.setState({ cakeForm: { ...this.state.cakeForm, [id]: value } });

    };

    private handleSubmit = (event: any) => {
        debugger;
        const newCake: ICake = {
            id: '',
            name: this.state.cakeForm.cakeName,
            comment: this.state.cakeForm.cakeComment,
            imageUrl: this.state.cakeForm.cakeImageUrl,
            yumFactor: this.state.cakeForm.yumFactor
        };
        this.props.addCake(newCake);
        this.setState({ cakeForm: { ...this.state.cakeForm, redirect: true } });
        event.preventDefault();
    };
}
const mapDispatchToProps = (dispatch: any) => ({
    addCake: (cake: ICake) => dispatch(addCakeAction(cake))
});
export default connect(
    undefined,
    mapDispatchToProps,
)(AddCake);
