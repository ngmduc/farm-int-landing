"""
Post-export script: rename dist/assets/node_modules → dist/assets/_vendor
and update JS bundle references.

Cloudflare Pages filters out 'node_modules' directories during upload.
This script renames the directory so font/icon assets are included.
"""
import os
import shutil
import glob

SRC = os.path.join("dist", "assets", "node_modules")
DST = os.path.join("dist", "assets", "_vendor")

if not os.path.exists(SRC):
    print("No node_modules in dist/assets — skipping")
    exit(0)

# Rename directory
if os.path.exists(DST):
    shutil.rmtree(DST)
shutil.copytree(SRC, DST)
shutil.rmtree(SRC)
print(f"Renamed {SRC} -> {DST}")

# Update JS bundle references
for js_file in glob.glob(os.path.join("dist", "_expo", "static", "js", "web", "*.js")):
    with open(js_file, "r", encoding="utf-8") as f:
        content = f.read()
    updated = content.replace("assets/node_modules/", "assets/_vendor/")
    with open(js_file, "w", encoding="utf-8") as f:
        f.write(updated)
    count = updated.count("_vendor")
    print(f"Updated {js_file}: {count} refs")

print("Done — ready for CF Pages deploy")
