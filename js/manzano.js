function ex001() {

  let c = prompt("Celsius:");
        alert((9 * c + 160) / 5);
}
function ex002() {
  let f = prompt("Fahrenheit:");
        alert((f - 32) * 5 / 9);
}
function ex003() {
  let raio = prompt("Raio:");
        let altura = prompt("Altura:");
        let volume = Math.PI * raio * raio * altura;
        alert(volume);
}
function ex004() {
    let tempo = prompt("Tempo de viagem (horas):");
        let velocidade = prompt("Velocidade média (km/h):");

        let distancia = tempo * velocidade;
        let litros = distancia / 12;

        alert(
          "Velocidade: " + velocidade +
          "\nTempo: " + tempo +
          "\nDistância: " + distancia +
          "\nLitros usados: " + litros
        );
}
function ex005() {
  let valor = prompt("Valor:");
        let taxa = prompt("Taxa (%):");
        let tempo = prompt("Tempo:");
        let prestacao = Number(valor) + (valor * (taxa / 100)) * tempo;
        alert("Prestação: " + prestacao);
}
function ex006() {
  let a = prompt("Valor A:");
        let b = prompt("Valor B:");
        let temp = a;
        a = b;
        b = temp;
        alert("A agora é: " + a + "\nB agora é: " + b);
}
function ex007() {
      let a = Number(prompt("A:"));
        let b = Number(prompt("B:"));
        let c = Number(prompt("C:"));
        let d = Number(prompt("D:"));
        alert(
          (a + b) + ", " + (a + c) + ", " + (a + d) + "\n" +
          (b + c) + ", " + (b + d) + ", " + (c + d) + "\n" +
          (a * b) + ", " + (a * c) + ", " + (a * d) + "\n" +
          (b * c) + ", " + (b * d) + ", " + (c * d)
        );
}
function ex008() {
   let comp = prompt("Comprimento:");
        let larg = prompt("Largura:");
        let alt = prompt("Altura:");
        alert("Volume: " + (comp * larg * alt));
}
function ex009() {
   let a = prompt("A:");
        let b = prompt("B:");
        let r = (a - b) ** 2;
        alert(r);
}
function ex010() {
let cot = prompt("Cotação do dólar:");
        let dolar = prompt("Quantidade de dólares:");
        alert("Em reais: " + (cot * dolar));
}
function ex011() {
   let cot = prompt("Cotação do dólar:");
        let reais = prompt("Quantidade em reais:");
        alert("Em dólares: " + (reais / cot));
}
function ex012() {
   let a = Number(prompt("A:"));
        let b = Number(prompt("B:"));
        let c = Number(prompt("C:"));
        alert((a + b + c) ** 2);
}
function ex013() {
  let a = Number(prompt("A:"));
        let b = Number(prompt("B:"));
        let c = Number(prompt("C:"));
        alert((a + b + c) ** 2);
}
function ex014() {
    let a = Number(prompt("A:"));
        let b = Number(prompt("B:"));
        let c = Number(prompt("C:"));
        let d = Number(prompt("D:"));
        alert("Produto A*C: " + (a * c) + "\nSoma B+D: " + (b + d));
}
function ex015() {
    let sm = prompt("Salário:");
        let pr = prompt("Percentual (%):");
        alert("Novo salário: " + (Number(sm) + sm * pr / 100));
}
function ex016() {
  let a = Number(prompt("Votos A:"));
        let b = Number(prompt("Votos B:"));
        let c = Number(prompt("Votos C:"));
        let nulos = Number(prompt("Nulos:"));
        let branco = Number(prompt("Brancos:"));

        let total = a + b + c + nulos + branco;

        alert(
          "Total: " + total +
          "\nVálidos: " + ((a + b + c) / total * 100).toFixed(1) + "%" +
          "\nA: " + (a / total * 100).toFixed(1) + "%" +
          "\nB: " + (b / total * 100).toFixed(1) + "%" +
          "\nC: " + (c / total * 100).toFixed(1) + "%" +
          "\nNulos: " + (nulos / total * 100).toFixed(1) + "%" +
          "\nBrancos: " + (branco / total * 100).toFixed(1) + "%"
        );
}
function ex017() {
     let a = Number(prompt("A:"));
        let b = Number(prompt("B:"));
        alert(Math.abs(a - b));
}
function ex018() {
  let n = Number(prompt("Número:"));
        alert(Math.abs(n));
}
function ex019() {
  let n1 = Number(prompt("Nota 1:"));
        let n2 = Number(prompt("Nota 2:"));
        let n3 = Number(prompt("Nota 3:"));
        let n4 = Number(prompt("Nota 4:"));
        let m = (n1 + n2 + n3 + n4) / 4;
        alert((m >= 5 ? "Aprovado" : "Reprovado") + "\nMédia: " + m);
}
function ex020() {
       let n1 = Number(prompt("Nota 1:"));
        let n2 = Number(prompt("Nota 2:"));
        let n3 = Number(prompt("Nota 3:"));
        let n4 = Number(prompt("Nota 4:"));
        let m = (n1 + n2 + n3 + n4) / 4;

        if (m >= 7) {
          alert("Aprovado!\nMédia: " + m);
        } else {
          let ex = Number(prompt("Nota do exame:"));
          let nova = (m + ex) / 2;
          alert(nova >= 5 ? "Aprovado em exame\nMédia: " + nova : "Reprovado\nMédia: " + nova);
        }
}
function ex021() {
   let a = Number(prompt("A:"));
        let b = Number(prompt("B:"));
        let c = Number(prompt("C:"));

        if (a == 0) { alert("A não pode ser zero!"); return; }

        let delta = b * b - 4 * a * c;
        if (delta < 0) { alert("Sem raízes reais"); return; }

        let x1 = (-b + Math.sqrt(delta)) / (2 * a);
        let x2 = (-b - Math.sqrt(delta)) / (2 * a);

        alert("x1 = " + x1 + "\nx2 = " + x2);
}
function ex022() {
 let a = Number(prompt("A:"));
        let b = Number(prompt("B:"));
        let c = Number(prompt("C:"));
        alert([a, b, c].sort((x, y) => x - y));
}
function ex023() {
  let nums = [];
        for (let i = 1; i <= 4; i++) {
          let n = Number(prompt("Número " + i + ":"));
          if (n % 2 == 0 && n % 3 == 0) nums.push(n);
        }
        alert("Divisíveis por 2 e 3: " + nums.join(", "));
}
function ex024() {
  let valores = [];
    for(let i=1;i<=5;i++){
      valores.push(Number(prompt("Número "+i+":")));
    }
    alert("Maior: " + Math.max(...valores) + "\nMenor: " + Math.min(...valores));
}
function ex025() {
  let n = Number(prompt("Número:"));
    alert(n%2==0 ? "Par" : "Ímpar");
}
function ex026() {
    let n = Number(prompt("Valor:"));
    alert(n>=1 && n<=9 ? "Na faixa" : "Fora da faixa");
}
function ex027() {
document.getElementById("ex3-k").addEventListener("click", function () {
  // Leitura do valor inteiro
  let valor = parseInt(prompt("Digite um valor inteiro:"), 10);

  // Verifica se é um número válido
  if (isNaN(valor)) {
    alert("Por favor, digite um número inteiro válido.");
    return;
  }

  // Condição: valor não ser maior que 3
  if (valor <= 3) {
    alert("Valor informado: " + valor);
  } else {
    alert("O valor é maior que 3 e não será apresentado.");
  }
});
}
function ex028() {
  document.getElementById("ex3-l").addEventListener("click", function () {
  // Leitura do nome
  let nome = prompt("Digite o nome da pessoa:");

  if (!nome || nome.trim() === "") {
    alert("Nome inválido.");
    return;
  }

  // Leitura do sexo
  let sexo = prompt("Digite o sexo (M para masculino ou F para feminino):");

  if (!sexo) {
    alert("Sexo inválido.");
    return;
  }

  // Normaliza a entrada
  sexo = sexo.trim().toUpperCase();

  // Verificação e saída
  if (sexo === "M") {
    alert("Ilmo Sr. " + nome);
  } else if (sexo === "F") {
    alert("Ilma Sra. " + nome);
  } else {
    alert("Sexo informado inválido. Use M ou F.");
  }
});
}
function ex029() {
document.getElementById("ex4-a").addEventListener("click", function () {
  // Leitura do número
  let numero = parseInt(prompt("Digite um número para ver a tabuada:"), 10);

  // Validação
  if (isNaN(numero)) {
    alert("Por favor, digite um número válido.");
    return;
  }

  // Monta a tabuada
  let resultado = "Tabuada do " + numero + ":\n\n";

  for (let i = 1; i <= 10; i++) {
    resultado += numero + " x " + i + " = " + (numero * i) + "\n";
  }

  // Apresenta o resultado
  alert(resultado);
});

}
function ex030() {
  document.getElementById("ex4-b").addEventListener("click", function () {
  let soma = 0;

  // Soma dos 100 primeiros números inteiros
  for (let i = 1; i <= 100; i++) {
    soma += i;
  }

  // Apresenta o resultado
  alert("A soma dos cem primeiros números inteiros é: " + soma);
});
}
function ex031() {
  document.getElementById("ex4-c").addEventListener("click", function () {
  let soma = 0;

  // Soma dos números pares de 1 até 500
  for (let i = 1; i <= 500; i++) {
    if (i % 2 === 0) {
      soma += i;
    }
  }

  // Apresenta o resultado
  alert("O somatório dos números pares de 1 até 500 é: " + soma);
});
}
function ex032() {
 document.getElementById("ex4-d").addEventListener("click", function () {
  let resultado = "Números ímpares de 0 a 20:\n\n";

  // Percorre a faixa de 0 até 20
  for (let i = 0; i <= 20; i++) {
    // Verificação lógica: se o número é ímpar
    if (i % 2 !== 0) {
      resultado += i + "\n";
    }
  }

  // Apresenta os valores
  alert(resultado);
});
}
function ex033() {
  document.getElementById("ex4-e").addEventListener("click", function () {
  let base = 3;
  let resultado = 1; // 3^0 = 1
  let saida = "Potências de 3 (expoente de 0 a 15):\n\n";

  // Laço do expoente 0 até 15
  for (let expoente = 0; expoente <= 15; expoente++) {
    if (expoente === 0) {
      resultado = 1;
    } else {
      resultado *= base;
    }

    saida += "3 ^ " + expoente + " = " + resultado + "\n";
  }

  // Apresenta os resultados
  alert(saida);
});

  

  // Apresenta o resultado
  alert("Resultado de " + base + " elevado a " + expoente + " é: " + resultado);

}
function ex034() {
document.getElementById("ex4-f").addEventListener("click", function () {
  // Leitura da base
  let base = parseInt(prompt("Digite o valor da base (B):"), 10);

  // Leitura do expoente
  let expoente = parseInt(prompt("Digite o valor do expoente (E):"), 10);

  // Validação
  if (isNaN(base) || isNaN(expoente) || expoente < 0) {
    alert("Digite valores inteiros válidos (expoente maior ou igual a zero).");
    return;
  }

  let resultado = 1;

  // Cálculo da potência usando repetição
  for (let i = 1; i <= expoente; i++) {
    resultado *= base;
  }

  // Apresenta o resultado
  alert("Resultado de " + base + " elevado a " + expoente + " é: " + resultado);
});

}
function ex035() {
  document.getElementById("ex4-g").addEventListener("click", function () {
  let termo1 = 1;
  let termo2 = 1;
  let proximo;
  let resultado = "Série de Fibonacci (15 termos):\n\n";

  // Mostra os dois primeiros termos
  resultado += termo1 + "\n";
  resultado += termo2 + "\n";

  // Calcula do 3º até o 15º termo
  for (let i = 3; i <= 15; i++) {
    proximo = termo1 + termo2;
    resultado += proximo + "\n";
    termo1 = termo2;
    termo2 = proximo;
  }

  // Apresenta a série
  alert(resultado);
});

}
function ex036() {
 document.getElementById("ex4-h").addEventListener("click", function () {
  let resultado = "Conversão de Celsius para Fahrenheit:\n\n";
  resultado += "Celsius  |  Fahrenheit\n";
  resultado += "----------------------\n";

  // Varia de 10 em 10, de 10 até 100
  for (let c = 10; c <= 100; c += 10) {
    let f = (9 / 5) * c + 32;
    resultado += c + " °C   |  " + f.toFixed(1) + " °F\n";
  }

  // Apresenta o resultado
  alert(resultado);
});
}
function ex037() {
  document.getElementById("ex4-i").addEventListener("click", function () {
  let soma = 0;
  let valor;

  // Leitura de 10 valores numéricos
  for (let i = 1; i <= 10; i++) {
    valor = parseFloat(prompt("Digite o " + i + "º valor:"));

    // Validação do valor
    if (isNaN(valor)) {
      alert("Valor inválido. Operação cancelada.");
      return;
    }

    soma += valor;
  }

  // Cálculo da média
  let media = soma / 10;

  // Apresentação dos resultados
  alert(
    "Somatório dos valores: " + soma.toFixed(2) +
    "\nMédia aritmética: " + media.toFixed(2)
  );
});

}
function ex038() {
  document.getElementById("ex4-j").addEventListener("click", function () {
  let soma = 0;
  let quantidade = 0;

  // Percorre a faixa de 50 a 70
  for (let i = 50; i <= 70; i++) {
    // Verifica se o número é par
    if (i % 2 === 0) {
      soma += i;
      quantidade++;
    }
  }

  // Cálculo da média aritmética
  let media = soma / quantidade;

  // Apresentação dos resultados
  alert(
    "Soma dos valores pares de 50 a 70: " + soma +
    "\nMédia aritmética: " + media
  );
});

}
function ex039() {
  document.getElementById("ex4-k").addEventListener("click", function () {
  let areaTotal = 0;
  let continuar = "SIM";

  while (continuar === "SIM") {
    // Leitura do nome do cômodo
    let comodo = prompt("Digite o nome do cômodo:");

    if (!comodo || comodo.trim() === "") {
      alert("Nome do cômodo inválido.");
      return;
    }

    // Leitura da largura
    let largura = parseFloat(prompt("Digite a largura do cômodo (em metros):"));

    // Leitura do comprimento
    let comprimento = parseFloat(prompt("Digite o comprimento do cômodo (em metros):"));

    // Validação
    if (isNaN(largura) || isNaN(comprimento)) {
      alert("Valores inválidos. Operação encerrada.");
      return;
    }

    // Cálculo da área do cômodo
    let areaComodo = largura * comprimento;
    areaTotal += areaComodo;

    // Mostra a área do cômodo
    alert(
      "Cômodo: " + comodo +
      "\nÁrea: " + areaComodo.toFixed(2) + " m²"
    );

    // Pergunta se deseja continuar
    continuar = prompt(
      "Deseja continuar calculando outros cômodos?\nDigite SIM ou NAO"
    );

    if (!continuar) {
      alert("Resposta inválida. Operação encerrada.");
      return;
    }

    continuar = continuar.trim().toUpperCase();
  }

  // Apresenta a área total da residência
  alert("Área total da residência: " + areaTotal.toFixed(2) + " m²");
});

}
function ex040() {
document.getElementById("ex4-l").addEventListener("click", function () {
  let maior = null;
  let menor = null;
  let valor;

  while (true) {
    valor = parseInt(
      prompt("Digite um valor inteiro positivo (ou um valor negativo para encerrar):"),
      10
    );

    // Validação
    if (isNaN(valor)) {
      alert("Valor inválido. Digite um número inteiro.");
      continue;
    }

    // Condição de parada: valor negativo
    if (valor < 0) {
      break;
    }

    // Atualiza maior e menor
    if (maior === null || valor > maior) {
      maior = valor;
    }

    if (menor === null || valor < menor) {
      menor = valor;
    }
  }

  // Verifica se algum valor válido foi informado
  if (maior === null || menor === null) {
    alert("Nenhum valor positivo foi informado.");
  } else {
    alert(
      "Maior valor informado: " + maior +
      "\nMenor valor informado: " + menor
    );
  }
});
}
function ex041() {
  document.getElementById("ex5-a").addEventListener("click", function () {
  let resultado = "Quadrados dos números de 15 a 200:\n\n";

  // Percorre os números de 15 até 200
  for (let i = 15; i <= 200; i++) {
    resultado += i + "² = " + (i * i) + "\n";
  }

  // Apresenta o resultado
  alert(resultado);
});

}
function ex042() {
  document.getElementById("ex5-b").addEventListener("click", function () {
  let soma = 0;

  // Soma dos números pares de 1 até 500
  for (let i = 1; i <= 500; i++) {
    if (i % 2 === 0) {
      soma += i;
    }
  }

  // Apresenta o resultado
  alert("O somatório dos valores pares de 1 até 500 é: " + soma);
});
}
function ex043() {
 document.getElementById("ex5-c").addEventListener("click", function () {
  let resultado = "Números divisíveis por 4 menores que 200:\n\n";

  // Contador iniciado em 1
  for (let i = 1; i < 200; i++) {
    // Verificação lógica: divisível por 4
    if (i % 4 === 0) {
      resultado += i + "\n";
    }
  }

  // Apresenta os resultados
  alert(resultado);
});

}
function ex044() {
 document.getElementById("ex5-d").addEventListener("click", function () {
  let graosNoQuadro = 1;   // 1º quadro
  let soma = 0.0;         // acumulador do tipo real (Number)
  let resultado = "Grãos de trigo no tabuleiro de xadrez:\n\n";

  // Do 1º ao 64º quadro
  for (let quadro = 1; quadro <= 64; quadro++) {
    soma += graosNoQuadro;

    // (opcional) mostrar cada quadro
    resultado += "Quadro " + quadro + ": " + graosNoQuadro + " grão(s)\n";

    // dobra para o próximo quadro
    graosNoQuadro *= 2;
  }

  resultado += "\nSomatório total de grãos: " + soma;

  // Apresenta o resultado
  alert(resultado);
});

}
function ex045() {
  document.getElementById("ex5-e").addEventListener("click", function () {
  let somaFatoriais = 0;

  // Função para calcular fatorial
  function fatorial(n) {
    let fat = 1;
    for (let i = 1; i <= n; i++) {
      fat *= i;
    }
    return fat;
  }

  // Leitura de 15 valores inteiros
  for (let i = 1; i <= 15; i++) {
    let valor = parseInt(
      prompt("Digite o " + i + "º valor inteiro:"), 
      10
    );

    // Validação
    if (isNaN(valor) || valor < 0) {
      alert("Valor inválido. Digite apenas números inteiros maiores ou iguais a zero.");
      return;
    }

    // Calcula o fatorial e soma
    somaFatoriais += fatorial(valor);
  }

  // Apresenta o resultado final
  alert("Somatório dos fatoriais dos valores informados: " + somaFatoriais);
});

}
function ex046() {
  document.getElementById("ex5-f").addEventListener("click", function () {
  let soma = 0;
  let quantidade = 0;
  let valor;

  while (true) {
    valor = parseFloat(
      prompt("Digite um valor numérico positivo (ou um valor negativo para encerrar):")
    );

    // Validação
    if (isNaN(valor)) {
      alert("Valor inválido. Digite um número.");
      continue;
    }

    // Condição de parada
    if (valor < 0) {
      break;
    }

    soma += valor;
    quantidade++;
  }

  // Verifica se algum valor positivo foi informado
  if (quantidade === 0) {
    alert(
      "Nenhum valor positivo foi informado.\n" +
      "Somatório: 0\n" +
      "Quantidade de valores lidos: 0\n" +
      "Média aritmética: 0"
    );
  } else {
    let media = soma / quantidade;

    alert(
      "Somatório dos valores: " + soma.toFixed(2) +
      "\nQuantidade de valores lidos: " + quantidade +
      "\nMédia aritmética: " + media.toFixed(2)
    );
  }
});

}
function ex047() {
 document.getElementById("ex5-g").addEventListener("click", function () {
  let resultado = "Fatorial dos números ímpares de 1 a 10:\n\n";

  // Função para calcular fatorial
  function fatorial(n) {
    let fat = 1;
    for (let i = 1; i <= n; i++) {
      fat *= i;
    }
    return fat;
  }

  // Percorre a faixa de 1 a 10
  for (let i = 1; i <= 10; i++) {
    // Verifica se o número é ímpar
    if (i % 2 !== 0) {
      resultado += i + "! = " + fatorial(i) + "\n";
    }
  }

  // Apresenta os resultados
  alert(resultado);
});


}
function ex048() {
  document.getElementById("ex5-h").addEventListener("click", function () {
  let areaTotal = 0;
  let continuar = "SIM";

  while (continuar === "SIM") {
    // Nome do cômodo
    let comodo = prompt("Digite o nome do cômodo:");

    if (!comodo || comodo.trim() === "") {
      alert("Nome do cômodo inválido.");
      return;
    }

    // Largura do cômodo
    let largura = parseFloat(prompt("Digite a largura do cômodo (em metros):"));

    // Comprimento do cômodo
    let comprimento = parseFloat(prompt("Digite o comprimento do cômodo (em metros):"));

    // Validação
    if (isNaN(largura) || isNaN(comprimento) || largura <= 0 || comprimento <= 0) {
      alert("Dimensões inválidas. Operação encerrada.");
      return;
    }

    // Cálculo da área do cômodo
    let areaComodo = largura * comprimento;
    areaTotal += areaComodo;

    // Exibe a área do cômodo
    alert(
      "Cômodo: " + comodo +
      "\nÁrea: " + areaComodo.toFixed(2) + " m²"
    );

    // Pergunta se deseja continuar
    continuar = prompt(
      "Deseja continuar calculando outros cômodos?\nDigite SIM ou NAO"
    );

    if (!continuar) {
      alert("Resposta inválida. Operação encerrada.");
      return;
    }

    continuar = continuar.trim().toUpperCase();
  }

  // Exibe a área total da residência
  alert("Área total da residência: " + areaTotal.toFixed(2) + " m²");
});

}
function ex049() {
document.getElementById("ex5-i").addEventListener("click", function () {
  let maior = null;
  let menor = null;
  let valor;

  while (true) {
    valor = parseInt(
      prompt("Digite um valor inteiro positivo (ou um valor negativo para encerrar):"),
      10
    );

    // Validação
    if (isNaN(valor)) {
      alert("Valor inválido. Digite um número inteiro.");
      continue;
    }

    // Condição de parada
    if (valor < 0) {
      break;
    }

    // Atualiza maior e menor
    if (maior === null || valor > maior) {
      maior = valor;
    }

    if (menor === null || valor < menor) {
      menor = valor;
    }
  }

  // Apresenta o resultado
  if (maior === null || menor === null) {
    alert("Nenhum valor positivo foi informado.");
  } else {
    alert(
      "Maior valor informado: " + maior +
      "\nMenor valor informado: " + menor
    );
  }
});

}
function ex050() {
document.getElementById("ex5-j").addEventListener("click", function () {
  let dividendo = parseInt(prompt("Digite o dividendo (número inteiro):"), 10);
  let divisor = parseInt(prompt("Digite o divisor (número inteiro maior que zero):"), 10);

  // Validações
  if (isNaN(dividendo) || isNaN(divisor)) {
    alert("Valores inválidos. Digite números inteiros.");
    return;
  }

  if (divisor === 0) {
    alert("Divisor não pode ser zero.");
    return;
  }

  let quociente = 0;
  let resto = Math.abs(dividendo);
  let divisorAbs = Math.abs(divisor);

  // Loop para descobrir quantas vezes o divisor cabe no dividendo
  while (resto >= divisorAbs) {
    resto -= divisorAbs;
    quociente++;
  }

  // Ajuste de sinal do quociente
  if ((dividendo < 0 && divisor > 0) || (dividendo > 0 && divisor < 0)) {
    quociente = -quociente;
  }

  // Apresenta o resultado
  alert(
    "Resultado da divisão inteira:\n" +
    "Quociente: " + quociente +
    "\nResto: " + resto
  );
});

}
function ex051() {
  document.getElementById("ex6-a").addEventListener("click", function () {
  let resultado = "Quadrados dos números inteiros de 15 a 200:\n\n";

  // Percorre os números de 15 até 200
  for (let i = 15; i <= 200; i++) {
    resultado += i + "² = " + (i * i) + "\n";
  }

  // Apresenta o resultado
  alert(resultado);
});

}
function ex052() {
  document.getElementById("ex6-b").addEventListener("click", function () {
  // Leitura do número
  let numero = parseInt(prompt("Digite um número para ver a tabuada:"), 10);

  // Validação
  if (isNaN(numero)) {
    alert("Por favor, digite um número válido.");
    return;
  }

  let resultado = "Tabuada do " + numero + ":\n\n";

  // Gera a tabuada de 1 a 10
  for (let i = 1; i <= 10; i++) {
    resultado += numero + " x " + i + " = " + (numero * i) + "\n";
  }

  // Apresenta o resultado
  alert(resultado);
});

}
function ex053() {
document.getElementById("ex6-c").addEventListener("click", function () {
  let soma = 0;

  // Soma dos cem primeiros números inteiros
  for (let i = 1; i <= 100; i++) {
    soma += i;
  }

  // Apresenta o resultado
  alert("A soma dos cem primeiros números inteiros é: " + soma);
});

}
function ex054() {
 document.getElementById("ex6-d").addEventListener("click", function () {
  let soma = 0;

  // Percorre os números de 1 até 500
  for (let i = 1; i <= 500; i++) {
    // Verifica se o número é par
    if (i % 2 === 0) {
      soma += i;
    }
  }

  // Apresenta o resultado
  alert("O somatório dos valores pares de 1 até 500 é: " + soma);
});

}
function ex055() {
document.getElementById("ex6-e").addEventListener("click", function () {
  let resultado = "";

  // Percorre os números de 0 até 20
  for (let i = 0; i <= 20; i++) {
    // Verifica se o número é ímpar
    if (i % 2 !== 0) {
      resultado += i + " ";
    }
  }

  // Apresenta os números ímpares encontrados
  alert("Números ímpares entre 0 e 20:\n" + resultado);
});
}
function ex056() {
  document.getElementById("ex6-f").addEventListener("click", function () {
  let resultado = "";
  let contador = 1; // contador iniciado em 1

  // Enquanto o contador for menor que 200
  while (contador < 200) {
    // Verifica se é divisível por 4
    if (contador % 4 === 0) {
      resultado += contador + " ";
    }
    contador++;
  }

  // Exibe o resultado
  alert("Números divisíveis por 4 menores que 200:\n" + resultado);
});
  }

  
