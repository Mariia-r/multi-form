import React, {Component} from 'react';
import './App.css';
import BasicDetails from "./components/Form/FormSteps/BasicDetails";
import AdditionalDetails from "./components/Form/FormSteps/AdditionalDetails";
import Motto from "./components/Form/FormSteps/Motto";
import Optional from "./components/Form/FormSteps/Optional";
import Controls from "./components/Form/Controls/Controls";
import { reset } from 'redux-form';
import { connect } from 'react-redux';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 1,
      pages: [1,2,3,4],
      submitPages: []
    }
  }

  continue = () => {
    this.nextPage();
    if (this.state.submitPages.indexOf(this.state.page) === -1) {
      this.setState({submitPages: [...this.state.submitPages, this.state.page]})
    }
  }

  animate() {
    const $ = window.$;
    let stepActive = document.getElementsByClassName('step-active')[0];
    $(stepActive).animate({ "height" : "+=5px"}, 200)
                 .animate({ "height" : "-=5px"}, 200);
  }

  nextPage = () => {
    this.setState({ page: this.state.page + 1});
    this.animate();
  }

  prevPage = () => {
    this.setState({ page: this.state.page - 1 });
    this.animate();
  }

  confirmReset = (event, reset) => {
    if (!window.confirm('The form will be cleaned. Please confirm')) {
        event.preventDefault();
    } else {
        this.setState({submitPages: []});
        return reset();
    } 
  }

  onSubmit = (values) => {
    alert(JSON.stringify(values).replace(/\,/g, "\n") );
    this.props.reset('registr');
    this.setState({submitPages: []});
  }

  render () {
    const { page } = this.state;

    return (
      <div className="App">
        <div className="content">
            <div className="wrapperControls">
               <Controls page={page}
                         pages={this.state.pages}
                         submitPages={this.state.submitPages}
                         prevPage={this.prevPage}
                         nextPage={this.nextPage}
               />
            </div>
            <div className="wrapperForm">
              {page === 1 && <BasicDetails onSubmit={this.continue} confirmReset={this.confirmReset}/>}
              {page === 2 && (<AdditionalDetails onSubmit={this.continue} confirmReset={this.confirmReset}/>)}
              {page === 3 && (<Motto onSubmit={this.continue} confirmReset={this.confirmReset}/>)}
              {page === 4 && (<Optional onSubmit={this.onSubmit} confirmReset={this.confirmReset}/>)}
            </div>
        </div>
      </div>
    );
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    reset: (nameForm) => {
      dispatch(reset(nameForm));
    }
  }
}

export default connect(null, mapDispatchToProps)(App);
