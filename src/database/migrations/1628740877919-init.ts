import { MigrationInterface, QueryRunner } from 'typeorm';

export class init1628740877919 implements MigrationInterface {
  name = 'init1628740877919';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "customer" ("id" SERIAL NOT NULL, "name" character varying(100) NOT NULL, "lastName" character varying(100) NOT NULL, "phone" character varying(20) NOT NULL, CONSTRAINT "PK_a7a13f4cacb744524e44dfdad32" PRIMARY KEY ("id"))`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "customer"`);
  }
}
