import  weapon_ak47  from "./weapons/ak47.svg";
import  weapon_aug  from "./weapons/aug.svg";
import  weapon_awp  from "./weapons/awp_2.svg";
import  weapon_bayonet  from "./weapons/bayonet.svg";
import  weapon_bizon  from "./weapons/bizon.svg";
import  weapon_c4  from "./weapons/c4.svg";
import  weapon_cz75a  from "./weapons/cz75a.svg";
import  weapon_deagle  from "./weapons/deagle.svg";
import  weapon_decoy  from "./weapons/decoy.svg";
import  weapon_elite  from "./weapons/elite.svg";
import  weapon_famas  from "./weapons/famas.svg";
import  weapon_fiveseven  from "./weapons/fiveseven.svg";
import  weapon_flashbang  from "./weapons/flashbang_2.svg";
import  weapon_g3sg1  from "./weapons/g3sg1.svg";
import  weapon_galilar  from "./weapons/galilar.svg";
import  weapon_glock  from "./weapons/glock.svg";
import  weapon_hegrenade  from "./weapons/hegrenade.svg";
import  weapon_hkp2000  from "./weapons/hkp2000.svg";
import  weapon_incgrenade  from "./weapons/incgrenade.svg";
import  weapon_inferno  from "./weapons/inferno.svg";
import  weapon_knife  from "./weapons/knife.svg";
import  weapon_knife_bayonet  from "./weapons/knife_bayonet.svg";
import  weapon_knife_butterfly  from "./weapons/knife_butterfly.svg";
import  weapon_knife_canis  from "./weapons/knife_canis.svg";
import  weapon_knife_cord  from "./weapons/knife_cord.svg";
import  weapon_knife_css  from "./weapons/knife_css.svg";
import  weapon_knife_falchion  from "./weapons/knife_falchion.svg";
import  weapon_knife_flip  from "./weapons/knife_flip.svg";
import  weapon_knife_gut  from "./weapons/knife_gut.svg";
import  weapon_knife_gypsy_jackknife  from "./weapons/knife_gypsy_jackknife.svg";
import  weapon_knife_karambit  from "./weapons/knife_karambit.svg";
import  weapon_knife_m9_bayonet  from "./weapons/knife_m9_bayonet.svg";
import  weapon_knife_outdoor  from "./weapons/knife_outdoor.svg";
import  weapon_knife_push  from "./weapons/knife_push.svg";
import  weapon_knife_skeleton  from "./weapons/knife_skeleton.svg";
import  weapon_knife_stiletto  from "./weapons/knife_stiletto.svg";
import  weapon_knife_survival_bowie  from "./weapons/knife_survival_bowie.svg";
import  weapon_knife_t  from "./weapons/knife_t.svg";
import  weapon_knife_tactical  from "./weapons/knife_tactical.svg";
import  weapon_knife_ursus  from "./weapons/knife_ursus.svg";
import  weapon_knife_widowmaker  from "./weapons/knife_widowmaker.svg";
import  weapon_m249  from "./weapons/m249.svg";
import  weapon_m4a1  from "./weapons/m4a1.svg";
import  weapon_m4a1_silencer  from "./weapons/m4a1_silencer.svg";
import  weapon_m4a1_silencer_off  from "./weapons/m4a1_silencer_off.svg";
import  weapon_mac10  from "./weapons/mac10.svg";
import  weapon_mag7  from "./weapons/mag7.svg";
import  weapon_molotov  from "./weapons/molotov.svg";
import  weapon_mp5sd  from "./weapons/mp5sd.svg";
import  weapon_mp7  from "./weapons/mp7.svg";
import  weapon_mp9  from "./weapons/mp9.svg";
import  weapon_negev  from "./weapons/negev.svg";
import  weapon_nova  from "./weapons/nova.svg";
import  weapon_out  from "./weapons/out.svg";
import  weapon_p250  from "./weapons/p250.svg";
import  weapon_p90  from "./weapons/p90.svg";
import  weapon_revolver  from "./weapons/revolver.svg";
import  weapon_sawedoff  from "./weapons/sawedoff.svg";
import  weapon_scar20  from "./weapons/scar20.svg";
import  weapon_sg556  from "./weapons/sg556.svg";
import  weapon_smokegrenade  from "./weapons/smokegrenade.svg";
import  weapon_ssg08  from "./weapons/ssg08_2.svg";
import  weapon_taser  from "./weapons/taser.svg";
import  weapon_tec9  from "./weapons/tec9.svg";
import  weapon_trigger_hurt  from "./weapons/trigger_hurt.svg";
import  weapon_ump45  from "./weapons/ump45.svg";
import  weapon_usp_silencer  from "./weapons/usp_silencer.svg";
import weapon_usp_silencer_off  from "./weapons/usp_silencer_off.svg";
import weapon_world  from "./weapons/world.svg";
import weapon_xm1014 from "./weapons/xm1014.svg";
import blank from "./weapons/blank.png";

