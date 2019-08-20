const assert = require('assert');
const app = require('../../src/app');

describe('\'Dealership\' service', () => {
  it('registered the service', () => {
    const service = app.service('dealership');

    assert.ok(service, 'Registered the service');
  });
});
