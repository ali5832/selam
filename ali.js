/*let about = "Azərbaycanlı olduğum üçün fəxr edirəm"
alert (about.length)
alert(about.slice(10-18))
alert (about.slice(about.length-3,about.length))*/

/*let ad="Baku gozeldir"
let ad1 = prompt()
alert(ad1)*/


/*let xezer = "xezer rayonu"
alert (xezer.length)
alert (xezer.slice(5-9))
alert (xezer.slice(xezer.length-6,xezer.length))*/

/*let special = "xususi muhafize"
alert (special.length)
alert (special.slice(7-9))
alert (special.slice(special.length-4,special.length))*/

/*let k1,k2,h,s,p;
k1 = 6, k2 = 8, h =10;
if (k1>h) {
    s=k1*k2/2
    alert(s)
}
else {
    p=k1+k2+h
    alert(p)
}*/

/*let a = "Baki Dovlet pese"
alert (a.slice(4-8))
alert (a.slice(length-3,a.length))*/

/*let create = "Təhsil Millətin Gələcəyidir"
alert (create.length)
alert (create.slice(length-5,create.length))
alert (create.slice(length-1,create.length))*/

/*slet My = "Mən Azərbaycanlıyam"
alert (My.length)
alert (My[8])
alert(My[10])*/

/*let work = prompt ()
alert (work[8])
alert (work[10])*/

/*let a = "AzərBaycan Respublikası"
alert (a.includes("B".toUpperCase()))*/

// Sinifdeki ki birinci mesele
// Boyuk herfle cixart
/*let aze = prompt ()
if (aze.length>20) {
    alert (aze[0])
}
else  {
    alert(aze.slice(5,8).toUpperCase());
}*/


//Bazadaki melumatlar cixarma
// daxil oldunuz və ya olmadınız
/*let namee = "Adil", parol = "5832";
let namee1 = prompt("name daxil et"), parol1=prompt("parolu daxil et");
if (namee === namee1 && parol===parol1) {
    alert ("Artıq daxil oldunuz")
}
else if (namee===namee1 && parol !== parol1) {
    alert ("parolu yanlış daxil edibsən")

}else if (namee !== namee1 && parol === parol1) {
    alert ("Name yanlış daxil edibsən")
}
else if (namee !== namee1 && parol !== parol1) {
    alert ("Hər ikisi yanlışdır")
}*/


//Wifi üçün parol
/*let a=prompt("Wifi üçün şifrə təyin et")
if (a.length>=8) {
    alert ("Wifi üçün şifrəni düzgün daxil etdin")
}
else if (a.length<8) {
    alert ("yanlış daxil etdin")
}*/

/*let ad = "aze311", password = 78
let ad1 = prompt ("Adı daxil edin"), password1 = prompt ("Parolu yaz");
if (ad === ad1 && password === password1) {
    alert ("Artiq sayta daxil oldunuz")
}
else if (ad !== ad1 && password !== password1) {
    alert ("təəsüf ki olmadi")
}*/

// 3 ci sual daxil edilən mətnin soncu hərfini böyük et ekrana çıxart
/*let c = prompt ();
let x = c.length

if (x>10) {
    alert (c[x-1].toUpperCase())
}*/

//2 ci sual
/*.let array = [45,331,98,23]
alert (array[3])
alert (array.slice(array.length-1,array.length))*/

//istifadəçi tərəfindən daxil edilən ədədin son rəqəmi
/*let a = prompt();
alert(a[a.length-1])*/


// paltari filterlemek ve 29.99 a beraber olanlari cixartmaq
/*let size = ["S", "M", "L"];
let color = ["Blue", "Black", "Gray"];
let amount = [25.99, 29.99, 29.99];

for (let i = 0; i < 3; i++) {
    if (amount[i] === 29.99) {
        console.log("size: " + size[i] + " color: " + color[i] + " amount " + amount[i]);

    }
    if (size[i] === "M") {
        console.log(color[i]);
    }
    if (size[i] === "M" && color[i] === "Black") {
        console.log(amount[i] * 2)

    }
    else if (size[i] === "M" && color[i] !== "Black") {
        console.log(amount[i] * 3)
    }
}*/
// 50 den kiçik olanları çıxart
/*let eded = [34, 67, -5, 234, 987, 78, 89, 32, 41, 19, 13, 96, 991, 58, 21], cem = 0;

for (let i = 0; i < eded.length; i++) {
    if (eded[i] < 50) {
        cem=cem+eded[i];

    }
}
console.log(cem);*/

