import { Module } from "@nestjs/common";
import { SubjectService } from "./subjects.service.js";
import { SubjectsController } from "./subjects.controller.js";

@Module({
    controllers: [SubjectsController],
    providers: [SubjectService],
})
export class SubjectModule {}