import classNames from 'classnames';
import { NavLink } from 'react-router-dom';
import { withAuthProtected } from '../../hoc';

import css from './navigation.module.css';

function Navigation(props) {
  return (
    <div className={classNames('row', css['nav-wrapper'])}>
      <ul className="nav nav-pills d-flex flex-column">
        <li className="nav-item">
          <NavLink
            className="nav-link"
            to="/addresses"
            exact
            activeClassName={css['active-class']}>
            Addresses
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            className="nav-link"
            to="/books"
            activeClassName={css['active-class']}>
            Books
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default withAuthProtected(Navigation);
