export type TableHeader = { text: string; value: string; }
export type TableDropdown = { id: string }

export type ITable = {
  id: number;
  label: string; 
  header: Array<TableHeader>;
  dropdown: Array<TableDropdown>
}
