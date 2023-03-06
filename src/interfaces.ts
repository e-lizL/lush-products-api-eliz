
export interface Ilayout {
  children: React.ReactNode;
}

export interface IProduct {
  node: {
    id: number;
    thumbnail: {
      url: string;
      alt: string;
    },
    media: {
      url: string;
      alt: string;
    },
    name: string,
    category: {
      name: string
    }
    pricing: {
      priceRange: {
        stop: {
          gross: {
            amount: number
          }
        }
      }
    }
    weight: {
      value: number,
      unit: string
    }
    seoDescription: string
  }
}

export interface ISortedData {
  sortedData: IProduct[];
}

