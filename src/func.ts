//!FUNCTION

function create(): number {
    return 2003;
}


//Arrow function
const namaKamu = (): string => "Geraldine";


console.log(create());
// console.log(namaKamu());

const result = namaKamu();
console.log(result);


let a = 10;
let b = 12;
let z = a + b;

function umur(): void {
    console.log("Umur kamu adalah" + " " + z)
}

umur();

const job = (): void => console.log("pemain Sepakbola");

job()



function add(x: number, y: number): void {
    const z: number = x +  y;
    console.log("Hasilnya adalah: " + z);
}

add(10, 20);
