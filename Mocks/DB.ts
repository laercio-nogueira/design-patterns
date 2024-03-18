let data: any = {}

export default {
  create(item: object): any {
    data = { id: 1, ...item } 
    return data
  },
  read(id: number): any { 
    return { ...data, id }
  },
  update(id: number, item: object): string {
    data = { id, ...item }
    return `Item ${id} Update - ${JSON.stringify(data)}` 
  },
  delete(id: number): string { 
    return `Item Deleted ID: ${id}` 
  },
}