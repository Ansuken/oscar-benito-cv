export interface Project {
    id?: string;
    name: string;
    description: string;
    technologies: string[];
    img?: string;
    images?: string[];
    gitUrl?: string;
    liveUrl?: string;
    order: number;
}