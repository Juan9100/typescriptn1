import mongoose from 'mongoose';

export const connect = async (url: string) => {
    try {
        await mongoose.connect(url);
    } catch(err) {
        throw new Error((err as Error).message);
    }
}

export const wrapper = async (func: any) => {
    const result = await func;

    return result;
}
