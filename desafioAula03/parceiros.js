const parceiros = [
    [19660156627897, "Fernanda Santos"],
    [23998058019370, "Rafael Souza"],
    [92291338611, "Maria Silva"],
    [55443795656, "Maria Souza"],
    [77743761456, "Ana Costa"],
    [47202302326, "Maria Ferreira"],
    [58017232567, "Sofia Costa"],
    [16733009491247, "Lucas Silva"],
    [63351859919, "Rafael Souza"],
    [84297701780, "Carlos Oliveira"],
]

const parceirosPJ = [];
const parceirosCPF = [];

parceiros.forEach(parceiro => {
  const id = parceiro[0].toString(); // Converter o ID para uma string
  if (id.length === 14) {
    parceirosPJ.push(parceiro);
  } else if (id.length === 11) {
    parceirosCPF.push(parceiro);
  }
});

console.log('Parceiros PJ:', parceirosPJ);
console.log('Parceiros CPF:', parceirosCPF);