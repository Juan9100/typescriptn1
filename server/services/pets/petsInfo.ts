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

export const updatePetInfo = async (pet: Pick<Partial<PetInfo>, 'name'>) => {
    const { name, age, typeOfPet } = pet;

    const updateObject: Partial<PetInfo> = {};

    name ? updateObject.name = name : '';
    age ? updateObject.age = age : '';
    typeOfPet ? updateObject.typeOfPet = typeOfPet : '';

    const updateResult = await wrapper(petInfo.findOneAndUpdate(pet, updateObject))
}
