import defaultSettings from '@/settings'

import {useI18n} from 'vue-i18n';
const {t}=useI18n()
const title = defaultSettings.title || 'GiiBee CMS 管理系统'

export default function getPageTitle(key) {
  const hasKey =  t(`route.${key}`)
  if (hasKey) {
    const pageName =  t(`route.${key}`)
    return `${pageName} - ${title}`
  }
  return `${title}`
}
