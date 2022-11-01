"use strict";

var Continuar = true;

do {
  var ModeloDeCarro = prompt("\n  1- Koenigsegg Jesko Absolut\n  2- Hennessey Venom F5\n  3- Aston Martin Valkyrie\n  4- McLaren Speedtail\n  5- Koenigsegg Gemera\n  6- Pagani Huayra BC Pacchetto Tempesta\n  7- Lamborghini Aventador LP780-4 Ultimae Coupe\n  8- Pininfarina Battista\n  9- Mercedes-AMG One\n  10- Ford GT\n  11- Saber Mais");
  ModeloDeCarro = parseInt(ModeloDeCarro);

  if (isNaN(ModeloDeCarro) || ModeloDeCarro < 1 || ModeloDeCarro > 11) {
    a;
  } else if (ModeloDeCarro === 11) {
    InformacoesSobreOsCarros = prompt("\n    1- Koenigsegg Jesko Absolut\n    2- Hennessey Venom F5\n    3- Aston Martin Valkyrie\n    4- McLaren Speedtail\n    5- Koenigsegg Gemera\n    6- Pagani Huayra BC Pacchetto Tempesta\n    7- Lamborghini Aventador LP780-4 Ultimae Coupe\n    8- Pininfarina Battista\n    9- Mercedes-AMG One\n    10- Ford GT\n  ");
    InformacoesSobreOsCarros = parseInt(InformacoesSobreOsCarros);

    if (isNaN(InformacoesSobreOsCarros) || InformacoesSobreOsCarros < 1 || InformacoesSobreOsCarros > 10) {
      alert();
    }
  }
} while (Continuar === true);