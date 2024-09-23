import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';
import { url } from 'inspector';

const config = {
  name: 'friends_22mc',
  connector: 'postgresql',
  url: 'postgresql://friends_22mc_user:MYb636CQgaMgS5LyvxnjfKbL8vAuYspy@dpg-cromks1u0jms73cbptg0-a.frankfurt-postgres.render.com/friends_22mc',
  ssl: true
};

// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
@lifeCycleObserver('datasource')
export class DbDataSource extends juggler.DataSource
  implements LifeCycleObserver {
  static dataSourceName = 'db';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.db', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
