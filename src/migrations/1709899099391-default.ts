import { MigrationInterface, QueryRunner } from "typeorm";

export class Default1709899099391 implements MigrationInterface {
    name = 'Default1709899099391'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "sharkin" ("id" SERIAL NOT NULL, "dia" date NOT NULL, "horario" text NOT NULL, "usuarios.id" integer, CONSTRAINT "PK_9686ee29ebd2e8985766c166a59" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "usuarios" ("id" SERIAL NOT NULL, "nome" text NOT NULL, "email" text NOT NULL, "senha" text NOT NULL, CONSTRAINT "PK_d7281c63c176e152e4c531594a8" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "sharkin" ADD CONSTRAINT "FK_f7c8879d6bcfe3c501c5a8c37a3" FOREIGN KEY ("usuarios.id") REFERENCES "usuarios"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "sharkin" DROP CONSTRAINT "FK_f7c8879d6bcfe3c501c5a8c37a3"`);
        await queryRunner.query(`DROP TABLE "usuarios"`);
        await queryRunner.query(`DROP TABLE "sharkin"`);
    }

}
