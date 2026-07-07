import recommendedIncremental from 'eslint-config-agent/recommended-incremental'

export default [
  { ignores: ['dist/**'] },
  ...recommendedIncremental,
  {
    languageOptions: {
      parserOptions: {
        projectService: {
          allowDefaultProject: ['eslint.config.mjs', 'src/*.spec.ts'],
        },
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
]
