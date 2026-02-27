const users = [
  {
    fullname: "Tarak Mehta",
    image: "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1",
    profession: "Frontend Developer",
    description:
      "React aur UI polish ka deewana. Pixel-perfect ya phir kuch bhi nahi.",
    tags: ["JavaScript", "React", "CSS", "Tailwind"],
  },
  {
    fullname: "Priyanka Popra",
    image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
    profession: "UI/UX Designer",
    description:
      "Bold colors, clean spacing aur user-first design — Zoya ka 3-point formula.",
    tags: ["Figma", "User Research", "Wireframes", "Design Systems"],
  },
  {
    fullname: "Chat GPT",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
    profession: "Backend Engineer",
    description: "API ko butter jaise smooth bana deta hai. Logic ka Thanos.",
    tags: ["Node.js", "Express", "MongoDB", "System Design"],
  },
  {
    fullname: "Jeniffer",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
    profession: "Digital Marketer",
    description:
      "SEO + storytelling = traffic ka secret sauce. Numbers never lie.",
    tags: ["SEO", "Content Strategy", "Analytics", "Branding"],
  },
  {
    fullname: "Floyed Curly",
    image: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef",
    profession: "Data Analyst",
    description:
      "Data ko decode karke business ko direction deta hai. Charts ka magician.",
    tags: ["Python", "Pandas", "Power BI", "Data Visualization"],
  },
];

var sum = "";

users.forEach((element) => {
  sum += `<div class="card">
            <img src="${element.image}" alt="An image">
            <h2>${element.fullname}</h2>
            <h3>${element.profession}</h3>
            <p>${element.description}</p>
        </div>`;
});

var main = document.querySelector("main");
main.innerHTML = sum;
