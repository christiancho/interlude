import React from 'react';

class Browse extends React.Component{

  constructor(props){
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event){
    event.preventDefault();
    this.props.logout().then(() => {
      debugger
      this.props.router.push("/");
    });
  }

  render(){
    return(
      <section>
        <h1>Hello, { this.props.session.currentUser.username }</h1>
        <button onClick={ this.handleClick }>Logout</button>
      </section>
    );
  }

}

export default Browse;
