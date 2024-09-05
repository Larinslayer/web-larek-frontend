export interface IPage {
  counter: number;            // Кол-во элементов
  catalogue: HTMLElement[];   // Каталог элементов
  locked: boolean;
}

export interface IGallery {
  items: IProd[];        // Коллекция предметов 
}

export interface ISuccess {
  total: number;         // Колличество 
}

export interface IProd {
  description?: string;   // Описание
  id: string;             // ID
  image: string;          // Картинка
  title: string;          // Название
  category: string;       // Категория
  price: number | null;   // Цена
}


export interface IContactInfo {
  email: string;  // Почта
  phone: string;  // Телефон
}

export interface IOrder extends IContactInfo {
  total: number;         // Количество 
  items: string[];       // Обьекты
  payment: string;       // Способо оплаты
  address: string;       // Адресс
}

export type OrderFormErrors = {
  address?: string;      // ош адреса 
  payment?: string;      // ош оплаты 
}

export type ContactsFormErrors = {
  email?: string;        // ош мейл
  phone?: string;        // ош телефон
}

export interface IOrderFault extends ContactsFormErrors, OrderFormErrors {}

export interface IOrderResult {
  id: string;            // ID
  total: number;         // Кол-во
}

export interface IBasket {
  items: HTMLElement[];  // Итемы корзины
  total: number;         // Кол-во
  selected: string[];    // Выбранные итемы
}

export interface IAct {
  onClick: (evt: MouseEvent) => void;  // Функция клика
}

export interface IActS {
  onClick: () => void;   // Функция успешного клика
}

export interface IState {
  validation: boolean;   // Валиадция 
  errors: string[];      // Ошибка
}

export interface IOrders extends ContactsFormErrors, OrderFormErrors, IState {
  items: string[];       // Обьекты
  total: number;         // Кол-во
}
