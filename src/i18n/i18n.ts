import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      aboutUs: "About Us",
      courses: "Courses",
      support: "Support",
      extraContent: "Extra Content",
      language1: "Portuguese",
      language2: "English",
      language3: "Spanish",
      studentArea: "Student Area",
      title: "Find out a little about what we have to offer:",
      titleModules: "Some of Our Modules",
      buttonModules: "View Full Course",
      titleReasons: "Why Choose Descomplicando?",
      subTitleR1: "Created and managed by doctors!",
      subTitleR2: "Love for what you do...",
      subTitleR3: "High quality material!",
      subTitleR4: "Straight to the point!",
      subTitleR5: "Those who use it, approve!",
      textReason1:
        "Descomplica is a company created, organized and managed by doctors, helping and guiding you is our main objective.",
      textReason2:
        "Our team loves what they do. We offer you our enthusiasm, as well as our excellent teaching methods, all so that you can join us!",
      textReason3:
        "Classes, PDFs and questions directly from the residency exams answered and explained. In addition to integrated artificial intelligence, with 24-hour support for your questions.",
      textReason4:
        "Our team knows exactly the path needed to achieve your dreams.",
      textReason5:
        "Tested and approved by countless students and professionals working in the medical field, regardless of the area, come and be a part of it!",
      titleOpinions: "Testimonials, those who do it, approve!",
      rights: "All rights reserved.",
      termsAndHelp: "Terms and Help",
      termsOfUse: "Terms of Use",
      privacyPolicies: "Privacy policies",
      socialNetworks: "Social Networks",
      shop: "Our Store",
      subtitleCourseHemogasometria: "Be part of the group, come learn!",
      titleHemogasometria: "Blood Gas Analysis",
      textCourseHemogasometria:
        "Video lessons, PDFs and question solutions are available directly from exams on all our modules. All this so that you don't fall behind and are always ahead.",
      buttonSubscribe: "Subscribe",
      titleResourcesHemogasometria: "Available Resources",
      resourceFirstTitle: "Exclusive content",
      resourceFirstSubtitle:
        "6 modules, more than 40 hours of content and questions on the subject.",
      resourceSecondTitle: "Videos",
      resourceSecondSubtitle:
        "Numerous classrooms are available for your access, attend and review as many times as necessary.",
      resourceThirdTitle: "A.I Integrated",
      resourceThirdSubtitle:
        "Artificial Intelligence integrated into the platform to answer any questions about any subject!",
        paymentType: "Card",
        secondPaymentType: "Paid In Cash",
        buttonSign: "Buy"
    },
  },
  pt: {
    translation: {
      aboutUs: "Sobre Nós",
      courses: "Cursos",
      support: "Suporte",
      extraContent: "Conteúdo Extra",
      language1: "Português",
      language2: "Inglês",
      language3: "Espanhol",
      studentArea: "Área do Aluno",
      title: "Conheça um pouco sobre o que temos para oferecer:",
      titleModules: "Alguns dos Nossos Módulos",
      buttonModules: "Ver Curso Completo",
      titleReasons: "Por Que Escolher o Descomplicando?",
      subTitleR1: "Criado e gerenciado por médicos!",
      subTitleR2: "Amor pelo que se faz...",
      subTitleR3: "Material de alta qualidade!",
      subTitleR4: "Direto ao ponto!",
      subTitleR5: "Quem usa, aprova!",
      textReason1:
        "O Descomplica é uma empresa criada, organizada e gerenciada por médicos, te auxiliar e orientar é o nosso maior objetivo.",
      textReason2:
        "Nosso time ama o que faz. Oferecemos a vocês nosso entusiasmo, além da nossa excelente didática, tudo isso para que você venha junto com a gente!",
      textReason3:
        "Aulas, PDF’s e questões diretamente das provas de residências respondidas e explicadas. Além da inteligência artificial integrada, com suporte 24 horas para suas dúvidas.",
      textReason4:
        "Nossa equipe sabe exatamente o caminho necessário para conseguir alcançar seus sonhos.",
      textReason5:
        "Testado e aprovado por inúmeros alunos e profissionais atuantes na área da medicina, independete da área, vem fazer parte disso!",
      titleOpinions: "Depoimentos, quem faz, aprova!",
      rights: "Todos os direitos reservados.",
      termsAndHelp: "Termos e Ajuda",
      termsOfUse: "Termos de uso",
      privacyPolicies: "Políticas de privacidade",
      socialNetworks: "Redes Sociais",
      shop: "Nossa Loja",
      subtitleCourseHemogasometria: "Faça parte do grupo, venha aprender!",
      titleHemogasometria: "Hemogasometria",
      textCourseHemogasometria:
        "São disponibilizadas videoaulas, PDF's e resoluções de questões diretamente de provas sobre todos os nossos módulos. Tudo isso para que você não fique para trás e esteja sempre à frente.",
      buttonSubscribe: "Inscreva-se",
      titleResourcesHemogasometria: "Recursos Disponíveis",
      resourceFirstTitle: "Conteúdo exclusivo",
      resourceFirstSubtitle:
        "6 módulos, mais de 40 horas de conteúdos e questões sobre o assunto.",
      resourceSecondTitle: "Videoaulas",
      resourceSecondSubtitle:
        "Inúmeras aulas disponíveis para seu acesso, assista e revise quantas vezes precisar.",
      resourceThirdTitle: "I.A Integrada",
      resourceThirdSubtitle:
        "Inteligência Artificial integrada na plataforma para retirar qualquer dúvida sobre qualquer assunto!",
      paymentType: "Cartão",
      secondPaymentType: "Á vista",
      buttonSign: "Assinar"
    },
  },
  es: {
    translation: {
      aboutUs: "Sobre Nosotros",
      courses: "Cursos",
      support: "Soporte",
      extraContent: "Contenido Extra",
      language1: "Portugués",
      language2: "Inglés",
      language3: "Español",
      studentArea: "Área del Estudiante",
      title: "Descubra un poco de lo que tenemos para ofrecer:",
      titleModules: "Algunos de nuestros módulos",
      buttonModules: "Ver curso completo",
      titleReasons: "¿Por qué elegir Descomplicando?",
      subTitleR1: "¡Creado y administrado por médicos!",
      subTitleR2: "Amor por lo que haces...",
      subTitleR3: "¡Materiales de alta calidad!",
      subTitleR4: "¡Directo al grano!",
      subTitleR5: "¡Quien lo use lo aprueba!",
      textReason1:
        "Descomplica es una empresa creada, organizada y gestionada por médicos, ayudarte y orientarte es nuestro principal objetivo.",
      textReason2:
        "Nuestro equipo ama lo que hace. Te ofrecemos nuestra ilusión, además de nuestras excelentes dotes docentes, ¡todo para que vengas con nosotros!",
      textReason3:
        "Clases, PDF y preguntas directamente de los exámenes de residencia respondidas y explicadas. Además de inteligencia artificial integrada, con soporte las 24 horas para tus dudas.",
      textReason4:
        "Nuestro equipo conoce exactamente el camino necesario para alcanzar sus sueños.",
      textReason5:
        "Probado y aprobado por innumerables estudiantes y profesionales que trabajan en el campo de la medicina, sin importar el área, ¡ven y sé parte de ello!",
      titleOpinions: "Testimonios, quien lo haga, ¡aprueba!",
      rights: "Reservados todos los derechos.",
      termsAndHelp: "Términos y ayuda",
      termsOfUse: "Condiciones de uso",
      privacyPolicies: "Políticas de privacidad",
      socialNetworks: "Redes Sociales",
      shop: "Nuestra Loja",
      subtitleCourseHemogasometria: "¡Sé parte del grupo, ven a aprender!",
      titleHemogasometria: "Análisis de Gases en Sangre",
      textCourseHemogasometria:
        "Lecciones en video, archivos PDF y resoluciones de preguntas están disponibles directamente de las pruebas en todos nuestros módulos. Todo esto para que no te quedes atrás y siempre vayas adelante.",
      buttonSubscribe: "Inscribirse",
      titleResourcesHemogasometria: "Recursos Disponibles",
      resourceFirstTitle: "Contenido exclusivo",
      resourceFirstSubtitle:
        "6 módulos, más de 40 horas de contenidos y preguntas sobre el tema.",
      resourceSecondTitle: "Videoaulas",
      resourceSecondSubtitle:
        "Inúmeras aulas disponibles para su acceso, asista y revise cuantas veces sea necesario.",
      resourceThirdTitle: "I.A Integrado",
      resourceThirdSubtitle:
        "¡Inteligencia Artificial integrada en la plataforma para resolver cualquier duda sobre cualquier tema!",
        paymentType: "Tarjeta",
        secondPaymentType: "Pago al Contado",
        buttonSign: "Firmar"
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  fallbackLng: "pt",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
