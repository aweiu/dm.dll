declare module 'winax' {
    interface Object {
        new (COM: string): any;
    }
    const Object: Object;
    class Variant {
        constructor(val?: any, type?: string);
        assign(val: any): void;
        cast(type: string): void;
        clear(): void;
    }
}
