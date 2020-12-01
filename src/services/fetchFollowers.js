import axios from "axios";

const fetchFollowers = (user) => {
    return axios
    .get(`https://api.github.com/users/${user}/followers`)
    .then((res) => {
      console.log(res);
        return res;
    })
    .catch((err) => console.log(err));
}

export default fetchFollowers;