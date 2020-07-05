
export interface ProductProps {
  id: number
  name: string
  price: number
  image: string
  gallery?: string[]
}

export interface ProductResumeProps {
  item: ProductProps
}