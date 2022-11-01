const emailIsValid = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

const passwordIsValid = (password) => {
    return password.length >= 8;
}

const nameIsValid = (name) => {
    return /^[a-zA-Z]{2,}$/.test(name)
}

const lastNameIsValid = (lastName) => {
    return /^[a-zA-Z]{2,}$/.test(lastName)
}

const genderIsValid = (gender) => {
    return /^(male|female)$/.test(gender)
}

//validate date is in postgresql format (YYYY-MM-DD)
const birthdayIsValid = (birthday) => {
    return /^\d{4}-\d{2}-\d{2}$/.test(birthday)
}

const shoe_sizeIsValid = (shoe_size) => {
    return /^[0-9]{1,2}$/.test(shoe_size)
}

const requestIsValid = (body) => {
    const { email, password, name, lastName,
        gender, birthday, region, comuna, shoe_size } = body;
    if(!region || !comuna) {
        return false;
    }
    return emailIsValid(email) && passwordIsValid(password)
        && nameIsValid(name) && lastNameIsValid(lastName)
        && birthdayIsValid(birthday) && genderIsValid(gender)
        && shoe_sizeIsValid(shoe_size);
}

module.exports = { emailIsValid, requestIsValid }