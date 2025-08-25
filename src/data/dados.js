const bruxos = [
{
id: 1,
nome: "Harry Potter",
ano: 7,
varinha: "Azevinho e pena de fênix, 28cm",
mascote: "Coruja (Edwiges)",
patrono: "Cervo",
especialidade: "Sobreviver a Voldemort 😎",
vivo: false 
},
{
id: 2,
nome: "Hermione Granger",
ano: 7,
varinha: "Videira e fibra de coração de dragão, 27cm",
mascote: "Gato (Bichento)",
patrono: "Lontra",
especialidade: "Saber tudo de tudo"
},
{
id: 3,
nome: "Ron Weasley", 
ano: 7,
varinha: "Salgueiro e crina de unicórnio, 35cm",
mascote: "Rato (Perebas)",
patrono: "Terrier Jack Russell",
especialidade: "Xadrez Bruxo",
},
{
    id: 4,
    nome: "Draco Malfoy",
    ano: 7,
    varinha: "Espinheiro e crina de unicórnio, 25cm",
    mascote: "Coruja (não nomeada)",
    patrono: "Desconhecido",
    especialidade: "Ser irritante"
},
{
    id: 5,
    nome: "Luna Lovegood",
    ano: 6,
    varinha: "Madeira de cerejeira e núcleo desconhecido",
    mascote: "Nenhum",
    patrono: "Lebre",
    especialidade: "Ver criaturas imaginárias (ou não) 👻"
},
{
    id: 6,
    nome: "Neville Longbottom",
    ano: 7,
    varinha: "Cerejeira e pelo de unicórnio, 30cm",
    mascote: "Sapo (Trevor)",
    patrono: "Não conhecido",
    especialidade: "Herbologia avançada"
},
{
    id: 7,
    nome: "Cho Chang",
    ano: 7,
    varinha: "Salgueiro e fibra de coração de dragão, 23cm",
    mascote: "Coruja (não nomeada)",
    patrono: "Cisne",
    especialidade: "Quadribol (Apanhadora)"
},
{
    id: 8,
    nome: "Cedrico Diggory",
    ano: 7,
    varinha: " Freixo e pelo de unicórnio, 32cm",
    mascote: "Nenhum",
    patrono: "Não conhecido",
    especialidade: "Cavalheirismo"
},
{
    id: 9,
    nome: "Bellatrix Lestrange",
    ano: 6,
    varinha: "Nogueira e fibra de coração de dragão, 32cm",
    mascote: "Nenhum",
    patrono: "Não conhecido",
    especialidade: "Artes das Trevas"
},
{
    id: 10,
    nome: "Minerva McGonagall",
    ano: 9,
    varinha: "Abeto e fibra de coração de dragão, 24cm",
    mascote: "Gato",
    patrono: "Gato",
    especialidade: "Tranfiguração"
},
];
 const casas = [
{
    id:1,
    nome: "Grifinória",
    fundador: "Godric Gryffindor",
    cores: "Vermelho e Dourado",
    animal: "Leão"
},
{
    id:2,
    nome: "Sonserina",
    fundador: "Salazar Slytherin",
    cores: "Verde e Prata",
    animal: "Serpente"
},
{
    id:3,
    nome: "Corvinal",
    fundador: "Rowena Revenclaw",
    cores: "Azul e Bronze",
    animal: "Águia"
},
{
    id:4,
    nome: "Lufa-Lufa",
    fundador: "Helga Hufflepuff",
    cores: "Amarelo e Preto",
    animal: "Texugo"
}

];
const varinhas = [
{
    id:1,
    material: "Azevinho",
    nucleo: "Pena de Fenix",
    comprimento: "28 cm"
}, 
{
    id:2,
    material: "Videira",
    nucleo: "Fibra de Coração de Dragão",
    comprimento: "27 cm"
},
{
    id:3,
    material: "Salgueiro",
    nucleo: "Pelo de Unicórnio",
    comprimento: "35 cm"
}, 
{
    id:4,
    material: "Carvalho Ingles",
    nucleo: "Pelo de Testrálio",
    comprimento: "32 cm"
}
];
const animais = [
    {
        id:1,
        nome: "Coruja",
        tipo: "Correio/ Companhia"
    },
    {
        id:2,
        nome: "Gato",
        tipo: "Companhia" 
    },
    {
        id:3,
        nome: "Sapo",
        tipo: "Companhia"
    }, 
    {
        id:4,
        nome: "Rato",
        tipo: "Companhia"
    }
];
const pocoes = [
{
    id: 1,
    nome: "Polissuco",
    efeito: "Transforma na aparência de outra pessoa"
},
{
    id: 2,
    nome: "Felix Felicis",
    efeito: "Sorte temporaria"
},
{
    id: 3,
    nome: "Amortentia",
    efeito: "Poção do amor"
},
{
    id: 4,
    nome: "Veritaserum",
    efeito: "Força a dizer a verdade"
}
];
export default {bruxos,casas,varinhas,animais,pocoes};