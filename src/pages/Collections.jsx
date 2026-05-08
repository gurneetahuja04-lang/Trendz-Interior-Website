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
]

const categories = ['All', 'Beyond', 'Decent', 'Dream World']

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
