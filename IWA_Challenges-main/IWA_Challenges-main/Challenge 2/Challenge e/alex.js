const privateSurname = "Naidoo"; // export const privateSurname = "Naidoo"; you can do it just like this for all of them if we want to
const privateFirstname = "Alex";
const publicRole = "Head of Marketing";
const privateDisplay = `First Name: ${privateFirstname} Surname: ${privateSurname} Role: ${publicRole}`;

const alex = {
    surname: privateSurname,
    firstname: privateFirstname,
    role: publicRole,
    display: privateDisplay
}

export {alex};