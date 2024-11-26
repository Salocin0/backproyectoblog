import { body, param, query } from "express-validator";

export const validationPostBlog = [
    //titulo,descripcion,contenido,imagen
    body("titulo").isString().withMessage("el titulo debe ser un texto").isLength({min:1,max:256}).withMessage("el titulo debe tener entre 1 y 256 caracteres"),
    body("descripcion").isString().withMessage("la descripcion debe ser un texto").isLength({min:1,max:400}).withMessage("la descripcion tiene que tener entre 1 y 400 caracteres"),
    body("contenido").isString().withMessage("el contenido debe ser un texto").isLength({min:1,max:1000}).withMessage("el contenido debe tener entre 1 y 1000 caracteres"),
    body("imagen").isString().withMessage("el link de la imagen debe ser un texto").isLength({min:1,max:100}).withMessage("el link de la imagen debe tener entre 1 y 100 caracteres"),
    body("autor").isMongoId().withMessage("el id del autor debe tener un formato valido de mongo id"),
]
export const validationPutBlog = [
    //id,titulo,descripcion,contenido,imagen,autor
]
export const validationIdBlog= [
    //id
    param("id").isUUID().withMessage("el id debe ser un UUID"),
]

//validamos el put con el middle de post -> titulo es un numero, validamos el id del put con validar id -> falla el id