/*let meyve, g;
meyve = 0, g = 0;
while ("meyve<42") {
    if (g <= 8) {
        meyve = meyve + 2
    }
    else {
        meyve = meyve + 3
    }
    g = g++
}
    console.log (g)*/

// Uni bal siyahisi
/*let bal = 600, atestat = 4.5;
let bal1 = prompt("SMS də olan balı daxil edin"), atestat1 = prompt("Atestatınızın ortalama balını daxil edin")
if (bal <= bal1 && atestat <=atestat1) {
    alert("Təbrikər Komputer elmlərinə daxil oldunuz")
}
else if (bal1 <= 600 && bal1 >= 500 && atestat1 <= 4 && atestat1>=3 ) {
    alert ("Bank işinə qəbul oldunuz")
}*/
// tapşırıq 1 - 20 ilə 25 arası olan köynəklərin rəngi və qiyməti
/*let color = ["qara", "boz", "ağ", "qırmızı", "narıncı", "mavi", "qəhvəyi", "sarı", "bənövşeyi", "yaşıl", "krem", "qızıl"];
let price = [22, 27, 34, 43, 25, 34, 23, 10, 22, 24, 24.50, 41], cem = 0, x = color.length;



for (let i = 0; i<color.length; i++) {
    if (price[i] > 20 && price[i] < 25) {
        console.log (" color: " + color[i] + " price: " + price[i])
    }

}

for (let i = 0; i<color.length; i++) {
    if (color[i].includes("e")) {
        console.log (" color: " + color[i] + " price: " + price[i]);
    }
}

for (let i = 0; i < color.length; i++) {
    if (cem + price[i] > 400) {
        console.log(color[x - 1].toUpperCase())


    }


if (cem + price[i] < 400) {
    console.log(" color: " + color[5] + " price: " + price[5]);
}


        else if  (color[i][0]==="n") {
            console.log (color[i])
        }
    }*/

/*let ballar = [341.1, 404.1, 296.8, 492.2, 579.3, 282.8, 322.9, 208.1, 340.1, 220.9];
let ixtisas = ["Fizika müəllimliyi", "Fizika müəllimliyi - tədris ingilis dilində", "İnformatika müəllimliyi", " Riyaziyyat müəllimliyi",
 "Riyaziyyat müəllimliyi - tədris ingilis dilində", " Fizika", "Fizika - tədris ingilis dilində", "Geologiya", "Kompüter elmləri", "Mexanika"];
let b = prompt ("Balınızı daxil edin zəhmət olmasa")

 for (let i = 0; i<ballar.length; i++)

    if (ballar[i] === 341.1) {

        alert (ixtisas[i])
    }*/

// Ballar və ixtisas promptda yazdığımızı çıxartsın
/*let ballar = [
 {   bal: 341.1,
    ixtisas: "Fizika Müəllimliyi"
 },
 {
    bal: 404.1,
    ixtisas: "Fizika Müəllimliyi - tədris ing dilində"
 },
 {
    bal: 296.8,
    ixtisas: "İnformatika Müəllimliyi"
 },
 {
    bal: 492.2,
    ixtisas: "Riyaziyyat Müəllimliyi"
 },
 {
    bal: 579.3,
    ixtisas: "Riyaziyyat Müəllimliyi - tədris ing dilində"
 },
 {
    bal: 282.8,
    ixtisas: "Fizika"
 },
 {
    bal: 322.9,
    ixtisas: "Fizika - tədris ing dilində"
 },
 {
    bal: 208.1,
    ixtisas : "Geologiya"
 },
 {
    bal: 340.1,
    ixtisas: "Komputer elmləri"
 },
 {
    bal: 220.9,
    ixtisas: "Mexanika"
 }];
ballar.forEach((ballar) => {
if (ballar.bal === 341.1){
    alert ("ixtisas:" + ballar.ixtisas)
}
})*/

// İstifadəçi tərəfindən daxil olunan mətnin son 5 hərfini " Gül bağçası" əvəz etmek (Replace)
/* let c = prompt()
 let a = (c.slice(c.length-5, c.length))
 alert (c.replace(a, "Gül bağçası"))*/

