import axios from "axios";

const fetchUsers = (user) => {
    return axios
    .get(`https://api.github.com/users/${user}`)
    .then((res) => {
      console.log(res);
        return res;

        // this.setState({
        //     card: res.data
        // });
    })
    .catch((err) => console.log(err));
}

export default fetchUsers;