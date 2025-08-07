class CuentaBanacaria {
    titular;
    #saldoInicial;
    constructor(titular, saldoInicial) {
        this.titular = titular
        if (saldoInicial < 0) {
            throw new Error("El saldo inicial no puede ser negativo")
        }
        this.#saldoInicial = saldoInicial
        console.log(`Nombre de la cuenta ${this.titular}, saldo de la cuenta $${this.#saldoInicial}`);
    }

    getSaldo() {
        return this.#saldoInicial
    }

    setSaldo(nuevoSaldo) {
        if (nuevoSaldo < 0) {
            console.log("el saldo no puede ser negativo");
            return;
        }
        this.#saldoInicial = nuevoSaldo;
    }

    depositar(monto) {
        if (monto <= 0) {
            console.log("Error: El monto a depositar debe ser mayor a 0");
            return this;
        }
        this.#saldoInicial += monto;
        console.log(`Depositado: $${monto}`);
        console.log(`Saldo total: $${this.#saldoInicial}`);
        return this;
    }

    extraer(monto) {
        if (monto <= 0) {
            console.log("Error: El monto a extraer debe ser mayor a 0");
            return this;
        }
        if (monto > this.#saldoInicial) {
            console.log("Fondos insuficientes");
            return this;
        }
        this.#saldoInicial -= monto;
        console.log(`Monto extraído: $${monto}`);
        return this;
    }

    consultarSaldo() {
        console.log(`Saldo actual: $${this.#saldoInicial}`)
        return this
    }
}

const cuenta = new CuentaBanacaria("Juan", 100);
cuenta.depositar(500)
cuenta.extraer(700)
cuenta.consultarSaldo()