function ex057() {
 document.getElementById("ex6-g").addEventListener("click", function () {
  let resultado = "";
  let base = 3;
  let potencia = 1; // 3^0 = 1

  for (let expoente = 0; expoente <= 15; expoente++) {
    if (expoente === 0) {
      potencia = 1;
    } else {
      potencia = potencia * base; // multiplicação sucessiva
    }

    resultado += `3^${expoente} = ${potencia}\n`;
  }

  alert("Potências de 3 (expoente 0 a 15):\n\n" + resultado);
});

  }

  
function ex058() {
 document.getElementById("ex6-h").addEventListener("click", function () {
  let base = parseInt(prompt("Digite o valor da base (B):"));
  let expoente = parseInt(prompt("Digite o valor do expoente (E):"));

  if (isNaN(base) || isNaN(expoente) || expoente < 0) {
    alert("Valores inválidos. Digite números inteiros e expoente maior ou igual a zero.");
    return;
  }

  let resultado = 1;

  for (let i = 1; i <= expoente; i++) {
    resultado = resultado * base; // multiplicação sucessiva
  }

  alert(`Resultado:\n${base}^${expoente} = ${resultado}`);
});

}
function ex059() {
 document.getElementById("ex6-i").addEventListener("click", function () {
  let termo1 = 1;
  let termo2 = 1;
  let fibonacci = [termo1, termo2];

  for (let i = 3; i <= 15; i++) {
    let proximo = termo1 + termo2;
    fibonacci.push(proximo);

    termo1 = termo2;
    termo2 = proximo;
  }

  alert(
    "Série de Fibonacci (15 termos):\n\n" +
    fibonacci.join(", ")
  );
});

}
function ex060() {
 document.getElementById("ex6-j").addEventListener("click", function () {
  let resultado = "Conversão Celsius → Fahrenheit\n\n";

  for (let c = 10; c <= 100; c += 10) {
    let f = (9 * c) / 5 + 32;
    resultado += c + " °C = " + f.toFixed(1) + " °F\n";
  }

  alert(resultado);
});

  }

function ex061() {
   document.getElementById("ex6-k").addEventListener("click", function () {
  let resultado = "";

  // Função para calcular o fatorial
  function fatorial(n) {
    let f = 1;
    for (let i = 1; i <= n; i++) {
      f *= i;
    }
    return f;
  }

  // Calcula o fatorial dos números ímpares de 1 a 10
  for (let i = 1; i <= 10; i += 2) {
    resultado += `Fatorial de ${i}: ${fatorial(i)}\n`;
  }

  // Exibe o resultado
  alert(resultado);
});

}

const btns = document.querySelectorAll(".exercise");

btns.forEach((btn) => {
  const num = btn.querySelector(".letter").textContent.padStart(3, "0");
  btn.addEventListener("click", () => {
    const funcName = `ex${num}`;
    if (typeof window[funcName] === "function") {
      window[funcName]();
    } else {
      console.error(`Função ${funcName} não existe!`);
    }
  });
});
