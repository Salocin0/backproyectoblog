import jwt from "jsonwebtoken";

export const authMiddleware = (req, res, next) => {
    const token = req.headers["authorization"];
    console.log(token)
    if (!token) {
        return res.status(401).json({status: "error", menssage: "no autorizado", data:{}});
    }
    const tokenData = jwt.verify(token, process.env.JWT_SECRET || "unaclavesecreta");
    if (!tokenData) {
        return res.status(401).json({status: "error", menssage: "no autorizado", data:{}});
    }
    next();
}