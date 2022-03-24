export type Level = 'random' | 'easy' | 'normal' | 'hard' | 'extreme';
export type Location = 'ha_noi' 
              | 'quang_ninh' 
              | 'bac_ninh' 
              | 'hai_phong' 
              | 'nam_dinh' 
              | 'thai_binh' 
              | 'binh_duong' 
              | 'tra_vinh' 
              | 'vinh_long' 
              | 'ca_mau' 
              | 'dong_thap' 
              | 'bac_lieu' 
              | 'ben_tre' 
              | 'vung_tau' 
              | 'can_tho' 
              | 'dong_nai' 
              | 'soc_trang' 
              | 'an_giang' 
              | 'binh_thuan' 
              | 'tay_ninh' 
              | 'binh_phuoc' 
              | 'hau_giang' 
              | 'long_an' 
              | 'da_lat' 
              | 'kien_giang' 
              | 'tien_giang' 
              | 'tp_ho_chi_minh' 
              | 'gia_lai' 
              | 'ninh_thuan' 
              | 'phu_yen'
              | 'thua_thien_hue' 
              | 'dac_lac' 
              | 'quang_nam' 
              | 'binh_dinh' 
              | 'quang_binh' 
              | 'dac_nong' 
              | 'quang_ngai' 
              | 'kon_tum' 
              | 'da_nang' 
              | 'khanh_hoa' 
              | 'all'
export type StringNumber = string | number;

export interface MeewMeewInterface {
  accountInfo(): Promise<any>;
  covidInfo(): Promise<any>;
  facebookAvatar(id: number | string, path?: string): Promise<any>;
  randomImage(imageType: string, path?: string): Promise<any>;
  tiktokVideoNoWatermark(tiktokUrl: string): Promise<any>;
  linkWord(text: string, lang: string): Promise<any>;
  arrangeWord(level: Level): Promise<any>;
  chatWithSimsimi(text: string): Promise<any>;
  teachSimsimi(ask: StringNumber, answer: StringNumber): Promise<any>;
  lotteryToday(location: Location): Promise<any>;
}