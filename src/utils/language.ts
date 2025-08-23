import { createI18n } from 'vue-i18n'
import { en_my } from '@/locales/en_my.ts'

export const i18n = createI18n({
    legacy: false,
    locale: 'en_my',
    fallbackLocale: 'en_my',
    messages: {
        en_my,
    }
})
