"""Inline css/ and js/ into dist/index.html (single file). Run: python build.py"""
import re, pathlib
r = pathlib.Path(__file__).parent
h = (r / "index.html").read_text(encoding="utf-8")
def inline(pat, wrap):
    def f(m):
        return wrap("\n".join((r / p).read_text(encoding="utf-8") for p in re.findall(pat, m.group(0))))
    return f
h = re.sub(r"<!-- build:css -->.*?<!-- endbuild -->", inline(r'href="(css/[^"]+)"', lambda t: f"<style>\n{t}\n</style>"), h, flags=re.S)
h = re.sub(r"<!-- build:js -->.*?<!-- endbuild -->", inline(r'src="(js/[^"]+)"', lambda t: f"<script>\n{t}\n</script>"), h, flags=re.S)
(r / "dist").mkdir(exist_ok=True)
(r / "dist" / "index.html").write_text(h, encoding="utf-8")
print("built dist/index.html")
