import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';

const html = await readFile(new URL('../dist/index.html', import.meta.url), 'utf8');

test('the generated page sends PoolOps calls to action to Ábaco', () => {
  const links = [...html.matchAll(/<a\b[^>]*href="https:\/\/abaco\.doscientos\.es"[^>]*>([\s\S]*?)<\/a>/g)];
  assert.ok(links.length >= 4);
  for (const [, content] of links) assert.match(content, /PoolOps/);
  assert.doesNotMatch(html, /Probar Ábaco/);
});

test('navigation and icon references point to existing elements', () => {
  const ids = [...html.matchAll(/\bid="([^"]+)"/g)].map((match) => match[1]);
  assert.equal(new Set(ids).size, ids.length);
  for (const [, id] of html.matchAll(/\bhref="#([^"]+)"/g)) assert.ok(ids.includes(id), id);
});

test('preserves the brand, domain and development disclosure', () => {
  assert.match(html, /<html lang="es"/);
  assert.match(html, /rel="canonical" href="https:\/\/poolops\.doscientos\.es\/"/);
  assert.match(html, /PoolOps es la presentación de Ábaco/);
  assert.match(html, /Funciones de campo en desarrollo/);
  assert.doesNotMatch(html, /<script\b/i);
});

test('publishes the static resources and sitemap', async () => {
  for (const name of ['styles.css', 'favicon.svg', 'robots.txt', 'sitemap.xml']) {
    assert.ok((await readFile(new URL(`../dist/${name}`, import.meta.url))).length > 0, name);
  }
  assert.match(await readFile(new URL('../dist/sitemap.xml', import.meta.url), 'utf8'), /https:\/\/poolops\.doscientos\.es\//);
});