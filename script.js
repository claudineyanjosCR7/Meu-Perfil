// toggle icon navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}
// scroll sections
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            // active navbar links
            navLinks.forEach(link => {
                link.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
            // active sections for animation on scroll
            sec.classList.add('show-animate');
        }
       // if want to use animation that repeats on scroll use this
         else {
            sec.classList.remove('show-animate');
          }
    });

    // sticky header

    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);


    //remove toggle icon and navbar when click navbar links (scroll)
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

    // animation footer on scroll

    let footer = document.querySelector('footer');
    footer.classList.toggle('show-animate', this.innerHeight + this.scrollY >= document.scrollingElement.scrollHeight);

}

//Idioma site

//const translations = {
    //"pt": {
        //"title": "Bem-vindo ao meu site",
        //"description": "Este é um site de exemplo."
    //},
    //"en": {
       // "title": "Welcome to my website",
        //"description": "This is a sample website."
    //}
//};

//function changeLanguage(lang) {
   // document.querySelectorAll("[data-translate]").forEach(element => {
        //const key = element.getAttribute("data-translate");
       // element.textContent = translations[lang][key];
   // });
   // document.documentElement.lang = lang;
//}

//document.getElementById("btn-pt").addEventListener("click", () => changeLanguage("pt"));
//document.getElementById("btn-en").addEventListener("click", () => changeLanguage("en"));

