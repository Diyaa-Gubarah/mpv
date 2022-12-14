export type ListType = {
    id: number;
    icon: 'check' | 'close' | 'waiting';
    title: string;
    stage: "1" | "2" | "3"
}
const ListData: ListType[] = [
    { id: 1, icon: 'check', title: "Planning", stage: '1' },
    { id: 2, icon: 'close', title: "Building", stage: '3' },
    { id: 3, icon: 'waiting', title: "Finishing Work", stage: '2' },
    { id: 4, icon: 'check', title: "Project Done", stage: '1' },
]


export default ListData