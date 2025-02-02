//!Tipe data custom
type TemanType = {
    nama: string,
    isKampret: boolean,
    hutang?: number,
}

let temanKita: TemanType;

temanKita = {
    nama: "ilham",
    isKampret: false,
}

console.log({temanKita})