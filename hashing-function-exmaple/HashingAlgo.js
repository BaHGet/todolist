const { hash, compare, genSalt } = require('bcryptjs');

const generateSalts = () => {
    let salt = "68";
    let str =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZ" +
        "abcdefghijklmnopqrstuvwxyz" +
        "0123456789" +
        "@#$%^&*<>?/{}[]()-+=~`";

    for (let i = 1; i <= 5; i++) {
        var char = Math.floor(Math.random() * str.length + 1);
        salt += str.charAt(char);
    }
    salt+="86";

    return salt;
};


const hashing = async(password) => {
    const salt = await genSalt(10);
    try {
        const hashedPassword = await  hash(password, salt);
        return { hashedPassword, salt };
    } catch (error) {
        console.log(error);
    }
};


const comparing = async(password, hashedPassword, salt) => {
    try {
        const isMatch = await compare(password, hashedPassword);
        return isMatch;
    } catch (error) {
        console.log(error);
    }
};


module.exports = { hashing, comparing };
