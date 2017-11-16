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

var nowaFunkcja = function () {
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

//tablica[1] ='podmieniony';
//console.log(tablica);


//pop - ZAWSZE usuwa ostatni element tablicy
tablica.pop();
console.log(tablica);

//unshift(wartosc, wartosc, ...) - wstawia element/y na poczatek tablicy
tablica.unshift('Wojtek', 'Kajetan');
console.log(tablica);

//shift() - usuwa pierwszy element tablicy
tablica.shift();
console.log(tablica);

//length - zwraca dlugosc tablicy
console.log(tablica.length);

//join wypisuje elementy tablicy jako string - po znaku 
console.log(tablica.join());

//reverse() - odwraca kolejnosc elementow tablicy
console.log(tablica.reverse());

//sort sotruje dane wedle wzoru - najpierw znaki specjalne, pozniej cyfry/liczby, duze litery, male litery
console.log(tablica.sort());

var string = 'Ala ma kota 105';

//split() - dzieli string po podanym parametrze i wrzuca je do tablicy
var res = string.split('')
console.log(res);
console.log(res.join(''));
console.log(res.sort().join());

var osoba = {
    name: 'Marcin',
    height: '180',
    print: function () {
        console.log(this.name);
    }
}

console.log(osoba.name + ' ' + osoba.height);
osoba.print();


console.log(osoba);

osoba.weight = 70;
console.log(osoba);

osoba.printDetail = function () {
    console.log(this.name + ' ' + this.height + ' ' + this.weight);
}
console.log(osoba);

osoba.printDetail();

//klasy obiektu - szablon dla obiektu
class Osoba {
    constructor(imie, nazwisko, height) {
        this.imie = imie;
        this.nazwisko = nazwisko;
        this.height = height;
    }

    wyswietlInfo() {
        console.log('Imię: ' + this.imie + ' ' + 'Nazwisko: ' + this.nazwisko + ' ' + 'Wzrost: ' + this.height);
    }
}

var krystian = new Osoba('Krystian', 'Dziopa', 184);

var marcin = new Osoba('Marcin', 'G', 190);

krystian.wyswietlInfo();
marcin.wyswietlInfo();

//obiekt wbudowany math
console.log('PI= ' + Math.PI);

//losowanie liczb od 0 - 1
var randomNumber = Math.floor(Math.random() * 10) + 1;
console.log(randomNumber);

//pow(liczba podnoszona, potega)
console.log(Math.pow(10, 2));
//modulo zwraca resztę z dzielenia
console.log(3 % 2);
//+=
var a = 10;
a = a + 10;
console.log(a);


//operatory porownania
var string1 = '10';
var number1 = 10;

console.log(string1 == number1);

//operator warunkowy
//(warunek) ? jezeli_prawda : jezeli_nieprawda;
var ujemna = -10;
var wynik = (ujemna > 0) ? 'jest wieksza od 0' : 'nie jest wieksza od 0';
console.log(wynik);

//if najprostszej postaci wykonuje sie wtedy i tylko wtedy, gdy podany warunek jest spelniony (to znaczy ma wartosc true)  
if (ujemna < 0) {
    console.log('ujemna jest mniejsza od 0');
}

//w bloku else instrukcje do wykonania, gdy warunek niespelniony (to znaczy ma wartosc false)
if (ujemna > 0) {
    console.log('ujemna jest mniejsza od 0');
} else {
    console.log('warunek nie zostal spelniony');
}

var dodatnia = 100;
//else if sprawdza, czy kolejny (enty) podany warunek jest prawdziwy
if (dodatnia < 0) {
    console.log('dodatnia jest mniejsza od 0');
} else if (dodatnia == 100) {
    console.log('podales liczbe 100');
} else {
    console.log('warunek nie zostal spelniony');
}

//instrukcja switch
var kolor = 'zielony';

switch (kolor) {
    case 'zielony':
        console.log('podales kolor zielony');
        break;
    case 'czerwony':
        console.log('podales kolor czerwony');
        break;
    case 'czarny':
        console.log('podales kolor czarny');
        break;
    default:
        console.log('jestes daltonista');
}

//wypisanie wszystkich elementow tablicy za pomoca for
for (var i = 0; i < tablica.length; i++) {
    //    console.log(tablica[i]);
    console.log('Numer elementu: ' + (i + 1) + 'Index: ' + i + ' ' + 'Wartosc: ' + tablica[i]);

    //    if(i == 2) {
    //        break;
    //    }
    /*if(i == 2) {
        continue;
    }*/
}



//wypisanie elementow tablicy za pomoca forEach (nie trzeba iteratora i=0)
tablica.forEach(function (element, index) {
    console.log('Element: ' + element + ' ' + 'o indeksie: ' + index);
})

//petle while
var it = 0;
while (it < 10) {
    console.log(it);
    it++;
}

//do...while
var iter = 20;
do {
    console.log(iter);
    iter--;
} while (iter > 10);

for (var b = 0; b < 10; ++b) {
    if (b == 5) {
        continue;
    } else {
        console.log(b);
    }

    console.log('--');
}

//JSON
var jsonOsoby = {
        "osoby": [
            {
                imie: 'krystian',
                nazwisko: 'dziopa',
                zainteresowania: [
                    {nazwa: 'podroze'},
                    {nazwa: 'gotowanie'}
         ]
        },
            {
                imie: 'dominik',
                nazwisko: 'gaudyn',
                zainteresowania: [
                {nazwa: 'akrobatyka'},
                {nazwa: 'koszykowka'}
    ] 
},
       {  
                imie: 'anna',
                nazwisko: 'nowak',
                zainteresowania: [
                {nazwa: 'jezyki'},
                {nazwa: 'ksiazki'}      
       ]
}
                        
    
              
                ]
        }

/*        for (var i = 0; i < jsonOsoby.osoby.length; i++) {
            console.log(jsonOsoby.osoby[i].imie + ' ' + jsonOsoby.osoby[i].nazwisko);
        }

        jsonOsoby.osoby.forEach(function (element, index) {
            console.log(element.imie + ' ' + element.nazwisko);
        })

jsonOsoby.osoby.forEach(function (element, index) {
    console.log(element.imie + ' ' + element.nazwisko + ' ' + element.nazwisko + ' ' + element.zainteresowanie[index].nazwa);
})*/

for (var i=0; i < jsonOsoby.osoby.length; i++) {
    for(var j=0; j < jsonOsoby.osoby[i].zainteresowania.length; j++) {
        console.log(jsonOsoby.osoby[i].zainteresowania[j].nazwa);
    }
}

//funkcja z trzema parametrami 
function iloczyn(param1, param2, param3)
//zmienna lokalna trzyma iloczyn trzech parametrow
{
var wynik = param1 * param2 * param3;
//    zwracam wynik - zmienna ktora trzyma wynik dzialania
    return wynik;
}
//zmienna globalna do ktorej przypisuje wartosc funkcji iloczyn(podaje parametry)
var wynikIloczyn = iloczyn(50,2,3);
//wrzucam do konsoli zmienna, ktora trzyma wynik
console.log(wynikIloczyn);

