Get free time slots between given date range
### Installation
npm i getfreetime
### Usage
```javascript
import { getTimeSlots } from 'getfreetime'

let jsonData = [
{

      startDateTime: moment(
        "31-01-2023 15:20",
        "DD-MM-YYYY HH:mm"
      ).valueOf(),
      endDateTime: moment(
        "31-01-2023 15:30",
        "DD-MM-YYYY HH:mm"
      ).valueOf()
    },
    {
      startDateTime: moment(
        "31-01-2023 17:20",
        "DD-MM-YYYY HH:mm"
      ).valueOf(),
      endDateTime: moment(
        "31-01-2023 17:50",
        "DD-MM-YYYY HH:mm"
      ).valueOf()
    }

];

const duration=30
const startDate=moment().valueOf()
const endDate=moment().valueOf()
const slots=getTimeSlots(jsonData,duration,startDate,endDate)
```
#### result
```javascript
[
    {
        "startTime": 1675708200000,
        "endTime": 1675708800000,
        "freeTime": "12:00 am - 12:10 am"
    },
    {
        "startTime": 1675708800000,
        "endTime": 1675709400000,
        "freeTime": "12:10 am - 12:20 am"
    },
    {
        "startTime": 1675709400000,
        "endTime": 1675710000000,
        "freeTime": "12:20 am - 12:30 am"
    },
    {
        "startTime": 1675710000000,
        "endTime": 1675710600000,
        "freeTime": "12:30 am - 12:40 am"
    },
    {
        "startTime": 1675710600000,
        "endTime": 1675711200000,
        "freeTime": "12:40 am - 12:50 am"
    },
    {
        "startTime": 1675711200000,
        "endTime": 1675711800000,
        "freeTime": "12:50 am - 01:00 am"
    },
    {
        "startTime": 1675711800000,
        "endTime": 1675712400000,
        "freeTime": "01:00 am - 01:10 am"
    },
    {
        "startTime": 1675712400000,
        "endTime": 1675713000000,
        "freeTime": "01:10 am - 01:20 am"
    },
    {
        "startTime": 1675713000000,
        "endTime": 1675713600000,
        "freeTime": "01:20 am - 01:30 am"
    },
    {
        "startTime": 1675713600000,
        "endTime": 1675714200000,
        "freeTime": "01:30 am - 01:40 am"
    },
    {
        "startTime": 1675714200000,
        "endTime": 1675714800000,
        "freeTime": "01:40 am - 01:50 am"
    },
    {
        "startTime": 1675714800000,
        "endTime": 1675715400000,
        "freeTime": "01:50 am - 02:00 am"
    },
    {
        "startTime": 1675715400000,
        "endTime": 1675716000000,
        "freeTime": "02:00 am - 02:10 am"
    },
    {
        "startTime": 1675716000000,
        "endTime": 1675716600000,
        "freeTime": "02:10 am - 02:20 am"
    },
    {
        "startTime": 1675716600000,
        "endTime": 1675717200000,
        "freeTime": "02:20 am - 02:30 am"
    },
    {
        "startTime": 1675717200000,
        "endTime": 1675717800000,
        "freeTime": "02:30 am - 02:40 am"
    },
    {
        "startTime": 1675717800000,
        "endTime": 1675718400000,
        "freeTime": "02:40 am - 02:50 am"
    },
    {
        "startTime": 1675718400000,
        "endTime": 1675719000000,
        "freeTime": "02:50 am - 03:00 am"
    },
    {
        "startTime": 1675719000000,
        "endTime": 1675719600000,
        "freeTime": "03:00 am - 03:10 am"
    },
    {
        "startTime": 1675719600000,
        "endTime": 1675720200000,
        "freeTime": "03:10 am - 03:20 am"
    },
    {
        "startTime": 1675720200000,
        "endTime": 1675720800000,
        "freeTime": "03:20 am - 03:30 am"
    },
    {
        "startTime": 1675720800000,
        "endTime": 1675721400000,
        "freeTime": "03:30 am - 03:40 am"
    },
    {
        "startTime": 1675721400000,
        "endTime": 1675722000000,
        "freeTime": "03:40 am - 03:50 am"
    },
    {
        "startTime": 1675722000000,
        "endTime": 1675722600000,
        "freeTime": "03:50 am - 04:00 am"
    },
    {
        "startTime": 1675722600000,
        "endTime": 1675723200000,
        "freeTime": "04:00 am - 04:10 am"
    },
    {
        "startTime": 1675723200000,
        "endTime": 1675723800000,
        "freeTime": "04:10 am - 04:20 am"
    },
    {
        "startTime": 1675723800000,
        "endTime": 1675724400000,
        "freeTime": "04:20 am - 04:30 am"
    },
    {
        "startTime": 1675724400000,
        "endTime": 1675725000000,
        "freeTime": "04:30 am - 04:40 am"
    },
    {
        "startTime": 1675725000000,
        "endTime": 1675725600000,
        "freeTime": "04:40 am - 04:50 am"
    },
    {
        "startTime": 1675725600000,
        "endTime": 1675726200000,
        "freeTime": "04:50 am - 05:00 am"
    },
    {
        "startTime": 1675726200000,
        "endTime": 1675726800000,
        "freeTime": "05:00 am - 05:10 am"
    },
    {
        "startTime": 1675726800000,
        "endTime": 1675727400000,
        "freeTime": "05:10 am - 05:20 am"
    },
    {
        "startTime": 1675727400000,
        "endTime": 1675728000000,
        "freeTime": "05:20 am - 05:30 am"
    },
    {
        "startTime": 1675728000000,
        "endTime": 1675728600000,
        "freeTime": "05:30 am - 05:40 am"
    },
    {
        "startTime": 1675728600000,
        "endTime": 1675729200000,
        "freeTime": "05:40 am - 05:50 am"
    },
    {
        "startTime": 1675729200000,
        "endTime": 1675729800000,
        "freeTime": "05:50 am - 06:00 am"
    },
    {
        "startTime": 1675729800000,
        "endTime": 1675730400000,
        "freeTime": "06:00 am - 06:10 am"
    },
    {
        "startTime": 1675730400000,
        "endTime": 1675731000000,
        "freeTime": "06:10 am - 06:20 am"
    },
    {
        "startTime": 1675731000000,
        "endTime": 1675731600000,
        "freeTime": "06:20 am - 06:30 am"
    },
    {
        "startTime": 1675731600000,
        "endTime": 1675732200000,
        "freeTime": "06:30 am - 06:40 am"
    },
    {
        "startTime": 1675732200000,
        "endTime": 1675732800000,
        "freeTime": "06:40 am - 06:50 am"
    },
    {
        "startTime": 1675732800000,
        "endTime": 1675733400000,
        "freeTime": "06:50 am - 07:00 am"
    },
    {
        "startTime": 1675733400000,
        "endTime": 1675734000000,
        "freeTime": "07:00 am - 07:10 am"
    },
    {
        "startTime": 1675734000000,
        "endTime": 1675734600000,
        "freeTime": "07:10 am - 07:20 am"
    },
    {
        "startTime": 1675734600000,
        "endTime": 1675735200000,
        "freeTime": "07:20 am - 07:30 am"
    },
    {
        "startTime": 1675735200000,
        "endTime": 1675735800000,
        "freeTime": "07:30 am - 07:40 am"
    },
    {
        "startTime": 1675735800000,
        "endTime": 1675736400000,
        "freeTime": "07:40 am - 07:50 am"
    },
    {
        "startTime": 1675736400000,
        "endTime": 1675737000000,
        "freeTime": "07:50 am - 08:00 am"
    },
    {
        "startTime": 1675737000000,
        "endTime": 1675737600000,
        "freeTime": "08:00 am - 08:10 am"
    },
    {
        "startTime": 1675737600000,
        "endTime": 1675738200000,
        "freeTime": "08:10 am - 08:20 am"
    },
    {
        "startTime": 1675738200000,
        "endTime": 1675738800000,
        "freeTime": "08:20 am - 08:30 am"
    },
    {
        "startTime": 1675738800000,
        "endTime": 1675739400000,
        "freeTime": "08:30 am - 08:40 am"
    },
    {
        "startTime": 1675739400000,
        "endTime": 1675740000000,
        "freeTime": "08:40 am - 08:50 am"
    },
    {
        "startTime": 1675740000000,
        "endTime": 1675740600000,
        "freeTime": "08:50 am - 09:00 am"
    },
    {
        "startTime": 1675740600000,
        "endTime": 1675741200000,
        "freeTime": "09:00 am - 09:10 am"
    },
    {
        "startTime": 1675741200000,
        "endTime": 1675741800000,
        "freeTime": "09:10 am - 09:20 am"
    },
    {
        "startTime": 1675741800000,
        "endTime": 1675742400000,
        "freeTime": "09:20 am - 09:30 am"
    },
    {
        "startTime": 1675742400000,
        "endTime": 1675743000000,
        "freeTime": "09:30 am - 09:40 am"
    },
    {
        "startTime": 1675743000000,
        "endTime": 1675743600000,
        "freeTime": "09:40 am - 09:50 am"
    },
    {
        "startTime": 1675743600000,
        "endTime": 1675744200000,
        "freeTime": "09:50 am - 10:00 am"
    },
    {
        "startTime": 1675744200000,
        "endTime": 1675744800000,
        "freeTime": "10:00 am - 10:10 am"
    },
    {
        "startTime": 1675744800000,
        "endTime": 1675745400000,
        "freeTime": "10:10 am - 10:20 am"
    },
    {
        "startTime": 1675745400000,
        "endTime": 1675746000000,
        "freeTime": "10:20 am - 10:30 am"
    },
    {
        "startTime": 1675746000000,
        "endTime": 1675746600000,
        "freeTime": "10:30 am - 10:40 am"
    },
    {
        "startTime": 1675746600000,
        "endTime": 1675747200000,
        "freeTime": "10:40 am - 10:50 am"
    },
    {
        "startTime": 1675747200000,
        "endTime": 1675747800000,
        "freeTime": "10:50 am - 11:00 am"
    },
    {
        "startTime": 1675747800000,
        "endTime": 1675748400000,
        "freeTime": "11:00 am - 11:10 am"
    },
    {
        "startTime": 1675748400000,
        "endTime": 1675749000000,
        "freeTime": "11:10 am - 11:20 am"
    },
    {
        "startTime": 1675749000000,
        "endTime": 1675749600000,
        "freeTime": "11:20 am - 11:30 am"
    },
    {
        "startTime": 1675749600000,
        "endTime": 1675750200000,
        "freeTime": "11:30 am - 11:40 am"
    },
    {
        "startTime": 1675750200000,
        "endTime": 1675750800000,
        "freeTime": "11:40 am - 11:50 am"
    },
    {
        "startTime": 1675750800000,
        "endTime": 1675751400000,
        "freeTime": "11:50 am - 12:00 pm"
    },
    {
        "startTime": 1675751400000,
        "endTime": 1675752000000,
        "freeTime": "12:00 pm - 12:10 pm"
    },
    {
        "startTime": 1675752000000,
        "endTime": 1675752600000,
        "freeTime": "12:10 pm - 12:20 pm"
    },
    {
        "startTime": 1675752600000,
        "endTime": 1675753200000,
        "freeTime": "12:20 pm - 12:30 pm"
    },
    {
        "startTime": 1675753200000,
        "endTime": 1675753800000,
        "freeTime": "12:30 pm - 12:40 pm"
    },
    {
        "startTime": 1675753800000,
        "endTime": 1675754400000,
        "freeTime": "12:40 pm - 12:50 pm"
    },
    {
        "startTime": 1675754400000,
        "endTime": 1675755000000,
        "freeTime": "12:50 pm - 01:00 pm"
    },
    {
        "startTime": 1675755000000,
        "endTime": 1675755600000,
        "freeTime": "01:00 pm - 01:10 pm"
    },
    {
        "startTime": 1675755600000,
        "endTime": 1675756200000,
        "freeTime": "01:10 pm - 01:20 pm"
    },
    {
        "startTime": 1675756200000,
        "endTime": 1675756800000,
        "freeTime": "01:20 pm - 01:30 pm"
    },
    {
        "startTime": 1675756800000,
        "endTime": 1675757400000,
        "freeTime": "01:30 pm - 01:40 pm"
    },
    {
        "startTime": 1675757400000,
        "endTime": 1675758000000,
        "freeTime": "01:40 pm - 01:50 pm"
    },
    {
        "startTime": 1675758000000,
        "endTime": 1675758600000,
        "freeTime": "01:50 pm - 02:00 pm"
    },
    {
        "startTime": 1675758600000,
        "endTime": 1675759200000,
        "freeTime": "02:00 pm - 02:10 pm"
    },
    {
        "startTime": 1675759200000,
        "endTime": 1675759800000,
        "freeTime": "02:10 pm - 02:20 pm"
    },
    {
        "startTime": 1675759800000,
        "endTime": 1675760400000,
        "freeTime": "02:20 pm - 02:30 pm"
    },
    {
        "startTime": 1675760400000,
        "endTime": 1675761000000,
        "freeTime": "02:30 pm - 02:40 pm"
    },
    {
        "startTime": 1675761000000,
        "endTime": 1675761600000,
        "freeTime": "02:40 pm - 02:50 pm"
    },
    {
        "startTime": 1675761600000,
        "endTime": 1675762200000,
        "freeTime": "02:50 pm - 03:00 pm"
    },
    {
        "startTime": 1675762200000,
        "endTime": 1675762800000,
        "freeTime": "03:00 pm - 03:10 pm"
    },
    {
        "startTime": 1675762800000,
        "endTime": 1675763400000,
        "freeTime": "03:10 pm - 03:20 pm"
    },
    {
        "startTime": 1675763400000,
        "endTime": 1675764000000,
        "freeTime": "03:20 pm - 03:30 pm"
    },
    {
        "startTime": 1675764000000,
        "endTime": 1675764600000,
        "freeTime": "03:30 pm - 03:40 pm"
    },
    {
        "startTime": 1675764600000,
        "endTime": 1675765200000,
        "freeTime": "03:40 pm - 03:50 pm"
    },
    {
        "startTime": 1675765200000,
        "endTime": 1675765800000,
        "freeTime": "03:50 pm - 04:00 pm"
    },
    {
        "startTime": 1675765800000,
        "endTime": 1675766400000,
        "freeTime": "04:00 pm - 04:10 pm"
    },
    {
        "startTime": 1675766400000,
        "endTime": 1675767000000,
        "freeTime": "04:10 pm - 04:20 pm"
    },
    {
        "startTime": 1675767000000,
        "endTime": 1675767600000,
        "freeTime": "04:20 pm - 04:30 pm"
    },
    {
        "startTime": 1675767600000,
        "endTime": 1675768200000,
        "freeTime": "04:30 pm - 04:40 pm"
    },
    {
        "startTime": 1675768200000,
        "endTime": 1675768800000,
        "freeTime": "04:40 pm - 04:50 pm"
    },
    {
        "startTime": 1675768800000,
        "endTime": 1675769400000,
        "freeTime": "04:50 pm - 05:00 pm"
    },
    {
        "startTime": 1675769400000,
        "endTime": 1675770000000,
        "freeTime": "05:00 pm - 05:10 pm"
    },
    {
        "startTime": 1675770000000,
        "endTime": 1675770600000,
        "freeTime": "05:10 pm - 05:20 pm"
    },
    {
        "startTime": 1675770600000,
        "endTime": 1675771200000,
        "freeTime": "05:20 pm - 05:30 pm"
    },
    {
        "startTime": 1675771200000,
        "endTime": 1675771800000,
        "freeTime": "05:30 pm - 05:40 pm"
    },
    {
        "startTime": 1675771800000,
        "endTime": 1675772400000,
        "freeTime": "05:40 pm - 05:50 pm"
    },
    {
        "startTime": 1675772400000,
        "endTime": 1675773000000,
        "freeTime": "05:50 pm - 06:00 pm"
    },
    {
        "startTime": 1675773000000,
        "endTime": 1675773600000,
        "freeTime": "06:00 pm - 06:10 pm"
    },
    {
        "startTime": 1675773600000,
        "endTime": 1675774200000,
        "freeTime": "06:10 pm - 06:20 pm"
    },
    {
        "startTime": 1675774200000,
        "endTime": 1675774800000,
        "freeTime": "06:20 pm - 06:30 pm"
    },
    {
        "startTime": 1675774800000,
        "endTime": 1675775400000,
        "freeTime": "06:30 pm - 06:40 pm"
    },
    {
        "startTime": 1675775400000,
        "endTime": 1675776000000,
        "freeTime": "06:40 pm - 06:50 pm"
    },
    {
        "startTime": 1675776000000,
        "endTime": 1675776600000,
        "freeTime": "06:50 pm - 07:00 pm"
    },
    {
        "startTime": 1675776600000,
        "endTime": 1675777200000,
        "freeTime": "07:00 pm - 07:10 pm"
    },
    {
        "startTime": 1675777200000,
        "endTime": 1675777800000,
        "freeTime": "07:10 pm - 07:20 pm"
    },
    {
        "startTime": 1675777800000,
        "endTime": 1675778400000,
        "freeTime": "07:20 pm - 07:30 pm"
    },
    {
        "startTime": 1675778400000,
        "endTime": 1675779000000,
        "freeTime": "07:30 pm - 07:40 pm"
    },
    {
        "startTime": 1675779000000,
        "endTime": 1675779600000,
        "freeTime": "07:40 pm - 07:50 pm"
    },
    {
        "startTime": 1675779600000,
        "endTime": 1675780200000,
        "freeTime": "07:50 pm - 08:00 pm"
    },
    {
        "startTime": 1675780200000,
        "endTime": 1675780800000,
        "freeTime": "08:00 pm - 08:10 pm"
    },
    {
        "startTime": 1675780800000,
        "endTime": 1675781400000,
        "freeTime": "08:10 pm - 08:20 pm"
    },
    {
        "startTime": 1675781400000,
        "endTime": 1675782000000,
        "freeTime": "08:20 pm - 08:30 pm"
    },
    {
        "startTime": 1675782000000,
        "endTime": 1675782600000,
        "freeTime": "08:30 pm - 08:40 pm"
    },
    {
        "startTime": 1675782600000,
        "endTime": 1675783200000,
        "freeTime": "08:40 pm - 08:50 pm"
    },
    {
        "startTime": 1675783200000,
        "endTime": 1675783800000,
        "freeTime": "08:50 pm - 09:00 pm"
    },
    {
        "startTime": 1675783800000,
        "endTime": 1675784400000,
        "freeTime": "09:00 pm - 09:10 pm"
    },
    {
        "startTime": 1675784400000,
        "endTime": 1675785000000,
        "freeTime": "09:10 pm - 09:20 pm"
    },
    {
        "startTime": 1675785000000,
        "endTime": 1675785600000,
        "freeTime": "09:20 pm - 09:30 pm"
    },
    {
        "startTime": 1675785600000,
        "endTime": 1675786200000,
        "freeTime": "09:30 pm - 09:40 pm"
    },
    {
        "startTime": 1675786200000,
        "endTime": 1675786800000,
        "freeTime": "09:40 pm - 09:50 pm"
    },
    {
        "startTime": 1675786800000,
        "endTime": 1675787400000,
        "freeTime": "09:50 pm - 10:00 pm"
    },
    {
        "startTime": 1675787400000,
        "endTime": 1675788000000,
        "freeTime": "10:00 pm - 10:10 pm"
    },
    {
        "startTime": 1675788000000,
        "endTime": 1675788600000,
        "freeTime": "10:10 pm - 10:20 pm"
    },
    {
        "startTime": 1675788600000,
        "endTime": 1675789200000,
        "freeTime": "10:20 pm - 10:30 pm"
    },
    {
        "startTime": 1675789200000,
        "endTime": 1675789800000,
        "freeTime": "10:30 pm - 10:40 pm"
    },
    {
        "startTime": 1675789800000,
        "endTime": 1675790400000,
        "freeTime": "10:40 pm - 10:50 pm"
    },
    {
        "startTime": 1675790400000,
        "endTime": 1675791000000,
        "freeTime": "10:50 pm - 11:00 pm"
    },
    {
        "startTime": 1675791000000,
        "endTime": 1675791600000,
        "freeTime": "11:00 pm - 11:10 pm"
    },
    {
        "startTime": 1675791600000,
        "endTime": 1675792200000,
        "freeTime": "11:10 pm - 11:20 pm"
    },
    {
        "startTime": 1675792200000,
        "endTime": 1675792800000,
        "freeTime": "11:20 pm - 11:30 pm"
    },
    {
        "startTime": 1675792800000,
        "endTime": 1675793400000,
        "freeTime": "11:30 pm - 11:40 pm"
    },
    {
        "startTime": 1675793400000,
        "endTime": 1675794000000,
        "freeTime": "11:40 pm - 11:50 pm"
    },
    {
        "startTime": 1675794000000,
        "endTime": 1675794600000,
        "freeTime": "11:50 pm - 12:00 am"
    }
]
```