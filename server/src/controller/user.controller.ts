import { Entity, LessThan, Repository } from "typeorm";
import { Controller } from "./base.controller";
import { AppDataSource } from "../data-source";
import { User } from "../entity/User";

export class UserController extends Controller {
    repository = AppDataSource.getRepository(User);

    getNeedleFilter = async(req, res) => {
        var today = new Date();
        var eighteenYearsAgo = new Date(today.getFullYear() - 18, today.getMonth(), today.getDate());
        try {
            const users = await this.repository.find({
                where: {
                    birthDay: LessThan(eighteenYearsAgo),
                },
            });
            res.json(users);
        } catch(err) {
            this.handleError(res, err);
        }
    }
}