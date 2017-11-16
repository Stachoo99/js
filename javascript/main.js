//to jest komentarz liniowy


//alt + cmd + / - komentarz blokowy

/*console.log('654');
console.log('123');*/

//zmienne
var liczba = 10;
var Liczba = 15;

//dodawanie number do stringa
var napis = 'Ala \n ma kota';

console.log(napis + liczba);
console.log('123');
console.log(liczba);
console.log(Liczba);
wypiszWKonsoli();

//funkcje - reuzywalne bloki kodu, tworzymy za pomoca slowa kluczowego function
function wypiszWKonsoli() {
    console.log('123');
}

var nowaFunkcja = function() {
    console.log('456');
}

nowaFunkcja();

//funkcja, ktora ma dwa parametry i wypisuje w konsoli wynik dodawania tych dwoch argumentow
function dodawanie(liczba1, liczba2) {
    console.log(liczba1 + liczba2);
}

dodawanie(39, 80);


//funkcja, ktora ma dwa parametry i zwraca wynik dodawania tych dwoch argumentow

function odejmowanie(liczba3, liczba4) {
    var roznica = liczba4 - liczba3;
    return roznica;
}
//liczba 4 jest zdefiniowana wewnatrz funkcji, to znaczy ze jest zmienna lokalna
//console.log(liczba4);

//console.log(odejmowanie (3, 10));

console.log(odejmowanie(10, 40));


//null + undefined
var zmienna = null;
console.log(zmienna);

//typ bool
var zmienna2 = true;
console.log(zmienna2);

//definicja tablicy, uzywamy nawias kwadratowy (indeksy od 0)
var tablica = ['Marcin', 'Ania', 'Agnieszka'];
//dodawanie wartosci do tablicy
//przez podanie nazwy i numeru indeksu, nastepnie przypisanie wartosci
tablica[3] = 'Jan'
console.log(tablica[3]);
//push(wartosc) dodaje element na koniec tablicy
tablica.push('Michał');
console.log(tablica[4]);

tablica[1] ='podmieniony';
console.log(tablica);
//pop - ZAWSZE usuwa ostatni element tablicy
tablica.pop();
console.log(tablica);

//unshift(wartosc, wartosc, ...) - wstawia element/y na poczatek tablicy
tablica.unshift('Wojtek', 'Kajetan');
console.log(tablica);

//shift() - usuwa pierwszy element tablicy
tablica.shift();
console.log(tablica);
