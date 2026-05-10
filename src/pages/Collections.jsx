import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import FadeIn from '../components/FadeIn'
import MarqueeStrip from '../components/MarqueeStrip'
import { HiX, HiSearch } from 'react-icons/hi'
import { Link } from 'react-router-dom'

const BASE = 'https://www.shinhanwall.co.kr/upload/product/'

const allProducts = [
  // ── BEYOND Catalogue (43 products) ──
  { id: 1,  title: 'Caldric',   category: 'Beyond', image: BASE + '3717407184_WTzgFdfB_20251218040525.jpg', code: '88675-3' },
  { id: 2,  title: 'Dran',      category: 'Beyond', image: BASE + '3717407184_TgxoX6rs_20251218041054.jpg', code: '88676-2' },
  { id: 3,  title: 'Dran',      category: 'Beyond', image: BASE + '3717407184_VvdAcQFH_20251218041127.jpg', code: '88676-1' },
  { id: 4,  title: 'Harper',    category: 'Beyond', image: BASE + '3717407184_SIjlxbN9_20251218041206.jpg', code: '88677-4' },
  { id: 5,  title: 'Harper',    category: 'Beyond', image: BASE + '3717407184_najU1MqW_20251218041310.jpg', code: '88677-2' },
  { id: 6,  title: 'Fiber',     category: 'Beyond', image: BASE + '3717407184_1EcZ2mJC_20251218041413.jpg', code: '88678-5' },
  { id: 7,  title: 'Fiber',     category: 'Beyond', image: BASE + '3717407184_qZvtDk34_20251218041506.jpg', code: '88678-3' },
  { id: 8,  title: 'Arix',      category: 'Beyond', image: BASE + '3717407184_T9Y8rXEF_20251218041634.jpg', code: '88679-4' },
  { id: 9,  title: 'Arix',      category: 'Beyond', image: BASE + '3717407184_5yXt0MWu_20251218041704.jpg', code: '88679-3' },
  { id: 10, title: 'Celora',    category: 'Beyond', image: BASE + '3717407184_vMHnrLuk_20251218042002.jpg', code: '88680-2' },
  { id: 11, title: 'Celora',    category: 'Beyond', image: BASE + '3717407184_oCZFUL5p_20251218042035.jpg', code: '88680-1' },
  { id: 12, title: 'Auvion',    category: 'Beyond', image: BASE + '3717407184_lqSLF4m3_20251218042207.jpg', code: '88681-4' },
  { id: 13, title: 'Auvion',    category: 'Beyond', image: BASE + '3717407184_7AUo4r6F_20251218042243.jpg', code: '88681-3' },
  { id: 14, title: 'Beamy',     category: 'Beyond', image: BASE + '3717407184_s2KUiDVr_20251218042459.jpg', code: '88682-3' },
  { id: 15, title: 'Beamy',     category: 'Beyond', image: BASE + '3717407184_62FwBUk9_20251218042532.jpg', code: '88682-2' },
  { id: 16, title: 'Linea',     category: 'Beyond', image: BASE + '3717407184_C4ur03bt_20251218042705.jpg', code: '88683-3' },
  { id: 17, title: 'Linea',     category: 'Beyond', image: BASE + '3717407184_HyFqS9r6_20251218042737.jpg', code: '88683-2' },
  { id: 18, title: 'Orlencia',  category: 'Beyond', image: BASE + '3717407184_SKbnD2v3_20251218042843.jpg', code: '88684-2' },
  { id: 19, title: 'Orlencia',  category: 'Beyond', image: BASE + '3717407184_hBEvzHUa_20251218042918.jpg', code: '88684-1' },
  { id: 20, title: 'Torian',    category: 'Beyond', image: BASE + '3717407184_LXSmnO3i_20251218043001.jpg', code: '88685-3' },
  { id: 21, title: 'Torian',    category: 'Beyond', image: BASE + '3717407184_pCcxDj0M_20251218043037.jpg', code: '88685-2' },
  { id: 22, title: 'Torian',    category: 'Beyond', image: BASE + '3717407184_mFgElU1t_20251218043122.jpg', code: '88685-1' },
  { id: 23, title: 'Evia',      category: 'Beyond', image: BASE + '3717407184_XACL7wub_20251218043201.jpg', code: '88686-3' },
  { id: 24, title: 'Evia',      category: 'Beyond', image: BASE + '3717407184_9pyK7egS_20251218043232.jpg', code: '88686-2' },
  { id: 25, title: 'Amoroso',   category: 'Beyond', image: BASE + '3717407184_2sQk10Kb_20251218043333.jpg', code: '88687-2' },
  { id: 26, title: 'Amoroso',   category: 'Beyond', image: BASE + '3717407184_vaS9wLQY_20251218043403.jpg', code: '88687-1' },
  { id: 27, title: 'Ezra',      category: 'Beyond', image: BASE + '3717407184_F6OzD1HG_20251218043447.jpg', code: '88688-3' },
  { id: 28, title: 'Ezra',      category: 'Beyond', image: BASE + '3717407184_8Ja1sKOG_20251218043558.jpg', code: '88688-1' },
  { id: 29, title: 'Kuroha',    category: 'Beyond', image: BASE + '3717407184_AW5Ngdum_20251218043636.jpg', code: '88689-2' },
  { id: 30, title: 'Kuroha',    category: 'Beyond', image: BASE + '3717407184_KGmBvfo5_20251218043709.jpg', code: '88689-1' },
  { id: 31, title: 'Tenuto',    category: 'Beyond', image: BASE + '3717407184_KWpOUTgH_20251218043754.jpg', code: '88690-3' },
  { id: 32, title: 'Tenuto',    category: 'Beyond', image: BASE + '3717407184_WiNpUEBR_20251218043824.jpg', code: '88690-2' },
  { id: 33, title: 'Marvik',    category: 'Beyond', image: BASE + '3717407184_6lUOVqGa_20251218043938.jpg', code: '88691-3' },
  { id: 34, title: 'Marvik',    category: 'Beyond', image: BASE + '3717407184_S1ehV3LZ_20251218044014.jpg', code: '88691-2' },
  { id: 35, title: 'Lucorin',   category: 'Beyond', image: BASE + '3717407184_9limZuMc_20251218044240.jpg', code: '88692-1' },
  { id: 36, title: 'Lucorin',   category: 'Beyond', image: BASE + '3717407184_svhTkR41_20251218044124.jpg', code: '88692-3' },
  { id: 37, title: 'Arden',     category: 'Beyond', image: BASE + '3717407184_FWb9ZUeY_20251218044501.jpg', code: '88693-1' },
  { id: 38, title: 'Arden',     category: 'Beyond', image: BASE + '3717407184_BGU2t8rj_20251218044427.jpg', code: '88693-2' },
  { id: 39, title: 'Arden',     category: 'Beyond', image: BASE + '3717407184_UazSTqkB_20251218044319.jpg', code: '88693-4' },
  { id: 40, title: 'Sofpalm',   category: 'Beyond', image: BASE + '3717407184_Kp2PCs3O_20251218044646.jpg', code: '88694-1' },
  { id: 41, title: 'Sofpalm',   category: 'Beyond', image: BASE + '3717407184_LYDAvK23_20251218044615.jpg', code: '88694-2' },
  { id: 42, title: 'Fountain',  category: 'Beyond', image: BASE + '3717407184_L0Tvxr3M_20251218044855.jpg', code: '88695-1' },
  { id: 43, title: 'Fountain',  category: 'Beyond', image: BASE + '3717407184_Q3knoCzF_20251218044751.jpg', code: '88695-3' },

  // ── DECENT Catalogue ──
  { id: 13, title: 'Cora',      category: 'Decent', image: BASE + '3717407184_07fzKjHc_20250722103751.jpg', code: '88653-1' },
  { id: 14, title: 'Cora',      category: 'Decent', image: BASE + '3717407184_RjHwJ5qC_20250722103704.jpg', code: '88653-2' },
  { id: 15, title: 'Etto',      category: 'Decent', image: BASE + '3717407184_kb7BWmwI_20250722014851.jpg', code: '88654-1' },
  { id: 16, title: 'Amelia',    category: 'Decent', image: BASE + '3717407184_Y8I5VPt0_20250722015051.jpg', code: '88655-1' },
  { id: 17, title: 'Amelia',    category: 'Decent', image: BASE + '3717407184_Tkjvp4ZF_20250722015014.jpg', code: '88655-2' },
  { id: 18, title: 'Amelia',    category: 'Decent', image: BASE + '3717407184_mMsSp85y_20250722014936.jpg', code: '88655-3' },
  { id: 19, title: 'Amazon',    category: 'Decent', image: BASE + '3717407184_Yn1UBIMz_20250722015210.jpg', code: '88656-1' },
  { id: 20, title: 'Amazon',    category: 'Decent', image: BASE + '3717407184_GpT8LefP_20250722015132.jpg', code: '88656-2' },
  { id: 21, title: 'Plante',    category: 'Decent', image: BASE + '3717407184_Gr7pQLfP_20250722015256.jpg', code: '88657-3' },
  { id: 22, title: 'Collette',  category: 'Decent', image: BASE + '3717407184_tsJA9647_20250722032908.jpg', code: '88658-1' },
  { id: 23, title: 'Collette',  category: 'Decent', image: BASE + '3717407184_ouPIsSz3_20250722032724.jpg', code: '88658-3' },
  { id: 24, title: 'Rubato',    category: 'Decent', image: BASE + '3717407184_KVFPUMBk_20250722033044.jpg', code: '88659-2' },
  { id: 25, title: 'Rubato',    category: 'Decent', image: BASE + '3717407184_jVLwzN12_20250722033003.jpg', code: '88659-3' },
  { id: 26, title: 'Piu',       category: 'Decent', image: BASE + '3717407184_wCuD0P6d_20250722033339.jpg', code: '88660-1' },
  { id: 27, title: 'Piu',       category: 'Decent', image: BASE + '3717407184_GO7hz8Yg_20250722033156.jpg', code: '88660-4' },
  { id: 28, title: 'Piace',     category: 'Decent', image: BASE + '3717407184_n3albAB9_20250722033550.jpg', code: '88661-1' },
  { id: 29, title: 'Piace',     category: 'Decent', image: BASE + '3717407184_iPvkzYgy_20250722033444.jpg', code: '88661-3' },
  { id: 30, title: 'Blanche',   category: 'Decent', image: BASE + '3717407184_GvDhBzZd_20250722034056.jpg', code: '88662-2' },
  { id: 31, title: 'Blanche',   category: 'Decent', image: BASE + '3717407184_bEMqcoP5_20250722033633.jpg', code: '88662-4' },
  { id: 32, title: 'Nobile',    category: 'Decent', image: BASE + '3717407184_v5GgQ4sN_20250722035744.jpg', code: '88663-1' },
  { id: 33, title: 'Nobile',    category: 'Decent', image: BASE + '3717407184_HzphAeEN_20250722035704.jpg', code: '88663-2' },
  { id: 34, title: 'Ribera',    category: 'Decent', image: BASE + '3717407184_tLnKjh4f_20250722040739.jpg', code: '88664-1' },
  { id: 35, title: 'Ribera',    category: 'Decent', image: BASE + '3717407184_vlJfG4Hr_20250722040603.jpg', code: '88664-3' },
  { id: 36, title: 'Morin',     category: 'Decent', image: BASE + '3717407184_LIRZy72b_20250722040913.jpg', code: '88665-2' },
  { id: 37, title: 'Morin',     category: 'Decent', image: BASE + '3717407184_cNXoKka7_20250722040832.jpg', code: '88665-3' },
  { id: 38, title: 'Fog',       category: 'Decent', image: BASE + '3717407184_OTjbDz9d_20250722041218.jpg', code: '88666-1' },
  { id: 39, title: 'Fog',       category: 'Decent', image: BASE + '3717407184_6ijPaDX4_20250722041145.jpg', code: '88666-2' },
  { id: 40, title: 'Ceramica',  category: 'Decent', image: BASE + '3717407184_qUNhzlFj_20250722041423.jpg', code: '88667-1' },
  { id: 41, title: 'Ceramica',  category: 'Decent', image: BASE + '3717407184_DjQcIVzh_20250722041256.jpg', code: '88667-3' },
  { id: 42, title: 'Fossil',    category: 'Decent', image: BASE + '3717407184_8em9AIbv_20250722041524.jpg', code: '88668-3' },
  { id: 43, title: 'Grotto',    category: 'Decent', image: BASE + '3717407184_4DUNWAOY_20250722041827.jpg', code: '88669-1' },
  { id: 44, title: 'Grotto',    category: 'Decent', image: BASE + '3717407184_KZ0QOXWx_20250722041750.jpg', code: '88669-2' },
  { id: 45, title: 'Grotto',    category: 'Decent', image: BASE + '3717407184_WFUT8fN7_20250722041703.jpg', code: '88669-3' },
  { id: 46, title: 'Evelyn',    category: 'Decent', image: BASE + '3717407184_3hIeMSr6_20250722041942.jpg', code: '88670-2' },
  { id: 47, title: 'Evelyn',    category: 'Decent', image: BASE + '3717407184_CtU4BbTs_20250722041905.jpg', code: '88670-3' },
  { id: 48, title: 'Roman',     category: 'Decent', image: BASE + '3717407184_1eZEcGxl_20250722042212.jpg', code: '88671-2' },
  { id: 49, title: 'Roman',     category: 'Decent', image: BASE + '3717407184_UlZLjfCw_20250722042136.jpg', code: '88671-3' },
  { id: 50, title: 'Willow',    category: 'Decent', image: BASE + '3717407184_BUZhmwx5_20250722042519.jpg', code: '88672-1' },
  { id: 51, title: 'Willow',    category: 'Decent', image: BASE + '3717407184_lmY9e7GM_20250722042409.jpg', code: '88672-3' },
  { id: 52, title: 'Jute',      category: 'Decent', image: BASE + '3717407184_9z2x8fS3_20250722042921.jpg', code: '88673-2' },
  { id: 53, title: 'Jute',      category: 'Decent', image: BASE + '3717407184_i5nWrkhS_20250722042846.jpg', code: '88673-3' },
  { id: 54, title: 'Jute',      category: 'Decent', image: BASE + '3717407184_9ykP3QzC_20250722042729.jpg', code: '88673-5' },
  { id: 55, title: 'Genero',    category: 'Decent', image: BASE + '3717407184_Nzty6cQA_20250722043107.jpg', code: '88674-2' },
  { id: 56, title: 'Genero',    category: 'Decent', image: BASE + '3717407184_HwMRA6bg_20250722043033.jpg', code: '88674-3' },

  // ── DREAM WORLD Catalogue (47 products) ──
  { id: 57,  title: 'Football Club',  category: 'Dream World', image: BASE + '3717407184_5CnDclAZ_20241217021603.jpg', code: '5158-1' },
  { id: 58,  title: 'Football Club',  category: 'Dream World', image: BASE + '3717407184_exL25EMd_20241217111920.jpg', code: '5158-2' },
  { id: 59,  title: 'Spirit',         category: 'Dream World', image: BASE + '3717407184_qJNn2kgG_20241217021550.jpg', code: '5159-2' },
  { id: 60,  title: 'Game Power',     category: 'Dream World', image: BASE + '3717407184_oR8IiJF4_20241217021733.jpg', code: '5160-1' },
  { id: 61,  title: 'Nino',           category: 'Dream World', image: BASE + '3717407184_umgErZW5_20241217021814.jpg', code: '5161-5' },
  { id: 62,  title: 'Car Racing',     category: 'Dream World', image: BASE + '3717407184_bQMLRlzf_20241217022130.jpg', code: '5162-1' },
  { id: 63,  title: 'Car Racing',     category: 'Dream World', image: BASE + '3717407184_h8tdObHK_20241217022058.jpg', code: '5162-2' },
  { id: 64,  title: 'Load Venture',   category: 'Dream World', image: BASE + '3717407184_R5Lmafgi_20241217022220.jpg', code: '5163-3' },
  { id: 65,  title: 'Cosmic',         category: 'Dream World', image: BASE + '3717407184_f5JWY2zR_20241217022358.jpg', code: '5164-1' },
  { id: 66,  title: 'Shine Window',   category: 'Dream World', image: BASE + '3717407184_AlcokBv3_20241217022441.jpg', code: '5165-1' },
  { id: 67,  title: 'Letter Beam',    category: 'Dream World', image: BASE + '3717407184_uQpFVWEf_20241217022601.jpg', code: '5166-1' },
  { id: 68,  title: 'Letter Beam',    category: 'Dream World', image: BASE + '3717407184_4eiKbNYM_20241217022523.jpg', code: '5166-2' },
  { id: 69,  title: 'Beauty Girls',   category: 'Dream World', image: BASE + '3717407184_fiSGCJPr_20241217023753.jpg', code: '5167-1' },
  { id: 70,  title: 'Beauty Girls',   category: 'Dream World', image: BASE + '3717407184_VK6h5GJq_20241217022656.jpg', code: '5167-2' },
  { id: 71,  title: 'Mermaid',        category: 'Dream World', image: BASE + '3717407184_1iALWkod_20241217032621.jpg', code: '5168-1' },
  { id: 72,  title: 'Country Road',   category: 'Dream World', image: BASE + '3717407184_lx1Tg6ze_20241217032736.jpg', code: '5169-1' },
  { id: 73,  title: 'Country Road',   category: 'Dream World', image: BASE + '3717407184_UKr4L9wN_20241217032701.jpg', code: '5169-2' },
  { id: 74,  title: 'Animal Fore',    category: 'Dream World', image: BASE + '3717407184_ERKhuN4r_20241217032817.jpg', code: '5170-1' },
  { id: 75,  title: 'Kinder Land',    category: 'Dream World', image: BASE + '3717407184_ZKgqWHBN_20241217033016.jpg', code: '5171-1' },
  { id: 76,  title: 'Block Land',     category: 'Dream World', image: BASE + '3717407184_g823VpxX_20241217033059.jpg', code: '5172-1' },
  { id: 77,  title: 'Dino Park',      category: 'Dream World', image: BASE + '3717407184_1nG2QPbJ_20241217033139.jpg', code: '5173-1' },
  { id: 78,  title: 'Jumping Bunny',  category: 'Dream World', image: BASE + '3717407184_CnkPoWiM_20241217033219.jpg', code: '5174-1' },
  { id: 79,  title: 'Dream Balloon',  category: 'Dream World', image: BASE + '3717407184_DopVkFTY_20241217033329.jpg', code: '5175-1' },
  { id: 80,  title: 'Dream Balloon',  category: 'Dream World', image: BASE + '3717407184_NbSOC7re_20241217033253.jpg', code: '5175-2' },
  { id: 81,  title: 'Bling Wing',     category: 'Dream World', image: BASE + '3717407184_JsQtxEMu_20241217033702.jpg', code: '5177-2' },
  { id: 82,  title: 'Love Holic',     category: 'Dream World', image: BASE + '3717407184_TRxmuDQs_20241217033823.jpg', code: '5178-1' },
  { id: 83,  title: 'Pretty Girl',    category: 'Dream World', image: BASE + '3717407184_UfJ1Folu_20241217033933.jpg', code: '5179-1' },
  { id: 84,  title: 'Pretty Girl',    category: 'Dream World', image: BASE + '3717407184_ZMUFY2nm_20241217033900.jpg', code: '5179-2' },
  { id: 85,  title: 'Circus',         category: 'Dream World', image: BASE + '3717407184_7EfrjUdO_20241217034022.jpg', code: '5180-1' },
  { id: 86,  title: 'Star Holic',     category: 'Dream World', image: BASE + '3717407184_6C3cIwJY_20241217034104.jpg', code: '5181-2' },
  { id: 87,  title: 'Car World',      category: 'Dream World', image: BASE + '3717407184_fpsAcEl3_20241217034218.jpg', code: '5182-1' },
  { id: 88,  title: 'Bebe',           category: 'Dream World', image: BASE + '3717407184_OuwEWId2_20241217034328.jpg', code: '5183-1' },
  { id: 89,  title: 'Bebe',           category: 'Dream World', image: BASE + '3717407184_vnlyVstO_20241217034257.jpg', code: '5183-2' },
  { id: 90,  title: 'Enfant',         category: 'Dream World', image: BASE + '3717407184_xYVQJc31_20241217034408.jpg', code: '5184-1' },
  { id: 91,  title: 'Sweet Dream',    category: 'Dream World', image: BASE + '3717407184_5j6RrHYF_20241217034630.jpg', code: '5186-1' },
  { id: 92,  title: 'Sweet Dream',    category: 'Dream World', image: BASE + '3717407184_LxEvpoy0_20241217034559.jpg', code: '5186-2' },
  { id: 93,  title: 'Zoo Zoo Land',   category: 'Dream World', image: BASE + '3717407184_9YJb4typ_20241217034743.jpg', code: '5187-1' },
  { id: 94,  title: 'Zoo Zoo Land',   category: 'Dream World', image: BASE + '3717407184_vEp70fPm_20241217034708.jpg', code: '5187-2' },
  { id: 95,  title: 'Witty',          category: 'Dream World', image: BASE + '3717407184_E4Uf1znk_20241217034850.jpg', code: '5188-1' },
  { id: 96,  title: 'Witty',          category: 'Dream World', image: BASE + '3717407184_ao51b8Aw_20241217034818.jpg', code: '5188-2' },
  { id: 97,  title: 'Stitch Doll',    category: 'Dream World', image: BASE + '3717407184_4EMyuZ59_20241217034929.jpg', code: '5189-2' },
  { id: 98,  title: 'Popping',        category: 'Dream World', image: BASE + '3717407184_rUSWf9wp_20241217035031.jpg', code: '5190-1' },
  { id: 99,  title: 'Toto',           category: 'Dream World', image: BASE + '3717407184_w1SGsr4H_20241217035102.jpg', code: '5191-1' },
  { id: 100, title: 'Candy Pop',      category: 'Dream World', image: BASE + '3717407184_TOVwd19A_20241217035147.jpg', code: '5192-2' },
  { id: 101, title: 'Angel Corn',     category: 'Dream World', image: BASE + '3717407184_yTG1ZEVl_20241217035329.jpg', code: '5193-1' },
  { id: 102, title: 'Crayon',         category: 'Dream World', image: BASE + '3717407184_QNLtrFRh_20241217035407.jpg', code: '5194-1' },
  { id: 103, title: 'Sunny Home',     category: 'Dream World', image: BASE + '3717407184_mDNkW5HL_20241217035447.jpg', code: '5195-2' },
  { id: 104, title: 'Rain tree', category: 'Natural', image: BASE + '3717407184_AbcpdQsV_20240731041117.jpg', code: '88652-1' },
  { id: 105, title: 'Rain tree', category: 'Natural', image: BASE + '3717407184_wg8mGxhQ_20240731041103.jpg', code: '88652-2' },
  { id: 106, title: 'Ash wood', category: 'Natural', image: BASE + '3717407184_NdDZGCfb_20240731041056.jpg', code: '88651-1' },
  { id: 107, title: 'Trembesi', category: 'Natural', image: BASE + '3717407184_vqOU9D4l_20240731041040.jpg', code: '88650-1' },
  { id: 108, title: 'Trembesi', category: 'Natural', image: BASE + '3717407184_H3m5e7kf_20240731041031.jpg', code: '88650-2' },
  { id: 109, title: 'Louver', category: 'Natural', image: BASE + '3717407184_WXHyLtr3_20240731041016.jpg', code: '88649-3' },
  { id: 110, title: 'Louver', category: 'Natural', image: BASE + '3717407184_m6q9d8iB_20240731041000.jpg', code: '88649-4' },
  { id: 111, title: 'Pine wood', category: 'Natural', image: BASE + '3717407184_bgvRnJYm_20240731040943.jpg', code: '88648-2' },
  { id: 112, title: 'Ceramic', category: 'Natural', image: BASE + '3717407184_CdnkNLxT_20240731040928.jpg', code: '88647-1' },
  { id: 113, title: 'Ceramic', category: 'Natural', image: BASE + '3717407184_CdnkNLxT_20240731040920.jpg', code: '88647-3' },
  { id: 114, title: 'Terraco', category: 'Natural', image: BASE + '3717407184_PsZGwdBx_20240731040848.jpg', code: '88646-5' },
  { id: 115, title: 'Calacatta', category: 'Natural', image: BASE + '3717407184_tKYPXVBh_20240731040607.jpg', code: '88645-3' },
  { id: 116, title: 'Classico', category: 'Natural', image: BASE + '3717407184_uXd89LzY_20240731040554.jpg', code: '88644-1' },
  { id: 117, title: 'Classico', category: 'Natural', image: BASE + '3717407184_ue58r4Nf_20240731040542.jpg', code: '88644-2' },
  { id: 118, title: 'Classico', category: 'Natural', image: BASE + '3717407184_Vkg4w6lQ_20240731040532.jpg', code: '88644-3' },
  { id: 119, title: 'Modern brick', category: 'Natural', image: BASE + '3717407184_hJepylFE_20240731040524.jpg', code: '88643-1' },
  { id: 120, title: 'Modern brick', category: 'Natural', image: BASE + '3717407184_2JpjDKSE_20240731040509.jpg', code: '88643-3' },
  { id: 121, title: 'Concrete panel', category: 'Natural', image: BASE + '3717407184_x3kCEIth_20240731040447.jpg', code: '88642-2' },
  { id: 122, title: 'Concrete panel', category: 'Natural', image: BASE + '3717407184_AVLo53IP_20240731040439.jpg', code: '88642-3' },
  { id: 123, title: 'Sand brick', category: 'Natural', image: BASE + '3717407184_DFCvfra0_20240731040403.jpg', code: '88641-2' },
  { id: 124, title: 'Field stone', category: 'Natural', image: BASE + '3717407184_7gGvXq8p_20240731040332.jpg', code: '88640-1' },
  { id: 125, title: 'Jungle book', category: 'Natural', image: BASE + '3717407184_Mc9t3Wje_20240731040326.jpg', code: '88639-1' },
  { id: 126, title: 'Jasmine garden', category: 'Natural', image: BASE + '3717407184_xrSVyhoj_20240731040318.jpg', code: '88638-1' },
  { id: 127, title: 'Botanical', category: 'Natural', image: BASE + '3717407184_497x3qhe_20240731040233.jpg', code: '88637-1' },
  { id: 128, title: 'Stone garden', category: 'Natural', image: BASE + '3717407184_KbwuLGsq_20240731040225.jpg', code: '88636-1' },
  { id: 129, title: 'Gold fish', category: 'Natural', image: BASE + '3717407184_NI0cz9Xu_20240731040212.jpg', code: '88635-1' },
  { id: 130, title: 'Lake view', category: 'Natural', image: BASE + '3717407184_irnYM7xw_20240731040205.jpg', code: '88634-1' },
  { id: 131, title: 'Canyon', category: 'Natural', image: BASE + '3717407184_jJAXcp8U_20240731040158.jpg', code: '88633-1' },
  { id: 132, title: 'Coffee bean', category: 'Natural', image: BASE + '3717407184_5JcumZAR_20240731040151.jpg', code: '88632-1' },
  { id: 133, title: 'Sky blue', category: 'Natural', image: BASE + '3717407184_brsSo7CT_20240731040140.jpg', code: '88421-2' },
  { id: 134, title: 'Sunshine bamboo', category: 'Natural', image: BASE + '3717407184_AuGnEy8t_20240731040126.jpg', code: '88423-1' },
  { id: 135, title: 'Wood stripe', category: 'Natural', image: BASE + '3717407184_rc4x5qOA_20240731040111.jpg', code: '88427-3' },
  { id: 136, title: 'Deoksugung', category: 'Natural', image: BASE + '3717407184_1W9ugm2j_20240731035953.jpg', code: '88428-1' },
  { id: 137, title: 'Natural paint', category: 'Natural', image: BASE + '3717407184_RUAPvsxS_20240731040018.jpg', code: '88429-2' },
  { id: 138, title: 'Natural paint', category: 'Natural', image: BASE + '3717407184_HjwSIQlr_20240731040006.jpg', code: '88429-1' },
  { id: 139, title: 'Vintage Wood', category: 'Natural', image: BASE + '3717407184_lvYUc5en_20240731031610.jpg', code: '87007-1' },
  { id: 140, title: 'Lausanne', category: 'Natural', image: BASE + '1028194656_HRw6Lfce_20201226110222.jpg', code: '87020-2' },
  { id: 141, title: 'Brick', category: 'Natural', image: BASE + '3717407184_KZPYahCy_20240731035932.jpg', code: '87033-5' },
  { id: 142, title: 'Real plaster', category: 'Essence', image: BASE + '3717407184_ISs1zg3W_20230210030209.jpg', code: 'K0029-1' },
  { id: 143, title: 'Real plaster', category: 'Essence', image: BASE + '3717407184_FLsNGpui_20230210030141.jpg', code: 'K0029-2' },
  { id: 144, title: 'Real plaster', category: 'Essence', image: BASE + '3717407184_f9jOBaV5_20230210030103.jpg', code: 'K0029-3' },
  { id: 145, title: 'Foret', category: 'Essence', image: BASE + '3717407184_YNfHyCiu_20230210030025.jpg', code: 'K0028-1' },
  { id: 146, title: 'Foret', category: 'Essence', image: BASE + '3717407184_d1OSXCxD_20230210025955.jpg', code: 'K0028-2' },
  { id: 147, title: 'Damier', category: 'Essence', image: BASE + '3717407184_OQo0UxBX_20230210025905.jpg', code: 'K0027-2' },
  { id: 148, title: 'Damier', category: 'Essence', image: BASE + '3717407184_0NlCVho4_20230210025835.jpg', code: 'K0027-3' },
  { id: 149, title: 'Nymphe', category: 'Essence', image: BASE + '3717407184_R9lVdPYA_20230210025612.jpg', code: 'K0026-3' },
  { id: 150, title: 'Nymphe', category: 'Essence', image: BASE + '3717407184_vFZHiST6_20230210025544.jpg', code: 'K0026-4' },
  { id: 151, title: 'Nymphe', category: 'Essence', image: BASE + '3717407184_o2ITnrdM_20230210025510.jpg', code: 'K0026-5' },
  { id: 152, title: 'Timothee', category: 'Essence', image: BASE + '3717407184_cnCQ5aXY_20230210025431.jpg', code: 'K0025-1' },
  { id: 153, title: 'Timothee', category: 'Essence', image: BASE + '3717407184_iZRLoUeK_20230210025402.jpg', code: 'K0025-2' },
  { id: 154, title: 'Timothee', category: 'Essence', image: BASE + '3717407184_FqVlgObt_20230210025327.jpg', code: 'K0025-4' },
  { id: 155, title: 'Jadore', category: 'Essence', image: BASE + '3717407184_sM4RhYOS_20230210025058.jpg', code: 'K0024-1' },
  { id: 156, title: 'Jadore', category: 'Essence', image: BASE + '3717407184_pyHhFE5S_20230210025028.jpg', code: 'K0024-2' },
  { id: 157, title: 'Reve', category: 'Essence', image: BASE + '3717407184_ECxNbXUc_20230210024838.jpg', code: 'K0023-4' },
  { id: 158, title: 'Reve', category: 'Essence', image: BASE + '3717407184_3QLsyoBk_20230210024809.jpg', code: 'K0023-5' },
  { id: 159, title: 'Corde', category: 'Essence', image: BASE + '3717407184_7EB8iX6p_20230210024740.jpg', code: 'K0022-1' },
  { id: 160, title: 'Corde', category: 'Essence', image: BASE + '3717407184_X8UpkfD6_20230210024703.jpg', code: 'K0022-2' },
  { id: 161, title: 'Rachet', category: 'Essence', image: BASE + '3717407184_CkZpVuhi_20230210024406.jpg', code: 'K0021-2' },
  { id: 162, title: 'Rachet', category: 'Essence', image: BASE + '3717407184_49MjOhZH_20230210023255.jpg', code: 'K0021-3' },
  { id: 163, title: 'Rachet', category: 'Essence', image: BASE + '3717407184_oKDg9sQN_20230210023124.jpg', code: 'K0021-4' },
  { id: 164, title: 'Elroy', category: 'Essence', image: BASE + '3717407184_FKeykvpd_20230210023016.jpg', code: 'K0020-2' },
  { id: 165, title: 'Elory', category: 'Essence', image: BASE + '3717407184_iJArFwV9_20230210022942.jpg', code: 'K0020-3' },
  { id: 166, title: 'Wild touch', category: 'Essence', image: BASE + '3717407184_2hM5ASPk_20230210022902.jpg', code: 'K0019-1' },
  { id: 167, title: 'Wild touch', category: 'Essence', image: BASE + '3717407184_0pWDfIyz_20230210022831.jpg', code: 'K0019-2' },
  { id: 168, title: 'Wild touch', category: 'Essence', image: BASE + '3717407184_ukj8p1Gq_20230210022758.jpg', code: 'K0019-3' },
  { id: 169, title: 'Stone base', category: 'Essence', image: BASE + '3717407184_9eUa3SKO_20230210022724.jpg', code: 'K0018-1' },
  { id: 170, title: 'Stone base', category: 'Essence', image: BASE + '3717407184_xMutFz6Z_20230210022610.jpg', code: 'K0018-3' },
  { id: 171, title: 'Art base', category: 'Essence', image: BASE + '3717407184_Kjftkyhd_20230210022405.jpg', code: 'K0017-3' },
  { id: 172, title: 'Art base', category: 'Essence', image: BASE + '3717407184_CGDWHU4A_20230210022334.jpg', code: 'K0017-4' },
  { id: 173, title: 'Art base', category: 'Essence', image: BASE + '3717407184_8dRmuexl_20230210022302.jpg', code: 'K0017-5' },
  { id: 174, title: 'Montagne', category: 'Essence', image: BASE + '3717407184_FVIXGDdU_20230210022156.jpg', code: 'K0016-1' },
  { id: 175, title: 'Montagne', category: 'Essence', image: BASE + '3717407184_OS4b8EDv_20230210022014.jpg', code: 'K0016-4' },
  { id: 176, title: 'Real touch', category: 'Essence', image: BASE + '3717407184_KbmliIkR_20230210021857.jpg', code: 'K0014-2' },
  { id: 177, title: 'Real touch', category: 'Essence', image: BASE + '3717407184_z8M0wXY2_20230210021757.jpg', code: 'K0014-4' },
  { id: 178, title: 'Rond', category: 'Essence', image: BASE + '3717407184_nH1RUFiN_20230210021645.jpg', code: 'K0013-2' },
  { id: 179, title: 'Rond', category: 'Essence', image: BASE + '3717407184_fvnSTB5z_20230210021527.jpg', code: 'K0013-4' },
  { id: 180, title: 'Rond', category: 'Essence', image: BASE + '3717407184_z3JyD6c0_20230210021420.jpg', code: 'K0013-5' },
  { id: 181, title: 'Laboum', category: 'Essence', image: BASE + '3717407184_lkAP1xF6_20230210021245.jpg', code: 'K0012-1' },
  { id: 182, title: 'Laboum', category: 'Essence', image: BASE + '3717407184_53M8mwDv_20230210021131.jpg', code: 'K0012-4' },
  { id: 183, title: 'Laboum', category: 'Essence', image: BASE + '3717407184_87c9nwxO_20230210021057.jpg', code: 'K0012-5' },
  { id: 184, title: 'Etoffe', category: 'Essence', image: BASE + '3717407184_FXM9VLSx_20230210020921.jpg', code: 'K0011-3' },
  { id: 185, title: 'Etoffe', category: 'Essence', image: BASE + '3717407184_u5bDXaBr_20230210020852.jpg', code: 'K0011-5' },
  { id: 186, title: 'Grill', category: 'Essence', image: BASE + '3717407184_x02kBdV5_20230210020737.jpg', code: 'K0010-2' },
  { id: 187, title: 'Grill', category: 'Essence', image: BASE + '3717407184_xYh8yDp1_20230210020709.jpg', code: 'K0010-3' },
  { id: 188, title: 'Lesenti', category: 'Essence', image: BASE + '3717407184_rQJic8gq_20230210020439.jpg', code: 'K0009-1' },
  { id: 189, title: 'Lesenti', category: 'Essence', image: BASE + '3717407184_Bwpot8OU_20230210020406.jpg', code: 'K0009-2' },
  { id: 190, title: 'Portia', category: 'Essence', image: BASE + '3717407184_SgrmDiX7_20230210015008.jpg', code: 'K0008-1' },
  { id: 191, title: 'Portia', category: 'Essence', image: BASE + '3717407184_qkId7SY5_20230210014930.jpg', code: 'K0008-2' },
  { id: 192, title: 'Fav', category: 'Essence', image: BASE + '3717407184_FkRnYi63_20230210014638.jpg', code: 'K0007-2' },
  { id: 193, title: 'Fav', category: 'Essence', image: BASE + '3717407184_VLl41AyR_20230210014607.jpg', code: 'K0007-4' },
  { id: 194, title: 'Fav', category: 'Essence', image: BASE + '3717407184_9ZiQ3PSd_20230210014518.jpg', code: 'K0007-5' },
  { id: 195, title: 'Martin', category: 'Essence', image: BASE + '3717407184_9IpwbXey_20230210014406.jpg', code: 'K0006-1' },
  { id: 196, title: 'Martin', category: 'Essence', image: BASE + '3717407184_3gnD48xr_20230210014258.jpg', code: 'K0006-3' },
  { id: 197, title: 'Martin', category: 'Essence', image: BASE + '3717407184_IFVuSr4h_20230210014314.jpg', code: 'K0006-4' },
  { id: 198, title: 'Etoile', category: 'Essence', image: BASE + '3717407184_zfCpmR3S_20230210014045.jpg', code: 'K0005-1' },
  { id: 199, title: 'Etoile', category: 'Essence', image: BASE + '3717407184_FOqd0ys5_20230210014010.jpg', code: 'K0005-2' },
  { id: 200, title: 'Moire', category: 'Essence', image: BASE + '3717407184_bZqlzs8E_20230210013535.jpg', code: 'K0004-2' },
  { id: 201, title: 'Moire', category: 'Essence', image: BASE + '3717407184_F8YLwrEG_20230210110835.jpg', code: 'K0004-3' },
  { id: 202, title: 'Sand beach', category: 'Essence', image: BASE + '3717407184_i7kGjApI_20230210104823.jpg', code: 'K0003-2' },
  { id: 203, title: 'Sand beach', category: 'Essence', image: BASE + '3717407184_wQuNnOSt_20230210104750.jpg', code: 'K0003-3' },
  { id: 204, title: 'Tega', category: 'Essence', image: BASE + '3717407184_g47qvCam_20230210104703.jpg', code: 'K0002-1' },
  { id: 205, title: 'Tega', category: 'Essence', image: BASE + '3717407184_Ek5aHlc6_20230210104612.jpg', code: 'K0002-2' },
  { id: 206, title: 'Sand base', category: 'Essence', image: BASE + '3717407184_dqRslf0F_20230210104502.jpg', code: 'K0001-1' },
  { id: 207, title: 'Sand base', category: 'Essence', image: BASE + '3717407184_LHW2s8Jz_20230210104434.jpg', code: 'K0001-2' },
  { id: 208, title: 'Sand base', category: 'Essence', image: BASE + '3717407184_URWegCNQ_20230210104403.jpg', code: 'K0001-3' },
  { id: 209, title: 'Sand base', category: 'Essence', image: BASE + '3717407184_ERJ09nWg_20230210104331.jpg', code: 'K0001-4' },
  { id: 210, title: 'Sand base', category: 'Essence', image: BASE + '3717407184_LOBUQkgn_20230210104252.jpg', code: 'K0001-5' },
  { id: 211, title: 'Sand base', category: 'Essence', image: BASE + '3717407184_ijWJoQe4_20230210103920.jpg', code: 'K0001-6' },
  { id: 212, title: 'Darcy', category: 'Artis', image: BASE + '3717407184_NKHLc4tn_20230424045652.jpg', code: '88609-2' },
  { id: 213, title: 'Darcy base', category: 'Artis', image: BASE + '3717407184_1QWRFu48_20230424045540.jpg', code: '88608-1' },
  { id: 214, title: 'Darcy base', category: 'Artis', image: BASE + '3717407184_uE48mgsi_20230424045443.jpg', code: '88608-3' },
  { id: 215, title: 'Selvern', category: 'Artis', image: BASE + '3717407184_ZEfNTIsp_20230424045412.jpg', code: '88607-1' },
  { id: 216, title: 'Selvern', category: 'Artis', image: BASE + '3717407184_EjIHaiRW_20230424045343.jpg', code: '88607-2' },
  { id: 217, title: 'Elba', category: 'Artis', image: BASE + '3717407184_q8ba1HgF_20230424045223.jpg', code: '88606-1' },
  { id: 218, title: 'Elba', category: 'Artis', image: BASE + '3717407184_urtMeIqU_20230424045151.jpg', code: '88606-2' },
  { id: 219, title: 'Elba', category: 'Artis', image: BASE + '3717407184_XduhTi79_20230424045124.jpg', code: '88606-3' },
  { id: 220, title: 'Alfonso', category: 'Artis', image: BASE + '3717407184_71XrA64d_20230424045006.jpg', code: '88605-1' },
  { id: 221, title: 'Alfonso', category: 'Artis', image: BASE + '3717407184_rQOkeYKb_20230424044933.jpg', code: '88605-2' },
  { id: 222, title: 'Windsor', category: 'Artis', image: BASE + '3717407184_cX9NzBeh_20230424044656.jpg', code: '88604-2' },
  { id: 223, title: 'Windsor', category: 'Artis', image: BASE + '3717407184_0juZOh7b_20230424044557.jpg', code: '88604-4' },
  { id: 224, title: 'Windsor base', category: 'Artis', image: BASE + '3717407184_PX0DdsnR_20230424044423.jpg', code: '88603-1' },
  { id: 225, title: 'Bon', category: 'Artis', image: BASE + '3717407184_MNr4gFic_20230424044240.jpg', code: '88602-1' },
  { id: 226, title: 'Bon', category: 'Artis', image: BASE + '3717407184_G1lJ7tWQ_20230424044125.jpg', code: '88602-4' },
  { id: 227, title: 'Albert', category: 'Artis', image: BASE + '3717407184_zgmOPFqR_20230424044050.jpg', code: '88601-1' },
  { id: 228, title: 'Albert', category: 'Artis', image: BASE + '3717407184_vGYs4LIV_20230424043951.jpg', code: '88601-2' },
  { id: 229, title: 'Albert', category: 'Artis', image: BASE + '3717407184_9oMeWSnl_20230424043931.jpg', code: '88601-3' },
  { id: 230, title: 'Holio', category: 'Artis', image: BASE + '3717407184_MO8Ju2sN_20230424043751.jpg', code: '88600-2' },
  { id: 231, title: 'Holio', category: 'Artis', image: BASE + '3717407184_Xjp2Q3lM_20230424043719.jpg', code: '88600-3' },
  { id: 232, title: 'Hector', category: 'Artis', image: BASE + '3717407184_Ok1gsKdA_20230424043640.jpg', code: '88599-1' },
  { id: 233, title: 'Hector', category: 'Artis', image: BASE + '3717407184_WEXMLCqZ_20230424043538.jpg', code: '88599-3' },
  { id: 234, title: 'Comoro', category: 'Artis', image: BASE + '3717407184_noLC5d9G_20230424043348.jpg', code: '88598-3' },
  { id: 235, title: 'Nix', category: 'Artis', image: BASE + '3717407184_SWc6XVe0_20230424043309.jpg', code: '88597-1' },
  { id: 236, title: 'Nix', category: 'Artis', image: BASE + '3717407184_Vp4MEnKb_20230424043234.jpg', code: '88597-2' },
  { id: 237, title: 'Tread', category: 'Artis', image: BASE + '3717407184_DpgmGhjT_20230424043125.jpg', code: '88596-1' },
  { id: 238, title: 'Tread', category: 'Artis', image: BASE + '3717407184_U4fbJFmk_20230424043010.jpg', code: '88596-4' },
  { id: 239, title: 'Tudor', category: 'Artis', image: BASE + '3717407184_N8AHi05W_20230424042924.jpg', code: '88595-1' },
  { id: 240, title: 'Tudor', category: 'Artis', image: BASE + '3717407184_oLZtQgvY_20230424042846.jpg', code: '88595-2' },
  { id: 241, title: 'Tudor', category: 'Artis', image: BASE + '3717407184_KEcQsgyC_20230424042814.jpg', code: '88595-3' },
  { id: 242, title: 'Magella', category: 'Artis', image: BASE + '3717407184_w7lLf4Xd_20230424042737.jpg', code: '88594-1' },
  { id: 243, title: 'Olivi', category: 'Artis', image: BASE + '3717407184_eODfk7Cw_20230424042515.jpg', code: '88593-3' },
  { id: 244, title: 'Mush', category: 'Artis', image: BASE + '3717407184_tcuIYo1v_20230424042354.jpg', code: '88592-2' },
  { id: 245, title: 'Mush', category: 'Artis', image: BASE + '3717407184_Ff6N7YhB_20230424042313.jpg', code: '88592-3' },
  { id: 246, title: 'Hive', category: 'Artis', image: BASE + '3717407184_28h56Z30_20230424042236.jpg', code: '88591-1' },
  { id: 247, title: 'Hive', category: 'Artis', image: BASE + '3717407184_VP3Tg2R6_20230424042047.jpg', code: '88591-4' },
  { id: 248, title: 'Brook', category: 'Artis', image: BASE + '3717407184_UkyYR9Ov_20230424041928.jpg', code: '88590-2' },
  { id: 249, title: 'Brook', category: 'Artis', image: BASE + '3717407184_dyf1grSs_20230424041856.jpg', code: '88590-3' },
  { id: 250, title: 'Bamdi', category: 'Artis', image: BASE + '3717407184_fVBgKkCA_20230424041815.jpg', code: '88589-1' },
  { id: 251, title: 'Bamdi', category: 'Artis', image: BASE + '3717407184_nVpBoAvs_20230424041718.jpg', code: '88589-2' },
  { id: 252, title: 'Milton', category: 'Motive', image: BASE + '3717407184_MCvdY7XR_20240104012639.jpg', code: '88631-1' },
  { id: 253, title: 'Milton', category: 'Motive', image: BASE + '3717407184_NwqfXRe2_20240104012444.jpg', code: '88631-2' },
  { id: 254, title: 'Avery', category: 'Motive', image: BASE + '3717407184_gRhG6CiP_20240104012159.jpg', code: '88630-3' },
  { id: 255, title: 'Louv', category: 'Motive', image: BASE + '3717407184_hZUksb0v_20240104012009.jpg', code: '88629-1' },
  { id: 256, title: 'Tate', category: 'Motive', image: BASE + '3717407184_6yh0gA7k_20240104011723.jpg', code: '88628-2' },
  { id: 257, title: 'Tate', category: 'Motive', image: BASE + '3717407184_AIWvJrM9_20240104011645.jpg', code: '88628-3' },
  { id: 258, title: 'Mori', category: 'Motive', image: BASE + '3717407184_UKDBRXvm_20240104011531.jpg', code: '88627-1' },
  { id: 259, title: 'Mori', category: 'Motive', image: BASE + '3717407184_apyDBOxf_20240104011442.jpg', code: '88627-2' },
  { id: 260, title: 'Hopper', category: 'Motive', image: BASE + '3717407184_hZzgq7lB_20240104011103.jpg', code: '88626-2' },
  { id: 261, title: 'Hopper', category: 'Motive', image: BASE + '3717407184_Vcz5OdgA_20240104010950.jpg', code: '88626-4' },
  { id: 262, title: 'Uffi', category: 'Motive', image: BASE + '3717407184_E0HqA89c_20240104010743.jpg', code: '88625-1' },
  { id: 263, title: 'Uffi', category: 'Motive', image: BASE + '3717407184_On6pRkzy_20240104010711.jpg', code: '88625-2' },
  { id: 264, title: 'Uffi', category: 'Motive', image: BASE + '3717407184_WjYQ6OwB_20240104010423.jpg', code: '88625-3' },
  { id: 265, title: 'Mucem', category: 'Motive', image: BASE + '3717407184_q08nBv3l_20240104010214.jpg', code: '88624-1' },
  { id: 266, title: 'Lope', category: 'Motive', image: BASE + '3717407184_N9uw1tFf_20240104125628.jpg', code: '88623-1' },
  { id: 267, title: 'Lope', category: 'Motive', image: BASE + '3717407184_cKjIxF3D_20240104125552.jpg', code: '88623-2' },
  { id: 268, title: 'Jacquemart', category: 'Motive', image: BASE + '3717407184_ClopfWKQ_20240104125349.jpg', code: '88622-2' },
  { id: 269, title: 'Bargel', category: 'Motive', image: BASE + '3717407184_q3ZVCrYb_20240104125246.jpg', code: '88621-1' },
  { id: 270, title: 'Orsay', category: 'Motive', image: BASE + '3717407184_BmnvK1Cg_20240104112622.jpg', code: '88620-1' },
  { id: 271, title: 'Auvoir', category: 'Motive', image: BASE + '3717407184_Hwlakqx1_20240104105539.jpg', code: '88618-1' },
  { id: 272, title: 'Auvoir', category: 'Motive', image: BASE + '3717407184_kyUtRKEm_20240104105438.jpg', code: '88618-3' },
  { id: 273, title: 'Britain', category: 'Motive', image: BASE + '3717407184_9M2UaHsQ_20240104105321.jpg', code: '88617-1' },
  { id: 274, title: 'Britain', category: 'Motive', image: BASE + '3717407184_6TaqXlGD_20240104105222.jpg', code: '88617-3' },
  { id: 275, title: 'Renoir', category: 'Motive', image: BASE + '3717407184_xmDT2KGz_20240104104929.jpg', code: '88616-1' },
  { id: 276, title: 'Renoir', category: 'Motive', image: BASE + '3717407184_bHpQLoS3_20240104104811.jpg', code: '88616-4' },
  { id: 277, title: 'Prado', category: 'Motive', image: BASE + '3717407184_FOPWhm2k_20240104104423.jpg', code: '88614-1' },
  { id: 278, title: 'Prado', category: 'Motive', image: BASE + '3717407184_HdyZhkWt_20240104104351.jpg', code: '88614-2' },
  { id: 279, title: 'Prado base', category: 'Motive', image: BASE + '3717407184_7U5WHG2o_20240104104111.jpg', code: '88613-2' },
  { id: 280, title: 'Ghent', category: 'Motive', image: BASE + '3717407184_5pbIXtRV_20240104103854.jpg', code: '88612-2' },
  { id: 281, title: 'Ghent', category: 'Motive', image: BASE + '3717407184_503LAVR6_20240104103747.jpg', code: '88612-3' },
  { id: 282, title: 'Auver', category: 'Motive', image: BASE + '3717407184_Nm5kubSh_20240104103638.jpg', code: '88611-2' },
  { id: 283, title: 'Auver', category: 'Motive', image: BASE + '3717407184_lGe9qUK7_20240104103559.jpg', code: '88611-3' },
  { id: 284, title: 'Auver base', category: 'Motive', image: BASE + '3717407184_aiCprOFI_20240104103309.jpg', code: '88610-1' },
  { id: 285, title: 'Auver base', category: 'Motive', image: BASE + '3717407184_7TPizakX_20240104103225.jpg', code: '88610-2' },
]

