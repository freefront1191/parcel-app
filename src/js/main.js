// main.js
import '../scss/main.scss';
import { msg } from './msg';
import m from 'moment';

String.prototype.replaceAll = function(search, replacement) {
  var target = this;
  return target.replace(new RegExp(search, 'g'), replacement);
};

// console.log(msg.hello);
// console.log(m().month()+1);
// console.log(m().format('LLLL'));
let startDate = '2018-10-14';
let startTime = '14:01';
let endTime = '16:01';

startDate = startDate.replaceAll('-','');
startTime = startTime.replaceAll(':','');
endTime = endTime.replaceAll(':','');


let startDatetime = startDate + startTime;
let endDatetime = startDate + endTime;
console.log(startDatetime);
console.log(endDatetime);
// console.log(typeof m(startDatetime).format('YYYYMMDDHHmm'));
console.log(m(startDatetime,'YYYYMMDDHHmm').toDate());
console.log(m(endDatetime,'YYYYMMDDHHmm').toDate());