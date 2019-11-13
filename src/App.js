import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './App.css';
import BasicDetails from "./components/Form/FormSteps/BasicDetails";
import AdditionalDetails from "./components/Form/FormSteps/AdditionalDetails";
import Motto from "./components/Form/FormSteps/Motto";
import Optional from "./components/Form/FormSteps/Optional";
import Controls from "./components/Form/Controls/Controls";

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

  nextPage = () => {
      let nextPage = this.state.page + 1;
      this.setState({ page: nextPage });
  }

  prevPage = () => {
    this.setState({ page: this.state.page - 1 })
  }

  confirmReset = (event, reset) => {
    if (!window.confirm('Are you sure you want to reset?')) {
        event.preventDefault();
    } else {
        return reset();
    } 
  }

  render () {
    const { onSubmit } = this.props;
    const { page } = this.state;

    return (
      <div className="App">
        <div className="content">
            <div className="wrapperControls">
               <Controls page={this.state.page}
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
              {page === 4 && (<Optional onSubmit={onSubmit} confirmReset={this.confirmReset}/>)}
            </div>
        </div>
      </div>
    );
  }
}

App.propTypes = {
  onSubmit: PropTypes.func.isRequired
}

export default App;
