let Job=require('cron').CronJob;
let job=new Job('* * * * * 1,5',function(){
    console.log(new Date().toLocaleString())
});
job.start();