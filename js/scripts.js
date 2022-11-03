let Continuar = true;

do {
  let Velocidade = 0
  let ModeloDeCarro = prompt(`
  1- Koenigsegg Jesko Absolut (Velocidade Máxima: 531km/h)
  2- Hennessey Venom F5 (Velocidade Máxima: 499km/h)
  3- Aston Martin Valkyrie (Velocidade Máxima: 402km/h)
  4- McLaren Speedtail (Velocidade Máxima: 402km/h)
  5- Koenigsegg Gemera (Velocidade Máxima: 400km/h)
  6- Pagani Huayra BC Pacchetto Tempesta (Velocidade Máxima: 380km/h)
  7- Lamborghini Aventador LP780-4 Ultimae Coupe (Velocidade Máxima: 354km/h)
  8- Pininfarina Battista (Velocidade Máxima: 350km/h)
  9- Mercedes-AMG One (Velocidade Máxima: 350km/h)
  10- Ford GT (Velocidade Máxima: 347km/h)
  11- Saber Mais`);

  ModeloDeCarro = parseInt(ModeloDeCarro);

  if (isNaN(ModeloDeCarro) || ModeloDeCarro < 1 || ModeloDeCarro > 11) {
    alert(`Digite somente números`)
  }
  else if (ModeloDeCarro === 1) {
    ModeloDeCarro = `Koenigsegg Jesko Absolut`
    PainelDeControle = true
  }
  else if (ModeloDeCarro === 2) {
    ModeloDeCarro = `Hennessey Venom F5`
    PainelDeControle = true
   }
   else if (ModeloDeCarro === 3) {
    ModeloDeCarro = `Aston Martin Valkyrie`
    PainelDeControle = true
   }
   else if (ModeloDeCarro === 4) {
    ModeloDeCarro = `McLaren Speedtail`
    PainelDeControle = true
   }
   else if (ModeloDeCarro === 5) {
    ModeloDeCarro = `Koenigsegg Gemera`
    PainelDeControle = true
   }
   else if (ModeloDeCarro === 6) {
    ModeloDeCarro = `Pagani Huayra BC Pacchetto Tempesta`
    PainelDeControle = true
   }
   else if (ModeloDeCarro === 7) {
    ModeloDeCarro = `Lamborghini Aventador LP780-4 Ultimae Coupe`
    PainelDeControle = true
   }
   else if (ModeloDeCarro === 8) {
    ModeloDeCarro = `Pininfarina Battista`
    PainelDeControle = true
   }
   else if (ModeloDeCarro === 9) {
    ModeloDeCarro = `Mercedes-AMG One`
    PainelDeControle = true
   }
   else if (ModeloDeCarro === 10) {
    ModeloDeCarro = `Ford GT`
    PainelDeControle = true
   }
  else if (ModeloDeCarro === 11) {
    let SobreRepetidor = true;

    do {
      InformacoesSobreOsCarros = prompt(`
    1- Koenigsegg Jesko Absolut
    2- Hennessey Venom F5
    3- Aston Martin Valkyrie
    4- McLaren Speedtail
    5- Koenigsegg Gemera
    6- Pagani Huayra BC Pacchetto Tempesta
    7- Lamborghini Aventador LP780-4 Ultimae Coupe
    8- Pininfarina Battista
    9- Mercedes-AMG One
    10- Ford GT
    11- Voltar
  `);

      InformacoesSobreOsCarros = parseInt(InformacoesSobreOsCarros);

      if (
        isNaN(InformacoesSobreOsCarros) ||
        InformacoesSobreOsCarros < 1 ||
        InformacoesSobreOsCarros > 11
      ) {
        alert(`Digite somente números entre 1 e 10`);
      } else {
        switch (InformacoesSobreOsCarros) {
          case 1:
            alert(`A Koenigsegg sabe uma coisa (ou seis) sobre ir rápido e o Jesko Absolut é o mais recente exemplo. Mas enquanto a maioria dos outros carros desta lista atingiu suas velocidades máximas de fato, os 531 km/h são puramente teóricos, pois nenhuma unidade atingiu o feito de fato, no mundo real.

            Com mais de 1.600 cv e 152,9 kgfm de torque a partir de um V8 de 5.0 litros biturbo e uma aerodinâmica aprimorada, o monstro sueco de US$ 2,8 milhões (mais de R$ 13 milhões) tem as credenciais para altas velocidades. 
            
            Velocidade máxima: 531 km/h
            Aceleração de 0 a 100 km/h: Não informado
            Potência: 1.622 cv
            Torque: 152,9 kgfm
            Preço (em dólares): US$ 2,8 Milhões`);
            break;
          case 2:
            alert(`As altas velocidades não são domínio exclusivo das marcas europeias. Os americanos da Hennessey Performance Engineering também sabem algo sobre isso. Enquanto o antigo Venom GT chegava a até 428 km/h, a Hennessey afirma que o próximo Venom F5 passará de 499 km/h, graças a um V8 6.6 biturbo duplo que produz 1.842 cv e 164,9 kgfm de torque. Enquanto o preço é inferior ao de alguns de seus rivais europeus, começando em US$ 1,8 milhões (R$ 8,4 milhões), a Hennessey está planejando construir apenas 24 exemplares.

            Velocidade máxima: 499 km/h
            Aceleração de 0 a 100 km/h: 2,4 segundos
            Potência: 1.842 cv
            Torque: 164,9 kgfm
            Preço (em dólares): US$ 1,8 Milhão`);
            break;
          case 3:
            alert(`A Aston Martin nunca se rendeu totalmente ao hipercarro, ao invés disso, contentou-se em construir excelentes e belos GTs. O Valkyrie é uma mudança de hábito, resultado de uma parceria entre a Aston e seu parceiro na Fórmula 1, a Red Bull Racing, para construir um hipercarro com pedigree de campeão mundial.

            O Valkyrie possui um conjunto mesclando um V12 aspirado, de origem Cosworth, em conjunto a motores elétricos para produzir 1.176 cv e 91,8 kgfm de torque. Parece uma moto: muita potência pra pouco torque. Mas o pensamento é o mesmo: O motor V12 chega a estonteantes 11.000 rpm.
            
            Velocidade máxima: 402 km/h
            Aceleração de 0 a 100 km/h: 2,5 segundos
            Potência: 1.176 cv
            Torque: 91,8 kgfm
            Preço (em dólares): US$ 3 Milhões`);
            break;
          case 4:
            alert(`Mais do que qualquer outra marca nesta lista, a McLaren conhece os hipercarros que quebram recordes. O lendário McLaren F1 manteve o recorde de velocidade por mais de duas décadas, até a chegada do Bugatti Veyron. O novo McLaren Speedtail não vai recuperar o recorde do F1 com uma velocidade máxima de 402 km/h, mas o hipercarro de 1.050 cv e US$ 2 milhões (R$ 9,35 milhões) é, sem dúvida, o carro mais bonito desta lista. 

            Velocidade máxima: 402 km/h
            Aceleração de 0 a 100 km/h: 2,9 segundos
            Potência: 1.050 cv
            Torque: 117,2 kgfm
            Preço (em dólares): US$ 2 Milhões`);
            break;
          case 5:
            alert(`Com espaço para quatro ocupantes e um motor de três cilindros, o Koenigsegg Gemera não parece ser o tipo de veículo que entraria numa lista dos carros mais rápidos do mundo. Mas o Gemera traz ainda 1.723 cv e 356,8 kgfm de torque. A velocidade máxima é "apenas" 400 km/h e o 0 a 100 km/h acontece em 1,9 segundo, tornando esta uma maneira brilhante de assustar três de seus amigos mais próximos.

            Esse desempenho insano vem graças a três motores elétricos, que trabalham ao lado do motor de 2.0 litros de três cilindros, com dois turbos. Os preços começam em US$ 500.000 (R$ 2,3 milhões), o que não é tão insano para o melhor desempenho que a Suécia tem a oferecer.
            
            Velocidade máxima: 400 km/h
            Aceleração de 0 a 100 km/h: 1,9 segundo
            Potência: 1.723 cv
            Torque: 356,8 kgfm
            Preço (em dólares): US$ 500 mil`);
            break;
          case 6:
            alert(`O longevo Pagani Huayra BC Roadster é um carro incomum nesta lista. A potência não é  excessiva, mas o supercarro V12 de pode acelerar até 380 km/h. Com um preço de US$ 3,4 milhões (R$ 15,8 milhões), entrega 830 cv graças ao Pacchetto (Pacote em italiano) Tempesta, que foi introduzido em 2021, mas a Pagani não indicou como isso melhora o tempo de zero a 100 ou a velocidade máxima.

            Velocidade máxima: 380 km/h
            Aceleração de 0 a 100 km/h: 2,8 segundos (estimado)
            Potência: 830 cv
            Torque: 112 kgfm
            Preço (em dólares): US$ 3,4 Milhões`);
            break;
          case 7:
            alert(`Lamborghini é sinônimo de motores V12, mas isso não é para sempre. O novo Aventador LP780-4 Ultimae representa o último prego no caixão para o desempenho somente a gasolina do icônico V12 na montadora italiana. O futuro agora será eletrificado. E que baita prego é este. A potência chega a 780 cv, enquanto o torque é de 73,4 kgfm. Estes são números modestos em relação a alguns dos veículos desta lista, mas atingindo 100 km/h em 2,8 segundos e uma velocidade máxima de 354 km/h, a celebração final da linha Aventador e do V12 movido a gasolina é uma despedida digna.

            Velocidade máxima: 354 km/h
            Aceleração de 0 a 100 km/h: 2,8 segundos
            Potência: 780 cv
            Torque: 73,4 kgfm
            Preço (em dólares): US$ 498.528`);
            break;
          case 8:
            alert(`Se você estiver dando o nome do fundador de sua empresa a um carro, é melhor que seja um esforço bastante épico. Felizmente para a Automobili Pininfarina, o Battista certamente se qualifica. Batizado em homenagem ao Battista Pininfarina, o fundador da casa de design italiana, este monstro 100% elétrico tem 1.926 cv de potência e 240,7 kgfm de torque através de uma configuração de quatro motores semelhante ao Rimac Nevera. Os dois carros compartilham a plataforma e são construídos nas mesmas instalações croatas.

            A velocidade máxima do Battista é menor que a do Nevera: 350 km/h, mas é ligeiramente mais rápido na aceleração. Considerando a economia de 500.000 dólares ao se comprar o Pininfarina e não o Rimac, parece um sacrifício justo.
            
            Velocidade máxima: 350 km/h
            Aceleração de 0 a 100 km/h: 1,8 segundo
            Potência: 1926 cv
            Torque: 240,7 kgfm
            Preço (em dólares): US$ 2 Milhões
            
            `);
            break;
          case 9:
            alert(`O que acontece se colocarmos o mesmo motor de um carro de Fórmula 1 em um modelo que pode andar nas ruas? É a proposta do Mercedes-AMG One, que ficou cinco anos em desenvolvimento após a estreia do protótipo. E entrega exatamente o que prometeu. Seu 1.6 V6 turbo, combinado a outros quatro motores elétricos, entrega 1.063 cv de potência.

            Foi projetado para chegar a 352 km/h e acelera de 0 a 100 km/h em 2,9 segundos. Serão necessários 7 segundos para chegar a 200 km/h e 15,6 s para alcanaçr os 300 km/h. Não é tanto, comparado a alguns dos carros desta lista, mas há pouca dúvida de que o Mercedes-AMG de US$ 2,7 milhões ainda é um dos carros mais rápidos do planeta.
            
            Velocidade máxima: 350 km/h
            Aceleração de 0 a 100 km/h: 2,9 segundos
            Potência: 1.063 cv
            Torque: Não informado
            Preço (em dólares): US$ 2,7 Milhões`);
            break;
          case 10:
            alert(`O mais recente Ford GT é mais mais revolucionário do que seu predecessor, tanto em termos de seu design quanto de seu motor. O V6 3.5 turbinado produz 670 cv e 76 kgfm, sendo o Ford mais rápido de todos os tempos ao atingir 347 km/h. O preço de US$ 500.000 (R$ 2,3 milhões) é adequado para um carro com tanta potência e velocidade, mesmo que pareça bem alto para algo feito pela Ford.

            Velocidade máxima: 347 km/h
            Aceleração de 0 a 100 km/h: 3 segundos
            Potência: 670 cv
            Torque: 76 kgfm
            Preço (em dólares): US$ 500 mil`);
            break;
          case 11:
            SobreRepetidor = false
            alert(`Voltando...`)
            break;
        }
      }
    } while (SobreRepetidor === true);
  }

  do {
    let Selecionador = prompt(`
    1- Acelerar
    2- Desacelerar
    3- Multas
    4- Processo De Multas
    5- Sair
     `)
    Selecionador = parseInt(Selecionador)
    
    if (isNaN(Selecionador) || Selecionador > 5 || Selecionador < 1) {
      alert(`Digite somente números entre 1 a 5`)
    }
    else if (Selecionador === 1) {
      let Repetidor = true

      do {
        Velocidade = prompt(`Digite a velocidade que gostaria de acelerar
        1- 5km/h
        2- 10km/h
        3- 25km/h
        4- 50km/h
        5- 100km/h`)

        if (isNaN(Velocidade) || Velocidade > 5 || Velocidade < 1) {
          alert(`Digite somente números entre 1 a 5`)
        }
      }while(Repetidor === true)
    }
  }while(PainelDeControle === true)
} while (Continuar === true);