// siyahıda olanları 0 - a bərabər elə
/*let r = [12, 23, 45, 56, 1, 0]
for (let i = 0; i = r.length; i++) {
    r.pop()
    console.log (r);
}*/
/*let  cem = 0;
for (let i = 0; i <=100; i++) {
    if (i%4===0 && i%5===0){
        cem = cem + i;
    }
}
console.log(cem)*/

/*let bolge = ["99", "43", "42", "85",]
let a = prompt ()
let seriya = ["Bakı", "Lənkəran", "Lerik", "Naxçıvan"], t = 0, r = 0;
for (let i = 0; i < seriya.length; i++ ) {
   if  (a.toLocaleUpperCase() === bolge[i].toLocaleUpperCase()) {
    say ++
    r = seriya[i];
   }
}
if (t === 0) {
    alert ()
}
else {
    alert(r)
}*/

// object biraz daha çətin yol
/*const insan1 = {
    boy: 1.73,
    ceki: 68,
    yas: 24,
    ixtisas: "Proqramist"
};
const insan2 = {
    boy: 1.63,
    ceki: 58,
    yas: 21,
    ixtisas: "Proqramist"
};
const insan3 = {
    boy: 1.76,
    ceki: 62,
    yas: 20,
    ixtisas: "Hüquqşünas"
};
const insan4 = {
    boy: 1.80,
    ceki: 70,
    yas: 22,
    ixtisas: "Komputer elmləri"
};
const insan5 = {
    boy: 1.82,
    ceki: 74,
    yas: 52,
    ixtisas: "Geologiya"
};
const insanlar = [insan1, insan2, insan3, insan4, insan5];
for (let i = 0; i < insanlar.length; i++) {
    if (insanlar[i].yas <= 23) {
        console.log(insanlar[i].ixtisas)
    }
}*/

/*let kartnumrasi1 = {
    kart: "4169-7828-5432-8765",
    ad: "Sərxan Əliyev"
};
let kartnumrasi2 = {
    kart: "4169-7262-7272-8392",
    ad: "Ayxan Məmmədov"
};
let kartnumrasi3 = {
    kart: "4169-3234-8765-4356",
    ad: "Əli Əliyev"
};
let kartnumrasi4 = {
    kart: "4169-4432-4532-1236",
    ad: "Hüseyn Rüstəmov"
};
let kartlar = [kartnumrasi1, kartnumrasi2, kartnumrasi3, kartnumrasi4];
let say = 0, d = 0;
let c = prompt("Kodu daxil edin")
for (let i = 0; i < kartlar.length; i++) {
    if (c === kartlar[i].kart) {
            say ++
            d = kartlar[i].ad

    }
}
    if (c === ""){
        alert ("Zəhmət olmasa hər hansısa birşey daxil edin")
    }
  else if (say === 0 ) {
    alert ("Yanlış daxil etdiniz")
  }
 else {
    alert (d)
 }*/

/*confirm("Salam Xoş gəlmisiniz Mağazamızda Ayaqqabılar və Koftalar mövcuddur, açılan hissədə 'Ayaqqabılar' və 'Koftalar' yazaraq axtarış edə bilərsiniz.")
let ayaqqabilar = [
    { color: "Boz", size: 40, amount: 47 },
    { color: "Qara", size: 39, amount: 32.50 },
    { color: "Mavi", size: 41, amount: 28 },
    { color: "Qara", size: 42, amount: 52 },
    { color: "Boz", size: 38, amount: 65 }
];
let koftalar = [
    { color: "Qırmızı", size: "L", amount: "29.90" },
    { color: "Qara", size: "XL", amount: "30" },
    { color: "Boz", size: "ML", amount: "45" },
    { color: "Ağ", size: "XLL", amount: "35.50" },
    { color: "Gümüşü", size: "L", amount: "18.90" },
    { color: "Sarı", size: "XL", amount: "21" },
    { color: "Narıncı", size: "ML", amount: "25.85" },
    { color: "Mavi", size: "ML", amount: "52.70" }
];
let v = 0, p = prompt("Mehsul daxil et"), f = 0, m = prompt("Rəng daxil et"), y = 0, t = 0, h = 0, g = 0, l = 0, u = 0;
let c = prompt("Kart")
if (p === "kofta") {
    for (let i = 0; i < koftalar.length; i++) {
        if (p === "Rəng ilə axtarış etmək istəyirəm" && m === ayaqqabilar[i].color) {
            y = ayaqqabilar[i].color
            h = ayaqqabilar[i].color
            g = ayaqqabilar[i].size
            l = ayaqqabilar[i].amount
        }
        v++;
    }
}
else if (p === "ayaqqabı") {
    for (let i = 0; i < ayaqqabilar.length; i++) {
        if (p === "Ayaqqabılar" && m === "") {
            f = ayaqqabilar;
        } else if (p === "Rəng ilə axtarış etmək istəyirəm" && m === ayaqqabilar[i].color) {
            y = ayaqqabilar[i].color
            h = ayaqqabilar[i].color
            g = ayaqqabilar[i].size
            l = ayaqqabilar[i].amount
        }
        else if (p === "Koftalar") {
            u = koftalar
        }
        v++;
    }
}
if (v === 0) {
    alert("Doğru məhsul qeyd edin");
    if ((c.slice(0, 4) === "4169" || c.slice(0, 4) === "5167") && c.length === 16) {
        alert("Kart tapıldı")
    }
} else if (p === "") {
    alert("Boş qoya bilməzsən");
} else if (p === "Rəng ilə axtarış etmək istəyirəm" && m === y) {
    alert("reng: " + h + " ölçü: " + g + " qiymet: " + l)
} else if (p === "Koftalar") {
    console.log(u)
}
else {
    console.log(f)
};*/

