import React from 'react';
import PropTypes from 'prop-types';

import styles from '../../node_modules/bootstrap/dist/css/bootstrap.css';
import styles from './Home.css';

const Home = (props) => {
  const { action } = props;

  return (
    <div>
      <div className="arrow-right" />
      <main className="container">
        <div id="first-screen" className="row">
          <div className="col-12">
            <div className="d-flex justify-content-center">
              <div className="btn-group">
                <button
                  id="exam"
                  type="button"
                  className="btn btn-lg btn-info btn_start"
                  onClick={action}
                >Exam
                </button>
                <button
                  id="train"
                  type="button"
                  className="btn btn-lg btn-info btn_start"
                  disabled
                >Train
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
Home.propTypes = {
  action: PropTypes.func.isRequired,
};

export default Home;
