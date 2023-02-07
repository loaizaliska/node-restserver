import { response, request } from "express";


const userGET = (req = request, res = response) => {
  res.json({
    msg: 'get API - controlador'
  });
}

const userPOST = (req = request, res = response) => {

  const { nombre, edad } = req.body;

  res.status(201).json({
    msg: 'post API',
    nombre,
    edad
  });
}
const userPUT = (req = request, res = response) => {
  const { id } = req.params;
  res.json({
    msg: 'put API',
    id
  });
}
const userDELETE =  (req = request, res = response) => {
  res.json({
    msg: 'delete API'
  });
}

export {
  userGET,
  userPOST,
  userPUT,
  userDELETE
}