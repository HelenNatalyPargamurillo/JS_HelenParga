class cuentabancaria{
    constructor(numerocuenta,saldo1=0){
        this.numerocuenta=numerocuenta;
        this.saldo=saldo1;
    }
    depositar(cantidad){
        if(cantidad > 0){
            this.saldo += cantidad;
            console.log(`se deposito ${cantidad},en el numero de cuenta ${this.numerocuenta} Nuevo saldo:${this.saldo}`);
        } else {
            console.log("la cantidad a depositar debe ser mayor que 0.");
        }
    }
 retirar(cantidad){
    if(cantidad>0 && cantidad <=
         this.saldo){
            this.saldo-=cantidad;
            console.log(`se retiraron ${cantidad} de la cuenta ${this.numerocuenta}. Nuevo saldo:${this.saldo}`)
         }else if (cantidad>this.saldo){
            console.log("no hay suficientes fondos para realizar el retiro.");
        }else{
            console.log("la cantidad a retirar debe ser mayor a 0.");
        }

 }
}
const cuenta1=new cuentabancaria(`154000855522`,5000);
const cuenta2=new cuentabancaria(`981250005423`,7000);

cuenta1.depositar(1000);
cuenta1.retirar(2000);

cuenta2.depositar(3000);
cuenta2.retirar(4000);