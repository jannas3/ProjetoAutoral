function carregaDicionario() {

  var biografias = {

    bio01: {

      nome: "Pantera Negra: Wakanda para Sempre (2022)",

      imagem: "https://i.postimg.cc/nzbfrLv3/n-Z69-WTv7n01woma-Nz3-SHa4in-A9x.jpg",

      descricao:

        "Sinopse: A rainha Ramonda, Shuri, M'Baku, Okoye e as poderosas Dora Milaje lutam para proteger sua nação após a morte do rei T'Challa. Com a ajuda da Cão de Guerra Nakia e de Everett Ross, eles tentam encontrar um novo caminho para Wakanda.",



    },

    bio02: {

      nome: "Gato de Botas 2: O Último Pedido (2022)",

      imagem: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/atJxZfCaQ7kXRFSfbm8cqAKkns7.jpg",

      descricao: "Sinopse: O Gato de Botas descobre que sua paixão pela aventura cobrou seu preço: ele queimou oito de suas nove vidas, deixando-o com apenas uma vida restante. Gato parte em uma jornada épica para encontrar o mítico Último Desejo e restaurar suas nove vidas.",



    },

    bio03: {
      nome: "Avatar: O Caminho da Água (2022)",

      imagem: "https://www.themoviedb.org/t/p/w220_and_h330_face/mbYQLLluS651W89jO7MOZcLSCUw.jpg",

      descricao:

        "Sinopse: 12 anos depois de explorar Pandora e se juntar aos Na'vi, Jake Sully formou uma família com Neytiri e se estabeleceu entre os clãs do novo mundo. Porém, a paz não durará para sempre.",




    },

    bio04: {

      nome: "A Baleia (2022)",

      imagem: "https://www.themoviedb.org/t/p/w220_and_h330_face/4hhd8JuwsHTvpqW9wW9oebsHVu0.jpg",

      descricao:

        "Sinopse: Um professor de inglês recluso que sofre de obesidade severa tenta se reconectar com sua filha adolescente distante para uma última chance de redenção.",



    },

    bio05: {

      nome: "Pânico VI (2023)",

      imagem: "https://www.themoviedb.org/t/p/w220_and_h330_face/oWPBXgmRxFIeo9Ad4EUye8JWs7v.jpg",

      descricao:

        "Sinopse: Sam, Tara, Chad e Mindy, os quatro sobreviventes do massacre realizado pelo Ghostface, decidem deixar Woodsboro para trás em busca de um novo começo em uma cidade diferente. Mas não demora muito para eles se tornarem alvo de um novo serial killer mascarado.",



    },

    bio06: {

      nome: "Shazam! Fúria dos Deuses (2023)",

      imagem: "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/5WCM2gGB0mGunbssHX7okAoEeUv.jpg",

      descricao:

        "Sinopse: Continua a história do adolescente Billy Batson que, ao recitar a palavra mágica “SHAZAM!”, é transformado em seu alto ego adulto de super-herói, Shazam.",



    },

  };

  var content = document.getElementById("content");

  for (var bio in biografias) {

    content.innerHTML +=

      '<div class="card">' +

      '<img src="' +

      biografias[bio].imagem +

      '"/>' +

      "<details>" +

      "<summary>" +

      biografias[bio].nome +

      "</summary>" +

      "<p>" +

      biografias[bio].descricao +

      "</p>" +


      "</details></div>";

  }

}
carregaDicionario();