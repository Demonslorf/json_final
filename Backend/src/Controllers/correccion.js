const fs = require('fs');
const {v4: uuidv4} = require('uuid');
const jwt = require('jsonwebtoken');
const secretKey = 'tu-clave-secreta';
//--------------------------------------------------------------------------------------------------

exports.viewCorrection = async (req, res) =>{
    const json_information = fs.readFileSync('src/DB/Correcciones.json', 'utf-8');
    let objeto = JSON.parse(json_information);
    res.send(objeto);
}

//--------------------------------------------------------------------------------------------------

exports.createCorrection = async (req, res) =>{
    
  const { Item, Contenido, Fecha, id_Estudiante } = req.body;

  let data = [];
  try {
    data = JSON.parse(fs.readFileSync('src/DB/Correcciones.json', 'utf-8'));
  } catch (error) {
    console.log('Error al leer el archivo JSON:', error);
  }

  // Agrega la nueva información al array
  data.push({ id: uuidv4(), Item: Item, Contenido: Contenido, Fecha: Fecha, id_Estudiante: id_Estudiante });

  // Guarda los datos actualizados en el archivo JSON
  fs.writeFile('src/DB/Correcciones.json', JSON.stringify(data, null, 2), (error) => {
    if (error) {
      console.log('Error al guardar la información:', error);
      res.status(500).json({ mensaje: 'Error al guardar la información' });
    } else {
      console.log('Información agregada exitosamente');
      res.json({ mensaje: 'Información agregada exitosamente' });
    }
  });
}

//-----------------------------------------------

exports.especificC = async (req, res) =>{
  const { atributo, valor } = req.params; 

  fs.readFile('src/DB/Correcciones.json', 'utf8', (error, data) => {
    if (error) {
      console.log('Error al leer el archivo JSON:', error);
      res.status(500).json({ mensaje: 'Error al leer el archivo JSON' });
      return;
    }

    try {
      const jsonData = JSON.parse(data);
      const resultados = jsonData.filter(item => item[atributo] === valor);

      if (resultados.length === 0) {
        res.status(404).json({ mensaje: 'No se encontraron elementos con el atributo y valor proporcionados' });
        return;
      }

      res.json(resultados);
    } catch (error) {
      console.log('Error al analizar el archivo JSON:', error);
      res.status(500).json({ mensaje: 'Error al analizar el archivo JSON' });
    }
  });
}