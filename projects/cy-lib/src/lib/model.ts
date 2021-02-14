export interface  IModelData {
  data: string;
}

export  function modelDataTest(data: IModelData): string {
  return data.data;
}
