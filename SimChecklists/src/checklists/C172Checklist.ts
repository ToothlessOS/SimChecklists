import type { ChecklistData } from "../components/types";

const C172Checklist: ChecklistData = {
    PREFLIGHT: {
        color: "bg-green-500",
        content: [
            {
                id: "0",
                description: "COCKPIT SATEFY CHECK",
                highlight: true,
            },
            {
                id: "1",
                action: "Magnetos",
                expected: "OFF, KEY OUT",
                highlight: true,
            },
            {
                id: "2",
                action: "Mixture",
                expected: "CUTOFF",
                highlight: true,
            },
            {
                id: "3",
                action: "Throttle",
                expected: "CLOSED",
                highlight: true,
            },
            {
                id: "4",
                description: " ", // Spacer
            },
            {
                id: "5",
                action: "Hobbs & Tach",
                expected: "RECORD",
            },
        ],
    },
};

export default C172Checklist;