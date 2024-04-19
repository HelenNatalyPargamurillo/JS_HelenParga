class cuentabancaria{
    constructor(numerocuenta,saldo1=0){
        this.numerocuenta=numerocuenta;
        this.saldo=saldo1;
    }
    depositar(cantidad){
        if(cantidad > 0);{
            this.saldo += cantidad;
            console.log(`se deposito ${cantidad},en el numero de cuenta ${this.numerocuenta} Nuevo saldo:${this.saldo}`);
        } else {
            console.log("la cantidad a depositar debe ser mayor que 0.");
        }
    }

}