const mediaData = [
  {
    id: 1,
    title: "Stranger Things",
    type: "Serie",
    year: "2016",
    description:
      "In einer Kleinstadt verschwinden plötzlich Kinder, während ein mysteriöses Mädchen mit übernatürlichen Kräften auftaucht. Eine Gruppe von Freunden macht sich auf die Suche nach Antworten.",
    image:
      "https://m.media-amazon.com/images/M/MV5BMDZkYmVhNjMtNWU4MC00MDQxLWE3MjYtZGMzZWI1ZjhlOWJmXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg",
    platforms: ["Netflix"],
    genres: ["Sci-Fi", "Horror", "Drama"],
  },
  {
    id: 2,
    title: "Breaking Bad",
    type: "Serie",
    year: "2008",
    description:
      "Ein Chemielehrer, der an Krebs erkrankt ist, beginnt Methamphetamin herzustellen, um die finanzielle Zukunft seiner Familie zu sichern.",
    image:
      "https://m.media-amazon.com/images/M/MV5BYmQ4YWMxYjUtNjZmYi00MDQ1LWFjMjMtNjA5ZDdiYjdiODU5XkEyXkFqcGdeQXVyMTMzNDExODE5._V1_.jpg",
    platforms: ["Netflix", "Amazon Prime"],
    genres: ["Drama", "Krimi", "Thriller"],
  },
  {
    id: 3,
    title: "Inception",
    type: "Film",
    year: "2010",
    description:
      "Ein Dieb, der die Fähigkeit besitzt, in die Träume anderer einzudringen, bekommt die Aufgabe, eine Idee in jemandes Unterbewusstsein zu pflanzen.",
    image:
      "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_.jpg",
    platforms: ["Netflix", "Sky"],
    genres: ["Sci-Fi", "Action", "Thriller"],
  },
  {
    id: 4,
    title: "The Queen's Gambit",
    type: "Miniserie",
    year: "2020",
    description:
      "In den 1950er Jahren verfolgt ein Waisenmädchen das Ziel, die größte Schachspielerin der Welt zu werden, während sie mit Suchtproblemen kämpft.",
    image:
      "https://m.media-amazon.com/images/M/MV5BM2EwMmRhMmUtMzBmMS00ZDQ3LTg4OGEtNjlkODk3ZTMxMmJlXkEyXkFqcGdeQXVyMjM5ODk1NDU@._V1_.jpg",
    platforms: ["Netflix"],
    genres: ["Drama"],
  },
  {
    id: 5,
    title: "The Mandalorian",
    type: "Serie",
    year: "2019",
    description:
      "Die Abenteuer eines einsamen Kopfgeldjägers im Outer Rim der Galaxis, weit weg von der Autorität der Neuen Republik.",
    image:
      "https://m.media-amazon.com/images/M/MV5BZDhlMzY0ZGItZTcyNS00ZTAxLWIyMmYtZGQ2ODg5OWZiYmJkXkEyXkFqcGdeQXVyODkzNTgxMDg@._V1_.jpg",
    platforms: ["Disney+"],
    genres: ["Sci-Fi", "Action", "Abenteuer"],
  },
  {
    id: 6,
    title: "Parasite",
    type: "Film",
    year: "2019",
    description:
      "Eine arme Familie schleicht sich in den Haushalt einer reichen Familie ein, was zu unerwarteten Ereignissen führt.",
    image:
      "https://m.media-amazon.com/images/M/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZDYtZTI3MjcwN2Q5NTVkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_.jpg",
    platforms: ["Amazon Prime", "Netflix"],
    genres: ["Thriller", "Drama", "Komödie"],
  },
  {
    id: 7,
    title: "Dark",
    type: "Serie",
    year: "2017",
    description:
      "In einer deutschen Kleinstadt verschwinden Kinder unter mysteriösen Umständen, was Geheimnisse und Verbindungen zwischen vier Familien über mehrere Generationen hinweg aufdeckt.",
    image:
      "https://m.media-amazon.com/images/M/MV5BOTk2NzUyOTctZDdlMS00MDJlLTgzNTEtNzQzYjFhNjA0YjBjXkEyXkFqcGdeQXVyMjg1NDcxNDE@._V1_.jpg",
    platforms: ["Netflix"],
    genres: ["Sci-Fi", "Mystery", "Thriller"],
  },
  {
    id: 8,
    title: "The Witcher",
    type: "Serie",
    year: "2019",
    description:
      "Geralt von Riva, ein mutierter Monsterjäger, kämpft darum, seinen Platz in einer Welt zu finden, in der Menschen oft böser sind als Monster.",
    image:
      "https://m.media-amazon.com/images/M/MV5BN2FiOWU4YzYtMzZiOS00MzcyLTlkOGEtOTgwZmEwMzAxMzA3XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg",
    platforms: ["Netflix"],
    genres: ["Fantasy", "Action", "Abenteuer"],
  },
  {
    id: 9,
    title: "Joker",
    type: "Film",
    year: "2019",
    description:
      "In Gotham City wird ein erfolgloser Comedian langsam wahnsinnig und verwandelt sich in einen psychopathischen Verbrecher.",
    image:
      "https://m.media-amazon.com/images/M/MV5BNGVjNWI4ZGUtNzE0MS00YTJmLWE0ZDctN2ZiYTk2YmI3NTYyXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg",
    platforms: ["Sky", "Amazon Prime"],
    genres: ["Thriller", "Drama", "Krimi"],
  },
  {
    id: 10,
    title: "Money Heist",
    type: "Serie",
    year: "2017",
    description:
      "Ein kriminelles Mastermind plant den größten Überfall in der Geschichte Spaniens, indem er die königliche Münzprägeanstalt von Spanien überfällt.",
    image:
      "https://m.media-amazon.com/images/M/MV5BODI0ZTljYTMtODQ1NC00NmI0LTk1YWUtN2FlNDM1MDExMDlhXkEyXkFqcGdeQXVyMTM0NTUzNDIy._V1_.jpg",
    platforms: ["Netflix"],
    genres: ["Krimi", "Thriller", "Drama"],
  },
  {
    id: 11,
    title: "The Crown",
    type: "Serie",
    year: "2016",
    description:
      "Die politischen Rivalitäten und Romanzen während der Regentschaft von Königin Elizabeth II. und die Ereignisse, die die zweite Hälfte des 20. Jahrhunderts geprägt haben.",
    image:
      "https://m.media-amazon.com/images/M/MV5BZmY0MzBlNjctNTRmNy00Njk3LWFjMzctMWQwZDAwMGJmY2MyXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_.jpg",
    platforms: ["Netflix"],
    genres: ["Drama", "Historie"],
  },
  {
    id: 12,
    title: "Interstellar",
    type: "Film",
    year: "2014",
    description:
      "Ein Team von Entdeckern reist durch ein Wurmloch im Weltraum, um das Überleben der Menschheit zu sichern.",
    image:
      "https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
    platforms: ["Netflix", "Amazon Prime"],
    genres: ["Sci-Fi", "Drama", "Abenteuer"],
  },
  {
    id: 13,
    title: "Squid Game",
    type: "Serie",
    year: "2021",
    description:
      "Hunderte von in Geldnot geratenen Spielern nehmen eine mysteriöse Einladung an, um an Kinderspielen teilzunehmen. Es lockt ein verlockender Preis, aber es steht viel auf dem Spiel.",
    image:
      "https://m.media-amazon.com/images/M/MV5BYWE3MDVkN2EtNjQ5MS00ZDQ4LTliNzYtMjc2YWMzMDEwMTA3XkEyXkFqcGdeQXVyMTEzMTI1Mjk3._V1_.jpg",
    platforms: ["Netflix"],
    genres: ["Thriller", "Drama", "Mystery"],
  },
  {
    id: 14,
    title: "The Shawshank Redemption",
    type: "Film",
    year: "1994",
    description:
      "Zwei inhaftierte Männer knüpfen über mehrere Jahre eine ungewöhnliche Freundschaft und finden Trost und Erlösung durch Akte des Anstands.",
    image:
      "https://m.media-amazon.com/images/M/MV5BNDE3ODcxYzMtY2YzZC00NmNlLWJiNDMtZDViZWM2MzIxZDYwXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_.jpg",
    platforms: ["Netflix", "Amazon Prime"],
    genres: ["Drama"],
  },
  {
    id: 15,
    title: "Game of Thrones",
    type: "Serie",
    year: "2011",
    description:
      "Neun noble Familien kämpfen um die Kontrolle über die Länder von Westeros, während ein uralter Feind zurückkehrt.",
    image:
      "https://m.media-amazon.com/images/M/MV5BYTRiNDQwYzAtMzVlZS00NTI5LWJjYjUtMzkwNTUzMWMxZTllXkEyXkFqcGdeQXVyNDIzMzcwNjc@._V1_.jpg",
    platforms: ["Sky", "Amazon Prime"],
    genres: ["Action", "Abenteuer", "Drama"],
  },
  {
    id: 16,
    title: "The Social Network",
    type: "Film",
    year: "2010",
    description:
      "Harvard-Student Mark Zuckerberg gründet das Social-Media-Website Facebook, wird aber später von zwei Brüdern verklagt, die behaupten, er habe ihre Idee gestohlen.",
    image:
      "https://m.media-amazon.com/images/M/MV5BOGUyZDUxZjEtMmIzMC00MzlmLTg4MGItZWJmMzBhZjE0Mjc1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
    platforms: ["Netflix", "Amazon Prime"],
    genres: ["Biografie", "Drama"],
  },
  {
    id: 17,
    title: "Chernobyl",
    type: "Miniserie",
    year: "2019",
    description:
      "Im April 1986 explodiert ein Reaktor im Kernkraftwerk Tschernobyl in der UdSSR, was zu einer der schlimmsten von Menschen verursachten Katastrophen der Geschichte führt.",
    image:
      "https://m.media-amazon.com/images/M/MV5BZGQ2YmMxZmEtYjI5OS00NzlkLTlkNTEtYWMyMzkyMzc2MDU5XkEyXkFqcGdeQXVyMzQ2MDI5NjU@._V1_.jpg",
    platforms: ["Sky"],
    genres: ["Drama", "Historie", "Thriller"],
  },
  {
    id: 18,
    title: "Black Mirror",
    type: "Serie",
    year: "2011",
    description:
      "Eine Anthologie-Serie, die die dunkle Seite der Technologie und ihre Auswirkungen auf die moderne Gesellschaft untersucht.",
    image:
      "https://m.media-amazon.com/images/M/MV5BYTM3YWVhMDMtNjczMy00NGEyLWJhZDctYjNhMTRkNDE0ZTI1XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg",
    platforms: ["Netflix"],
    genres: ["Sci-Fi", "Thriller", "Drama"],
  },
  {
    id: 19,
    title: "The Dark Knight",
    type: "Film",
    year: "2008",
    description:
      "Batman, Lieutenant Gordon und Staatsanwalt Harvey Dent konfrontieren einen neuen psychotischen Kriminellen namens Joker.",
    image:
      "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_.jpg",
    platforms: ["Netflix", "Amazon Prime"],
    genres: ["Action", "Krimi", "Drama"],
  },
  {
    id: 20,
    title: "Peaky Blinders",
    type: "Serie",
    year: "2013",
    description:
      "Eine Gangsterfamilie epischen Ausmaßes operiert in Birmingham, England, im Jahr 1919, kurz nach dem Ersten Weltkrieg.",
    image:
      "https://m.media-amazon.com/images/M/MV5BZjYzZDgzMmYtYjY5Zi00YTk1LThhMDYtNjFlNzM4MTZhYzgyXkEyXkFqcGdeQXVyMTE5NDQ1MzQ3._V1_.jpg",
    platforms: ["Netflix"],
    genres: ["Krimi", "Drama"],
  },
  {
    id: 21,
    title: "Dune",
    type: "Film",
    year: "2021",
    description:
      "Ein begabter junger Mann muss auf den gefährlichsten Planeten des Universums reisen, um die Zukunft seiner Familie und seines Volkes zu sichern.",
    image:
      "https://m.media-amazon.com/images/M/MV5BN2FjNmEyNWMtYzM0ZS00NjIyLTg5YzYtYThlMGVjNzE1OGViXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_FMjpg_UX1000_.jpg",
    platforms: ["Sky", "Amazon Prime"],
    genres: ["Sci-Fi", "Abenteuer"],
  },
  {
    id: 22,
    title: "Mindhunter",
    type: "Serie",
    year: "2017",
    description:
      "In den späten 1970er Jahren interviewen zwei FBI-Agenten inhaftierte Serienmörder, um Verbrechen zu lösen.",
    image:
      "https://m.media-amazon.com/images/M/MV5BNWNmYzQ1ZWUtYTQ3ZS00NjZlLWI2MzYtNjM2MmM2Y2VmODhmXkEyXkFqcGdeQXVyNjg2NjQwMDQ@._V1_.jpg",
    platforms: ["Netflix"],
    genres: ["Krimi", "Drama", "Thriller"],
  },
  {
    id: 23,
    title: "The Office",
    type: "Serie",
    year: "2005",
    description:
      "Eine Mockumentary über eine Gruppe typischer Büroangestellter, wo die Arbeitstage aus Telefonkonferenzen, Büroklatsch und einem Chef bestehen, der glaubt, er sei witzig.",
    image:
      "https://m.media-amazon.com/images/M/MV5BMDNkOTE4NDQtMTNmYi00MWE0LWE4ZTktYTc0NzhhNWIzNzJiXkEyXkFqcGdeQXVyMzQ2MDI5NjU@._V1_.jpg",
    platforms: ["Amazon Prime", "Netflix"],
    genres: ["Komödie"],
  },
  {
    id: 24,
    title: "Blade Runner 2049",
    type: "Film",
    year: "2017",
    description:
      "Ein junger Blade Runner entdeckt ein lange verborgenes Geheimnis, das die Gesellschaft ins Chaos stürzen könnte, und macht sich auf die Suche nach Rick Deckard, der seit 30 Jahren verschwunden ist.",
    image:
      "https://m.media-amazon.com/images/M/MV5BNzA1Njg4NzYxOV5BMl5BanBnXkFtZTgwODk5NjU3MzI@._V1_.jpg",
    platforms: ["Netflix", "Amazon Prime"],
    genres: ["Sci-Fi", "Thriller", "Drama"],
  },
  {
    id: 25,
    title: "Westworld",
    type: "Serie",
    year: "2016",
    description:
      "In einem futuristischen Western-Themenpark können wohlhabende Besucher ihre dunkelsten Fantasien ohne Angst vor Vergeltung durch die Roboter-Hosts ausleben, bis die Hosts beginnen, sich zu wehren.",
    image:
      "https://m.media-amazon.com/images/M/MV5BZDg1OWRiMTktZDdiNy00NTZlLTg2Y2EtNWRiMTcxMGE5YTUxXkEyXkFqcGdeQXVyMTM2MDY0MjYz._V1_.jpg",
    platforms: ["Sky"],
    genres: ["Sci-Fi", "Western", "Drama"],
  },
  {
    id: 26,
    title: "Oppenheimer",
    type: "Film",
    year: "2023",
    description:
      "Die Geschichte des amerikanischen Wissenschaftlers J. Robert Oppenheimer und seiner Rolle bei der Entwicklung der Atombombe.",
    image:
      "https://m.media-amazon.com/images/M/MV5BMDBmYTZjNjUtN2M1MS00MTQ2LTk2ODgtNzc2M2QyZGE5NTVjXkEyXkFqcGdeQXVyNzAwMjU2MTY@._V1_.jpg",
    platforms: ["Amazon Prime"],
    genres: ["Biografie", "Drama", "Historie"],
  },
  {
    id: 27,
    title: "Succession",
    type: "Serie",
    year: "2018",
    description:
      "Die Geschichte der dysfunktionalen Roy-Familie, die ein globales Medienimperium kontrolliert und um die Macht kämpft, während der Patriarch sich zurückzieht.",
    image:
      "https://m.media-amazon.com/images/M/MV5BZTY0YjU0NTUtMGRmNS00NDMyLWI2MzYtNjM2MmM2Y2VmODhmXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg",
    platforms: ["Sky"],
    genres: ["Drama", "Komödie"],
  },
  {
    id: 28,
    title: "The Last of Us",
    type: "Serie",
    year: "2023",
    description:
      "Nach einer globalen Pandemie muss ein abgehärteter Überlebender ein junges Mädchen quer durch die USA begleiten, während sie von gefährlichen Infizierten und Banditen verfolgt werden.",
    image:
      "https://m.media-amazon.com/images/M/MV5BZGUzYTI3M2EtZmM0Yy00NGUyLWI4ODEtN2Q3ZGJlYzhhZjU3XkEyXkFqcGdeQXVyNTM0OTY1OQ@@._V1_.jpg",
    platforms: ["Sky"],
    genres: ["Action", "Abenteuer", "Drama"],
  },
  {
    id: 29,
    title: "Everything Everywhere All at Once",
    type: "Film",
    year: "2022",
    description:
      "Eine alternde chinesische Einwanderin wird in ein verrücktes Abenteuer verwickelt, bei dem nur sie die Welt retten kann, indem sie andere Universen erkundet und mit den Leben verbindet, die sie hätte führen können.",
    image:
      "https://m.media-amazon.com/images/M/MV5BYTdiOTIyZTQtNmQ1OS00NjZlLWIyMTgtYzk5Y2M3ZDVmMDk1XkEyXkFqcGdeQXVyMTAzMDg4NzU0._V1_.jpg",
    platforms: ["Amazon Prime"],
    genres: ["Action", "Abenteuer", "Komödie"],
  },
  {
    id: 30,
    title: "Better Call Saul",
    type: "Serie",
    year: "2015",
    description:
      "Die Geschichte des Anwalts Jimmy McGill und seine Transformation zum skrupellosen Strafverteidiger Saul Goodman vor seiner Begegnung mit Walter White.",
    image:
      "https://m.media-amazon.com/images/M/MV5BZDA4YmE0OTYtMmRmNS00Mzk2LTlhM2MtNjk4NzBjZGE1MmIyXkEyXkFqcGdeQXVyMTMzNDExODE5._V1_.jpg",
    platforms: ["Netflix"],
    genres: ["Krimi", "Drama"],
  },
];
