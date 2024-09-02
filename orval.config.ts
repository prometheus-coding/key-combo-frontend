import {defineConfig} from 'orval'


export default defineConfig({
    api:{
        input : `openapi.yaml`,
        output: {
            mode: 'split',
            target: './api/generated.ts',
            client: 'swr',
            override: {
                mutator: {
                  path: './src/axios/index.ts',
                  name: 'customInstance',
                },
              },
        },
    }
})