/*confirm("Xos geldiniz")
let aboylar = [
    { reng: "Gümüşü", uzunluqu: "14 metr" },
    { reng: "Qızılı", uzunluqu: "12 metr" },
    { reng: "Ağ", uzunluqu: "9 metr" },
    { reng: "Narıncı", uzunluqu: "5 metr" }
];
let ayaqqabilar = [
    { color: "Boz", size: 40, amount: 47 },
    { color: "Qara", size: 39, amount: 32.50 },
    { color: "Mavi", size: 41, amount: 28 },
    { color: "Qara", size: 42, amount: 52 },
    { color: "Boz", size: 38, amount: 65 }
];
let g = prompt("Xususi Aboylar"), c = 0, f = 0, k = prompt("Rəng"), r = 0, l = 0, t = 0,d = 0;
for (let i = 0; i < aboylar.length; i++) {
    if (g === "Aboylar") {
        c++
        f = aboylar
    } else if (g === "Rənglə seçim" && k === aboylar[i].reng) {
        c++
        r = aboylar[i].reng
        l = aboylar[i].uzunluqu
    }
    else if (g === "ayaqqabilar" && k === "sadece ayaqqabilar" ) {
        c++
        d = ayaqqabilar
    }
}
if (c == 0) {
    alert("Tapılmadı")
} else if (g === "Rənglə seçim" && k === r) {
    alert("reng: " + r + " uzunluqu: " + l)
} else if (g === "ayaqqabilar" && k === "sadece ayaqqabilar") {
    console.log (d)
}
else if (g === "") {
    alert("Birşey daxil edin")
}
else {
    console.log(f)
}*/

// to string istifadə edərək
/*let cem = 0;
for (let i = 1; i <= 90; i++) {
    let str = i.toString()
    let uzun = str.length
    if (str[uzun - 1] === "0") {
        cem = cem + i;
    }
}
alert(cem)*/

// Faiz ilə tapılması
/*let sum = 0;
for (let i = 1; i<=90; i++) {
    if (i%10 === 0) {
        sum = sum + i
    }
}
    alert (sum)*/

// 3 və 5 bölünənlərin cəmi Faiz ilə
/*    let sum = 0;
for (let i = 1; i <= 90; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        sum = sum + i
    }
}
alert(sum)*/

// listəkilərin 7 ə bölünürsə bölünənləri topla
/*let r = 0
let reqem = [45, 53, 6, 65, 32, 12, 76, 98, 54, 443, 49, 42];
for (let i = 0; i <= reqem.length; i++) {
    if (reqem[i] % 7 === 0) {
        r = r + reqem[i]
    }
}
alert(r)*/

/*const car1 = { namee: "BMW", color: "orange", year: "2002" },
    car2 = { namee: "Bentley", color: "gray", year: "2000" },
    car3 = { namee: "Cadillac", color: "white", year: "2005" };

let cars = [car1, car2, car3];*/
// 2003 cü ildən əvvəl istehsal olunmuş maşınların bütün özəlliklərini consola çıxarın
/*for (let i = 0; i<cars.length; i++) {
    if (cars[i].year < 2003) {
        console.log ("Marka: " + cars[i].namee + " Rəngi: " + cars[i].color + " İli: " + cars[i].year)
    }
}*/

