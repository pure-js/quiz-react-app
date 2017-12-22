import React from 'react';
import PropTypes from 'prop-types';

const FinalResults = (props) => {
  const { results, returnHome } = props;

  return (
    <div>
      <div className="arrow-right" />
      <main className="container">
        <div className="row">
          <div className="col-12">
            <h1 className="text-center">Best ever results!</h1>
            <p className="text-center">Your score is {results}</p>
          </div>
        </div>
        <div id="first-screen" className="row">
          <div className="col-12">
            <div className="d-flex justify-content-center">
              <div className="btn-group">
                <button
                  id="exam"
                  type="button"
                  className="btn btn-lg btn-info btn_start"
                  disabled
                >Try again
                </button>
                <button
                  id="train"
                  type="button"
                  className="btn btn-lg btn-info btn_start"
                  onClick={returnHome}
                >Return to main page
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
FinalResults.propTypes = {
  results: PropTypes.number.isRequired,
  returnHome: PropTypes.func.isRequired,
};

export default FinalResults;
