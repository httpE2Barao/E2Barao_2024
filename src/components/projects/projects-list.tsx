export interface projectInterface {
  src: string,
  name: string,
  alt: string,
  abt: string,
  site: string,
  repo: string,
  tags?: string | string[],
}

export const projectsList = (language: string) => {
  const renderText = (textObj: { ptBR: string, enUS: string }) => {
    return language === 'pt-BR' ? textObj.ptBR : textObj.enUS;
  };

  // tags = javascript, react, typescript, tailwind, nextjs, bootstrap, jquery, github, figma, uiux, styledcomponents, sass, html, css.

  return [
    {
      src: 'space-tourism',
      tags: ['typescript','react','tailwind','github','figma','html','css'],
      site: 'https://turismo-espacial-xi.vercel.app/',
      repo: 'https://github.com/httpE2Barao/SpaceTourism',
      name: renderText({
        ptBR: 'Turismo Espacial',
        enUS: 'Space Tourism'
      }),
      alt: renderText({
        ptBR: 'Site sobre um turismo no espaço',
        enUS: 'Website about space tourism'
      }),
      abt: renderText({
        ptBR: 'Este projeto é uma aplicação web que apresenta informações sobre uma missão espacial. Utilizando o React e o Tailwind CSS, ele oferece uma interface do usuário moderna e responsiva. Possui recursos avançados do React, como os Hooks, para gerenciar o estado e os efeitos colaterais. Além disso, utiliza técnicas de otimização, como a pré-renderização de imagens, para garantir um carregamento rápido e uma experiência fluida. O código segue boas práticas de organização e estruturação, tornando-o fácil de entender e dar manutenção.',
        enUS: 'This project is a web application that presents information about a space mission. Using React and Tailwind CSS, it offers a modern and responsive user interface. It has advanced React features, such as Hooks, to manage state and side effects. It also uses optimization techniques, such as image pre-rendering, to ensure fast loading and a fluid experience. The code follows good organization and structuring practices, making it easy to understand and maintain.'
      })
    },
    {
      src: 'negociacoes',
      tags: ['typescript','github','api','html','css'],
      site: 'https://negocicoes.vercel.app/dist/index.html',
      repo: 'https://github.com/httpE2Barao/Code-study/tree/main/TypeScript/Negocia%C3%A7%C3%B5es',
      name: renderText({
        ptBR: 'Negociações',
        enUS: 'Negotiations'
      }),
      alt: renderText({
        ptBR: 'Projeto escalável TypeScript',
        enUS: 'Scalable TypeScript project'
      }),
      abt: renderText({
        ptBR: 'Este é um projeto que consome uma API externa e aplica as boas práticas do Typescript. Ele garante a qualidade do código durante a compilação, não permite a geração de código com erros, usa typagem estática e orientação a objeto. Ele também utiliza decorators para adicionar funcionalidades extras às classes, métodos e propriedades. Além disso, ele trata os possíveis erros da API com um micro framework que facilita o gerenciamento de rotas, requisições e respostas.',
        enUS: 'This is a project that consumes an external API and applies the good practices of Typescript. It guarantees the quality of the code during compilation, does not allow the generation of code with errors, uses static typing and object orientation. It also uses decorators to add extra functionality to classes, methods and properties. In addition, it handles possible API errors with a micro-framework that facilitates the management of routes, requests and responses.'
      })
    },
    {
      src: 'stopwatch',
      tags: ['typescript','sass','html','css','github'],
      site: 'https://stopwatch-react-app0.vercel.app/',
      repo: 'https://github.com/httpE2Barao/Stopwatch-react-app',
      name: renderText({
        ptBR: 'Temporizador',
        enUS: 'Stopwatch'
      }),
      alt: renderText({
        ptBR: 'Site sobre modelo de negociação',
        enUS: 'Website about negotiation model'
      }),
      abt: renderText({
        ptBR: 'Este é um projeto que usa as seguintes tecnologias: React, Typescript e Sass. Com React, criei componentes reutilizáveis que usam os hooks useState e useEffect para gerenciar o estado e os efeitos colaterais. Com Typescript, eu defini interfaces para os tipos de dados, fiz conversão deles e evitei conflitos de tipagem. Com Sass, eu estilizei os componentes com variáveis e a adaptação com Media Queries.',
        enUS: 'This is a project that uses the following technologies: React, Typescript and Sass. With React, I created reusable components that use the useState and useEffect hooks to manage state and side effects. With Typescript, I defined interfaces for the data types, converted them and avoided typing conflicts. With Sass, I styled the components with variables and the adaptation with Media Queries.'
      })
    },
    {
      src: 'serenatto-cafe',
      tags: ['javascript','bootstrap','css','github'],
      site: 'https://serenatto-ebon.vercel.app/',
      repo: 'https://github.com/httpE2Barao/Study-Repo/tree/main/Front%20End/Bootstrap/Projeto_Serenatto',
      name: renderText({
        ptBR: 'Caffeteria',
        enUS: 'Coffe shop'
      }),
      alt: renderText({
        ptBR: 'Cafeteria Serenatto',
        enUS: 'Coffee shop website'
      }),
      abt: renderText({
        ptBR: 'O projeto é um site informativo e elegante sobre a cafeteria Serenatto, usando e aprimorando minhas habilidades com o framework Bootstrap. O site consiste na apresentação dos produtos da cafeteria, como cafés especiais, bolos, salgados e vitaminas. Também possui um botão para alternar entre o tema claro e o modo escuro, criando uma atmosfera mais aconchegante e intimista. O objetivo é oferecer uma experiência única e diferenciada para os clientes.',
        enUS: "The project is an informative and elegant website about the Serenatto coffee shop, using and improving my skills with the Bootstrap framework. The site consists of a presentation of the coffee shop's products, such as specialty coffees, cakes, snacks and smoothies. It also has a button to switch between a light and dark theme, creating a more cozy and intimate atmosphere. The aim is to offer a unique and distinctive experience for customers."
      })
    },
    {
      src: 'cep-autocomplete',
      tags: ['javascript','api','html','css'],
      site: 'https://cep-auto-complete.vercel.app/',
      repo: 'https://github.com/httpE2Barao/CEP_auto-complete',
      name: renderText({
        ptBR: 'Temporizador',
        enUS: 'Stopwatch'
      }),
      alt: renderText({
        ptBR: 'Site sobre modelo de negociação',
        enUS: 'Website about negotiation model'
      }),
      abt: renderText({
        ptBR: 'Este é um projeto que usa as seguintes tecnologias: React, Typescript e Sass. Com React, criei componentes reutilizáveis que usam os hooks useState e useEffect para gerenciar o estado e os efeitos colaterais. Com Typescript, eu defini interfaces para os tipos de dados, fiz conversão deles e evitei conflitos de tipagem. Com Sass, eu estilizei os componentes com variáveis e a adaptação com Media Queries.',
        enUS: 'This is a project that uses the following technologies: React, Typescript and Sass. With React, I created reusable components that use the useState and useEffect hooks to manage state and side effects. With Typescript, I defined interfaces for the data types, converted them and avoided typing conflicts. With Sass, I styled the components with variables and the adaptation with Media Queries.'
      })
    },
    {
      src: 'typing-challenge',
      tags: ['javascript','html','css','github'],
      site: 'https://typing-challenge-theta.vercel.app/',
      repo: 'https://github.com/httpE2Barao/typing-challenge',
      name: renderText({
        ptBR: 'Desafio de Digitação',
        enUS: 'Typing Challenge'
      }),
      alt: renderText({
        ptBR: 'Desafio de Digitação - palavras por minuto',
        enUS: 'Typing Challenge - words per minute'
      }),
      abt: renderText({
        ptBR: 'Este projeto combina jQuery e Tailwind CSS para criar um desafio de digitação simples. Com um contador regressivo, ele monitora o tempo de digitação e fornece feedback em tempo real sobre erros. O jQuery gerencia interações do usuário, como iniciar e reiniciar o cronômetro. Ele consume uma API externa, apresentando frases aleatórias para digitação e exibe mensagens de erro se necessário. Ao final, registra o desempenho do usuário em um placar, incluindo média de palavras por minuto e número de acertos e erros, permitindo que acompanhe seu progresso.',
        enUS: "This project combines jQuery and Tailwind CSS to create a simple typing challenge. With a countdown timer, it monitors typing time and provides real-time feedback on errors. jQuery manages user interactions such as starting and restarting the timer. By consuming an external API, it presents random phrases for typing and displays error messages if necessary. At the end, it records the user's performance on a scoreboard, including the average number of words per minute and the number of hits and misses, allowing them to track their progress"
      })
    },
    {
      src: 'digital-bank',
      tags: ['javascript','html','css'],
      site: 'https://httpe2barao.github.io/MoniBank/pages/abrir-conta-form.html',
      repo: 'https://github.com/httpE2Barao/MoniBank',
      name: renderText({
        ptBR: 'Banco digital',
        enUS: 'Digital bank'
      }),
      alt: renderText({
        ptBR: 'Projeto de cadastro em um banco digital',
        enUS: 'Digital Bank Account Sign-Up Project'
      }),
      abt: renderText({
        ptBR: 'Este é um projeto que usa as seguintes tecnologias: React, Typescript e Sass. Com React, criei componentes reutilizáveis que usam os hooks useState e useEffect para gerenciar o estado e os efeitos colaterais. Com Typescript, eu defini interfaces para os tipos de dados, fiz conversão deles e evitei conflitos de tipagem. Com Sass, eu estilizei os componentes com variáveis e a adaptação com Media Queries.',
        enUS: 'This is a project that uses the following technologies: React, Typescript and Sass. With React, I created reusable components that use the useState and useEffect hooks to manage state and side effects. With Typescript, I defined interfaces for the data types, converted them and avoided typing conflicts. With Sass, I styled the components with variables and the adaptation with Media Queries.'
      })
    },
  ];
};