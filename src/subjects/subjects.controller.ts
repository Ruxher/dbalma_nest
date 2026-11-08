import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Post } from "@nestjs/common";
import { SubjectService } from "./subjects.service.js";
import { CreateSubjectDto } from "./dto/create_subjects.dto.js";

@Controller('subjects')
export class SubjectsController {
    constructor(private readonly subjectsService: SubjectService) {}

    @Post("/post") 
    create(@Body() createSubjectDto: CreateSubjectDto) {
    return this.subjectsService.create(createSubjectDto);
    }

    @Get()
    findAll() {
        return this.subjectsService.findAll()
    }

    @Delete('/:id')
    @HttpCode(HttpStatus.NO_CONTENT) 
    remove(@Param('id') id: string) {
        return this.subjectsService.remove(+id)
    }
}