const categories = ['All', 'Beyond', 'Decent', 'Dream World', 'Natural', 'Essence', 'Artis', 'Motive']

const catalogueInfo = {
  Beyond: {
    tagline: 'Design & Fabric Collection',
    description: 'Divided into two sections — a variety of trendy design patterns and a fabric section expressing the deep texture of various fabric materials.',
  },
  Decent: {
    tagline: 'Refined Everyday Elegance',
    description: 'A collection of understated, sophisticated wallpapers crafted for spaces that value quiet luxury — timeless textures and gentle tones for modern living.',
  },
  'Dream World': {
    tagline: 'A World of Imagination for Kids',
    description: 'Vibrant, playful designs that spark creativity and bring colour to every corner of a child\'s room — from adventurous characters to dreamy landscapes.',
  },
  Natural: {
    tagline: 'Earth-Inspired Textures',
    description: 'Bringing the beauty of the natural world indoors — stone, wood, botanical, and organic motifs that create warmth and authenticity in any space.',
  },
  Essence: {
    tagline: 'Pure Texture, Pure Form',
    description: 'A celebration of material and surface — plaster effects, fabric weaves and subtle tones that layer depth and character onto any wall.',
  },
  Artis: {
    tagline: 'Artistic Expression on Every Wall',
    description: 'Bold patterns, refined geometrics and designer-curated motifs that transform walls into a canvas — for interiors that make a statement.',
  },
  Motive: {
    tagline: 'Pattern with Purpose',
    description: 'Structured, contemporary designs that bring rhythm and visual energy to a room — ideal for feature walls and modern interior schemes.',
  },
}

