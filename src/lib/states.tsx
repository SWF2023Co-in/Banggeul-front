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

export const isOpenLoginPopupState = atom<boolean>({
  key: "IsOpenLoginPopupState",
  default: false,
});

export const isOpenWalletPopupState = atom<boolean>({
  key: "IsOpenWalletPopupState",
  default: false,
});

interface registerHomeWholeInfoStateInterface {
  rentalType: string;
  homeType: string;
  roadNameAddress: string;
  lotNumberAddress: string;
  bcode: string;
  detailedAddress: string;
  deposit: number | null;
  rentalFee: number | null;
  structure: string;
  direction: string;
  maintenanceFee: number | null;
  electricity: string;
  gas: string;
  water: string;
  internet: string;
  area: number | null;
  buildingFloor: number | null;
  roomFloor: number | null;
  airConditioner: string;
  fridge: string;
  laundry: string;
  induction: string;
  gasStove: string;
  microwave: string;
  desk: string;
  bookshelf: string;
  bed: string;
  closet: string;
  sink: string;
  loan: string;
  pet: string;
  parking: string;
  elevator: string;
  movingInDate: string;
  registryYn: string;
  buildingLedgerYn: string;
  message: string | undefined;
  tags: string[];
  images: object[];
}

export const registerHomeWholeInfoInitialState = {
  rentalType: "",
  homeType: "",
  roadNameAddress: "",
  lotNumberAddress: "",
  bcode: "",
  detailedAddress: "",
  deposit: null,
  rentalFee: null,
  structure: "",
  direction: "",
  maintenanceFee: null,
  electricity: "",
  gas: "",
  water: "",
  internet: "",
  area: null,
  buildingFloor: null,
  roomFloor: null,
  airConditioner: "",
  fridge: "",
  laundry: "",
  induction: "",
  gasStove: "",
  microwave: "",
  desk: "",
  bookshelf: "",
  bed: "",
  closet: "",
  sink: "",
  loan: "",
  pet: "",
  parking: "",
  elevator: "",
  movingInDate: "",
  registryYn: "",
  buildingLedgerYn: "",
  images: [],
  // message: "",
  // tags: [],
  message: "여기도 고쳐야 합니다.",
  tags: ["여기는", "고쳐야", "합니다"],
};

export const registerHomeWholeInfoState =
  atom<registerHomeWholeInfoStateInterface>({
    key: "RegisterHomeWholeInfoState",
    default: registerHomeWholeInfoInitialState,
  });

export const registerHomeUpLoadFileState = atom<object | null>({
  key: "RegisterHomeUpLoadFileState",
  default: null,
});
