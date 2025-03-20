const mediaData = [
  {
    id: 0,
    title: "Stranger Things",
    type: "Series",
    year: "2016",
    description:
      "In a small town, children suddenly disappear while a mysterious girl with supernatural powers appears. A group of friends sets out to find answers.",
    image:
      "https://m.media-amazon.com/images/M/MV5BMDZkYmVhNjMtNWU4MC00MDQxLWE3MjYtZGMzZWI1ZjhlOWJmXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg",
    genres: ["Sci-Fi", "Horror", "Drama"],
  },
  {
    id: 1,
    title: "Breaking Bad",
    type: "Series",
    year: "2008",
    description:
      "A chemistry teacher diagnosed with cancer begins manufacturing methamphetamine to secure his family's financial future.",
    image:
      "https://m.media-amazon.com/images/M/MV5BYmQ4YWMxYjUtNjZmYi00MDQ1LWFjMjMtNjA5ZDdiYjdiODU5XkEyXkFqcGdeQXVyMTMzNDExODE5._V1_.jpg",
    genres: ["Drama", "Crime", "Thriller"],
  },
  {
    id: 2,
    title: "Inception",
    type: "Movie",
    year: "2010",
    description:
      "A thief with the ability to enter people's dreams is tasked with planting an idea into someone's subconscious.",
    image:
      "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_.jpg",
    genres: ["Sci-Fi", "Action", "Thriller"],
  },
  {
    id: 3,
    title: "The Queen's Gambit",
    type: "Miniseries",
    year: "2020",
    description:
      "In the 1950s, a young orphan girl pursues her dream of becoming the world's greatest chess player while dealing with addiction problems.",
    image:
      "https://m.media-amazon.com/images/M/MV5BM2EwMmRhMmUtMzBmMS00ZDQ3LTg4OGEtNjlkODk3ZTMxMmJlXkEyXkFqcGdeQXVyMjM5ODk1NDU@._V1_.jpg",
    genres: ["Drama"],
  },
  {
    id: 4,
    title: "The Mandalorian",
    type: "Series",
    year: "2019",
    description:
      "The adventures of a lone bounty hunter in the Outer Rim of the galaxy, far from the authority of the New Republic.",
    image:
      "https://m.media-amazon.com/images/M/MV5BZDhlMzY0ZGItZTcyNS00ZTAxLWIyMmYtZGQ2ODg5OWZiYmJkXkEyXkFqcGdeQXVyODkzNTgxMDg@._V1_.jpg",
    genres: ["Sci-Fi", "Action", "Adventure"],
  },
  {
    id: 5,
    title: "Parasite",
    type: "Movie",
    year: "2019",
    description:
      "A poor family infiltrates the household of a wealthy family, leading to unexpected events.",
    image:
      "https://m.media-amazon.com/images/M/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZDYtZTI3MjcwN2Q5NTVkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_.jpg",
    genres: ["Thriller", "Drama", "Comedy"],
  },
  {
    id: 6,
    title: "Dark",
    type: "Series",
    year: "2017",
    description:
      "In a small German town, children disappear under mysterious circumstances, revealing secrets and connections between four families over several generations.",
    image:
      "https://m.media-amazon.com/images/M/MV5BOTk2NzUyOTctZDdlMS00MDJlLTgzNTEtNzQzYjFhNjA0YjBjXkEyXkFqcGdeQXVyMjg1NDcxNDE@._V1_.jpg",
    genres: ["Sci-Fi", "Mystery", "Thriller"],
  },
  {
    id: 7,
    title: "The Witcher",
    type: "Series",
    year: "2019",
    description:
      "Geralt of Rivia, a mutated monster hunter, fights to find his place in a world where humans are often more dangerous than monsters.",
    image:
      "https://m.media-amazon.com/images/M/MV5BN2FiOWU4YzYtMzZiOS00MzcyLTlkOGEtOTgwZmEwMzAxMzA3XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg",
    genres: ["Fantasy", "Action", "Adventure"],
  },
  {
    id: 8,
    title: "Joker",
    type: "Movie",
    year: "2019",
    description:
      "In Gotham City, a failed comedian slowly goes insane and transforms into a psychopathic criminal.",
    image:
      "https://m.media-amazon.com/images/M/MV5BNGVjNWI4ZGUtNzE0MS00YTJmLWE0ZDctN2ZiYTk2YmI3NTYyXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg",
    genres: ["Thriller", "Drama", "Crime"],
  },
  {
    id: 9,
    title: "Money Heist",
    type: "Series",
    year: "2017",
    description:
      "A criminal mastermind plans the biggest heist in Spanish history by robbing the Royal Mint of Spain.",
    image:
      "https://m.media-amazon.com/images/M/MV5BODI0ZTljYTMtODQ1NC00NmI0LTk1YWUtN2FlNDM1MDExMDlhXkEyXkFqcGdeQXVyMTM0NTUzNDIy._V1_.jpg",
    genres: ["Crime", "Thriller", "Drama"],
  },
  {
    id: 10,
    title: "The Crown",
    type: "Series",
    year: "2016",
    description:
      "The political rivalries and romances during the reign of Queen Elizabeth II and the events that shaped the second half of the 20th century.",
    image:
      "https://m.media-amazon.com/images/M/MV5BZmY0MzBlNjctNTRmNy00Njk3LWFjMzctMWQwZDAwMGJmY2MyXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_.jpg",
    genres: ["Drama", "History"],
  },
  {
    id: 11,
    title: "Interstellar",
    type: "Movie",
    year: "2014",
    description:
      "A team of explorers travels through a wormhole in space to save humanity from extinction.",
    image:
      "https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
    genres: ["Sci-Fi", "Drama", "Adventure"],
  },
  {
    id: 12,
    title: "Squid Game",
    type: "Series",
    year: "2021",
    description:
      "Hundreds of desperate players are invited to participate in a mysterious invitation, with a tempting prize, but much is at stake.",
    image:
      "https://m.media-amazon.com/images/M/MV5BYWE3MDVkN2EtNjQ5MS00ZDQ4LTliNzYtMjc2YWMzMDEwMTA3XkEyXkFqcGdeQXVyMTEzMTI1Mjk3._V1_.jpg",
    genres: ["Thriller", "Drama", "Mystery"],
  },
  {
    id: 13,
    title: "The Shawshank Redemption",
    type: "Movie",
    year: "1994",
    description:
      "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
    image:
      "https://m.media-amazon.com/images/M/MV5BNDE3ODcxYzMtY2YzZC00NmNlLWJiNDMtZDViZWM2MzIxZDYwXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_.jpg",
    genres: ["Drama"],
  },
  {
    id: 14,
    title: "Game of Thrones",
    type: "Series",
    year: "2011",
    description:
      "Nine noble families fight for control of the lands of Westeros, while an ancient enemy returns.",
    image:
      "https://m.media-amazon.com/images/M/MV5BYTRiNDQwYzAtMzVlZS00NTI5LWJjYjUtMzkwNTUzMWMxZTllXkEyXkFqcGdeQXVyNDIzMzcwNjc@._V1_.jpg",
    genres: ["Action", "Adventure", "Drama"],
  },
  {
    id: 15,
    title: "The Social Network",
    type: "Movie",
    year: "2010",
    description:
      "Harvard student Mark Zuckerberg founds the social media website Facebook, but later gets sued by two brothers who claim he stole their idea.",
    image:
      "https://m.media-amazon.com/images/M/MV5BOGUyZDUxZjEtMmIzMC00MzlmLTg4MGItZWJmMzBhZjE0Mjc1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
    genres: ["Biography", "Drama"],
  },
  {
    id: 16,
    title: "Chernobyl",
    type: "Miniseries",
    year: "2019",
    description:
      "In April 1986, a reactor exploded at the Chernobyl Nuclear Power Plant in the USSR, leading to one of the worst man-made disasters in history.",
    image:
      "https://m.media-amazon.com/images/M/MV5BZGQ2YmMxZmEtYjI5OS00NzlkLTlkNTEtYWMyMzkyMzc2MDU5XkEyXkFqcGdeQXVyMzQ2MDI5NjU@._V1_.jpg",
    genres: ["Drama", "History", "Thriller"],
  },
  {
    id: 17,
    title: "Black Mirror",
    type: "Series",
    year: "2011",
    description:
      "An anthology series exploring a twisted, high-tech near-future.",
    image:
      "https://m.media-amazon.com/images/M/MV5BYTM3YWVhMDMtNjczMy00NGEyLWJhZDctYjNhMTRkNDE0ZTI1XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg",
    genres: ["Sci-Fi", "Thriller", "Drama"],
  },
  {
    id: 18,
    title: "The Dark Knight",
    type: "Movie",
    year: "2008",
    description:
      "Batman, Lieutenant Gordon, and District Attorney Harvey Dent confront a new psychopathic criminal named Joker.",
    image:
      "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_.jpg",
    genres: ["Action", "Crime", "Drama"],
  },
  {
    id: 19,
    title: "Peaky Blinders",
    type: "Series",
    year: "2013",
    description:
      "A gangster family epic of epic proportions in 1919 Birmingham, England, following the upward trajectory of a crime family led by the fierce and feared Tommy Shelby.",
    image:
      "https://m.media-amazon.com/images/M/MV5BZjYzZDgzMmYtYjY5Zi00YTk1LThhMDYtNjFlNzM4MTZhYzgyXkEyXkFqcGdeQXVyMTE5NDQ1MzQ3._V1_.jpg",
    genres: ["Crime", "Drama"],
  },
  {
    id: 20,
    title: "Dune",
    type: "Movie",
    year: "2021",
    description:
      "A gifted young man must travel to the most dangerous planet in the universe to secure the future of his family and his people.",
    image:
      "https://m.media-amazon.com/images/M/MV5BN2FjNmEyNWMtYzM0ZS00NjIyLTg5YzYtYThlMGVjNzE1OGViXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_FMjpg_UX1000_.jpg",
    genres: ["Sci-Fi", "Adventure"],
  },
  {
    id: 21,
    title: "Mindhunter",
    type: "Series",
    year: "2017",
    description:
      "In the late 1970s, two FBI agents interview imprisoned serial killers to solve crimes.",
    image:
      "https://m.media-amazon.com/images/M/MV5BNWNmYzQ1ZWUtYTQ3ZS00Y2UwLTlkMDctZThlOTJkMGJiNzBiXkEyXkFqcGdeQXVyNjg2NjQwMDQ@._V1_.jpg",
    genres: ["Crime", "Drama", "Thriller"],
  },
  {
    id: 22,
    title: "The Office",
    type: "Series",
    year: "2005",
    description:
      "A mockumentary about a group of typical office workers, where the workdays consist of phone conferences, office gossip, and a boss who believes he's funny.",
    image:
      "https://m.media-amazon.com/images/M/MV5BMDNkOTE4NDQtMTNmYi00MWE0LWE4ZTktYTc0NzhhNWIzNzJiXkEyXkFqcGdeQXVyMzQ2MDI5NjU@._V1_.jpg",
    genres: ["Comedy"],
  },
  {
    id: 23,
    title: "Blade Runner 2049",
    type: "Movie",
    year: "2017",
    description:
      "A young Blade Runner discovers a long-hidden secret that could turn society upside down and sets out to find Rick Deckard, who has been missing for 30 years.",
    image:
      "https://m.media-amazon.com/images/M/MV5BNzA1Njg4NzYxOV5BMl5BanBnXkFtZTgwODk5NjU3MzI@._V1_.jpg",
    genres: ["Sci-Fi", "Thriller", "Drama"],
  },
  {
    id: 24,
    title: "Westworld",
    type: "Series",
    year: "2016",
    description:
      "In a futuristic Western-themed park, wealthy visitors can indulge their darkest fantasies without fear of retribution through the robot-hosts, until the hosts begin to rebel.",
    image:
      "https://m.media-amazon.com/images/M/MV5BZDg1OWRiMTktZDdiNy00NTZlLTg2Y2EtNWRiMTcxMGE5YTUxXkEyXkFqcGdeQXVyMTM2MDY0MjYz._V1_.jpg",
    genres: ["Sci-Fi", "Western", "Drama"],
  },
  {
    id: 25,
    title: "Oppenheimer",
    type: "Movie",
    year: "2023",
    description:
      "The story of American scientist J. Robert Oppenheimer and his role in the development of the atomic bomb.",
    image:
      "https://m.media-amazon.com/images/M/MV5BMDBmYTZjNjUtN2M1MS00MTQ2LTk2ODgtNzc2M2QyZGE5NTVjXkEyXkFqcGdeQXVyNzAwMjU2MTY@._V1_.jpg",
    genres: ["Biography", "Drama", "History"],
  },
  {
    id: 26,
    title: "Succession",
    type: "Series",
    year: "2018",
    description:
      "The story of the dysfunctional Roy family, which controls a global media empire and fights for power while the patriarch retreats.",
    image:
      "https://m.media-amazon.com/images/M/MV5BZTY0YjU0NTUtMGRmNS00NDMyLWI2MzYtNjM2MmM2Y2VmODliXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg",
    genres: ["Drama", "Comedy"],
  },
  {
    id: 27,
    title: "Better Call Saul",
    type: "Series",
    year: "2015",
    description:
      "The story of lawyer Jimmy McGill and his transformation into the unscrupulous criminal defense attorney Saul Goodman before his encounter with Walter White.",
    image:
      "https://m.media-amazon.com/images/M/MV5BZDA4YmE0OTYtMmRmNS00Mzk2LTlhM2MtNjk4NzBjZGE1MmIyXkEyXkFqcGdeQXVyMTMzNDExODE5._V1_.jpg",
    genres: ["Crime", "Drama"],
  },
  {
    id: 28,
    title: "The Bear",
    type: "Series",
    year: "2022",
    description:
      "A young chef from the fine dining world returns to Chicago to run his family's sandwich shop after the suicide of his brother.",
    image:
      "https://m.media-amazon.com/images/M/MV5BYmY1MjQ4ZDEtYzg4MC00NTI5LTkzMDEtZGJhZjE5MWUzNmM2XkEyXkFqcGdeQXVyMjkwOTAyMDU@._V1_.jpg",
    genres: ["Drama", "Comedy"],
  },
  {
    id: 29,
    title: "Severance",
    type: "Series",
    year: "2022",
    description:
      "Mark leads a team of office workers whose memories have been surgically divided between their work and personal lives, but a mysterious colleague causes him to question the company.",
    image:
      "https://m.media-amazon.com/images/M/MV5BMjE1MDAxNjAzOF5BMl5BanBnXkFtZTgwODY5NTk5NDM@._V1_.jpg",
    genres: ["Sci-Fi", "Thriller", "Mystery"],
  },
  {
    id: 30,
    title: "Barbie",
    type: "Movie",
    year: "2023",
    description:
      "Barbie and Ken are having the time of their lives in the colorful and seemingly perfect world of Barbie Land. However, when they get a chance to go to the real world, they soon discover the joys and perils of living among humans.",
    image:
      "https://m.media-amazon.com/images/M/MV5BNjU3N2QxNzYtMjk1NC00MTc4LTk1NTQtMmUxNTljM2I0NDA5XkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_.jpg",
    genres: ["Comedy", "Adventure", "Fantasy"],
  },
  {
    id: 31,
    title: "The Boys",
    type: "Series",
    year: "2019",
    description:
      "A group of vigilantes set out to take down corrupt superheroes who abuse their superpowers and the mega-corporation that manages their images.",
    image:
      "https://m.media-amazon.com/images/M/MV5BOTEyNDJhMDAtY2U5ZS00OTMzLTkwODktMjU3MjFkZWVlMGYyXkEyXkFqcGdeQXVyMjkwOTAyMDU@._V1_.jpg",
    genres: ["Action", "Comedy", "Crime"],
  },
  {
    id: 32,
    title: "Killers of the Flower Moon",
    type: "Movie",
    year: "2023",
    description:
      "Members of the Osage tribe in Oklahoma are murdered under mysterious circumstances in the 1920s, sparking a major FBI investigation directed by a former Texas Ranger.",
    image:
      "https://m.media-amazon.com/images/M/MV5BNjQwOGM2YTItMGYwNC00YTM4LWI0Y2QtZjQ2ZDcyMmRjMTFhXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_.jpg",
    genres: ["Crime", "Drama", "History"],
  },
  {
    id: 33,
    title: "Ted Lasso",
    type: "Series",
    year: "2020",
    description:
      "American football coach Ted Lasso is hired to manage a British soccer team, despite having no experience. What he lacks in knowledge, he makes up for with optimism and determination.",
    image:
      "https://m.media-amazon.com/images/M/MV5BMTdmZjBjZjQtY2JiNS00Y2ZlLTg2NzgtMjUzMGY2OTVmOWJiXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_.jpg",
    genres: ["Comedy", "Drama", "Sport"],
  },
  {
    id: 34,
    title: "Poor Things",
    type: "Movie",
    year: "2023",
    description:
      "The incredible tale about the fantastical evolution of Bella Baxter, a young woman brought back to life by the brilliant and unorthodox scientist Dr. Godwin Baxter.",
    image:
      "https://m.media-amazon.com/images/M/MV5BNGIyYWMzNjktNDE3MC00YWQyLWEyMmEtN2ZmNzZhZDk3NGJlXkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_.jpg",
    genres: ["Comedy", "Drama", "Romance"],
  },
  {
    id: 35,
    title: "Beef",
    type: "Miniseries",
    year: "2023",
    description:
      "Two strangers' lives collide in a moment of road rage that escalates into a feud, drawing them and their loved ones into an increasingly dangerous conflict.",
    image:
      "https://m.media-amazon.com/images/M/MV5BYzZkOTY4MDgtODI5Mi00ZTFkLWI0ZTktYzU1MWJiODRkODQ3XkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_.jpg",
    genres: ["Comedy", "Drama", "Thriller"],
  },
  {
    id: 36,
    title: "The Whale",
    type: "Movie",
    year: "2022",
    description:
      "A reclusive, morbidly obese English teacher attempts to reconnect with his estranged teenage daughter for one last chance at redemption.",
    image:
      "https://m.media-amazon.com/images/M/MV5BZDQ4Njg4YTctNGZkYi00NWU1LWI4OTYtNmNjOWMyMjI1NWYzXkEyXkFqcGdeQXVyMTA3MDk2NDg2._V1_.jpg",
    genres: ["Drama"],
  },
  {
    id: 37,
    title: "Andor",
    type: "Series",
    year: "2022",
    description:
      "Prequel series to Star Wars' 'Rogue One'. In an era filled with danger, deception and intrigue, Cassian Andor embarks on a path that will turn him into the rebel hero.",
    image:
      "https://m.media-amazon.com/images/M/MV5BNDgxNTIyZTMtMzYxNi00NmRjLWFiMTEtM2U4MTFmODkzNzM1XkEyXkFqcGdeQXVyMTM1MTE1NDMx._V1_.jpg",
    genres: ["Action", "Adventure", "Drama"],
  },
  {
    id: 38,
    title: "The Banshees of Inisherin",
    type: "Movie",
    year: "2022",
    description:
      "Two lifelong friends find themselves at an impasse when one abruptly ends their relationship, with alarming consequences for both of them.",
    image:
      "https://m.media-amazon.com/images/M/MV5BM2NlZDI0ZDktNTg5OS00ZjQ1LWI4MDEtN2I0MDE5NWRiNzA4XkEyXkFqcGdeQXVyMTY5Nzc4MDY@._V1_.jpg",
    genres: ["Comedy", "Drama"],
  },
  {
    id: 39,
    title: "Shogun",
    type: "Series",
    year: "2024",
    description:
      "Set in Japan in the year 1600, Lord Yoshii Toranaga is fighting for his life as his enemies on the Council of Regents unite against him, when a mysterious European ship is found marooned in a nearby fishing village.",
    image:
      "https://m.media-amazon.com/images/M/MV5BYzkyYzc4YzMtZmE5Yy00NzZhLWJiMzktMGRkZTc5MzE5YjU0XkEyXkFqcGdeQXVyNjc0NTIyNg@@._V1_.jpg",
    genres: ["Drama", "History", "War"],
  },
  {
    id: 40,
    title: "The Fallout",
    type: "Movie",
    year: "2021",
    description:
      "High schooler Vada navigates the emotional fallout she experiences in the wake of a school tragedy. Relationships with her family, friends and view of the world are forever altered.",
    image:
      "https://m.media-amazon.com/images/M/MV5BOTgzMzE4MGItZDgxYS00ZGEwLWE3YTctZWY3ZDAyMTk0ZGU4XkEyXkFqcGdeQXVyNjY1MTg4Mzc@._V1_.jpg",
    genres: ["Drama"],
  },
  {
    id: 41,
    title: "Pachinko",
    type: "Series",
    year: "2022",
    description:
      "Based on the New York Times bestseller, this sweeping saga chronicles the hopes and dreams of a Korean immigrant family across four generations as they leave their homeland in an indomitable quest to survive and thrive.",
    image:
      "https://m.media-amazon.com/images/M/MV5BNDU1MjIyMjctMTY4OS00OGJhLTk1N2QtNDIyZDJiYjBkZjYxXkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_.jpg",
    genres: ["Drama", "History"],
  },
  {
    id: 42,
    title: "Saltburn",
    type: "Movie",
    year: "2023",
    description:
      "A student at Oxford University finds himself drawn into the world of a charming and aristocratic classmate, who invites him to his eccentric family's sprawling estate for a summer never to be forgotten.",
    image:
      "https://m.media-amazon.com/images/M/MV5BM2NmMDQ1ZWEtNDU4OS00MGIxLWEyMGMtMTM2YmFkYzNhYmMxXkEyXkFqcGdeQXVyMTM1NjM2ODg1._V1_.jpg",
    genres: ["Comedy", "Drama", "Thriller"],
  },
  {
    id: 43,
    title: "The White Lotus",
    type: "Series",
    year: "2021",
    description:
      "The vacations of various hotel guests over the span of a week are followed as they relax and rejuvenate in paradise. But with each passing day, a darker complexity emerges in these picture-perfect travelers.",
    image:
      "https://m.media-amazon.com/images/M/MV5BYjdjNzBmYjEtM2Y5My00YjI0LWJjY2YtOGQ4MjNkNmE2MDVjXkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_.jpg",
    genres: ["Comedy", "Drama"],
  },
  {
    id: 44,
    title: "Dune: Part Two",
    type: "Movie",
    year: "2024",
    description:
      "Paul Atreides unites with Chani and the Fremen while seeking revenge against the conspirators who destroyed his family. Facing a choice between the love of his life and the fate of the universe, he must prevent a terrible future only he can foresee.",
    image:
      "https://m.media-amazon.com/images/M/MV5BODI0YjNhNjUtYjM0My00MTUwLWFlYTMtMWI2NGUzYjhkZWY5XkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_.jpg",
    genres: ["Sci-Fi", "Adventure", "Action"],
  },
  {
    id: 45,
    title: "Fleabag",
    type: "Series",
    year: "2016",
    description:
      "A comedy series adapted from the award-winning play about a young woman trying to cope with life in London whilst coming to terms with a recent tragedy.",
    image:
      "https://m.media-amazon.com/images/M/MV5BMjA4MzU5NzQxNV5BMl5BanBnXkFtZTgwOTg3MDA5NzM@._V1_.jpg",
    genres: ["Comedy", "Drama"],
  },
  {
    id: 46,
    title: "Euphoria",
    type: "Series",
    year: "2019",
    description:
      "A look at life for a group of high school students as they grapple with issues of drugs, sex, and violence.",
    image:
      "https://m.media-amazon.com/images/M/MV5BMDMzZDkyNzEtYTY5Ni00NzlhLWI4MzUtY2UzNjNmMjI1YzIzXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_.jpg",
    genres: ["Drama"],
  },
  {
    id: 47,
    title: "The Green Knight",
    type: "Movie",
    year: "2021",
    description:
      "A fantasy retelling of the medieval story of Sir Gawain and the Green Knight.",
    image:
      "https://m.media-amazon.com/images/M/MV5BMjMxNTdiNWMtOWY0My00MjM4LTkwNzMtOGI0YThhN2Q4M2I4XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg",
    genres: ["Adventure", "Drama", "Fantasy"],
  },
  {
    id: 48,
    title: "Nomadland",
    type: "Movie",
    year: "2020",
    description:
      "After losing everything in the Great Recession, a woman embarks on a journey through the American West, living as a van-dwelling modern-day nomad.",
    image:
      "https://m.media-amazon.com/images/M/MV5BMDRiZWUxNmItNDU5Yy00ODNmLTk0M2ItZjQzZTA5OTJkZjkyXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg",
    genres: ["Drama"],
  },
  {
    id: 49,
    title: "Yellowjackets",
    type: "Series",
    year: "2021",
    description:
      "A team of wildly talented high school girls soccer players who become the survivors of a plane crash deep in the Ontario wilderness.",
    image:
      "https://m.media-amazon.com/images/M/MV5BZDM5ZGIxNjAtYTgzZC00NjFiLTlkMDAtODI4YTBmMmM4ZDQ1XkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_.jpg",
    genres: ["Drama", "Horror", "Mystery"],
  },
  {
    id: 50,
    title: "The Power of the Dog",
    type: "Movie",
    year: "2021",
    description:
      "Charismatic rancher Phil Burbank inspires fear and awe in those around him. When his brother brings home a new wife and her son, Phil torments them until he finds himself exposed to the possibility of love.",
    image:
      "https://m.media-amazon.com/images/M/MV5BZGRhYjE2NWUtN2FkNy00NGI3LTkxYWMtMDk4Yjg5ZjI3MWI2XkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_.jpg",
    genres: ["Drama", "Romance", "Western"],
  },
  {
    id: 51,
    title: "Reservation Dogs",
    type: "Series",
    year: "2021",
    description:
      "Comedy series about four Native American teenagers growing up on a reservation in eastern Oklahoma who spend their days committing crime and fighting it.",
    image:
      "https://m.media-amazon.com/images/M/MV5BODljZjc0ZDktOGMwNS00NDI0LWFlNGYtMGY1YjQyZTZiNjhhXkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_.jpg",
    genres: ["Comedy", "Crime", "Drama"],
  },
  {
    id: 52,
    title: "Midsommar",
    type: "Movie",
    year: "2019",
    description:
      "A couple travels to Northern Europe to visit a rural hometown's fabled Swedish mid-summer festival. What begins as an idyllic retreat quickly devolves into an increasingly violent and bizarre competition at the hands of a pagan cult.",
    image:
      "https://m.media-amazon.com/images/M/MV5BMzQxNzQzOTQwM15BMl5BanBnXkFtZTgwMDQ2NTcwODM@._V1_.jpg",
    genres: ["Horror", "Drama", "Mystery"],
  },
  {
    id: 53,
    title: "Industry",
    type: "Series",
    year: "2020",
    description:
      "Young bankers and traders make their way in the financial world in the aftermath of the 2008 collapse.",
    image:
      "https://m.media-amazon.com/images/M/MV5BOTY3ZTNiYTAtMzg0ZS00YzcyLWE1ZDUtZWY1YzI1YTA2ZTJkXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_.jpg",
    genres: ["Drama"],
  },
  {
    id: 54,
    title: "The Northman",
    type: "Movie",
    year: "2022",
    description:
      "From visionary director Robert Eggers comes The Northman, an action-filled epic that follows a young Viking prince on his quest to avenge his father's murder.",
    image:
      "https://m.media-amazon.com/images/M/MV5BMzVlMmY2NTctODgwOC00NDMzLWEzMWYtM2RiYmIyNTNhMTI0XkEyXkFqcGdeQXVyNTAzNzgwNTg@._V1_.jpg",
    genres: ["Action", "Adventure", "Drama"],
  },
  {
    id: 55,
    title: "Station Eleven",
    type: "Miniseries",
    year: "2021",
    description:
      "A post-apocalyptic saga spanning multiple timelines, telling the stories of survivors of a devastating flu as they attempt to rebuild and reimagine the world anew while holding on to the best of what's been lost.",
    image:
      "https://m.media-amazon.com/images/M/MV5BNDM4MTA2NTY3Nl5BMl5BanBnXkFtZTgwNTc3NTcxOTE@._V1_.jpg",
    genres: ["Drama", "Sci-Fi"],
  },
  {
    id: 56,
    title: "Nope",
    type: "Movie",
    year: "2022",
    description:
      "The residents of a lonely gulch in inland California bear witness to an uncanny and chilling discovery.",
    image:
      "https://m.media-amazon.com/images/M/MV5BMGIyNTI3NWItNTJkOS00MGYyLWE4NjgtZDhjMWQ4Y2JkZTU5XkEyXkFqcGdeQXVyNjY1MTg4Mzc@._V1_.jpg",
    genres: ["Horror", "Mystery", "Sci-Fi"],
  },
  {
    id: 57,
    title: "The Rehearsal",
    type: "Series",
    year: "2022",
    description:
      "Nathan Fielder gives people a chance to rehearse for their own real-life situations, ahead of time.",
    image:
      "https://m.media-amazon.com/images/M/MV5BYmI1NGIwNzYtOTZiNS00OGU5LWI2NDgtNDMzODYzYjgyNjRiXkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_.jpg",
    genres: ["Comedy", "Reality-TV"],
  },
  {
    id: 58,
    title: "Top Gun: Maverick",
    type: "Movie",
    year: "2022",
    description:
      "After more than thirty years of service as one of the Navy's top aviators, Pete Mitchell is where he belongs, pushing the envelope as a courageous test pilot and dodging the advancement in rank that would ground him.",
    image:
      "https://m.media-amazon.com/images/M/MV5BZWYzOGEwNTgtNWU3NS00ZTQ0LWJkODUtMmVhMjIwMjA1ZmQwXkEyXkFqcGdeQXVyMjkwOTAyMDU@._V1_.jpg",
    genres: ["Action", "Drama"],
  },
  {
    id: 59,
    title: "Babylon",
    type: "Movie",
    year: "2022",
    description:
      "A tale of outsized ambition and outrageous excess, it traces the rise and fall of multiple characters during an era of unbridled decadence and depravity in early Hollywood.",
    image:
      "https://m.media-amazon.com/images/M/MV5BNjlkYjc4NGMtZjc3MS00NjQ3LTk4MmUtMTkwZGZjODE1ZDVlXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_.jpg",
    genres: ["Comedy", "Drama", "History"],
  },
  {
    id: 60,
    title: "Heartstopper",
    type: "Series",
    year: "2022",
    description:
      "Teens Charlie and Nick discover their unlikely friendship might be something more as they navigate school and young love in this coming-of-age series.",
    image:
      "https://m.media-amazon.com/images/M/MV5BMTU1NmYwMTAtNzNjOS00NDNkLTg1N2UtNDMwMmYwZDQxNzJiXkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_.jpg",
    genres: ["Drama", "Romance"],
  },
  {
    id: 61,
    title: "The Menu",
    type: "Movie",
    year: "2022",
    description:
      "A young couple travels to a remote island to eat at an exclusive restaurant where the chef has prepared a lavish menu, with some shocking surprises.",
    image:
      "https://m.media-amazon.com/images/M/MV5BMzdjNjI5MmYtODhiNS00NTcyLWEzZmUtYzVmODM5YzExNDE3XkEyXkFqcGdeQXVyMTAyMjQ3NzQ1._V1_.jpg",
    genres: ["Comedy", "Horror", "Thriller"],
  },
  {
    id: 62,
    title: "Slow Horses",
    type: "Series",
    year: "2022",
    description:
      "Follows a team of British intelligence agents who serve as a dumping ground department of MI5 due to their career-ending mistakes.",
    image:
      "https://m.media-amazon.com/images/M/MV5BZjRlZDIyNDMtZjIwYi00YmJiLTg4NjMtODk0ZWYxNzk3MzhlXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_.jpg",
    genres: ["Drama", "Thriller"],
  },
  {
    id: 63,
    title: "Triangle of Sadness",
    type: "Movie",
    year: "2022",
    description:
      "A fashion model celebrity couple join an eventful cruise for the super-rich.",
    image:
      "https://m.media-amazon.com/images/M/MV5BNDRiZjc0ZDMtMjhlYi00ZjAzLTg0MDQtZDI2NGEyYTBlN2M2XkEyXkFqcGdeQXVyMTA2MDU0NjM5._V1_.jpg",
    genres: ["Comedy", "Drama"],
  },
  {
    id: 64,
    title: "Aftersun",
    type: "Movie",
    year: "2022",
    description:
      "Sophie reflects on the shared joy and private melancholy of a holiday she took with her father twenty years earlier.",
    image:
      "https://m.media-amazon.com/images/M/MV5BMTM3OTU0ZGUtNzYwYy00ODU3LWI3YjgtOWZlODliMmRiMWEzXkEyXkFqcGdeQXVyMTAyMjQ3NzQ1._V1_.jpg",
    genres: ["Drama"],
  },
  {
    id: 65,
    title: "Hijack",
    type: "Series",
    year: "2023",
    description:
      "Sam Nelson, a corporate negotiator, uses his professional skills when his flight to London is hijacked by terrorists.",
    image:
      "https://m.media-amazon.com/images/M/MV5BNGVkZjVhZmYtYzkyYS00ZWQ1LTk1ZjctMWUxYzY4NWRkZjY0XkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_.jpg",
    genres: ["Drama", "Thriller"],
  },
  {
    id: 66,
    title: "Lessons in Chemistry",
    type: "Series",
    year: "2023",
    description:
      "Set in the 1950s, a woman's dream of being a scientist is put on hold when she finds herself pregnant, alone and fired from her lab job. She accepts a job as a host on a TV cooking show and sets out to teach a nation of overlooked housewives about more than recipes.",
    image:
      "https://m.media-amazon.com/images/M/MV5BYjNkZGI1ODUtNDczZi00YzRiLThmZTItZjIyZDM3MTRmNGU5XkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_.jpg",
    genres: ["Drama"],
  },
  {
    id: 67,
    title: "The Diplomat",
    type: "Series",
    year: "2023",
    description:
      "A career diplomat lands a high-profile job as the ambassador to the UK, but her position comes with high stakes and she must diffuse international crises while navigating her turbulent marriage.",
    image:
      "https://m.media-amazon.com/images/M/MV5BZmY0MDU0OTMtYTQ4Yi00OWQwLWJiNzMtZmM2MzcyM2FjN2NkXkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_.jpg",
    genres: ["Drama", "Thriller"],
  },
  {
    id: 68,
    title: "Challengers",
    type: "Movie",
    year: "2024",
    description:
      "Follows three tennis players who knew each other when they were teenagers. Decades later, they compete in a tennis tournament against each other, reigniting old rivalries on and off the court.",
    image:
      "https://m.media-amazon.com/images/M/MV5BN2Y0ZDQxYjQtMzc1ZS00YjU3LTk0ZDUtZjFkM2FkYjU2ZTlmXkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_.jpg",
    genres: ["Drama", "Romance", "Sport"],
  },
  {
    id: 69,
    title: "Ripley",
    type: "Series",
    year: "2024",
    description:
      "Set in the 1960s, Tom Ripley, a grifter scraping by in New York, is hired by a wealthy man to travel to Italy to try to convince his vagabond son to return home. Tom's acceptance of the job is the first step into a complex life of deceit, fraud, and murder.",
    image:
      "https://m.media-amazon.com/images/M/MV5BZjlkMDZlZDktOWE4NS00ZjMyLWE1ZmUtMDRkZGZiMmZiYTMwXkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_.jpg",
    genres: ["Crime", "Drama", "Thriller"],
  },
  {
    id: 70,
    title: "Civil War",
    type: "Movie",
    year: "2024",
    description:
      "In a near-future America ravaged by political and social divisions, a team of journalists travels across the country during a rapidly escalating civil war that has engulfed the entire nation.",
    image:
      "https://m.media-amazon.com/images/M/MV5BMmI5NDdlNGYtZmRmMy00MDU4LWI2ZGQtMDEwNGY2ZDY4ZGVlXkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_.jpg",
    genres: ["Action", "Drama", "Thriller"],
  },
  {
    id: 71,
    title: "Fallout",
    type: "Series",
    year: "2024",
    description:
      "Based on the popular video game franchise, the series is set in a post-apocalyptic world devastated by nuclear war, following the adventures of survivors from underground bunkers as they emerge to explore the wasteland.",
    image:
      "https://m.media-amazon.com/images/M/MV5BZDg5ZDg2MWQtM2ExYS00ZWRhLTk4NWUtZTZiMDM3OThlYzY4XkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_.jpg",
    genres: ["Adventure", "Drama", "Sci-Fi"],
  },
  {
    id: 72,
    title: "The Fall Guy",
    type: "Movie",
    year: "2024",
    description:
      "A stuntman is drawn back to a movie set to win back the love of his life, only to find himself embroiled in a criminal conspiracy when the film's star goes missing.",
    image:
      "https://m.media-amazon.com/images/M/MV5BNGVlZTBmZTctZTBlZS00NWM1LTk5ZjgtZGNlZjRiZWVmYzVjXkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_.jpg",
    genres: ["Action", "Comedy"],
  },
  {
    id: 73,
    title: "Bridgerton",
    type: "Series",
    year: "2020",
    description:
      "Set in the competitive world of Regency London high society, the series follows the eight close-knit siblings of the powerful Bridgerton family as they attempt to find love.",
    image:
      "https://m.media-amazon.com/images/M/MV5BNjk4MDdhODctMmFhYi00ZTNhLThlN2UtN2NhZGY0OGFlMWEwXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_.jpg",
    genres: ["Drama", "Romance"],
  },
  {
    id: 74,
    title: "The Gentlemen",
    type: "Series",
    year: "2024",
    description:
      "When aristocratic Eddie inherits his father's sizeable estate, he discovers that it's home to one of the biggest weed farms in Europe, leading him into the dangerous world of organized crime.",
    image:
      "https://m.media-amazon.com/images/M/MV5BYzM0YjcwM2QtN2FmMC00ZmE0LWFmMDgtMDgwY2QyZTkzMzQ1XkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_.jpg",
    genres: ["Action", "Comedy", "Crime"],
  },
  {
    id: 75,
    title: "Anatomy of a Fall",
    type: "Movie",
    year: "2023",
    description:
      "A woman is suspected of her husband's murder, and their blind son faces a moral dilemma as the sole witness in a complex trial that puts their family under scrutiny.",
    image:
      "https://m.media-amazon.com/images/M/MV5BMDBiYmRkNjUtYzc4My00Y2FjLTkzYTUtOTEwNDQ4OGI5ODI1XkEyXkFqcGdeQXVyMTAyMjQ3NzQ1._V1_.jpg",
    genres: ["Crime", "Drama", "Mystery"],
  },
  {
    id: 76,
    title: "Past Lives",
    type: "Movie",
    year: "2023",
    description:
      "Nora and Hae Sung, two deeply connected childhood friends, are reunited for one fateful week after 20 years apart, confronting notions of love and destiny.",
    image:
      "https://m.media-amazon.com/images/M/MV5BOTkzYmMxNTItZDAxNC00NGM0LWIyODMtMWYzMzRkMjIyMTE1XkEyXkFqcGdeQXVyMTAyMjQ3NzQ1._V1_.jpg",
    genres: ["Drama", "Romance"],
  },
  {
    id: 77,
    title: "Silo",
    type: "Series",
    year: "2023",
    description:
      "In a ruined and toxic future, thousands live in a giant silo deep underground. After its sheriff breaks a cardinal rule and residents die mysteriously, engineer Juliette starts to uncover shocking secrets and the truth about the silo.",
    image:
      "https://m.media-amazon.com/images/M/MV5BNTk3MGJkZGItNzRjYy00MDhiLWExMjUtMmY4MzNkMGJiNGM4XkEyXkFqcGdeQXVyMjkwOTAyMDU@._V1_.jpg",
    genres: ["Drama", "Sci-Fi"],
  },
  {
    id: 78,
    title: "The Zone of Interest",
    type: "Movie",
    year: "2023",
    description:
      "The commandant of Auschwitz, Rudolf Höss, and his wife Hedwig, strive to build a dream life for their family in a house and garden next to the camp.",
    image:
      "https://m.media-amazon.com/images/M/MV5BNDkxYTFjN2EtZTMxYy00OTFlLWE0ZmMtNWYwOTQ5ZTJlMGVjXkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_.jpg",
    genres: ["Drama", "History", "War"],
  },
  {
    id: 79,
    title: "Fargo",
    type: "Series",
    year: "2014",
    description:
      "An anthology series featuring various chronicles of deception, intrigue, and murder -- all of which lead back to the Midwestern city of Fargo, North Dakota.",
    image:
      "https://m.media-amazon.com/images/M/MV5BN2NiMGE5M2UtNWNlNC00N2Y4LTkwOWUtMDlkMzEwNTcyOTcyXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg",
    genres: ["Crime", "Drama", "Thriller"],
  },
  {
    id: 80,
    title: "The Killer",
    type: "Movie",
    year: "2023",
    description:
      "After a fateful near-miss, an assassin battles his employers and himself on an international manhunt he insists isn't personal.",
    image:
      "https://m.media-amazon.com/images/M/MV5BYjA0MGU4MzYtYTYxMy00MjRhLTlmMDYtZTVhZDc1Y2QwNzI3XkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_.jpg",
    genres: ["Action", "Crime", "Drama"],
  },
  {
    id: 81,
    title: "Priscilla",
    type: "Movie",
    year: "2023",
    description:
      "When teenage Priscilla Beaulieu meets Elvis Presley, the man who is already a meteoric rock-and-roll superstar becomes someone entirely unexpected in private moments: a thrilling crush, an ally in loneliness, a vulnerable best friend.",
    image:
      "https://m.media-amazon.com/images/M/MV5BOTQyZTBiMjAtZTNjZi00ZjU0LWI1NDQtNDkxMTM3ZTRiYWJiXkEyXkFqcGdeQXVyMTM1NjM2ODg1._V1_.jpg",
    genres: ["Biography", "Drama", "Music"],
  },
  {
    id: 82,
    title: "Maestro",
    type: "Movie",
    year: "2023",
    description:
      "The complex love story of Leonard Bernstein and Felicia Montealegre Cohn Bernstein, a story that spans over 30 years, from their first meeting in 1946 to their two on-off marriages.",
    image:
      "https://m.media-amazon.com/images/M/MV5BYTM4ZDhiYTktNzJkZi00MzYzLTljNmMtMDM2MzM2ZGNlMDM4XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg",
    genres: ["Biography", "Drama", "Music"],
  },
  {
    id: 83,
    title: "Reacher",
    type: "Series",
    year: "2022",
    description:
      "Jack Reacher, a veteran military police investigator, has recently entered civilian life when he is falsely accused of murder.",
    image:
      "https://m.media-amazon.com/images/M/MV5BNzQ4MGYzYzAtNjJlOC00NTdkLTlmNTAtMmZjMzZmZTg3YWNmXkEyXkFqcGdeQXVyMjkwOTAyMDU@._V1_.jpg",
    genres: ["Action", "Crime", "Thriller"],
  },
  {
    id: 84,
    title: "Furiosa: A Mad Max Saga",
    type: "Movie",
    year: "2024",
    description:
      "The origin story of renegade warrior Furiosa before her encounter with Mad Max. As a child, she is snatched from the Green Place of Many Mothers and falls into the hands of a great Biker Horde led by the Warlord Dementus.",
    image:
      "https://m.media-amazon.com/images/M/MV5BNmQyZTBiMjUtZDVmNi00OTRjLWJhNTktMzJlZTZlYzc3NzdkXkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_.jpg",
    genres: ["Action", "Adventure", "Sci-Fi"],
  },
  {
    id: 85,
    title: "The Penguin",
    type: "Series",
    year: "2024",
    description:
      "The story of Oswald Cobblepot's rise through Gotham's criminal underworld following the events of 'The Batman' film.",
    image:
      "https://m.media-amazon.com/images/M/MV5BZDIyYjM3N2EtOTU0MC00MjI1LThiOTQtNGUyY2MyOTMxOGI4XkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_.jpg",
    genres: ["Crime", "Drama"],
  },
  {
    id: 86,
    title: "The Sympathizer",
    type: "Series",
    year: "2024",
    description:
      "A half-French, half-Vietnamese communist spy during the final days of the Vietnam War and his new life as a refugee in Los Angeles, where he learns that his spying days aren't over.",
    image:
      "https://m.media-amazon.com/images/M/MV5BYzZkOTY4MDgtODI5Mi00ZTFkLWI0ZTktYzU1MWJiODRkODQ3XkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_.jpg",
    genres: ["Drama", "History", "War"],
  },
  {
    id: 87,
    title: "The Last of Us",
    type: "Series",
    year: "2023",
    description:
      "After a global pandemic destroys civilization, a hardened survivor takes charge of a 14-year-old girl who may be humanity's last hope.",
    image:
      "https://m.media-amazon.com/images/M/MV5BZGUzYTI3M2EtZmM0Yy00NGUyLWI4ODEtN2Q3ZGJlYzhhZjU3XkEyXkFqcGdeQXVyNTM0OTY1OQ@@._V1_.jpg",
    genres: ["Action", "Adventure", "Drama"],
  },
  {
    id: 88,
    title: "House of the Dragon",
    type: "Series",
    year: "2022",
    description:
      "The story of the House Targaryen set 200 years before the events of Game of Thrones.",
    image:
      "https://m.media-amazon.com/images/M/MV5BZjBiOGIyY2YtOTA3OC00YzY1LThkYjktMGRkYTNhNTExY2I2XkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_.jpg",
    genres: ["Action", "Adventure", "Drama"],
  },
  {
    id: 89,
    title: "Everything Everywhere All at Once",
    type: "Movie",
    year: "2022",
    description:
      "An aging Chinese immigrant is swept up in an insane adventure, where she alone can save the world by exploring other universes connecting with the lives she could have led.",
    image:
      "https://m.media-amazon.com/images/M/MV5BYTdiOTIyZTQtNmQ1OS00NjZlLWIyMTgtYzk5Y2M3ZDVmMDk1XkEyXkFqcGdeQXVyMTAzMDg4NzU0._V1_.jpg",
    genres: ["Action", "Adventure", "Comedy"],
  },
  {
    id: 90,
    title: "The Batman",
    type: "Movie",
    year: "2022",
    description:
      "When the Riddler, a sadistic serial killer, begins murdering key political figures in Gotham, Batman is forced to investigate the city's hidden corruption and question his family's involvement.",
    image:
      "https://m.media-amazon.com/images/M/MV5BMDdmMTBiNTYtMDIzNi00NGVlLWIzMDYtZTk3MTQ3NGQxZGEwXkEyXkFqcGdeQXVyMzMwOTU5MDk@._V1_.jpg",
    genres: ["Action", "Crime", "Drama"],
  },
  {
    id: 91,
    title: "Joker",
    type: "Movie",
    year: "2019",
    description:
      "In Gotham City, mentally troubled comedian Arthur Fleck is disregarded and mistreated by society. He then embarks on a downward spiral of revolution and bloody crime. This path brings him face-to-face with his alter-ego: the Joker.",
    image:
      "https://m.media-amazon.com/images/M/MV5BNGVjNWI4ZGUtNzE0MS00YTJmLWE0ZDctN2ZiYTk2YmI3NTYyXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg",
    genres: ["Crime", "Drama", "Thriller"],
  },
  {
    id: 92,
    title: "1917",
    type: "Movie",
    year: "2019",
    description:
      "April 6th, 1917. As a regiment assembles to wage war deep in enemy territory, two soldiers are assigned to race against time and deliver a message that will stop 1,600 men from walking straight into a deadly trap.",
    image:
      "https://m.media-amazon.com/images/M/MV5BOTdmNTFjNDEtNzg0My00ZjkxLTg1ZDAtZTdkMDc2ZmFiNWQ1XkEyXkFqcGdeQXVyNTAzNzgwNTg@._V1_.jpg",
    genres: ["Action", "Drama", "War"],
  },
  {
    id: 93,
    title: "Knives Out",
    type: "Movie",
    year: "2019",
    description:
      "A detective investigates the death of a patriarch of an eccentric, combative family.",
    image:
      "https://m.media-amazon.com/images/M/MV5BMGUwZjliMTAtNzAxZi00MWNiLWE2NzgtZGUxMGQxZjhhNDRiXkEyXkFqcGdeQXVyNjU1NzU3MzE@._V1_.jpg",
    genres: ["Comedy", "Crime", "Drama"],
  },
  {
    id: 94,
    title: "The Irishman",
    type: "Movie",
    year: "2019",
    description:
      "An old man recalls his time painting houses for his friend, Jimmy Hoffa, through the 1950-70s.",
    image:
      "https://m.media-amazon.com/images/M/MV5BMGUyM2ZiZmUtMWY0OC00NTQ4LThkOGUtNjY2NjkzMDJiMWMwXkEyXkFqcGdeQXVyMzY0MTE3NzU@._V1_.jpg",
    genres: ["Biography", "Crime", "Drama"],
  },
];
