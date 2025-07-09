import { BrowserContext } from '@playwright/test';

export class CookieManager {
    constructor(private context: BrowserContext) {}

    async setCookies(options: {
        name?: string;
        value?: string;
        domain?: string;
        path?: string;
    } = {}) {
        const defaultOptions = {
            name: 'cookieconsent',
            value: 'accepted',
            domain: 'id.testit.software',
            path: '/',
        };

        await this.context.addCookies([{
            ...defaultOptions,
            ...options
        }]);
    }

    async setAuthCookies(options: {
        name?: string
        value?: string;
        domain?: string;
        path?: string;
    } = {}) {
        const defaultOptions = {
            name: 'backoffice',
            value: 'CfDJ8Kj6e9tZFl1CslB2jVhLamx9Q4TnsPB-_qHlsVsYhSMW-WszFkXapQNkoSIiKel3K-BtgJYD0j9ejIprPyE-vEuivDCoGMadOeNJ7oRKTmlYGzG7yALIkU6rncjt-5f6gB7geCizooXx0pdYPfRwIc2lPUTPBD0N7kolpbiQpGjyow6SP3b6NQRj4u6n9Jrw8ntwoaTh2dQUbzLeuVRlxDkQmTlNq7aZLB6_pWZa5-vVM-5HYCIUNc58BKqzWra_k91X9F97yw-QSNIbULcoYG77B-032j-NsJqkbFdmXYqXxyYjKDmMpPstC-cioeyMkPV_PKs54XcON4h0eI364NgYwRXAv2lI9wc_7c0JdXaRg-vv8LdeYy5dTp3Uy1TXZHqKSHPqBY9FiU6lszuJC9A0DtJ0U67HhuI7FSgAi17NI-vna0QLKHxlaOzTsBBfMZKgWb-W-dkhQhCA_04UzPM18Q3V_EziM3RS7W-5WNMc5YWp-e32ji9E_8TZt2QrZK3VkRJBPv3qFkZ7EEpnWQfYMtYbx631VMZhLHLnnNCuXV90tnFoKLkjTzAgWB7DY6NTRI21ZKhfoZ0TaM1iFzFck7xYrkKkchil5w56ySxDVTAgzZYjQXAhlFJDoi-HO1h0eqL_ChCud59DWERhValoPg4LrRJViQBAjKAV_AiKt--UBa5qJpmbOCKZoi5hUyBcn8wllh-KpjQtveO14TepWJ0RpnyxrK-FAfNzk8hPPvszNofSYvsi_R0FytOu1JLTTituiJi8BBRdRjmdHUKDj32_quRp5JDYeN_kfv2x-6rsBAvo3x90o8HFQt9f-6t8GXULXp2qcrurb2aOWfhswnAweT_tO5n7osZbZKDBOuW6tYLYbPP7hSxfhxo9mDINUBYdUTXOWbhbrBkxVry8lVd-wIzmKYHnAcCy87r1MC44s_RK7dpYbmSt6W4wf88GrVZ9DA4XmXLRQdnQo9bd3MxVRuIispxcgiKX8L1lz3NPijCH7rSjRQ5BgwOct3TKvxe9EFzXopHs7vkFXHyqeUoY_aySE8f1GqhofMtI0ET2ASdndpzxtPpWzi7D7BTNtXbp81V_8xTXTGA6f_-ilg5LwdlEWXFdpmupo_ojivJ04XrGLYu8IZVImX5-E55bCmy3ZPvj3NU69QVhJRYZYQCalVubeAc8Z0TaF3Am-dXl75vC9ZcOHe_lxTRHsHVUCFEVHfTbJG5IBwpLOcl6JDQWLLUUKRLZDIqbLKrmky0HHOLlwDZekxJIAsD7Q4McFtRarUVMRV75c9EYhcn7EKgRaBKlA32M5_lyi3iL5kzjYBALsSSbkBGGzFbCDl34wWhzUGDp3r_k7a-xmFF4N1cdPYaObIeQOSPElbc27AxbSabQVg9HOPiPpAKTlW6Ov1TK4Egn-lMgTd-B3Z0gPkBJ5em96cvtKPrMBa7o0pADzfrM_LIY39LIOER-s5PYh10TPAv8JI1PZTBKgN_HpYfeGhvMo4MCF8UTJsYXJUfno_p4YpxW8EyKSsZS7QHzrXSdvDNzp5x_SdhBkfhPmtLw-XKGjsDSv6FZvSdAFmIglpl5yYt_pkBHUrk9m1Z8GgNyTADd8EH-_QufZ8U',
            domain: 'id.testit.software',
            path: '/',
        };

        await this.context.addCookies([{
            ...defaultOptions,
            ...options
        }]);
    }
}