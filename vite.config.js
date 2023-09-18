import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import vue from '@vitejs/plugin-vue';

export default defineConfig({

    resolve: {
        dedupe: [
          'vue'
        ]
      },
      
    plugins: [
        laravel({
            input: ['resources/css/app.css', 'resources/js/app.js', 'resources/js/scrollbar.js'],
            refresh: true,
        }),
        vue({
            template:{
                transformAssetUrls:{

                    base: null,
                    includeAbsolute:false
                }
            }
        })
    ], 
    build: {
        /** If you set esmExternals to true, this plugins assumes that 
              all external dependencies are ES modules */
    
        commonjsOptions: {
          esmExternals: true,
        },
      },
});