// 2 ci sual İstifadəçi tərəfindən daxil edilən stringi uzunluğu 5 ə bolünürsə, 
//bu zaman onun özünü cars listinə əlavə edin, əks halda isə uzunluğunun 3 mislini cars listinə əlavə edin
/*let c = prompt()
let y = c.length
if (y%5 === 0) {
    cars.push(c)
}else {
    cars.push(y*3)
}
console.log (cars)*/

// 1 ci sual
/*let meyveler = ["alma", "armud", "nar", "portağal", "banan", "ananas"]
let g = []
for (let i = 0; i<meyveler.length; i++){
   g.push(meyveler[i].length)
}
console.log (g)*/


/*confirm("Xoş gəldiniz axtarış yerinə kostyumlar yazaraq axtarış edə bilərsiniz")
let c = 0, k = 0, p = prompt(), h = 0
let kostyumlar = [
    {color: "Qara", size: "XL", amount: 160},
    {color: "Boz", size: "XXL", amount: 226},
    {color: "Mavi", size: "S", amount: 200},
    {color: "Tünd mavi", size: "M", amount: 250},
    {color: "Qara", size: "L", amount: 178},
    {color: "Ağ", size: "XXS", amount: 150},
    {color: "Yaşıl", size: "2XL", amount: 340},
    {color: "Boz", size: "ML", amount: 110}
];
for (let i = 0; i<kostyumlar.length; i++){
            c++
            k = kostyumlar
     
      if (p === kostyumlar[i].color) {
        h = kostyumlar[i].color
        l = kostyumlar[i].size
        j = kostyumlar[i].amount
      }
}
if (p === "kostyumlar") {
    console.log (k)
}else if (p === "") {
    alert ("Birşey daxil edin zəhmət olmasa boş saxlaya bilməzsiniz")
}
else if (p === h){
    console.log (" reng: " + h + " ölçü: " + l + " qiymət " + j )
}*/
// 1 ci sual Verilmiş adlar arrayinin uzunluğu tək rəqəm olan elementlərindən yeni bir array yaradın.

/*const adlar = ["Gülşən", "Firəngiz", "Sevda", "Əhməd", "Qərənfil", "Qafur", "Emil", "Mehman", "Elnarə", "Elman"]
// 1 ci sual  
let d = []
for (let i = 0; i < adlar.length; i++) {
    if (adlar[i].length % 2 === 1) {
        d.push(adlar[i])

    }
}
 console.log(d)*/

// 2 ci sual Adlar arrayində "E" hərfi ilə başlayan bütün elementlərin uzunluqları cəmini hesablayın

/*cem = 0
for (let i = 0; i<adlar.length; i++){
    if(adlar[i].startsWith("E")) {
            cem = cem + adlar[i].length
                
    }
}
console.log (cem)*/
// 3 ci sual Tərkibində "ə(Ə)" hərfi olan bütün elementləri birləşdirib, bir string kimi ekrana çıxarın

/*let t = 0;
for (let i = 0; i<adlar.length; i++) {
        if (adlar[i].includes("ə","Ə")){
            t = t + adlar[i]
        }
        
}
console.log(t)*/
// 220 alma var ilk 20 gündə hər gün 8 alma götürüldü 20 gündən sonra hər gün 9 alma götürüldü alma neçə günə bitər ?
/*let a = 0, i = 0;
while (a < 220) {
    if (i < 20) {
        a = a + 8

    }
    else {
        a = a + 9
    }
    i++
}
console.log(i)*/

