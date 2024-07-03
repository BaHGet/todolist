import { hash, compare } from 'bcryptjs';

const Hashing = async (password) => {
    try {
        const hashedPassword = await hash(password, 10);
        return hashedPassword;
    } catch (error) {
        console.error('Error hashing password:', error);
    }
}

const compareing = async (password, hashedPassword) => {
    try {
        const match = await compare(password, hashedPassword);
        return match;
    } catch (error) {
        console.error('Error comparing password:', error);
    }
}

/* const data = async () => {
    console.log( await compareing('200419@#', '$2b$10$wI/UW8zfyFDqJaBrETyyx.knGDRDAzbIIIrsL8n3pqZiKziO2jYSi'))
}

data(); */

export default {
    Hashing,
    compareing
};

