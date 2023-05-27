const fs = require('fs');
const {v4: uuidv4} = require('uuid');

const json_information = fs.readFileSync('src/DB/AnteProyecto.json', 'utf-8');
let objeto = JSON.parse(json_information);

exports.viewAnteProyect = async (req, res) =>{
    res.send(objeto);
}

//-----------------------------------------------

exports.createAnteProyect = async (req, res) =>{
    const {DescripcionProblem, PlanteamientoProblem, Hipotesis, ObjetivoGeneral, TituloTentativo, Justificacion, id_Estudiante} = req.body;
    objeto.push({
        id: uuidv4(),
        DescripcionProblem, 
        PlanteamientoProblem, 
        Hipotesis, 
        ObjetivoGeneral, 
        TituloTentativo, 
        Justificacion,
        id_Estudiante
    });

    const json_information = JSON.stringify(objeto);
    fs.writeFileSync('src/DB/AnteProyecto.json', json_information, 'utf-8');
    res.send(objeto);
}

//-----------------------------------------------

exports.deleteAnteProyect = async (req, res) =>{
    objeto = objeto.filter(objeto => objeto.id != req.params.id);
    const json_information = JSON.stringify(objeto);
    fs.writeFileSync('src/DB/AnteProyecto.json', json_information, 'utf-8');
    res.send('¡Eliminado!')
}

//-----------------------------------------------

exports.editAnteProyect = async (req, res) =>{

    const { id, DescripcionProblem, PlanteamientoProblem, Hipotesis, ObjetivoGeneral, TituloTentativo, Justificacion } = req.body;

  // Lee el archivo JSON existente (si existe)
    let data = [];
    try {
      data = JSON.parse(fs.readFileSync('src/DB/AnteProyecto.json', 'utf-8'));
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
    data[index].DescripcionProblem = DescripcionProblem;
    data[index].PlanteamientoProblem = PlanteamientoProblem;
    data[index].Hipotesis = Hipotesis;
    data[index].ObjetivoGeneral = ObjetivoGeneral;
    data[index].TituloTentativo = TituloTentativo;
    data[index].Justificacion = Justificacion;

  // Guarda los datos actualizados en el archivo JSON
    fs.writeFile('src/DB/AnteProyecto.json', JSON.stringify(data, null, 2), (error) => {
      if (error) {
        console.log('Error al guardar la información:', error);
        res.status(500).json({ mensaje: 'Error al guardar la información' });
      } else {
        console.log('Información actualizada exitosamente');
        res.json({ mensaje: 'Información actualizada exitosamente' });
      }
    });
}

//-----------------------------------------------

exports.unAnteProyect = async (req, res) =>{
  const { id } = req.params;

  fs.readFile('src/DB/AnteProyecto.json', 'utf8', (error, data) => {
    if (error) {
      console.log('Error al leer el archivo JSON:', error);
      res.status(500).json({ mensaje: 'Error al leer el archivo JSON' });
      return;
    }

    try {
      const jsonData = JSON.parse(data);
      const resultado = jsonData.find(item => item.id === id);

      if (!resultado) {
        res.status(404).json({ mensaje: 'No se encontró el elemento con el ID proporcionado' });
        return;
      }

      res.json(resultado);
    } catch (error) {
      console.log('Error al analizar el archivo JSON:', error);
      res.status(500).json({ mensaje: 'Error al analizar el archivo JSON' });
    }
  });
}

  //-----------------------------------------------
  
  exports.unAP = (req, res) => {
    const { atributo, valor } = req.params; 
  
    fs.readFile('src/DB/AnteProyecto.json', 'utf8', (error, data) => {
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