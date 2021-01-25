const expert1 = {
  id: 1,
  name: "Dr. Kai Havertz",
  title: "Biologist",
  companyLogo: "/images/pictures/company2.png",
  profilePicture: "/images/pictures/profile1.jpg",
  field: "Biology",
};
const expert2 = {
  id: 2,
  name: "Kevin Trapp",
  title: "Biologist",
  companyLogo: "/images/pictures/company3.png",
  profilePicture: "/images/pictures/profile2.jpg",
  field: "Biology",
};
const expert3 = {
  id: 3,
  name: "Dra. Alex Morgan",
  title: "Environmental Engineer",
  companyLogo: "/images/pictures/company1.png",
  profilePicture: "/images/pictures/profile3.jpg",
  field: "Engineering",
};
const expert4 = {
  id: 4,
  name: "Julian Brandt",
  title: "Geographer",
  companyLogo: "/images/pictures/company1.png",
  profilePicture: "/images/pictures/profile4.jpg",
  field: "Physics",
};

const expert5 = {
  id: 5,
  name: "Dr. Paul Einchmann",
  title: "Environmental Engineer",
  companyLogo: "/images/pictures/company3.png",
  profilePicture: "/images/pictures/profile5.jpg",
  field: "Engineering",
}; 

const expert6 = {
  id: 6,
  name: "Dra. Pia Sundhage",
  title: "Environmental Engineer",
  companyLogo: "/images/pictures/company3.png",
  profilePicture: "/images/pictures/profile6.jpg",
  field: "Engineering",
};

const expert7 = {
  id: 7,
  name: "Hope Solo",
  title: "Geographer",
  companyLogo: "/images/pictures/company2.png",
  profilePicture: "/images/pictures/profile7.jpg",
  field: "Physics",
};

const expert8 = {
  id: 8,
  name: "Mahmoud Dahoud",
  title: "Biologist",
  companyLogo: "/images/pictures/company2.png",
  profilePicture: "/images/pictures/profile8.jpg",
  field: "Biology",
};

const expert9 = {
  id: 9,
  name: "Dr. Manuel Neuer",
  title: "Geographer",
  companyLogo: "/images/pictures/company3.png",
  profilePicture: "/images/pictures/profile9.jpg",
  field: "Physics",
};

const expert10 = {
  id: 10,
  name: "Dr. Joshua Kimmich",
  title: "Geographer",
  companyLogo: "/images/pictures/company1.png",
  profilePicture: "/images/pictures/profile10.jpg",
  field: "Physics",
};

const database = [
  {
    tag: "climate",
    experts: [
      {
        ...expert1,
        relation: 0.5,
      },
      {
        ...expert8,
        relation: 1,
      },
      {
        ...expert3,
        relation: 0.6,
      },
      {
        ...expert5,
        relation: 0.6,
      },
      {
        ...expert7,
        relation: 0.6,
      },
      {
        ...expert10,
        relation: 0.6,
      },
    ],
    related_tags: ["nature", "water", "sustainability"],
  },
  {
    tag: "nature",
    experts: [
      {
        ...expert1,
        relation: 0.8,
      },
      {
        ...expert2,
        relation: 1,
      },
      {
        ...expert8,
        relation: 0.6,
      },
      {
        ...expert6,
        relation: 0.2,
      },
      {
        ...expert4,
        relation: 0.8,
      },
    ],
    related_tags: ["climate", "water", "sustainability", "mineral"],
  },
  {
    tag: "mineral",
    experts: [
      {
        ...expert4,
        relation: 1,
      },
      {
        ...expert10,
        relation: 0.7,
      },
      {
        ...expert3,
        relation: 1,
      },
      {
        ...expert5,
        relation: 0.9,
      },
      {
        ...expert6,
        relation: 0.3,
      },
      {
        ...expert7,
        relation: 0.7,
      },
      {
        ...expert9,
        relation: 0.4,
      },
    ],
    related_tags: ["nature"],
  },
  {
    tag: "sustainability",
    experts: [
      {
        ...expert4,
        relation: 1,
      },
      {
        ...expert5,
        relation: 0.7,
      },
      {
        ...expert2,
        relation: 0.5,
      },
    ],
    related_tags: ["climate", "water", "nature"],
  },
  {
    tag: "water",
    experts: [
      {
        ...expert1,
        relation: 1,
      },
      {
        ...expert8,
        relation: 1,
      },
      {
        ...expert6,
        relation: 0.3,
      },
      {
        ...expert4,
        relation: 0.7,
      },
      {
        ...expert10,
        relation: 0.8,
      },
    ],
    related_tags: ["climate", "nature", "sustainability"],
  },
];

// Just a response mock
export default (req, res) => {
  const requestedTag = req.query.q;
  const response = database.filter((entry) => entry.tag === requestedTag);
  res.statusCode = 200;
  res.json(response);
};
