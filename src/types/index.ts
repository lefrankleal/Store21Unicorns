export interface User {
  id: number
  name: string
  lastName?: string
}

export interface ProductProps {
  id: number
  name: string
  price: number
  image: string
  gallery?: string[]
  user: User
}

export interface ProductResumeProps {
  item: ProductProps
}