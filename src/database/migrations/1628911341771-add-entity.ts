import {MigrationInterface, QueryRunner} from "typeorm";

export class addEntity1628911341771 implements MigrationInterface {
    name = 'addEntity1628911341771'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "public"."user" DROP CONSTRAINT "FK_4f278c8e1c03410f24c5b8d5344"`);
        await queryRunner.query(`ALTER TABLE "public"."user" RENAME COLUMN "foreign" TO "customerId"`);
        await queryRunner.query(`ALTER TABLE "public"."user" RENAME CONSTRAINT "REL_4f278c8e1c03410f24c5b8d534" TO "UQ_6c687a8fa35b0ae35ce766b56ce"`);
        await queryRunner.query(`ALTER TABLE "public"."user" ADD CONSTRAINT "FK_6c687a8fa35b0ae35ce766b56ce" FOREIGN KEY ("customerId") REFERENCES "customer"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "public"."user" DROP CONSTRAINT "FK_6c687a8fa35b0ae35ce766b56ce"`);
        await queryRunner.query(`ALTER TABLE "public"."user" RENAME CONSTRAINT "UQ_6c687a8fa35b0ae35ce766b56ce" TO "REL_4f278c8e1c03410f24c5b8d534"`);
        await queryRunner.query(`ALTER TABLE "public"."user" RENAME COLUMN "customerId" TO "foreign"`);
        await queryRunner.query(`ALTER TABLE "public"."user" ADD CONSTRAINT "FK_4f278c8e1c03410f24c5b8d5344" FOREIGN KEY ("foreign") REFERENCES "customer"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
