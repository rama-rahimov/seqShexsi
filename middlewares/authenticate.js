import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import { querySync, insert } from "./db.js";
import {Users} from "../models/users.js" ;
import {fin_data} from "../models/fin_data.js" ;
import {Api_limit} from "../models/api_limit.js" ;
import {config} from "../config.js" ;


export const checkurl = (req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'https://portal.edu.az');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  if (new RegExp(/(script)|(&lt;)|(&gt;)|(%3c)|(%3e)|(SELECT)|(UPDATE)|(INSERT)|(DELETE)|(GRANT)|(REVOKE)|(UNION)|(&amp;lt;)|(&amp;gt;)/g).test(req.url)) {
    return res.json({ message: 'Go away!' });
  } else {
    next();
  }
}

export const authenticate = (req, res, next) => {
  const header = req.headers.authorization;
  let token;
  if (header) token = header.split(" ")[1];

  if (token) {  
    jwt.verify(token, config.secret, (err, decoded) => {
      if (err) {  
        res.status(401).json({ errors: { global: "Invalid tokeeeen" } });
      } 
      // else if (decoded.time < new Date().getTime() - (4 * 60 * 60 * 1000)) {
      //   res.status(401).json({ errors: { global: "Invalid tokenn" } });
      // }
       else {
        querySync(Users.findOne({attributes:['id', 'email', 'role', 'fin', 'phone', 'country_code', 'citizenshipId', 'asanLogin'], where:{fin:decoded.fin, citizenshipId:decoded.citizenshipId}, include:[{model:fin_data, required: false}]})).then(user => {
          if (user) {
          req.currentUser = user ;
            next();
          } else {
            res.status(401).json({ errors: { global: "Invalid tokeen" } });
          }
        }).catch(err => { res.json(err) })
      }
    });
  } else {

    res.status(401).json({ errors: { global: "No token" } });
  }
}; 


export const ipLimit = (api) => (req, res, next) => {

  const ip = req.connection.remoteAddress.replace("::ffff:", "");
  insert(Api_limit.create({api, ip}), null, (() => { }));

  querySync("SELECT count(id) as count From api_limit where ip=? and api=? and create_date > DATE_ADD(now(),interval -1 hour)", [ip, api]).then(result => {
    if ((result || {}).error) {
      res.status(401).json({ errors: { global: "db error", message: (result || {}).error } });
    } else if (Number((result || {}).count) < 10) {
      next();
    } else {
      res.status(401).json({ errors: { global: "Limit out off" } });
    }
  }).catch(e => {
    res.status(401).json({ errors: { global: "db error", e } });
  });

};

export const global_authenticate = (req, res, next) => {
  const header = req.headers.authorization;
  let token;

  if (header) token = header.split(" ")[1];
  if (token) {
    jwt.verify(token, process.env.JWT_GLOBAL_SECRET, (err, decoded) => {
      if (err || decoded.secret !== process.env.JWT_GLOBAL_SECRET2) {
        res.status(401).json({ errors: { message: "Non correct token" } });
      } else {
        req.currentGlobalUser = decoded;
        next();
      }
    });
  } else {
    res.status(401).json({ errors: { message: "No token" } });
  }
};


export const isValidPassword = (password, password2) => {
  return bcrypt.compareSync(password, password2);
};

export const setPassword = password => {
  return bcrypt.hashSync(password, 10);
};

export const setConfirmationToken = user => {
  return generateJWT(user);
};

export const generateJWT = user => {
  if(user.fin){
    const { fin, citizenshipId } = user ;
    return  jwt.sign(
      { fin:fin , citizenshipId, time: new Date().getTime() },
      config.secret
    )
  }else if(user.fin_datum){
    const { fin_datum, citizenshipId } = user ;
    return  jwt.sign(
      { fin:fin_datum.fin , citizenshipId, time: new Date().getTime() },
      config.secret
    );
  }
};

export const toAuthJSON = user => {
  return {
    user,
    token: generateJWT(user)
  };
};
