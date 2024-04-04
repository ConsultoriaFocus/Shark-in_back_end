import { MigrationInterface, QueryRunner } from "typeorm";

export class Default1709920409801 implements MigrationInterface {
    name = 'Default1709920409801'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "sharkout" ("id" SERIAL NOT NULL, "data" date NOT NULL, "horario" text NOT NULL, CONSTRAINT "PK_c813747d027fbf77f7fb521be88" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "usuarios"."id" ("sharkoutId" integer NOT NULL, "usuariosId" integer NOT NULL, CONSTRAINT "PK_aec4068795fbecb7385485f8b82" PRIMARY KEY ("sharkoutId", "usuariosId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_8795654043884c5c5dd54c9520" ON "usuarios"."id" ("sharkoutId") `);
        await queryRunner.query(`CREATE INDEX "IDX_3d37b8c55e185d816f80d18127" ON "usuarios"."id" ("usuariosId") `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP INDEX "usuarios"."IDX_3d37b8c55e185d816f80d18127"`);
        await queryRunner.query(`DROP INDEX "usuarios"."IDX_8795654043884c5c5dd54c9520"`);
        await queryRunner.query(`DROP TABLE "usuarios"."id"`);
        await queryRunner.query(`DROP TABLE "sharkout"`);
    }

}
