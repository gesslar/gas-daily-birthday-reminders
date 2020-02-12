function run() {
    const names     = [];
    const today     = new Date();
    const calendars = CalendarApp.getAllCalendars();
    const pat       = /^(.*)\'s birthday$/i;
    const subject   = `Birthday Notifications for ${today.toString()}`;
    const body      = "The following birthdays occur today:";
    const myEmail   = Session.getActiveUser().getEmail();
    
    calendars.forEach( calendar => {
      const events = calendar.getEventsForDay(today);
      
      events.forEach( event => {
        const title = event.getTitle();
        const result = pat.exec(title);
   
        if(result) names.push(result[1]);
      });
    });
  
    if(names.length) {
      GmailApp.sendEmail(
        myEmail, 
        subject, 
        `${body}\n${names.join("\n")}`,
        { htmlBody: `${body}<br />${names.join("<br />")}` }
      );
    }
  }
  