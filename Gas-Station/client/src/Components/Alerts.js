import React from 'react';

export default class Alerts extends React.Component {
    constructor(props) {
      super(props);
      this.state = {

      };
      console.log(this.props);
    }
    componentDidMount() {
    }
    render() {
      return (
        <div>
        {this.props.data[this.props.cups[0]] &&
          <table className="table-outer">
            <tbody>
              <tr>
                <th>MakderDao Liquidation Tracker</th>
                <th>Key Metrics</th>
              </tr>
              
              <tr>
                <td className="alerts-title">Liquidation Ratio  </td>
                <td className="alerts-value">{this.props.data[this.props.cups[0]].liquidationRatio}</td>
              </tr>
              <tr>
                <td className="alerts-title">Liquidation Price  </td>
                <td className="alerts-value">{this.props.data[this.props.cups[0]].liqudationPrice}</td>
              </tr>
              <tr>
                <td className="alerts-title">Current Price of Eth  </td>
                <td className="alerts-value">{this.props.data[this.props.cups[0]].priceOfEth}</td>
              </tr>
            </tbody>
          </table>}
        </div>
      );
    }
  }
