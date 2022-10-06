import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer M3JRxJxhV7nSkUTva_NQAG2aIkslH-pg0EX7viH19v5voS_puJBDNjqFm_BmqAjn7COXdZFv6azTVdSvWGJP6sEr8JulgW85F-_gau2e20XwVLdIGXqdmsxyJZ9wYHYx",
  },
});
