export interface ITestCyModel {
  myData: string
}

export function cyModel(data: ITestCyModel): string {
  return data.myData
}

