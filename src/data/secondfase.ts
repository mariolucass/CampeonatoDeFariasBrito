const matches2 = [1, 2, 3, 4, 5, 6, 7, 8].map((elem) => {
  return {
    id: null,
    date: "A definir",

    goals_principal: 0,
    goals_penalty_principal: 0,

    principal: {
      id: null,
      name: `${elem}º Colocado`,
      crest: null,
    },

    goals_visitant: 0,
    goals_penalty_visitant: 0,
    visitant: {
      id: null,
      name: `${17 - elem}º Colocado`,
      crest: null,
    },
  };
});

const matches3 = [1, 2, 3, 4, 5, 6, 7, 8].map((elem, index) => {
  const colocation = index % 2 == 0 ? 16 - elem : 18 - elem;
  return {
    id: null,
    date: "A definir",

    goals_principal: 0,
    goals_penalty_principal: 0,

    principal: {
      id: null,
      name: `${elem}º Colocado`,
      crest: null,
    },

    goals_visitant: 0,
    goals_penalty_visitant: 0,
    visitant: {
      id: null,
      name: `${colocation}º Colocado`,
      crest: null,
    },
  };
});

export const secondMatches = [...matches2, ...matches3];
