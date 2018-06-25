import 'bulma/css/bulma.css';
import * as React from 'react';
import { ICake } from '../models';
import { Link } from 'react-router-dom';

interface IProps {
  cake: ICake;
}

export const Cake: React.StatelessComponent<IProps> = ({ cake }) => {
  return (
    <div className="columns is-centered">
      <div className="column is-two-fifths">
        <div className="card">
          <header className="card-header">
            <Link to={`/cake/${cake.id}`}>
              <p className="card-header-title">{cake.name}</p>
            </Link>
          </header>
          <div className="card-image">
            <figure className="image is-4by3">
              <img src={cake.imageUrl} alt="Placeholder image" />
            </figure>
          </div>
        </div>
      </div>
    </div>
  );
};
