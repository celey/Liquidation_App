import React from 'react';

export default class Work extends React.Component {
    constructor(props) {
      super(props);
      console.log(props);
      this.state = {

      };
    }
    componentDidMount() {
    }
    render() {
      return (
        <div>
         {this.props.data[this.props.cups[0]] &&  <table className="table-outer table-work">
            <tbody>
            <tr>
              <td className="alerts-title">Track CDP:</td>
              <td className="table-value">{this.props.data[this.props.cups[0]].cupId}</td>
            </tr>
            <tr>
              <td className="alerts-title">CDP ID </td>
              <td className="alert-value">{this.props.data[this.props.cups[0]].cupId}</td>
            </tr>
            <tr>
              <td className="alerts-title">Liquidation Ratio</td>
              <td className="alerts-value">{this.props.data[this.props.cups[0]].liquidationRatio}</td>
            </tr>
            <tr>
              <td className="alerts-title">Liquidation Price </td>
              <td className="alerts-value">{this.props.data[this.props.cups[0]].liqudationPrice}</td>
            </tr>
            <tr>
              <td className="alerts-title">Current Price of Eth</td>
              <td className="alerts-value">{this.props.data[this.props.cups[0]].priceOfEth}</td>
            </tr>
            </tbody>
          </table>}
          {this.props.data[this.props.cups[1]] &&<table className="table-outer table-work">
            <tbody>
            <tr>
              <th>TrackCDP </th>
              <th>Key Metrics</th>
            </tr>
            <tr>
              <td className="alerts-title">CDP ID</td>
              <td className="alert-value">{this.props.data[this.props.cups[1]].cupId}</td>
            </tr>
            <tr>
              <td className="alerts-title">Liquidation Ratio</td>
              <td className="alerts-value">{this.props.data[this.props.cups[1]].liquidationRatio}</td>
            </tr>
            <tr>
              <td className="alerts-title">Liquidation Price </td>
              <td className="alerts-value">{this.props.data[this.props.cups[1]].liqudationPrice}</td>
            </tr>
            <tr>
              <td className="alerts-title">Current Price of Eth</td>
              <td className="alerts-value">{this.props.data[this.props.cups[1]].priceOfEth}</td>
            </tr>
            </tbody>
          </table>}
          {this.props.data[this.props.cups[2]] &&<table className="table-outer table-work">
            <tbody>
            <tr>
              <th>Track CDP </th>
              <th>Key Metrics</th>
            </tr>
            <tr>
              <td className="alerts-title">CDP ID </td>
              <td className="alert-value">{this.props.data[this.props.cups[2]].cupId}</td>
            </tr>
            <tr>
              <td className="alerts-title">Liquidation Ratio </td>
              <td className="alerts-value">{this.props.data[this.props.cups[2]].liquidationRatio}</td>
            </tr>
            <tr>
              <td className="alerts-title">Liquidation Price </td>
              <td className="alerts-value">{this.props.data[this.props.cups[2]].liqudationPrice}</td>
            </tr>
            <tr>
              <td className="alerts-title">Current Price of Eth </td>
              <td className="alerts-value">{this.props.data[this.props.cups[2]].priceOfEth}</td>
            </tr>
            </tbody>
          </table>}
        </div>
      );
    }
  }