export default function Collections() {
  const [active, setActive] = useState('All')
  const [lightbox, setLightbox] = useState(null)

  const filtered = active === 'All' ? allProducts : allProducts.filter(p => p.category === active)

  return (
    <main className="pt-20">
      {/* Page Header */}
      <section className="py-20 bg-offwhite text-center">
        <FadeIn>
          <p className="text-gold text-xs tracking-[0.3em] uppercase font-body mb-3">Browse</p>
          <h1 className="font-display text-5xl md:text-6xl text-dark">Our Collections</h1>
          <p className="text-dark/60 font-body mt-4 max-w-lg mx-auto">
            Explore thousands of wallpaper designs curated for every taste and space.
          </p>
        </FadeIn>
      </section>

      {/* Filters */}
      <section className="py-8 bg-white border-b border-cream sticky top-20 z-30">
        <div className="max-w-7xl mx-auto px-6 flex gap-3 overflow-x-auto no-scrollbar">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`shrink-0 px-5 py-2 text-sm font-body font-medium rounded-sm border transition-all ${
                active === cat
                  ? 'bg-dark text-white border-dark'
                  : 'bg-white text-dark border-cream hover:border-dark'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Catalogue Description */}
      <AnimatePresence mode="wait">
        {active !== 'All' && catalogueInfo[active] && (
          <motion.section
            key={active}
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.4 }}
            className="bg-cream/50 border-b border-cream"
          >
            <div className="max-w-7xl mx-auto px-6 py-10 text-center">
              <p className="text-gold text-xs tracking-[0.3em] uppercase font-body mb-2">{active}</p>
              <h2 className="font-display text-3xl md:text-4xl text-dark mb-3">{catalogueInfo[active].tagline}</h2>
              <p className="text-dark/60 font-body max-w-xl mx-auto text-sm leading-relaxed">{catalogueInfo[active].description}</p>
            </div>
          </motion.section>
        )}
      </AnimatePresence>

      {/* Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            <AnimatePresence>
              {filtered.map(product => (
                <motion.div
                  key={product.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="group cursor-pointer"
                  onClick={() => setLightbox(product)}
                >
                  <div className="relative overflow-hidden rounded-sm aspect-[3/4]">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/25 transition-all duration-300 flex items-center justify-center">
                      <HiSearch size={28} className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                    <div className="absolute top-3 left-3">
                      <span className="bg-gold text-white text-xs px-2 py-1 rounded-sm font-body">{product.category}</span>
                    </div>
                  </div>
                  <div className="pt-3">
                    <h3 className="font-display text-base text-dark">{product.title}</h3>
                    <p className="text-dark/40 text-xs font-body mt-0.5">{product.code}</p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
            onClick={() => setLightbox(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white max-w-2xl w-full rounded-sm overflow-hidden"
              onClick={e => e.stopPropagation()}
            >
              <div className="relative">
                <img src={lightbox.image} alt={lightbox.title} className="w-full object-cover max-h-[60vh]" />
                <button
                  onClick={() => setLightbox(null)}
                  className="absolute top-4 right-4 bg-white/90 rounded-full p-1.5 hover:bg-white"
                  aria-label="Close"
                >
                  <HiX size={20} className="text-dark" />
                </button>
              </div>
              <div className="p-6 flex items-center justify-between">
                <div>
                  <h2 className="font-display text-2xl text-dark">{lightbox.title}</h2>
                  <p className="text-dark/50 text-sm font-body mt-1">
                    {lightbox.category} · {lightbox.code}
                  </p>
                </div>
                <Link
                  to="/contact"
                  onClick={() => setLightbox(null)}
                  className="bg-gold text-white text-sm font-body font-medium px-6 py-2.5 rounded-sm hover:bg-opacity-90 transition-all"
                >
                  Enquire Now
                </Link>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <MarqueeStrip light />
    </main>
  )
}
