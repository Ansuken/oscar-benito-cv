export interface Job {
    id: number;
    name: string;
    description: string;
    technologies: string[];
    from: string;
    to: string | null;
};