const { TestWatcher } = require('jest');
const dbBuild = require('./config/build');
const connection = require('./config/connection');
const { getDataQuery, getPatientId } = require('./queries');

beforeEach(() => dbBuild());
afterAll(() => connection.end());
getPatientId;
test('test jest', () => {
  expect(1).toBe(1);
});
test('testing return data', () => {
  return getDataQuery().then((data) => {
    expect(data.rows.length).toBe(1);
    expect(data.rows[0].full_name).toBe('wessal');
  });
});
