let Continuar = true;

do {
  let ModeloDeCarro = prompt(`
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
  11- Saber Mais`);

  ModeloDeCarro = parseInt(ModeloDeCarro);

  if (isNaN(ModeloDeCarro) || ModeloDeCarro < 1 || ModeloDeCarro > 11) {
    a;
  } else if (ModeloDeCarro === 11) {
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
  `);

    InformacoesSobreOsCarros = parseInt(InformacoesSobreOsCarros);

    if (
      isNaN(InformacoesSobreOsCarros) ||
      InformacoesSobreOsCarros < 1 ||
      InformacoesSobreOsCarros > 10
    ) {
      alert();
    }
  }
} while (Continuar === true);
