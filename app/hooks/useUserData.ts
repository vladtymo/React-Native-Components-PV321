import React, { useEffect } from "react";
import { User } from "../models/user";

const api = "https://jsonplaceholder.typicode.com/users/";

export function useUserData(id: number) {
    const [user, setUser] = React.useState<User | null>(null);

    useEffect(() => {
        fetchData(api + id.toString()).then((data) => {
            setUser(data);
        }).catch((err) => {
            console.log(err);
        });
    }, []);

    const fetchData = async (api: string) => {
        const res = await fetch(api);
        const data = await res.json();
        return data;
    }

    return user;
}