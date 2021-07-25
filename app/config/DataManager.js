// the data manager manages all the listing added onto it.
export default class DataManager {
  static myInstance = null;
  userID = "";
  listingID = "";

  listings = [
    {
      userid: "user2",
      listingId: 1,
      title: " Temple Tree Resort",
      overview: " Just relax and enjoy yourself",
      image: require("../assets/templetree.jpg"),
      catergory: "Sleep",
      description:
        "Featuring traditional Western Himalayan architecture, the boutique Temple Tree Resort & Spa enjoys beautiful views of the Annapurna Mountain Range. Boasting fresh air and warm temperatures, it also has an outdoor pool and free Wi-Fi.",
      address: "Pokhara",
      review: " Had a very relaxing weekend ",
    },

    {
      userid: "user1",
      listingId: 4,
      title: " Temple Tree Resort",
      overview: " Just relax and enjoy yourself",
      image: require("../assets/templetree.jpg"),
      catergory: "Sleep",
      description:
        "Featuring traditional Western Himalayan architecture, the boutique Temple Tree Resort & Spa enjoys beautiful views of the Annapurna Mountain Range. Boasting fresh air and warm temperatures, it also has an outdoor pool and free Wi-Fi.",
      address: "Pokhara",
      review: " Had a very relaxing weekend ",
    },

    {
      userid: "user1",
      listingId: 2,
      title: " Utopia Garden",
      overview:
        " The best place to have food and hangout with spacious garden facing the beautiful fewa lake.",
      image: require("../assets/utopia.png"),
      catergory: "Eat",
      description:
        "Resturant servering Indian and Nepali. Takeout facilities also avilable",
      address: "Pokhara",
      review: " The food was alright. ",
    },

    {
      userid: "user2",
      listingId: 5,
      title: " Utopia Garden",
      overview:
        " The best place to have food and hangout with spacious garden facing the beautiful fewa lake.",
      image: require("../assets/utopia.png"),
      catergory: "Eat",
      description:
        "Resturant servering Indian and Nepali. Takeout facilities also avilable",
      address: "Pokhara",
      review: " The food was alright. ",
    },

    {
      userid: "user1",
      listingId: 3,
      title: " Annapurna Basecamp Trekking",
      overview:
        " Challenge yourself and explore the beauty of mountain climbing.",
      image: require("../assets/Annapurna.jpg"),
      catergory: "Play",
      description:
        "Fly to Pokhara and trek to Ghandruk: 30 minutes flight, 5 - 6 hours trek. Ghandruk to Chhomrong: 5 - 6 hour. Chhomrong to Bamboo: 4 - 5 hours. Bamboo to Deurali : 3 - 4 hours. Deurali to Annapurna Base Camp by means of Machhapuchhre Base Camp : 5-6 hours. Annapurna Base Camp to Bamboo",
      address: "Pokhara",
      review: " The best decision of my life. ",
    },
    {
      userid: "user2",
      listingId: 6,
      title: " Annapurna Basecamp Trekking",
      overview:
        " Challenge yourself and explore the beauty of mountain climbing.",
      image: require("../assets/Annapurna.jpg"),
      catergory: "Play",
      description:
        "Fly to Pokhara and trek to Ghandruk: 30 minutes flight, 5 - 6 hours trek. Ghandruk to Chhomrong: 5 - 6 hour. Chhomrong to Bamboo: 4 - 5 hours. Bamboo to Deurali : 3 - 4 hours. Deurali to Annapurna Base Camp by means of Machhapuchhre Base Camp : 5-6 hours. Annapurna Base Camp to Bamboo",
      address: "Pokhara",
      review: " The best decision of my life. ",
    },
  ];

  static getInstance() {
    if (DataManager.myInstance == null) {
      DataManager.myInstance = new DataManager();
    }
    return this.myInstance;
  }

  getUserID() {
    return this.userID;
  }
  getListedID() {
    return this.listingID;
  }

  setUserID(id) {
    this.userID = id;
  }

  getListing(id) {
    return this.listings.filter((listing) => listing.userid === id);
  }

  getCatergoryListing(category) {
    return this.listings.filter((listing) => listing.catergory === category);
  }
  getListingItem(id) {
    return this.listings.filter((listing) => listing.listingId === id);
  }

  addListing(listing) {
    this.listings.push(listing);
  }
}
