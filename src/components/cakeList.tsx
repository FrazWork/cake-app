import * as React from 'react';
import '../styles/App.css';
import 'bulma/css/bulma.css';
import { connect } from 'react-redux';
import { fetchCakeAction } from '../actions';
import { Cake } from './cake';
import { ICake, ICakeAppStore } from '../models';
import { Link } from 'react-router-dom';

interface IProps {
  cakes: ICake[];
  fetchCakes: () => any;
}
class CakeList extends React.Component<IProps> {
  public componentWillMount() {
    this.props.fetchCakes();
  }
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

        {this.props.cakes.map((cake: ICake, index: number) => {
          return (
            <div key={index} className="card">
              <Cake cake={cake} />
            </div>
          );
        })}
      </div>
    );
  }
}
const mapStateToProps = (state: ICakeAppStore) => ({
  cakes: state.cakes
});
const mapDispatchToProps = (dispatch: any) => ({
  fetchCakes: () => dispatch(fetchCakeAction())
});
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CakeList);
