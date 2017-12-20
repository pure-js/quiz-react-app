import React, { Component } from 'react';

class Home extends Component {
  render() {
    return (
      <div>
        <div className="arrow-right"></div>
        <main className="container">
          <div id="first-screen" className="row">
            <div className="col-12">
              <div className="d-flex justify-content-center">
                <div className="btn-group">
                  <button id="exam" type="button" className="btn btn-lg btn-info btn_start" onClick={this.props.action}>Exam</button>
                  <button id="train" type="button" className="btn btn-lg btn-info btn_start" disabled={true}>Train</button>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    )
  }
}

export default Home;
