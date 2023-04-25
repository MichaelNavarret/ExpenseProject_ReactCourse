export interface IExpenseData {
    id: string;
    title: string;
    amount: number;
    date: Date;
  };

export interface IExpenseItemProps {
    title: string;
    amount: number;
    date: Date;
};

export interface IExpenseItemProps {
    id: string;
    title: string;
    amount: number;
    date: Date;
  };

  export interface IExpensesArrayProps {
    items: {
        id: string;
        title: string;
        amount: number;
        date: Date;
    }[];
}
export interface IExpenseFormProps {
    onSaveExpenseData: (enteredExpenseData: IExpenseData) => void;
    onCloseForm: () => void;
};

export interface INewExpenseProps {
    onAddExpense: (expense: IExpenseData) => void;
};

export interface IExpenseFilterProps {
    onChangeFilter: (selectedYear: string) => void;
    selected: string;
}

export default IExpenseData;