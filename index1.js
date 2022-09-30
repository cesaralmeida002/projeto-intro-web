//                                          ((PROJETO-INTRO-SEMANA 3))

//1. Transforme os itens que criamos nas últimas semanas em objetos.

const cadastroCliente1 = {
  cliente: "Carlos",
  anoNascimento: 1988,
  preferencial: false,
  nacionalidade: "BR",
  pagamento: ["credito", "debito", "dinheiro", "pix"],
};

const cadastroCliente2 = {
  cliente: "José",
  anoNascimento: 1959,
  preferencial: true,
  nacionalidade: "FR",
  pagamento: ["credito", "debito", "dinheiro"],
};

const cadastroCliente3 = {
  cliente: "Maria",
  anoNascimento: 1960,
  preferencial: false,
  nacionalidade: "IT",
  pagamento: ["debito", "dinheiro"],
};

const cadastroCliente4 = {
  cliente: "Ana",
  anoNascimento: 1987,
  preferencial: true,
  nacionalidade: "US",
  pagamento: ["dinheiro"],
};
//2. Crie um array para guardar os objetos. Este array deve estar vazio, por enquanto;

let inclusaoCliente = [];

//3. Adicione os objetos criados no item 1 ao array de objetos criado no item 2, utilizando o push()
/* 
    inclusaoCliente.push(cadastroCliente1, cadastroCliente2, cadastroCliente3, cadastroCliente4)
        console.log( inclusaoCliente)
*/

// 4. Altere o item “Adicione os novos objetos no array de objetos, utilizando o push()” (item 3),
//para criar uma verificação antes de dar o push. A caraterística booleana do objeto deve ser validada.
//Isto é, o objeto só deve ser adicionado ao array se a propriedade booleana for true;

if (cadastroCliente1.preferencial === true) {
  inclusaoCliente.push(cadastroCliente1);
} else {
  alert(`O item: ${cadastroCliente1.cliente}, não foi adicionado.`);
}

if (cadastroCliente2.preferencial === true) {
  inclusaoCliente.push(cadastroCliente2);
} else {
  alert(`O item ${cadastroCliente2.cliente} não foi adicionado`);
}

if (cadastroCliente3.preferencial === true) {
  inclusaoCliente.push(cadastroCliente3);
} else {
  alert(`O item ${cadastroCliente3.cliente} não foi adicionado`);
}

if (cadastroCliente4.preferencial === true) {
  inclusaoCliente.push(cadastroCliente4);
} else {
  alert(`O item ${cadastroCliente4.cliente} não foi adicionado`);
}

/*
5. Crie uma condição else, que, em caso de valor false na condição acima,
 exiba um **ALERT** avisando para o usuário que o item não foi adicionado, e não faça o push
*/

//                                    ((PROJETO-INTRO-WEB - SEMANA - 3))
/*
1. Reescrevendo o relatório criado utilizando console.log() que começamos na semana 2, altere a forma que a característica de array dos itens seja escrita como um laço que guarde todos os valores da propriedade array do objeto em uma mesma string. Utilize esta string no relatório.
*/

const print = () => {
  console.log("-----ANTES----");

  console.log("CLiente:", inclusaoCliente[0]["cliente"]);
  console.log("Ano de Nascimento:", inclusaoCliente[0]["anoNascimento"]);
  console.log("Preferencial:", inclusaoCliente[0]["preferencial"]);
  console.log("Nacionalidade:", inclusaoCliente[0]["nacionalidade"]);
  console.log(`Pagamento: ${inclusaoCliente[0]["pagamento"]}`);

  console.log("Cliente:", inclusaoCliente[1]["cliente"]);
  console.log("Ano de Nascimento:", inclusaoCliente[1]["anoNascimento"]);
  console.log("Preferencial:", inclusaoCliente[1]["preferencial"]);
  console.log("Nacionalidade:", inclusaoCliente[1]["nacionalidade"]);
  console.log(`Pagamento: ${inclusaoCliente[1]["pagamento"]}`);
};

//print();

/*
2. Ainda no relatório, altere-o para que ele seja criado utilizando laços. Ou seja, você não deve mais imprimir individualmente cada item do relatório. Cada item deve ser exibido a partir de uma iteração do laço. Para testar, adicione mais um item ao array de objetos, e verifique se ele é exibido corretamente.
*/
for (objeto of inclusaoCliente) {
  for (chave in objeto) {
    if (chave === "pagamento") {
      console.log(chave, ":", `${objeto[chave]}`);
    } else {
      console.log(chave, ":", objeto[chave]);
    }
  }
}
/*
3. Crie uma função que receba como parâmetro um objeto, e devolva a string do relatório com os dados do objeto.
*/
const text = (obj) => {
  let string = "";
  for (chave in obj) {
    string += `${chave}: ${obj[chave]}\n`;
  }
  return string;
};

console.log(text(inclusaoCliente[0]));

/*
4. Crie uma função que recebe um array de objetos e uma string. Esta função deve retornar um objeto, e o objeto retornado deve possuir apenas os itens que tenham o nome/título igual à string passada como parâmetro. Caso não exista um item, exiba um ALERT indicando que nenhum item foi encontrado.
*/

const retornaObjeto = (array, string) => {
  for (objeto of array) {
    for (chave in objeto) {
      if (objeto[chave] === string) {
        return objeto;
      }
    }
  }
  alert(`O item ${string} não foi encontrado.`)
  return("Usuário não encontrado")
};
console.log(retornaObjeto(inclusaoCliente, "ana"))
