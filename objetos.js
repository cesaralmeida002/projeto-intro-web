/*const estudante = {
    nome: "César",
    sobrenome: "Almeida",
    numeroMatricula: 202565987,
    notasSemestre1: [8.5, 9.5, 8.2]
};

    console.log(estudante)

estudante.modulo = "modulo: 2"

    console.log(estudante.nome, estudante.notasSemestre1[1], estudante.modulo)

const novoEstudante = {...estudante}
    novoEstudante.nome = "Astrodev",
    novoEstudante.notasSemestre1 = [...estudante.notasSemestre1, 10],
    novoEstudante.modulo = "modulo 3"


    console.log(novoEstudante)*/
//                      ((EXERCÍCIO-2))
const carrinho = {
    nome: "Luiz",
    formaDePagamento:"Cartão de Crédito",
    endereco: "Rua dos DEVS, 007",
        compras: [{nome: "ovo"}, {quantidade:30}, {preco:"12,98"}
                  {nome: "Arroz"}, {quantidade:5}, {preco:"3,98"}
    ]
}
        console.log(carrinho)
        console.log(carrinho.compras)

const carrinhoPresente = {...carrinho}
    carrinhoPresente.nome = "César",
    carrinhoPresente.formaDePagamento = "Cartão Presente"

        console.log(carrinhoPresente.compras)