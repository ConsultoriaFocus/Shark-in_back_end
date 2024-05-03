import { MigrationInterface, QueryRunner } from "typeorm";

export class Default1714708320894 implements MigrationInterface {
    name = 'Default1714708320894'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "sharkin" DROP CONSTRAINT "FK_9686ee29ebd2e8985766c166a59"`);
        await queryRunner.query(`ALTER TABLE "sharkin" ADD "usuario_id" integer`);
        await queryRunner.query(`ALTER TABLE "sharkin" ADD CONSTRAINT "FK_9ea0a8987a18837acc30d41de93" FOREIGN KEY ("usuario_id") REFERENCES "usuarios"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "sharkin" DROP CONSTRAINT "FK_9ea0a8987a18837acc30d41de93"`);
        await queryRunner.query(`ALTER TABLE "sharkin" DROP COLUMN "usuario_id"`);
        await queryRunner.query(`ALTER TABLE "sharkin" ADD CONSTRAINT "FK_9686ee29ebd2e8985766c166a59" FOREIGN KEY ("id") REFERENCES "usuarios"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
