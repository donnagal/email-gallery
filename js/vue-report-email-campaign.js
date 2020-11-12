
var study = new Vue({
  el: '#items',

  data: {

    items: [
      { 
        name: 'Statements - AMB Invite SIS',
        color: 'green-02',
        group: 'comms',
        sent: 33,
        opens: 24,
        openrate: 73,
        clicks: 1,
        clickrate: 3,
        subject: '<Name>, register for the 2020 Annual Member Briefing',
        filter: 'oct-2020',
        peroid: 2020+10+01,
        time: '01/10/2020 | 10:00',
        url: ["https://email-gallery.netlify.app/emails/2020-08-statements/amb-invite.html"],
        unsub: 0,
      },
      { 
        name: 'Statements - AMB Invite',
        color: 'green-02',
        group: 'comms',
        sent: 1268,
        opens: 763,
        openrate:3,
        clicks: 37,
        clickrate: 60,
        subject: '<Name>, register for the 2020 Annual Member Briefing',
        filter: 'oct-2020',
        peroid: 2020+10+01,
        time: '01/10/2020 | 10:00',
        url: ["https://email-gallery.netlify.app/emails/2020-08-statements/amb-invite.html"],
        unsub: 0,
      },
      { 
        name: 'Retirement Super in your 40s - invite',
        color: 'purple',
        group: 'Webinar',
        sent: 5335,
        opens: 2186,
        openrate: 41,
        clicks: 56,
        clickrate: 1,
        subject: '<Name>, maximise your super in your 40s',
        filter: 'oct-2020',
        peroid: 2020+10+01+1,
        time: '1/10/2020 | 11:19:00 AM',
        url: ["https://email-gallery.netlify.app/emails/Retirement Webinar 40-49.html"],
        unsub: 2,
      },
      { 
        name: 'Statements - seg-1 (no-address)',
        color: 'green-02',
        group: 'comms',
        sent: 4461,
        opens: 1227,
        openrate: 28,
        clicks: 213,
        clickrate: 5,
        subject: '<Name>, log in to see your annual statement',
        filter: 'oct-2020',
        peroid: 2020+10+02+10,
        time: '2/10/2020 | 10:00:00 AM',
        url: ["https://litmus.com/checklist/public/3ef2fb2"],
        unsub: 0,
      },
      { 
        name: 'Statements - seg-2 (no-address)',
        color: 'green-02',
        group: 'comms',
        sent: 6897,
        opens: 2273,
        openrate: 33,
        clicks: 614,
        clickrate: 9,
        subject: '<Name>, log in to see your annual statement',
        filter: 'oct-2020',
        peroid: 2020+10+02+12,
        time: '2/10/2020 | 12:01:00 PM',
        url: ["https://litmus.com/checklist/public/3ef2fb2"],
        unsub: 0,
      },
      { 
        name: 'Statements - seg-3 (no-address)',
        color: 'green-02',
        group: 'comms',
        sent: 1867,
        opens: 752,
        openrate: 40,
        clicks: 286,
        clickrate: 15,
        subject: '<Name>, log in to see your annual statement',
        filter: 'oct-2020',
        peroid: 2020+10+02+15,
        time: '2/10/2020 | 3:01:00 PM',
        url: ["https://litmus.com/checklist/public/3ef2fb2"],
        unsub: 0,
      },
      { 
        name: 'Campaigns Young Cohort',
        color: 'green-02',
        group: 'comms',
        sent: 152308,
        opens: 44693,
        openrate: 29,
        clicks: 921,
        clickrate: 1,
        subject: 'Creating jobs for our members',
        filter: 'oct-2020',
        peroid: 2020+10+06,
        time: '6/10/2020 | 9:35:00 AM',
        url: ["https://email-gallery.netlify.app/emails/2020-09-mbr_road-to-recovery--young-cohort"],
        unsub: 218,
      },
      { 
        name: 'Retirement Multi invite (event 13)',
        color: 'purple',
        group: 'Webinar',
        sent: 6082,
        opens: 3007,
        openrate: 49,
        clicks: 111,
        clickrate: 2,
        subject: 'As a valued Cbus member, we invite you to attend an upcoming webinar.',
        filter: 'oct-2020',
        peroid: 2020+10+06+10,
        time: '6/10/2020 | 10:01:00 AM',
        url: ["xx"],
        unsub: 0,
      },
      { 
        name: 'Campaigns Abandoned cart',
        color: 'green-02',
        group: 'Member',
        sent: 138,
        opens: 87,
        openrate: 63,
        clicks: 24,
        clickrate: 17,
        subject: '<Name>, good news - we’ve saved your application.',
        filter: 'oct-2020',
        peroid: 2020+10+06+15,
        time: '6/10/2020 | 3:16:00 PM',
        url: ["https://email-gallery.netlify.app/emails/2020-08_abandon%20cart"],
        unsub: 0,
      },
      { 
        name: 'Retirement Super in your 40s - Reminder',
        color: 'purple',
        group: 'Webinar',
        sent: 5305,
        opens: 1854,
        openrate: 35,
        clicks: 31,
        clickrate: 1,
        subject: 'Managing super in your 40s’ webinar - there’s still spots left',
        filter: 'oct-2020',
        peroid: 2020+10+07,
        time: '7/10/2020 | 12:28:00 PM',
        url: ["xx"],
        unsub: 5,
      },
      { 
        name: 'Super brand survey - Subject line A',
        color: 'lagoon',
        group: 'Brand',
        sent: 7432,
        opens: 2932,
        openrate: 39,
        clicks: 283,
        clickrate: 4,
        subject: '<Name>, share your feedback for your chance to receive a gift card or voucher!',
        filter: 'oct-2020',
        peroid: 2020+10+08,
        time: '8/10/2020 | 2:19:00 PM',
        url: ["https://email-gallery.netlify.app/emails/2020-10-mbr_super-brand-survey.html"],
        unsub: 6,
      },
      { 
        name: 'Super brand survey - Subject line B',
        color: 'lagoon',
        group: 'Brand',
        sent: 7450,
        opens: 2915,
        openrate: 39,
        clicks: 259,
        clickrate: 3,
        subject: '<Name>, tell us your opinion about super funds and win',
        filter: 'oct-2020',
        peroid: 2020+10+08,
        time: '8/10/2020 | 2:19:00 PM',
        url: ["https://email-gallery.netlify.app/emails/2020-10-mbr_super-brand-survey.html"],
        unsub: 9,
      },
      { 
        name: 'Campaigns SPC - Monthly to new members',
        color: 'green-02',
        group: 'Member',
        sent: 4158,
        opens: 2489,
        openrate: 60,
        clicks: 162,
        clickrate: 4,
        subject: 'Unpaid Super Services - Member Data Opt Out Notice',
        filter: 'oct-2020',
        peroid: 2020+10+13+9,
        time: '13/10/2020 | 9:26:00 AM',
        url: ["xx"],
        unsub: 0,
      },
      { 
        name: 'Campaign Abandoned cart',
        color: 'green-02',
        group: 'Member',
        sent: 159,
        opens: 108,
        openrate: 68,
        clicks: 32,
        clickrate: 20,
        subject: '<Name>, good news - we’ve saved your application.',
        filter: 'oct-2020',
        peroid: 2020+10+01,
        time: '13/10/2020 | 3:01:00 PM',
        url: ["https://email-gallery.netlify.app/emails/2020-08_abandon%20cart"],
        unsub: 3,
      },
      { 
        name: 'White Collar',
        color: 'blue-light',
        group: 'Webinar',
        sent: 2965,
        opens: 1294,
        openrate: 44,
        clicks: 22,
        clickrate: 1,
        subject: '<Name>, how much do you know about your super?',
        filter: 'oct-2020',
        peroid: 2020+10+14,
        time: '14/10/2020 | 12:30:00 PM',
        url: ["xx"],
        unsub: 6,
      },
      { 
        name: 'Super brand survey - Reminder',
        color: 'lagoon',
        group: 'Brand',
        sent: 14744,
        opens: 5144,
        openrate: 35,
        clicks: 345,
        clickrate: 2,
        subject: '<Name>, share your feedback for your chance to receive a gift card or voucher!',
        filter: 'oct-2020',
        peroid: 2020+10+15,
        time: '15/10/2020 | 10:27:00 AM',
        url: ["https://email-gallery.netlify.app/emails/2020-10-mbr_super-brand-survey.html"],
        unsub: 12,
      },
      { 
        name: 'Retirement Multi invite (event 13)',
        color: 'purple',
        group: 'Webinar',
        sent: 6052,
        opens: 2543,
        openrate: 42,
        clicks: 107,
        clickrate: 2,
        subject: '[Webinar] It’s almost time – Reserve your spot. 🔔',
        filter: 'oct-2020',
        peroid: 2020+10+16,
        time: '16/10/2020 | 11:00:00 AM',
        url: ["xx"],
        unsub: 0,
      },
      { 
        name: 'Statements - Video Non RIE - Reminder',
        color: 'green-02',
        group: 'Comms',
        sent: 875,
        opens: 168,
        openrate: 19,
        clicks: 15,
        clickrate: 2,
        subject: '<Name>, don’t forget to watch your personal video update',
        filter: 'oct-2020',
        peroid: 2020+10+16,
        time: '16/10/2020 | 11:09:00 AM',
        url: ["xx"],
        unsub: 0,
      },
      { 
        name: 'Statements - Video Non RIE seg-2 - Reminder',
        color: 'green-02',
        group: 'Comms',
        sent: 1392,
        opens: 237,
        openrate: 17,
        clicks: 14,
        clickrate: 1,
        subject: '<Name>, don’t forget to watch your personal video update',
        filter: 'oct-2020',
        peroid: 2020+10+16,
        time: '16/10/2020 | 11:09:00 AM',
        url: ["xx"],
        unsub: 0,
      },
      { 
        name: 'Statements - Video Non RIE seg-4 - Reminder',
        color: 'green-02',
        group: 'Comms',
        sent: 7114,
        opens: 987,
        openrate: 14,
        clicks: 33,
        clickrate: 1,
        subject: '<Name>, don’t forget to watch your personal video update',
        filter: 'oct-2020',
        peroid: 2020+10+16,
        time: '16/10/2020 | 11:09:00 AM',
        url: ["https://litmus.com/pub/927a9d7"],
        unsub: 0,
      },
      { 
        name: 'Statements - Video RIE seg-4 - Reminder',
        color: 'green-02',
        group: 'Comms',
        sent: 51218,
        opens: 987,
        openrate: 14,
        clicks: 7089,
        clickrate: 1,
        subject: '<Name>, don’t forget to watch your personal video update',
        filter: 'oct-2020',
        peroid: 2020+10+16,
        time: '16/10/2020 | 11:09:00 AM',
        url: ["https://litmus.com/pub/927a9d7"],
        unsub: 0,
      },
      { 
        name: 'Statements - Video Non RIE seg-1 - Reminder',
        color: 'green-02',
        group: 'Comms',
        sent: 20683,
        opens: 2607,
        openrate: 13,
        clicks: 73,
        clickrate: 0,
        subject: '<Name>, don’t forget to watch your personal video update',
        filter: 'oct-2020',
        peroid: 2020+10+16,
        time: '16/10/2020 | 11:09:00 AM',
        url: ["https://litmus.com/pub/927a9d7"],
        unsub: 0,
      },
      { 
        name: 'Campaign Abandoned cart',
        color: 'green-02',
        group: 'Member',
        sent: 180,
        opens: 112,
        openrate: 18,
        clicks: 33,
        clickrate: 20,
        subject: '<Name>, good news - we’ve saved your application.',
        filter: 'oct-2020',
        peroid: 2020+10+20,
        time: '20/10/2020 | 3:07:00 PM',
        url: ["https://email-gallery.netlify.app/emails/2020-08_abandon%20cart"],
        unsub: 4,
      },
      { 
        name: 'White Collar',
        color: 'blue-light',
        group: 'Webinar',
        sent: 2740,
        opens: 944,
        openrate: 1,
        clicks: 18,
        clickrate: 1,
        subject: '[Webinar] Learn how your super can work better for you',
        filter: 'oct-2020',
        peroid: 2020+10+26,
        time: '26/10/2020 | 2:50:00 PM',
        url: ["xx"],
        unsub: 11,
      },
      { 
        name: 'Campaign Abandoned cart',
        color: 'green-02',
        group: 'Member',
        sent: 169,
        opens: 105,
        openrate: 62,
        clicks: 27,
        clickrate: 16,
        subject: '<Name>, good news - we’ve saved your application.',
        filter: 'oct-2020',
        peroid: 2020+10+20,
        time: '27/10/2020 | 4:24:00 PM',
        url: ["https://email-gallery.netlify.app/emails/2020-08_abandon%20cart"],
        unsub: 2,
      },
      { 
        name: 'Retirement Multi invite (event 14)',
        color: 'purple',
        group: 'Webinar',
        sent: 33442,
        opens: 16953,
        openrate: 51,
        clicks: 692,
        clickrate: 2,
        subject: '<Name>, thinking about retirement?',
        filter: 'oct-2020',
        peroid: 2020+10+29,
        time: '29/10/2020 | 11:57:00 AM',
        url: ["xx"],
        unsub: 29,
      },




    { 
        name: '[Pre-Retirement Webinar] 2020-09 QLD (43-53yrs) - #10 Reminder',
        color: 'purple',
        group: 'event',
        sent: 8900,
        opens: 3271,
        openrate: 36.75 ,     
        clicks: 57,
        clickrate: 0.64,
        subject: 'Spots are filling fast. Reserve yours today. 🔔',
        filter: 'nov-2020',
        time: '09/09/2020 WED 09:00AM',
        url: ["https://email-gallery.netlify.app/emails/2020-09-event_webinar-retirement-single-event-10-reminder"],
        topclick: 0,
    },
],
      sortKey: '',
      sortSettings: [
          { 'name': true },
          { 'group': true },
          { 'peroid': true },
          { 'opens': true },
          { 'unsub': true },
          { 'topclick': true }
        ],
      desc: true
  },
  methods: {
      orderBy: function(sorKey) {
          this.sortKey = sorKey
          this.sortSettings[sorKey] = !this.sortSettings[sorKey]
          this.desc = this.sortSettings[sorKey]
          
      }
  }
});