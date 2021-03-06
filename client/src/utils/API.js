import axios from "axios";

export default {
  // Gets all items
  getitems: function() {
    return axios.get("/api/items");
  },
  // Gets the Item with the given id
  getItem: function(id) {
    return axios.get("/api/items/" + id);
  },
  // Deletes the Item with the given id
  deleteItem: function(id) {
    return axios.delete("/api/items/" + id);
  },
  // Saves a Item to the database
  saveItem: function(ItemData) {
    return axios.post("/api/items", ItemData);
  }
};
