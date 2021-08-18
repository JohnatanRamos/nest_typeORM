import {MigrationInterface, QueryRunner} from "typeorm";

export class createRaltion1629261167099 implements MigrationInterface {
    name = 'createRaltion1629261167099'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "public"."product" ADD "brandId" integer`);
        await queryRunner.query(`ALTER TABLE "public"."product" ADD CONSTRAINT "FK_bb7d3d9dc1fae40293795ae39d6" FOREIGN KEY ("brandId") REFERENCES "brand"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "public"."product" DROP CONSTRAINT "FK_bb7d3d9dc1fae40293795ae39d6"`);
        await queryRunner.query(`ALTER TABLE "public"."product" DROP COLUMN "brandId"`);
    }

}
