import { Controller, Post, Get, Body,Put,Param,Delete} from '@nestjs/common';
import { webhookService } from './webhook.service';
import { WebHook } from './webhook.entity';



@Controller('webhook')
export class WebhookController {
  constructor(private webhookservice:webhookService) {}

  @Post()
  async create(@Body() body1:any) {
    let commits=body1.commits

    console.log(commits)
    if (!Array.isArray(commits)) {
      return { message: 'No commits found' };
    }

    const data: WebHook[] = commits.map(commit => ({
      id: commit.id,
      treeId: commit.tree_id,
      distinct: commit.distinct,
      message: commit.message,
      timestamp: new Date(commit.timestamp),
      url: commit.url,
      author: commit.author,
      committer: commit.committer,
    }));
  console.log(data,'new')
    return this.webhookservice.create(data); 
   
  }

}
