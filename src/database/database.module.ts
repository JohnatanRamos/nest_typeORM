import { Module, Global } from '@nestjs/common';
import { Client } from 'pg';
import { ConfigType } from '@nestjs/config';
import config from '../config'

const API_KEY = '12345634';
const API_KEY_PROD = 'PROD1212121SA';

const client = new Client({
  user: 'root',
  host: 'localhost',
  database: 'my_db',
  password: '123456',
  port: 5432
});

client.connect();

@Global()
@Module({
    {
      provide: 'API_KEY',
      useValue: process.env.NODE_ENV === 'prod' ? API_KEY_PROD : API_KEY,
    },
    {
      provide: 'PG-WHIT-VALUE',
      useValue: client,
    },
    {
      provide: 'PG',
      useFactory: (configService: ConfigType<typeof config>) => {
        const { user, host, dbName, password, port } = configService.postgres;
          const client = new Client({
              user,
              host,
              database: dbName,
              password
              port
  });
      },
      inject: [config.key]
    }
  ],
  exports: ['API_KEY', 'PG'], 
})
export class DatabaseModule {}
