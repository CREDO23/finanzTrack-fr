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