// Dicionário de traduções
const translations = {
  en: {
    // Navbar
    nav_home: "Home",
    nav_about: "About",
    nav_education: "Education",
    nav_skills: "Skills",
    nav_contact: "Contact",

    // Home
    home_hi: "Hi, I'm Claudiney",
    home_role: "Frontend Developer",
    home_description:
      "I'm a dedicated person, focused on personal and professional growth, with an ease of learning and adapting to new challenges.",
    btn_hire: "Hire Me",
    btn_talk: "Let's Talk",

    // About
    about_title: "About Me",
    about_role: "Frontend Developer!",
    about_description:` 
      My name is Claudiney Ronaldo. I am 37 years old, married, and the father of a 10-year-old daughter.

I am currently a university student and enjoy combining my studies with my passions,
such as drawing and playing the guitar. I also love playing soccer—it helps me relax and stay active.

I consider myself an empathetic and proactive person, always ready to help those in need.
I am very responsible, both in my personal and academic commitments, and I am always
looking for ways to improve and learn more. I enjoy engaging in projects that challenge me
and I believe that teamwork is essential to achieving better results.

In the academic environment, I am determined to grow and develop, always seeking new ways to apply my knowledge.
I have leadership and teamwork skills, and I am committed to the causes I believe in.
I am always ready to support my colleagues and strive to learn practical and innovative solutions.

I believe it is important to balance my personal and academic life and am always looking for ways to grow
and apply what I am learning. I want to move forward. combining my skills to contribute wherever I am.
I'm a Frontend Developer passionate about creating engaging and functional digital experiences.
With a solid background in HTML, CSS, and JavaScript, I'm always looking for new challenges and opportunities
to hone my skills and contribute to innovative projects."
`,

    about_readmore: "Read More",

    // Education
    education_title: "My Journey",
    education_subtitle: "Education",
    edu_course1: "Computer Systems and Security - UAM",
    edu_desc1:
      "Business Administration Technician at Colegio Renil, focused on Marketing and People Management.",
    edu_course2: "Computational Environments and Connectivity - UAM",
    edu_desc2:
      "Information Systems degree at Anhembi Morumbi, focused on HTML, CSS and JavaScript.",
    edu_course3: "Software Quality Management - UAM",
    edu_desc3:
      "Computer Science degree at Anhembi Morumbi, focused on HTML, CSS and JavaScript.",
    edu_course4:
      "Models, Methods and Techniques of Software Engineering - UAM",
    edu_desc4:
      "Frontend Development degree at Universidade ABC, focused on HTML, CSS and JavaScript.",

    // Experience
    experience_subtitle: "Experience",
    exp_course1: "Distributed and Mobile Systems - UAM",
    exp_desc1:
      "Frontend Development degree at Universidade ABC, focused on HTML, CSS and JavaScript.",
    exp_course2:
      "Usability, Web Development, Mobile and Games - UAM",
    exp_desc2:
      "Frontend Development degree at Universidade ABC, focused on HTML, CSS and JavaScript.",
    exp_course3: "Artificial Intelligence - UAM",
    exp_desc3:
      "Frontend Development degree at Universidade ABC, focused on HTML, CSS and JavaScript.",
    exp_course4: "Enterprise Architectures - UAM",
    exp_desc4:
      "Frontend Development degree at Universidade ABC, focused on HTML, CSS and JavaScript.",

    // Skills
    skills_title: "My Skills",
    skills_coding: "Coding Skills",
    skills_professional: "Professional Skills",

    // Contact
    contact_title: "Contact Me",
    contact_name: "Full Name",
    contact_email: "Email Address",
    contact_mobile: "Mobile Number",
    contact_subject: "Email Subject",
    contact_message: "Your Message",
    contact_submit: "Submit",

    // Footer
    footer_text: "Copyright © 2025 by Claudiney - DarkCom | All rights reserved.",
  },

  pt: {
    // Navbar
    nav_home: "Início",
    nav_about: "Sobre",
    nav_education: "Formação",
    nav_skills: "Habilidades",
    nav_contact: "Contato",

    // Home
    home_hi: "Olá, eu sou Claudiney",
    home_role: "Desenvolvedor Frontend",
    home_description:
      "Sou uma pessoa dedicada, focada no crescimento pessoal e profissional, com facilidade de aprendizado e adaptação a novos desafios.",
    btn_hire: "Me Contrate",
    btn_talk: "Vamos Conversar",

    // About
about_title: "Sobre Mim",
about_role: "Desenvolvedor Frontend!",
about_description: `
Meu nome é Claudiney Ronaldo, tenho 37 anos, sou casado e pai de uma menina de 10 anos. 
Atualmente sou estudante universitário e gosto de equilibrar meus estudos com minhas paixões, 
como desenhar e tocar violão. Também amo jogar futebol — isso me ajuda a relaxar e me manter ativo.

Considero-me uma pessoa empática e proativa, sempre pronta para ajudar quem precisa. 
Sou muito responsável, tanto em meus compromissos pessoais quanto acadêmicos, 
e estou sempre buscando maneiras de melhorar e aprender mais. 
Gosto de me envolver em projetos que me desafiam e acredito que o trabalho em equipe 
é essencial para alcançar melhores resultados.

No ambiente acadêmico, sou determinado a crescer e me desenvolver, 
sempre procurando novas formas de aplicar meu conhecimento. 
Tenho habilidades de liderança e trabalho em equipe, e sou comprometido com as causas em que acredito. 
Estou sempre pronto para apoiar meus colegas e me esforço para aprender soluções práticas e inovadoras.

Acredito que é importante equilibrar a vida pessoal e acadêmica, 
e estou sempre procurando formas de crescer e aplicar o que estou aprendendo. 
Quero continuar evoluindo, combinando minhas habilidades para contribuir onde quer que esteja. 
Sou um Desenvolvedor Frontend apaixonado por criar experiências digitais envolventes e funcionais. 
Com uma base sólida em HTML, CSS e JavaScript, estou sempre em busca de novos desafios e oportunidades 
para melhorar minhas habilidades e contribuir com projetos inovadores.
`,

    about_readmore: "Leia Mais",

    // Education
    education_title: "Minha Jornada",
    education_subtitle: "Educação",
    edu_course1: "Sistemas Computacionais e Segurança - UAM",
    edu_desc1:
      "Técnico em Administração de Empresas no Colégio Renil, com foco em Marketing e Gestão de Pessoas.",
    edu_course2: "Ambientes Computacionais e Conectividade - UAM",
    edu_desc2:
      "Graduação em Sistemas de Informação na Faculdade Anhembi Morumbi, com foco em HTML, CSS e JavaScript.",
    edu_course3: "Gestão de Qualidade de Software - UAM",
    edu_desc3:
      "Graduação em Ciência da Computação na Faculdade Anhembi Morumbi, com foco em HTML, CSS e JavaScript.",
    edu_course4:
      "Modelos, Métodos e Técnicas da Engenharia de Software - UAM",
    edu_desc4:
      "Graduação em Desenvolvimento Frontend na Universidade ABC, com foco em HTML, CSS e JavaScript.",

    // Experience
    experience_subtitle: "Experiência",
    exp_course1: "Sistemas Distribuídos e Mobile - UAM",
    exp_desc1:
      "Graduação em Desenvolvimento Frontend na Universidade ABC, com foco em HTML, CSS e JavaScript.",
    exp_course2:
      "Usabilidade, Desenvolvimento Web, Mobile e Jogos - UAM",
    exp_desc2:
      "Graduação em Desenvolvimento Frontend na Universidade ABC, com foco em HTML, CSS e JavaScript.",
    exp_course3: "Inteligência Artificial - UAM",
    exp_desc3:
      "Graduação em Desenvolvimento Frontend na Universidade ABC, com foco em HTML, CSS e JavaScript.",
    exp_course4: "Arquiteturas Empresariais - UAM",
    exp_desc4:
      "Graduação em Desenvolvimento Frontend na Universidade ABC, com foco em HTML, CSS e JavaScript.",

    // Skills
    skills_title: "Minhas Habilidades",
    skills_coding: "Habilidades de Programação",
    skills_professional: "Habilidades Profissionais",

    // Contact
    contact_title: "Fale Comigo",
    contact_name: "Nome Completo",
    contact_email: "Endereço de E-mail",
    contact_mobile: "Número de Celular",
    contact_subject: "Assunto do E-mail",
    contact_message: "Sua Mensagem",
    contact_submit: "Enviar",

    // Footer
    footer_text: "Copyright © 2026 por Claudiney - DarkCom | Todos os direitos reservados.",
  },
};

// Função para trocar idioma
function changeLanguage(lang) {
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (translations[lang] && translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });
}


