export function testAction(data) {
  console.log('action');
  console.log(data);
  return {type: TEST, data: [...data]}
}

export const TEST = 'TEST';
