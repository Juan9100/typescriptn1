import { 
    PetInfo,
    petInfo,
    wrapper
} from '../../../libs';

export const getPetsInfo = async (limit?: number) => {
    const query = limit 
        ? petInfo.find().limit(limit)
        : petInfo.find();

    const result = await wrapper(query);

    return result;
}

export const savePetInfo = async (pet: PetInfo) => {
    const petToSave = new petInfo(pet);
    const saveResult = await wrapper(petToSave.save());

    return saveResult;
}

export const deletePetInfo = async (id: string) => {
    const deleteResult = await wrapper(petInfo.deleteOne({ _id: id }));

    return deleteResult;
} 

export const updatePetInfo = async (pet: Partial<PetInfo>) => {
    const { _id, name, age, typeOfPet } = pet;
    const updateResult = await wrapper(petInfo.updateOne({ _id}, {
        name,
        age,
        typeOfPet
    }));

    return updateResult;
}
