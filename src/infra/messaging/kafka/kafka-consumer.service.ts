import { Injectable, OnModuleDestroy } from '@nestjs/common';
import { ServerKafka } from '@nestjs/microservices';

@Injectable()
export class KafkaConsumerService
  extends ServerKafka
  implements OnModuleDestroy
{
  constructor() {
    super({
      client: {
        clientId: 'notifications',
        brokers: ['relative-whippet-13556-us1-kafka.upstash.io:9092'],
        sasl: {
          mechanism: 'scram-sha-256',
          username:
            'cmVsYXRpdmUtd2hpcHBldC0xMzU1NiRNZsVjLbhJQghR2z0-qiiIW4_bGAwcDQA',
          password:
            'qIVcAw5ZN-PVI_Rc-lZjAHKvvRkrt5jA-RttqSjnh9a0UJUA6YuMY1z3gT6ICaNpJb6Z0g==',
        },
        ssl: true,
      },
    });
  }
  async onModuleDestroy() {
    await this.close();
  }
}
