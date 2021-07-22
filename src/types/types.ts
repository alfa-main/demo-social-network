export type PostType = {
    id: number,
    title: string,
    message: string,
    image: string,
    likesCount: number,
    liked: boolean
}

export type ContactsType = {
    github: string,
    vk: string,
    facebook: string,
    instagram: string,
    twitter: string,
    website: string,
    youtube: string,
    mainLink: string,
}

export type PhotosType = {
    small: string | null,
    large: string | null
}

export type ProfileType = {
    aboutMe: string,
    userId: number,
    lookingForAJob: boolean,
    lookingForAJobDescription: string,
    fullName: string,
    contacts: ContactsType,
    photos: PhotosType
}

export type UsersType = {
    id: number,
    name: string,
    status: string,
    photos: PhotosType,
    followed: boolean,
    uniqueUrlName: string | null;
}
