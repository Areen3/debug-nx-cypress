export interface  IModelData {
  data: string;
}

export function modelDataTest(data: IModelData): string {
  console.log('from library', data.data)
  return data.data;
}
