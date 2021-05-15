export class API_SERVICE {
  static async getAddresses() {
    const url = `${process.env.REACT_APP_API_URL}/addresses`;
    try {
      const response = await fetch(url);
      const result = await response.json();
      return result;
    } catch (err) {
      console.log(err);
    }
  }
}

export default API_SERVICE;
