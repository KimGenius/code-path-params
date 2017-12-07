const tester = require('gitbook-tester');
const jasmine = require('jasmine-node');

// set timeout of jasmine async test. Default is 5000ms. That can
// be too low for a complete test (install, build, expects)
jasmine.getEnv().defaultTimeoutInterval = 20000;

describe("my first gitbook integration test", function() {
  it('should create book and parse content', function(testDone) {
    tester.builder()
      .withContent('#test me \n\n![preview](preview.jpg)')
      .create()
      .then(function(result) {
        expect(result[0].content).toEqual('<h1 id="test-me">test me</h1>\n<p><img src="preview.jpg" alt="preview"></p>');
      })
      .fin(testDone)
      .done();
  });
});