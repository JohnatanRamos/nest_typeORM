import { MigrationInterface, QueryRunner } from 'typeorm';

export class changeField1628825477197 implements MigrationInterface {
  name = 'changeField1628825477197';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "public"."product" ADD "createData" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()`,
    );
    await queryRunner.query(
      `ALTER TABLE "public"."product" ADD "updateData" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "public"."product" DROP COLUMN "updateData"`,
    );
    await queryRunner.query(
      `ALTER TABLE "public"."product" DROP COLUMN "createData"`,
    );
  }
}
