function generate() {
    let quotes = {
        "sagopa kajmer":'"Acımasızca geçip giden zamandan Geriye kalan sadece yalnızlıklarımız"',
        "Marcus Aurelius":'"Bir şey mümkünse, insana uygunsa başarılması da mümkündür elbette."',
        "Cengiz Aytmatov":'"Kusurlarımızı kendi yüzümüze karşı söyleyebildiğimize göre gelecek için kendimize güvenimiz, gücümüz var."',
        "Cengiz Aytmatov":'"İşte onun gibi bir şey. Burada seni öldürecek kimse yoktu ama dirilip dirilip ölen hep kendindin."',
        "Albert Einstein":'"İnsanın gerçek değeri, kendi kendisinden özgürleşmeyi ne ölçüde ve ne anlamda becerebildiğiyle belirlenir."',
        "Barış Özcan":'"Dünyanın bize değil, bizim dünyaya ihtiyacımız olduğunu anlarsak bazı şeyler değişebilir.."',
        "Sigmund Freud":'"İnsan , karşılaştığı kişilerin kalıntısıdır."',
        "Franz Kafka":'"Ölümün olduğu bu dünyada, hiçbir şey çok da ciddi değildir aslında"',
        "Barış Özcan":'"Hatalar öğrenmenin ayrılmaz bir parçasıdır."',
        "Victor Hugo":'"Yarınlar hep güzel olacak denir. Oysa bugünler, Dünün yarınları değil midir?"',
    }


    

    let authors = Object.keys(quotes);

    let author = authors[Math.floor(Math.random() *
        authors.length)];

    let quote = quotes[author];

    document.getElementById("quote").innerHTML=quote;
    document.getElementById("author").innerHTML=author;


}