//영역별 액션 생성함수들의 반환 타입을 지정
import { ActionType } from 'typesafe-actions';
import { addCount, decCount, plusQuantity, minusQuantity } from './cart';

export type CartActionType = ActionType<typeof addCount> | ActionType<typeof decCount> | ActionType<typeof plusQuantity> | ActionType<typeof minusQuantity>;

// export type CartActionType = {
//     type: string;
//     payload: number;
//   };
