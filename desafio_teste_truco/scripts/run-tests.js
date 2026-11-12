import { spawnSync } from 'node:child_process';
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const isCoverage = process.argv.includes('--coverage');
const commandArgs = isCoverage
  ? ['--test', '--experimental-test-coverage']
  : ['--test'];

const result = spawnSync(process.execPath, commandArgs, {
  encoding: 'utf8',
  shell: false,
});

const output = `${result.stdout ?? ''}${result.stderr ?? ''}`;

mkdirSync('evidencias', { recursive: true });

const fileName = isCoverage ? 'cobertura.log' : 'testes.log';
writeFileSync(join('evidencias', fileName), output, 'utf8');

process.stdout.write(output);

if (result.error) {
  process.stderr.write(`\nErro ao executar os testes: ${result.error.message}\n`);
}

process.exit(result.status ?? 1);
