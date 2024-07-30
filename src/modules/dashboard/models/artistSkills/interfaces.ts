

export interface Skill_Model_I <T = string> {
    // _id: string;
    // check?: boolean;
    label: string;
    value: T;
}

export interface Skill_Repertoire_Model_I {
    tone: string;
    title: string;
    role: string;
    composer: string;
}