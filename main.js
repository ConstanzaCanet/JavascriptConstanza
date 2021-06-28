//PRACTICANDO OBJETOS
class Vehicle{
  constructor(color, year, trademark, price){
        this.color=color;
        this.year=year;
        this.trademark=trademark;
        this.price=price;
  }
  iva(){
    let result = this.price * 0.21
    return result
  }
  priceIva(){
    let total = this.price + this.iva()
    return total;
  }
  

}

//Objeto de ejemplo
const CarOne= new Vehicle ('negro', '2005', 'BMW', 56.400 );

console.log(CarOne)
console.log(CarOne.priceIva())
