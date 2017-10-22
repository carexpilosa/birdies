const TEST = 'TEST';

export function testAction(data) {
  return {type: 'TEST', ...data}
}
