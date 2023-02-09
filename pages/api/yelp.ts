import axios from "axios";

export default axios.create({
  baseURL:
    "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer D6nyyyinTkA-V_iXl7ZcUIPu6jh8-Nes4VIeEAdIvWXPqgJllrul7E-11LB8M9BlfMHjreZ7oi6fPm7QkhkeuYGY0MBGVkyFwKG_j3F39xaA4ds_L-BpOnzGHWLkY3Yx",
    AccessControlAllowOrigin: "*",
    "Accept-Encoding": "gzip, deflate, br",
  },
});
