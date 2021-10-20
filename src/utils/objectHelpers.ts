import { UsersType } from './../types/types';

export const updateObjectInArray = (items: Array<UsersType>, itemId: number, objPropName: string, newObjProps: {followed: boolean}) => {
    return items.map((u: UsersType) => {
        if (u[objPropName as keyof UsersType] === itemId) {
            return { ...u, ...newObjProps }
        }
        return u;
    });
}