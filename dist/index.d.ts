export declare type ObjectOf<T> = {
    [key: string]: T;
};
export default function merge(...objs: Array<ObjectOf<any>>): ObjectOf<any>;
