/*
const ListingAPI = {
  listings: [
    { id: 1, productName: "iPhone", rating: 4 },
    { id:2, productName: "Slack", rating: 3 },
    { id:3, productName: "Arsalan", rating: 5 }
  ]
  
  listings: ListingService.getListings(),
  all: function() { return this.listings },
  get: function(id) {
    const isListing = p => p.id === id
    return this.listings.find(isListing)
  }
}

export default ListingAPI
*/

class ListingAPI {
  constructor() {
    this.state = {
      listings: []
    }
  }

  all() {
    ListingService.getListings().then( res => {
      this.setState({ listings: this.state.listings });
    });
  }
}
