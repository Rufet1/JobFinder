import { Typography } from '@material-ui/core'
import React from 'react'

const Rules = () => {
  return (
    <div>
      <Typography variant='h4'>Qaydalar</Typography>
      <ol style={{marginTop : '20px',paddingLeft : '20px'}}>
        <li>Bir vakansiyanın 30 gün müddətinə yerləşdirilməsi pulsuz həyata keçirilir.</li>
        <li>Vakansiya yalnız Azərbaycan daxilində olan işləri əhatə etməlidir.</li>
        <li>Vakansiya haqqında elanın ən qısa müddətdə dərc olunması üçün formanın doldurulmasına dair bütün təlimatlara ciddi riayət olunmalıdır. Səliqəsiz doldurulmuş formalar redaktəyə məruz qalacaq və dərhal dərc olunmayacaq.</li>
        <li>Elanların yalnız baş (BÖYÜK) hərflərlə və ya başqa əlifba ilə (translitlə) yazılması qadağandır. Elan bütünlüklə bir dildə olmalıdır.</li>
        <li>Şirkətin adı olan sütunda şirkətin rəsmi, hüquqi adı, həmin müəssisə holdinq tərkibindədirsə, holdinqin adı və şirkətin fəaliyyət istiqaməti (növü) qeyd olunmalıdır.</li>
        <li>Əlaqələr yazılan sütunda aktiv şəhər telefonlarının nömrələri və şirkətin korporativ elektron ünvanları qeyd olunmalıdır.</li>
        <li>İstifadəçi 5 və 6-cı bəndlərə riayət etmədikdə, elan ödənişli əsaslarla qəbul edilir.</li>
        <li>Tibb müəssisələrinin elanları və ya tibbi tərkibli, alış-veriş haqqında, o cümlədən saytda onlayn-satışlı elanlar pulludur.</li>
        <li>«Əmək haqqı» sütununun doldurulması mütləqdir, məbləğ AZN-lə göstərilməlidir. Əgər əmək haqqı 500 AZN-ə qədərdirsə, əmək haqqı diapazonu 200 AZN-i; 1000 AZN-ə qədərdirsə 300 AZN-i; 2000 AZN-ə qədərdirsə, 500 AZN-i aşmamalıdır.</li>
        <li>Dərc olunmuş elanda əlaqə nömrələrinin, vakansiyanın adının dəyişdirilməsi qadağandır.</li>
        <li>«Namizədə olan tələblər» mümkün qədər ətraflı yazılmalıdır.</li>
      </ol>
    </div>
  )
}

export default Rules
