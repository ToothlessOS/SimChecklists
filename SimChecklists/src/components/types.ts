export type CheckItem = {
    id: string;
    action: string;
    expected: string;
    note?: string;
    section?: string;
    highlight?: boolean;
}

export type CheckNote = {
    id: string;
    description: string;
    section?: string;
    subsection?: string;
    highlight?: boolean;
}

export type CheckContent = (CheckItem | CheckNote)[];

export type ChecklistData = Record<string, { content: CheckContent; color: string}>;