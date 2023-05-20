const { Country, Activity } = require('../db');

const postActivity = async (req, res) => {    
    const { name, difficulty, duration, season, countries } = req.body;
    try {   
       const newActivity = await Activity.create({
           name,
           difficulty,
           duration,
           season
       });
       countries.forEach(async (element) => {
           let countryAct = await Country.findOne({
               where: {
                   name: element 
               }
           })
           await newActivity.addCountry(countryAct);                     
       });
       res.send('Activity created successfully!');             
    } catch (error) {
        res.send(error);
    }
};

const getAllActivities = async (req, res) => {
    try {
        const dbActInfo = await Activity.findAll({
            attributes: ['name'],
            include: Country                      
        })
        res.send(dbActInfo);               
    } catch (error) {
        res.send(error);
    }
};

async function deleteActivity(req, res, next) {
    try {
      const activityId = req.params.id;
      const result = await Activity.destroy({ where: { id: activityId } });
  
      if (result === 0) {
        return res.status(404).send('No se encontró ninguna actividad con ese ID');
      }
  
      res.send('Actividad eliminada correctamente');
    } catch (error) {
      next(error);
    }
  }

  async function updateActivity(req, res, next) {
    try {
      const activityId = req.params.id;
      const { title, description } = req.body;
  
      const activity = await Activity.findOne({ where: { id: activityId } });
      if (!activity) return res.status(404).send('No se encontró ninguna actividad con ese ID');
  
      activity.title = title || activity.title;
      activity.description = description || activity.description;
  
      await activity.save();
      res.send(activity);
    } catch (error) {
      next(error);
    }
  }

module.exports = {postActivity,getAllActivities,deleteActivity,updateActivity}