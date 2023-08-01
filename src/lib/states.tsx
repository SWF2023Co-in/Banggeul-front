import { atom, RecoilRoot } from "recoil";
/**
 * home이 눌렸는지(false), mypage가 눌렸는지 관리(true)
 * */
export const selectedNavigationBarButtonState = atom<boolean>({
  key: "SelectedNavigationBarState",
  default: false,
});

/**
 * 아파트, 오피스텔, 빌라, 원룸
 */
export const selectedHomeTypeState = atom<string>({
  key: "SelectedHomeTypeState",
  default: "none",
});

/**
 * 최신순, 가격순, 면적순
 */
export const selectedSortByState = atom<string>({
  key: "SelectedSortByState",
  default: "recent",
});

/**
 * 방 개수
 * 나중에 가져와야 함.
 * */
export const homeAmountState = atom<number>({
  key: "HomeAmountState",
  default: 3,
});

export const selectedRentalTypeState = atom<string>({
  key: "SelectedRentalTypeState",
  default: "",
});

export const isOpenWalletPopupState = atom<boolean>({
  key: "IsOpenWalletPopupState",
  default: false,
});

export const isOpenLoginPopupState = atom<boolean>({
  key: "IsOpenLoginPopupState",
  default: false,
});
