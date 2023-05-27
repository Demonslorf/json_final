const fs = require('fs');
const {v4: uuidv4} = require('uuid');

exports.viewProyect = async (req, res) =>{
    const json_information = fs.readFileSync('src/DB/Proyecto.json', 'utf-8');
    let objeto = JSON.parse(json_information);
    res.send(objeto);
}

//--------------------------------------------------------------------------------------------------

exports.createProyecto = async (req, res) =>{
    
  const { Nombre, Descripcion, id_Estudiante } = req.body;

  let data = [];
  try {
    data = JSON.parse(fs.readFileSync('src/DB/Proyecto.json', 'utf-8'));
  } catch (error) {
    console.log('Error al leer el archivo JSON:', error);
  }

  // Agrega la nueva información al array
  data.push({ id: uuidv4(), Nombre: Nombre, Descripcion: Descripcion, id_Estudiante: id_Estudiante});

  // Guarda los datos actualizados en el archivo JSON
  fs.writeFile('src/DB/Proyecto.json', JSON.stringify(data, null, 2), (error) => {
    if (error) {
      console.log('Error al guardar la información:', error);
      res.status(500).json({ mensaje: 'Error al guardar la información' });
    } else {
      console.log('Información agregada exitosamente');
      res.json({ mensaje: 'Información agregada exitosamente' });
    }
  });
}

//--------------------------------------------------------------------------------------------------

  exports.editProyecto = async (req, res) =>{
    const { id, Nombre, Descripcion, id_Estudiante } = req.body;

  // Lee el archivo JSON existente (si existe)
    let data = [];
    try {
      data = JSON.parse(fs.readFileSync('src/DB/Proyecto.json', 'utf-8'));
    } catch (error) {
      console.log('Error al leer el archivo JSON:', error);
      res.status(500).json({ mensaje: 'Error al leer el archivo JSON' });
      return;
    }

  // Encuentra el índice del objeto con el ID proporcionado
    const index = data.findIndex((item) => item.id === id);

  // Si no se encontró el objeto, devuelve un error
    if (index === -1) {
      res.status(404).json({ mensaje: 'El objeto no existe' });
      return;
    }

  // Actualiza la información del objeto en el array
    data[index].Nombre = Nombre;
    data[index].Descripcion = Descripcion;
    data[index].id_Estudiante = id_Estudiante;

  // Guarda los datos actualizados en el archivo JSON
    fs.writeFile('src/DB/Proyecto.json', JSON.stringify(data, null, 2), (error) => {
      if (error) {
        console.log('Error al guardar la información:', error);
        res.status(500).json({ mensaje: 'Error al guardar la información' });
      } else {
        console.log('Información actualizada exitosamente');
        res.json({ mensaje: 'Información actualizada exitosamente' });
      }
    });
  }  

exports.deleteProyect = async (req, res) =>{
  // Obtén el ID enviado en la solicitud
  const { id } = req.params;

  // Lee el archivo JSON existente (si existe)
  let data = [];
  try {
    data = JSON.parse(fs.readFileSync('src/DB/Proyecto.json'));
  } catch (error) {
    console.log('Error al leer el archivo JSON:', error);
    res.status(500).json({ mensaje: 'Error al leer el archivo JSON' });
    return;
  }

  // Encuentra el índice del objeto con el ID proporcionado
  const index = data.findIndex((item) => item.id === id);

  // Si no se encontró el objeto, devuelve un error
  if (index === -1) {
    res.status(404).json({ mensaje: 'El objeto no existe' });
    return;
  }

  // Elimina el objeto del array
  data.splice(index, 1);

  // Guarda los datos actualizados en el archivo JSON
  fs.writeFile('src/DB/Proyecto.json', JSON.stringify(data, null, 2), (error) => {
    if (error) {
      console.log('Error al guardar la información:', error);
      res.status(500).json({ mensaje: 'Error al guardar la información' });
    } else {
      console.log('Información eliminada exitosamente');
      res.json({ mensaje: 'Información eliminada exitosamente' });
    }
  });
}

//---------------------------------------------------------------------------------------

exports.FindProyect = (req, res)=>{
  const { atributo } = req.params;

  fs.readFile('src/DB/Proyecto.json', 'utf8', (error, data) => {
    if (error) {
      console.log('Error al leer el archivo JSON:', error);
      res.status(500).json({ mensaje: 'Error al leer el archivo JSON' });
      return;
    }

    try {
      const jsonData = JSON.parse(data);
      const resultados = jsonData.reduce((acc, item) => {
        if (item.hasOwnProperty(atributo)) {
          acc.push(item);
        }
        return acc;
      }, []);

      if (resultados.length === 0) {
        res.status(404).json({ mensaje: 'No se encontraron resultados para el atributo proporcionado' });
        return;
      }

      res.json(resultados);
    } catch (error) {
      console.log('Error al analizar el archivo JSON:', error);
      res.status(500).json({ mensaje: 'Error al analizar el archivo JSON' });
    }
  });
}