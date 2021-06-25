let projects = [
  {
    imgURL: "https://picsum.photos/300?random=1",
    imgALT: "My Project 1",
    title: "Glassmorphic Form",
    techStack: "HTML/CSS",
    description: "Styled form using Formspree and Glassmorphism.com",
    githubURL: "https://github.com/Vuyani2/contact_forms",
    liveProjectURL: "https://contact-forms123.netlify.app/",
  },
  {
    imgURL: "https://picsum.photos/300?random=2",
    imgALT: "My Project 2",
    title: "My Timeline",
    techStack: "HTML/CSS",
    description: "My Timeline using animation and Glassmorphism.com",
    githubURL: "https://github.com/Vuyani2/boilerplate",
    liveProjectURL: "https://hopeful-bassi-6437ef.netlify.app",
  },
  {
    imgURL: "https://picsum.photos/300?random=3",
    imgALT: "My Project 3",
    title: "My Tersimonials",
    techStack: "HTML/CSS",
    description: "My testimonials using a slider and Glassmorphism.com",
    githubURL: "https://github.com/Vuyani2/Timeline",
    liveProjectURL: "https://distracted-mahavira-b16f2c.netlify.app/",
  },
  {
    imgURL: "https://picsum.photos/300?random=23",
    imgALT: "My Project 4",
    title: "Tempreture Convetor",
    techStack: "Python",
    description: "Tempreture Convetor using tkinter in Python",
    githubURL: "https://github.com/Vuyani2/Temp-converter",
    liveProjectURL: "https://replit.com/@Vuyani2/temperatureconverter#main.py",
  },
  {
    imgURL: "https://picsum.photos/300?random=4",
    imgALT: "My Project 5",
    title: "Mobile Shoe Store",
    techStack: "HTML/CSS",
    description: "Mobile shoe store web site using css and HTML",
    githubURL: "https://github.com/Vuyani2/Shoe-Store",
    liveProjectURL: "https://ecstatic-liskov-afba8f.netlify.app",
  },
  {
    imgURL: "https://picsum.photos/300?random=5",
    imgALT: "My Project 6",
    title: "Lotto Numbers App",
    techStack: "Python",
    description: "Using tkinter in python to genarate a lotto application",
    githubURL: "#",
    liveProjectURL: "#",
  },
];

function createCard(card) {
  let createdCard = `
    <div class="portfolio-item" techStack=${card.techStack}>
        <div class="portfolio-details">
            <h2>${card.title}</h2>
            <h3>${card.techStack}</h3>
            <p>${card.description}</p>
        </div>
        <div class="btns-container">
            <a
              href="${card.liveProjectURL}"
              target="_blank"
              class="button"
              >Live</a
            >
            <a
              href="${card.githubURL}"
              target="_blank"
              class="button"
              >Github</a
            >
        </div>
    </div>    
    `;
  return createdCard;
}

function renderCards() {
  let projectContainer = document.querySelector(".porfolio-gallery");
  for (project of projects) {
    let card = createCard(project);
    projectContainer.innerHTML += card;
  }
}

renderCards();

function filterCards(category) {
  let cards = document.getElementsByClassName("portfolio-item");
  if (category == "All") {
    for (card of cards) {
      card.style.display = "block";
    }
    return;
  }
  for (card of cards) {
    card.style.display = "none";
  }

  let selectedCards = document.querySelectorAll(`[techStack='${category}']`);

  for (card of selectedCards) {
    card.style.display = "block";
  }
}
