import js from '@eslint/js';
import typescriptParser from '@typescript-eslint/parser';
import typescriptEslintPlugin from '@typescript-eslint/eslint-plugin';
import prettierPlugin from 'eslint-plugin-prettier';
import prettierConfig from 'eslint-config-prettier';

export default [
  js.configs.recommended,
  {
    files: ['**/*.ts', '**/*.js'],
    languageOptions: {
      parser: typescriptParser,
      ecmaVersion: 2020,
      sourceType: 'module',
      globals: {
        console: 'readonly',
        module: 'readonly',
        window: 'readonly',
        document: 'readonly',
        jest: 'readonly',
      },
      parserOptions: {
        project: './tsconfig.json', // TypeScript 설정 파일을 명시적으로 지정
      },
    },
    plugins: {
      '@typescript-eslint': typescriptEslintPlugin,
      prettier: prettierPlugin,
    },
    rules: {
      'prettier/prettier': [
        'error',
        {
          singleQuote: true,
          semi: true,
          useTabs: false,
          tabWidth: 2,
          printWidth: 80,
          bracketSpacing: true,
          arrowParens: 'avoid',
          endOfLine: 'lf',
        },
      ],
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/explicit-function-return-type': 'error', // 함수 반환 타입 명시 규칙 추가
      'prefer-const': 'off',
    },
  },
  prettierConfig,
];