const gunMap = new Map();
gunMap.set("weapon_ak47",weapon_ak47);
gunMap.set("weapon_aug",weapon_aug);
gunMap.set("weapon_awp",weapon_awp);
gunMap.set("weapon_bayonet",weapon_bayonet);
gunMap.set("weapon_bizon",weapon_bizon);
gunMap.set("weapon_c4",weapon_c4);
gunMap.set("weapon_cz75a",weapon_cz75a);
gunMap.set("weapon_deagle",weapon_deagle);
gunMap.set("weapon_decoy",weapon_decoy);
gunMap.set("weapon_elite",weapon_elite);
gunMap.set("weapon_famas",weapon_famas);
gunMap.set("weapon_fiveseven",weapon_fiveseven);
gunMap.set("weapon_flashbang",weapon_flashbang);
gunMap.set("weapon_g3sg1",weapon_g3sg1);
gunMap.set("weapon_galilar",weapon_galilar);
gunMap.set("weapon_glock",weapon_glock);
gunMap.set("weapon_hegrenade",weapon_hegrenade);
gunMap.set("weapon_hkp2000",weapon_hkp2000);
gunMap.set("weapon_incgrenade",weapon_incgrenade);
gunMap.set("weapon_inferno",weapon_inferno);
gunMap.set("weapon_knife",weapon_knife);
gunMap.set("weapon_knife_bayonet",weapon_knife_bayonet);
gunMap.set("weapon_knife_butterfly",weapon_knife_butterfly);
gunMap.set("weapon_knife_canis",weapon_knife_canis);
gunMap.set("weapon_knife_cord",weapon_knife_cord);
gunMap.set("weapon_knife_css",weapon_knife_css);
gunMap.set("weapon_knife_falchion",weapon_knife_falchion);
gunMap.set("weapon_knife_flip",weapon_knife_flip);
gunMap.set("weapon_knife_gut",weapon_knife_gut);
gunMap.set("weapon_knife_gypsy_jackknife",weapon_knife_gypsy_jackknife);
gunMap.set("weapon_knife_karambit",weapon_knife_karambit);
gunMap.set("weapon_knife_m9_bayonet",weapon_knife_m9_bayonet);
gunMap.set("weapon_knife_outdoor",weapon_knife_outdoor);
gunMap.set("weapon_knife_push",weapon_knife_push);
gunMap.set("weapon_knife_skeleton",weapon_knife_skeleton);
gunMap.set("weapon_knife_stiletto",weapon_knife_stiletto);
gunMap.set("weapon_knife_survival_bowie",weapon_knife_survival_bowie);
gunMap.set("weapon_knife_t",weapon_knife_t);
gunMap.set("weapon_knife_tactical",weapon_knife_tactical);
gunMap.set("weapon_knife_ursus",weapon_knife_ursus);
gunMap.set("weapon_knife_widowmaker",weapon_knife_widowmaker);
gunMap.set("weapon_m249",weapon_m249);
gunMap.set("weapon_m4a1",weapon_m4a1);
gunMap.set("weapon_m4a1_silencer",weapon_m4a1_silencer);
gunMap.set("weapon_m4a1_silencer_off",weapon_m4a1_silencer_off);
gunMap.set("weapon_mac10",weapon_mac10);
gunMap.set("weapon_mag7",weapon_mag7);
gunMap.set("weapon_molotov",weapon_molotov);
gunMap.set("weapon_mp5sd",weapon_mp5sd);
gunMap.set("weapon_mp7",weapon_mp7);
gunMap.set("weapon_mp9",weapon_mp9);
gunMap.set("weapon_negev",weapon_negev);
gunMap.set("weapon_nova",weapon_nova);
gunMap.set("weapon_out",weapon_out);
gunMap.set("weapon_p250",weapon_p250);
gunMap.set("weapon_p90",weapon_p90);
gunMap.set("weapon_revolver",weapon_revolver);
gunMap.set("weapon_sawedoff",weapon_sawedoff);
gunMap.set("weapon_scar20",weapon_scar20);
gunMap.set("weapon_sg556",weapon_sg556);
gunMap.set("weapon_smokegrenade",weapon_smokegrenade);
gunMap.set("weapon_ssg08",weapon_ssg08);
gunMap.set("weapon_taser",weapon_taser);
gunMap.set("weapon_tec9",weapon_tec9);
gunMap.set("weapon_trigger_hurt",weapon_trigger_hurt);
gunMap.set("weapon_ump45",weapon_ump45);
gunMap.set("weapon_usp_silencer",weapon_usp_silencer);
gunMap.set("weapon_usp_silencer_off",weapon_usp_silencer_off);
gunMap.set("weapon_world",weapon_world);
gunMap.set("weapon_xm1014",weapon_xm1014);
gunMap.set("",blank);
gunMap.set(0, weapon_incgrenade);
gunMap.set(1, weapon_molotov);
gunMap.set(2,weapon_smokegrenade);
gunMap.set(3,weapon_flashbang);
gunMap.set(4,weapon_hegrenade);
gunMap.set(5,weapon_decoy);
const NadeOrder = new Map();
NadeOrder.set("weapon_incgrenade" , 0);
NadeOrder.set("weapon_molotov" , 1);
NadeOrder.set("weapon_smokegrenade",2);
NadeOrder.set("weapon_flashbang",3);
NadeOrder.set("weapon_hegrenade",4);
NadeOrder.set("weapon_decoy",5);
export {
    gunMap,
    NadeOrder
};
