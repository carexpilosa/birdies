export function testAction(data) {
  return {type: TEST, ...data}
}

export const TEST = 'TEST';
