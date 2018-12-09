import React from 'react';

export default class Helper extends React.Component {
    constructor(props) {
      super(props);

      this.state = {

      };
    }
    componentDidMount() {
    }
    render() {
      return (
        <div>
          <table className="table-outer table-helper">
            <tbody>
              <tr>
                <th> CDP Primary Tracker </th>
                <th> Key Metrics </th>
              </tr>
              <td className="alerts-title">CDP ID </td>
              <td className="alert-value">{this.props.data.cupId}</td>
              <tr>
                <td className="alerts-title">Liquidation Ratio </td>
                <td className="alerts-value">{this.props.data.liquidationRatio}</td>
              </tr>
              <tr>
                <td className="alerts-title">Liquidation Price </td>
                <td className="alerts-value">{this.props.data.liqudationPrice}</td>
              </tr>
              <tr>
                <td className="alerts-title">Current Price of Eth  </td>
                <td className="alerts-value">{this.props.data.priceOfEth}</td>
              </tr>
            </tbody>
          </table>
          <table className="table-outer table-helper">
            <tbody>
              <tr>
                <th>CDP Secondary Tracker </th>
                <th>Key Metrics</th>
              </tr>
              <td className="alerts-title">CDP ID </td>
              <td className="alert-value">{this.props.data.cupId}</td>
              <tr>
                <td className="alerts-title">Liquidation Ratio </td>
                <td className="alerts-value">{this.props.data.liquidationRatio}</td>
              </tr>
              <tr>
                <td className="alerts-title">Liquidation Price  </td>
                <td className="alerts-value">{this.props.data.liqudationPrice}</td>
              </tr>
              <tr>
                <td className="alerts-title">Current Price of Eth  </td>
                <td className="alerts-value">{this.props.data.priceOfEth}</td>
              </tr>
            </tbody>
          </table>
        </div>
      );
    }
  }
