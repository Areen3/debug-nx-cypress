export interface ITestCyModel {
  myData: string
}

export function cyModel(data: ITestCyModel): string {
  console.log('from lib:', data.myData);
  return data.myData
}
