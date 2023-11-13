declare global {}

interface IAPIResponse<DT> {
  message: string;
  data: DT;
  error: null;
  success: boolean;
}

type Transaction =
  | 'housing'
  | 'trasportation'
  | 'education'
  | 'groceries'
  | 'healthcare'
  | 'clothing'
  | 'entertainment'
  | 'fitness and wellness'
  | 'other expense'
  | 'salary'
  | 'freelance'
  | 'gift'
  | 'investments'
  | 'other income';

interface ITransactionCategoryType {
  id?: string;
  label: string;
  description?: string;
}
interface ITransactionCategory {
  id?: string;
  name: string;
  description?: string;
  type_id?: string;
  type? : ITransactionCategoryType
}

interface ITransaction {
  id?: string;
  amount: number;
  description: string;
  category_id?: string;
  category? : ITransactionCategory
}
