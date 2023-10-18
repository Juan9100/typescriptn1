interface Mongo {
    mongoUri: string;
    dataBase: string;
}

export interface Config {
    mongo: Mongo;
    port: string;
};
