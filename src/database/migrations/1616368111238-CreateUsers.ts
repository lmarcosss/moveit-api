import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class CreateUsers1616368111238 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
              name: 'users',
              columns: [
                {
                  name: 'id',
                  type: 'uuid',
                  isPrimary: true,
                  generationStrategy: 'uuid',
                  default: 'uuid_generate_v4()',
                },
                {
                  name: 'name',
                  type: 'varchar',
                },
                {
                  name: 'username',
                  type: 'varchar',
                },
                {
                  name: 'avatar_url',
                  type: 'varchar',
                },
                {
                  name: 'experience_id',
                  type: 'uuid',
                  isNullable: false,
                },
                {
                  name: 'created_at',
                  type: 'timestamp',
                  default: 'now()',
                },
                {
                  name: 'updated_at',
                  type: 'timestamp',
                  default: 'now()',
                },
              ],
            }),
        )

        await queryRunner.createForeignKey(
            'users',
            new TableForeignKey({
                name: 'UsersExperience',
                columnNames: ['experience_id'],
                referencedColumnNames: ['id'],
                referencedTableName: 'experiences',
                onDelete: 'CASCADE',
                onUpdate: 'CASCADE',
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('users', 'UsersExperience');
        await queryRunner.dropTable('users');
    }

}
