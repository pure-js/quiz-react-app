import React, { Component } from 'react';

import addRow from './components/textarea/textAreaAddRow';
import showNextQuiz from './components/showNextQuiz';
import questions from '../static/questions';
import current from './components/current';
import domElements from './components/domElements';
import shuffleArray from './components/shuffleArray';
import toAnswer from './components/toAnswer';

class App extends Component {
  componentDidMount() {
    domElements.$nextQuiz.addEventListener('click', () => {
      showNextQuiz(questions);
    });

    domElements.$textArea.addEventListener('keypress', () => {
      addRow('console-output');
    });

    domElements.$answer.addEventListener('click', () => {
      toAnswer();
    });

    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('sw.min.js')
        .then((registration) => {
          console.log('Registered:', registration);
        })
        .catch((error) => {
          console.log('Registration failed: ', error);
        });
    }
  }

  Sep() {
    current.quiz = shuffleArray(questions);
    showNextQuiz(questions);
    document.getElementById('first-screen').classList.add('d-none');
    document.getElementById('quiz-screen').classList.remove('d-none');
    domElements.$exam.removeEventListener('click', () => {});
  }

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
                  <button id="exam" type="button" className="btn btn-lg btn-info btn_start" onClick={this.Sep}>Exam</button>
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
