const comics = [
    {
        "thumb": "https://www.coverbrowser.com/image/action-comics/1-1.jpg",
        "price": "$19.99",
        "series": "Action Comics",
        "type": "comic book",
        "description":
        "Action Comics è una serie a fumetti pubblicata negli Stati Uniti d'America dalla DC Comics. È famosa per aver ospitato nel primo numero l'esordio del personaggio di Superman, il primo supereroe della storia dei fumetti. La serie è esordita nel 1938 e, originariamente, era una pubblicazione antologica contenente altri personaggi oltre a Superman.",
    },
    {
        "thumb": "https://www.panini.it/media/catalog/product/cache/a5b5dd3adfe0d321084804c738f29601/M/1/M1BLLA015ISBN_0.jpg",
        "price": "$3.99",
        "series": "American Vampire 1976",
        "type": "comic book",
        "description":
        "American Vampire 1976 è una serie a fumetti pubblicata dalla DC Comics sotto l'etichetta DC Black Label. Ambientato nel 1976, l'America è in ginocchio, la fiducia nel governo è crollata e la paranoia regna sovrana. Skinner Sweet ha perso la sua immortalità e, ora, senza più poteri né uno scopo, è determinato ad andarsene con il botto… ma prima un’ultima missione lo attende! Una forza misteriosa minaccia di scatenare l'inferno sulla terra nel giorno del bicentenario degli Stati Uniti, e solo Skinner e Pearl Jones possono fermarla. Questa serie rappresenta il capitolo conclusivo della serie che ha consacrato Scott Snyder e Rafael Albuquerque.",
    },
    {
        "thumb": "https://media.wired.com/photos/593384dad80dd005b42b2817/master/w_2560%2Cc_limit/Aquaman-16.jpg",
        "price": "$16.99",
        "series": "Aquaman",
        "type": "graphic novel",
        "description":
        "Aquaman, il cui vero nome è Arthur Curry, è un supereroe dei fumetti DC Comics. È il re dei sette mari, con la capacità di comunicare con la vita marina e possiede una forza sovrumana. È noto per il suo tridente iconico e per essere un membro fondatore della Justice League.",
    },
    {
        "thumb": "https://d29xot63vimef3.cloudfront.net/image/batgirl/1-1.jpg",
        "price": "$2.99",
        "series": "Batgirl",
        "type": "comic book",
        "description":
        "Batgirl è un personaggio dei fumetti DC Comics. Il suo vero nome è Barbara Gordon, la figlia del Commissario di Polizia di Gotham City, James Gordon. Batgirl è un'abile combattente e detective, ed è stata addestrata da Batman. È nota per il suo costume viola e nero e per essere un membro chiave della famiglia Batman.",
    },
    {
        "thumb": "https://static.posters.cz/image/750/locandine-film-in-plexiglass-batman-prowl-comic-cover-i69653.jpg",
        "price": "$3.99",
        "series": "Batman",
        "type": "comic book",
        "description":
        "Batman è un supereroe dei fumetti DC Comics. Il suo vero nome è Bruce Wayne, un miliardario di Gotham City che, dopo aver assistito all'omicidio dei suoi genitori da bambino, giura vendetta contro i criminali, allenato fisicamente e intellettualmente. Batman opera a Gotham City, assistito da vari personaggi compresi il suo assistente Robin, il commissario di polizia Jim Gordon e occasionalmente la supereroina Batgirl. È noto per il suo costume da pipistrello, la Batmobile e la Batcaverna.",
    },
    {
        "thumb": "https://static.wikia.nocookie.net/marvel_dc/images/5/50/Batman_Beyond_v.1_1.jpg",
        "price": "$2.99",
        "series": "Batman Beyond",
        "type": "comic book",
        "description":
        "Batman Beyond, noto anche come Batman del futuro, è una serie animata che presenta la DC Comics superhero Batman. Ambientato nel futuro, Bruce Wayne è ora un anziano che ha passato il manto di Batman a Terry McGinnis, un liceale che diventa il nuovo Batman. Questa serie è nota per il suo tono più oscuro, l'animazione stilizzata e la trama matura.",
    },
    {
        "thumb": "https://static.wikia.nocookie.net/marvel_dc/images/0/0d/Batman_Superman_Vol_1_1.jpg",
        "price": "$3.99",
        "series": "Batman/Superman",
        "type": "comic book",
        "description":
        "Batman/Superman è una serie di fumetti pubblicata da DC Comics che presenta i supereroi Batman e Superman. La serie esplora la dinamica tra i due personaggi, spesso mettendo in luce le loro differenze e come queste influenzano la loro amicizia. Batman, l'oscuro vigilante di Gotham City, e Superman, l'invincibile eroe di Metropolis, sono spesso alleati, ma a volte si trovano su lati opposti a causa dei loro metodi e ideali divergenti.",
    },
    {
        "thumb": "https://static.wikia.nocookie.net/marvel_dc/images/c/cf/Batman_Superman_Annual_Vol_2_1.jpg",
        "price": "$4.99",
        "series": "Batman/Superman Annual",
        "type": "comic book",
        "description":
        "L'epilogo epico alla saga Archive of Worlds! Nella sua ricerca della perfezione, il divino Auteur.io ha cercato di creare e distruggere mondi con un semplice gesto della mano e un tocco di drammaticità. Ma contro ogni previsione... il Mondo del Cavaliere e il Mondo del Domani sopravvivono! Il Batman delle strade di Gotham City, tinte di noir, si ritrova bloccato nel soleggiato, retro-futurista Mondo del Domani - e Superman si scopre nella situazione opposta. Con i loro mondi d'origine in decadenza e solo una possibilità per salvarli, la chiave per preservare la loro stessa esistenza è solo il lancio di una moneta. O il rovesciamento di questo libro! Questo speciale fumetto flip è due volte la storia, con un fumetto completo da un lato e un fumetto completo dall'altro, che si incontrano nel mezzo! Segui il viaggio di Superman da un lato di questo epico fumetto annuale flip, e gira l'avventura per crociare con Batman e il suo fidato aiutante, Robin!",
    },
    {
        "thumb": "https://static.wikia.nocookie.net/marvel_dc/images/5/54/Batman_The_Joker_War_Zone_Vol_1_1.jpg",
        "price": "$5.99",
        "series": "Batman: The Joker War Zone",
        "type": "comic book",
        "description":
        "Gotham City è un campo di battaglia mentre il Joker prende il controllo della fortuna di Wayne e scatena una guerra di strada contro il Cavaliere Oscuro e i suoi alleati! Entra nella 'zona di guerra' con storie brevi che presentano personaggi come Cassandra Cain, Stephanie Brown e Luke Fox e vedi come stanno combattendo in una città sotto assedio! Inoltre, il brutale debutto completo del misterioso nuovo anti-eroe noto come Clownhunter!",
    },
    {
        "thumb": "https://static.wikia.nocookie.net/marvel_dc/images/6/64/Batman_Three_Jokers_Collected.jpg",
        "price": "$6.99",
        "series": "Batman: Three Jokers",
        "type": "comic book",
        "description":
        "Batman: Three Jokers è una serie limitata di fumetti americani pubblicata da DC Comics. È un successore spirituale di Batman: The Killing Joke e Batman: A Death in the Family. La storia in tre numeri è stata scritta da Geoff Johns e illustrata da Jason Fabok e Brad Anderson, è iniziata in agosto e si è conclusa in ottobre 2020. In Three Jokers, Batman, Batgirl e Red Hood seguono una pista sul Joker, che sembra essere stato tre uomini diversi fin dall'inizio. I tre Joker in questa storia sono indicati con titoli semplici: Il Criminale, il Joker pragmatico, filosofico, sorprendentemente serio dell'Età d'Oro, che è il più metodico del trio e inizialmente si presume sia il loro leader. Il Clown, il Joker buffone, colorato, sciocco scherzoso dell'Età d'Argento, che è il più anarchico del trio. Il Comico, il Joker psicopatico depravato, demente, sadico dell'Età del Bronzo e dell'Età Moderna, che è il più astuto e malvagio del trio.",
    },
    {
        "thumb": "https://static.wikia.nocookie.net/marvel_dc/images/f/f8/Batman_White_Knight_Presents_Harley_Quinn_Vol_1_1.jpg",
        "price": "$4.99",
        "series": "Batman: White Knight Presents: Harley Quinn",
        "type": "comic book",
        "description":
        "Batman: White Knight Presents: Harley Quinn si svolge due anni dopo Batman: Curse of the White Knight. Azrael ha eliminato i criminali a Gotham, Jack Napier (precedentemente The Joker) è morto, Bruce Wayne (Batman) è in prigione e Harley Quinn si sta adattando alla vita da madre single, allevando i gemelli che ha avuto con Jack. Questa serie limitata di sei numeri è stata pubblicata da DC Black Label da ottobre 2020 a marzo 2021.",
    },
    {
        "thumb": "https://static.wikia.nocookie.net/marvel_dc/images/c/c8/Catwoman_Vol_2_1.jpg",
        "price": "$16.99",
        "series": "Catwoman",
        "type": "graphic novel",
        "description":
        "Catwoman, il cui vero nome è Selina Kyle, è un personaggio dei fumetti creato da Bob Kane e Bill Finger nel 1940, pubblicato dalla DC Comics. Inizialmente era un avversario di Batman, ma nel corso degli anni il personaggio ha acquisito caratteristiche di bontà e di solidarietà diventando un'eroina-antieroina, anche se a volte torna a svolgere le sue attività da ladra. È spesso chiamata 'la fidanzata di Batman' a causa del suo rapporto di amore-odio con Batman. Catwoman indossa un body aderente e usa una frusta come arma.",
    },
];

export { comics };