/*let y = prompt(), s = 0, c = 0, m = 0, mk = 0, ya = 0, r = 0, u = 0
let telefonlar = [
    { color: "Ağ", modeli: "Samsung Galaxy A51", mal_kodu: 52398745, yaddas: "64 GB", ram: "4 GB" },
    { color: "Qara", modeli: "Samsung Galaxy A32", mal_kodu: 56581478, yaddas: "128 GB", ram: "6 GB" },
    { color: "Boz", modeli: "Samsung Galaxy S23 Ultra", mal_kodu: 23312256, yaddas: "256 GB", ram: "8 GB" },
    { color: "Xamilyon", modeli: "Samsung Galaxy S21", mal_kodu: 78998727, yaddas: "128 GB", ram: "6 GB" }
]
for (let i = 0; i < telefonlar.length; i++) {
    if (y === telefonlar[i].modeli) {
        c++
        s = telefonlar[i]
        c = telefonlar[i].color
        m = telefonlar[i].modeli
        mk = telefonlar[i].mal_kodu
        ya = telefonlar[i].yaddas
        r = telefonlar[i].ram
    }

}
if (y === m) {
    alert("Rəngi: " + c + ", Modeli: " + m + ", Malın şəxsi kodu: " + mk + ", Yaddaşı: " + ya + ", Ramı: " + r)
} else if (y === "") {
    alert("İstədiyiniz məhsulu qeyd edin zəhmət olmasa.")
} else if (y !== m) {
    alert ("Stokda belə bir smartfon yoxdur")
}*/
/*if (y === telefonlar[i].modeli) {
      alert ("Rəng: " + telefonlar[i].color + ", Modeli: " + telefonlar[i].modeli + ", Malın kodu: " + telefonlar[i].mal_kodu + 
      ", Yaddaşı: " + telefonlar[i].yaddas + ", Operativ yaddaşı: " + telefonlar[i].ram)
  } else if (y === "") {
              s ++
      alert ("İstədiyiniz məhsulu qeyd edin zəhmət olmasa.")
  }
}*/

/*"Rəngi: " + c + ", Modeli: " + m + ", Malın şəxsi kodu: " + mk + ", Yaddaşı: " + ya + ", Ramı: " + r*/

//  Istidəçi tərəfindən daxil edilmiş ədədin rəqəmləri cəmini tapın: 172    (1+7+2 = 10) cavab 10
/*let y = prompt(), c = 0
for (let i = 0; i<y.length; i++) {
    c = c + parseInt(y[i])
}
alert (c)*/

// Istifadəçi tərəfindən daxil edilən stringin uzunluğu həm cüt ədəd olar, həm də sonu 5 - lə bitərsə, bu stringin daxilindəki "L" hərfinin indexini ekrana versin. Əgər "L" hərfi yoxdursa, 
//"Bu hərf mövcud deyil" desin. Yox əgər stringin uzunluğu ya cüt deyil,  ya da 5-ə bölünmürsə bu zaman stringin son 5 hərfini böyük hərf edib ekrana versin.
/*let g = prompt()
let h = g.slice(g.length - 5)
if (g.length % 2 === 0 && g.endsWith("5")) {
    if (g.includes("L")) {
        alert(g.indexOf("L"))
    }else {
        alert("Bu hərf mövcud deyil")
    }
}
else {
    alert (h.toLocaleUpperCase())
}*/

// İstifadəçi tərəfindən daxil edilən ifadə bu siyahıda mövcud deyilsə, həmin ifadəni bu siyahıya əlavə etsin, əks halda isə həmin ifadənin yerləşdiyi indexi bizə qaytarsın.
/*let cv = ["Eyvaz", "Tural", "Fizuli", "Nuray"]
let r = prompt()
if (cv.includes(r)){
   console.log (cv.indexOf(r))
}else {
    cv.push(r)
}
console.log (cv)*/

/*let ortaayliq = prompt("Orta aylıq")
let or = ortaayliq/12
let k = or/30.4
let r = 21*14.30
for (let i = 0; i<ortaayliq.length; i++){
    parseInt(ortaayliq[i])
    
}
alert (r)*/

/*let ksq1 = prompt("İlk KSQ balınızı daxil edin zəhmət olmasa") 
let ksq2 = prompt("2 - ci KSQ balınızı daxil edin zəhmət olmasa")
let ksq3 = prompt("3")
let bsq = prompt("BSQ")
let v, j;
v = ((parseInt(ksq1) + parseInt(ksq2) + parseInt(ksq3))/3)*0.4;
j = parseInt(bsq)*0.6;
console.log ((v+j).toFixed(2));*/

/*let v = prompt(), i = 0, cem = 0;
while (i < v.length) {
    
    
    cem = cem + parseInt(v[i])
    i++
    
}
alert(cem)*/

/*let y = prompt(), i = 0,  c = 0;
while (i<y.length){
    if (y % 2 === 0 || y % 2 === 1) {
        c = c + parseInt(y[i])
            i++
    }
}
console.log (c)*/

let r = prompt ("Benzin seçin")
let benzin = [
    {A92: 1, A95: 2, Dizel: 0.80, A98: 3}
]

for (let i = 0; ibenzin.length; i++) {
    if (r === benzin[i]){
        console.log(r*3)
    }
}
