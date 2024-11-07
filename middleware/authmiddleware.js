export const isLogged = (req, res, next) => {
    const userLogged = true;
    if (userLogged) {
    next();
    } else {
        res.status(401).send("no estas logeado");
    }
}
export const isAdmin = (req, res, next) => {
    const userLogged = true;
    if (userLogged) {
    next();
    } else {
        res.status(401).send("no sos admin");
    }
}
