const ListingAPI = {
  listings: [
    { id: 1, productName: "iPhone", rating: 4 },
    { id:2, productName: "Slack", rating: 3 },
    { id:3, productName: "Arselan", rating: 5 }
  ],
  all: function() { return this.listings },
  get: function(id) {
    const isListing = p => p.id === id
    return this.listings.find(isListing)
  }
}

export default ListingAPI
