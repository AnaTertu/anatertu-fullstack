import React, {Component} from 'react';

 class Footer extends Component{
    constructor(props){
      super(props);
      this.state = props;   
    }

    componentDidMount(){
        console.log('conectando ao bd...')
       
        setInterval(
            () => {this.atualizar();}
            , 60000
        );
    }

    atualizar(){
        this.setState(
            {
                dados: { dia: this.state.dados.dia + 1}            }
        );
    }

    componentWillUnnmount(){
        console.log('desconectando o bd...')
    }

    render(){
      return(
        <footer>
          <p>Copyright Eletro {this.state.dados.dia}-{this.state.dados.mes}-{this.state.dados.ano} </p>
        </footer>
      )
    }
  }
  
  export default Footer;
