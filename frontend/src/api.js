const ListingAPI = {
  listings: [
    { productName: "iPhone", rating: 4 },
    { productName: "Slack", rating: 3 },
    { productName: "Arselan", rating: 5 }
  ],
  all: function() { return this.listings },
  get: function(productName) {
    const isListing = p => p.productName == productName
    return this.listings.find(isListing)
  }
}

export default ListingAPI
