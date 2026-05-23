# farm-int-landing

JustVible Farm INT scaffold — minimal Expo Router landing page for integration testing.

## Web export

```bash
npm run export:web
```

This command chains:
1. `expo export -p web --output-dir dist` — build the web bundle
2. `python scripts/fix-vendor-paths.py` — rename `dist/assets/node_modules` → `dist/assets/_vendor` so Cloudflare Pages does not filter out vendor assets (CF Pages strips `node_modules` directories on upload, causing 404s on icon/font chunks)

**Requires Python 3** to be available in the build environment. The Farm runner container image includes Python 3.
