import { Project } from '@components/ProjectCard';

const projects: Project[] = [
  {
    title: "Création du nouveau site fédéral",
    client: "Ecolo",
    description: "Création du nouveau site du parti, en prévision des prochaines élections nationales. Connexion partielle avec le CRM du parti (Odoo), focus sur le moteur de recherche et la transversalité des contenus.",
    tag: "Site vitrine",
    url: "https://ecolo.be",
  },
  {
    title: "Développements sur une app React Native et React dans le sourcing de matières recyclables",
    client: "Harold Waste",
    description: "Intégration d'une équipe de 5 développeurs pour faire évoluer le produit dans des sprints de 2 semaines. Utilisation de React, Redux, Redux saga, Flow, Firebase.",
    tag: "App native",
  },
  {
    title: "Cadrage d'un projet de création d'une app dans l'événementiel",
    client: "Nest",
    description: "Accompagnement d'entrepreneurs dans la définition du périmètre MVP de leur projet. Rédaction de users stories, création de wireframes Figma en vue de préparer un appel d'offre auprès d'agences web.",
    tag: "MOA",
  },
  {
    title: "Refonte complète du site vitrine",
    client: "Ubisoft",
    description: "En partenariat avec une agence pour la partie graphique, définition de la nouvelle structure et direction artistique du site pour un jeu mobile. Développement du site avec un thème sur-mesure Wordpress.",
    tag: "Site vitrine",
    url: "https://isitlove.com",
  },
  {
    title: "Événement en réalité virtuelle",
    client: "Wallifornia MusicTech",
    description: "Hosting sur AWS (via Cloudformation) de la plateforme open source Mozilla Hubs, permettant de se réunir dans des mondes virtuels. Création de pages web sur un site Wordpress pour lister les rooms existantes et le nombre d'internautes présents dans chaquue.",
    tag: "Expérience",
    url: "https://walliforniamusictech.com",
  },
  {
    title: "CMS pour une app Oculus",
    client: "Commission Européenne",
    description: "En partenariat avec une agence spécialisée en VR, création d'un Wordpress avec des pages frontend permettant d'uploader des vidéos sur Vimeo et de mettre à jour les textes de l'app en plusieurs langues.",
    tag: "Web app",
  },
  {
    title: "Création d'un site ecommerce",
    client: "Magliamo",
    description: "Création d'un site WooCommerce pour accompagner l'internationalisation de la marque : ajout de fonctionnalités de géolocalisation pour l'affichage des prix et taxes, optimisation des performances avec la mise en cache Litespeed.",
    tag: "Eshop",
    url: "https://magliamo.be",
  },
  {
    title: "Jeu concours, visite interactive d'un dépôt de tramway",
    client: "STIB-MIVB",
    description: "Création d'une app Ruby on Rails autour d'une vidéo 360° créée avec 3DVista. Les joueurs obtiennent un score à la fin de la vidéo, qui est enregistré dans un classement pour décerner 3 prix à la fin du concours. Utilisation de Dokku sur ce serveur",
    tag: "Web app",
    url: "https://stib.poolpio.com",
  },
  {
    title: "Expérience visuelle pour teaser une pièce de théâtre",
    client: "Arletty",
    description: "Création d'une simple page HTML donnant la possibilité d'alterner la lecture de deux vidéos HTML5, sans utiliser de librairie JS tierce.",
    tag: "Expérience",
    url: "https://arletty-webdoc.fr",
  },
  {
    title: "Site vitrine de l'agence",
    client: "Artimon Digital",
    description: "Design et développement du site multilingue de mon agence Artimon, avec Gatsby et ChakraUI. Hébergement sur Netlify, contenu géré avec Wordpress en headless avec WPGraphQL.",
    tag: "Site vitrine",
    url: "https://artimon.be",
  },
  {
    title: "Site de réservation de services en kinésithérapie",
    client: "Uperform",
    description: "Création avec Gatsby, ChakraUI et Wordpress headless d'un site présentant les services d'un réseau de centres de kinésithérapie en Belgique. Intégration du SaaS Kinequick pour la gestion des réservations.",
    tag: "Site vitrine",
    url: "https://uperform.be",
  },
  {
    title: "Mentorat sur Ruby et Ruby on Rails",
    client: "Le Wagon",
    description: "Professeur assistant ou professeur lors de plusieurs promotions du bootcamp Le Wagon, à Berlin, Paris et Bruxelles. Principalement sur la partie Ruby on Rails et les projets finaux.",
    tag: "Mentorat",
    url: "https://lewagon.com",
  },
]

export default projects;