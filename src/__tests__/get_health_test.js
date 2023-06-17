import getHealth from '../get_health';

test.each([
  ['Mar', 90, 'healthy'],
  ['Rar', 30, 'wounded'],
  ['Par', 10, 'critical'],
])('testing health function %s character with %i health', (characterName, health, expected) => {
  const result = getHealth({ name: characterName, health });
  expect(result).toBe(expected);
});
