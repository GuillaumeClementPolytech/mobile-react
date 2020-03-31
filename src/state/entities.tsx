export interface Post {
    _id: string
    isDiscussion: Boolean
    publicationAuthor: User
    publicationTitle: string
    publicationDescription: string
    publicationDate: Date
    publicationScore: string[]
    isAnonymous: Boolean
    reports: string[]
}

export interface Comment {
    _id: string
    idParent: string
    commentAuthor: string
    commentDescription: string
    commentDate: Date
    commentScore: string[]
    category: string
    isAnonymous: Boolean
    reports: string[]
    respondTo?: number
}

export interface User {
    _id: string
    userName: string
    userFirstName: string
    userPseudo: string
    userMail: string
    userPassword: string
    isAdmin: Boolean
    isPrivate: Boolean
    isBan: Boolean
}

