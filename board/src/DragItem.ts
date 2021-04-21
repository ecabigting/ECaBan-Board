export type ColumnDragItem = {
    index: number,
    id: string,
    text: string,
    type : "COLUMN"
}

export const ColumnItemDrag = {
    type : "COLUMN"
}


export type DragItem = ColumnDragItem