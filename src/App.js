import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div>
        <header className="bg-dark">
          <div className="container">
            <nav className="navbar navbar-dark navbar_no-padding">
              <a href="#" className="navbar-brand">JavaScript Quiz</a>
            </nav>
          </div>
          <div style={{height: 5 + "px"}} className="progress">
            <div id="progress-success" style={{width: 0  + "%"}} className="progress-bar bg-success"></div>
            <div id="progress-failure" style={{width: 0 + "%'"}} className="progress-bar bg-danger"></div>
          </div>
        </header>
        <div className="arrow-right"></div>
        <main className="container">
          <div id="first-screen" className="row">
            <div className="col-12">
              <div className="d-flex justify-content-center">
                <div className="btn-group">
                  <button id="exam" type="button" className="btn btn-lg btn-info btn_start">Exam</button>
                  <button id="train" type="button" className="btn btn-lg btn-info btn_start">Train</button>
                </div>
              </div>
            </div>
          </div>
          <div id="quiz-screen" className="row d-none">
            <div className="col-12 bg-solarized">
              <pre className="language_custom"><code id="code" className="language-javascript"></code></pre>
            </div>
            <div className="col-12">
              <form>
                <div className="form-group">
                  <label htmlFor="console-output">Web Console Output:</label>
                  <textarea id="console-output" rows="2" autoFocus={true} className="form-control console-output"></textarea>
                </div>
                <div className="btn-group">
                  <button id="answer" type="button" className="btn btn-info btn_cursor">Answer</button>
                  <button id="next-quiz" type="button" className="btn btn-light btn_cursor">Next quiz</button>
                </div>
              </form>
            </div>
          </div>
        </main>
      </div>
    );
  }
}

export default App;
