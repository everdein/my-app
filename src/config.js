import axios from "axios";

class config {
    constructor() {
        this.animalsApi = "";
    }

    register() {
        return axios
            .get("/assets/env.json")
            .then((result) => {
                this.animalsApi = result.data.urls.animalsApi;
                return Promise.resolve();
            })
            .catch((error) => {
                console.log(error);
            });
    }
}

const newConfig = new config();

export default newConfig;