import { Injectable, NotFoundException } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service.js";
import { CreateSubjectDto } from "./dto/create_subjects.dto.js";
import { Prisma } from "../generated/prisma/client.js";

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

    async remove(id: number) {
        try {
            return await this.prisma.subject.delete({
                where: { id }
            })
        } catch (error) {
            if (error instanceof Prisma.PrismaClientKnownRequestError && error.code === 'P2025') {
            throw new NotFoundException(`Usuário com ID ${id} não encontrado.`);
        }

        throw error;
    }
    }
}