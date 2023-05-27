const fs = require('fs');
const {v4: uuidv4} = require('uuid');
const jwt = require('jsonwebtoken');
const secretKey = 'tu-clave-secreta';
//--------------------------------------------------------------------------------------------------

exports.viewUser = async (req, res) =>{
    const json_information = fs.readFileSync('src/DB/Usuarios.json', 'utf-8');
    let objeto = JSON.parse(json_information);
    res.send(objeto);
}

//--------------------------------------------------------------------------------------------------

exports.createUser = async (req, res) =>{
    
  const { User, Password } = req.body;

  let data = [];
  try {
    data = JSON.parse(fs.readFileSync('src/DB/Usuarios.json', 'utf-8'));
  } catch (error) {
    console.log('Error al leer el archivo JSON:', error);
  }

  // Agrega la nueva información al array
  data.push({ id: uuidv4(), User: User, Password: Password });

  // Guarda los datos actualizados en el archivo JSON
  fs.writeFile('src/DB/Usuarios.json', JSON.stringify(data, null, 2), (error) => {
    if (error) {
      console.log('Error al guardar la información:', error);
      res.status(500).json({ mensaje: 'Error al guardar la información' });
    } else {
      console.log('Información agregada exitosamente');
      res.json({ mensaje: 'Información agregada exitosamente' });
    }
  });
}

//---------------------------------------------------------------------------------------

exports.login = async (req, res)=>{
    const { User, Password } = req.body;

    let users = [];
    try {
      users = JSON.parse(fs.readFileSync('src/DB/Usuarios.json', 'utf-8'));
    } catch (error) {
      console.log('Error al leer el archivo JSON:', error);
    }
  
    // Verificar las credenciales del usuario
    const user = users.find((user) => user.User === User && user.Password === Password);
  
    if (!user) {
      res.status(401).json({ mensaje: 'Credenciales inválidas' });
      return;
    }
  
    // Generar un token JWT
    const token = jwt.sign({ userId: user.id }, secretKey, { expiresIn: '1h' });
  
    res.json({ token });
}

//---------------------------------------------------------------------------------------

exports.FindUser = async (req, res)=>{
    const { User, Password } = req.body;

    let users = [];
    try {
      users = JSON.parse(fs.readFileSync('src/DB/Usuarios.json', 'utf-8'));
    } catch (error) {
      console.log('Error al leer el archivo JSON:', error);
    }
  
    // Verificar las credenciales del usuario
    const user = users.find((user) => user.User === User && user.Password === Password);
  
    if (!user) {
      res.status(401).json({ mensaje: 'Credenciales inválidas' });
      return;
    }
  
    res.send({ userId:user.id });
}