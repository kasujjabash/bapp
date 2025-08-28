// event-detail.js
// This script reads the event id from the URL and renders the event details dynamically.

// Example event data (should match the structure in events.js)
const allEvents = [
  // Upcoming
  {
    id: "ai-social-good",
    date: "Sep 15, 2025",
    title: "AI for Social Good Workshop",
    location: "Innovation Hub, Kampala",
    desc: "A hands-on workshop exploring how artificial intelligence can be used to solve real-world social challenges. Join us for talks, demos, and networking!",
    gallery: [],
    aboutMe: `I'm Bashir, passionate about using technology for positive change. At this workshop, I shared how AI can address real social issues in Uganda and beyond.`,
    story: `The event brought together innovators, students, and professionals to brainstorm and prototype AI solutions for local challenges. My session included live demos and a Q&A with the audience.`,
    details: `This event featured keynote speakers, panel discussions, and hands-on sessions. Lunch and refreshments provided.`,
  },
  {
    id: "digital-skills-bootcamp",
    date: "Oct 10, 2025",
    title: "Digital Skills Bootcamp",
    location: "Online",
    desc: "A two-day virtual bootcamp to empower youth and professionals with the latest digital skills, tools, and career guidance.",
    gallery: [],
    aboutMe: `I love teaching and mentoring. At this bootcamp, I guided participants through practical digital skills and career strategies for the modern tech world.`,
    story: `The bootcamp was interactive, with live coding, breakout sessions, and real-world projects. Participants left with new skills and a network of peers.`,
    details: `Register online to receive your access link. Includes live Q&A and downloadable resources.`,
  },
  // Past
  {
    id: "mentorship-summit",
    date: "July 2025",
    title: "Tech Mentorship Summit",
    location: "Makerere University",
    desc: "Mentored 100+ students on software engineering, career growth, and innovation. Inspiring talks and hands-on sessions.",
    gallery: ["img/works/1.jpg", "img/works/2.jpg", "img/works/3.jpg"],
    aboutMe: `Mentoring is at the heart of my mission. At the summit, I worked with students to unlock their potential and set them on a path to success.`,
    story: `The summit was our largest yet, with workshops, panel discussions, and networking. Students shared their projects and received feedback from industry leaders.`,
    details: `A recap of our largest mentorship event yet, with photos and participant feedback.`,
  },
  {
    id: "women-in-tech-panel",
    date: "May 2025",
    title: "Women in Tech Panel",
    location: "Serena Hotel",
    desc: "Panelist at a women-led event, sharing insights on diversity, inclusion, and tech leadership. Amazing energy and connections!",
    gallery: ["img/works/4.jpg", "img/works/5.jpg"],
    aboutMe: `As an advocate for diversity in tech, I was honored to join this panel and share my journey alongside inspiring women leaders.`,
    story: `The panel covered topics from leadership to overcoming barriers in tech. The audience was engaged, and the networking was fantastic!`,
    details: `Panel discussion, networking, and highlights from the event.`,
  },
];

function getEventIdFromUrl() {
  const params = new URLSearchParams(window.location.search);
  return params.get("id");
}

function renderEventDetail() {
  const eventId = getEventIdFromUrl();
  const event = allEvents.find((e) => e.id === eventId);
  const container = document.getElementById("event-detail-container");

  if (!event) {
    container.innerHTML =
      '<p>Event not found. <a href="events.html" class="event-detail-back">Back to Events</a></p>';
    return;
  }

  container.innerHTML = `
    <a href="events.html" class="event-detail-back"><i class="fas fa-arrow-left"></i> Back to Events</a>
    <div class="event-detail-title">${event.title}</div>
    <div class="event-detail-date">${event.date}</div>
    <div class="event-detail-location"><i class="fas fa-map-marker-alt"></i> ${
      event.location
    }</div>
    <section class="event-article-section">
      <h2>About Me</h2>
      <p>${event.aboutMe || ""}</p>
    </section>
    <section class="event-article-section">
      <h2>Event Story</h2>
      <p>${event.story || event.desc || ""}</p>
    </section>
    <section class="event-article-section">
      <h2>Gallery</h2>
      <div class="event-detail-gallery">
        ${
          event.gallery && event.gallery.length > 0
            ? event.gallery
                .map((img) => `<img src="${img}" alt="Event photo">`)
                .join("")
            : "<em>No photos yet.</em>"
        }
      </div>
    </section>
    <section class="event-article-section">
      <h2>More Details</h2>
      <p>${event.details || ""}</p>
    </section>
  `;
}

document.addEventListener("DOMContentLoaded", renderEventDetail);
