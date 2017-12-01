var url = "https://google.com"
module.exports = {
  'Test google App': function(client) {
    client
      .url(url)
      .waitForElementVisible('body', 1000)
      .assert.title('Google')
      .assert.visible('input[id=lst-ib]')
      .setValue('input[id=lst-ib]', 'uzi')
      .pause(1000)
      .end();
  }
};