export function testAction(data) {
  return {type: TEST, data: [...data]};
}

export const TEST = 'TEST';
