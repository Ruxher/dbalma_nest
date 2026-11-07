import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service.js";
import { CreateSubjectDto } from "./dto/create_subjects.dto.js";

@Injectable()
export class SubjectService{
    constructor(private readonly prisma: PrismaService) {}

    create(dto: CreateSubjectDto) {
        return this.prisma.subject.create({
            data: {
                name: dto.name,
                subject: dto.subject,
                content: dto.content,
            }
        })
    }

    findAll() {
        return this.prisma.subject.findMany();
    }
}