import { Controller } from "./base.controller";
import { AppDataSource } from "../data-source";
import { Visit } from "../entity/Visit";

export class VisitController extends Controller {
    repository = AppDataSource.getRepository(Visit);
    
    create = async(req, res) => {
        try {
          const entity = this.repository.create(req.body as object);
          delete entity.id;

          const entityInserted =  await this.repository.save(entity);
          res.json(entityInserted);
        } catch(err) {
          this.handleError(res, err);
        }
    };

    visitOfUser = async(req, res) => {
      try{
          const tajNumber = req.params.tajNumber;
          const visits = await this.repository.find({
              where: {
                patient: {tajNumber: tajNumber}
              }
          });
          res.json(visits);
      } catch(err) {
          this.handleError(res, err);
      }
    }
}