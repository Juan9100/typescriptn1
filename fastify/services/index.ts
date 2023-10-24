import { 
    IHeader, 
    IVehicleBody
} from '../types';

export const postService = (data: IHeader & IVehicleBody) => {
    const { model, brand, year, km } = data;

    return {
        vehicleInfo: `vehicle: ${model}, brand: ${brand}, km: ${km}`,
        vehicleYear: year
    }
}