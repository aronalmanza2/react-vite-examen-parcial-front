import { Component } from "react";
import CardNumeroPrimos from "./CardNumerosPrimos";

class NumerosPrimos extends Component {
  render() {
    return (
      <section>
        <div className="alert alert-secondary text-center">
          <h1>NumerosPrimos</h1>
        </div>
        <div className="alert alert-secondary">
          <div className="row gy-3">
            <CardNumeroPrimos manual={true} />
            <CardNumeroPrimos manual={false} />
          </div>
        </div>
      </section>
    );
  }
}

export default NumerosPrimos;
