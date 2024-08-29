

const typeFilter_userSearch = [
    "all",
    "singer",
    "instrumentist",
    "orchestra_director",
    "scene_director",
] as const;
export type userSearch_Type = typeof typeFilter_userSearch[number];

export interface UserSearch_I {
    name: string;
    value: userSearch_Type;
}