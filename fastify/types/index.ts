export interface IQuery {
    name: string;
}

export interface IReply {
    // 201: { message: string },
    '2xx': { message: string },
    '4xx': { error: string }
}

export interface IVehicleBody {
    model: string;
    brand: string;
    year: number;
}

export interface IHeader {
    km: number;
}

export interface IVehicleReply {
    201: {
        vehicleInfo: string;
        vehicleYear: number;
    },
    '4xx': {
        error: string;
    }
}