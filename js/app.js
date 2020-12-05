// replace these values with those generated in your TokBox Account
var apiKey = "47018614";
var sessionId = "2_MX40NzAxODYxNH5-MTYwNzE0MTMyNTMxNX5qNHdMMDdkUGdvbERmL2hLQzRJRmk1MjJ-fg";
var token = "T1==cGFydG5lcl9pZD00NzAxODYxNCZzaWc9OTEzOTNiMTllYjhmZjhkM2E5OGQ3MWI2MGNiZmQ0YmY4Yjg2OWVjNzpzZXNzaW9uX2lkPTJfTVg0ME56QXhPRFl4Tkg1LU1UWXdOekUwTVRNeU5UTXhOWDVxTkhkTU1EZGtVR2R2YkVSbUwyaExRelJKUm1rMU1qSi1mZyZjcmVhdGVfdGltZT0xNjA3MTQxNDI0Jm5vbmNlPTAuNDM1NDAzNTE3MjI1NTg5OSZyb2xlPXB1Ymxpc2hlciZleHBpcmVfdGltZT0xNjA3MTYzMDIzJmluaXRpYWxfbGF5b3V0X2NsYXNzX2xpc3Q9";

// Handling all of our errors here by alerting them
function handleError(error) {
  if (error) {
    alert(error.message);
  }
}

// (optional) add server code here
initializeSession();

function initializeSession() {
  var session = OT.initSession(apiKey, sessionId);

  // Subscribe to a newly created stream
  session.on('streamCreated', function(event) {
    session.subscribe(event.stream, 'subscriber', {
      insertMode: 'append',
      width: '100%',
      height: '100%'
    }, handleError);
  });

  // Create a publisher
  var publisher = OT.initPublisher('publisher', {
    insertMode: 'append',
    width: '100%',
    height: '100%'
  }, handleError);

  // Connect to the session
  session.connect(token, function(error) {
    // If the connection is successful, initialize a publisher and publish to the session
    if (error) {
      handleError(error);
    } else {
      session.publish(publisher, handleError);
    }
  });
}
