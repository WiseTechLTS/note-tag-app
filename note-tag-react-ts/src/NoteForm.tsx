

type NoteFormProps = {
    onSubmit: (data: NoteData) => void
    onAddTag: (tag: string) => void
    availableTags: Tag[]
} & Partial<NoteData>

