interface nodeType {
  id: string;
  group: number;
  image: string;
}

interface linkType {
  source: string;
  target: string;
  day: string;
}

interface dataType {
  nodes: nodeType[];
  links: linkType[];
}

export const data: dataType = {
  nodes: [
    {
      id: "Liam",
      group: 4,
      image: "liam.jpg",
    },
    {
      id: "Millie",
      group: 8,
      image: "millie.jpg",
    },
    {
      id: "Chloe",
      group: 1,
      image: "chloe.jpg",
    },
    {
      id: "Toby",
      group: 1,
      image: "toby.jpg",
    },
    {
      id: "Faye",
      group: 1,
      image: "faye.jpg",
    },
    {
      id: "Teddy",
      group: 12,
      image: "teddy.jpg",
    },
    {
      id: "Kaz",
      group: 1,
      image: "kaz.jpg",
    },
    {
      id: "Tyler",
      group: 23,
      image: "tyler.jpg",
    },
    {
      id: "Jake",
      group: 1,
      image: "jake.jpg",
    },
    {
      id: "Liberty",
      group: 1,
      image: "liberty.jpg",
    },
    {
      id: "Aaron S",
      group: 42,
      image: "aaron-s.jpg",
    },
    {
      id: "Mary",
      group: 29,
      image: "mary.jpg",
    },
    {
      id: "Brett",
      group: 44,
      image: "brett.jpg",
    },
    {
      id: "Priya",
      group: 42,
      image: "priya.jpg",
    },
    {
      id: "Matthew",
      group: 29,
      image: "matthew.jpg",
    },
    {
      id: "Abigail",
      group: 23,
      image: "abi.jpg",
    },
    {
      id: "Dale",
      group: 29,
      image: "dale.jpg",
    },
    {
      id: "Amy",
      group: 29,
      image: "amy.jpg",
    },
    {
      id: "Clarisse",
      group: 29,
      image: "clarisse.jpg",
    },
    {
      id: "Hugo",
      group: 1,
      image: "hugo.jpg",
    },
    {
      id: "Sam",
      group: 29,
      image: "sam.jpg",
    },
    {
      id: "Harry",
      group: 29,
      image: "harry.jpg",
    },
    {
      id: "Jack",
      group: 29,
      image: "jack.jpg",
    },
    {
      id: "Kaila",
      group: 29,
      image: "kaila.jpg",
    },
    {
      id: "Lillie",
      group: 29,
      image: "lillie.jpg",
    },
    {
      id: "Medhy",
      group: 29,
      image: "medhy.jpg",
    },
    {
      id: "Salma",
      group: 29,
      image: "salma.jpg",
    },
    {
      id: "Aaron F",
      group: 1,
      image: "aaron-f.jpg",
    },
    {
      id: "Lucinda",
      group: 8,
      image: "lucinda.jpg",
    },
    {
      id: "Georgia",
      group: 23,
      image: "georgia.jpg",
    },
    {
      id: "AJ",
      group: 17,
      image: "aj.jpg",
    },
    {
      id: "Danny",
      group: 18,
      image: "danny.jpg",
    },
    {
      id: "Sharon",
      group: 1,
      image: "sharon.jpg",
    },
    {
      id: "Brad",
      group: 1,
      image: "brad.jpg",
    },
    {
      id: "Rachel",
      group: "5",
      image: "rachel.jpg",
    },
    {
      id: "Chuggs",
      group: 4,
      image: "chuggs.jpg",
    },
    {
      id: "Shannon",
      group: 1,
      image: "shannon.jpg",
    },
  ],
  links: [
    {
      source: "Toby",
      target: "Kaz",
      day: "1",
    },
    {
      source: "Faye",
      target: "Brad",
      day: "1",
    },
    {
      source: "Kaz",
      target: "Toby",
      day: "1",
    },
    {
      source: "Jake",
      target: "Liberty",
      day: "1",
    },
    {
      source: "Liberty",
      target: "Jake",
      day: "1",
    },
    {
      source: "Hugo",
      target: "Sharon",
      day: "1",
    },
    {
      source: "Aaron F",
      target: "Shannon",
      day: "1",
    },
    {
      source: "Sharon",
      target: "Hugo",
      day: "1",
    },
    {
      source: "Brad",
      target: "Faye",
      day: "1",
    },
    {
      source: "Shannon",
      target: "Aaron F",
      day: "1",
    },
    {
      source: "Liam",
      target: "Faye",
      day: "5",
    },
    {
      source: "Chloe",
      target: "Hugo",
      day: "5",
    },
    {
      source: "Faye",
      target: "Liam",
      day: "5",
    },
    {
      source: "Hugo",
      target: "Chloe",
      day: "5",
    },
    {
      source: "Aaron F",
      target: "Sharon",
      day: "5",
    },
    {
      source: "Sharon",
      target: "Aaron F",
      day: "5",
    },
    {
      source: "Liam",
      target: "Millie",
      day: "14",
    },
    {
      source: "Millie",
      target: "Liam",
      day: "14",
    },
    {
      source: "Chloe",
      target: "Toby",
      day: "14",
    },
    {
      source: "Toby",
      target: "Chloe",
      day: "14",
    },
    {
      source: "Faye",
      target: "Teddy",
      day: "14",
    },
    {
      source: "Teddy",
      target: "Faye",
      day: "14",
    },
    {
      source: "Kaz",
      target: "Aaron F",
      day: "14",
    },
    {
      source: "Aaron F",
      target: "Kaz",
      day: "14",
    },
    {
      source: "Lucinda",
      target: "Brad",
      day: "14",
    },
    {
      source: "Hugo",
      target: "AJ",
      day: "19",
    },
    {
      source: "Lucinda",
      target: "Danny",
      day: "19",
    },
    {
      source: "AJ",
      target: "Hugo",
      day: "19",
    },
    {
      source: "Danny",
      target: "Lucinda",
      day: "19",
    },
    {
      source: "Toby",
      target: "Abigail",
      day: "25",
    },
    {
      source: "Kaz",
      target: "Tyler",
      day: "25",
    },
    {
      source: "Tyler",
      target: "Kaz",
      day: "25",
    },
    {
      source: "Abigail",
      target: "Toby",
      day: "25",
    },
    {
      source: "Aaron F",
      target: "Lucinda",
      day: "25",
    },
    {
      source: "Lucinda",
      target: "Aaron F",
      day: "25",
    },
    {
      source: "Chloe",
      target: "Dale",
      day: "32",
    },
    {
      source: "Toby",
      target: "Mary",
      day: "32",
    },
    {
      source: "Faye",
      target: "Sam",
      day: "32",
    },
    // {
    //     "source": "Teddy",
    //     "target": ""
    // },
    {
      source: "Kaz",
      target: "Matthew",
      day: "32",
    },
    {
      source: "Tyler",
      target: "Clarisse",
      day: "32",
    },
    {
      source: "Mary",
      target: "Toby",
      day: "32",
    },
    {
      source: "Matthew",
      target: "Kaz",
      day: "32",
    },
    // {
    //     "source": "Abigail",
    //     "target": ""
    // },
    {
      source: "Dale",
      target: "Chloe",
      day: "32",
    },
    {
      source: "Amy",
      target: "Hugo",
      day: "32",
    },
    {
      source: "Clarisse",
      target: "Tyler",
      day: "32",
    },
    {
      source: "Hugo",
      target: "Amy",
      day: "32",
    },
    {
      source: "Sam",
      target: "Faye",
      day: "32",
    },
    {
      source: "Mary",
      target: "Sam",
      day: "37",
    },
    {
      source: "Abigail",
      target: "Dale",
      day: "37",
    },
    {
      source: "Dale",
      target: "Abigail",
      day: "37",
    },
    {
      source: "Sam",
      target: "Mary",
      day: "37",
    },
    {
      source: "Aaron S",
      target: "Mary",
      day: "45",
    },
    {
      source: "Mary",
      target: "Aaron S",
      day: "45",
    },
    {
      source: "Brett",
      target: "Priya",
      day: "45",
    },
    {
      source: "Priya",
      target: "Brett",
      day: "45",
    },
  ],
};
