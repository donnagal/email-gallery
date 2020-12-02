
var study = new Vue({
  el: '#items',

  data: {

    items: [
      { 
        name: 'Retirement Super in your 40s Reminder (#17)',
        color: 'purple',
        group: 'Webinar',
        sent: 37427,
        opens: 11947,
        openrate: 32,
        clicks: 271,
        clickrate: 1,
        subject: '[Webinar] It’s almost time – Reserve your spot. 🔔',
        filter: 'nov-2020',
        peroid: 2020+11+12,
        time: '30/11/2020 | 4:01:43 PM',
        url: ["https://email-gallery.netlify.app/emails/2020-12-event_webinar-40s-reminder.html"],
        unsub: 29,
        unsubrate: 0.1,
        id: 'DM13474',
      },
      { 
        name: 'White Collar Invite',
        color: 'blue-light',
        group: 'Webinar',
        sent: 7587,
        opens: 2465,
        openrate: 32,
        clicks: 75,
        clickrate: 1,
        subject: '[Webinar] Learn how your super can work better for you',
        filter: 'nov-2020',
        peroid: 2020+11+30,
        time: '30/11/2020 | 3:01:04 PM',
        url: ["https://email-gallery.netlify.app/emails/2020-12-event-white-collar-invite"],
        unsub: 6,
        unsubrate: 0.1,
        id: 'DM13461',
      },
      { 
        name: 'FYOB rolled in over 50',
        color: 'green-02',
        group: 'Member',
        sent: 988,
        opens: 632,
        openrate: 64,
        clicks: 32,
        clickrate: 3,
        subject: 'Thanks for 12 months with us. Here’s what to do next',
        filter: 'nov-2020',
        peroid: 2020+11+30,
        time: '30/11/2020 | 3:00:32 PM',
        url: ["https://m.marketing.cbussuper.com.au/nl/jsp/m.jsp?c=%40lx3LsjDkAwvOTEqyULMC7jTtrJOTL36huUiWuMo5PqQ%3D"],
        unsub: 1,
        unsubrate: 0.1,
        id: 'DM5473',
      },
      { 
        name: 'FYOB rolled in under 50',
        color: 'green-02',
        group: 'Member',
        sent: 3967,
        opens: 2100,
        openrate:53,
        clicks: 105,
        clickrate: 7,
        subject: 'Thanks for 12 months with us. Here’s what to do next',
        filter: 'nov-2020',
        peroid: 2020+11+30,
        time: '30/11/2020 | 3:00:31 PM',
        url: ["https://protect-au.mimecast.com/s/TQXVCnx1GGc7DXRNHpJ505?domain=t.marketing.cbussuper.com.au"],
        unsub: 0,
        unsubrate: 0,
        id: 'DM5471',
      },
      { 
        name: 'FYOB - not rolled in',
        color: 'green-02',
        group: 'Member',
        sent: 11817,
        opens: 5565,
        openrate:47,
        clicks: 295,
        clickrate: 7,
        subject: 'Thanks for 12 months with us. Here’s what to do next',
        filter: 'nov-2020',
        peroid: 2020+11+30,
        time: '30/11/2020 | 3:00:29 PM',
        url: ["https://m.marketing.cbussuper.com.au/nl/jsp/m.jsp?c=%40g2PtkB4xXoAMYrCpE%2FtqiyfAXDie7mmMq0US7ih5PcA%3D"],
        unsub: 61,
        unsubrate: 1,
        id: 'DM5471',
      },
      { 
        name: 'Retirement Super in your 40s (#17)',
        color: 'purple',
        group: 'Webinar',
        sent: 37678,
        opens: 14719,
        openrate:39,
        clicks: 415,
        clickrate: 1,
        subject: '<Name>, thinking about retirement?',
        filter: 'nov-2020',
        peroid: 2020+11+12,
        time: '24/11/2020 | 4:01:10 PM',
        url: ["https://email-gallery.netlify.app/emails/2020-12-event_webinar-40s-invite.html"],
        unsub: 0,
        unsubrate: 0,
        id: 'DM13437',
      },
      { 
        name: 'Campaigns Abandoned cart',
        color: 'green-02',
        group: 'Member',
        sent: 172,
        opens: 112,
        openrate:65,
        clicks: 31,
        clickrate: 18,
        subject: '<Name>, good news - we’ve saved your application.',
        filter: 'nov-2020',
        peroid: 2020+11+24,
        time: '24/11/2020 | 1:31:11 PM',
        url: ["https://email-gallery.netlify.app/emails/2020-08_abandon%20cart"],
        unsub: 0,
        unsubrate: 0,
        id: 'DM13381',
      },
      { 
        name: 'Retirement Multi Reminder (#16)',
        color: 'purple',
        group: 'Webinar',
        sent: 36135,
        opens: 14498,
        openrate:40,
        clicks: 483,
        clickrate: 1,
        subject: '[Webinar] It’s almost time – Reserve your spot. 🔔',
        filter: 'nov-2020',
        peroid: 2020+11+18,
        time: '18/11/2020 | 3:30:55 PM',
        url: ["https://email-gallery.netlify.app/emails/2020-11-event_webinar-retirement-multi-event-16-reminder.html"],
        unsub: 40,
        unsubrate: 0.1,
        id: 'DM13392',
      },
      { 
        name: 'Campaigns Abandoned cart',
        color: 'green-02',
        group: 'Member',
        sent: 190,
        opens: 121,
        openrate:64,
        clicks: 38,
        clickrate: 20,
        subject: '<Name>, good news - we’ve saved your application.',
        filter: 'nov-2020',
        peroid: 2020+11+17,
        time: '17/11/2020 | 1:40:43 PM',
        url: ["https://email-gallery.netlify.app/emails/2020-08_abandon%20cart"],
        unsub: 8,
        unsubrate: 4,
        id: 'DM13381',
      },
      { 
        name: 'Retirement Super in your 40s (#15) - reminder',
        color: 'purple',
        group: 'Webinar',
        sent: 36458,
        opens: 13739,
        openrate:38,
        clicks: 290,
        clickrate: 1,
        subject: 'Managing super in your 40s webinar - there’s still spots left',
        filter: 'nov-2020',
        peroid: 2020+11+16,
        time: '16/11/2020 | 4:07:10 PM',
        url: ["https://email-gallery.netlify.app/emails/2020-11-event-15-reminder.html"],
        unsub: 24,
        unsubrate: 0.1,
        id: 'DM13366',
      },
      { 
        name: 'Retirement Multi Invite (#16)',
        color: 'purple',
        group: 'Webinar',
        sent: 31742,
        opens: 14969,
        openrate:47,
        clicks: 498,
        clickrate: 2,
        subject: '<Name>, thinking about retirement?',
        filter: 'nov-2020',
        peroid: 2020+11+12,
        time: '12/11/2020 | 2:32:09 PM',
        url: ["https://email-gallery.netlify.app/emails/2020-11-event_webinar-retirement-multi-event-16"],
        unsub: 23,
        unsubrate: 0.1,
        id: 'DM13341',
      },
      { 
        name: 'Retirement Super in your 40s (#15) - invite',
        color: 'purple',
        group: 'Webinar',
        sent: 18420,
        opens: 7798,
        openrate:42,
        clicks: 242,
        clickrate: 1,
        subject: '<Name>, maximise your super in your 40s',
        filter: 'nov-2020',
        peroid: 2020+11+12,
        time: '12/11/2020 | 8:55:27 AM',
        url: ["https://email-gallery.netlify.app/emails/templates/2020/event-single"],
        unsub: 1,
        unsubrate: 0.1,
        id: 'DM13359',
      },
      { 
        name: 'Campaigns Abandoned cart',
        color: 'green-02',
        group: 'Member',
        sent: 157,
        opens: 97,
        openrate:60,
        clicks: 23,
        clickrate: 15,
        subject: '<Name>, good news - we’ve saved your application.',
        filter: 'nov-2020',
        peroid: 2020+11+11,
        time: '11/11/2020 | 5:00:11 PM',
        url: ["https://email-gallery.netlify.app/emails/2020-08_abandon%20cart"],
        unsub: 1,
        unsubrate: 1,
        id: 'DM13321',
      },
      { 
        name: 'Retirement Super in your 40s - invite',
        color: 'purple',
        group: 'Webinar',
        sent: 18375,
        opens: 8090,
        openrate:44,
        clicks: 258,
        clickrate: 1,
        subject: '<Name>, maximise your super in your 40s',
        filter: 'nov-2020',
        peroid: 2020+11+10+1,
        time: '10/11/2020 | 3:01:56 PM',
        url: ["https://email-gallery.netlify.app/emails/templates/2020/event-single"],
        unsub: 16,
        unsubrate: 0.1,
        id: 'DM13142',
      },
      { 
        name: 'Campaigns SPC - Monthly to new members',
        color: 'green-02',
        group: 'Member',
        sent: 4238,
        opens: 2484,
        openrate: 59,
        clicks: 181,
        clickrate: 4,
        subject: 'Unpaid Super Services - Member Data Opt Out Notice',
        filter: 'nov-2020',
        peroid: 2020+11+10,
        time: '10/11/2020 | 10:17:49 AM',
        url: ["https://email-gallery.netlify.app/emails/2020-10_mbr-super-payment-checker.html"],
        unsub: 0,
        unsubrate: 0,
        id: 'DM13322',
      },
      { 
        name: 'White Collar (A/B 7pm)',
        color: 'blue-light',
        group: 'Webinar',
        sent: 1351,
        opens: 600,
        openrate:44,
        clicks: 8,
        clickrate: 1,
        subject: '[Register Now] Get the most out of your super',
        filter: 'nov-2020',
        peroid: 2020+11+09+1,
        time: '9/11/2020 | 7:00:32 PM',
        url: ["https://email-gallery.netlify.app/emails/2020-11-event-white-collar-16-30.html"],
        unsub: 4,
        unsubrate: 0.1,
        id: 'DM13327',
      },
      { 
        name: 'White Collar (A/B 4pm)',
        color: 'blue-light',
        group: 'Webinar',
        sent: 1344,
        opens: 597,
        openrate:44,
        clicks: 11,
        clickrate: 1,
        subject: '[Register Now] Get the most out of your super',
        filter: 'nov-2020',
        peroid: 2020+11+09,
        time: '9/11/2020 | 4:00:14 PM',
        url: ["https://email-gallery.netlify.app/emails/2020-11-event-white-collar-16-30.html"],
        unsub: 4,
        unsubrate: 0.1,
        id: 'DM13312',
      },
      { 
        name: 'Campaigns Abandoned cart',
        color: 'green-02',
        group: 'Member',
        sent: 151,
        opens: 105,
        openrate:70,
        clicks: 26,
        clickrate: 17,
        subject: '<Name>, good news - we’ve saved your application.',
        filter: 'nov-2020',
        peroid: 2020+11+04+1,
        time: '4/11/2020 | 1:13:34 PM',
        url: ["https://email-gallery.netlify.app/emails/2020-08_abandon%20cart"],
        unsub: 4,
        unsubrate: 3,
        id: 'DM13297',
      },
      { 
        name: 'Retirement Multi Reminder (#14)',
        color: 'purple',
        group: 'Webinar',
        sent: 31745,
        opens: 14682,
        openrate:46,
        clicks: 509,
        clickrate: 2,
        subject: '[Webinar] It’s almost time – Reserve your spot. 🔔',
        filter: 'nov-2020',
        peroid: 2020+11+04,
        time: '4/11/2020 | 10:03:18 AM',
        url: ["https://email-gallery.netlify.app/emails/2020-11-event_webinar-retirement-event-14-reminder"],
        unsub: 37,
        unsubrate: 0.1,
        id: 'DM13282',
      },
      { 
        name: 'Statements - AMB Invite',
        color: 'green-02',
        group: 'comms',
        sent: 1268,
        opens: 763,
        openrate:60,
        clicks: 37,
        clickrate: 3,
        subject: '<Name>, register for the 2020 Annual Member Briefing',
        filter: 'oct-2020',
        peroid: 2020+10+01,
        time: '01/10/2020 | 10:00',
        url: ["https://email-gallery.netlify.app/emails/2020-08-statements/amb-invite.html"],
        unsub: 0,
        unsubrate: 0,
        id: 'DM12436',
      },
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
        unsubrate: 0,
        id: 'DM12440',
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
        unsubrate: 0.1,
        id: 'DM12733',
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
        unsubrate: 0,
        id: 'DM12414',
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
        unsubrate: 0,
        id: 'DM12418',
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
        unsubrate: 0,
        id: 'DM12422',
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
        unsubrate: 0.1,
        id: 'DM12729',
      },
      { 
        name: 'Retirement Multi invite (#13)',
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
        url: ["https://email-gallery.netlify.app/emails/2020-10-event_webinar-retirement-multi-event-13.html"],
        unsub: 0,
        unsubrate: 0,
        id: 'DM12750',
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
        unsub: 2,
        unsubrate: 1,
        id: 'DM12785',
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
        url: ["https://email-gallery.netlify.app/emails/Retirement webinar reminder 40-49.html"],
        unsub: 5,
        unsubrate: 0.1,
        id: 'DM12857',
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
        unsubrate: 0.1,
        id: 'DM12825',
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
        unsubrate: 0.1,
        id: 'DM12824',
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
        url: ["https://email-gallery.netlify.app/emails/2020-10_mbr-super-payment-checker.html"],
        unsub: 0,
        unsubrate: 0,
        id: 'DM12954',
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
        unsubrate: 2,
        id: 'DM12987',
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
        url: ["https://email-gallery.netlify.app/emails/2020-11-event-white-collar-16-30.html"],
        unsub: 6,
        unsubrate: 0.1,
        id: 'DM12684',
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
        unsubrate: 0.1,
        id: 'DM12998',
      },
      { 
        name: 'Retirement Multi Reminder (#13)',
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
        url: ["https://email-gallery.netlify.app/emails/2020-10-event_webinar-retirement-multi-event-13-reminder.html"],
        unsub: 0,
        unsubrate: 0,
        id: 'DM12962',
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
        url: ["https://litmus.com/pub/ddd9318"],
        unsub: 0,
        unsubrate: 0,
        id: 'DM12942',
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
        url: ["https://litmus.com/pub/db9ca64"],
        unsub: 0,
        unsubrate: 0,
        id: 'DM12937',
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
        unsubrate: 0,
        id: 'DM12947',
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
        unsubrate: 0,
        id: 'DM12927',
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
        unsubrate: 0,
        id: 'DM12932',
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
        unsubrate: 2,
        id: 'DM13027',
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
        url: ["2020-11-White-collar-webinar-invite.html"],
        unsub: 11,
        unsubrate: 0.1,
        id: 'DM13099',
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
        unsubrate: 1,
        id: 'DM13115',
      },
      { 
        name: 'Retirement Multi invite (#14)',
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
        url: ["https://email-gallery.netlify.app/emails/2020-10-November-Retirement-Webinar-Series-Initial-Invite.html"],
        unsub: 30,
        unsubrate: 0.1,
        id: 'DM13162',
      },
],
      sortKey: '',
      sortSettings: [
          { 'name': true },
          { 'group': true },
          { 'peroid': true },
          { 'opens': true },
          { 'unsub': true },
          { 'unsubrate': true },
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


$(document).ready(function(){
  $("#myInput").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $("#search").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });
});