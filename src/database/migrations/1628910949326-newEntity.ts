import {MigrationInterface, QueryRunner} from "typeorm";

export class newEntity1628910949326 implements MigrationInterface {
    name = 'newEntity1628910949326'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "user" ("id" SERIAL NOT NULL, "email" character varying(60) NOT NULL, "password" character varying(40) NOT NULL, "role" character varying(40) NOT NULL, "createData" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updateData" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "foreign" integer, CONSTRAINT "REL_4f278c8e1c03410f24c5b8d534" UNIQUE ("foreign"), CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "public"."customer" ADD "createData" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "public"."customer" ADD "updateData" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "user" ADD CONSTRAINT "FK_4f278c8e1c03410f24c5b8d5344" FOREIGN KEY ("foreign") REFERENCES "customer"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP CONSTRAINT "FK_4f278c8e1c03410f24c5b8d5344"`);
        await queryRunner.query(`ALTER TABLE "public"."customer" DROP COLUMN "updateData"`);
        await queryRunner.query(`ALTER TABLE "public"."customer" DROP COLUMN "createData"`);
        await queryRunner.query(`DROP TABLE "user"`);
    }

}
