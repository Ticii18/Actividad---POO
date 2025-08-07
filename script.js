function CuentaBancaria(titular, saldoInicial) {
    this.titular = titular;
    this.saldo = saldoInicial;
}

CuentaBancaria.prototype.depositar = function(monto) {
    this.saldo += monto;
    console.log(`Depósito exitoso. Nuevo saldo: $${this.saldo}`);
    return this;
}

CuentaBancaria.prototype.extraer = function(monto) {
    if (monto > this.saldo) {
        console.log("Fondos insuficientes");
    } else {
        this.saldo -= monto;
        console.log(`Extracción exitosa. Nuevo saldo: $${this.saldo}`);
    }
    return this;
}

CuentaBancaria.prototype.consultarSaldo = function() {
    console.log(`Saldo actual: $${this.saldo}`);
    return this;
}

class CuentaBancariaClass {
    #saldo; 
    
    constructor(titular, saldoInicial) {
        this.titular = titular;
        if (saldoInicial < 0) {
            throw new Error("El saldo inicial no puede ser negativo");
        }
        this.#saldo = saldoInicial;
        console.log(`Cuenta creada - Titular: ${this.titular}, Saldo inicial: $${this.#saldo}`);
    }

    getSaldo() {
        return this.#saldo;
    }

    setSaldo(nuevoSaldo) {
        if (nuevoSaldo < 0) {
            console.log("Error: El saldo no puede ser negativo");
            return;
        }
        this.#saldo = nuevoSaldo;
        console.log(`Saldo actualizado a: $${this.#saldo}`);
    }

    depositar(monto) {
        if (monto <= 0) {
            console.log("Error: El monto debe ser mayor a 0");
            return this;
        }
        this.#saldo += monto;
        console.log(`Depositado: $${monto}. Nuevo saldo: $${this.#saldo}`);
        return this;
    }

    extraer(monto) {
        if (monto <= 0) {
            console.log("Error: El monto debe ser mayor a 0");
            return this;
        }
        if (monto > this.#saldo) {
            console.log("Fondos insuficientes");
            return this;
        }
        this.#saldo -= monto;
        console.log(`Extraído: $${monto}. Nuevo saldo: $${this.#saldo}`);
        return this;
    }

    consultarSaldo() {
        console.log(`Saldo actual: $${this.#saldo}`);
        return this;
    }
}

const cuentaClase = new CuentaBancariaClass("Juan", 100);
cuentaClase.depositar(500);
cuentaClase.extraer(200);
cuentaClase.consultarSaldo();


