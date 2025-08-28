// events.js

// Example event data (can be replaced with a fetch from a JSON file)
const eventsData = {
  upcoming: [
    {
      id: "ai-social-good",
      date: "Sep 15, 2025",
      title: "AI for Social Good Workshop",
      location: "Innovation Hub, Kampala",
      desc: "A hands-on workshop exploring how artificial intelligence can be used to solve real-world social challenges. Join us for talks, demos, and networking!",
      gallery: [],
    },
    {
      id: "digital-skills-bootcamp",
      date: "Oct 10, 2025",
      title: "Digital Skills Bootcamp",
      location: "Online",
      desc: "A two-day virtual bootcamp to empower youth and professionals with the latest digital skills, tools, and career guidance.",
      gallery: [],
    },
  ],
  past: [
    {
      id: "mentorship-summit",
      date: "July 2025",
      title: "Tech Mentorship Summit",
      location: "Makerere University",
      desc: "Mentored 100+ students on software engineering, career growth, and innovation. Inspiring talks and hands-on sessions.",
      gallery: ["img/works/1.jpg", "img/works/2.jpg", "img/works/3.jpg"],
    },
    {
      id: "women-in-tech-panel",
      date: "May 2025",
      title: "Women in Tech Panel",
      location: "Serena Hotel",
      desc: "Panelist at a women-led event, sharing insights on diversity, inclusion, and tech leadership. Amazing energy and connections!",
      gallery: ["img/works/4.jpg", "img/works/5.jpg"],
    },
  ],
  testimonials: [
    {
      text: "The workshops were life-changing. I gained practical skills and confidence to pursue my tech dreams!",
      author: "Sarah N.",
    },
    {
      text: "Incredible energy and knowledge. The events are always inspiring and welcoming.",
      author: "James K.",
    },
  ],
};

function renderEvents() {
  // Upcoming Events
  var upcomingList = document.getElementById("upcoming-events-list");
  if (upcomingList) {
    upcomingList.innerHTML = eventsData.upcoming
      .map(
        (event) => `
      <div class="event-card">
        <span class="event-date">${event.date} <span class="upcoming-label">Upcoming</span></span>
        <div class="event-title">
          <a href="event-detail.html?id=${event.id}" style="color:inherit;text-decoration:none;">${event.title}</a>
        </div>
        <div class="event-location"><i class="fas fa-map-marker-alt"></i> ${event.location}</div>
        <div class="event-desc">${event.desc}</div>
      </div>
    `
      )
      .join("");
  }

  // Past Events
  var pastList = document.getElementById("past-events-list");
  if (pastList) {
    pastList.innerHTML = eventsData.past
      .map(
        (event) => `
      <div class="event-card">
        <span class="event-date">${event.date}</span>
        <div class="event-title">
          <a href="event-detail.html?id=${
            event.id
          }" style="color:inherit;text-decoration:none;">${event.title}</a>
        </div>
        <div class="event-location"><i class="fas fa-map-marker-alt"></i> ${
          event.location
        }</div>
        <div class="event-desc">${event.desc}</div>
        <div class="event-gallery">
          ${event.gallery
            .map((img) => `<img src="${img}" alt="Event photo">`)
            .join("")}
        </div>
      </div>
    `
      )
      .join("");
  }
  testimonialsList.innerHTML = eventsData.testimonials
    .map(
      (t) => `
    <div class="testimonial">“${t.text}”<div class="testimonial-author">— ${t.author}</div></div>
  `
    )
    .join("");
}

document.addEventListener("DOMContentLoaded", renderEvents);
