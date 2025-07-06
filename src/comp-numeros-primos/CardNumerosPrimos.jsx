import { Component } from "react";

class CardNumeroPrimos extends Component {
  state = {
    indice: 2,
    indiceAuto: 2,
    pausado: false,
  };

  esPrimo = (num) => {
    //1. Numero menor a 2
    if (num < 2) return false;
    // 2. Numero igual a 2
    if (num === 2) return true;
    // 3. Numero par
    if (num % 2 === 0) return false;

    // 4. Buscar divisores impares | i <= raíz cuadrada de num"
    for (let i = 3; i * i <= num; i += 2) {
      if (num % i === 0) return false;
    }

    return true;
  };

  avanzar = () => {
    let siguiente = this.state.indice + 1;

    while (!this.esPrimo(siguiente)) {
      siguiente++;
    }

    console.log("this.state.indice", siguiente);

    this.setState({
      indice: siguiente,
    });
  };
  retroceder = () => {
    let anterior = this.state.indice - 1;

    while (anterior > 1 && !this.esPrimo(anterior)) {
      anterior--;
    }
    console.log("this.state.indice", anterior);

    this.setState({
      indice: anterior >= 2 ? anterior : 2,
    });
  };

  avanzarAuto = () => {
    let siguiente = this.state.indiceAuto + 1;

    while (!this.esPrimo(siguiente)) {
      siguiente++;
    }

    console.log("this.state.indiceAuto", siguiente);

    this.setState({
      indiceAuto: siguiente,
    });
  };

  reproducirAuto = () => {
    this.setState({
      pausado: !this.state.pausado,
    });
  };

  componentDidMount() {
    this.idIntervalo = setInterval(() => {
      if (!this.state.pausado && !this.props.manual) {
        this.avanzarAuto();
      }
    }, 2000);
  }

  componentWillUnmount() {
    clearInterval(this.idIntervalo);
  }

  render() {
    const { manual } = this.props;

    return (
      <div className="col-md-6 col-sm-12">
        <div className="card text-center">
          <div className="card-header bg-dark text-white fs-4">
            {manual ? "Modo Manual" : "Modo Auto"}
          </div>
          <div className="card-body">
            <p className="card-text fs-1 fw-bold">
              {manual ? this.state.indice : this.state.indiceAuto}
            </p>
          </div>
          <div className="card-footer d-flex justify-content-center">
            {manual ? (
              <>
                <button
                  className="btn btn-secondary mx-2"
                  onClick={this.retroceder}
                >
                  <i className="bi bi-dash-circle me-1"></i> Retroceder
                </button>
                <button className="btn btn-primary mx-2" onClick={this.avanzar}>
                  <i className="bi bi-plus-circle me-1"></i> Avanzar
                </button>
              </>
            ) : (
              <>
                <button
                  className="btn btn-danger mx-2"
                  onClick={this.reproducirAuto}
                  disabled={this.state.pausado}
                >
                  <i className="bi bi-pause-circle me-1"></i> Pausar
                </button>
                <button
                  className="btn btn-success mx-2"
                  onClick={this.reproducirAuto}
                  disabled={!this.state.pausado}
                >
                  <i className="bi bi-play-circle me-1"></i> Continuar
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default CardNumeroPrimos;
