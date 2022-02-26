import React, { Fragment } from 'react';
import './converter.css'

export default class Converter extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            moedaAValor:"",
            moedaBValor:0,
        }
        this.converter = this.converter.bind(this)// fez o bind para a função
    }

    /* função */
    converter(){
        let de_para=`${this.props.moedaA}_${this.props.moedaB}`;

        let url=`https://free.currconv.com/api/v7/convert?q=${de_para}&compact=ultra&apiKey=3cca24afc3b85c4895a7`;

        fetch(url)
        .then(res=>{
            return res.json()
        })

        .then(json=>{
            let cotacao=json[de_para];
            let moedaB_valor=(parseFloat(this.state.moedaAValor* cotacao)).toFixed(2)

            this.setState({moedaBValor:moedaB_valor})
        })
    }

    render() {
        return (
             <div className="conversor">
                <h1 className='title2'>{this.props.moedaA} para {this.props.moedaB}</h1>
                <input className="input" type="text" onChange={(e)=>{this.setState({moedaAValor:e.target.value})}}/>
                <input className="btn" type="button" value="converter" onClick={this.converter}/>
                <h2 className='vlc'>valor convertido: {this.state.moedaBValor}</h2>
             </div>
        );
    }
};
