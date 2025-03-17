import type { App } from 'vue';
import { createYmaps } from 'vue-yandex-maps';

export default (app: App) => {
	app.use(createYmaps({
		apikey: import.meta.env.PUBLIC_YM_TOKEN,
	}));
};