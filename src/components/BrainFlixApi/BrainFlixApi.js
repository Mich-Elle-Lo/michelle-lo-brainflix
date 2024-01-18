// {"api_key":"7b621a10-171d-40ee-80c4-68f110785e04"}

class BandSiteApi {
  constructor(apiKey) {
    this.apiKey = apiKey; //7b621a10-171d-40ee-80c4-68f110785e04
    this.baseUrl = "https://project-2-api.herokuapp.com/";
  }
  async postComment(comment) {
    try {
      const response = await axios.post(
        `${this.baseUrl}comments?api_key=${this.apiKey}`,
        comment,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      return response.data;
    } catch (error) {
      console.error("Error:", error);
      throw error;
    }
  }
  async getComments() {
    try {
      const response = await axios.get(
        `${this.baseUrl}comments?api_key=${this.apiKey}`
      );
      const comments = response.data;
      comments.sort((a, b) => a.timestamp - b.timestamp);
      return comments;
    } catch (error) {
      console.error("Error:", error);
      throw error;
    }
  }
  async getShows(shows) {
    try {
      const response = await axios.get(
        `${this.baseUrl}showdates?api_key=${this.apiKey}`,
        shows
      );
      return response.data;
    } catch (error) {
      console.error("Error:", error);
      throw error;
    }
  }
}
export default BandSiteApi;
