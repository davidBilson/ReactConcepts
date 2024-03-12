import axios from "axios";

const createUserSlice = (set, get) => ({
    users: [],
    friends: [],
    fetchUsers: async () => {
        try {
            const res = await axios.get("https://jsonplaceholder.typicode.com/users");
            // console.log(res);
            if (res.status === 200) {
                set({users: res.data});
            } else {
                console.error("Failed to fetch users:", res.statusText);
            }
        } catch (err) {
            console.error("Error fetching users:", err)
        }
    },
    addToFriends: (user) => {
        set({
            friends: [...new Set([...get().friends, user])]
        })
    },
})

export default createUserSlice;