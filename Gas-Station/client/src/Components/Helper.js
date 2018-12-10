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
          {this.props.data[this.props.cups[0]] && <table className="table-outer table-helper">
            <tbody>
              <tr>
                <th> CDP Primary Tracker </th>
                <th> Key Metrics </th>
              </tr>
              <td className="alerts-title">CDP ID </td>
              <td className="alert-value">{this.props.data[this.props.cups[0]].cupId}</td>
              <tr>
                <td className="alerts-title">Liquidation Ratio </td>
                <td className="alerts-value">{this.props.data[this.props.cups[0]].liquidationRatio}</td>
              </tr>
              <tr>
                <td className="alerts-title">Liquidation Price </td>
                <td className="alerts-value">{this.props.data[this.props.cups[0]].liqudationPrice}</td>
              </tr>
              <tr>
                <td className="alerts-title">Current Price of Eth  </td>
                <td className="alerts-value">{this.props.data[this.props.cups[0]].priceOfEth}</td>
              </tr>
            </tbody>
          </table>}
          {this.props.data[this.props.cups[1]] && <table className="table-outer table-helper">
            <tbody>
              <tr>
                <th>CDP Secondary Tracker </th>
                <th>Key Metrics</th>
              </tr>
              <td className="alerts-title">CDP ID </td>
              <td className="alert-value">{this.props.data[this.props.cups[1]].cupId}</td>
              <tr>
                <td className="alerts-title">Liquidation Ratio </td>
                <td className="alerts-value">{this.props.data[this.props.cups[1]].liquidationRatio}</td>
              </tr>
              <tr>
                <td className="alerts-title">Liquidation Price  </td>
                <td className="alerts-value">{this.props.data[this.props.cups[1]].liqudationPrice}</td>
              </tr>
              <tr>
                <td className="alerts-title">Current Price of Eth  </td>
                <td className="alerts-value">{this.props.data[this.props.cups[1]].priceOfEth}</td>
              </tr>
            </tbody>
          </table>}
        </div>
      );
    }
  }
