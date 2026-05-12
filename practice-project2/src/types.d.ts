import { Connection } from "mongoose";

declare global {
    var mongoose : {
        conn : Connection | null,
        promise : Promise<Connection> | null,//agar connection nhi h toh vo promise me store hoga 

    }
}

export {}