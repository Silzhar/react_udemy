import React, { Component } from 'react'

export default class Fetch extends Component {
    state = { bpi: {}}
    componentDidMount () {
        fetch('https://api.coindesk.com/v1/bpi/currentprice.json').then(
            res => res.json()
        ).then(data => {
            const { bpi } = data
            this.setState({bpi})
            console.log(data)
            console.log('bpi : ',bpi)
        })
    }

    renderCurrencies () {
        const { bpi } = this.state
        const currencies = Object.keys(bpi)
        return currencies.map(
        currency => <div key={currency}>
                1 BTC is {bpi[currency].rate}
                <span> Currency :{currency}</span>
            </div>
        )
    }
    
    render() {
        return (
            <div>
                <h4>Fetch</h4>
                {this.renderCurrencies()}
            </div>
        )
    }
}
