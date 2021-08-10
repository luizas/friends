import React from 'react';

class ErrorBoundry extends React.Component {
    constructor(props){
        super(props);
        this.state ={
            hasError:false
        }
    }

    componentDidCatch(error,info){  
      this.setstate({hasError: true});
}

    render(){
        if(this.state.hasEroor){
            return <h1> oops </h1>;
        }
        return this.props.children
    }

}
export default ErrorBoundry;