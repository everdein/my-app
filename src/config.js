import axios from "axios";

class config {
    constructor() {
        this.animalsApi = "";
    }

    async register() {
        try {
            const result = await axios.get("/assets/env.json");
            this.animalsApi = result.data.urls.animalsApi;
            return await Promise.resolve();
        } catch (error) {
            console.log(error);
        }
    }
}

const newConfig = new config();

export default newConfig;