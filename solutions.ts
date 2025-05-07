function formatString(input: string, toUpper?: boolean): string {
    if (toUpper === false) {
        return input.toLowerCase();
    } else {
        return input.toUpperCase();
    }
}


function filterByRating(items: { title: string; rating: number }[]): { title: string; rating: number }[] {
    const books: {
        title: string;
        rating: number;
    }[] = items.filter((item) => (item.rating>=4.0))
    return books;
}

function concatenateArrays<T>(...arrays: T[][]): T[] {
    let result: T[] = [];
    arrays.forEach((array) => {
        result = [...result, ...array]
    })
    return result;
}

class Vehicle {
    private make: string;
    private year: number;
    constructor(make: string, year: number) {
        this.make = make; this.year = year;
    }
    getInfo(): string {
        return `Make: ${this.make}, Year: ${this.year}`
    }
}

class Car extends Vehicle {
    private model: string;
    constructor(make: string, year: number, model: string) {
        super(make, year);
        this.model = model;
    }
    getModel(): string {
        return `Model: ${this.model}`;
    }
}


function processValue(value: string | number): number {
    if (typeof value === 'string') {
        return value.length;
    } else {
        return value * 2;
    }
}


interface Product {
    name: string;
    price: number;
}

function getMostExpensiveProduct(products: Product[]): Product | null {
    if (products.length == 0) {
        return null;
    } else {
        let result: Product = products[0];
        products.forEach((product) => {
            if (product.price > result.price) {
                result = product;
            }
        })
        return result;
    }
}


enum Day {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
  }
  
  function getDayType(day: Day): string{
    if(day === Day.Sunday || day === Day.Saturday){
        return 'Weekend';
    }else{
        return 'Weekday';
    }
  }


  async function squareAsync(n: number): Promise<number>{
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            if(n>=0){
                resolve(n*n);
            }else{
                reject('Negative Number');
            }
        }, 1000);
       });
  }
