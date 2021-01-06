import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer SatvediwhZcGbxieBmZsD_yjf_Z_2UKgyvgE3sTacMXTayakbhncjbvx71mWFRYfTh1qbtYZbyxu9NOX9F8T_vx_xPPoi5zckhn-sK9qv5xyBcpi1ZIHQAlEKUrsX3Yx",
  },
});
