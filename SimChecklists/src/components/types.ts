export type CheckItem = {
    id: string;
    action: string;
    expected: string;
    note?: string;
    section?: string;
    highlight?: boolean;
}

export type Notes = {
    id: string;
    description: string;
    section?: string;
    subsection?: string;
    highlight?: boolean;
}