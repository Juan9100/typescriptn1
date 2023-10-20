import { connect } from "mongoose";

export class Connect {
    private uri: string;

    constructor(uri: string) {
        this.uri = uri;
    }

    public async connect() {
        try {
            await connect(this.uri);
        } catch(err) {
            throw new Error((err as Error).message);
        }
    }
}
